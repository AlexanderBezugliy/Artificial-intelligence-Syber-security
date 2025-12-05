import React from 'react'
import { navItems } from '../../assets'
import { IoMdClose } from "react-icons/io";
import Button from './Button';


const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {

    return (
        <div className={`fixed top-0 right-0 h-full w-[270px] bg-gray-300 z-50 shadow-xl transform transition-transform duration-300 ease-in-out nav-md:hidden
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="flex flex-col mt-10 px-8 h-full overflow-y-auto">
                {/* close */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='absolute right-10 top-6'>
                    <IoMdClose size={25} color='black' />
                </button>

                {/* list */}
                <ul className='flex flex-col items-start gap-8 w-full mb-6 border-b-2 border-gray-500 pb-5'>
                    {navItems.map((link) => (
                        <li key={link.title} className="w-full text-black">
                            <a 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                href={link.href}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* sign */}
                <Button title="Sign In" />
            </div>
        </div>
    )
}

export default Sidebar
