import React, { useContext, useState } from 'react'
import { LuMapPin } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { HiX } from "react-icons/hi";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { CartData } from '../Config/CartData';
import { HiBars3BottomRight, HiBars3CenterLeft } from "react-icons/hi2";
import MobileResponsiveNav from './MobileResponsiveNav';

const Navbar = ({ location, opendropdown, setOpendropdown, getLocation }) => {
    let [openNav, setOpenNav] = useState(false)
    let { cartItem } = useContext(CartData)
    let dropDownHandle = () => {
        setOpendropdown(!opendropdown)
    }

    return (
        <>
            <div className='w-full p-3 shadow-xl'>
                <div className='w-[90%] mx-auto flex items-center justify-between'>
                    <div className='flex items-center gap-7'>
                        <Link to='/'>
                            <h1 className='text-3xl font-bold'>
                                <span className='text-red-500'>Z</span>aptro
                            </h1>
                        </Link>
                        <div className='hidden md:flex items-center gap-1 cursor-pointer text-gray-700 relative'>
                            <LuMapPin className='text-red-500' />
                            <span className='font-semibold '>
                                {location ? <div className='-space-y-2'>
                                    <p>{location.city}</p>
                                    <p>{location.town}</p>
                                </div> : <span>Add address</span>}
                            </span>
                            <FaCaretDown onClick={dropDownHandle} />
                            {
                                opendropdown ? <div className='border-2 shadow-xl border-gray-200 bg-white rounded-lg p-3 space-y-2 absolute top-15 left-0 z-50 '>
                                    <h1 className=' w-[250px] flex items-center justify-between text-black'>
                                        <span className='text-xl font-semibold'>Change location</span>
                                        <HiX className='h-6 w-6' onClick={dropDownHandle} />
                                    </h1>
                                    <button onClick={getLocation} className='cursor-pointer bg-red-500 text-white px-3 py-1 rounded-md mt-2 font-semibold' >
                                        Detect my Location
                                    </button>
                                </div> : null
                            }
                        </div>
                    </div>

                    <nav className='flex items-center gap-7'>
                        <ul className='hidden md:flex items-center gap-7 text-xl font-semibold'>
                            <NavLink to='/' className={({ isActive }) => `${isActive ? 'border-b-red-600 border-b-3 transition-all' : "text-black"} cursor-pointer  `}>
                                <li>Home</li>
                            </NavLink>
                            <NavLink to='/products' className={({ isActive }) => `${isActive ? 'border-b-red-600 border-b-3 transition-all' : 'text-black'} cursor-pointer`}>
                                <li>Products</li>
                            </NavLink>
                            <NavLink to='/about' className={({ isActive }) => `${isActive ? 'border-b-red-600 border-b-3 transition-all' : 'text-black'} cursor-pointer`}>
                                <li>About</li>
                            </NavLink>
                            <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'border-b-red-600 border-b-3 transition-all' : 'text-black'} cursor-pointer`}>
                                <li>Contact</li>
                            </NavLink>
                        </ul>
                        <Link to='/cart' className='relative' >
                            <IoCartOutline className='w-7 h-7 ' />
                            <span className='absolute -top-2 -right-3 bg-red-500 text-white px-2 rounded-full'>{cartItem.length}</span>
                        </Link>
                        <div className='md:block hidden'>
                            <SignedOut>
                                <SignInButton className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer' />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>

                        {
                            openNav ? <HiBars3CenterLeft onClick={()=> setOpenNav(false)} className='size-8 md:hidden cursor-pointer' /> : <HiBars3BottomRight  onClick={()=> setOpenNav(true)}  className='size-8 md:hidden cursor-pointer ' />
                        }

                    </nav>
                </div>
                <MobileResponsiveNav openNav={openNav} setOpenNav={setOpenNav} />
            </div>
        </>
    )
}

export default Navbar