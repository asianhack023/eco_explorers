import { FaSearch } from "react-icons/fa";
import Navbar from "../Components/Navbar.jsx";
import gsap from "gsap";
import hackvideo from "../assets/hack.mp4";
import { useEffect, useRef, useState } from "react";
import Explore from "../assets/Explore.png";
import Footer from "../Components/Footer.jsx";
import Review from "../Components/Review.jsx";
import TopSection from "../Components/TopSection.jsx";
import { motion, useScroll, useSpring } from "framer-motion";
const Home = () => {
   const ref = useRef(null);
   const [inView, setInView] = useState(false);
   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
   });
   useEffect(() => {
      const handleScroll = () => {
         if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            setInView(rect.top <= windowHeight && rect.bottom >= 0);
         }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);
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
         <TopSection />

         {/* About US */}
         <div className="flex p-4 mt-4 bg-white justify-center items-center">
            <div className="bg-orange-600 w-24 h-[3px]"></div>
            <motion.h1
               ref={ref}
               className="text-black text-5xl font-semibold"
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
               transition={{ duration: 0.5, delay: 0.3 }}
            >
               About <span className="font-semibold text-orange-600">Us</span>
            </motion.h1>
            <div className="bg-orange-600 w-24 h-[3px]"></div>
         </div>
         <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="p-5 text-center"
         >
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
         </motion.div>

         {/* Services */}
         <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center p-4 gap-6"
         >
            <div className="p-5 w-[25vw] shadow-xl shadow-gray-300 rounded-md">
               <img
                  className="h-52 w-full object-cover rounded-md"
                  src={Explore}
                  alt="photo"
               />
               <div>
                  <h1 className="font-bold">Explore Attraction</h1>
                  <p>
                     Ghandruk is a scenic village in Nepal's Annapurna region,
                     offering stunning views of Annapurna and Machhapuchhre
                     peaks.
                  </p>
               </div>
            </div>
            <div className="p-5 w-[25vw] shadow-xl shadow-gray-300 rounded-md">
               <img
                  className="h-52 w-full object-cover rounded-md"
                  src="https://imgs.search.brave.com/NycRerkvDYEY0HJRu2mGPjdPC-1xHdONsu3AKhC70o8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/Mi8xMS8xMS8yMC9o/aW1hbGF5YXMtMzk4/OTQxMV82NDAuanBn"
                  alt="photo"
               />
               <div>
                  <h1 className="font-bold">Trekking Routes</h1>
                  <p>
                     Starting from Manang, the trail takes you through lush
                     forests, arid deserts, and traditional Gurung and Tibetan
                     villages. The journey is challenging, but reaching the
                     crystal-clear waters of Tilicho Lake.
                  </p>
               </div>
            </div>
            <div className="p-5 w-[25vw] shadow-xl shadow-gray-300 rounded-md ">
               <img
                  className="h-52 w-full object-cover rounded-md"
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/NClark-2017-1-15.jpg"
                  alt="photo"
               />
               <div>
                  <h1 className="font-bold">Authentic Nepali Experience</h1>
                  <p>
                     This charming hilltop preserved traditional architecture,
                     cobblestone streets, and warm local hospitality. Enjoy
                     panoramic Himalayan views, short hikes through lush
                     landscapes.
                  </p>
               </div>
            </div>
         </motion.div>

         <Review />
         <Footer />
      </>
   );
};

export default Home;
