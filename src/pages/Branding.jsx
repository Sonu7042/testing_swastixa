import React, { Suspense, lazy } from 'react';
import Smmbutton from '../components/work/Smmbutton.jsx';

// // PDF Files (for modal view)
// import bestmatePdf from '../assets/bestmate-brand-guidlines.pdf';
// import gracePdf from '../assets/grace-aesthetic-brand-guidlines.pdf';

// // Static Thumbnail Images (for card cover)
// import bestmateThumb from '../assets/bestmate-guideline-thumb.png';
// import graceThumb from '../assets/grace-guideline-thumb.png';

const StaticPDFCard = lazy(() => import('../components/work/StaticPDFCard.jsx'));

const Branding = () => {

    const brandingDocs = [
        {
            id: 1,
            title: "Bestmate",
            pdf: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/bestmate-brand-guidlines.pdf",
            thumbnail: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/a-thumbnail/thumbnail-bestmate.webp"
        },
        {
            id: 2,
            title: "Grace Aesthetic",
            pdf: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/grace-aesthetic-brand-guidlines.pdf",
            thumbnail:  "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/a-thumbnail/thumbnail-graceaesthetic.webp"
        },
        {
            id: 3,
            title: "ishaadrii",
            pdf: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/ishaadrii-four.pdf",
            thumbnail:  "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/a-thumbnail/thumbnail-ishaadrii.webp"
        },
        {
            id: 4,
            title: "oxfordrealtor",
            pdf: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/two-org-logo.pdf",
            thumbnail:  "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/a-thumbnail/thumbnail-oxfordrealtor.webp"
        },
        {
            id: 5,
            title: "kebab",
            pdf: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/kebab-e-awadh.pdf",
            thumbnail:  "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/a-thumbnail/thumbnail-kebab.webp"
        },
        {
            id: 6,
            title: "tirasya",
            pdf: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/tirasya.pdf",
            thumbnail:  "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/a-thumbnail/thumbnail-tirasya.webp"
        },
        {
            id: 7,
            title: "designbygayatri",
            pdf: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/design-by-gayatri-brand-guidlines.pdf",
            thumbnail:  "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-branding-pdf/a-thumbnail/thumbnail-designbygayatri.webp"
        }
    ];

    return (
        <main className="bg-black min-h-screen pt-24 md:pt-40">
            <div className="relative z-10 px-4">
                <h1 className='text-white text-center text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter'>
                    Branding & Identity
                </h1>

                <div className='text-white text-center mt-12 mb-16'>
                    <Smmbutton />
                </div>

                <div className="max-w-[1800px] mx-auto pb-20">
                {/* <div className="max-w-[2500px] mx-auto flex flex-row gap-4 sm:gap-6"> */}
                    <Suspense fallback={
                        <div className="w-full h-[30vh] flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                        </div>
                    }>
                        {/* max-w-[2500px] mx-auto flex flex-row gap-4 sm:gap-6 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {brandingDocs.map((doc) => (
                                <StaticPDFCard
                                    key={doc.id}
                                    pdfUrl={doc.pdf}
                                    imageUrl={doc.thumbnail}
                                    title={doc.title}
                                    onClick={() => window.open(doc.pdf, '_blank')}
                                />
                            ))}
                        </div>
                    </Suspense>
                </div>
            </div>
        </main>
    );
};

export default Branding;