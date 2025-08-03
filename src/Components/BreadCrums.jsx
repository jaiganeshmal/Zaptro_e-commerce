import React from 'react'
import { useNavigate } from 'react-router-dom'

const BreadCrums = ({title}) => {
    
  let navigate = useNavigate()
  return (
    <div className='lg::w-[80%] w-[90%]  h-auto'>
        <h1 className='text-lg text-gray-700 font-semibold'>
          <span onClick={()=>navigate('/')} className='cursor-pointer'>Home</span> / <span onClick={()=>navigate('/products')} className='cursor-pointer'>Products</span> / <span>{title}</span>
        </h1>
    </div>
  )
}

export default BreadCrums