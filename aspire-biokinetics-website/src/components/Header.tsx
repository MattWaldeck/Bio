import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/content.json';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { contact } = data;
  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Testimonials', to: '/testimonials' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-800 tracking-wider"
        >
          ASPIRE <span className="font-light">BIOKINETICS</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-gray-600 hover:text-cyan-700 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-800 transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-cyan-700 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-cyan-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-cyan-800 transition-colors duration-300 w-auto text-center mt-2"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
