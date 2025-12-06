import React from 'react'
import HeroComponent from './ui/HeroComponent';


const AiSection = () => {
    return (
        <section className='w-full bg-[#001427] py-15 hero-md:py-[130px]'>
            <div className='container overflow-visible'>
                <div className='flex flex-col hero-lg:flex-row items-center justify-around hero-xxl:flex-row-reverse gap-5 hero-xxl:gap-[68px]'>
                    <HeroComponent 
                        title="Apply AI, Deep Learning and Data Sciece to solve"
                        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                        image="/img/ai-section/ai-hero.png"
                        primaryBtnText='Learn More'
                        margin='hero-xxl:-ml-25'
                        titleClass='hero-md:text-[43px]'
                        pClass='max-w-[470px]'
                    />
                </div>
            </div>
        </section>
    )
}

export default AiSection;
