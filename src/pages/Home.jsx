import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import HeroSection from "../components/home/HeroSecond";
import HomeAbout from "../components/home/HomeAbout";
import ForthSection from "../components/home/HomeWork";
import EndToEndExcellence from "../components/home/EndToEndExcellence";
import LogoCarousel from "../components/home/Logo";
import ContactSection from "../components/common/Contact";
import TorchlightTextReveal from "../components/home/MouseGlowText";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  // useEffect(() => {
  //   if (location.hash === "#contact") {
  //     // const timer = setTimeout(() => {
  //     const el = document.getElementById("contactSection");
  //     if (el) {
  //       el.scrollIntoView({ behavior: "instant", block: "start" });
  //     }
  //     // }, 10);
  //     // return () => clearTimeout(timer);
  //   }
  // }, [location]);


  useEffect(() => {
    if (location.hash === "#contact") {


      const timer = setTimeout(() => {
        const el = document.getElementById("contactSection");
        if (el) {
          el.scrollIntoView({ behavior: "instant", block: "start" });

          // 🔥 URL se #contact remove (without reload)
          window.history.replaceState(
            null,
            "",
            location.pathname
          );
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <HeroSection />
      <HomeAbout />
      <EndToEndExcellence />
      <ForthSection />
      <LogoCarousel />
      <TorchlightTextReveal />
      <ContactSection />
    </main>
  );
}
