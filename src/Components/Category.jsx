import React, { useEffect } from 'react'
import {getData } from '../Config/DataContext'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    let navigate = useNavigate()
    let {data} = getData()

     let uniqueCategories =(data, property)=>{
            let newVal = data.map((curElem)=>{
                return curElem[property]
            })
            newVal = [...new Set(newVal)]
            return newVal
        }
        
        let allDataCategories = uniqueCategories(data, "category")

  return (
    <>
        <div className='bg-[#101829] py-7 px-4 gap-4 flex flex-wrap md:justify-around justify-center items-center '>
            {
                allDataCategories.map((value, index)=>{
                    return(
                        <button key={index} onClick={()=> navigate(`/category/${value}`)} className='cursor-pointer  py-1 px-3 bg-gradient-to-r from-red-500 to-purple-500 rounded-md text-white uppercase font-semibold tracking-wide' >
                                {value}
                        </button>
                    )
                })
            }
        </div>
    </>
  )
}

export default Category