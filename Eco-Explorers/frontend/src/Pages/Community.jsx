import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AiOutlinePaperClip } from "react-icons/ai";
import OurFooter from "../Components/Footer";

const Community = () => {
   const [message, setMessage] = useState(""); // State to store the message text
   const [file, setFile] = useState(null); // State to store the selected file

   // Handle message input change
   const handleInputChange = (e) => {
      setMessage(e.target.value);
   };

   // Handle file input change
   const handleFileChange = (e) => {
      setFile(e.target.files[0]);
   };

   // Handle sending the message and file
   const handleSend = () => {
      if (message || file) {
         console.log("Message:", message);
         if (file) {
            console.log("File:", file.name);
            // Here you can implement the logic to send the file, such as using FormData to send it via an API
         }

         // Clear the message input and file after sending
         setMessage("");
         setFile(null);
      }
   };

   return (
      <div className="bg-orange-600">
         <Navbar />
         <div className="flex flex-col h-[87vh]">
            {/* Header Section */}
            <header className="flex justify-between items-center p-4 bg-white shadow">
               <div className="flex items-center gap-4">
                  <img
                     src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                     alt="James"
                     className="rounded-full w-10 h-10 object-cover"
                  />
                  <div>
                     <h1 className="text-2xl font-semibold">James</h1>
                     <p className="text-sm text-gray-500">Active now</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <button className="text-gray-500 hover:text-gray-700">
                     {/* Icon code */}
                  </button>
                  <img
                     src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                     alt="Your Profile"
                     className="rounded-full w-10 h-10 object-cover"
                  />
               </div>
            </header>

            {/* Chat Section */}
            <div className="flex flex-1 flex-col justify-between bg-gray-100 p-6">
               <div className="space-y-4">
                  {/* Incoming Message */}
                  <div className="flex items-center space-x-4">
                     <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                        alt="James"
                        className="rounded-full w-10 h-10"
                     />

                     <div className="bg-gray-200 p-4 rounded-xl max-w-xs">
                        <p>
                           I want to go to Heatauda from Kathmandu,how can i
                           arrive there?
                        </p>
                     </div>
                  </div>

                  {/* Outgoing Message */}
                  <div className="flex items-center justify-end space-x-4">
                     <div className="bg-orange-600 text-white p-4 rounded-xl max-w-xs">
                        <p>
                           For reaching to Hetauda,you can take a direct bus
                           from Kathmandu and can arrive there sir!
                        </p>
                     </div>

                     <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                        alt="Your Profile"
                        className="rounded-full w-10 h-10 object-cover"
                     />
                  </div>
               </div>

               {/* Input Section */}
               <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-full mt-4">
                  <input
                     type="text"
                     placeholder="Chat with Globle Here...."
                     value={message}
                     onChange={handleInputChange}
                     className="flex-1 p-2 rounded-full focus:outline-none focus:border focus:border-orange-500"
                  />
                  {/* File Attachment Icon */}
                  <label className="cursor-pointer text-gray-500 hover:text-gray-700">
                     <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                     />
                     <AiOutlinePaperClip className="h-6 w-6" />
                  </label>
                  <button
                     className="bg-orange-500 text-white py-2 px-4 rounded-full"
                     onClick={handleSend}
                  >
                     Send
                  </button>
               </div>
            </div>
         </div>
         <OurFooter />
      </div>
   );
};

export default Community;
