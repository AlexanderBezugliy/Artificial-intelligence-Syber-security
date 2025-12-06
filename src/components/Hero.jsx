import React from 'react'
import HeroComponent from './ui/HeroComponent'

const Hero = () => {
    return (
        <section className='w-full mt-[50px]'>
            <div className='container overflow-visible'>
                <div className='flex flex-col items-center hero-lg:flex-row justify-between gap-10 hero-xl:gap-[115px]'>
                    <HeroComponent 
                        subtitle="Next genaretion platform" 
                        title="Artificial intelligence & Syber security"
                        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                        image="/img/hero.png"
                        primaryBtnText='Get Started'
                        secondaryBtnText='Watch Video'
                        margin='-mr-50'
                        titleSize='55px'
                    />
                </div>

                <div className='mt-5 hero-lg:mt-[90px] mb-[100px]'>
                    <ul className='grid grid-cols-2 justify-items-center  gap-5 hero-xl:gap-0 hero-xl:flex hero-xl:justify-between'>
                        <li><img src="/img/hero-logo/logo1.png" alt="hero-logo" className='w-[120px] hero-md:w-full' /></li>
                        <li><img src="/img/hero-logo/logo2.png" alt="hero-logo" className='w-[120px] hero-md:w-full' /></li>
                        <li><img src="/img/hero-logo/logo3.png" alt="hero-logo" className='w-[120px] hero-md:w-full' /></li>
                        <li><img src="/img/hero-logo/logo4.png" alt="hero-logo" className='w-[120px] hero-md:w-full' /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero