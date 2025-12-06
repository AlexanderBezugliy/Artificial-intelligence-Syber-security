import React from 'react'
import Button from './Button';

const HeroComponent = ({ 
    subtitle, 
    title, 
    description, 
    image, 
    primaryBtnText, 
    secondaryBtnText, 
    margin, 
    titleClass,
    pClass,
}) => {
  return (
    <>
        {/* left side */}
        <div className='flex flex-col justify-center items-start hero-md:w-xl hero-xl:w-full'>
            <div className='text-[14px] hero-md:text-[18px]'>
                {subtitle && (
                    <p className='text-[#3A68B8] uppercase'>{subtitle}</p>
                )}
                <h1 className={`text-3xl ${titleClass} font-extrabold mt-1 mb-3 hero-lg:mt-2.5 hero-lg:mb-10`}>{title}</h1>
                <p className={`${pClass} mb-5 text-gray-300 hero-lg:mb-[50px]`}>{description}</p>
            </div>

            <div className='space-x-5'>
                <Button title={primaryBtnText} />
                {secondaryBtnText && (
                    <Button title={secondaryBtnText} icon='/img/watch.png' />
                )}
            </div>
        </div>

        {/* right side */}
        <div className='px-4 hero-md:px-0'>
            <img src={image} alt="hero" className={`hero-sm:max-w-[400px] ${margin} hero-xxl:max-w-[635px] h-auto object-cover`} /> 
        </div>
    </>
  )
}

export default HeroComponent;
