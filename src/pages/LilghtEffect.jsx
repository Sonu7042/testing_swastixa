import React, { useEffect, useRef } from "react";

const RippleEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const rippleSettings = {
      maxSize: 100,
      animationSpeed: 5,
      strokeColor: [148, 217, 255],
    };

    const canvasSettings = {
      blur: 8,
      ratio: 1,
    };

    function Coords(x, y) {
      this.x = x || null;
      this.y = y || null;
    }

    function Ripple(x, y, circleSize, ctx) {
      this.position = new Coords(x, y);
      this.circleSize = circleSize;
      this.maxSize = rippleSettings.maxSize;
      this.opacity = 1;
      this.ctx = ctx;
      this.strokeColor = `rgba(${Math.floor(
        rippleSettings.strokeColor[0]
      )}, ${Math.floor(rippleSettings.strokeColor[1])}, ${Math.floor(
        rippleSettings.strokeColor[2]
      )}, ${this.opacity})`;
      this.animationSpeed = rippleSettings.animationSpeed;
      this.opacityStep = (this.animationSpeed / (this.maxSize - circleSize)) / 2;
    }

    Ripple.prototype.update = function () {
      this.circleSize += this.animationSpeed;
      this.opacity -= this.opacityStep;
      this.strokeColor = `rgba(${Math.floor(
        rippleSettings.strokeColor[0]
      )}, ${Math.floor(rippleSettings.strokeColor[1])}, ${Math.floor(
        rippleSettings.strokeColor[2]
      )}, ${this.opacity})`;
    };

    Ripple.prototype.draw = function () {
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.strokeColor;
      this.ctx.arc(
        this.position.x,
        this.position.y,
        this.circleSize,
        0,
        2 * Math.PI
      );
      this.ctx.stroke();
    };

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const ripples = [];

    const height = window.innerHeight;
    const width = window.innerWidth;

    canvas.style.filter = `blur(${canvasSettings.blur}px)`;
    canvas.width = width * canvasSettings.ratio;
    canvas.height = height * canvasSettings.ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const animation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        if (!r) continue;
        r.update();
        r.draw();
        if (r.opacity <= 0) ripples.splice(i, 1);
      }
      requestAnimationFrame(animation);
    };

    const canvasMouseOver = (e) => {
      const x = e.clientX * canvasSettings.ratio;
      const y = e.clientY * canvasSettings.ratio;
      ripples.unshift(new Ripple(x, y, 2, ctx));
    };

    canvas.addEventListener("mousemove", canvasMouseOver);
    animation();

    // cleanup
    return () => {
      canvas.removeEventListener("mousemove", canvasMouseOver);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{ backgroundColor: "#26b4f4", zIndex: -1 }}
    ></canvas>
  );
};

export default RippleEffect;
