import LogoCarousel from "../components/home/Logo";
import LightRays from "../components/services/LightRays";
import ServiceCards from "../components/services/servicecards";
import OurApproach from "../components/services/OurApproach";
import WhyCompany from "../components/services/Whycompany";
import FAQSection from "../components/services/FAQSection";
import CTASection from "../components/common/CTASection";

const Services = () => {
    return (
        <div className="bg-black min-h-screen ">
            <div style={{ width: '100%', height: '650px', position: 'relative' }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                    <div className="pointer-events-auto flex flex-col items-center max-w-3xl mt-24">
                        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold text-white tracking-tight mb-4 leading-tight">
                            Swastixa Marketing Agency
                        </h1>
                        <p className="text-gray-400 text-base sm:text-lg font-light mb-8 max-w-2xl leading-relaxed">
                           A performance-driven digital marketing agency Gurgaon <br /> businesses can trust for growth, visibility, and conversion
                        </p>
                        <button
                            onClick={() => {
                                document.getElementById('service-cards')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-zinc-200 transition-all duration-300 cursor-pointer animate-bounce"
                            aria-label="Scroll to services"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-black"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div id="service-cards" className="bg-black text-white py-0 px-6 sm:px-12 lg:px-24 xl:px-32 flex flex-col items-start text-left w-full select-none">
                <div className="max-w-4xl mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-[46px] font-extrabold tracking-tight mb-4 text-white leading-none">
                        What we do
                    </h1>
                    <p className="text-[#a1a1aa] text-base sm:text-lg font-light leading-relaxed max-w-3xl">
                        We help brands grow through strategy, content, <br /> advertising, social media, website development, <br /> and performance marketing.
                    </p>
                </div>
            </div>


            <ServiceCards />

            <OurApproach />
            <WhyCompany />
            <LogoCarousel />
            <FAQSection />
            <CTASection />

        </div>
    );
};

export default Services;