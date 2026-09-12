import React, { lazy, Suspense } from 'react';
import Smmbutton from '../components/work/Smmbutton.jsx';

// Lazy loaded components
const PDFCard = lazy(() => import('../components/work/PDFCard.jsx'));

// Mock static data for other items in the staggered grid
const printProjects = [
  {
    id: 1,
    // title: "Blood Donation Camp Standee",
    thumbnail: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/print/printing-media-thumbnail.webp",
    type: "pdf",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/print/printing-media.pdf",
    colSpan: "md:col-span-12",
    aspectRatio: "aspect-[16/9]"
  },
];

const Print = () => {
  const handleOpenPdf = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <main className="bg-black min-h-screen pt-24 md:pt-40">
      <div className="relative z-10 px-4">
        {/* Header section */}
        <h1 className='text-white text-center text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter heading' data-aos="fade-down">
          Print Media & Identity
        </h1>

        <div className='text-white text-center mt-12 mb-16'>
          <Smmbutton />
        </div>
        {/* Portfolio Staggered Bento Grid */}
        <div className="max-w-[1600px] lg:max-w-[1400px] mx-auto pb-28">
          <Suspense fallback={
            <div className="w-full h-[50vh] flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            </div>
          }>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {printProjects.map((project, index) => {
                const animDelay = index * 100;

                if (project.pdfUrl) {
                  return (
                    <div
                      key={project.id}
                      className={`${project.colSpan} flex`}
                      data-aos="fade-up"
                      data-aos-delay={animDelay}
                    >
                      <PDFCard
                        pdfUrl={project.pdfUrl}
                        thumbnail={project.thumbnail}
                        title={project.title}
                        onClick={() => handleOpenPdf(project.pdfUrl)}
                        customAspectRatio={project.aspectRatio}
                      />
                    </div>
                  );
                }

                // Render premium static cards for mock portfolio items
                return (
                  <div
                    key={project.id}
                    className={`${project.colSpan} ${project.aspectRatio} group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 flex flex-col justify-between shadow-2xl transition-all duration-500 select-none ${project.glowColor}`}
                    data-aos="fade-up"
                    data-aos-delay={animDelay}
                  >
                    {/* Abstract Geometric Glow Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 group-hover:scale-110">
                      {project.svg}
                    </div>

                    {/* Category tag */}
                    <div className="absolute top-4 right-4 bg-white/5 backdrop-blur-md border border-white/10 text-white/50 text-[10px] font-bold font-mono px-2.5 py-1 rounded-md tracking-widest z-10 uppercase">
                      {project.category}
                    </div>

                    {/* Hover Information Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 pointer-events-none">
                      <span className={`text-xs font-bold font-mono tracking-widest uppercase mb-1 ${project.textColor}`}>
                        {project.category}
                      </span>
                      <h3 className="text-white text-lg font-bold tracking-tight mb-1">{project.title}</h3>
                      <p className="text-white/40 text-xs font-medium">Concept & Art Direction</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Print;
