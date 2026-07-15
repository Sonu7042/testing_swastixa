import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

const setRef = (ref, value) => {
  if (typeof ref === "function") ref(value);
  else if (ref) ref.current = value;
};

const OptimizedVideo = forwardRef(function OptimizedVideo(
  {
    src,
    eager = false,
    autoPlay = true,
    pauseWhenHidden = true,
    rootMargin = "400px 0px",
    threshold = 0.01,
    onCanPlay,
    onError,
    children,
    ...props
  },
  forwardedRef,
) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const shouldPlayRef = useRef(eager);

  const assignRef = useCallback((element) => {
    videoRef.current = element;
    setRef(forwardedRef, element);

    if (element) {
      element.muted = true;
      element.defaultMuted = true;
      element.playsInline = true;
    }
  }, [forwardedRef]);

  const playIfNeeded = useCallback(() => {
    const video = videoRef.current;
    if (!video || !autoPlay || !shouldPlayRef.current || !video.paused) return;
    video.play().catch(() => {
      // Autoplay can still be disabled by the user's Safari settings.
    });
  }, [autoPlay]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (eager) {
      shouldPlayRef.current = true;
      setShouldLoad(true);
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      shouldPlayRef.current = true;
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      shouldPlayRef.current = entry.isIntersecting;
      if (entry.isIntersecting) {
        setShouldLoad(true);
        if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) playIfNeeded();
      } else if (pauseWhenHidden && !video.paused) {
        video.pause();
      }
    }, { rootMargin, threshold });

    observer.observe(video);
    return () => observer.disconnect();
  }, [eager, pauseWhenHidden, playIfNeeded, rootMargin, threshold]);

  useEffect(() => () => {
    const video = videoRef.current;
    if (video && !video.paused) video.pause();
  }, []);

  const handleCanPlay = (event) => {
    onCanPlay?.(event);
    playIfNeeded();
  };

  const handleError = (event) => {
    onError?.(event);
    if (!onError) console.error("Video failed to load:", src, event.currentTarget.error);
  };

  return (
    <video
      {...props}
      ref={assignRef}
      src={shouldLoad ? src : undefined}
      autoPlay={autoPlay}
      muted
      playsInline
      preload={eager ? "auto" : "none"}
      onCanPlay={handleCanPlay}
      onError={handleError}
    >
      {children}
      Your browser does not support HTML5 video.
    </video>
  );
});

export default OptimizedVideo;
