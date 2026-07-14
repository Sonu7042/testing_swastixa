import React from 'react';

const approachSteps = [
  {
    number: '01',
    title: 'Research',
    description: 'We understand the brand, audience, market, and opportunities through detailed analysis.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We build a focused roadmap aligned with business goals, communication needs, and growth objectives.'
  },
  {
    number: '03',
    title: 'Execution',
    description: 'We launch and manage campaigns, content, websites, and execute digital marketing with precision.'
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'We continuously improve performance using data, testing, and actionable insights.'
  }
];

const OurApproach = () => {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 w-full flex flex-col items-center select-none border-t border-[#121214]">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-16">
        <span className="text-[#71717a] text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
          Our Approach
        </span>
        <h2 className="text-3xl sm:text-[42px] font-extrabold tracking-tight text-white mb-4 leading-none">
          How We Deliver Results
        </h2>
        <p className="text-[#a1a1aa] text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
          A structured process designed to transform ideas into measurable business growth.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl px-4 lg:px-0">
        {approachSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-start text-left group">
            {/* Dark Premium Circle */}
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center bg-[#18181b] border border-[#2d2d31] transition-all duration-500 group-hover:scale-105 group-hover:border-[#3f3f46] relative overflow-hidden"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.03), 0 4px 15px rgba(0, 0, 0, 0.4)'
              }}
            >
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none" />
              
              <span className="text-white group-hover:text-blue-400 font-semibold text-lg transition-colors duration-300">
                {step.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mt-6 mb-3 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-[#71717a] group-hover:text-zinc-400 text-sm leading-relaxed font-light transition-colors duration-300 max-w-[260px] sm:max-w-none">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurApproach;