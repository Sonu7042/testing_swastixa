
import React, { useEffect, useRef } from "react";
import Award from "../../assets/logo/awards.png";
import { Link } from "react-router-dom";
import OptimizedVideo from "../common/OptimizedVideo";

const AWARDS_VIDEO_URL = "https://res.cloudinary.com/dzsotenu5/video/upload/v1764048647/WhatsApp_Video_2025-11-21_at_2.50.32_PM_1_kmkacz.mp4";


const AwardsHero = () => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const rippleSettings = {
      maxSize: 100,
      animationSpeed: 5,
      strokeColor: [88, 33, 18],
    };

    const canvasSettings = {
      blur: 8,
      ratio: 1,
    };

    function Coords(x, y) {
      this.x = x || null;
      this.y = y || null;
    }

    const Ripple = function (x, y, circleSize, ctx) {
      this.position = new Coords(x, y);
      this.circleSize = circleSize;
      this.maxSize = rippleSettings.maxSize;
      this.opacity = 1;
      this.ctx = ctx;
      this.strokeColor = `rgba(${rippleSettings.strokeColor[0]}, ${rippleSettings.strokeColor[1]}, ${rippleSettings.strokeColor[2]}, ${this.opacity})`;
      this.animationSpeed = rippleSettings.animationSpeed;
      this.opacityStep = (this.animationSpeed / (this.maxSize - circleSize)) / 1;
    };

    Ripple.prototype = {
      update: function () {
        this.circleSize += this.animationSpeed;
        this.opacity -= this.opacityStep;
        this.strokeColor = `rgba(${rippleSettings.strokeColor[0]}, ${rippleSettings.strokeColor[1]}, ${rippleSettings.strokeColor[2]}, ${this.opacity})`;
      },
      draw: function () {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.arc(this.position.x, this.position.y, this.circleSize, 0, 2 * Math.PI);
        this.ctx.stroke();
      },
    };

    const ripples = [];

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * canvasSettings.ratio;
      canvas.height = height * canvasSettings.ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.style.filter = `blur(${canvasSettings.blur}px)`;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const mouseEffect = (e) => {
      const x = e.clientX * canvasSettings.ratio;
      const y = e.clientY * canvasSettings.ratio;
      ripples.unshift(new Ripple(x, y, 2, ctx));
    };

    window.addEventListener("mousemove", mouseEffect);

    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.update();
        r.draw();
        if (r.opacity <= 0) ripples.splice(i, 1);
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", mouseEffect);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const heroData = [
    {
      id: 1,
      award: {
        title: "AWARDS",
        year: 2025,
        subtitle: "Icon Design Archive",
        by: "For Designers",
        selection: "Official Selection",
      },
      description:
        "Recognition validates our commitment to excellence. Selected among India's leading creative agencies for our innovative approach to culturally-grounded digital storytelling.",
      button: { text: "Button", to: "#" },
    },
  ];

  const { description, button } = heroData[0];


  return (
    <section ref={sectionRef} className="h-screen w-full bg-black flex items-center justify-evenly overflow-hidden relative">

      {/* === Background Video === */}
      <OptimizedVideo
        src={AWARDS_VIDEO_URL}
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Wrapper */}
      <div ref={wrapperRef} className="absolute inset-0 pointer-events-none z-20"></div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto px-4 md:px-10 gap-20 h-full relative z-30">

        {/* Left Image */}
        <div className="flex items-center justify-center h-full w-full">
          <img
            src={Award}
            alt="Awards_img"
            className="max-w-xs md:max-w-2xl w-full object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center items-center md:items-start h-full w-full">
          <div className="text-gray-300 text-base md:text-lg pb-6 max-w-[600px] mt-8 md:mt-0 text-justify hyphens-auto break-words md:text-left">
            {description}
          </div>

          <Link
            to={button.to}
            className="text-white text-lg mt-2 underline hover:no-underline transition"
          >
            {button.text}
          </Link>
        </div>

      </div>
    </section>
  );


};

export default AwardsHero;
