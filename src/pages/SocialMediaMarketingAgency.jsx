import React from 'react'
import ExcellenceHero from '../components/socialmediamarketing/ExcellenceHero'
import LogoCarousel from '../components/home/Logo'
import ServiceCards from '../components/services/servicecards'
// import PortfolioCarousel from '../components/socialmediamarketing/portfolioData'
import WhyChooseUs from '../components/socialmediamarketing/WhyChooseUs'
import HowWeWork from '../components/socialmediamarketing/HowWeWork'
// import CaseStudies from '../components/socialmediamarketing/caseStudies'
import FAQSection from "../components/services/FAQSection";
import CTASection from '../components/common/CTASection'

const SocialMediaMarketingAgency = () => {
    return (
        <div className="bg-black min-h-screen">
            <ExcellenceHero />
            <WhyChooseUs />
            <HowWeWork />
            {/* <CaseStudies /> */}
            <LogoCarousel />
            <ServiceCards />
            <FAQSection />
            <CTASection />
        </div>
    )
}

export default SocialMediaMarketingAgency