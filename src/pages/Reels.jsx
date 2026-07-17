import React, { lazy, Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { reelsData } from '../data/reelsData.js';
import Smmbutton from '../components/work/Smmbutton.jsx';

const ReelsGrid = lazy(() => import('../components/work/ReelsGrid.jsx'));

const Reels = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!isSafari) return undefined;

        // Open the media connection early so Safari does not wait until the
        // first reel enters the viewport before starting its TLS handshake.
        const videoHost = new URL(reelsData[0]?.video || '', window.location.href).origin;
        if (videoHost === window.location.origin) return undefined;

        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = videoHost;
        document.head.appendChild(preconnect);

        return () => preconnect.remove();
    }, []);

    return (
        <main className="bg-black min-h-screen pt-24 md:pt-40">
            <div className="relative z-10 px-4">
                <h1 className='text-white text-center text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter'>
                    Social Media Reels 
                </h1>

              <div className='text-white text-center mt-12 mb-16'>
                    <Smmbutton />
                </div>

                <Suspense fallback={
                    <div className="w-full h-[50vh] flex items-center justify-center">             
                        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>    
                    </div>
                }>
                    <ReelsGrid reels={reelsData} />
                </Suspense>
            </div>    
        </main>
    );
};

export default Reels;
