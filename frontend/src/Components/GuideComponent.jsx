//Latest
import React from 'react'
export default function GuideComponent() {
  return (
    <div>
    <div className="flex p-4 items-center shadow-xl bg-white gap-5 w-[45vw] h-52">
      <div className="w-[35%] h-full">
        <img
          src="https://imgs.search.brave.com/tagkYKCXyNZyr9u7r8CrIMR0Qu7oDz0s14s2Cup1h2o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Nub3cub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA0/L2JlYXV0aWZ1bC1n/aXJsLXBob3RvXzIu/anBn"
          alt="photo"
          
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col">
        <p className='font-bold text-2xl'>Anupama</p>
        <div className="text-gray-500">Kathmandu,Nepal</div>
        <hr />
        <div>
          <p className='py-3'>A girl who loves to to travel and make new friends</p>
          <hr />
          <div className='flex justify-between pt-2 px-10'>
            <div className='flex flex-col items-center justify-evenly'>
              <div>Review</div>
              <div>12</div>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <div>Review</div>
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
  )
}
