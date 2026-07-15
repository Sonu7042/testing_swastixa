

import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// Layout
import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";


import AOS from "aos";
import { Toaster } from "react-hot-toast";


// Pages (Lazy Loaded)
const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const Careers = lazy(() => import("./pages/Careers"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const BlogInner = lazy(() => import("./pages/BlogInner"));
const ProductionHouse = lazy(() => import("./components/work/ProductionHouse"));
const SocialMediaManagement = lazy(() => import("./components/work/SocialMediaManagement"));
const WebsiteDevelopment = lazy(() => import("./components/work/WebsiteDevelopment"));
const DigitalMarketing = lazy(() => import("./components/work/DigitalMarketing"));
const Reels = lazy(() => import("./pages/Reels"));
const Branding = lazy(() => import("./pages/Branding"));
const Print = lazy(() => import("./pages/Print"));
const Services = lazy(() => import("./pages/Services"));
const WebsiteDevelopmentPage = lazy(() => import("./pages/WebsiteDevelopment"));
const SeoAgency = lazy(() => import("./pages/SeoAgency"));
const ContentMarketingAgency = lazy(() => import("./pages/ContentMarketingAgency"));
const SocialMediaMarketingAgency = lazy(() => import("./pages/SocialMediaMarketingAgency"));
const PerformanceMarketingAgency = lazy(() => import("./pages/PerformanceMarketingAgency"));
const VideoProductionHouse = lazy(() => import("./pages/VideoProductionHouse"));
const InfluencerMarketingAgency = lazy(() => import("./pages/InfluencerMarketingAgency"));
const PackagingDesign = lazy(() => import("./pages/PackagingDesign"));

import "aos/dist/aos.css";
import "./App.css";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollButton from "./components/common/ScrollButton";
import CommingSoon from "./components/common/CommingSoon";

// Smooth Scroll
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageLoader = () => (
  <div className="w-full h-screen bg-black flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 10); // Increased a bit to actually see the logo video if intended, or set to 0 to be instant.

    return () => clearTimeout(timer);
  }, []);




  const disableRightClick = (e) => {
    e.preventDefault();
  };


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  if (loader) {
    return <PageLoader />;
  }



  return (
    // <div onContextMenu={disableRightClick}>
    <div >
      <Toaster position="top-right" />
      <ScrollToTop />
      <ScrollButton />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/Production" element={<ProductionHouse />} />
          <Route path="/work/Production/:tab" element={<ProductionHouse />} />
          <Route path="/work/SocialMedia" element={<SocialMediaManagement />} />
          <Route path="/work/WebsiteDevelopment" element={<WebsiteDevelopment />} />
          <Route path="/work/DigitalMarketing" element={<DigitalMarketing />} />
          <Route path="/awards" element={<CommingSoon />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogInner />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/reels" element={<Reels />} />
          <Route path="/work/Branding" element={<Branding />} />
          <Route path="/work/Print" element={<Print />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
          <Route path="/services/seo-agency" element={<SeoAgency />} />
          <Route path="/services/content-marketing" element={<ContentMarketingAgency />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketingAgency />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketingAgency />} />
          <Route path="/services/video-production-house" element={<VideoProductionHouse />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketingAgency />} />
          <Route path="/services/packaging-design" element={<PackagingDesign />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </div>
  );
}
