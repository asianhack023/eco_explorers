import React from "react";

import { FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import logo from "../assets/Logo.png";
import { FaAddressCard } from "react-icons/fa";

import { Link } from "react-router-dom";
export default function Footer() {
   const handleScrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   return (
      <div className="lg:px-10 xl:px-32 md:px-10 px-4 mt-32  bg-gradient-to-t pt-7 bg-orange-600 text-white font-outfit">
         <div className=" flex md:justify-between md:flex-row flex-col justify-evenly  md:items-center items-start  mt-4">
            <div className="flex md:hidden justify-between w-full">
               <div className=" md:w-[30%] w-[200px] md:hidden flex flex-col items-start ">
                  <div
                     className="flex gap-3 items-center cursor-pointer "
                     onClick={() => {}}
                  >
                     <img src={logo} alt="" className="lg:h-[60px] h-[50px]" />
                  </div>
                  <p className="w-full font-light text-xs md:mt-14 mt-4 text-start ">
                     Our Moto:"Wander More, Worry Less"
                  </p>
               </div>
            </div>

            <div className="md:block hidden">
               <h1 className="font-bold text-xl lg:mt-0 mt-4 md:text-start text-center">
                  Contact Us
               </h1>
               <div className=" flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start text-sm lg:text-base font-normal items-center">
                  <div className="flex justify-center items-center gap-2">
                     <FaAddressCard className="text-2xl" />
                     <p>Gongabu,Kathmandu</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                     <FaPhoneAlt className="text-2xl" />
                     <p>9803303524</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                     <MdAlternateEmail className="text-2xl" />
                     <p>neptour@gmail.com</p>
                  </div>

                  <p></p>
               </div>
            </div>

            <div className="md:block -mt-6 hidden  ">
               <h1 className="font-bold text-2xl lg:mt-0 mt-4 md:text-start text-center">
                  Follow Us
               </h1>
               <div className=" flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start text-sm lg:text-base font-normal items-center">
                  <div className="flex justify-center items-center gap-2">
                     <FaFacebook className="text-2xl" />
                     <p>Facebook</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                     <FaYoutube className="text-2xl" />
                     <p>Youtube</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                     <FaInstagram className="text-2xl" />
                     <p>Instagram</p>
                  </div>

                  <p></p>
               </div>
            </div>
         </div>
         <p className="mt-16 text-center font-medium md:text-base text-sm">
            Copyright © NepTour. All Right Reserved
         </p>
      </div>
   );
}
