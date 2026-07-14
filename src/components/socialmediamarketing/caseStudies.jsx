import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    title: "Content Writing",
    description:
      "Creating compelling content that connects with your audience and strengthens your brand.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400",
  },
  {
    id: 2,
    title: "Website Design",
    description:
      "Creating modern, user-focused websites that deliver seamless digital experiences.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Design systems and interfaces built for usability and conversion.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Technical SEO and content strategies that improve rankings.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400",
  },
  {
    id: 5,
    title: "Web Development",
    description:
      "Scalable frontend and backend solutions built for growth.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400",
  },
];

export default function CaseStudies() {
  const [showMore, setShowMore] = useState(false);

  const visibleCards = caseStudies.slice(0, 2);
  const hiddenCards = caseStudies.slice(2);

  return (
    <section className="bg-[#111216] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
          <div>
            <p className="text-[12px] tracking-[2px] uppercase text-[#8F8F8F]">
              Web Design Services
            </p>

            <h2 className="text-white text-3xl md:text-4xl mt-3 font-medium">
              Case Studies
            </h2>
          </div>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-white hover:text-gray-300 transition-all"
          >
            {showMore ? "Show Less" : "View Archive"}

            <ArrowRight
              size={18}
              className={`transition-transform duration-300 ${
                showMore ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>

        {/* Visible Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleCards.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Hidden Cards */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {hiddenCards.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <Card item={item} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Card({ item }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A]">
        <img
          src={item.image}
          alt={item.title}
          className="
            w-full
            h-[320px]
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        
      </div>

      <h3 className="text-white text-[28px] font-medium mt-5 mb-3">
        {item.title}
      </h3>

      <p className="text-[#8B8B8B] text-[15px] leading-7">
        {item.description}
      </p>
    </div>
  );
}