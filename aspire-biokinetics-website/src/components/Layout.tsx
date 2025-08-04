import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Outlet />{' '}
        {/* This is where the content of each page will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
