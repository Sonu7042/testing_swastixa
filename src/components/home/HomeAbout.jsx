


import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "./Particles";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const imgRefs = useRef([]);

  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      return; // ❌ No animation on mobile
    }

    const section = sectionRef.current;
    const right = rightRef.current;
    const images = imgRefs.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(right, {
      yPercent: -75,
      ease: "none",
    });

    images.forEach((img) => {
      if (img) {
        gsap.fromTo(
          img,
          { scale: 0.65 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              end: "bottom 10%",
              scrub: true,
              onUpdate: (self) => {
                const s = 0.65 + Math.sin(self.progress * Math.PI) * 0.35;
                gsap.set(img, { scale: s });
              },
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  const addToImgRefs = (el) => {
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el);
    }
  };

  const imagesList = [
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-about-page-images/two-website-design-swastixa.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-about-page-images/three-website-design-swastixa.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-about-page-images/one-website-design-swastixa.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-about-page-images/four-website-design-swastixa.jpg",
  ];
  return (
    <section
      ref={sectionRef}
      // className="w-full min-h-screen flex flex-col  md:flex-row overflow-hidden    "
      className="relative min-h-screen w-full overflow-hidden"
    >
      <Particles
        // particleCount={300}
        // particleColors={["#ffffff"]}
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
      <div className="relative z-20 flex flex-col-reverse md:flex-row w-full h-auto md:h-screen">

        {/* ===== Right Section (Images) ===== */}
        <div
          ref={rightRef}
          className={`w-full md:w-[65%] ${isMobile ? "h-auto pt-6" : "h-[350vh] pt-[65vh]"
            } flex flex-col items-center gap-6 px-4`} >
          {imagesList.map((src, index) => (
            <div
              key={index}
              className="w-full sm:w-[90%] md:w-[85%] h-[45vh] sm:h-[55vh] md:h-[67vh] 
                relative overflow-hidden rounded-xl"
            >
              <img
                ref={addToImgRefs}
                src={src}
                alt=""
                className="w-full h-full object-cover rounded-xl"
                style={{
                  transformOrigin: "center",
                  willChange: isMobile ? "auto" : "transform",
                  transform: isMobile ? "scale(1)" : "",
                }}
              />
            </div>
          ))}
        </div>

        {/* ===== Left Section (Text) ===== */}
        <div className="w-full md:w-[35%] h-auto  md:h-full flex justify-center items-center max-sm:mt-10 text-white p-4 md:p-10">
          <div
            className="left-para max-w-[450px] text-left rounded-2xl p-4 md:p-10 text-center md:text-left"
            style={{
              background: "#0c0c0c00",
              backdropFilter: "blur(15px)",
              boxShadow: "rgb(110 109 109 / 25%) 1.5px 1px 2.8px inset",
            }}
          >
            <h1 className="text-3xl md:text-5xl   font-bold mb-8 sm:mb-10">
              Our Philosophy <span className="text-blue-500">Rooted</span>  in Culture
            </h1>

            <p className="text-justify hyphens-auto mb-8 break-words text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
              Swastixa means eternal flow in Sanskrit. This principle guides everything—how we understand your business, collaborate with teams, and serve clients. Like water adapting to every vessel, we honor cultural wisdom in strategy, creativity, and execution. From client relationships to creative processes, culture shapes every decision we make.
            </p>

            {/* <button className="lg:mt-8 underline">About Us</button> */}



            <button
              className="group relative flex flex-col items-center justify-center max-w-[180px] w-[100px] h-[50px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none"
              type="button"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "8px",
                opacity: 1,
                border: "none",
                padding: 0,
              }}
              data-framer-name="desktop"
            >
              <div
                className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0"
                data-framer-name="Glow"
                style={{
                  background:
                    "radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                  borderRadius: "8px",
                  filter: "blur(15px)",
                }}
              ></div>

              <div
                className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100"
                data-framer-name="Glow Hover"
                style={{
                  background:
                    "radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                  borderRadius: "8px",
                  filter: "blur(18px)",
                }}
              ></div>

              <div
                className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0"
                data-framer-name="Stroke"
                style={{
                  background:
                    "radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                  borderRadius: "8px",
                }}
              ></div>

              <div
                className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100"
                data-framer-name="Stroke Hover"
                style={{
                  background:
                    "radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                  borderRadius: "8px",
                }}
              ></div>

              <div
                className="absolute inset-[1px] pointer-events-none z-10 rounded-[7px]"
                data-framer-name="Fill"
                style={{
                  backgroundColor: "rgb(0, 0, 0)",
                  opacity: 1,
                }}
              ></div>

              <div
                className="relative z-20 flex flex-col items-center justify-center opacity-100"
                data-framer-name="text content"
              >
                <div
                  className="flex flex-col items-center justify-center transform-none opacity-100"
                  data-framer-name="Text"
                >
                  <p
                    className="m-0 p-0 font-sans text-[15px] font-medium text-white tracking-wide"
                    style={{
                      WebkitFontSmoothing: "antialiased",
                      textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                    }}
                  >
                    <Link to="/about">About Us</Link>
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;