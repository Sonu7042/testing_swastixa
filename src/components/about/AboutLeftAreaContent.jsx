// import React from 'react'

// const AboutLeftAreaContent = () => {
//     return (
//         <>
//             <div className='flex flex-col gap-5 justify-center h-screen items-center max-w-[50%]'>
//                 <h2 className='text-4xl font-bold'>Where Ideas Flow, Brands Grow.</h2>
//                 {/* <h2 className='text-4xl font-bold'>A digital-first studio shaping brands with clarity and culture.</h2> */}
//                 <p className='max-w-[70%]'>
//                     Swastixa Digital is a full-service digital company rooted in Indian values and modern thinking.
//                     We blend strategy, design, and technology to build brands that move people and markets.
//                 </p>
//             </div>
//         </>
//     )
// }

// export default AboutLeftAreaContent


import React from "react";

const AboutLeftAreaContent = () => {
    return (
        <div className="
      flex flex-col justify-start lg:justify-center gap-6 items-start h-screen pl-[4%]
      w-full max-w-[clamp(280px,90vw,780px)] 2xl:max-w-[500px]
      px-4
    ">
            <h2 className="
        font-bold
        text-[clamp(2rem,3.5vw,4rem)] 2xl:text-[clamp(3rem,4vw,3rem)] 
        leading-tight
      ">
                Rooted In Values Building Brands With Modern Thinking
            </h2>

            <p className=" text-gray-300 text-[clamp(0.95rem,1.2vw,1.1rem)] 2xl:text-[clamp(1.1rem,1.5vw,1.5rem)]
                              max-w-[65ch] 2xl:max-w-[75ch] ">
                Swastixa Digital is a full-service digital company rooted in Indian
                values and modern thinking. We blend strategy, design, and
                technology to build brands that move people and markets.
            </p>
        </div>
    );
};

export default AboutLeftAreaContent;
