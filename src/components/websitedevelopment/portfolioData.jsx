import React, { useCallback, useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const portfolioData = [
  {
    id: 2,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/bestmate-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://bestmate.bexex.in/",
  },
  {
    id: 15,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/three-dlf-work.jpeg",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://bexex.in/360/",
  },
  {
    id: 4,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/yashvi-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 3,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/bexexglobal.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://bexexglobal.com/",
  },
  {
    id: 5,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/birla-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 6,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/eazzy-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://eazzy.bexex.in/",
  },
  {
    id: 7,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/elaboratecapital.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://elaboratecapital.bexex.in/",
  },
  {
    id: 8,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/elan-design-hero.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 9,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/gandhi-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 14,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/project-one.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 10,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/graceaesthetic-design-hero.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://graceaesthetic.in/",
  },
  {
    id: 11,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/elan-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 12,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/project-two.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 13,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/project-three.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 1,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/asva-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://asvawater.com/",
  },
];

/*
 * Three copies are used to create a smooth
 * infinite carousel in both directions.
 */
const carouselItems = [
  ...portfolioData,
  ...portfolioData,
  ...portfolioData,
];

const PortfolioCarousel = () => {
  const trackRef = useRef(null);

  const animationFrameRef = useRef(null);

  const positionRef = useRef(0);

  const isDraggingRef = useRef(false);
  const isHoveringRef = useRef(false);

  const dragStartXRef = useRef(0);
  const dragStartPositionRef = useRef(0);

  const hasDraggedRef = useRef(false);

  const [isDragging, setIsDragging] = useState(false);

  /*
   * Auto-scroll speed.
   * Smaller value = slower movement.
   */
  const AUTO_SPEED = 1.35;

  /*
   * Width of one complete portfolio set.
   */
  const getSetWidth = useCallback(() => {
    if (!trackRef.current) {
      return 0;
    }

    return trackRef.current.scrollWidth / 3;
  }, []);

  /*
   * Keep the carousel inside the duplicated content.
   */
  const normalizePosition = useCallback(() => {
    const setWidth = getSetWidth();

    if (!setWidth) {
      return;
    }

    if (positionRef.current <= -setWidth * 2) {
      positionRef.current += setWidth;
    }

    if (positionRef.current >= 0) {
      positionRef.current -= setWidth;
    }
  }, [getSetWidth]);

  /*
   * Apply current position to the track.
   */
  const updateTrack = useCallback(() => {
    if (!trackRef.current) {
      return;
    }

    trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
  }, []);

  /*
   * Start from the middle copy.
   */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const setWidth = getSetWidth();

      if (setWidth) {
        positionRef.current = -setWidth;
        updateTrack();
      }
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, [getSetWidth, updateTrack]);

  /*
   * Infinite automatic movement.
   */
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

  /*
   * Pause on desktop hover.
   */
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

  /*
   * Start mouse/touch drag.
   */
  const handlePointerDown = (event) => {
    if (!trackRef.current) {
      return;
    }

    isDraggingRef.current = true;
    hasDraggedRef.current = false;

    dragStartXRef.current = event.clientX;
    dragStartPositionRef.current = positionRef.current;
  };

  /*
   * Move carousel while dragging.
   */
  const handlePointerMove = (event) => {
    if (!isDraggingRef.current) {
      return;
    }

    const distance = event.clientX - dragStartXRef.current;

    /*
     * Ignore tiny movements before considering it a real drag.
     */
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

  /*
   * Finish dragging.
   */
  const handlePointerUp = (event) => {
    isDraggingRef.current = false;
    setIsDragging(false);

    if (
      trackRef.current &&
      trackRef.current.hasPointerCapture(event.pointerId)
    ) {
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

  /*
   * Cancel drag.
   */
  const handlePointerCancel = (event) => {
    isDraggingRef.current = false;
    setIsDragging(false);

    if (
      trackRef.current &&
      trackRef.current.hasPointerCapture(event.pointerId)
    ) {
      try {
        trackRef.current.releasePointerCapture(event.pointerId);
      } catch {
        // pointer capture fallback
      }
    }

    hasDraggedRef.current = false;
  };

  /*
   * Prevent opening link only if the user was actually dragging.
   */
  const handleProjectClick = (event) => {
    if (hasDraggedRef.current) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Carousel viewport */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Carousel track */}
        <div
          ref={trackRef}
          className={`
            flex
            w-max
            gap-4
            px-4
            md:gap-12
            md:px-0
            select-none
            touch-pan-y
            will-change-transform
            ${
              isDragging
                ? "cursor-grabbing"
                : "cursor-grab"
            }
          `}
          style={{
            transform: "translate3d(0, 0, 0)",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {carouselItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="
                group
                relative
                h-[180px]
                w-[300px]
                flex-shrink-0
                overflow-hidden
                rounded-[12px]
                border
                border-white/10
                bg-[#1B1B1B]

                sm:h-[220px]
                sm:w-[330px]

                md:h-[280px]
                md:w-[460px]
              "
            >
              {/* Image / Link wrapper */}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
                  onClick={handleProjectClick}
                  className="block h-full w-full cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={`Portfolio project ${item.id}`}
                    draggable={false}
                    className="
                      h-full
                      w-full
                      rounded-[8px]
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.035]
                    "
                  />
                </a>
              ) : (
                <img
                  src={item.image}
                  alt={`Portfolio project ${item.id}`}
                  draggable={false}
                  className="
                    h-full
                    w-full
                    rounded-[8px]
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                  "
                />
              )}

              {/* Bottom gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-32
                  bg-gradient-to-t
                  from-black/85
                  via-black/35
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* External link icon */}
              {item.link && (
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-4
                    flex
                    h-9
                    w-9
                    translate-y-[-6px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    text-white
                    opacity-0
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <ExternalLink size={15} />
                </div>
              )}

              {/* Tags */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-4
                  left-4
                  right-4
                  z-10
                  flex
                  translate-y-3
                  flex-wrap
                  gap-1.5
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-md
                      border
                      border-white/15
                      bg-white/10
                      px-2.5
                      py-1
                      text-[10px]
                      font-medium
                      text-white
                      backdrop-blur-md

                      sm:px-3
                      sm:py-1.5
                      sm:text-[11px]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile hint */}
      <div className="pointer-events-none mt-3 flex justify-center md:hidden">
        <span className="rounded-full bg-black/5 px-3 py-1 text-[10px] font-medium text-slate-500">
          Swipe to explore
        </span>
      </div>
    </section>
  );
};

export default PortfolioCarousel;