


import React from "react";
import Particles from "./Particles"; // Make sure this path is correct

const EndToEndExcellence = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[70vh] p-[12px] sm:p-6 overflow-hidden">

      {/* ==== PARTICLES BACKGROUND ==== */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleBaseSize={120}
          particleColors={['#2196F3', '#FFFFFF']}
          particleCount={350}
          particleSpread={25}
          speed={0.3}
          // particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* ==== CONTENT WRAPPER ==== */}
      <div className="relative z-20 w-full max-w-[1364px] rounded-[10px] overflow-hidden">

        {/* === CONTENT BOX === */}
        <div
          className="relative w-full h-full p-10 text-center"
          style={{
            background: "rgba(12, 12, 12, 0.0)", // Transparent background
            backdropFilter: "blur(15px)",        // Blur effect
            boxShadow: "rgb(110 109 109 / 25%) 1.5px 1px 2.8px inset", // Inner shadow
          }}
        >
          <h1 className="text-white text-[29px] md:text-7xl font-bold">
            Excellence <span className="text-blue-500">Through</span> Flow
          </h1>

          <p className="text-gray-300 text-left lg:text-center text-[18px]  sm:text-xl mt-6 max-w-3xl mx-auto">
            Website development, digital marketing, in-house production—all under one roof. Every touchpoint connects perfectly, creating balanced ecosystems that deliver results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EndToEndExcellence;
