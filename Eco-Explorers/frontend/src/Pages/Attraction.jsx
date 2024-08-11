import { Link } from "react-router-dom";
import all_product from "../assets/assets.js";
import hackvideo from "../assets/hack.mp4";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import AfterSearch from "../Components/AfterSearch.jsx";
import TopSection from "../Components/TopSection.jsx";
import axios from "axios";
import OurFooter from "../Components/Footer.jsx";
export const imageurl = "http://localhost:3333/";

const Attractions = () => {
   const [search, setsearch] = useState("");
   const filteredObjects = all_product.filter((obj) =>
      obj.name.toLowerCase().includes(search.toLowerCase())
   );
   const [data, setData] = useState([]);
   const fetchData = async () => {
      const url = "http://localhost:3333/attraction";
      try {
         const res = await axios.get(url, {
            headers: {
               "Content-Type": "application/json",
            },
         });
         console.log(res.body);
         console.log(res.status);

         console.log(res.data.attractions);
         setData(res.data.attractions);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      fetchData();
   }, []);

   return (
      <>
         <TopSection />

         <div className="attraction-b flex flex-wrap  mt-5 rounded-md gap-4 ml-4 justify-evenly">
            {data.map((item, index) => (
               <div
                  key={index}
                  className="w-full h-full max-w-[24vw]  shadow-xl my-4 shadow-gray-300 rounded-md  bg-white  "
               >
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
                                 className={`w-4 h-4 ${
                                    i < item.rating
                                       ? "text-yellow-300"
                                       : "text-gray-200"
                                 }`}
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

                     <div className="flex items-center justify-between ">
                        <span className="text-2xl font-bold text-gray-900">
                           Reviews: {item.rating + index}
                        </span>

                        <Link
                           to="/detail"
                           className="text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                           Explore More
                        </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <OurFooter/>
      </>
   );
};

export default Attractions;
