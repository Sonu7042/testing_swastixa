import React from 'react'
// import ExcellenceHero from '../components/websitedevelopment/ExcellenceHero'
import ExcellenceHero from '../components/videoproductionhouse/ExcellenceHero'
import LogoCarousel from '../components/home/Logo'
import ServiceCards from '../components/services/servicecards'
// import PortfolioCarousel from '../components/videoproductionhouse/portfolioData'
import WhyChooseUs from '../components/videoproductionhouse/WhyChooseUs'
import HowWeWork from '../components/videoproductionhouse/HowWeWork'
// import CaseStudies from '../components/videoproductionhouse/caseStudies'
import FAQSection from '../components/services/FAQSection'
import CTASection from '../components/common/CTASection'

const VideoProductionHouse = () => {
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

export default VideoProductionHouse