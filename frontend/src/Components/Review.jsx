import React from 'react'
import InfiniteSlider from './InfinitySlider'

export default function Review() {
    const slides=[
        {
            "name":"Yunish",
            "address":"KTM",
            "description":"This is description",
            "image":"https://images.unsplash.com/photo-1714138667818-b545353d768a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "name":"Yunish",
            "address":"Nuwakot",
            "description":"This is description",
            "image":"https://images.unsplash.com/photo-1714138665669-3d285d219974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
  return (
    <div className='font-poppins  mx-auto w-[100%] px-3 xl:px-32 md:px-16 md:mb-40 mb-16 md:mt-32 mt-10'>
        <p className='md:text-5xl text-3xl font-semibold text-center'>Words from Our Customers</p>
        <p className='md:text-base text-xs font-poppins font-normal text-center md:px-10 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</p>
        <InfiniteSlider slides={slides}/>
    </div>
  )
}