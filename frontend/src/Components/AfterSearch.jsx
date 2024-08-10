//Latest
import React from "react";

export default function AfterSearch() {
   return (
      <>
         <div>
            <div className="h-6 w-6">
               <img
                  className=""
                  src="https://imgs.search.brave.com/QpLA0L5AplPd1pWUF43pSHOgLQP__jmtbQZJQGZ1ftc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9tYW5hbmct/YW5uYXB1cm5hLWNp/cmN1aXQtdHJlay1u/ZXBhbC0yNjBudy01/NzA1NDYxMDkuanBn"
                  alt="photo"
               />
            </div>
               <div className="flex">
                   <div className="font-bold ">Title</div>
                   <div>rating</div>
            </div>
         </div>
           <div>
               <button className="p-4 w-5 bg-orange-600 text-white rounded-md border border-b-black">Explore More</button>
         </div>
      </>
   );
}