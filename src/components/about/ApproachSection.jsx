import React from "react";

const ApproachSection = () => {
  return (
    <section className="w-full bg-black text-white px-[clamp(1rem,10vw,6rem)] py-[clamp(0rem,8vw,2rem)]">
      
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* LEFT – 40% */}
        <div className="
          w-full
          lg:w-[70%]
          flex flex-col gap-6
        ">
          <h2 className="
            font-semibold
            text-[clamp(2rem,3.5vw,3.5rem)]
            leading-tight
            ml-4 lg:ml-7 xl:ml-12
          ">
            Our Approach to Digital Creation
          </h2>
          {/* // text-[clamp(0.95rem,1.1vw,1.1rem)] */}

          <p className="
            max-w-[60ch]
            text-gray-300 text-[15px] 2xl:text-xl leading-relaxed space-y-6 2xl:space-y-10  ml-4 lg:ml-7 xl:ml-12
          ">
            Our way of working is rooted in clarity, collaboration, and
            consistency. Each project begins with listening and research,
            followed by strategic planning and creative exploration. We
            maintain transparency throughout the process, ensuring alignment
            at every stage. By combining structured thinking with creative
            freedom, we deliver digital solutions that are purposeful,
            scalable, and aligned with business objectives.
          </p>
        </div>

        {/* RIGHT – 60% (Future use / visuals / animation) */}
        {/* <div className="
          w-full
          lg:w-[60%]
        ">
        </div> */}

      </div>
    </section>
  );
};

export default ApproachSection;
