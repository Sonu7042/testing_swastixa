import React from "react";
import Tilt from "react-parallax-tilt";
import OptimizedVideo from "../common/OptimizedVideo";

const videoCards = [
  {
    id: 1,
    src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-five-video/swastixa-about-one-video.mp4",
    mobileBg: "bg-[#2f2d2d]",
    className: `
      absolute 
      top-0 left-[17%] 
      w-[32.58%] h-[15.5%]
      rounded-xl shadow-xl
      md:w-[391px] md:h-[180px]
      [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
      [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
      [@media(min-width:767px)_and_(max-width:950px)]:left-10
    `,
  },
  {
    id: 2,
    src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-five-video/swastixa-about-two-video.mp4",
    mobileBg: "bg-[#ededed]",
    className: `
      absolute 
      top-0 right-36
      w-[32.58%] h-[15.5%]
      rounded-xl shadow-sm
      md:w-[391px] md:h-[180px]
      [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
      [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
      [@media(min-width:767px)_and_(max-width:950px)]:right-10
    `,
  },
  {
    id: 3,
    src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-five-video/swastixa-about-three-video.mp4",
    mobileBg: "bg-[#bdb9b9]",
    className: `
      relative
      top-24 left-1/3
      w-[32.58%] h-[15.5%]
      rounded-xl shadow-xl z-20
      md:w-[391px] md:h-[180px]
      [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
      [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
    `,
  },
  {
    id: 4,
    src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-five-video/swastixa-about-four-video.mp4",
    mobileBg: "bg-[#d9d9d9]",
    className: `
      absolute
      top-58 left-20
      w-[32.58%] h-[15.5%]
      rounded-xl shadow-xl
      md:w-[391px] md:h-[180px]
      [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
      [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
      [@media(min-width:767px)_and_(max-width:1130px)]:left-36
      [@media(min-width:767px)_and_(max-width:950px)]:left-7
    `,
  },
  {
    id: 5,
    src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-five-video/swastixa-about-five-video.mp4",
    mobileBg: "bg-[#625f5f]",
    className: ` 
      absolute
      top-58 right-64
      w-[32.58%] h-[15.5%]
      rounded-xl shadow-xl  
      md:w-[391px] md:h-[180px]
      [@media(min-width:767px)_and_(max-width:1130px)]:w-[320px]
      [@media(min-width:767px)_and_(max-width:1130px)]:h-[170px]
      [@media(min-width:767px)_and_(max-width:1130px)]:right-44
      [@media(min-width:767px)_and_(max-width:950px)]:right-14
    `,
  },
];

const VideoCard = ({ src, className, shadowColor = "rgba(0,0,0,0.5)" }) => {
  return (
    <div
      className={`${className} overflow-hidden bg-neutral-900 border border-white/5 backdrop-blur-sm transition-opacity duration-700`}
      style={{ boxShadow: `0 10px 30px ${shadowColor}` }}
    >
      <OptimizedVideo src={src} loop className="w-full h-full object-cover" />
    </div>
  );
};

// =============================

// MAIN COMPONENT
// =============================
const WorkHero = () => {
  return (
    <section className="w-full h-auto md:h-[80vh] mb-20 md:mb-44 flex items-center justify-center pt-10 md:pt-24 bg-transparent overflow-hidden">
      <div className="relative w-full max-w-6xl h-auto md:h-[400px] flex flex-col md:block items-center gap-4">

        {/* ===== MOBILE VIEW (< 768px) ===== */}
        <div className="flex md:hidden flex-col px-4 items-center gap-6 w-full">
          {videoCards.map((v) => (
            <VideoCard
              key={v.id}
              src={v.src}
              className="w-full max-w-[400px] aspect-video rounded-xl"
            />
          ))}
        </div>

        {/* ===== DESKTOP VIEW (>= 768px) ===== */}
        <div className="hidden md:block w-full h-full">
          <Tilt
            className="w-full h-full relative"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.1}
          >
            {videoCards.map((v) => (
              <VideoCard key={v.id} src={v.src} className={v.className} />
            ))}
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
