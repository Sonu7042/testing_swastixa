

import React, { useEffect, useRef, useState } from "react";

const VideoCard = ({ src }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 👀 Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          setShouldLoad(true);
        } else {
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

  // ▶️ Play ONLY when ready + visible
  useEffect(() => {
    const video = videoRef.current;
    if (isVisible && isReady && video) {
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
          onLoadedData={() => setIsReady(true)}
          onCanPlay={() => setIsReady(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoCard;
