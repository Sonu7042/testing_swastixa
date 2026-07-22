import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Creative Brief",
    description:
      "We define the video's purpose, audience, messaging, and creative direction before production begins.",
  },
  {
    number: "02",
    title: "Pre-Production",
    description:
      "Scripts, storyboards, locations, schedules, and production planning are finalised for a smooth shoot.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Our team captures high-quality visuals while ensuring every scene reflects your brand story effectively.",
  },
  {
    number: "04",
    title: "Post Production",
    description:
      "Editing, sound design, motion graphics, and colour grading bring the final video to life.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="text-[#CECECE] text-[12px] sm:text-[13px] lg:text-[14px] font-bold uppercase tracking-[0.2em] block mb-1.5">
            How We Work
          </span>

          <h2 className="text-[28px] sm:text-[30px] lg:text-[32px] font-extrabold tracking-tight text-white leading-tight">
           From Concept to Final Cut
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {processSteps.map((step) => (
            <div key={step.number} className="group">
              {/* Circle */}
              <div
                className="
                   w-[70px]
    h-[70px]
    sm:w-[76px]
    sm:h-[76px]
    lg:w-[82px]
    lg:h-[82px]
    rounded-full
    bg-[#2D2D2D]
    border
    border-white/10
    flex
    items-center
    justify-center
    text-white
    text-[20px]
    sm:text-[22px]
    lg:text-[24px]
    font-light
    mb-6
    lg:mb-10
    transition-all
    duration-300
    group-hover:bg-[#3A3A3A]
    group-hover:border-white/20
                "
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-white text-[22px] sm:text-[24px] lg:text-[28px] font-medium mb-1.5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#8A8A8A] text-[14px] lg:text-[15px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}