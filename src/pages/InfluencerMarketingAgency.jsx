import React from 'react'
import ExcellenceHero from '../components/InfluencerMarketingAgency/ExcellenceHero'
import LogoCarousel from '../components/home/Logo'
import ServiceCards from '../components/services/servicecards'
import WhyChooseUs from '../components/InfluencerMarketingAgency/WhyChooseUs'
import HowWeWork from '../components/InfluencerMarketingAgency/HowWeWork'
// import CaseStudies from '../components/InfluencerMarketingAgency/caseStudies'
import FAQSection from '../components/services/FAQSection'
import CTASection from '../components/common/CTASection'

const InfluencerMarketingAgency = () => {
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

export default InfluencerMarketingAgency