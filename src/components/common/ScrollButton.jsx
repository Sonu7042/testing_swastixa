import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        const scrollPosition = window.pageYOffset + window.innerHeight;
        const totalHeight = document.documentElement.scrollHeight;

        // Appear only when within the last 300px of the page (bottom section)
        if (scrollPosition >= totalHeight - 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-50 p-1 rounded-full bg-white text-black shadow-lg  transition-all duration-300 group active:scale-90 border border-white/20"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform  duration-300" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollButton;