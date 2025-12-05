import React from 'react'
import Button from './ui/Button'

const Hero = () => {
    return (
        <section className='w-full mt-[50px]'>
            <div className='container'>
                <div className='flex flex-col items-center hero-xl:grid hero-xl:grid-cols-2 gap-4 hero-xl:gap-45'>
                    {/* left side */}
                    <div className='flex flex-col justify-center items-center hero-xl:items-start hero-md:w-xl hero-xl:w-full'>
                        <div className='text-[14px] hero-md:text-[18px]'>
                            <p className='text-[#3A68B8] uppercase'>Next genaretion platform</p>
                            <h1 className='text-3xl hero-md:text-4xl font-bold mt-1 mb-3 hero-lg:mt-2.5 hero-lg:mb-10'>Artificial intelligence & Syber security</h1>
                            <p className='mb-5 hero-lg:mb-[50px]'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        </div>

                        <div className='space-x-5'>
                            <Button title='Get Started' />
                            <Button title='Watch Video' icon='/img/watch.png' />
                        </div>
                    </div>

                    {/* right side */}
                    <div className='w-[50%] hero-xl:w-[80%] hero-xxl:w-full'>
                        <img src="/img/hero.png" alt="hero" className='hero-xxl:max-w-[635px] hero-xxl:h-[635px] object-cover' /> 
                    </div>
                </div>

                <div className='mt-5 hero-lg:mt-[90px] mb-[100px]'>
                    <ul className='grid grid-cols-2 justify-items-center  gap-5 hero-lg:gap-0 hero-lg:flex hero-lg:justify-between'>
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