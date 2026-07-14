import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const videoEl = containerEl.querySelector("video");
    if (!videoEl) return;

    // Force autoplay compatibility for Safari & iOS
    videoEl.setAttribute("muted", "");
    videoEl.setAttribute("playsinline", "");
    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.playsInline = true;

    // Programmatic play trigger for Safari
    const playVideo = () => {
      videoEl.play().catch((err) => {
        console.warn("Autoplay blocked initially, retrying: ", err);
      });
    };

    playVideo();
    videoEl.addEventListener("loadedmetadata", playVideo);
    videoEl.addEventListener("loadeddata", playVideo);

    // Responsive GSAP using matchMedia (perfect for resizing & device rotation)
    const mm = gsap.matchMedia();

    // Desktop & Tablet (width > 430px)
    mm.add("(min-width: 431px)", () => {
      // Set initial styles for desktop animation
      gsap.set(videoEl, {
        scale: 1,
        width: "80vw",
        height: "100vh",
        borderRadius: "0rem",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerEl,
          start: "top top",
          end: "+=100",
          scrub: true,
          pin: true,
          pinType: "transform", // Solves pinning jitter in Safari/iOS when using Lenis
          anticipatePin: 1,
        },
      });

      tl.to(videoEl, {
        scale: 1.2,
        y: "-20%",
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        duration: 2,
        ease: "power2.inOut",
      });
    });

    // Mobile (width <= 430px)
    mm.add("(max-width: 430px)", () => {
      // Set styling for mobile (no ScrollTrigger animation to keep performance smooth)
      gsap.set(videoEl, {
        scale: 1,
        width: "100%",
        height: "auto",
        borderRadius: "0rem",
      });
    });

    // Cleanup on unmount
    return () => {
      mm.revert(); // Reverts all GSAP matchMedia settings & kills all associated ScrollTriggers
      videoEl.removeEventListener("loadedmetadata", playVideo);
      videoEl.removeEventListener("loadeddata", playVideo);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="min-h-[50vh] sm:min-h-screen flex flex-col items-center justify-center px-4 bg-white overflow-hidden"
      >
        {/* Heading Section */}
        <h1 className="heading pt-10 sm:pt-28 text-center text-[22px] font-bold sm:text-[28px] md:text-[38px] lg:text-[50px] xl:text-[68px] leading-snug text-gray-800 max-w-6xl">
          Creativity That Flows From Culture <br />
          Culture Guides Us. Creativity Defines Us
        </h1>

        {/* Video Section */}
        <div 
          className="mt-8 w-full flex justify-center relative z-10"
          dangerouslySetInnerHTML={{
            __html: `
              <video
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                class="w-full min-h-[60vh] object-cover"
                style="border: none; outline: none;"
              >
                <source
                  src="https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-hero-video/swastixa-top.mp4"
                  type="video/mp4"
                />
              </video>
            `
          }}
        />
      </div>
    </>
  );
};

export default Hero;