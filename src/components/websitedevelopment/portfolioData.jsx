// import React from "react";
// import { Link } from "react-router-dom";

// const portfolioData = [
  
//   {
//     id: 2,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/bestmate-hero-design.png",

//     tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
//     link: "https://bestmate.bexex.in/"
//   },
//    {
//   id: 15,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/three-dlf-work.jpeg",
//     tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
//     link: "https://bexex.in/360/"
//   },
//   {
//     id: 4,
//     image:
//     "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/yashvi-hero-design.png",
//     tags: ["Branding", "UI/UX", "Web Design"],
//   },
//   {
//     id: 3,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/bexexglobal.png",
//     tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
//     link: "https://bexexglobal.com/"
//   },
//   {
//     id: 5,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/birla-hero-design.png",
//     tags: ["Branding", "UI/UX", "Web Design"],
//   },
//   {
//     id: 6,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/eazzy-hero-design.png",
//     tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
//     link: "https://eazzy.bexex.in/"
//   },
 
//   {
//     id: 7,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/elaboratecapital.png",
//     tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
//     link: "https://elaboratecapital.bexex.in/"
//   },
//   {
//     id: 8,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/elan-design-hero.png",
//     tags: ["Branding", "UI/UX", "Web Design"],
//   },
//   {
//     id: 9,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/gandhi-hero-design.png",
//     tags: ["Branding", "UI/UX", "Web Design"],
//   },
//   {
//     id: 14,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/project-one.png",
//     tags: ["Branding", "UI/UX", "Web Design"],
//   },
//   {
//     id: 10,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/graceaesthetic-design-hero.png",
//     tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
//     link: "https://eazzy.bexex.in/"
//   },
//   {
//     id: 11,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/elan-hero-design.png",
//     tags: ["Branding", "UI/UX", "Web Design"],
//   },
//   {
//     id: 12,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/project-two.png",
//     tags: ["Branding", "UI/UX", "Web Design"],
//   },
//   {
//     id: 13,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/project-three.png",
//     tags: ["Branding", "UI/UX", "Web Design"],
//   },
//   {
//     id: 1,
//     image:
//       "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/asva-hero-design.png",
//     tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
//     link: "https://asva.bexex.in/"
//   },
  
//   // {
//   //   id: 13,
//   //   image:
//   //     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
//   //   tags: ["Branding", "UI/UX", "Web Design"],
//   // },
// ];

// const duplicatedCards = [...portfolioData, ...portfolioData];

// const PortfolioCarousel = () => {
//   return (
//     <section className="bg-black py-16 overflow-hidden">
//       <div className="relative">

//         {/* Track */}
//         <div className="marquee-track flex w-max gap-12">

//           {duplicatedCards.map((item, index) => (
//             <div
//               key={index}
//               className="
//                 group
//                 flex-shrink-0
//                 w-[400px]
//                 md:w-[460px]
//                 h-[280px]
//                 rounded-[12px]
//                 bg-[#1B1B1B]
//                 border
//                 border-white/10
                
//                 relative
//                 overflow-hidden
//                 transition-all
//                 duration-500
//               "
//             >
//               {/* Image */}
//               <Link to={item.link} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={item.image}
//                 alt=""
//                 className="
//                   w-full
//                   h-full
//                   object-cover
//                   rounded-[8px]
//                   transition-transform
//                   duration-700
//                   group-hover:scale-102
//                 "
//               />
//               </Link>

//               {/* Bottom Gradient */}
//               <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//               {/* Tags */}
//               <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
//                 {item.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="
//                       px-3
//                       py-1.5
//                       text-[12px]
//                       font-medium
//                       text-white
//                       rounded-md
//                       bg-white/10
//                       backdrop-blur-md
//                       border
//                       border-white/10
//                     "
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .marquee-track {
//           animation: scroll 60s linear infinite;
//         }

//         .marquee-track:hover {
//           animation-play-state: paused;
//         }

//         @keyframes scroll {
//           from {
//             transform: translateX(0);
//           }

//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PortfolioCarousel;



import React from "react";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    id: 2,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/bestmate-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://bestmate.bexex.in/",
  },
  {
    id: 15,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/three-dlf-work.jpeg",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://bexex.in/360/",
  },
  {
    id: 4,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/yashvi-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 3,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/bexexglobal.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://bexexglobal.com/",
  },
  {
    id: 5,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/birla-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 6,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/eazzy-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://eazzy.bexex.in/",
  },
  {
    id: 7,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/elaboratecapital.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://elaboratecapital.bexex.in/",
  },
  {
    id: 8,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/elan-design-hero.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 9,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/gandhi-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 14,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/project-one.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 10,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/graceaesthetic-design-hero.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://graceaesthetic.in/"
  },
  {
    id: 11,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/elan-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 12,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/project-two.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 13,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/project-three.png",
    tags: ["Branding", "UI/UX", "Web Design"],
  },
  {
    id: 1,
    image:
      "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixaservice/service-web-page-images/asva-hero-design.png",
    tags: ["Branding", "UI/UX", "Web Design", "Web Development"],
    link: "https://asva.bexex.in/",
  },
];

const duplicatedCards = [...portfolioData, ...portfolioData];

const PortfolioCarousel = () => {
  return (
    <section className="bg-black py-16 overflow-hidden">
      <div className="relative">
        <div
          className="
            marquee-track
            flex
            w-max
            gap-4
            md:gap-12
            overflow-x-auto
            md:overflow-visible
            px-4
            md:px-0
            snap-x
            snap-mandatory
            cursor-grab
            active:cursor-grabbing
          "
        >
          {duplicatedCards.map((item, index) => (
            <div
              key={index}
              className="
                group
                flex-shrink-0
                snap-start
                w-[300px]
                sm:w-[330px]
                md:w-[460px]
                h-[180px]
                sm:h-[220px]
                md:h-[280px]
                rounded-[12px]
                bg-[#1B1B1B]
                border
                border-white/10
                relative
                overflow-hidden
                transition-all
                duration-500
              "
            >
              {item.link ? (
                <Link
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-[8px]
                      transition-transform
                      duration-700
                      group-hover:scale-[1.02]
                    "
                  />
                </Link>
              ) : (
                <img
                  src={item.image}
                  alt=""
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-[8px]
                    transition-transform
                    duration-700
                    group-hover:scale-[1.02]
                  "
                />
              )}

              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3
                      py-1.5
                      text-[12px]
                      font-medium
                      text-white
                      rounded-md
                      bg-white/10
                      backdrop-blur-md
                      border
                      border-white/10
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: scroll 60s linear infinite;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .marquee-track::-webkit-scrollbar {
          display: none;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 767px) {
          .marquee-track {
            animation: none;
            width: auto;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioCarousel;