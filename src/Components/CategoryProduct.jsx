import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useParams, useNavigate } from 'react-router-dom';
import ProductListView from './ProductListView';

const CategoryProduct = () => {
  let navigate = useNavigate()
  let [getCategory, setGetCategory] = useState([])
  let params = useParams()
  let category = params.category
  // console.log(category);

  let getFetch = async () => {
    try {
      let fetch = await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`)
      let res = fetch.data.products
      setGetCategory(res)
      // console.log(data)

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getFetch()
  })



  return (
    <>
      <div className=' lg:w-[80%] w-[90%] mx-auto min-h-screen my-10 p-2'>
        <button onClick={()=> navigate('/')} className='bg-[#1E2939] cursor-pointer text-white flex items-center px-4 py-1 mb-5 rounded-md'>
          <IoIosArrowBack className='text-xl' />
          Back
        </button>
        {
          getCategory.map((value,index)=>{
              return <ProductListView value={value} key={index} />
          })
        }
      </div>
    </>
  )
}

export default CategoryProduct