import React from "react";
// import CareersHero from "../components/careers/CareersHero";
import ContactCareer from "../components/careers/ContactCareer";
import InnerPageHeader from "../components/common/innerPageHeader";
import Particles from "../components/home/Particles";
import CTASection from "../components/common/CTASection";
// import CareersHero from "../components/careers/careersHero";

export default function Careers() {
  return (
    <>
      <div className="relative z-0 w-full bg-black min-h-screen xl:px-20 px-0 pt-20 overflow-hidden">
        {/* <CareersHero /> */}
        <Particles
          particleBaseSize={400}
          particleColors={['#2196F3', '#FFFFFF']}
          particleCount={350}
          particleSpread={25}
          speed={0.3}
          // particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <InnerPageHeader title="Careers" description="At Swastixa, our Careers page showcases opportunities for creative and strategic talent, including Senior Graphic Designer, Copywriter, Client Servicing Executive, Art Director, Motion Graphics Designer, and Social Media Manager, with more roles to be added as we grow." />
        <ContactCareer />
      </div>
      <CTASection />
    </>
  );
}
