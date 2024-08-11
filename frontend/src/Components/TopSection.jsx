//Latest
import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaSearch } from 'react-icons/fa'
import AfterSearch from './AfterSearch'
import all_product from '../assets/assets';
import hackvideo from "../assets/hack.mp4";

export default function TopSection() {
    const [search, setsearch] = useState("");
    const filteredObjects = all_product.filter((obj) =>
      obj.name.toLowerCase().includes(search.toLowerCase())
    );
    
  return (
    <div>
        <div className="relative h-screen  overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-10 ">
          <Navbar />
        </div>

        <video
          src={hackvideo}
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        />

        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-center z-20 px-4 md:px-8 lg:px-16">
          <h1 className="wonder text-white font-semibold text-4xl md:text-3xl lg:text-4xl mb-4">
            <span className="text-orange-600">Wonder</span> More,  <span className="text-orange-600">Worry</span> Less
          </h1>
          <div className=''>
            
          <div className="text flex flex-col sm:flex-row justify-center items-center relative mt-5">
            <input
              type="text"
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Find Your Next Adventure......"
              className="p-4 border-none border-2 bg-transparent  w-[550px]  rounded-2xl bg-white opacity-30 px-10"
            />
            <FaSearch className="search text-orange-600 text-xl sm:text-2xl ml-2 mt-2 sm:mt-0 absolute right-4 top-[30%]" />
          </div>
          {search !== "" && (
                        <div className='max-h-[45vh] overflow-y-scroll mt-3 '>

              {filteredObjects.map((e, i)=> {
           return  <AfterSearch e={e}/>
           })}
          </div>
           
          )
          
          }
        
          </div>
          </div>
         
      </div>
    </div>
  )
}
