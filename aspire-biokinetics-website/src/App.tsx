import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
// Import other pages here as you create them
// import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import TestimonialsPage from './pages/TestimonialsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* Add routes for your other pages here */}
          {/* <Route path="about" element={<AboutPage />} /> */}
          {/* <Route path="services" element={<ServicesPage />} /> */}
          {/* <Route path="testimonials" element={<TestimonialsPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
