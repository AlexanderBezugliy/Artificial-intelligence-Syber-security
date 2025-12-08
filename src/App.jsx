import React from 'react'
import Navbar from './components/Navbar'
import AiSection from './components/AiSection'
import HeroSection from './components/HeroSection'
import TestimonialSection from './components/TestimonialSection'
import SliderSection from './components/SliderSection'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer'




const App = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AiSection />
            <SliderSection />
            <TestimonialSection />
            <Footer />
        </>
    )
}

export default App
