import React, { useEffect, useState } from 'react'
import SearchFilter from '../Components/SearchFilter'
import { getData } from '../Config/DataContext'
import loader from '../assets/Loader.webm'
import CardProducts from '../Components/CardProducts'
import Pagination from '../Components/Pagination'
import notFound from '../assets/notfound.json'
import Lottie from 'lottie-react'
import MobileFilter from '../Components/MobileFilter'

const Products = () => {
  let { data, fetchProducts } = getData()
  let [search, setSearch] = useState("");
  let [category, setCategory] = useState("ALL");
  let [brand, setBrand] = useState("ALL");
  let [priceRange, setPriceRange] = useState([0, 5000]);
  let [page, setPage] = useState(1);
  let [openFilter, setOpenFilter] = useState(false)

  let selectCategoryHandler = (e) => {
    setCategory(e.target.value)
    setPage(1)
    setOpenFilter(false)
  }
  
  let selectBrandHandler = (e) => {
    setBrand(e.target.value)
    setPage(1)
    setOpenFilter(false)
  }

  let filterProductData = data?.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "ALL" || data.category === category) &&
    (brand === "ALL" || data.brand === brand) &&
    (data.price >= priceRange[0] && data.price <= priceRange[1])
  )

  let pageHandler = (selectPage) => {
    setPage(selectPage);
    window.scrollTo(0, 0)
  }

  let dynamicPage = Math.ceil(filterProductData.length / 8)

  useEffect(() => {
    fetchProducts()
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className='md:w-[80%] w-[90%] mx-auto  min-h-screen mb-10'>
        <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter} search={search} setSearch={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} selectBrandHandler={selectBrandHandler}
          selectCategoryHandler={selectCategoryHandler} />
        {
          data.length > 0 ? (
            <div className='flex md:flex-row flex-col items-start justify-center gap-7'>

              <SearchFilter search={search} setSearch={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} selectBrandHandler={selectBrandHandler}
                selectCategoryHandler={selectCategoryHandler} />
              {
                filterProductData.length > 0 ? (
                  <div className='flex flex-col items-center justify-center '>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10'>
                      {
                        filterProductData.slice(page * 8 - 8, page * 8).map((item, index) => (
                          <CardProducts item={item} key={index} />
                        ))
                      }
                    </div>
                    <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage} />
                  </div>
                ) : (
                  <div className='md:w-[900px] md:h-[600px] flex justify-center items-center mt-10'>
                    <Lottie animationData={notFound} classID='w-[500px] ' />
                  </div>
                )
              }

            </div>
          ) : (
            <div className='w-full h-[70vh] flex items-center justify-center'>
              <video autoPlay loop muted  >
                <source src={loader} type="video/mp4" />
              </video>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Products