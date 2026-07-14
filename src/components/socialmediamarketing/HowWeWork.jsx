import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Brand Analysis",
    description:
      "We evaluate your brand, audience, competitors, and existing social presence to uncover growth opportunities.",
  },
  {
    number: "02",
    title: "Strategy Planning",
    description:
      "Platform-wise content calendars and campaign ideas are developed to create consistent and meaningful communication.",
  },
  {
    number: "03",
    title: "Content Execution",
    description:
      "We manage content creation, publishing, community engagement, and campaign implementation across social platforms.",
  },
  {
    number: "04",
    title: "Measure & Improve",
    description:
      "Performance reports and ongoing optimisation help maximise engagement, reach, and business impact.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="text-white text-sm font-medium tracking-wide">
            How We Work
          </span>

          <h2 className="mt-4 text-[28px] md:text-[34px] font-light text-[#BDBDBD]">
            A Smarter Social Media Process
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {processSteps.map((step) => (
            <div key={step.number} className="group">
              {/* Circle */}
              <div
                className="
                  w-[82px]
                  h-[82px]
                  rounded-full
                  bg-[#2D2D2D]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  text-[24px]
                  font-light
                  mb-10
                  transition-all
                  duration-300
                  group-hover:bg-[#3A3A3A]
                  group-hover:border-white/20
                "
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-white text-[28px] font-medium mb-5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#8A8A8A] text-[15px] leading-8">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}