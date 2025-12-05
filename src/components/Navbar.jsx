import React, { useState } from 'react'
import { navItems } from '../assets'
import { IoMenu } from "react-icons/io5";
import Sidebar from './ui/Sidebar';
import Button from './ui/Button';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='w-full bg-[#001427] px-5 nav-md:px-0'>

            <div className='container flex nav-md:flex-col nav-lg:flex-row items-center justify-between gap-5' >

                <div className='flex flex-col nav-lg:flex-row items-center gap-3 nav-xl:gap-[84px]'>
                    <div className='flex items-center gap-[15px] py-5 cursor-pointer'>
                        <img src="/img/logo.png" alt="logo" className='w-[30px] nav-md:w-[45px] object-cover' />
                        <h4 className='nav-md:text-[22px] text-[#3A68B8]'>Artificial Intelligence</h4>
                    </div>

                    <ul className='hidden nav-md:flex gap-10'>
                        {navItems.map((item, index) => (
                            <li 
                                key={index} 
                                className='cursor-pointer hover:text-[#3A68B8] transition-colors duration-300'
                            >
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Sign In */}
                <div className='hidden nav-md:block mb-5 nav-lg:mb-0'>
                    <Button title="Sign In" />
                </div>

                {/* burger */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className='block nav-md:hidden text-3xl cursor-pointer text-white'
                >
                    <IoMenu />
                </button>
                
                {/* overlay */}
                {isMenuOpen && (
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 nav-md:hidden
                        ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    ></div>
                )}
            </div>

            {/* side bar */}
            <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
    )
}

export default Navbar