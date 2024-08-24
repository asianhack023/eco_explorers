//Latest
import React from 'react'
import { imageurl } from '../Pages/Attraction'
import OurFooter from './Footer'

export default function GuideComponent({e}) {
  return (
    <>
    <div>
    <div className="flex p-4 items-center shadow-xl bg-white gap-5 w-[45vw] h-[40vh] mb-5 mt-5 mr-5">
      <div className="w-[50%] h-full">
        <img
          src={`${imageurl}${e.user.imageUrl}`}
          alt="photo"
          
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col">
        <p className='font-bold text-2xl'>{e.user.username}</p>
        <div className="text-gray-500">{e.location}</div>
        <hr />
        <div>
          <p className='py-3'>{e.bio.slice(0,100)}...</p>
          <hr />
          <div className='flex justify-between pt-2 px-10'>
            <div className='flex flex-col items-center justify-evenly'>
              <div>Review</div>
              <div>{e.review}</div>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <div>Rating</div>
              <div className='flex items-center gap-2'>
              {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4   text-yellow-300`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* )) */}
  </div>
      </>
  )
}
