//Latest
import { Link } from "react-router-dom";
import all_product from '../assets/assets.js';
import hackvideo from "../assets/hack.mp4";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import AfterSearch from "../Components/AfterSearch.jsx";
import TopSection from "../Components/TopSection.jsx";
import axios from 'axios'
export const imageurl = "https://ml292fp0-3333.inc1.devtunnels.ms/"


const Attractions = () => {

  const [search, setsearch] = useState("");
  const filteredObjects = all_product.filter((obj) =>
    obj.name.toLowerCase().includes(search.toLowerCase())
  );
  const [data, setData] = useState([])
  const fetchData = async () => {
    const url = "https://ml292fp0-3333.inc1.devtunnels.ms/attraction";
  try {
    const res = await axios.get(url, {
      headers: {
        "Content-Type":"application/json"
      }
    })
    console.log(res.body)
    console.log(res.status)
    
    console.log(res.data.attractions)
    setData(res.data.attractions)
  } catch (error) {
    console.log(error)
    
  }
}
  useEffect(() => {
     
fetchData()

  }, [])
  
  
  return (
    <>
    <TopSection/>
      {/* <div className="relative h-screen w-screen overflow-hidden">
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
          <div className="text flex flex-col sm:flex-row justify-center items-center relative mt-5">
            <input
              type="text"
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Find Your Next Adventure......"
              className="p-4 border-none border-2 bg-transparent  w-[550px]  rounded-2xl bg-white opacity-30 px-10"
            />
            <FaSearch className="search text-orange-600 text-xl sm:text-2xl ml-2 mt-2 sm:mt-0 absolute right-4 top-[30%]" />
          </div>
          {search!=="" && (
            filteredObjects.map((e,i)=>{
              return <AfterSearch/>
            })
          )}
        </div>
      </div> */}

      <div className="attraction-b flex flex-wrap  mt-3 gap-2 ml-4 justify-evenly">
        {data.map((item, index) => (
          <div key={index} className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-white  ">
            <Link to={`/attraction/${item.id}`}>
              <img
                className="rounded-t-lg h-48 w-full object-cover"
                src={`${imageurl}${item.media_url}`}
                alt={item.name}
              />
            </Link>

            <div className="px-5 pb-5 bg-slate-300">
              <Link to={`/attraction/${item.id}`}>
                <h5 className="text-xl font-semibold tracking-tight text-black ">
                  {item.name}
                </h5>
              </Link>

              <div className="flex items-center mt-1.3 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < item.Rating ? 'text-yellow-300' : 'text-gray-200'}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>

                <span className="bg-blue-100 text-blue-800 text-sm ml-6 font-semibold p-3 rounded">
                  {item.rating}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  Reviews: {item.rating+index}
                </span>

                <Link to="/detail"


                  className="text-white bg-red-700 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Attractions;
