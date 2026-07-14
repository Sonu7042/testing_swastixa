
// export default CustomCursor;

import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;
    const delay = 0.25;

    const moveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", moveHandler);

    const animate = () => {
      currentX += (mouseX - currentX) * delay;
      currentY += (mouseY - currentY) * delay;

      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    animate();

    // Hover effect on buttons, links, etc.
    const interactiveElements = document.querySelectorAll("button, a");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform += " scale(2)";
        cursor.style.backgroundColor = "rgba(255,255,255,0.3)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
        cursor.style.backgroundColor = "transparent";
      });
    });

    // Click effect
    const clickHandler = () => {
      cursor.style.transform += " scale(0.8)";
      setTimeout(() => {
        cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }, 150);
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mousedown", clickHandler);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0 w-[25px] h-[25px]
        border-2 border-white rounded-full
        pointer-events-none
        z-[99999] 
        backdrop-blur-md
        transition-all duration-150 ease-out
      "
      style={{ mixBlendMode: "difference" }}
    />
  );
};

export default CustomCursor;
