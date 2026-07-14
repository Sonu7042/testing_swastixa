import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Smmbutton = ({ activeTab }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Determine current active tab from prop or pathname
    const path = location.pathname.toLowerCase();
    const active = activeTab || (
        path.includes('/socialmedia') ? 'posts' :
        path.includes('/reels') ? 'reels' :
        path.includes('/branding') ? 'branding' :
        path.includes('/print') ? 'print' : ''
    );

    const getButtonClass = (tabName) => {
        return active === tabName
            ? "text-xl m-6 border px-8 py-2 rounded-sm transition-colors cursor-pointer bg-white text-black border-white"
            : "text-xl m-6 border px-8 py-2 rounded-sm transition-colors cursor-pointer border-white/30 text-white/70 hover:border-white hover:text-white";
    };

    return (
        <>
            <button
                onClick={() => active !== 'posts' && navigate('/work/SocialMedia')}
                className={getButtonClass('posts')}
            >
                Posts
            </button>
            <button
                onClick={() => active !== 'reels' && navigate('/work/reels')}
                className={getButtonClass('reels')}
            >
                Reels
            </button>
            <button
                onClick={() => active !== 'branding' && navigate('/work/Branding')}
                className={getButtonClass('branding')}
            >
                Branding
            </button>
            {/* <button
                onClick={() => active !== 'print' && navigate('/work/Print')}
                className={getButtonClass('print')}
            >
                Print
            </button> */}
        </>
    );
};

export default Smmbutton;