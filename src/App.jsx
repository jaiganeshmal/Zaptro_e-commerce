import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// const Home = React.lazy(() => import('./Pages/Home'))
// const Products = React.lazy(() => import('./Pages/Products'))
// const About = React.lazy(() => import('./Pages/About'))
// const Contact = React.lazy(() => import('./Pages/Contact'))
// const Cart = React.lazy(() => import('./Pages/Cart'))
// const Footer = React.lazy(() => import('./Components/Footer'))
// const SinglePage = React.lazy(() => import('./Pages/SinglePage'))
// const CategoryProduct = React.lazy(() => import('./Components/CategoryProduct'))
// const ProtectedRoute = React.lazy(() => import('./Components/ProtectedRoute'))
import axios from 'axios'
import { CartData } from './Config/CartData'
import Products from './Pages/Products'
import SinglePage from './Pages/SinglePage'
import CategoryProduct from './Components/CategoryProduct'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ProtectedRoute from './Components/ProtectedRoute'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Footer from './Components/Footer'

const App = () => {
  let [opendropdown, setOpendropdown] = useState(false)
  let { cartItem, setCartItem } = useContext(CartData)
  // State to hold the location
  let [location, setLocation] = useState('')
  // console.log(location);

  let getLocation = async () => {
    window.navigator.geolocation.getCurrentPosition(async (pos) => {
      let { latitude, longitude } = pos.coords
      // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      let url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

      let location = await axios.get(url)
      // console.log(location.data);
      let exactLocation = location.data.address
      // console.log(exactLocation);
      setLocation(exactLocation)
      setOpendropdown(false)
    })
  }


  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    let storedCart = localStorage.getItem('cartItems')
    if (storedCart) {
      setCartItem(JSON.parse(storedCart))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItem))
  }, [cartItem])
  return (
    <>

      <BrowserRouter>
      
        <Navbar location={location} opendropdown={opendropdown} setOpendropdown={setOpendropdown} getLocation={getLocation} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SinglePage />} />
          <Route path="/category/:category" element={<CategoryProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<ProtectedRoute><Cart location={location} getLocation={getLocation} /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App