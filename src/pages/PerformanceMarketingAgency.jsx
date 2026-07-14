import React from 'react'
import ExcellenceHero from '../components/performancemarketing/ExcellenceHero'
import LogoCarousel from '../components/home/Logo'
import ServiceCards from '../components/services/servicecards'
import WhyChooseUs from '../components/performancemarketing/WhyChooseUs'
import HowWeWork from '../components/performancemarketing/HowWeWork'
// import CaseStudies from '../components/performancemarketing/caseStudies'
import FAQSection from '../components/services/FAQSection'
import CTASection from '../components/common/CTASection'

const PerformanceMarketingAgency = () => {
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

export default PerformanceMarketingAgency