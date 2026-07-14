import React, { useEffect, useRef } from "react";

const TorchlightTextReveal = () => {
    const torchTextRef = useRef(null);

    useEffect(() => {
        const torchText = torchTextRef.current;
        if (!torchText) return;

        const text = torchText.textContent;
        torchText.textContent = "";

        [...text].forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            torchText.appendChild(span);
        });

        const spans = torchText.querySelectorAll("span");

        const onMouseMove = (e) => {
            const rect = torchText.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;

            spans.forEach((span) => {
                const spanRect = span.getBoundingClientRect();
                const spanX = spanRect.left - rect.left + spanRect.width / 2;
                const distance = Math.abs(mouseX - spanX);

                if (distance < 50) {
                    span.classList.add("visible");
                } else {
                    span.classList.remove("visible");
                }
            });
        };

        const onMouseLeave = () => {
            spans.forEach((span) => span.classList.remove("visible"));
        };

        torchText.addEventListener("mousemove", onMouseMove);
        torchText.addEventListener("mouseleave", onMouseLeave);

        // cleanup
        return () => {
            torchText.removeEventListener("mousemove", onMouseMove);
            torchText.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return (
        <>
            <style>
                {`
          .torch-text span {
            position: relative;
            display: inline-block;
            color: transparent;
            opacity: 0;
            transition: color 0.4s ease, opacity 0.4s ease;
            visibility: hidden;
            -webkit-text-stroke: 0.7px rgb(219, 47, 47);
            text-stroke: 1px orange;
            text-shadow:
              0px 0px 15px #F8B600,
              0px 0px 10px #E96F1D,
              0px 0px 4px #DD383E,
              inset 0px 0px 2px #FFFFFF,
              inset 0px 0px 24px #E96F1D,
              inset 14px 10px 14px #000000CC;
          }
          .torch-text span.visible {
            opacity: 1;
            visibility: visible;
          }
        `}
            </style>

            <div
                ref={torchTextRef}
                className="torch-text fixed inset-0 flex items-center justify-center bg-black"
                style={{ zIndex: -1 }}
            >
                AWARDS
            </div>
        </>
    );
};

export default TorchlightTextReveal;
