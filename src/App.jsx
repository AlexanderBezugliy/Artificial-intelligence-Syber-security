import React from 'react'
import Navbar from './components/Navbar'
import AiSection from './components/AiSection'
import HeroSection from './components/HeroSection'
import TestimonialSection from './components/TestimonialSection'
import SliderSection from './components/SliderSection'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const App = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AiSection />
            <SliderSection />
            <TestimonialSection />

        </>
    )
}

export default App
