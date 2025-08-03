import React from 'react'
import bannerBG from '../assets/banner1.jpg'

const Banner = () => {
    return (
        <>
            <div className=' h-screen w-full flex items-center justify-center'>
                <div className='relative border xl:w-[90%] w-full lg:w-full h-[86vh] md:rounded-2xl flex items-center justify-center' style={{ backgroundImage: `url(${bannerBG})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
                    <div className='absolute inset-0 bg-black/60 bg-opacity-50 rounded-2xl flex items-center justify-center'>
                        <div className='space-y-4 text-center text-white '>
                            <h1 className='lg:text-6xl md:text-5xl text-4xl font-bold'>
                                Next-Gen Electronics at Your Fingertips
                            </h1>
                            <p className='lg:text-xl md:text-lg  font-semibold'>
                                Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
                            </p>
                            <button className='bg-red-500 text-white rounded-md py-2 px-4 font-semibold text-lg'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner