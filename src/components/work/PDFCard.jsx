import React, { useEffect, useRef, useState } from 'react';

const loadPdfjs = () => {
  if (window.pdfjsLib) return Promise.resolve();
  if (window.pdfjsPromise) return window.pdfjsPromise;

  window.pdfjsPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/build/pdf.min.js';
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/build/pdf.worker.min.js';
      resolve();
    };
    script.onerror = (err) => {
      window.pdfjsPromise = null; // Allow retrying on network error
      reject(err);
    };
    document.body.appendChild(script);
  });

  return window.pdfjsPromise;
};

const isImageUrl = (url) => {
  if (!url) return false;
  return /\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i.test(url) || url.startsWith('data:image');
};

const PDFCard = ({ pdfUrl, title, onClick, customAspectRatio }) => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(3 / 4); // Default to standard portrait

  const isImg = isImageUrl(pdfUrl);

  useEffect(() => {
    let isMounted = true;

    // Helper to render the first page of PDF
    const renderPdf = async (pdf) => {
      try {
        const page = await pdf.getPage(1);
        if (!isMounted) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        const unscaledViewport = page.getViewport({ scale: 1 });
        const width = unscaledViewport.width;
        const height = unscaledViewport.height;

        if (isMounted) {
          setAspectRatio(width / height);
        }

        const scale = 500 / height;
        const viewport = page.getViewport({ scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        if (isMounted) {
          setLoading(false);
        }
      } catch (err) {
        console.error('Error in PDF page rendering:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    // Helper to fetch files with a timeout
    const fetchWithTimeout = async (url, options = {}, timeout = 3500) => {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      try {
        const response = await fetch(url, {
          ...options,
          signal: controller.signal
        });
        clearTimeout(id);
        return response;
      } catch (error) {
        clearTimeout(id);
        throw error;
      }
    };

    // Local proxy mapper
    const getLocalProxyUrl = (url) => {
      if (url && url.startsWith('https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev')) {
        return url.replace('https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev', '/pdf-proxy');
      }
      return url;
    };

    const proxyTemplates = [
      (url) => getLocalProxyUrl(url), // Try local Vite server proxy first (CORS-free!)
      (url) => url, // Direct URL
      (url) => `https://corsproxy.io/?url=${encodeURIComponent(url)}`,
      (url) => `https://thingproxy.freeboard.io/fetch/${url}`,
      (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
      (url) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
    ];

    const renderFirstPage = async () => {
      try {
        await loadPdfjs();
        if (!isMounted) return;

        let arrayBuffer = null;
        let lastError = null;

        for (const getProxyUrl of proxyTemplates) {
          try {
            const targetUrl = getProxyUrl(pdfUrl);
            const response = await fetchWithTimeout(targetUrl, {}, 3500);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            arrayBuffer = await response.arrayBuffer();
            if (arrayBuffer && isMounted) {
              break;
            }
          } catch (err) {
            console.warn(`Fetch failed with proxy pattern:`, err);
            lastError = err;
          }
        }

        if (!arrayBuffer) {
          throw lastError || new Error("Failed to fetch PDF data after trying all proxies");
        }

        if (!isMounted) return;

        const loadingTask = window.pdfjsLib.getDocument({
          data: new Uint8Array(arrayBuffer),
        });

        const pdf = await loadingTask.promise;
        if (isMounted) {
          await renderPdf(pdf);
        }
      } catch (err) {
        console.error('Error rendering PDF thumbnail:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    if (isImg) {
      const img = new Image();
      img.src = pdfUrl;
      img.onload = () => {
        if (isMounted) {
          setAspectRatio(img.width / img.height);
          setLoading(false);
        }
      };
      img.onerror = () => {
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      };
    } else {
      renderFirstPage();
    }

    return () => {
      isMounted = false;
    };
  }, [pdfUrl, isImg]);

  const fileExtension = pdfUrl ? pdfUrl.split('.').pop().split('?')[0].toUpperCase() : '';

  return (
    <div
      onClick={onClick || (() => window.open(pdfUrl, '_blank'))}
      style={customAspectRatio ? {} : { aspectRatio: `${aspectRatio}` }}
      className={`group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer flex flex-col justify-between shadow-2xl ${isImg ? 'hover:border-blue-500/50' : 'hover:border-red-500/50'} transition-colors duration-500 w-full ${customAspectRatio || ''}`}
    >
      {/* Visual Content (Image or PDF Canvas) */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
        {loading && (
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin text-white z-20" />
        )}
        {error && (
          <div className="text-white/40 text-center px-4 z-20">
            <span className="block text-4xl mb-2">{isImg ? '🖼️' : '📄'}</span>
            <span className="text-sm font-medium">{isImg ? 'Click to View Image' : 'Click to View PDF'}</span>
          </div>
        )}

        {!loading && !error && (
          isImg ? (
            <img
              src={pdfUrl}
              alt={title}
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:scale-102 transition-transform duration-700"
            />
          ) : (
            <canvas
              ref={canvasRef}
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:scale-102 transition-transform duration-700"
            />
          )
        )}
      </div>

      {/* Badge Indicator */}
      <div className={`absolute top-4 right-4 ${isImg ? 'bg-blue-600/90' : 'bg-[#243E84]'} backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md tracking-wider flex items-center gap-1 z-10 shadow-lg`}>
        {isImg ? (
          <>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 00-1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {fileExtension || 'IMAGE'}
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            PDF
          </>
        )}
      </div>

      {/* Hover Information Overlay */}
      <div className="absolute inset-0 bg-linear-to-t  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 pointer-events-none">
        <h3 className="text-white text-lg font-bold tracking-tight mb-1">{title}</h3>
        <p className={`${isImg ? 'text-blue-400' : 'text-red-400'} text-sm font-medium flex items-center gap-1`}>
          {/* {isImg ? 'View Image' : 'Open Document'} */}
          {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg> */}
        </p>
      </div>

      {/* Bottom Title bar (Visible by default) */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 border-t border-white/5 flex items-center justify-between z-10">
        <span className="text-white/80 font-medium truncate text-sm">{title}</span>
        <span className={`text-xs text-white/40 ${isImg ? 'group-hover:text-blue-400' : 'group-hover:text-red-400'} transition-colors`}>View</span>
      </div> */}
    </div>
  );
};

export default PDFCard;