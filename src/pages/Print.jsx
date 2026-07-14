import React, { lazy, Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import local PDF assets
import filePdf from '../assets/asva1.jpg';
import eGrowthPdf from '../assets/eGrowth_Brand Guidlines.pdf';
import Smmbutton from '../components/work/Smmbutton.jsx';

// Lazy loaded components
const PDFCard = lazy(() => import('../components/work/PDFCard.jsx'));
const PDFViewerModal = lazy(() => import('../components/work/PDFViewerModal.jsx'));

// Mock static data for other items in the staggered grid
const printProjects = [
  // {
  //   id: 1,
  //   title: "A5 Leaflet",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/a-five-leaflet.pdf",
  //   // pdfUrl: eGrowthPdf,
  //   colSpan: "md:col-span-4",
  //   aspectRatio: "aspect-[3/4]"
  // },
  // {
  //   id: 2,
  //   title: "Brand Visiting Cards",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/all-visiting-card.pdf",
  //   colSpan: "md:col-span-8",
  //   aspectRatio: "aspect-[3/2]"
  // },
  // {
  //   id: 3,
  //   title: "App Identity Design",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/app.pdf",
  //   colSpan: "md:col-span-6",
  //   aspectRatio: "aspect-[1/1]"
  // },
  // {
  //   id: 4,
  //   title: "Bestmate Booklet",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/bestmate-booklet.pdf",
  //   colSpan: "md:col-span-6",
  //   aspectRatio: "aspect-[3/4]"
  // },
  // {
  //   id: 5,
  //   title: "Bestmate Folder File",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/bestmate-folder-file.pdf",
  //   colSpan: "md:col-span-7",
  //   aspectRatio: "aspect-[4/3]"
  // },
  {
    id: 6,
    // title: "Blood Donation Camp Standee",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/blood-donation-camp-standee-five.jpg",
    colSpan: "md:col-span-5",
    aspectRatio: "aspect-[1/2]"
  },
  // {
  //   id: 7,
  //   title: "Brochure Inside Design",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/brochure-inside-design-fivteen-two.pdf",
  //   colSpan: "md:col-span-5",
  //   aspectRatio: "aspect-[4/3]"
  // },
  {
    id: 8,
    // title: "Artistic Brooch Concept",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/brooch-two.jpg",
    colSpan: "md:col-span-7",
    aspectRatio: "aspect-[1/1]"
  },
  // {
  //   id: 9,
  //   title: "Corporate Envelope",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/envolep.pdf",
  //   colSpan: "md:col-span-4",
  //   aspectRatio: "aspect-[3/2]"
  // },
  // {
  //   id: 10,
  //   title: "Office Glass Branding",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/glass-branding.pdf",
  //   colSpan: "md:col-span-8",
  //   aspectRatio: "aspect-[16/9]"
  // },
  // {
  //   id: 11,
  //   title: "Invest Advise Portfolio",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/invest-advise-portfolio-three.pdf",
  //   colSpan: "md:col-span-6",
  //   aspectRatio: "aspect-[3/4]"
  // },
  {
    id: 12,
    // title: "Invitation Cards",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/invited-six.jpg",
    colSpan: "md:col-span-6",
    aspectRatio: "aspect-[4/3]"
  },
  // {
  //   id: 13,
  //   title: "Ishaadrii Application Form",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/ishaadrii-application-form.pdf",
  //   colSpan: "md:col-span-5",
  //   aspectRatio: "aspect-[3/4]"
  // },
  // {
  //   id: 14,
  //   title: "Ishaadrii Branding",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/ishaadrii.pdf",
  //   colSpan: "md:col-span-7",
  //   aspectRatio: "aspect-[3/4]"
  // },
  // {
  //   id: 15,
  //   title: "Marketing Leaflet",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/leaflet.pdf",
  //   colSpan: "md:col-span-4",
  //   aspectRatio: "aspect-[3/4]"
  // },
  // {
  //   id: 16,
  //   title: "Letterhead Design",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/letterhead-grace-aestheti.pdf",
  //   colSpan: "md:col-span-8",
  //   aspectRatio: "aspect-[3/4]"
  // },
  {
    id: 17,
    // title: "Marriage Invite - Style 1",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/mrg-one.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 18,
    // title: "Marriage Invite - Style 2",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/mrg-two.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 19,
    // title: "Marriage Invite - Style 3",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/mrg-three.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[3/4]"
  },
  // {
  //   id: 20,
  //   title: "Delivery Pickup Slip",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/pickup-slip.pdf",
  //   colSpan: "md:col-span-6",
  //   aspectRatio: "aspect-[3/4]"
  // },
  // {
  //   id: 21,
  //   title: "Pillar Branding Design",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/pillar-branding.pdf",
  //   colSpan: "md:col-span-6",
  //   aspectRatio: "aspect-[1/2]"
  // },
  {
    id: 22,
    // title: "Poll Kiosk Banner 1",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/poll-kiosk-one.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[1/2]"
  },
  {
    id: 23,
    // title: "Poll Kiosk Banner 2",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/poll-kiosk-two.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[1/2]"
  },
  {
    id: 24,
    // title: "Poll Kiosk Banner 3",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/poll-kiosk-three.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[1/2]"
  },
  {
    id: 25,
    // title: "Poll Kiosk Banner 5",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/poll-kiosk-five.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[1/2]"
  },
  {
    id: 26,
    // title: "Poll Kiosk Banner 6",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/poll-kiosk-six.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[1/2]"
  },
  {
    id: 27,
    // title: "Poll Kiosk Banner 7",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/poll-kiosk-seven.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[1/2]"
  },
  {
    id: 28,
    // title: "Portable Canopy 1",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/portable-canopy-one.jpg",
    colSpan: "md:col-span-6",
    aspectRatio: "aspect-[1/1]"
  },
  {
    id: 29,
    // title: "Portable Canopy 2",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/portable-canopy-two.jpg",
    colSpan: "md:col-span-6",
    aspectRatio: "aspect-[1/1]"
  },
  {
    id: 30,
    // title: "Portable Canopy 3",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/portable-canopy-three.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[1/1]"
  },
  {
    id: 31,
    // title: "Portable Canopy 4",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/portable-canopy-four.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[1/1]"
  },
  {
    id: 32,
    // title: "Portable Canopy 5",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/portable-canopy-five.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[1/1]"
  },
  // {
  //   id: 33,
  //   title: "A4 Size Price List",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/price-list-a-four-size.pdf",
  //   colSpan: "md:col-span-8",
  //   aspectRatio: "aspect-[3/4]"
  // },
  {
    id: 34,
    // title: "Clear Plastic Carrying Bag",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/sixtytwo-clear-plastic-carrying-bag-mockup-one.jpg",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 35,
    // title: "Exhibition Standee 1",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/standee-one.jpg",
    colSpan: "md:col-span-6",
    aspectRatio: "aspect-[1/2]"
  },
  {
    id: 36,
    // title: "Exhibition Standee 4",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/standee-four.jpg",
    colSpan: "md:col-span-6",
    aspectRatio: "aspect-[1/2]"
  },
  // {
  //   id: 37,
  //   title: "Brand Thank You Note",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/thank-you-note.pdf",
  //   colSpan: "md:col-span-5",
  //   aspectRatio: "aspect-[4/3]"
  // },
  {
    id: 38,
    // title: "Business Card Mockup",
    type: "jpg",
    pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/v-two-front.jpg",
    colSpan: "md:col-span-7",
    aspectRatio: "aspect-[3/2]"
  },
  // {
  //   id: 39,
    // title: "Office Wall Branding",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/wall-branding.pdf",
  //   colSpan: "md:col-span-12",
  //   aspectRatio: "aspect-[21/9]"
  // },
  // {
  //   id: 40,
    // title: "WashGuys Identity",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/wash-g.pdf",
  //   colSpan: "md:col-span-6",
  //   aspectRatio: "aspect-[3/4]"
  // },
  // {
  //   id: 41,
  //   title: "WashGuys Corporate Profile",
  //   type: "pdf",
  //   pdfUrl: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-print-pdf-image/washguys.pdf",
  //   colSpan: "md:col-span-6",
  //   aspectRatio: "aspect-[3/4]"
  // }
];

const Print = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleOpenPdf = (pdfUrl, title) => {
    if (window.innerWidth < 768) {
      window.open(pdfUrl, '_blank');
    } else {
      setSelectedPdf(pdfUrl);
      setSelectedTitle(title);
      setModalOpen(true);
    }
  };

  return (
    <main className="bg-black min-h-screen pt-24 md:pt-40">
      <div className="relative z-10 px-4">
        {/* Header section */}
        <h1 className='text-white text-center text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter heading' data-aos="fade-down">
          Print Media & Identity
        </h1>

        {/* Unified Navigation Tabs */}
        {/* <div className='text-white text-center mt-12 mb-16 flex flex-wrap justify-center gap-2' data-aos="fade-up">
          <button
            onClick={() => navigate('/work/SocialMedia')}
            className="text-xl m-2 md:m-4 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white"
          >
            Posts
          </button>
          <button
            onClick={() => navigate('/work/reels')}
            className="text-xl m-2 md:m-4 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white"
          >
            Reels
          </button>
          <button
            onClick={() => navigate('/work/Branding')}
            className="text-xl m-2 md:m-4 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white"
          >
            Branding
          </button>
          <button
            className="text-xl m-2 md:m-4 border px-8 py-2 rounded-sm transition-colors cursor-pointer bg-white text-black border-white"
          >
            Print
          </button>
        </div> */}
<div className='text-white text-center mt-12 mb-16'>
                    <Smmbutton />
                </div>
        {/* Portfolio Staggered Bento Grid */}
        <div className="max-w-[1100px] mx-auto pb-28">
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
                        title={project.title}
                        onClick={() => handleOpenPdf(project.pdfUrl, project.title)}
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

                    {/* Bottom Title bar (Visible by default) */}
                    {/* <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 border-t border-white/5 flex items-center justify-between z-10">
                      <span className="text-white/80 font-medium truncate text-sm">{project.title}</span>
                      <span className="text-xs text-white/40 group-hover:text-white transition-colors">Project</span>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </Suspense>
        </div>
      </div>

      {/* PDF Dynamic Viewer Modal */}
      <Suspense fallback={null}>
        <PDFViewerModal
          isOpen={modalOpen}
          pdfUrl={selectedPdf}
          title={selectedTitle}
          onClose={() => {
            setModalOpen(false);
            setSelectedPdf(null);
            setSelectedTitle("");
          }}
        />
      </Suspense>
    </main>
  );
};

export default Print;
