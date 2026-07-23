import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What does an SEO agency do?",
        answer:
            "An SEO agency improves your website's visibility on search engines like Google through keyword research, on-page optimisation, technical SEO, content strategy, and link-building. The goal is to attract relevant organic traffic and generate qualified leads.",
    },
    {
        question: "Why is SEO important for my business?",
        answer:
            "SEO helps your business appear when potential customers search for your products or services. It increases website traffic, builds credibility, improves user experience, and delivers long-term growth without relying solely on paid advertising.",
    },
    {
        question: "How long does SEO take to show results?",
        answer:
            "SEO is a long-term strategy. While timelines vary based on your industry, competition, and website health, most businesses begin seeing measurable improvements within 3 to 6 months.",
    },
    {
        question: "What SEO services do you offer?",
        answer:
            "We offer comprehensive SEO services, including keyword research, technical SEO audits, on-page optimisation, content optimisation, local SEO, link-building, competitor analysis, and monthly performance reporting.",
    },
    {
        question: "Do you provide local SEO services?",
        answer:
            "Yes. We optimise your online presence to improve visibility in local search results through Google Business Profile optimisation, location-specific keywords, local citations, and reputation management.",
    },
    {
        question: "Can SEO help generate more leads?",
        answer:
            "Absolutely. By attracting users who are actively searching for your products or services, SEO helps bring high-intent visitors to your website, increasing the likelihood of enquiries, leads, and conversions.",
    },
    {
        question: "Do you optimise existing websites or build SEO from scratch?",
        answer:
            "We do both. Whether you have an existing website that needs optimisation or you're launching a new one, we develop an SEO strategy tailored to your business goals.",
    },
    {
        question: "How do you choose the right keywords?",
        answer:
            "We conduct detailed keyword research based on search intent, competition, industry trends, and your target audience to identify terms that can drive relevant traffic and business growth.",
    },
    {
        question: "Will my website rank #1 on Google?",
        answer:
            "No ethical SEO agency can guarantee a #1 ranking. Search rankings depend on many factors, including competition and search engine algorithms. Our focus is on sustainable strategies that improve visibility, traffic, and business outcomes over time.",
    },
    {
        question: "How do you measure SEO success?",
        answer:
            "We monitor key performance indicators such as keyword rankings, organic traffic, click-through rates, user engagement, lead generation, and conversions, providing transparent monthly reports with actionable insights.",
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