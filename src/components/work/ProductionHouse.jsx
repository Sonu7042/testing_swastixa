import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import InnerPageHeader from "../components/common/InnerPageHeader";
import VirtualVideoList from "./VirtualVideoList";
import WorkHero from "./WorkHero";
// import VirtualVideoList from "../components/work/VirtualVideoList";
// import WorkHero from "../components/work/WorkHero";

const constructionVideos = [
  { id: 1, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/the-cullinan-june-construction-update.mp4" },
  { id: 2, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/trump-residences-gurgaon-construction-update-june.mp4" },
  { id: 3, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/onedxp-june-update.mp4" },
  { id: 4, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/trump-towers-noida-construction-update-june.mp4" },
  { id: 5, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/jacob-may-swastixa.mp4" },
  { id: 6, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/trumptower-noida.mp4" },
  { id: 7, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/onegroup-swastixa.mp4" },
  { id: 8, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/trumptower-swastixa.mp4" },
  { id: 9, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/aarize.mp4" },
  { id: 10, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/trumptower-may.mp4" },
  // { id: 27, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/smart-world-sky-arc.mp4" },
  // { id: 28, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/smart-world-trump-tower.mp4" },
  { id: 11, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/trump-tower-construction.mp4" },
  { id: 12, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/sky-arc-construction.mp4" },
  { id: 13, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/trump-tower.mp4" },
  { id: 14, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/sky-arc-construction-update.mp4" },
  { id: 15, src: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/production-house-video/swastixa-all-videos/sky-arc.mp4" },
];

const ProductionHouse = () => {
  const { tab } = useParams();
  const navigate = useNavigate();
  
  // default to "filmes" if tab is undefined or invalid
  const activeTab = tab === "construction" ? "construction" : "filmes";

  return (
    <main className="bg-black min-h-screen text-white">
      <div className="pt-24 md:pt-40 px-4">
        <h1 className="text-center text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase">
          Production
        </h1>
        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto text-lg md:text-xl">
          Crafting cinematic experiences and high impact visual stories for global brands.
          {/* Crafting cinematic experiences and high-impact visual stories for brands. */}
        </p>
      </div>

      <div className="mt-10 md:mt-20">
        <WorkHero />
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-start xl:ml-36 items-center gap-6 mt-0 mb-0 px-4">
        <button
          onClick={() => navigate("/work/Production/films")}
          className={`px-10 py-3 rounded-sm text-sm  tracking-wider font-semibold transition-all duration-300 ${activeTab === "filmes"
              ? "bg-white text-black  scale-105"
              : "bg-transparent border-2 border-white/20 text-gray-400 hover:text-white hover:border-white"
            }`}
        >
          Films
        </button>
        <button
          onClick={() => navigate("/work/Production/construction")}
          className={`px-10 py-3 rounded-sm text-sm  tracking-wider font-semibold transition-all duration-300 ${activeTab === "construction"
              ? "bg-white text-black  scale-105"
              : "bg-transparent border-2 border-white/20 text-gray-400 hover:text-white hover:border-white"
            }`}
        >
          Constructions
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-10 min-h-[50vh]">
        {activeTab === "filmes" ? (
          <VirtualVideoList />
        ) : (
          <VirtualVideoList videos={constructionVideos} />
        )}
      </div>
    </main>
  );
};

export default ProductionHouse;
