import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
// import Attractions from "./Pages/Attractions.jsx";
// import Gallery from "./Pages/Galary.jsx";
// import About from "./Pages/About.jsx";
// import Contact from "./Pages/Contact.jsx";
// import Community from "./Pages/Community.jsx";
// import RegisterGuide from "./Pages/RegisterGuide.jsx";
// import Guides from "./Pages/Guides.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/attractions" element={<Attractions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/register-guide" element={<RegisterGuide />} />
        <Route path="/guides" element={<Guides />} /> */}
      </Routes>
    </BrowserRouter>
    
  );
};


export default App;
