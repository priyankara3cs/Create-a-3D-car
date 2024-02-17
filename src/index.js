import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import CarApp from './CarApp';
import NavBar from './components/navbar';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact'

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CarApp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  </Router>
);
