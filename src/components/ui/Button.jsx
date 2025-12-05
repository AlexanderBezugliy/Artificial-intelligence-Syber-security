import React from 'react'


const Button = ({ title }) => {
    return (
        <button className='px-[30px] py-[15px] bg-[#3A68B8] rounded-md hover:bg-blue-400 cursor-pointer transition-colors duration-300 text-white'>
            {title}
        </button>
    )
}

export default Button
