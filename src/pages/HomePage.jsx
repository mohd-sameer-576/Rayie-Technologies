import React from 'react'
import AboutSnapshot from '../components/homepage/AboutSnapshot'
import Home from '../components/homepage/Hero'
import Services from '../components/homepage/Services'
import FeaturedProjects from '../components/homepage/FeaturedProjects'
import WhyChooseUs from '../components/homepage/WhyChooseUs'
import Testimonials from '../components/homepage/Testimonials'
import CTA from '../components/homepage/CTA'
import Footer from '../components/global/Footer'
import Navbar from '../components/global/Navbar'
const HomePage = () => {
  return (
    <div>
      <Navbar/>
        <Home/>
        <AboutSnapshot/>
        <Services/>
        <FeaturedProjects/>
        <WhyChooseUs/>
        <Testimonials/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default HomePage