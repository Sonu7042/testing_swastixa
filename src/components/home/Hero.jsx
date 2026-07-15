import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_URL =
  "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-hero-video/swastixa-top.mp4";

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    const videoEl = videoRef.current;

    if (!containerEl || !videoEl) return;

    // Important for Safari and iOS autoplay
    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.playsInline = true;

    const startVideo = async () => {
      try {
        await videoEl.play();
      } catch (error) {
        console.warn("Safari autoplay was blocked:", error);
      }
    };

    // Try once when enough data is available
    if (videoEl.readyState >= 3) {
      startVideo();
    } else {
      videoEl.addEventListener("canplay", startVideo, {
        once: true,
      });
    }

    const context = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 431px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.set(videoEl, {
          scale: 1,
          yPercent: 0,
          borderRadius: 0,
          transformOrigin: "center center",
          force3D: true,
        });

        gsap.to(videoEl, {
          scale: 1.2,
          yPercent: -10,
          ease: "none",
          force3D: true,

          scrollTrigger: {
            trigger: containerEl,
            start: "top top",
            end: "+=300",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      mm.add("(max-width: 430px)", () => {
        gsap.set(videoEl, {
          scale: 1,
          yPercent: 0,
          borderRadius: 0,
          clearProps: "transform",
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(videoEl, { scale: 1, yPercent: 0, clearProps: "transform" });
      });

      return () => mm.revert();
    }, containerEl);

    return () => {
      videoEl.removeEventListener("canplay", startVideo);
      context.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-[50vh] sm:min-h-screen overflow-hidden bg-white px-4"
    >
      <div className="flex min-h-[50vh] flex-col items-center justify-center sm:min-h-screen">
        <h1 className="heading max-w-6xl pt-10 text-center text-[22px] font-bold leading-snug text-gray-800 sm:pt-28 sm:text-[28px] md:text-[38px] lg:text-[50px] xl:text-[68px]">
          Creativity That Flows From Culture
          <br />
          Culture Guides Us. Creativity Defines Us
        </h1>

        <div className="relative z-10 mt-8 flex w-full justify-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            className="block h-[60vh] w-full object-cover sm:h-screen sm:w-[80vw]"
            style={{
              border: "none",
              outline: "none",
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
            }}
            onError={(event) => {
              console.error(
                "Video loading error:",
                event.currentTarget.error
              );
            }}
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
