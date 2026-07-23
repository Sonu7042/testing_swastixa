import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer:
            "Our standard engagement ranges between 8 to 14 weeks. This includes discovery, design, development, content, testing, and launch depending on the project scope.",
    },
    {
        question: "Do you offer post-launch support?",
        answer:
            "Yes. We offer post-launch support for updates, maintenance, performance checks, tracking, and optimisation.",
    },
    {
        question: "Can you work with our existing brand guidelines?",
        answer:
            "Yes. We can work within your existing brand guidelines while improving the digital experience, content flow, and overall brand communication.",
    },
    // {
    //     question: "Do you handle SEO optimization?",
    //     answer:
    //         "Yes. Technical SEO, Core Web Vitals optimization, structured data, and content recommendations are included where required.",
    // },
    // {
    //     question: "What technologies do you use?",
    //     answer:
    //         "We primarily work with React, Next.js, Node.js, Tailwind CSS, TypeScript, PostgreSQL, and cloud infrastructure platforms.",
    // },
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