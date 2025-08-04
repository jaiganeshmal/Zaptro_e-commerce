import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import BreadCrums from '../Components/BreadCrums'
import loader from '../assets/Loader.webm'
import { CartData } from '../Config/CartData';

const SinglePage = () => {
    let [singleCard, setSingleCard] = useState('')
    let params = useParams()
    // console.log(params);
    let {addToCartHandler} = useContext(CartData)

    let getSinglePage = async () => {
        try {
            let res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`)
            let productData = res.data.product
            console.log(productData);

            setSingleCard(productData)
        } catch (error) {
            console.log(error);
        }
    }

    let originalPrice = Math.round(singleCard.price + (singleCard.price * singleCard.discount / 100))

    useEffect(() => {
        getSinglePage()
    }, [])

    return (
        <>
            {
                singleCard ? (
                    <div className='w-full min-h-screen flex flex-col items-center gap-14 my-10'>
                        <BreadCrums title={singleCard.title} />
                        <div className='md:w-[80%] w-full '>
                            <div className='grid md:grid-cols-2  lg:items-center md:items-start items-center gap-6 '>
                                <div className='md:w-full w-[90%] mx-auto'>
                                    <img src={singleCard.image} alt={singleCard.title} className='aspect-square object-cover' />
                                </div>
                                <div className='md:w-auto w-[90%] mx-auto flex flex-col gap-6 items-start '>
                                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800'>
                                        {singleCard.title}
                                    </h1>
                                    <p className='text-sm text-gray-700 uppercase'>
                                        {singleCard.brand} / {singleCard.category} /{singleCard.model}
                                    </p>
                                    <p className='text-red-500 text-xl font-bold'>
                                        ${singleCard.price} <span className='line-through text-gray-700'>{`$${originalPrice}`}</span> <span className='py-2 px-4 text-white bg-red-500 rounded-lg'>{singleCard.discount}% Discount</span>
                                    </p>
                                    <p className='text-gray-700'>
                                        {singleCard.description}
                                    </p>
                                    <div>
                                        <label className='text-sm text-gray-700'>
                                            Quantity:
                                        </label>
                                        <input type="number" min={1} value={1} className='text-gray-700 border-gray-300 border-2 rounded-lg py-1 px-3 w-16 ' />
                                    </div>
                                    <button onClick={()=>addToCartHandler(singleCard)} className='text-lg flex items-center py-2 px-6 gap-1 cursor-pointer rounded-lg text-white bg-red-500'>
                                        <IoCartOutline className='w-6 h-6' /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='h-screen w-full flex justify-center items-center'>
                        <video autoPlay muted loop >
                            <source src={loader} />
                        </video>
                    </div>
                )
            }

        </>
    )
}

export default SinglePage