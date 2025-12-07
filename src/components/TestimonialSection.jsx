import React from 'react'
import HeroComponent from './ui/HeroComponent'

const TestimonialSection = () => {
    return (
        <div className='w-full bg-[#001427] py-[170px]'>
            <div className='container overflow-visible'>
                <div className='flex flex-col items-center justify-around hero-lg:flex-row'>
                    <HeroComponent 
                        title="What our clients say about our awesome solutions"
                        description="
                            To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.

                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.

                            Lorem ipsum is placeholder previewing layouts and visual mockups.
        
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        "
                        image="/img/testimonial.png"
                        margin='hero-xxl:-ml-50'
                        titleClass='font-bold hero-xl:w-[548px] hero-xl:h-[104px] hero-md:text-[40px]'
                        pClass='max-w-[460px] mb-10 hero-lg:mb-0'
                    />

                </div>
            </div>
        </div>
    )
}

export default TestimonialSection
