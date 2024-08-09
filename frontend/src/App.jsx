import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home.jsx";  // Ensure you import all components
import Attractions from "./components/Attractions.jsx";
import Gallery from "./components/Galary.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Community from "./components/Community.jsx";
import RegisterGuide from "./components/RegisterGuide.jsx";
import Guides from "./components/Guides.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/register-guide" element={<RegisterGuide />} />
        <Route path="/guides" element={<Guides />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
