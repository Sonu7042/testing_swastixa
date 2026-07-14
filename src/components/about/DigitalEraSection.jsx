import { useRef } from 'react';
import VariableProximity from '../common/VariableProximity';
export default function DigitalEraSection() {
  const containerRef = useRef(null);
  return (
    <section className="min-h-screen bg-black text-white px-6 sm:px-10 lg:px-20 2xl:px-40 py-24 2xl:py-0 ">

      {/* Top Accent Lines */}
      <div className="mb-24 max-w-[600px] 2xl:max-w-[900px]">
        <p className="text-base text-gray-300 text-[15px] 2xl:text-xl leading-relaxed space-y-6 2xl:space-y-10">We approach every project with clarity and purpose.
          Ideas are explored deeply, shaped thoughtfully, and aligned with brand intent.
          Design and strategy move together to create meaningful direction.
          Execution follows with precision, consistency, and attention to detail.
          The result is digital work that feels natural, focused, and impactful.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 2xl:gap-40 items-start">

        {/* Left Content */}
        <div
          ref={containerRef}
          style={{ position: 'relative' }}
        >
          {/* <VariableProximity
            label="A Digital Company Inspired by Indian Culture, Driven by Modern Thinking, Focused on Strategic Creativity, Built for the Digital Future."
            className="heading text-3xl sm:text-4xl xl:text-5xl 2xl:text-7xl leading-tight max-w-xl 2xl:max-w-3xl cursor-default block"
            fromFontVariationSettings="'wght' 400"
            toFontVariationSettings="'wght' 900"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          /> */}

          <VariableProximity
            label="A Digital Company Inspired by Indian Culture, Driven by Modern Thinking, Focused on Strategic Creativity, Built for the Digital Future."
            className="heading text-3xl sm:text-4xl xl:text-5xl leading-tight max-w-xl cursor-default block"
            fromFontVariationSettings="'wght' 400"
            toFontVariationSettings="'wght' 900"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>






        {/* Right Content */}
        <div className="max-w-xl 2xl:max-w-3xl text-gray-300 text-[15px] 2xl:text-xl leading-relaxed space-y-6 2xl:space-y-10">
          <p>
            Swastixa Digital was founded with a clear vision to create digital experiences that combine cultural depth with contemporary execution. Inspired by the Indian Swastika, a symbol of positivity, balance, and continuous movement, our name represents growth, progress, and purposeful direction. These values guide how we think, create, and collaborate.
          </p>

          <p>
            In a rapidly evolving digital environment, brands require more than visibility. They need clarity, consistency, and connection. We work across digital marketing, website development, production, and social media management to help brands communicate their story with confidence and coherence. Every service we offer is designed to support a unified digital presence.
          </p>

          {/* <p>
            Our process is built on understanding before execution. We invest time in learning a brand’s goals, audience, and challenges, ensuring every decision is intentional. From strategy to design and final delivery, our focus remains on building digital solutions that feel authentic, perform effectively, and support long-term growth. At Swastixa Digital, every project is an opportunity to create work that flows naturally and delivers lasting value.
          </p> */}
        </div>

      </div>
    </section>
  );
}

