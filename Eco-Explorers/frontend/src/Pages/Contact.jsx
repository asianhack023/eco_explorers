//Latest
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "../Components/Navbar";
import hackvideo from "../assets/hack.mp4";
import OurFooter from "../Components/Footer";

export default function ContactInfo() {
   const {
      register,
      handleSubmit,
      control,
      reset,
      formState: { errors },
   } = useForm();
   const [result, setResult] = React.useState("");
   const onSubmit = async (data) => {
      setResult("Sending....");
      try {
         const response = await axios.post(
            "http://localhost:5001/messages",
            data
         );
         console.log("Message posted successfully:", response.data);
         toast.success("Form Submitted Successfully");

         reset(); // Clear the form fields after successful submission
      } catch (error) {
         console.error("Error posting message:", error);
      }
    
   };
   return (
      <>
       <div className="absolute top-0 left-0 w-full z-10 ">
          <Navbar />
        </div>
        {/* <video
          src={hackvideo}
          autoPlay
          muted
          loop
          className="h-[50vh] w-full object-cover"
        /> */}
         <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png" alt="photo"
         className="h-[50vh] w-full object-cover"
         />
      <div className="flex lg:flex-row flex-col justify-between xl:px-32 md:px-10 px-3 bg-[#F4F3F3] p-20 font-outfit gap-3">
         <div className="bg-white lg:w-[55vw] w-[100%] md:p-10 p-3 lg:mt-0 mt-10">
            <p className="font-bold text-3xl text-primary">
               Your <span className="text-orange-600"> Information</span>
            </p>
            <p className="text-[#6C6B6B] text-start pt-3">
               Message for any inquiry and suggestion......
            </p>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
               <div className="flex gap-[15px]">
                  <div className="w-[290px] mt-5">
                     <div className="mt-[8px] relative">
                        <input
                           type="text"
                           placeholder="First Name"
                           name="Surname"
                           className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-orange-600 focus:bg-white caret-blue-600 ${
                              errors.Vorname
                                 ? "border-red-500"
                                 : "border-[#808080]"
                           }`}
                           {...register("firstName", { required: true })}
                        />
                        {errors.Vorname && (
                           <span className="text-red-500">
                              first name is required
                           </span>
                        )}
                     </div>
                  </div>
                  <div className="w-[290px] mt-5">
                     <div className="mt-[8px] relative">
                        <input
                           type="text"
                           name="Nachname"
                           placeholder="Last Name  "
                           className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:orange-600 focus:bg-white caret-blue-600 ${
                              errors.nachname
                                 ? "border-red-500"
                                 : "border-[#808080]"
                           }`}
                           {...register("lastName", { required: true })}
                        />
                        {errors.nachname && (
                           <span className="text-red-500">
                              last name is required
                           </span>
                        )}
                     </div>
                  </div>
               </div>
               <div className="flex gap-[20px]">
                  <div className="w-[290px] mt-5">
                     <div className="mt-[8px] relative">
                        <input
                           type="text"
                           name="Firmenadresse"
                           placeholder="Address"
                           className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-orange-600 focus:bg-white caret-blue-600 ${
                              errors.firmenadresse
                                 ? "border-red-500"
                                 : "border-[#808080]"
                           }`}
                           {...register("address", { required: true })}
                        />
                        {errors.address && (
                           <span className="text-red-500">
                              Address is required
                           </span>
                        )}
                     </div>
                  </div>
                  <div className="w-[290px] mt-5">
                     <div className="mt-[8px] relative">
                        <input
                           type="text"
                           name="Telefonnummer"
                           placeholder="Phone Number                       "
                           className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:orange-blue-600 focus:bg-white caret-blue-600 ${
                              errors.number
                                 ? "border-red-500"
                                 : "border-[#808080]"
                           }`}
                           {...register("telefonnummer", { required: true })}
                        />
                        {errors.telefonnummer && (
                           <span className="text-red-500">
                              Phone no is required
                           </span>
                        )}
                     </div>
                  </div>
               </div>
               <div className="xl:w-[600px] w-[100%] mt-5">
                  <div className="mt-[8px] relative">
                     <input
                        type="email"
                        name="E-Mail-Adresse"
                        placeholder="E-Mail Address"
                        className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-orange-600 focus:bg-white caret-blue-600 ${
                           errors.Email_Adresse
                              ? "border-red-500"
                              : "border-[#808080]"
                        }`}
                        {...register("emailAddress", { required: true })}
                     />
                     {errors.emailAddress && (
                        <span className="text-red-500">
                           E-Mail-Adresse is required
                        </span>
                     )}
                  </div>
               </div>
               <div className="xl:w-[600px] w-[100%] mt-5">
                  <div className="mt-[8px] relative">
                     <textarea
                        type="text"
                        name="Message"
                        placeholder="Message"
                        className={`block w-full p-4  text-black placeholder-[#808080] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-orange-600 focus:bg-white caret-blue-600 ${
                           errors.Nachricht
                              ? "border-red-500"
                              : "border-[#808080]"
                        }`}
                        {...register("message", { required: true })}
                     />
                     {errors.message && (
                        <span className="text-red-500">
                           message is required
                        </span>
                     )}
                  </div>
               </div>
               <button className="  bg-orange-600 mt-10 w-[180px] h-[50px] flex items-center justify-center rounded-lg font-outfit">
                  <a className="block  text-sm leading-5 px-4 font-semibold  text-white">
                     Submit
                  </a>
               </button>
            </form>
         </div>
         <div className="flex flex-col gap-4">
            <div className="h-[90px] md:w-[350px] w-[90vw] p-6 bg-white flex items-center gap-4">
               <div className="h-14 w-14 rounded-full  bg-orange-600  flex items-center justify-center">
                  <FaPhoneAlt className=" text-white" />
               </div>
               <div>
                  <p className="font-bold text-xl">Phone Number</p>
                  <p className="font-normal text-sm text-[#6C6B6B]">
                     9803303524
                  </p>
               </div>
            </div>
            <div className="h-[90px] md:w-[350px] w-[90vw] p-6 bg-white flex items-center gap-4">
               <div className="h-14 w-14 rounded-full  bg-orange-600  flex items-center justify-center">
                  <CiMail className=" text-white  " />
               </div>
               <div>
                  <p className="font-bold text-xl">E-Mail Address</p>
                  <p className="font-normal text-sm text-[#6C6B6B]">
                     neptour@gmail.com
                  </p>
               </div>
            </div>
            <div className="h-[90px] md:w-[350px] w-[90vw] p-6 bg-white flex items-center gap-4 rounded-b-2xl">
               <div className="h-14 w-14 rounded-full bg-orange-600  flex items-center justify-center">
                  <FaLocationArrow className="text-white  " />
               </div>
               <div className="rounded-xl">
                  <p className="font-bold text-xl">Location</p>
                  <p className="font-normal text-sm text-[#6C6B6B]">
                     Gongabu,Kathmandu
                  </p>
               </div>
            </div>
         </div>
      </div>
      <OurFooter/>
      </>
   );
}
