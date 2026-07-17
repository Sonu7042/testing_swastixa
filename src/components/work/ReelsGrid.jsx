import React, { memo, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const isSafariBrowser = typeof navigator !== 'undefined'
    && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const ReelItem = memo(({ item, index, isActive, onActive }) => {
    const videoRef = useRef(null);
    const [videoElement, setVideoElement] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isInViewport, setIsInViewport] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(() => {
        if (!isSafariBrowser || typeof window === 'undefined') return false;
        return index < (window.innerWidth < 768 ? 2 : 4);
    });
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < 430 : false
    );

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile(); // Check on mount
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Sync play state with active status on mobile
    useEffect(() => {
        if (isMobile && isActive) {
            setIsPlaying(true); // Attempt unmuted playback when it becomes active
        }
    }, [isActive, isMobile]);

    // Ref callback to ensure proper playsinline attributes for Safari instantly
    const setVideoRef = (el) => {
        videoRef.current = el;
        setVideoElement(el);
        if (el) {
            el.muted = true;
            el.defaultMuted = true;
            el.playsInline = true;
            el.setAttribute('muted', '');
            el.setAttribute('playsinline', '');
            el.setAttribute('webkit-playsinline', '');
        }
    };

    useEffect(() => {
        let timer;
        if (isInViewport) {
            const loadVideo = () => {
                setShouldLoad(true);
            };

            if (isSafariBrowser) {
                loadVideo();
            } else {
                timer = setTimeout(loadVideo, 250); // Preserve existing browser behaviour
            }
        } else {
            if (!isMobile) setIsPlaying(false);
            setIsHovered(false);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isInViewport, isMobile]);

    useEffect(() => {
        const video = videoElement;
        if (!video || !isLoaded) return; // Wait for metadata/loaded state before playing

        if (isMobile) {
            // Mobile: Play if active, pause if not
            if (isActive) {
                video.muted = !isPlaying; // Unmute if isPlaying is true
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(err => {
                        if (!video.muted) {
                            console.log("Mobile play blocked, trying muted:", err);
                            video.muted = true;
                            setIsPlaying(false); // Revert to muted icon
                            video.play().catch(e => console.log("Muted play failed too:", e));
                        }
                    });
                }
            } else if (!video.paused) {
                video.pause();
            }
        } else {
            // Desktop: Play on hover or click
            if (isHovered || isPlaying) {
                video.muted = false;
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(err => {
                        console.log("Unmuted play blocked, trying muted:", err);
                        video.muted = true;
                        video.play().catch(e => {
                            console.log("Muted play failed too:", e);
                            setIsPlaying(false);
                        });
                    });
                }
            } else {
                if (!video.paused) video.pause();
                video.currentTime = 0;
            }
        }
    }, [videoElement, isMobile, isActive, isHovered, isPlaying, isLoaded]);

    return (
        <motion.div
            data-reel-item
            data-reel-id={item.id}
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "150px" }}
            onViewportEnter={() => setIsInViewport(true)}
            onViewportLeave={() => setIsInViewport(false)}
            transition={{ duration: 0.5, delay: (index % 5) * 0.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                if (!isMobile) setIsPlaying(false);
            }}
            onClick={() => setIsPlaying(prev => !prev)}
            className="relative aspect-9/16 rounded-2xl overflow-hidden bg-neutral-900 group cursor-pointer border border-white/10"
        >
            {shouldLoad && (
                <video
                    ref={setVideoRef}
                    poster={item.poster || undefined}
                    loop
                    muted
                    playsInline
                    preload={isSafariBrowser ? 'auto' : 'metadata'}
                    onCanPlay={() => {
                        setIsLoaded(true);
                        setHasError(false);
                    }}
                    onError={(e) => {
                        setIsLoaded(false);
                        setHasError(true);
                        console.error("Reel video failed to load:", item.video, e.currentTarget.error);
                    }}
                    className={`w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-102 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                >
                    <source src={item.video} type="video/mp4" />
                </video>
            )}

            {!isLoaded && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
            )}

            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xs px-3 text-center pointer-events-none">
                    Video unavailable
                </div>
            )}

            <div className="absolute inset-0 bg-linear-to-t  via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
            </div>

            {/* Play Icon Overlay for Desktop */}
            {!isMobile && !isHovered && !isPlaying && isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                    </div>
                </div>
            )}

            {/* Sound Indicator for Mobile (Instagram style) */}
            {isMobile && isLoaded && (
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center pointer-events-none z-10 transition-opacity duration-300">
                    {isPlaying ? (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5 10v4a2 2 0 002 2h2.586l3.707 3.707A1 1 0 0015 19V5a1 1 0 00-1.707-.707L9.586 10H7a2 2 0 00-2 2z" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                    )}
                </div>
            )}
        </motion.div>
    );
});

const shuffleArray = (array) => {
    if (!array) return [];
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const ReelsGrid = ({ reels }) => {
    const [shuffledReels, setShuffledReels] = useState(() => shuffleArray(reels));
    const [activeReelId, setActiveReelId] = useState(null);
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < 768 : false
    );

    useEffect(() => {
        setShuffledReels(shuffleArray(reels));
    }, [reels]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setActiveReelId(null);
            return;
        }

        const handleScroll = () => {
            if (!containerRef.current) return;
            const elements = containerRef.current.querySelectorAll('[data-reel-item]');
            let closestId = null;
            let minDistance = Infinity;
            const centerY = window.innerHeight / 2;

            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const elementCenterY = rect.top + rect.height / 2;
                const distance = Math.abs(elementCenterY - centerY);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestId = el.getAttribute('data-reel-id');
                }
            });

            if (closestId) {
                const matched = shuffledReels.find(r => String(r.id) === String(closestId));
                if (matched && matched.id !== activeReelId) {
                    setActiveReelId(matched.id);
                }
            }
        };

        // Run once initially
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [shuffledReels, activeReelId, isMobile]);

    return (
        <section ref={containerRef} className="w-full bg-black px-4 py-10 md:py-20">
            <div className="max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                    {shuffledReels.map((item, index) => (
                        <ReelItem 
                            key={item.id} 
                            item={item} 
                            index={index} 
                            isActive={item.id === activeReelId}
                            onActive={setActiveReelId}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(ReelsGrid);


