import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route index element={<HomePage />} />
        <Route path="AboutPage" element={<AboutPage />} />
        <Route path="ContactPage" element={<ContactPage />} />
        <Route path="ServicePage" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
