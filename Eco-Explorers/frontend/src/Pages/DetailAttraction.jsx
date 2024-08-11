//Latest
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Footer from "../Components/Footer";
import all_product from "../assets/assets";
import Navbar from "../Components/Navbar";

const DetailAttraction = () => {
   return (
      <>
         <div className="absolute top-0 left-0 w-full z-10 ">
            <Navbar />
         </div>
         <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper w-full h-full"
         >
            {all_product.map((e, i) => {
               return (
                  <SwiperSlide className="flex items-center justify-center text-lg bg-white">
                     <img
                        src={e.image}
                        alt=""
                        className="h-[70vh] object-cover w-full"
                     />
                  </SwiperSlide>
               );
            })}
         </Swiper>

         <div className="detailb mt-6 px-10 mb-10">
            <p className="text-base leading-relaxed text-black ">
               The Gorkha Durbar is a blend of fort, palace, and temple
               architecture, reflecting the traditional Newari style. Within the
               complex, the Gorakhnath Temple and the sacred Kalika Temple are
               prominent, drawing pilgrims and tourists alike. The palace is not
               just a symbol of royal heritage but also a testimony to Nepal's
               rich history, making it a must-visit destination for those
               interested in the cultural roots of the nation.
            </p>
         </div>
         <div className="detailc mb-20">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14124.901001094744!2d85.3049344!3d27.7411976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1723277320545!5m2!1sen!2snp"
               className="w-full h-96 border-0"
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>
         <Footer />
      </>
   );
};

export default DetailAttraction;
