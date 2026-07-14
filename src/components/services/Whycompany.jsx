import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const whyCardsData = [
  {
    number: '01',
    title: 'Creative + Performance',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
    alt: 'Creative and Performance'
  },
  {
    number: '02',
    title: 'Data Driven Decisions',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
    alt: 'Data Driven Decisions'
  },
  {
    number: '03',
    title: 'In-House Production',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    alt: 'In-House Production'
  },
  {
    number: '04',
    title: 'Social Media Platforms',
    image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800&auto=format&fit=crop',
    alt: 'Social Media Platforms'
  },
  {
    number: '05',
    title: ' Transparent Reporting',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    alt: ' Transparent Reporting'
  },
  {
    number: '06',
    title: 'Scalable Brand Growth',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    alt: 'Scalable Brand Growth'
  }
];

const WhyCompany = () => {
  const containerRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const progressBarFillRef = useRef(null);

  useEffect(() => {
    // GSAP context for clean garbage collection
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop animation: horizontal scroll pinning
      mm.add('(min-width: 1024px)', () => {
        const cardsEl = cardsWrapperRef.current;
        const totalScrollWidth = cardsEl.scrollWidth - cardsEl.offsetWidth + 0; // safe padding offset

        // Pin the container and translate the cards horizontally
        gsap.to(cardsEl, {
          x: -totalScrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${totalScrollWidth}`,
            invalidateOnRefresh: true
          }
        });

        // Sync the horizontal progress bar with scroll percentage
        gsap.fromTo(
          progressBarFillRef.current,
          { width: '0%' },
          {
            width: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: () => `+=${totalScrollWidth}`,
              scrub: 1
            }
          }
        );
      });

      // Mobile layout fallback: native touch scrolling updating the progress bar
      mm.add('(max-width: 1023px)', () => {
        const cardsEl = cardsWrapperRef.current;
        
        const handleScroll = () => {
          const maxScroll = cardsEl.scrollWidth - cardsEl.clientWidth;
          const scrollPct = maxScroll > 0 ? (cardsEl.scrollLeft / maxScroll) * 100 : 0;
          if (progressBarFillRef.current) {
            progressBarFillRef.current.style.width = `${scrollPct}%`;
          }
        };

        cardsEl.addEventListener('scroll', handleScroll);
        return () => cardsEl.removeEventListener('scroll', handleScroll);
      });

      // Trigger recalculation on load/layout change
      ScrollTrigger.refresh();
    }, containerRef);

    // Refresh ScrollTrigger to avoid offset bugs
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="bg-black text-white w-full select-none relative border-t border-[#121214] overflow-hidden lg:h-screen flex flex-col justify-center py-16 lg:py-0 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32"
    >
      {/* Header Section */}
      <div className="max-w-4xl mb-12">
        <span className="text-[#71717a] text-xs font-semibold uppercase tracking-[0.25em] block mb-2.5">
          Why Swastixa
        </span>
        <h2 className="text-3xl sm:text-[40px] font-extrabold tracking-tight text-white mb-4 leading-tight">
         Built for Growth. Designed for Performance.
        </h2>
        <p className="text-[#a1a1aa] text-base sm:text-lg font-light leading-relaxed max-w-2xl">
          Combining creativity, technology, and digital marketing expertise to deliver measurable outcomes for modern brands.
        </p>
      </div>

      {/* Viewport wrapper */}
      <div 
        ref={cardsWrapperRef} 
        className="w-full flex gap-6 overflow-x-auto lg:overflow-x-visible lg:flex-nowrap scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none', // hide scrollbar in Firefox
          msOverflowStyle: 'none' // hide scrollbar in IE/Edge
        }}
      >
        {whyCardsData.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[80vw] sm:w-[450px] flex flex-col p-6 rounded-[14px] bg-[#121214] border border-[#232326]  hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500 group cursor-pointer snap-start"
            style={{
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Number */}
            <div className="text-[#71717a] font-medium text-base mb-6 group-hover:text-[#a1a1aa] transition-colors duration-300">
              {card.number}
            </div>

            {/* Image Container */}
            <div className="w-full aspect-[2.2/1] overflow-hidden rounded-[8px] mb-6 relative">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle inner overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold text-lg sm:text-[22px] tracking-tight transition-colors duration-300">
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Progress Scrollbar Indicator */}
      <div className="w-full h-[3px] bg-zinc-900 rounded-full mt-16 relative overflow-hidden">
        <div 
          ref={progressBarFillRef}
          className="h-full bg-zinc-500 rounded-full w-0"
        />
      </div>
    </section>
  );
};

export default WhyCompany;
