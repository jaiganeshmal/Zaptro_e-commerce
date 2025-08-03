import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { CartData } from '../Config/CartData';


const CardProducts = ({ item }) => {
  // console.log(item);
  let {addToCartHanlder} = useContext( CartData)
  
  let navigate = useNavigate()

  return (
    <div className='hover:scale-105 p-2 hover:shadow-2xl border border-gray-100 duration-300 rounded-2xl cursor-pointer'>
      <img
        src={item.image}
        className='aspect-square bg-gray-100'
        onClick={()=>navigate(`/products/${item.id}`)}
      />
      <h2 className='font-semibold line-clamp-2 p-2 mt-1'>{item.title}</h2>
      <p className='text-xl p-2 my-2 text-gray-800 font-bold'>${item.price}</p>
      <button onClick={()=>addToCartHanlder(item)} className='cursor-pointer w-full rounded-lg bg-red-500 py-2 flex items-center justify-center gap-1  text-white font-semibold text-lg'>
        <IoCartOutline size={25} />
        Add to Cart
      </button>
    </div>
  )
}

export default CardProducts