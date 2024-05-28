import AboutDetails from '@/components/AboutDetails'
import AboutValue from '@/components/AboutValue'
import Counter from '@/components/Counter'
import CtaV2 from '@/components/CtaV2'

import PageHero from '@/components/heros/PageHero'
import PaymentFeatures from '@/components/PaymentFeatures'
import TeamMembers from '@/components/TeamMembers'
import TestimonialSlider from '@/components/TestimonialSlider'
import { AboutFeaturesData } from '@/data/data'
import React from 'react'

const About = () => {
  return (
    <>
      <PageHero
        subtitle="MAKING REAL ESTATE INVESTING EASIER"
        title="The future of real estate investing looks different"
        paragraph="You don’t have to be a millionaire to invest in real estate. "
      />
      <AboutDetails />
      <PaymentFeatures
        features={AboutFeaturesData}
        sectionTag={'OUR CORE VALUES'}
        sectionTitle={'We see you.'}
        spacing={'max-md:py-25 py-150 bg-white dark:bg-dark-300 relative max-md:overflow-hidden'}
      />
      <AboutValue />
      <TestimonialSlider />
      <Counter />
      <TeamMembers />
      <CtaV2 />
    </>
  )
}

export default About
