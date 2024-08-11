//Latest
import { useState } from "react";
const LoginSignup = () => {
   const [state, setState] = useState("LogIn");
   const [formData, setFormData] = useState({
      username: "",
      password: "",
      email: "",
      image: null,
   });

   const changeHandler = (e) => {
      const { name, value, files } = e.target;
      if (name === "image") {
         setFormData({ ...formData, [name]: files[0] });
      } else {
         setFormData({ ...formData, [name]: value });
      }
   };

   const login = async () => {
      console.log("LogIn Function Executed", formData);

      const { password, email } = formData;
      const loginData = { password, email };

      try {
         const response = await fetch(
            "https://fb41-202-51-68-213.ngrok-free.app/login",
            {
               method: "POST",
               headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(loginData),
            }
         );

         const responseData = await response.json();
         console.log("Login Response:", responseData);

         if (responseData) {
            localStorage.setItem("auth-token", responseData.token);
            window.location.replace("/");
         } else {
            alert(responseData.errors || "Login failed");
         }
      } catch (error) {
         console.error("Login Error:", error);
         alert("An error occurred during login. Please try again.");
      }
   };

   const signup = async () => {
      console.log("SignUp Function Executed", formData);

      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.username);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("image", formData.image);

      try {
         const response = await fetch(
            "https://fb41-202-51-68-213.ngrok-free.app/register",
            {
               method: "POST",
               body: formDataToSend,
            }
         );

         const responseData = await response.json();
         console.log("SignUp Response Data:", responseData);

         if (responseData) {
            localStorage.setItem("auth-token", responseData.token);
            window.location.replace("/loginsign");
         } else {
            console.error(
               "SignUp Failed - Error Message:",
               responseData.errors
            );
            alert(responseData.errors || "Signup failed");
         }
      } catch (error) {
         console.error("Signup Error:", error);
         alert("An error occurred during signup. Please try again.");
      }
   };

   return (
      <div className="w-full h-auto pt-14 pb-8 mb-[25vw]">
         <div className="w-11/12 max-w-lg h-auto bg-white mx-auto p-5">
            <h1 className="my-5 text-2xl">{state}</h1>
            <div className="flex flex-col gap-5 mt-5">
               {state === "SignUp" && (
                  <input
                     name="username"
                     value={formData.username}
                     onChange={changeHandler}
                     type="text"
                     placeholder="Your Name"
                     className="h-14 px-4 text-base  border-b-2 border-black focus:border-orange-500 outline-none p-2"
                  />
               )}
               <input
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  type="email"
                  placeholder="Email Address"
                  className="h-14 px-4 text-base  border-b-2 border-black focus:border-orange-500 outline-none p-2"
               />
               <input
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                  type="password"
                  placeholder="Password"
                  className="h-14 px-4 text-base  border-b-2 border-black focus:border-orange-500 outline-none p-2"
               />
               {state === "SignUp" && (
                  <label className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
                     Choose a file
                     <input
                        name="image"
                        onChange={changeHandler}
                        type="file"
                        accept="image/*"
                        className=" hidden"
                     />
                  </label>
               )}
            </div>
            <button
               onClick={() => {
                  state === "LogIn" ? login() : signup();
               }}
               className="w-full h-14 text-white bg-orange-600 rounded-sm mt-5 border-none text-lg font-medium cursor-pointer  hover:bg-orange-500 "
            >
               Continue
            </button>
            <div className="flex items-center mt-4 gap-2 text-gray-600 text-base font-medium">
               <input type="checkbox" />
               <p>
                  By Continuing, I agree to the terms of use & privacy policy.
               </p>
            </div>
            {state === "Sign Up" ? (
               <p className="mt-4 text-gray-600 text-base font-medium">
                  Already have an account?
                  <span
                     onClick={() => {
                        setState("LogIn");
                     }}
                     className="text-orange-600 font-semibold cursor-pointer"
                  >
                     {" "}
                     Login here
                  </span>
               </p>
            ) : (
               <p className="mt-4 text-gray-600 text-base font-medium">
                  Create an account?
                  <span
                     onClick={() => {
                        setState("SignUp");
                     }}
                     className="text-red-500 font-semibold cursor-pointer"
                  >
                     {" "}
                     Click here
                  </span>
               </p>
            )}
         </div>
      </div>
   );
};

export default LoginSignup;
