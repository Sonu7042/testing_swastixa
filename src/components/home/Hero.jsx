import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_VIDEO_SRC =
  "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-hero-video/swastixa-top.mp4";

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    const containerEl = containerRef.current;
    if (!videoEl || !containerEl) return undefined;

    // Safari/iOS only honors autoplay when muted+playsInline are true both
    // as HTML attributes (already set in JSX below) and as JS properties.
    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.playsInline = true;

    let playAttempted = false;
    const playVideo = () => {
      if (playAttempted || !videoEl.paused) return;
      playAttempted = true;
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Can still be blocked by the user's Safari Low Power Mode /
          // autoplay setting; allow a retry on the next canplay signal.
          playAttempted = false;
        });
      }
    };

    const handleCanPlay = () => playVideo();
    const handleError = () => {
      console.error("Hero video failed to load:", videoEl.error);
    };

    videoEl.addEventListener("canplay", handleCanPlay);
    videoEl.addEventListener("error", handleError);

    if (videoEl.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) playVideo();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Responsive GSAP using matchMedia (perfect for resizing & device rotation)
    const mm = gsap.matchMedia();

    // Desktop & Tablet (width > 430px)
    mm.add("(min-width: 431px)", () => {
      // One-time box sizing (not scrubbed, so no scroll-time layout cost).
      gsap.set(videoEl, {
        scaleX: 1,
        scaleY: 1,
        yPercent: 0,
        width: "80vw",
        height: "100vh",
        borderRadius: "0rem",
        transformOrigin: "center center",
        force3D: true,
      });

      // Reduced-motion users still see the video, just without the
      // pinned scroll-scrub zoom.
      if (prefersReducedMotion) return;

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

      // Same visual growth (80vw/100vh -> a 1.2x-scaled 100vw/100vh frame)
      // as before, but expressed purely as GPU transforms (scaleX/scaleY/
      // yPercent) instead of animating width/height, which forced layout +
      // repaint on every scrub tick and was the main cause of scroll jank
      // and perceived slow video playback on Safari/iOS.
      tl.to(videoEl, {
        scaleX: 1.5, // (100vw * 1.2) / 80vw
        scaleY: 1.2, // (100vh * 1.2) / 100vh
        yPercent: -20,
        duration: 2,
        ease: "power2.inOut",
        force3D: true,
      });
    });

    // Mobile (width <= 430px)
    mm.add("(max-width: 430px)", () => {
      // Static styling only (no ScrollTrigger animation, keeps mobile smooth).
      gsap.set(videoEl, {
        scaleX: 1,
        scaleY: 1,
        yPercent: 0,
        width: "100%",
        height: "auto",
        borderRadius: "0rem",
      });
    });

    // Cleanup on unmount
    return () => {
      mm.revert(); // Reverts all GSAP matchMedia settings & kills all associated ScrollTriggers
      videoEl.removeEventListener("canplay", handleCanPlay);
      videoEl.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="gsap-pin min-h-[50vh] sm:min-h-screen flex flex-col items-center justify-center px-4 bg-white overflow-hidden"
    >
      {/* Heading Section */}
      <h1 className="heading pt-10 sm:pt-28 text-center text-[22px] font-bold sm:text-[28px] md:text-[38px] lg:text-[50px] xl:text-[68px] leading-snug text-gray-800 max-w-6xl">
        Creativity That Flows From Culture <br />
        Culture Guides Us. Creativity Defines Us
      </h1>

      {/* Video Section */}
      <div className="mt-8 w-full flex justify-center relative z-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full min-h-[60vh] object-cover"
          style={{ border: "none", outline: "none" }}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
};

export default Hero;
