import React from 'react'
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { LuRotateCw } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";
const Features = () => {

    const features = [
        {
            id: 1,
            title: 'Free Shipping',
            order: 'On orders over $100',
            icon: MdOutlineLocalShipping
        },
        {
            id: 2,
            title: 'Secure Payment',
            order: '100% protected payments',
            icon: FiLock
        },
        {
            id: 3,
            title: 'Easy Returns',
            order: '30-day return policy',
            icon: LuRotateCw
        },
        {
            id: 4,
            title: '24/7 Support',
            order: 'Dedicated customer service',
            icon: MdAccessTime
        }
    ]

    return (
        <>
            <div className='md:p-8 px-2 py-6 flex md:flex-row flex-col gap-16 items-center justify-around'>
                {
                    features.map((value, index) => {
                        return (
                            <div key={index} className='flex items-center gap-2 '>
                                <value.icon size={50} className='text-gray-600' />
                                <div>
                                    <h2 className='text-xl font-semibold'>{value.title}</h2>
                                    <p className='text-gray-500'>{value.order}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Features