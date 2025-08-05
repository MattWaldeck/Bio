import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicePage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import SinglePostPage from './pages/SinglePostPage';
import RatesPage from './pages/RatesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ScrollToTop from './components/ScrollToTop'; // <-- IMPORT THE NEW COMPONENT

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* <-- ADD THE COMPONENT HERE */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:postId" element={<SinglePostPage />} />
          <Route path="rates" element={<RatesPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
