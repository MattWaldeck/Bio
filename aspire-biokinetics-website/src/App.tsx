import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicePage';
import TestimonialsPage from './pages/TestimonialsPage';
// --- IMPORT NEW BLOG PAGES ---
import BlogPage from './pages/BlogPage';
import SinglePostPage from './pages/SinglePostPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          {/* --- ADD BLOG ROUTES --- */}
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:postId" element={<SinglePostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
