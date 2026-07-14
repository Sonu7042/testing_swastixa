
const StaticPDFCard = ({ pdfUrl, imageUrl, title, onClick }) => {
  return (
    <div
      onClick={onClick || (() => window.open(pdfUrl, '_blank'))}
      className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer flex flex-col justify-between shadow-2xl hover:border-[#243E84] transition-colors duration-500 w-full aspect-[3/4]"
    >
      {/* Visual Content Display */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-black select-none">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title || "Document Preview"}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 via-neutral-950 to-black">
            <div className="absolute w-32 h-32 rounded-full bg-red-500/5 blur-2xl group-hover:bg-red-500/10 transition-all duration-700 pointer-events-none" />
            <div className="relative flex flex-col items-center gap-3 transform group-hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-red-500/30 transition-colors duration-500">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5-3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <span className="text-white/30 text-xs font-mono tracking-widest uppercase">Brand Book</span>
            </div>
          </div>
        )}
      </div>

      {/* PDF Badge */}
      <div className="absolute top-4 right-4 bg-[#243E84] backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md tracking-wider flex items-center gap-1 z-10 shadow-lg">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        PDF
      </div>

      {/* Hover Information Overlay */}
      <div className="absolute inset-0 bg-linear-to-t  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 pointer-events-none">
        {/* <h3 className="text-white text-lg font-bold tracking-tight mb-1">{title}</h3> */}
        {/* <p className="text-red-400 text-sm font-medium flex items-center gap-1">
          Open Document
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </p> */}
      </div>

      {/* Bottom Title bar (Visible by default) */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 border-t border-white/5 flex items-center justify-between z-10">
        <span className="text-white/80 font-medium truncate text-sm">{title}</span>
        <span className="text-xs text-white/40 group-hover:text-red-400 transition-colors">View</span>
      </div> */}
    </div>
  );
};

export default StaticPDFCard;
