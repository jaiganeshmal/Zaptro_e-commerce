import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { CartData } from '../Config/CartData';
import cartEmpty from '../assets/empty-cart.png'
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const Cart = ({ location, getLocation }) => {
  let { cartItem, updateCart, itemDelete } = useContext(CartData)
  let { user } = useUser()
  let navigate = useNavigate()

  let totalPrice = cartItem.reduce((total, item) => total + (item.price * item.quantity), 0)


 

  return (
    <>
      <div className='lg:w-[80%] w-[90%] mx-auto mt-10 md:px-4 px-0 mb-10'>
        {
          cartItem.length > 0 ? (
            <div>
              <h1 className='text-2xl text-gray-800 font-bold'>Add Cart ({cartItem.length})</h1>
              <div>
                <div className='mt-10'>
                  {
                    cartItem.map((value, index) => {
                      return (
                        <div key={index} className='flex items-center justify-between p-7 bg-gray-100 rounded-md mt-3 '>
                          <div className='flex items-center gap-4'>
                            <img src={value.image} alt="" className='size-20' />
                            <div >
                              <h1 className='line-clamp-2 md:w-[300px]'>
                                {value.title}
                              </h1>
                              <p className='text-red-500 font-semibold text-xl '>
                                ${value.price}
                              </p>
                            </div>
                          </div>
                          <div className='p-2 bg-red-500 text-white flex gap-4 font-bold rounded-md text-xl'>
                            <button onClick={() => updateCart(cartItem, value.id, 'decrease')} className='cursor-pointer'>-</button>
                            <span>{value.quantity}</span>
                            <button onClick={() => updateCart(cartItem, value.id, 'increase')} className='cursor-pointer'>+</button>
                          </div>
                          <span className='p-3 hover:bg-white/60 rounded-full hover:shadow-2xl duration-300'>
                            <MdDelete onClick={() => itemDelete(value.id)} className='size-8 text-red-600 cursor-pointer' />
                          </span>
                        </div>
                      )
                    })
                  }
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-20 items-start'>
                  <div className='bg-gray-100 mt-5 p-7 rounded-md space-y-2'>
                    <h1 className='text-xl font-bold text-gray-800'>Delivery Info</h1>
                    <div className='flex flex-col space-y-1'>
                      <label >Full Name</label>
                      <input type="text" placeholder='Enter your name' value={user?.fullName} className='p-2 bg-white border border-gray-200 outline-none w-full rounded-md' />
                    </div>
                    <div className='flex flex-col space-y-1'>
                      <label >Address</label>
                      <input type="text" placeholder='Enter your address' value={location?.city_district} className='p-2 bg-white border border-gray-200 outline-none w-full rounded-md' />
                    </div>
                    <div className='flex items-center gap-4'>
                      <div className='space-y-1'>
                        <label >State</label>
                        <input type="text" placeholder='Enter your state' value={location?.town} className='p-2 bg-white border border-gray-200 outline-none w-full rounded-md' />
                      </div>
                      <div className='space-y-1'>
                        <label >PostCode</label>
                        <input type="text" placeholder='Enter your post code' value={location?.postcode} className='p-2 bg-white border border-gray-200 outline-none w-full rounded-md' />
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <div className='space-y-1'>
                        <label >Country</label>
                        <input type="text" placeholder='Enter your country' value={location?.country} className='p-2 bg-white border border-gray-200 outline-none w-full rounded-md' />
                      </div>
                      <div className='space-y-1'>
                        <label >Phone No</label>
                        <input type="text" placeholder='Enter your post number' className='p-2 bg-white border border-gray-200 outline-none w-full rounded-md' />
                      </div>
                    </div>
                    <button className='px-2 py-1 bg-red-500 text-white rounded-md mt-3 cursor-pointer'>Submit</button>
                    <div className='text-gray-700 flex justify-center items-center '>
                      ------OR------
                    </div>
                    <div className='flex justify-center items-center '>
                      <button onClick={getLocation} className='text-white px-4 py-2 rounded-md bg-red-500 cursor-pointer'>
                        Detect Location
                      </button>
                    </div>
                  </div>

                  <div className='space-y-2 bg-white shadow-2xl mt-5 rounded-md border-gray-100 p-7'>
                    <h1 className='text-xl font-bold text-gray-800'>Bill Details</h1>
                    <div className='text-gray-700 flex items-center justify-between'>
                      <h1 className='flex items-center gap-1'>
                        <LuNotebookText /> <span>Items total</span>
                      </h1>
                      <p>${totalPrice}</p>
                    </div>
                    <div className='text-gray-700 flex items-center justify-between'>
                      <h1 className='flex items-center gap-1'>
                        <MdDeliveryDining /> <span>Delivery Charge</span>
                      </h1>
                      <p className='space-x-1'>
                        $<span className='line-through'>$25</span>
                        <span className='text-red-600 uppercase font-semibold'>Free</span>
                      </p>
                    </div>
                    <div className='text-gray-700 flex items-center justify-between'>
                      <h1 className='flex items-center gap-1'>
                        <IoBagHandleSharp /> <span>Handling Charge</span>
                      </h1>
                      <p className='space-x-1 text-red-500 font-semibold'> $5 </p>
                    </div>
                    <hr className='text-gray-200 mt-2' />
                    <div className=' flex items-center justify-between'>
                      <h1 className='text-lg font-bold'>
                        Grand total
                      </h1>
                      <p className='font-bold text-lg'> ${totalPrice + 5} </p>
                    </div>
                    <div className='mt-5 w-full space-y-2'>
                      <h1 className='text-gray-800 font-semibold'>Apply Promo Code</h1>
                      <div className='flex gap-2'>
                        <input type="text" placeholder='Enter code' className='rounded-md border border-gray-200 p-2 w-full outline-none' />
                        <button className='px-3 py-1 rounded-md text-gray-800 border border-gray-200'>Apply</button>
                      </div>
                      <button className='py-2 px-3 bg-red-500 w-full text-white rounded-md mt-4 cursor-pointer'>
                        Porcess to Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='flex flex-col gap-3 items-center justify-center min-h-[80vh] '>
              <h1 className='text-red-500 md:text-5xl text-4xl font-bold'>Oh no! Your Cart is empty</h1>
              <img src={cartEmpty} alt="" className='w-[400px]' />
              <button onClick={() => navigate('/products')} className='text-white bg-red-500 text-lg font-semibold px-6 py-2 rounded-md cursor-pointer'>
                Continue Shopping
              </button>
            </div>
          )
        }
      </div >
    </>
  )
}

export default Cart