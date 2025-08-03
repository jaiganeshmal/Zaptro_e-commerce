import React from 'react'
import { getData } from '../Config/DataContext';

const SearchFilter = ({ search, setSearch, category, setCategory, brand, setBrand, priceRange, setPriceRange, selectCategoryHandler, selectBrandHandler }) => {
    let { allDataCategories, allDataBrand } = getData();

    return (
        <>
            <div className='bg-gray-100 p-4 mt-10 rounded-lg md:block hidden'>
                <input type="search" placeholder='search...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='bg-white px-3 py-2 placeholder:text-gray-400 text-black outline-none rounded-md border border-gray-300'
                />
                <h1 className='font-semibold text-xl mt-5'>Category</h1>
                <div className='mt-4 space-y-2'>
                    {
                        allDataCategories.map((value, index) => {
                            return (
                                <div key={index} className='flex items-center gap-2' >
                                    <input type="checkbox" value={value} name={value} checked={category === value} onChange={selectCategoryHandler} />
                                    <button className='uppercase'>{value}</button>
                                </div>
                            )
                        })
                    }
                </div>
                <h1 className='font-semibold text-xl mt-5'>Brand</h1>
                <select
                    value={brand}
                    onChange={selectBrandHandler}
                    className='w-full bg-white uppercase outline-none px-3 py-2 border-2 border-gray-300 rounded-lg mt-2' >
                    {
                        allDataBrand.map((value, index) => {
                            return (
                                <option value={value} key={index} >{value}</option>
                            )
                        })
                    }
                </select>

                <h1 className='font-semibold text-xl mt-5'>Price Range</h1>
                <div className='mt-2'>
                    <p>
                        Price Range: ${priceRange[0]}- ${priceRange[1]}
                    </p>
                    <input type="range" min="0" max="5000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
                        className='w-full mt-2' />
                </div>
                <button
                    onClick={() => {
                        setSearch("");
                        setCategory("ALL");
                        setBrand("ALL");
                        setPriceRange([0, 5000]);
                    }}
                    className=' bg-red-500 text-white font-semibold py-2 px-3 rounded-lg mt-5'>
                    Reset Filter
                </button>
            </div>
        </>
    )
}

export default SearchFilter