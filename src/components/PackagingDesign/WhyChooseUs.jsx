import React from "react";
import {
  Palette,
  Search,
  Zap,
  TrendingUp,
  Shield,
  Rocket,
  Code2,
  Database,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Strategic Design",
    description:
      "Every packaging concept combines aesthetics, clarity, and brand storytelling to create lasting consumer impressions.",
  },
  {
    icon: Search,
    title: "Shelf-Ready Appeal",
    description:
      "Our designs help products stand out across retail shelves, e-commerce platforms, and every customer touchpoint.",
  },
  {
    icon: Zap,
    title: "Thoughtful Visuals",
    description:
      "Typography, colours, layouts, and information hierarchy are carefully crafted for better recognition and usability.",
  },
  {
    icon: TrendingUp,
    title: "Print-Ready Quality",
    description:
      "From concept to final artwork, we deliver production-ready designs that look professional and market-ready.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-white text-sm font-medium tracking-wide">
            Why Choose Us
          </span>

          <p className="max-w-[650px] mx-auto mt-4 text-[#8F8F8F] text-[16px] leading-relaxed">
            We design packaging that captures attention, communicates product value, and strengthens your brand identity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  min-h-[280px]
                  rounded-[18px]
                  border border-white/10
                  bg-gradient-to-b
                  from-[#050B17]
                  via-[#030814]
                  to-[#02050D]
                  p-7
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-56 h-56 bg-blue-500/10 blur-[100px]" />
                </div>

                {/* Top Border Glow */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10
                    w-12
                    h-12
                    rounded-xl
                    bg-white/5
                    border
                    border-white/5
                    flex
                    items-center
                    justify-center
                    mb-8
                    transition-all
                    duration-300
                    group-hover:bg-white/10
                  "
                >
                  <Icon
                    size={20}
                    className="text-white"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    relative
                    z-10
                    text-white
                    text-[24px]
                    font-medium
                    mb-5
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    relative
                    z-10
                    text-[#8B8B8B]
                    text-[15px]
                    leading-7
                  "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}