import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PixelCard from './PixelCard';

const serviceList = [
  {
    number: '01',
    title: 'Social Media Marketing',
    description: 'As a social media marketing agency, we manage your brand presence across platforms with strategic content that builds engagement, recall, and growth.',
    path: '/services/social-media-marketing'
  },
  {
    number: '02',
    title: 'Website Development',
    description: 'Create modern, responsive websites with a website designing company in India that delivers seamless performance and strong user experiences.',
    path: '/services/website-development'
  },
  {
    number: '03',
    title: 'Performance Marketing',
    description: 'Achieve faster growth with conversion-focused marketing campaigns built for measurable business outcomes.',
    path: '/services/performance-marketing'
  },
  {
    number: '04',
    title: 'Influencer Marketing',
    description: 'Leverage the power of trusted influencers to amplify your brand message, increase visibility, and drive meaningful customer engagement.',
    path: '/services/influencer-marketing'
  },
  {
    number: '05',
    title: 'Content Marketing',
    description: 'Turn ideas into impactful content that connects with your audience and drives meaningful engagement.',
    path: '/services/content-marketing'
  },
  {
    number: '06',
    title: 'SEO Agency',
    description: 'Turn search traffic into business growth with proven SEO strategies that improve visibility and bring the right audience to your brand.',
    path: '/services/seo-agency'
  },

  {
    number: '07',
    title: 'Video Production House',
    description: 'As a video production house, we produce compelling videos that bring your brand message to life and connect with your audience.',
    path: '/services/video-production-house'
  },

  {
    number: '08',
    title: 'Packaging & Design',
    description: 'Creative packaging and design solutions that enhance product appeal, strengthen brand identity, and leave a lasting impression on customers.',
    path: '/services/packaging-design'
  },

];

const ServiceCards = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const filteredServices = serviceList.filter(service => service.path !== location.pathname);

  return (
    <section data-aos="fade-up" data-aos-duration="1500" className="bg-black text-white pb-6 pt-2  px-6 sm:px-12 lg:px-24 xl:px-32 flex flex-col items-start text-left w-full select-none">
      {/* Upper Title Section */}


      {/* Sub Title Section */}
      <div className="mb-8">
        <span className="text-[#71717a] text-[11px] font-semibold uppercase tracking-[0.2em] block mb-1.5">
           {location.pathname === "/services" || location.pathname === "/" ? "Our Services" : "Our Other Services"}
        </span>
        <h2 className="text-2xl sm:text-[32px] font-extrabold tracking-tight text-white leading-tight">
          Everything Your Brand Needs
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {filteredServices.map((service, index) => (
          <PixelCard
            key={index}
            variant="blue"
            className="flex flex-col justify-between p-6 rounded-[12px] bg-[#121214] border border-[#232326] hover:border-[#38383c] hover:bg-[#151518] hover:-translate-y-1 transition-all duration-300 min-h-[190px] group cursor-pointer shadow-[0_4px_25px_rgba(0,0,0,0.35)]"
            onClick={() => service.path && navigate(service.path)}
          >
            {/* Number */}
            <div className="text-[#71717a] group-hover:text-[#a1a1aa] font-medium text-base mb-3 transition-colors duration-300">
              {service.number}
            </div>

            <h3 className="text-white pb-1.5 group-hover:text-blue-400 font-semibold text-lg sm:text-[20px] tracking-tight transition-colors duration-300 mt-auto">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-[#a1a1aa] group-hover:text-zinc-300 text-sm sm:text-[15px] leading-relaxed mb-5 font-light transition-colors duration-300">
              {service.description}
            </p>

            {/* Title */}
          </PixelCard>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;