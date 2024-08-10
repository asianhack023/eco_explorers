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
    });}
  return (
    <div className='lg:px-10 xl:px-32 md:px-10 px-4 mt-32  bg-gradient-to-t pt-7 bg-orange-600 text-white font-outfit'>
    <div className=' flex md:justify-between md:flex-row flex-col justify-evenly  md:items-center items-start  mt-4'>
      <div className='flex md:hidden justify-between w-full'>

     
    <div className=' md:w-[30%] w-[200px] md:hidden flex flex-col items-start '>
      <div className="flex gap-3 items-center cursor-pointer " onClick={()=>{
           
          }}>
            {/* <img src={logo} alt="" className="lg:h-[60px] h-[50px]" /> */}
            Logo
          </div>
<p className='w-full font-light text-xs md:mt-14 mt-4 text-start '>Qualitätsleads für Photovoltaik – Ihr Schlüssel zum Erfolg. Willkommen bei ESK
 </p>
<div className='flex gap-3 justify-start items-start lg:mt-0 pt-6' >
       {/* <div className='p-1 rounded-full  text-white cursor-pointer text-2xl'>
       <FaFacebook/>
       </div> */}
       <a href='https://www.instagram.com/esk_leads?igsh=MWg1MXdkZGdtb2M4YQ%3D%3D&utm_source=qr' target='_blank' className='p-1 rounded-full  text-white cursor-pointer text-2xl'>
       <FaInstagram/>
       </a>
       {/* <div className='p-1 rounded-full  text-white cursor-pointer text-2xl'>
       <FaYoutube/>
       </div>
       <div className='p-1 rounded-full  text-white cursor-pointer text-2xl'>
       <FaXTwitter/>
       </div> */}
      </div>
      </div>
      <div>
      <h1 className='font-bold text-xl lg:mt-0 md:text-start text-start'>Über Uns</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 items-start  text-sm lg:text-base font-normal '>
     <Link to="/" onClick={()=>{
        handleScrollToTop()
      }}>Startseite</Link>
      <Link to="/über-uns" onClick={()=>{
        handleScrollToTop()
      }}>Über Uns</Link>
      <Link to="/meeting-vereinbaren" onClick={()=>{
        handleScrollToTop()
      }}> Meeting vereinbaren</Link>
      <Link to="/faq" onClick={()=>{
        handleScrollToTop()
      }}>FAQ</Link>
     </div>
      </div>
      </div>
      <div className='flex md:hidden justify-between mt-10'>
      <div>
      <h1 className='font-bold text-xl lg:mt-0 mt-4 md:text-start text-start'>Company</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 items-start text-sm lg:text-base font-normal '>
     <Link className='cursor-pointer' to="/datenschutz">Datenschutz</Link>
      <Link className='cursor-pointer' to="/impressum" onClick={()=>{
        handleScrollToTop()
      }}>Impressum</Link>
      <Link to="/unsere-leads">Unsere Leads</Link>
     
     </div>
      </div>
      <div className='md:w-[20%] w-[50%]'>
      <h1 className='font-bold text-xl lg:mt-0 mt-4 md:text-start text-start'>Kontaktieren Sie uns</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start text-sm lg:text-base font-normal items-start'>
     <p className='md:text-start text-start'>Siemensstraße 21, 84030 <br /> Landshut</p>
<p>08171 97 46 23 23</p>
<p>info@esk-direktvertrieb.de</p>
     </div>
      </div>
      </div>
     <div className=' md:w-[30%] w-[200px] md:flex hidden flex-col items-start '>
      <div className="flex gap-3 items-center cursor-pointer" onClick={()=>{
           
          }}>
            {/* <img src={logo} alt="" className="lg:h-[60px] h-[50px]" /> */}
            Logo
          </div>
<p className='w-full font-light text-xs md:mt-14 mt-4 text-start '>Qualitätsleads für Photovoltaik – Ihr Schlüssel zum Erfolg. Willkommen bei ESK
 </p>
<div className='flex gap-3 justify-start items-start lg:mt-0 pt-6' >
       {/* <div className='p-1 rounded-full  text-white cursor-pointer text-2xl '>
       <FaFacebook/>
       </div> */}
       <a href='https://www.instagram.com/esk_leads?igsh=MWg1MXdkZGdtb2M4YQ%3D%3D&utm_source=qr' target='_blank' className='p-1 rounded-full  text-white cursor-pointer text-2xl'>
       <FaInstagram/>
       </a>
       {/* <div className='p-1 rounded-full  text-white cursor-pointer text-2xl'>
       <FaYoutube/>
       </div> */}
       {/* <div className='p-1 rounded-full  text-white cursor-pointer text-2xl'>
       <FaXTwitter/>
       </div> */}
      </div>
      </div>
      <div className='md:block hidden'>
      <h1 className='font-bold text-xl lg:mt-0 mt-4 md:text-start text-center'>Über Uns</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start  text-sm lg:text-base font-normal items-center'>
     <Link to="/" onClick={()=>{
       handleScrollToTop()
      }}>Startseite</Link>
      <Link to="/über-uns" onClick={()=>{
        handleScrollToTop()
      }}>Über Uns</Link>
      <Link to="/meeting-vereinbaren" onClick={()=>{
        handleScrollToTop()
      }}> Meeting vereinbaren</Link>
     
      <Link to="/faq" onClick={()=>{
        handleScrollToTop()
      }}>FAQ</Link>
     </div>
      </div>
     
      <div className='md:block -mt-6 hidden  '>
      <h1 className='font-bold text-xl lg:mt-0 mt-4 md:text-start text-center'>Unternehmen</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start text-sm lg:text-base font-normal items-center'>
     <Link className='cursor-pointer' to="/datenschutz" onClick={()=>{
        handleScrollToTop()
      }}>Datenschutz</Link>
      <Link className='cursor-pointer' to="/impressum" onClick={()=>{
        handleScrollToTop()
      }}>Impressum</Link>
      <Link to="/unsere-leads">Unsere Leads</Link>
      <p></p>
     </div>
      </div>
      <div className='md:w-[20%] w-[50%] md:block hidden xl:-mt-5 mt-0'>
      <h1 className='font-bold text-xl lg:mt-0 mt-4 md:text-start text-center'>Kontaktieren Sie uns</h1>
     <div className=' flex flex-col lg:mt-0  space-y-4 pt-5 md:items-start text-sm lg:text-base font-normal items-center'>
     <p className='md:text-start text-center'>Siemensstraße 21, 84030 <br /> Landshut</p>
<p>08171 97 46 23 23</p>
<p>info@esk-direktvertrieb.de
</p>
     </div>
        </div>
      </div>
      </div>
   );
}