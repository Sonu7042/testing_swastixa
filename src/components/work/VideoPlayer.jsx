import { useRef, useState, useEffect } from "react";
import { Share2 } from "lucide-react";
import toast from "react-hot-toast";

// Global active video (Mobile only)
let activeVideo = null;

const VideoPlayer = ({ src, poster }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  // ----------------------------
  // Pre-load when near viewport
  // ----------------------------
  useEffect(() => {
    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
        }
      },
      {
        rootMargin: "800px",
      }
    );

    if (containerRef.current) {
      loadObserver.observe(containerRef.current);
    }

    return () => loadObserver.disconnect();
  }, []);

  // ----------------------------
  // Observe visibility
  // ----------------------------
  useEffect(() => {
    const playObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.7,
      }
    );

    if (containerRef.current) {
      playObserver.observe(containerRef.current);
    }

    return () => playObserver.disconnect();
  }, []);

  const setVideoRef = (el) => {
    videoRef.current = el;

    if (el) {
      el.muted = true;
      el.defaultMuted = true;
      el.playsInline = true;
      el.setAttribute("muted", "");
      el.setAttribute("playsinline", "");
      el.setAttribute("webkit-playsinline", "");
    }
  };

  // ----------------------------
  // Play / Pause
  // ----------------------------
  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) return;

    const isMobile = window.innerWidth < 768;

    if (isVisible) {
      if (!video.paused) return; // avoid redundant play() calls Safari logs as aborted

      if (isMobile) {
        // Pause previous playing video
        if (activeVideo && activeVideo !== video) {
          activeVideo.pause();
        }

        activeVideo = video;

        video.muted = true;

        video.play().catch((err) => {
          console.warn("Autoplay blocked:", err);
        });
      } else {
        // Desktop (existing behaviour)
        video.muted = false;

        video.play().catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    } else {
      if (!video.paused) video.pause();

      if (activeVideo === video) {
        activeVideo = null;
      }
    }
  }, [isVisible, shouldLoad]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (activeVideo === videoRef.current) {
        activeVideo = null;
      }
    };
  }, []);

  if (!src) return null;

  // ----------------------------
  // Share
  // ----------------------------
  const handleShare = async (e) => {
    e.stopPropagation();

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check out this video",
          url: src,
        });
      } else {
        await navigator.clipboard.writeText(src);
        toast.success("Video link copied to clipboard!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full
        mx-auto
        aspect-video
        max-w-[95vw]
        sm:max-w-[85vw]
        md:max-w-[75vw]
        lg:max-w-[65vw]
        xl:max-w-[1000px]
        2xl:max-w-[1200px]
        overflow-hidden
        rounded-2xl
        bg-neutral-900
        flex
        items-center
        justify-center
        shadow-3xl
        border
        border-white/5
        group
      "
    >
      {/* Share */}
      <button
        onClick={handleShare}
        title="Share Video"
        className="
          absolute
          top-4
          right-4
          z-20
          bg-black/60
          hover:bg-black/90
          text-white
          p-2.5
          rounded-full
          backdrop-blur-sm
          transition-all
          duration-300
          opacity-0
          group-hover:opacity-100
          flex
          items-center
          justify-center
        "
      >
        <Share2 size={18} />
      </button>

      {/* Poster */}
      {(!isReady || !shouldLoad) && (
        <div className="absolute inset-0 z-10 transition-opacity duration-700 pointer-events-none">
          <img
            src={poster}
            alt="Video Poster"
            className="w-full h-full object-cover blur-sm opacity-50"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            {hasError ? (
              <span className="text-white/60 text-xs px-3 text-center">
                Video unavailable
              </span>
            ) : (
              <div className="w-12 h-12 border-4 border-white/10 border-t-blue-500 rounded-full animate-spin"></div>
            )}
          </div>
        </div>
      )}

      {/* Video */}
      {shouldLoad && (
        <video
          ref={setVideoRef}
          loop
          muted
          controls
          playsInline
          poster={poster}
          preload="metadata"
          onCanPlay={() => {
            setIsReady(true);
            setHasError(false);
          }}
          onError={(e) => {
            setIsReady(false);
            setHasError(true);
            console.error("Video failed to load:", src, e.currentTarget.error);
          }}
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isReady
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
