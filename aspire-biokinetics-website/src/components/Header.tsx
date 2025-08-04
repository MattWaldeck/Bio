import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Contact', to: '/contact' },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-gray-700 hover:text-brand-teal transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-brand-teal after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform ${
      isActive ? 'after:scale-x-100 text-brand-teal' : ''
    }`;

  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-brand-blue tracking-wider"
        >
          ASPIRE <span className="font-light text-brand-teal">BIOKINETICS</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.to} className={navLinkClasses}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-brand-teal text-white font-bold py-2 px-5 rounded-lg hover:bg-brand-blue transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Book Now
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-blue focus:outline-none"
          >
            {isOpen ? (
              <XIcon className="w-7 h-7" />
            ) : (
              <MenuIcon className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4 border-t border-gray-200 bg-white">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="text-lg text-gray-700 hover:text-brand-teal transition-colors duration-300"
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-blue transition-colors duration-300 w-auto text-center mt-4"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
