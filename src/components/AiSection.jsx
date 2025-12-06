import React from 'react'
import HeroComponent from './ui/HeroComponent';


const AiSection = () => {
    return (
        <div className='w-full bg-[#001427] py-[130px]'>
            <div className='container overflow-visible'>
                <div className='flex flex-col-reverse items-center hero-lg:flex-row-reverse justify-between gap-4 hero-xl:gap-[68px]'>
                    <HeroComponent 
                        title="Apply AI, Deep Learning and Data Sciece to solve"
                        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                        image="/img/ai-section/ai-hero.png"
                        primaryBtnText='Learn More'
                        margin='-ml-25'
                        titleSize='44px'
                    />
                </div>
            </div>
        </div>
    )
}

export default AiSection;
