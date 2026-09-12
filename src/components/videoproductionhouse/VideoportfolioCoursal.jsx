import React, { useCallback, useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    id: 1,
    thumbnail:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-video-production-house-carousel-thumbnails-and-videos/swastixa-service-video-production-house-arica-06.webp",
    video:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-five-video/swastixa-about-five-video.mp4",
  },
  {
    id: 2,
    thumbnail:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-video-production-house-carousel-thumbnails-and-videos/swastixa-service-video-production-house-bestmate.webp",
    video:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-five-video/swastixa-about-five-video.mp4",
  },
  {
    id: 3,
    thumbnail:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-video-production-house-carousel-thumbnails-and-videos/swastixa-service-video-production-house-kloy.webp",
    video:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-five-video/swastixa-about-five-video.mp4",
  },
  {
    id: 4,
    thumbnail:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-video-production-house-carousel-thumbnails-and-videos/swastixa-service-video-production-house-m3m.webp",
    video:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-five-video/swastixa-about-five-video.mp4",
  },
  {
    id: 5,
    thumbnail:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-video-production-house-carousel-thumbnails-and-videos/swastixa-service-video-production-house-mrg.webp",
    video:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-five-video/swastixa-about-five-video.mp4",
  },
  {
    id: 6,
    thumbnail:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-video-production-house-carousel-thumbnails-and-videos/swastixa-service-video-production-house-swadeshi.webp",
    video:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-five-video/swastixa-about-five-video.mp4",
  },
 
];

const carouselItems = [
  ...portfolioData,
  ...portfolioData,
  ...portfolioData,
];

const HOVER_PREVIEW_DURATION = 5000;

const HoverPreviewVideo = ({ item }) => {
  const videoRef = useRef(null);
  const previewTimerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const clearPreviewTimer = () => {
    if (previewTimerRef.current !== null) {
      window.clearTimeout(previewTimerRef.current);
      previewTimerRef.current = null;
    }
  };

  const resetToThumbnail = () => {
    clearPreviewTimer();
    setIsPlaying(false);

    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const playPreview = () => {
    const video = videoRef.current;
    if (!video) return;

    clearPreviewTimer();
    video.currentTime = 0;

    const playPromise = video.play();
    if (playPromise) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          previewTimerRef.current = window.setTimeout(
            resetToThumbnail,
            HOVER_PREVIEW_DURATION
          );
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  useEffect(() => () => clearPreviewTimer(), []);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={playPreview}
      onMouseLeave={resetToThumbnail}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={item.video}
        aria-label={`Portfolio project ${item.id}`}
        muted
        playsInline
        preload="metadata"
        draggable={false}
        onEnded={resetToThumbnail}
        className="h-full w-full rounded-[8px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />

      {/* Static Thumbnail Overlay */}
      <img
        src={item.thumbnail}
        alt={`Project ${item.id} preview`}
        draggable={false}
        className={`pointer-events-none absolute inset-0 h-full w-full rounded-[8px] object-cover transition-all duration-300 ease-out group-hover:scale-[1.035] ${
          isPlaying ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      />
    </div>
  );
};

const VideoportfolioCoursal = () => {
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const positionRef = useRef(0);

  const isDraggingRef = useRef(false);
  const isHoveringRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPositionRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const [isDragging, setIsDragging] = useState(false);

  const AUTO_SPEED = 1.35;

  const getSetWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    return trackRef.current.scrollWidth / 3;
  }, []);

  const normalizePosition = useCallback(() => {
    const setWidth = getSetWidth();
    if (!setWidth) return;

    if (positionRef.current <= -setWidth * 2) {
      positionRef.current += setWidth;
    }
    if (positionRef.current >= 0) {
      positionRef.current -= setWidth;
    }
  }, [getSetWidth]);

  const updateTrack = useCallback(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const setWidth = getSetWidth();
      if (setWidth) {
        positionRef.current = -setWidth;
        updateTrack();
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, [getSetWidth, updateTrack]);

  useEffect(() => {
    const animate = () => {
      if (!isDraggingRef.current && !isHoveringRef.current) {
        positionRef.current -= AUTO_SPEED;
        normalizePosition();
        updateTrack();
      }
      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [normalizePosition, updateTrack]);

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
    }
  };

  const handlePointerDown = (event) => {
    if (!trackRef.current) return;

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartPositionRef.current = positionRef.current;
  };

  const handlePointerMove = (event) => {
    if (!isDraggingRef.current) return;

    const distance = event.clientX - dragStartXRef.current;

    if (Math.abs(distance) > 6) {
      hasDraggedRef.current = true;
      setIsDragging(true);

      if (trackRef.current && !trackRef.current.hasPointerCapture(event.pointerId)) {
        try {
          trackRef.current.setPointerCapture(event.pointerId);
        } catch {
          // pointer capture fallback
        }
      }
    }

    if (hasDraggedRef.current) {
      positionRef.current = dragStartPositionRef.current + distance;
      normalizePosition();
      updateTrack();
    }
  };

  const handlePointerUp = (event) => {
    isDraggingRef.current = false;
    setIsDragging(false);

    if (trackRef.current && trackRef.current.hasPointerCapture(event.pointerId)) {
      try {
        trackRef.current.releasePointerCapture(event.pointerId);
      } catch {
        // pointer capture fallback
      }
    }

    window.setTimeout(() => {
      hasDraggedRef.current = false;
    }, 120);
  };

  const handlePointerCancel = (event) => {
    isDraggingRef.current = false;
    setIsDragging(false);

    if (trackRef.current && trackRef.current.hasPointerCapture(event.pointerId)) {
      try {
        trackRef.current.releasePointerCapture(event.pointerId);
      } catch {
        // pointer capture fallback
      }
    }

    hasDraggedRef.current = false;
  };

  const handleProjectClick = (event) => {
    if (hasDraggedRef.current) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <section className="relative w-full py-16 overflow-hidden">
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={trackRef}
          className={`flex w-max gap-4 px-4 md:gap-12 md:px-0 select-none touch-pan-y will-change-transform ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ transform: "translate3d(0, 0, 0)" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {carouselItems.map((item, index) => (
            <Link to="/work/Production"
              key={`${item.id}-${index}`}
              className="group relative h-[180px] w-[300px] flex-shrink-0 overflow-hidden rounded-[12px] border border-white/10 bg-[#1B1B1B] sm:h-[220px] sm:w-[330px] md:h-[280px] md:w-[460px]"
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
                  onClick={handleProjectClick}
                  className="block h-full w-full cursor-pointer"
                >
                  <HoverPreviewVideo item={item} />
                </a>
              ) : (
                <HoverPreviewVideo item={item} />
              )}

              {/* Bottom gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* External link icon */}
              {item.link && (
                <div className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 translate-y-[-6px] items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ExternalLink size={15} />
                </div>
              )}

              {/* Tags */}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-10 flex translate-y-3 flex-wrap gap-1.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="pointer-events-none mt-3 flex justify-center md:hidden">
        <span className="rounded-full bg-black/5 px-3 py-1 text-[10px] font-medium text-slate-500">
          Swipe to explore
        </span>
      </div>
    </section>
  );
};

export default VideoportfolioCoursal;