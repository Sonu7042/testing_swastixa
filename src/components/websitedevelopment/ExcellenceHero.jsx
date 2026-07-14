import React from "react";
import { useNavigate } from "react-router-dom";

const ExcellenceHero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-black min-h-screen flex items-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-[520px]">
            <h2 className="text-[#8B8B8B]">Website Development</h2>

            <h1
              className="
                text-white
                uppercase
                font-medium
                tracking-[4px]
                text-[20px]
                md:text-[24px]
                lg:text-[32px]
                leading-[1.15]
              "
            >
              Create Websites That Look Good and Perform Better
            </h1>
            

            <p
              className="
                mt-6
                text-[#8B8B8B]
                text-[15px]
                leading-[1.9]
                max-w-[600px]
              "
            >
              Your website is often the first serious interaction people have with your brand. It should not only look professional but also be easy to use, responsive, fast, and built to support your business goals. As a website designing company in India, Swastixa creates modern websites rooted in seamless user experiences and strong digital performance.
            </p>
            <p
              className="
                mt-3
                text-[#8B8B8B]
                text-[15px]
                leading-[1.9]
                max-w-[600px]
              "
            >
              We focus on both design and functionality. Whether you need a corporate website, service website, landing page, portfolio website, or product-focused website, we create digital experiences that are clean, responsive, SEO-ready, and conversion-friendly.
            </p>

            <button
              className="
                mt-10
                bg-[#1F1F22]
                text-white
                font-medium
                px-10
                py-5
                rounded-xl
                transition-all
                duration-300
                hover:bg-[#2A2A2E]
                hover:scale-[1.02]
              "
              onClick={() => {
                navigate("/#contact");
              }}
            >
              Start Our Project
            </button>

            {/* TRUSTED BY */}
           
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[560px]">

              {/* IMAGE CARD */}
              <div
                className="
                  overflow-hidden
                  rounded-[28px]
                  shadow-[0_20px_80px_rgba(255,255,255,0.04)]
                "
              >
                <img
                  src="https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-all-eight-pages-images/swastixa-service-website-development.webp"
                  alt="Team Meeting"
                  className="
                    w-full
                    h-[420px]
                    md:h-[480px]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* CODE CARD */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExcellenceHero;