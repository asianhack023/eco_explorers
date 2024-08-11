//Latestaashis
import React from "react";
import { FaYoutube } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function OurFooter() {
   return (
      <div className="lg:px-10 xl:px-32 md:px-10 px-4  bg-gradient-to-t pt-7 bg-orange-600 font-poppins text-white">
         <div className=" flex md:justify-between md:flex-row flex-col justify-evenly  md:items-center items-start  mt-4">
            <div className="flex md:hidden justify-between w-full">
               <div className=" md:w-[30%] w-[200px] md:hidden flex flex-col items-start ">
                  <div className="flex gap-3 items-center cursor-pointer">
                     <p className="font-bold text-2xl text-white">NepTour</p>
                     <p className="font-semibold text-base text-primary">
                        Travel and Discover with us
                     </p>
                  </div>
                  <p className="w-full font-light text-xs md:mt-14 mt-4 text-start ">
                     we are here to guide you through every step of your
                     journey.{" "}
                  </p>
                  <div className="flex gap-3 justify-start items-start lg:mt-0 pt-6">
                     <div className="p-1 rounded-full  text-white cursor-pointer">
                        <FaFacebook />
                     </div>
                     <div className="p-1 rounded-full  text-white cursor-pointer">
                        <FaInstagram />
                     </div>
                     <div className="p-1 rounded-full  text-white cursor-pointer">
                        <FaYoutube />
                     </div>
                     <div className="p-1 rounded-full  text-white cursor-pointer">
                        <FaXTwitter />
                     </div>
                  </div>
               </div>
               <div>
                  <h1 className="font-bold text-xl lg:mt-0 md:text-start text-start">
                     About
                  </h1>
                  <div className=" flex flex-col lg:mt-0  space-y-4 pt-5 items-start  text-sm lg:text-base font-normal ">
                     <a href="/homepage">Home</a>
                     <a href="/about-us">About</a>
                     <a href="/news">Blogs</a>
                     <a href="/">Help & Support</a>
                  </div>
               </div>
            </div>
            <div className="flex md:hidden justify-between mt-10">
               <div>
                  <h1 className="font-bold text-xl lg:mt-0 mt-4 md:text-start text-start">
                     Company
                  </h1>
                  <div className=" flex flex-col lg:mt-0  space-y-4 pt-5 items-start text-sm lg:text-base font-normal ">
                     <a href={"/"} className="cursor-pointer">
                        How we work
                     </a>
                     <a href={"/"} className="cursor-pointer">
                        Terms of service
                     </a>
                     <a href="/join-now" className="cursor-pointer">
                        Pricing
                     </a>
                  </div>
               </div>
               <div className="md:w-[20%] w-[50%]">
                  <h1 className="font-bold text-xl lg:mt-0 mt-4 md:text-start text-start">
                     Contact us
                  </h1>
                  <div className=" flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start text-sm lg:text-base font-normal items-start">
                     <p className="md:text-start text-start">
                        P8P6+29Q, Shiva Mandir, Ring Rd,Kathmandu 44600
                     </p>
                     <p>+977 9803303457</p>
                     <p>neptour@gmail.com</p>
                  </div>
               </div>
            </div>
            <div className=" md:w-[30%] w-[200px] md:flex hidden flex-col items-start ">
               <div className="flex gap-3 items-center cursor-pointer">
                  <p className="font-semibold text-base text-primary">NepTour</p>
               </div>
               <p className="w-full font-light text-sm md:mt-7 mt-4 text-start ">
                  Discover breathtaking landscapes, rich cultural heritage, and
                  unforgettable adventures. Whether you're seeking high-altitude
                  treks , serene lakes, or ancient temples, we are here to guide
                  you through every step of your journey.{" "}
               </p>
               <div className="flex gap-3 justify-start items-start lg:mt-0 pt-6">
                  <div className="p-1 rounded-full  text-white cursor-pointer">
                     <FaFacebook />
                  </div>
                  <div className="p-1 rounded-full  text-white cursor-pointer">
                     <FaInstagram />
                  </div>
                  <div className="p-1 rounded-full  text-white cursor-pointer">
                     <FaYoutube />
                  </div>
                  <div className="p-1 rounded-full  text-white cursor-pointer">
                     <FaXTwitter />
                  </div>
               </div>
            </div>
            <div className="md:block hidden">
               <h1 className="font-bold text-xl lg:mt-0 mt-4 md:text-start text-center">
                  About
               </h1>
               <div className=" flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start  text-sm lg:text-base font-normal items-center">
                  <a href="/homepage">Home</a>
                  <a href="/about-us">About</a>
                  <a href="/news">Blogs</a>
                  <a href="">Help & Support</a>
               </div>
            </div>

            <div className="md:block -mt-6 hidden  ">
               <h1 className="font-bold text-xl lg:mt-0 mt-4 md:text-start text-center">
                  Company
               </h1>
               <div className=" flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start text-sm lg:text-base font-normal items-center">
                  <a href="/" className="cursor-pointer">
                     How we work
                  </a>
                  <a href="/" className="cursor-pointer">
                     Terms of service
                  </a>
                  <a href="/join-now" className="cursor-pointer">
                     Pricing
                  </a>
                  <p></p>
               </div>
            </div>
            <div className="md:w-[20%] w-[50%] md:block hidden xl:-mt-5 mt-0">
               <h1 className="font-bold text-xl lg:mt-0 mt-4 md:text-start text-center">
                  Contact us
               </h1>
               <div className=" flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start text-sm lg:text-base font-normal items-center">
                  <p className="md:text-start text-center">
                     Shiva Mandir, Ring Rd,Kathmandu 44600
                  </p>
                  <p>+977 9803393498</p>
                  <p>neptour@gmail.com</p>
               </div>
            </div>
         </div>
         <hr />
         <p className="py-4  text-center font-medium md:text-base text-sm">
            Copyright © NepTour 2024. All Right Reserved
         </p>
      </div>
   );
}
