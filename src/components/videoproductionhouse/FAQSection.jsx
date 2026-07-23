import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What types of videos do you produce?",
        answer:
            "We produce brand films, corporate videos, product videos, social media reels, testimonials, campaign videos, and promotional content.",
    },
    {
        question: "Do you handle the complete production process?",
        answer:
            "Yes. We manage concept development, scriptwriting, shoot planning, production, editing, graphics, and final delivery.",
    },
    {
        question: "Can you create videos for social media?",
        answer:
            "Absolutely. We create platform-specific videos and reels optimised for engagement across social media channels.",
    },
    {
        question: "How long does video production take?",
        answer:
            "Timelines depend on the project's scope, script complexity, and production requirements. We provide a clear schedule before execution.",
    },
    {
        question: "Do you help with video scripting?",
        answer:
            "Yes. We develop scripts that communicate your message clearly while keeping your audience engaged.",
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
    <span className="text-white lg:text-[32px] text-[20px] font-medium">
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
        cursor-pointer
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
        className="
            relative
            flex
            items-center
            justify-center
            w-4
            h-4
            sm:w-5
            sm:h-5
            flex-shrink-0
        "
    >
        {/* Horizontal Line */}
        <span className="absolute w-full h-[2px] rounded-full bg-white" />

        {/* Vertical Line */}
        <span
            className={`
                absolute
                h-full
                w-[2px]
                rounded-full
                bg-white
                transition-all
                duration-300
                ease-in-out
                ${
                    isOpen
                        ? "scale-y-0 opacity-0"
                        : "scale-y-100 opacity-100"
                }
            `}
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
        leading-6
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