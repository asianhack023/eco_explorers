import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Attractions from "./Pages/Attraction.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Contact from "./Pages/Contact.jsx";
import Community from "./Pages/Community.jsx";
import Guides from "./Pages/Guide.jsx";
import DetailAttraction from "./Pages/DetailAttraction.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import RegisterGuide from "./Pages/RegisterGuide.jsx";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/detail" element={<DetailAttraction />} />
            <Route path="/contact" element={<Contact />} />
         <Route path="/community" element={<Community />} />
         <Route path="/guide" element={<RegisterGuide />} />
         
            <Route path="/loginsign" element={<LoginSignup />} />
            <Route path="/guides" element={<Guides />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
