import React from 'react'


const Button = ({ title, icon }) => {
    return (
        <button className='px-[15px] py-[9px] hero-md:px-[30px] hero-md:py-[15px] bg-[#3A68B8] rounded-md hover:bg-blue-400 cursor-pointer transition-colors duration-300 text-white'>
            {icon && <img src={icon} alt="icon" className='inline-block align-bottom mr-2 w-6 h-6 object-contain' />}
            {title}
        </button>
    )
}

export default Button
