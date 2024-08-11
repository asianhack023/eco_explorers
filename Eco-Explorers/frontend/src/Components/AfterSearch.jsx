// latest Milako
import React from "react";
export default function AfterSearch({e}) {
   return (
      <>
         <div className="flex justify-between items-center bg-white border border-b-black rounded-md ">
            <div className="flex items-center justify-center">
               <div className="h-28 w-full p-4">
                  <img
                     className="h-20 rounded-md"
                     src="https://imgs.search.brave.com/QpLA0L5AplPd1pWUF43pSHOgLQP__jmtbQZJQGZ1ftc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9tYW5hbmct/YW5uYXB1cm5hLWNp/cmN1aXQtdHJlay1u/ZXBhbC0yNjBudy01/NzA1NDYxMDkuanBn"
                     alt="photo"
                  />
               </div>
               <div className="flex items-start justify-start flex-col">
                  <div className="font-bold ">{e.name}</div>
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4  text-yellow-300`}
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
            <div className="flex justify-center items-center p-4">
               <button className=" h-10 w-32 bg-orange-600 text-white rounded-md border border-b-black">
                  Explore More
               </button>
            </div>

         </div>
      </>
   );
}
