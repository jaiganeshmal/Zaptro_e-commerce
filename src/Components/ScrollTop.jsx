import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
    let [visible, setVisible] = useState(false)

    useEffect(() => {
        let scrolToggle = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            }else{
                setVisible(false)
            }
        }

        window.addEventListener('scroll', scrolToggle)

        return ()=>{window.removeEventListener('scroll', scrolToggle)}
    }, [])

    let scrolToTop = ()=>{
        window.scrollTo({top : 0, behavior :'smooth'} )
    }
    return (
        <>
            <button onClick={scrolToTop} className={`fixed bottom-6 right-6 z-50 bg-red-500 p-3 rounded-full shadow-2xl shadow-gray-600 ${visible ? 'opacity-100' : 'opacity-0'} cursor-pointer`}>
                <FaArrowUp className='size-8 text-white' />
            </button>
        </>
    )
}

export default ScrollTop