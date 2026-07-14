import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollRevealText = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    // Select all the line wrappers we created in the render
    const lines = container.querySelectorAll('.line-inner');

    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%", // Animation starts when the line is 85% down the viewport
            toggleActions: "play none none reverse", 
          },
        }
      );
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Simple logic to split text by periods or manual breaks
  // For a robust production app, you might use a regex or a library
  const splitLines = text.split('. ').map(line => line.trim());

  return (
    <div ref={containerRef} className="max-w-3xl mx-auto py-20 px-6">
      {splitLines.map((line, index) => (
        <div key={index} className="overflow-hidden mb-2">
          <p className="line-inner text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
            {line}{index !== splitLines.length - 1 ? '.' : ''}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ScrollRevealText;