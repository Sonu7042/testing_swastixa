

import React, { useEffect, useRef, useState } from "react";

const VideoCard = ({ src }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  // 👀 Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          setShouldLoad(true);
        } else if (!videoRef.current?.paused) {
          videoRef.current?.pause();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "200px",
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // ▶️ Play ONLY when ready + visible, and only if not already playing
  useEffect(() => {
    const video = videoRef.current;
    if (isVisible && isReady && video && video.paused) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, [isVisible, isReady]);

  const setVideoRef = (el) => {
    videoRef.current = el;
    if (el) {
      el.muted = true;
      el.defaultMuted = true;
      el.playsInline = true;
      el.setAttribute('muted', '');
      el.setAttribute('playsinline', '');
    }
  };

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]
        max-w-[95vw] md:max-w-[90vw] xl:max-w-[80vw]
        overflow-hidden rounded-xl bg-black
        flex items-center justify-center
      "
    >
      {!shouldLoad ? (
        <div className="text-white/60 text-sm">Loading preview…</div>
      ) : (
        <video
          ref={setVideoRef}
          muted
          loop
          playsInline
          controls
          preload="metadata"
          className="w-full h-full object-cover"
          onCanPlay={() => {
            setIsReady(true);
            setHasError(false);
          }}
          onError={(e) => {
            setIsReady(false);
            setHasError(true);
            console.error("Video failed to load:", src, e.currentTarget.error);
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm pointer-events-none">
          Video unavailable
        </div>
      )}
    </div>
  );
};

export default VideoCard;
