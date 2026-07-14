import React from 'react'
import ExcellenceHero from '../components/PackagingDesign/ExcellenceHero'
import LogoCarousel from '../components/home/Logo'
import ServiceCards from '../components/services/servicecards'
import WhyChooseUs from '../components/PackagingDesign/WhyChooseUs'
import HowWeWork from '../components/PackagingDesign/HowWeWork'
// import CaseStudies from '../components/PackagingDesign/caseStudies'
import FAQSection from '../components/services/FAQSection'
import CTASection from '../components/common/CTASection'

const PackagingDesign = () => {
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

export default PackagingDesign