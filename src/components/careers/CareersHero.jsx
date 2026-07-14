import React from 'react';

const CareersHero = () => {
    return (
        <div className='w-full  bg-black text-white p-4 md:p-8 flex items-center justify-center min-h-[60vh]'>
            <div className='w-full max-w-[1200px] border border-white rounded-4xl p-12 md:p-24 flex flex-col items-center justify-center text-center bg-black/50 backdrop-blur-sm'>
                <h1 className='text-5xl md:text-7xl font-bold mb-6 tracking-tight'>
                    Careers
                </h1>
                <p className='text-white text-sm md:text-balance max-w-2xl leading-relaxed'>
                    At Swastixa, we offer a comprehensive suite of services designed to drive impactful growth.
                    Our expertise spans personalized storytelling, dynamic creative optimization, and innovative
                    digital solutions that empower businesses to thrive in the modern era.
                </p>
            </div>
        </div>
    );
}

export default CareersHero;
