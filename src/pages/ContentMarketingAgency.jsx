import React from 'react'
import ExcellenceHero from '../components/contentmarketing/ExcellenceHero'
import LogoCarousel from '../components/home/Logo'
import ServiceCards from '../components/services/servicecards'
// import PortfolioCarousel from '../components/contentmarketing/portfolioData'
import WhyChooseUs from '../components/contentmarketing/WhyChooseUs'
import HowWeWork from '../components/contentmarketing/HowWeWork'
// import CaseStudies from '../components/contentmarketing/caseStudies'
import FAQSection from '../components/services/FAQSection'
import CTASection from '../components/common/CTASection'

const ContentMarketingAgency = () => {
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

export default ContentMarketingAgency