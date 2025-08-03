import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='bg-[#101828] '>
                <div className='text-white md:py-6 py-10 md:px-6 px-10 flex items-start md:justify-around justify-start flex-wrap lg:gap-6 md:gap-10 gap-10'>
                    <div className='md:w-auto w-full space-y-2'>
                        <h1 className='text-2xl font-bold text-red-500'>
                            Zaptro
                        </h1>
                        <p className=''>
                            Powering Your World with the Best in Electronics.
                        </p>
                        <p className='flex flex-col '>
                            <span>
                                123 Electronics St, Style City, NY 10001
                            </span>
                            <span>
                                Email: jaiganeshmal@gmail.com
                            </span>
                            <span>
                                Phone: (031) 8039-2600
                            </span>
                        </p>
                    </div>
                    <div className='md:w-auto w-full space-y-2'>
                        <h1 className='text-2xl font-semibold'>
                            Customer Service
                        </h1>
                        <ul className='space-y-1'>
                            <li>Contact Us</li>
                            <li>Shipping & Returns</li>
                            <li>FAQs</li>
                            <li>Order Tracking</li>
                            <li>Size Guide</li>
                        </ul>
                    </div>
                    <div className='md:w-auto w-full space-y-2'>
                        <h1 className='text-2xl font-semibold'>
                            Follow Us
                        </h1>
                        <div className='flex items-center gap-2'>
                            <FaFacebook size={20} />
                            <GrInstagram size={20} />
                            <FaTwitterSquare size={20} />
                            <FaLinkedin size={20} />
                        </div>
                    </div>
                    <div className='md:w-auto w-full space-y-2'>
                        <h1 className='text-2xl font-semibold'>
                            Stay in the Loop
                        </h1>
                        <p>
                            Subscribe to get special offers, free giveaways, and more
                        </p>
                        <div className='w-96 h-14 rounded-lg'>
                            <input type="text" placeholder='Your email address '  className=' bg-white h-full w-[60%]  placeholder:text-gray-600 px-3 rounded-s-lg outline-none'/>
                            <button className='bg-red-600 hover:bg-red-500 duration-300 w-[40%] h-full rounded-e-lg font-semibold text-lg cursor-pointer'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className='text-center text-white border-t-2 border-gray-400 py-6'>
                    <p>
                        © 2025 <span className='text-red-500'>Zaptro</span>. All rights reserved
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer