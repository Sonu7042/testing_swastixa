import React, { useRef, useState } from 'react';

export const GlowingBorder = ({
    children,
    className = "",
    containerClassName = "",
    color = "rgba(255, 255, 255, 0.45)",
    borderWidth = 1.5,
    borderRadius = "1.2rem",
    ...props
}) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${containerClassName}`}
            style={{
                padding: `${borderWidth}px`,
                borderRadius: borderRadius
            }}
            {...props}
        >
            {/* Moving Gradient Background (The Border) */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}, transparent 40%)`,
                }}
            />

            {/* Inner Content */}
            <div
                className={`relative h-full w-full ${className}`}
                style={{ borderRadius: `calc(${borderRadius} - ${borderWidth}px)` }}
            >
                {/* Inner Spotlight (Subtle) */}
                <div
                    className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
                    style={{
                        opacity: opacity * 0.05, // Very faint spotlight on top of content
                        background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${color}, transparent 40%)`,
                    }}
                />
                <div className="relative z-0 h-full">
                    {children}
                </div>
            </div>
        </div>
    );
};
