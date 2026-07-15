import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "./Particles";
import OptimizedVideo from "../common/OptimizedVideo";

gsap.registerPlugin(ScrollTrigger);

const LazyAutoplayVideo = ({ src }) => {
  return (
    <div className="w-full h-full">
      <OptimizedVideo
        src={src}
        loop
        className="w-full h-full object-cover block rounded-sm"
      />
    </div>
  );
};

const ForthSection = () => {
  const videoData = ["https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-four-videos-contact-image/swastixa-panasonic.mp4", "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-four-videos-contact-image/swastixa-fybros-good.mp4", "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-four-videos-contact-image/swastixa-digital.mp4", "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-four-videos-contact-image/swastixa-fybros.mp4"];

  useEffect(() => {
    if (window.innerWidth <= 426) return;

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".forth-section",
        start: "top top",
        end: "+=500%",
        scrub: 1.5,
        pin: true,
      },
    });

    tl4.fromTo(".rotate", { xPercent: 0 }, { xPercent: -74.6, ease: "none" });

    return () => {
      tl4.scrollTrigger?.kill();
      tl4.kill();
    };
  }, []);

  return (
    <section className="forth-section relative w-full h-screen overflow-hidden max-[426px]:h-auto max-[426px]:pb-4">

      {/* ===== Particles Background ===== */}
      <Particles
        particleBaseSize={120}
        particleColors={['#2196F3', '#FFFFFF']}
        particleCount={350}
        particleSpread={25}
        speed={0.3}
        // particleBaseSize={200}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <div className="forth-main w-[300%] h-full max-[426px]:w-full max-[426px]:h-auto relative z-20">

        <div
          className="rotate flex items-center justify-start gap-[5vw] 
            w-[calc((60vw*6)+(8vw*6))] h-full px-[5vw] pl-[1vw]
            max-[426px]:w-full max-[426px]:flex-col 
            max-[426px]:gap-1 max-[426px]:px-3 
            max-[426px]:pl-3 max-[426px]:pb-0 max-[426px]:h-auto"
        >
          {videoData.map((item, idx) => (
            <div
              key={idx}
              className="fir-img flex-none 
                w-[85vw] h-[85vh] lg:h-[90vh] overflow-hidden rounded-sm mx-auto max-[426px]:mb-5
                max-[426px]:w-full max-[426px]:h-[250px]"
            >
              <LazyAutoplayVideo src={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForthSection;
