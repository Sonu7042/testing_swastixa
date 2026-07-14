import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer:
            "Our standard engagements last between 8 to 14 weeks. This includes the full discovery, design, development, and QA phases. Complex enterprise platforms may require a longer roadmap.",
    },
    {
        question: "Do you offer post-launch support?",
        answer:
            "Yes. We provide ongoing maintenance, performance monitoring, security updates, and feature enhancements after launch.",
    },
    {
        question: "Can you work with our existing brand guidelines?",
        answer:
            "Absolutely. We can seamlessly integrate your existing brand system while improving user experience and digital consistency.",
    },
    {
        question: "Do you handle SEO optimization?",
        answer:
            "Yes. Technical SEO, Core Web Vitals optimization, structured data, and content recommendations are included where required.",
    },
    {
        question: "What technologies do you use?",
        answer:
            "We primarily work with React, Next.js, Node.js, Tailwind CSS, TypeScript, PostgreSQL, and cloud infrastructure platforms.",
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
                    <span className="text-white text-sm font-medium">
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
                      text-[18px]
                      font-medium
                    "
                                    >
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={18}
                                        className={`
                      text-white/60
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                                    />
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
                            max-w-[95%]
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