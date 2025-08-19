import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import Footer from "./layouts/Footer";
import International from "./pages/InterNational";
import Latest from "./pages/Latest";
import National from "./pages/National";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/national" element={<National />} />
        <Route path="/international" element={<International />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
