import React, { useContext, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { DataContext } from '../Config/DataContext';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Category from './Category';

const Carousel = () => {
    let { fetchProducts, data } = useContext(DataContext);

    useEffect(() => {
        fetchProducts();
    }, [])

    let SamplePrevArrow = (props ) => {
        let { className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className} `} style={{zIndex: 3}} >
                <FaArrowLeft className='arrows' style={{...style , display: 'block', left: '50px', padding: '4px', backgroundColor: 'red', color: 'white', borderRadius: '50px', position: 'absolute'}} />
            </div>
        )  
     }

     let SampleNextArrow = (props ) => {
        let { className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex: 3}} >
                <FaArrowRight className='arrows' style={{...style , display: 'block', right: '50px', padding: '4px', backgroundColor: 'red', color: 'white', borderRadius: '50px', position: 'absolute' }} />
            </div>
        )  
     }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to='prev' />,
    };


    return (
        <>
            <Slider {...settings} className=' relative overflow-hidden' >
                {
                    data.slice(0, 7).map((item, index) => {
                        return (
                            <div key={index}  className=' bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10'>
                                <div className='w-full h-[600px] flex md:flex-row flex-col justify-center items-center gap-10 px-4 my-20 md:my-0 '>
                                    <div className='md:space-y-6 space-y-3'>
                                        <h1 className='text-red-500 text-sm font-semibold'>
                                            Powering Your World with the Best in Electronics. 
                                        </h1>
                                        <h1 className='md:w-[500px] md:text-4xl text-2xl text-white font-bold md:line-clamp-3 line-clamp-2'>
                                            {item.title}
                                        </h1>
                                        <p className='md:w-[500px] text-gray-400 line-clamp-3 pr-7 '>
                                            {item.description}
                                        </p>
                                        <button className='bg-gradient-to-r from-red-500 to-purple-500 px-3 py-1 rounded-md text-white cursor-pointer'>
                                            Shop Now
                                        </button>
                                    </div>
                                    <div>
                                        <img src={item.image}  className='md:w-[550px]  rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-red-500 cursor-pointer duration-300' />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <Category />
        </>
    )
}

export default Carousel