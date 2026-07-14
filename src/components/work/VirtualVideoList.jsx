import { useRef, useState, useEffect } from "react";

import { useVirtualizer } from "@tanstack/react-virtual";
import { videoList as defaultVideoList } from "../../data/videoList";
import VideoPlayer from "./VideoPlayer";

const VirtualVideoList = ({ videos = defaultVideoList }) => {
  const containerRef = useRef(null);
  const [scrollMargin, setScrollMargin] = useState(0);

  // Measure initial offset immediately to prevent jumping
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setScrollMargin(rect.top + scrollTop);
      }
    };
    
    measure();
    // Re-measure after a short delay to account for dynamic content like hero videos
    const timer = setTimeout(measure, 500);
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(timer);
    };
  }, []);

  const getEstimatedSize = () => {
    if (typeof window !== "undefined") {
      const w = window.innerWidth;
      const vh = window.innerHeight;
      if (w < 640) return vh * 0.5 + 32; // h-[50vh] + py-4
      if (w < 768) return vh * 0.6 + 32; // h-[60vh] + py-4
      if (w < 1024) return vh * 0.7 + 160; // h-[70vh] + py-20 (160px)
      return vh * 0.8 + 160; // h-[80vh] + py-20 (160px)
    }
    return 800;
  };

  const rowVirtualizer = useVirtualizer({
    count: videos.length,
    getScrollElement: () => (typeof document !== "undefined" ? document.documentElement : null),
    estimateSize: getEstimatedSize,
    overscan: 10, // Increased significantly for smoother up/down scrolling
    scrollMargin: scrollMargin,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  return (
    <div
      ref={containerRef}
      className="w-full bg-black relative"
      style={{ minHeight: "80vh" }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative",
          width: "100%",
        }}
      >
        {virtualItems.map((row) => {
          const video = videos[row.index];
          if (!video) return null;

          return (
            <div
              key={video.id}
              data-index={row.index}
              ref={rowVirtualizer.measureElement}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${row.start - scrollMargin}px)`,
                willChange: "transform",
              }}
              className="flex justify-center items-center py-4 md:py-20 px-4"
            >
              <VideoPlayer
                src={video.src}
                poster={`/posters/${video.id}.webp`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualVideoList;