import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='w-full min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex justify-center items-center py-10 lg:px-0 px-4'>
        <div className='w-full md:max-w-5xl min-h-[80vh] bg-white/10 backdrop-blur-xl rounded-2xl border border-gray-500 px-6 py-10 space-y-10'>
          <h1 className='text-4xl font-bold text-white text-center'>
            Get in Touch with <span className='text-red-500'>Zaptro</span>
          </h1>

          <div className=' flex md:flex-row flex-col  items-start justify-around gap-4'>
            <div className='md:w-[45%] w-[90%]  space-y-6 '>
              <div className='text-white'>
                <h1 className='text-2xl font-semibold'>Contact Info</h1>
                <p className='text-gray-300 md:w-[90%]'>
                  Have a question or need support? We're here to help you with your electronics journey.
                </p>
              </div>
              <div  className='flex flex-col items-start text-white'>
                <span>
                  <strong>📍 Address:</strong>  123 Tech Lane, Karachi, Pakistan 
                </span>
                <span>
                  <strong>📧 Email:</strong>  jaiganeshmal@gmail.com 
                </span>
                <span>
                  <strong>📞 Phone:</strong>  +92 3180392600 
                </span>
              </div>
              <div>

              </div>
            </div>

            <div className='md:w-[50%] w-[90%]'>
              <form action="" className='text-white flex flex-col gap-4'>
                <label className='space-y-1'>
                  <p className='text-gray-300'>Your Name</p>
                  <input type="text" placeholder='Jai Kumar' className='outline-none bg-white w-full py-3 px-6 placeholder:text-gray-200 rounded-xl' />
                </label>
                <label className='space-y-1'>
                  <p className='text-gray-300'>Your Email</p>
                  <input type="text" placeholder='jaiganeshmal@gmail.com' className='outline-none bg-white w-full py-3 px-6 placeholder:text-gray-200 rounded-xl' />
                </label>
                <label className='space-y-1'>
                  <p className='text-gray-300'>Your Message</p>
                  <textarea placeholder='Type your message...' className='min-h-28 outline-none resize-none bg-white/10 backdrop-blur-lg w-full py-3 px-6 placeholder:text-gray-200 rounded-xl'>
                  </textarea>
                </label>
                <button className='bg-gradient-to-r from-[#F9303F] via-[#D250AA] to-[#B14AFD] w-full py-3 rounded-xl '>Send Message 🚀</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact