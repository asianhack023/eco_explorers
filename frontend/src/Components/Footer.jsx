export default function Footer() {
  //  const handleScrollToTop = () => {
  //     window.scrollTo({
  //        top: 0,
  //        behavior: "smooth",
  //     });
  //  };
   return (
      <footer className="bg-orange-600 p-4">


               <div className="flex items-center justify-evenly">
                  <div>
                     <h2 className="mb-6 font-semibold uppercase  text-white">
                        Contact Us
                     </h2>
                     <ul className="text-white font-medium">
                        <li className="mb-4">
                           <a
                              href="#"
                              className="hover:underline"
                           >
                              Address:Gongabu
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="hover:underline"
                           >
                              Phone:9803303524
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                        Follow us
                     </h2>
                     <ul className="text-white font-medium">
                        <li className="mb-4">
                           <a
                              href="#"
                              className="hover:underline "
                           >
                              Facebook
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="hover:underline"
                           >
                              Instagram
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                        Legal
                     </h2>
                     <ul className="text-white font-medium">
                        <li className="mb-4">
                           <a href="#" className="hover:underline">
                              Privacy Policy
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:underline">
                              Terms &amp; Conditions
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="flex items-center justify-center">
               <span className="text-sm text-center text-white sm:text-center md:text-center">
                  © 2024{" "}
                  <a href="#" className="hover:underline">
                     NepTour
                  </a>
                  . All Rights Reserved.
               </span>
            </div>
      </footer>
   );
}