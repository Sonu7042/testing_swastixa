import { useEffect, useRef } from "react";
import TextWriteAnimation from "./TextWriteAnimation";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;
    const videoEl = containerEl.querySelector("video");
    if (!videoEl) return;

    // Force autoplay compatibility for Safari & iOS
    videoEl.setAttribute("muted", "");
    videoEl.setAttribute("playsinline", "");
    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.playsInline = true;

    // Programmatic play trigger for Safari
    const playVideo = () => {
      videoEl.play().catch((err) => {
        console.warn("HeroSecond video autoplay blocked: ", err);
      });
    };

    playVideo();
    videoEl.addEventListener("loadedmetadata", playVideo);
    videoEl.addEventListener("loadeddata", playVideo);

    return () => {
      videoEl.removeEventListener("loadedmetadata", playVideo);
      videoEl.removeEventListener("loadeddata", playVideo);
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full min-h-[71vh] bg-white flex justify-center items-center px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        {/* Left Text Section */}
        <div className="text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug">
            DIGITAL AGENCY FOR <br />
            <span className="text-blue-500">
              {" "}
              <TextWriteAnimation />{" "}
            </span>
            <br />
            ROOTED IN CULTURE
          </h1>
        </div>

        {/* Right Image Section */}
        <div
          className="flex justify-center items-center w-full max-w-md"
          dangerouslySetInnerHTML={{
            __html: `
              <video
                autoplay
                loop
                muted
                playsinline
                preload="metadata"
                class="w-[100%] max-w-md object-contain"
                style="border: none; outline: none;"
              >
                <source
                  src="https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20HOME/Hero-2nd-video.mp4"
                  type="video/mp4"
                />
              </video>
            `
          }}
        />
      </div>
    </section>
  );
}
