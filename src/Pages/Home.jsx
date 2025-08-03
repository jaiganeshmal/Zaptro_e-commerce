import React, { useEffect } from 'react'
import Carousel from '../Components/Carousel'
import Banner from '../Components/Banner'
import Features from '../Components/Features'

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <>
      <Carousel />
      <Banner />
      <Features />
    </>
  )
}

export default Home