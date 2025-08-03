import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartData } from '../Config/CartData'

const ProductListView = ({ value }) => {
    let navigate = useNavigate()
    let {addToCartHanlder} = useContext(CartData)
    return (
        <>
            
            <div className='space-y-4 mt-2'>
                <div className='flex gap-7 items-center bg-gray-100 p-4 rounded-md'>
                    <img src={value.image} alt=""
                    onClick={()=> navigate(`/products/${value.id}`)}
                    className=' md:size-60 size-25 rounded-md cursor-pointer' />
                    <div className=' flex flex-col gap-2 items-start'>
                        <h1 className='md:text-xl text-lg font-bold hover:text-red-500 line-clamp-3'>{value.title}</h1>
                        <p className='flex items-center text-sm md:text-lg font-semibold'>
                            $<span className='md:text-4xl text-3xl'>{value.price}</span>
                            ({value.discount}% off)
                        </p>
                        <p className='text-sm'>FREE delivery <span className='font-semibold'>Fri, 18 Apr</span>  <br />
                            Or fastest delivery <span className='font-semibold'>Tomorrow, 17 Apr</span>
                        </p>
                        <button onClick={()=> addToCartHanlder(value)} className='px-3 py-1 bg-red-500 text-white rounded-md cursor-pointer'>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListView