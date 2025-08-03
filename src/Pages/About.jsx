import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className='w-full min-h-screen bg-gray-100 py-10 flex justify-center items-start '>
        <div className='bg-white lg:w-[80%] w-[90%]  rounded-xl p-12 space-y-8'>
          <h1 className='text-4xl font-bold text-gray-800 text-center'>
            About Zaptro
          </h1>

          <p className='text-gray-700 text-lg'>
            Welcome to <span className='text-red-600 font-semibold'>Zaptro</span>, your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we’re here to power up your tech life with premium products and unbeatable service.
          </p>

          <h1 className='text-2xl font-semibold text-red-600'>
            Our Mission
          </h1>

          <p className='text-gray-700'>
            At Zaptro, our mission is to make innovative technology accessible to everyone. We’re passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.
          </p>

          <h1 className='text-2xl font-semibold text-red-600'>
            Why Choose Zaptro?
          </h1>

          <ul className='text-gray-700 space-y-2 list-disc list-inside '>
            <li>
              Top-quality electronic products from trusted brands
            </li>

            <li>
              Lightning-fast and secure shipping
            </li>

            <li>
              Reliable customer support, always ready to help
            </li>

            <li>
              Easy returns and hassle-free shopping experience
            </li>
          </ul>

          <h1 className='text-2xl font-semibold text-red-600'>
            Our Vision
          </h1>

          <p className='text-gray-700'>
            We envision a future where technology elevates everyday life. At Zaptro, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.
          </p>

          <div className='text-center space-y-4 w-[90%] mx-auto'>
            <h1 className='text-xl font-semibold text-red-600'>
              Join the Zaptro Family
            </h1>
            <p className='text-gray-700'>
              Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — Zaptro has something for everyone.
            </p>
            <Link to='/products'>
              <button className='cursor-pointer hover:bg-red-700 duration-150 text-base px-6 py-2 bg-red-600 text-white rounded-xl'>
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About