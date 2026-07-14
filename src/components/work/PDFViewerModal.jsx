import React, { useEffect } from 'react';

const isImageUrl = (url) => {
  if (!url) return false;
  return /\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i.test(url) || url.startsWith('data:image');
};

const PDFViewerModal = ({ pdfUrl, isOpen, onClose, title }) => {
  const isImg = isImageUrl(pdfUrl);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !pdfUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-100 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 md:p-12 select-none"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Centered White Modal Box Container */}
      <div className={`bg-white rounded-3xl p-6 shadow-2xl flex flex-col items-stretch w-full relative overflow-hidden transition-all duration-300 ${
        isImg 
          ? 'max-w-sm md:max-w-xl h-auto max-h-[75vh]' 
          : 'max-w-6xl h-[80vh] md:h-[85vh]'
      }`}>
        
        {/* Absolute Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 transition-all cursor-pointer shadow-md"
          title="Close Viewer (Esc)"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main View Area */}
        <div className="flex-1 flex flex-col relative min-w-0">
          
          {/* Subtle Document Title Tag */}
          {title && (
            <div className="absolute top-2 left-4 z-10 pointer-events-none">
              <span className="text-neutral-400 text-[10px] font-mono tracking-wider uppercase">{title}</span>
            </div>
          )}

          {/* Page/Image Display Container */}
          <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden bg-neutral-50 rounded-2xl border border-neutral-100">
            {isImg ? (
              <img
                src={pdfUrl}
                alt={title || "Project Image"}
                className="max-w-full max-h-[58vh] object-contain rounded-2xl shadow-xl border border-neutral-200/30"
              />
            ) : (
              <iframe
                src={`${pdfUrl}#toolbar=1`}
                className="w-full h-full border-0 rounded-2xl bg-white shadow-inner"
                title={title || "PDF Document"}
              />
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PDFViewerModal;
