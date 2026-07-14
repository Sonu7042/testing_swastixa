import React from 'react'
import ExcellenceHero from '../components/websitedevelopment/ExcellenceHero'
import LogoCarousel from '../components/home/Logo'
import ServiceCards from '../components/services/servicecards'
import PortfolioCarousel from '../components/websitedevelopment/portfolioData'
import WhyChooseUs from '../components/websitedevelopment/WhyChooseUs'
import HowWeWork from '../components/websitedevelopment/HowWeWork'
// import CaseStudies from '../components/websitedevelopment/caseStudies'
import FAQSection from '../components/services/FAQSection'
import CTASection from '../components/common/CTASection'

const WebsiteDevelopment = () => {
    return (
        <div className="bg-black min-h-screen">
            <ExcellenceHero />
            <PortfolioCarousel />
            <WhyChooseUs />
            <HowWeWork />
            <LogoCarousel />
            <ServiceCards />
            <FAQSection />
            <CTASection />
        </div>
    )
}

export default WebsiteDevelopment