
import { FaSearch } from "react-icons/fa";
import Navbar from "../Components/Navbar.jsx";
import gsap from "gsap";
import hackvideo from "../assets/hack.mp4";
import { useEffect } from "react";
import Explore from "../assets/Explore.png";
import Footer from "../Components/Footer.jsx";
import Review from "../Components/Review.jsx";
import TopSection from "../Components/TopSection.jsx";

const Home = () => {
   useEffect(() => {
      const tl = gsap.timeline();
      tl.fromTo(
         ".wonder",
         { opacity: 0, y: 40 }, // Start state
         { opacity: 1, y: 0, duration: 0.5, delay: 1 } // End state
      );

      tl.fromTo(
         ".text",
         { opacity: 0, y: 40 }, // Start state
         { opacity: 1, y: 0, duration: 0.5, delay: 0.1 } // End state
      );
   }, []);

   return (
      <>
    <TopSection/>
    
         {/* About US */}
         <div className="flex p-4 mt-4 bg-white justify-center items-center">
            <div className=" bg-orange-600 w-24 h-[3px]"></div>{" "}
            <h1 className="text-black text-5xl font-semibold">
              About <span className="font-semibold text-orange-600">Us</span>{" "}
            </h1>
            <div className=" bg-orange-600 w-24 h-[3px]"></div>
         </div>
         <div className="p-5 text-center">
            <p>
               Welcome to our travel company, your trusted guide to discovering
               the wonders of Nepal. We specialize in helping tourists uncover
               the hidden gems and must-see destinations across this
               breathtaking country. From the towering peaks of the Himalayas to
               the serene temples of Kathmandu, we ensure that your journey
               through Nepal is filled with unforgettable experiences. Let us
               guide you to the best spots, rich in culture, history, and
               natural beauty, making your visit truly remarkable.
            </p>
         </div>

         {/* services */}
         <div className="flex justify-center p-4">
            <div className="p-5 w-[25vw] ">
               <img
                  className="h-52 w-full object-cover  rounded-md"
                  src={Explore}
                  alt="photo"
               />
               <div>
                  <h1 className=" font-bold">Explore Attraction</h1>
                  <p>
                     Ghandruk is a scenic village in Nepal`s Annapurna region,
                     offering stunning views of Annapurna and Machhapuchhre
                     peaks.
                  </p>
               </div>
            </div>
            <div className="p-5 w-[25vw] ">
               <img
                  className="h-52 w-full object-cover  rounded-md"
                  src={Explore}
                  alt="photo"
               />
               <div>
                  <h1 className=" font-bold">Explore Attraction</h1>
                  <p>
                     Ghandruk is a scenic village in Nepal`s Annapurna region,
                     offering stunning views of Annapurna and Machhapuchhre
                     peaks.
                  </p>
               </div>
            </div>
            <div className="p-5 w-[25vw] ">
               <img
                  className="h-52 w-full object-cover  rounded-md"
                  src={Explore}
                  alt="photo"
               />
               <div>
                  <h1 className=" font-bold">Explore Attraction</h1>
                  <p>
                     Ghandruk is a scenic village in Nepal`s Annapurna region,
                     offering stunning views of Annapurna and Machhapuchhre
                     peaks.
                  </p>
               </div>
            </div>
         </div>

           {/* Finished */}


         <Review/>
         <Footer/>
      </>
   );
};

export default Home;