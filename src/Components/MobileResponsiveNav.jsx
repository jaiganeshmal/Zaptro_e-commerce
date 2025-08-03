import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MobileResponsiveNav = ({openNav, setOpenNav}) => {
    let { user } = useUser()
    return (
        <>
            <div className={`${openNav ? 'left-0' : '-left-[100%]'}  fixed top-0 bottom-0 z-10 h-screen w-[70%]  bg-gray-100 shadow-2xl shadow-gray-600 rounded-s-xl pt-16 px-8 pb-6 flex flex-col justify-between md:hidden duration-300`}>
                <div className='flex items-center gap-2'>
                    {
                        user ? <UserButton /> : <FaUserCircle />
                    }
                    <div>
                        <h1>Hello! {user?.fullName}</h1>
                        <p className='text-slate-400 text-sm'>Premium User</p>
                    </div>
                </div>
                <nav className='mt-12'>
                    <ul className='text-black flex flex-col gap-7 text-2xl font-semibold'>
                        <Link to='/' onClick={()=> setOpenNav(false)} className='cursor-pointer'>
                            <li>Home</li>
                        </Link>
                        <Link to='/products' onClick={()=> setOpenNav(false)} className='cursor-pointer'>
                            <li>Products</li>
                        </Link>
                        <Link to='/about' onClick={()=> setOpenNav(false)} className='cursor-pointer'>
                            <li>About</li>
                        </Link>
                        <Link to='/contact' onClick={()=> setOpenNav(false)} className='cursor-pointer'>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default MobileResponsiveNav