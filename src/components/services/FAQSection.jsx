import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "1. What services does Swastixa offer?",
        answer:
            "Swastixa is a full-service digital marketing agency offering Content Marketing, Social Media Marketing, Performance Marketing, Website Development, Video Production, Influencer Marketing, and Packaging & Design solutions.",
    },
    {
        question: "2. Do you work with businesses of all sizes?",
        answer:
            "Yes. We partner with startups, SMEs, established enterprises, and growing brands across diverse industries, tailoring our strategies to match each business's goals and stage of growth.",
    },
    {
        question: "3. How do you develop a marketing strategy?",
        answer:
            "Every project begins with understanding your business, target audience, competitors, and objectives. Based on these insights, we create a customised strategy designed to deliver measurable results.",
    },
    {
        question: "4. Can I choose only one service?",
        answer:
            "Absolutely. Whether you need a new website, social media management, content creation, or performance marketing, you can opt for individual services or an integrated digital marketing solution.",
    },
    {
        question: "5. Do you create customised marketing plans?",
        answer:
            "Yes. We don't believe in one-size-fits-all solutions. Every strategy is developed around your industry, audience, business objectives, and growth priorities.",
    },
    {
        question: "6. Which social media platforms do you manage?",
        answer:
            "We create and manage content for Instagram, Facebook, LinkedIn, YouTube, and other platforms based on where your audience is most active.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black py-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <span className="text-white lg:text-[24px] text-[20px]  font-medium">
                        Everything You Need to Know
                    </span>
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-r
                  from-[#1C1C20]
                  to-[#202024]
                  transition-all
                  duration-300
                  hover:border-white/20
                "
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="
                    w-full
                    flex
                    items-center
                    justify-between
                    px-6
                    py-6
                    text-left
                  "
                                >
                                    <span
                                        className="
                      text-white
                      lg:text-[18px]
                      text-mb
                      font-medium
                    "
                                    >
                                        {faq.question}
                                    </span>

                                   <div
  className="relative flex items-center justify-center
             w-4 h-4 sm:w-5 sm:h-5
             flex-shrink-0"
>
  {/* Horizontal Line */}
  <span
    className="absolute w-full h-[2px] rounded-full bg-white"
  />

  {/* Vertical Line */}
  <span
    className={`absolute h-full w-[2px] rounded-full bg-white
      transition-all duration-300 ease-in-out
      ${isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"}`}
  />
</div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                        >
                                            <div className="border-t border-white/5 px-6 py-6">
                                                <p
                                                    className="
                            text-[#9A9A9A]
                            text-[15px]
                            leading-8
                            lg:max-w-[95%]
                            max-w-full
                          "
                                                >
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}