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
            <h2 className="text-[#8B8B8B]">SEO Agency</h2>

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
              Turn Search Traffic into Business Growth
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
              Your audience is already searching for products, services, and solutions like yours. The right SEO strategy helps your brand appear where it matters most and brings qualified traffic to your website. At Swastixa, we create SEO strategies that improve search visibility, strengthen your digital presence, and help your business grow organically.
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
              As an SEO agency, we focus on building long-term organic growth through a mix of keyword planning, technical improvements, content optimisation, and performance tracking. 


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
                  src="https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-all-eight-pages-images/swastixa-service-seo-agency.webp"
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