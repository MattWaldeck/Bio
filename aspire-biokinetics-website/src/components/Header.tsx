import React, { useState } from 'react'; // <-- THIS LINE WAS FIXED
import { Link, NavLink } from 'react-router-dom';
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

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// Helper function to create URL-friendly IDs from titles
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ & /g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Testimonials', to: '/testimonials' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-gray-700 hover:text-brand-teal transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-brand-teal after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform ${
      isActive ? 'after:scale-x-100 text-brand-teal' : ''
    }`;

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-brand-blue tracking-wider"
        >
          ASPIRE <span className="font-light text-brand-teal">BIOKINETICS</span>
        </Link>

        {/* --- DESKTOP NAVIGATION UPDATED --- */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          {navigation.map((item) =>
            item.name === 'Services' ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <NavLink to={item.to} className={navLinkClasses}>
                  <span className="flex items-center">
                    {item.name}
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </span>
                </NavLink>

                {/* SMOOTH ANIMATION & STYLING APPLIED HERE */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ease-in-out ${
                    isServicesDropdownOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="w-max bg-white rounded-lg shadow-lg p-2 flex flex-col">
                    {data.services.categories.map((category) => (
                      <NavLink
                        key={category.title}
                        to={`/services#${slugify(category.title)}`}
                        className="text-gray-700 text-left hover:bg-gray-100 hover:text-brand-blue px-5 py-2.5 rounded-md transition-colors"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {category.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.name} to={item.to} className={navLinkClasses}>
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-brand-teal text-black font-bold py-2 px-5 rounded-lg hover:bg-brand-blue transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Book Now
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-blue focus:outline-none"
          >
            {isMobileMenuOpen ? (
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
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center space-y-2 py-4 border-t border-gray-200 bg-white">
          {navigation.map((item) =>
            item.name === 'Services' ? (
              <div key={item.name} className="w-full text-center">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-lg text-gray-700 hover:text-brand-teal transition-colors duration-300 py-2 flex items-center justify-center"
                >
                  {item.name}
                  <ChevronDownIcon
                    className={`w-5 h-5 ml-1 transition-transform ${
                      isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                    isMobileServicesOpen ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2 py-3">
                    {data.services.categories.map((category) => (
                      <NavLink
                        key={category.title}
                        to={`/services#${slugify(category.title)}`}
                        onClick={closeAllMenus}
                        className="text-gray-600 hover:text-brand-teal"
                      >
                        {category.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={closeAllMenus}
                className="text-lg text-gray-700 hover:text-brand-teal transition-colors duration-300 py-2"
              >
                {item.name}
              </NavLink>
            )
          )}
          <Link
            to="/contact"
            onClick={closeAllMenus}
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
