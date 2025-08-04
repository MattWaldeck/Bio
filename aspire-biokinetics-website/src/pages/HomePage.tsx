// src/pages/HomePage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/content.json';

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const HomePage: React.FC = () => {
  const { hero, intro, services } = data;

  return (
    <div className="bg-white">
      {/* (Hero and Intro sections remain the same) */}
      {/* ... */}

      {/* --- START OF UPDATED SECTION --- */}

      {/* Services Preview Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
              How We Can Help
            </h2>
            <p className="text-lg text-gray-600">
              We offer a wide range of services to help you achieve your health
              and performance goals.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.categories.map((category) => (
              // 1. The entire card is now a Link component
              <Link
                key={category.title}
                to="/services"
                // 2. All styling and hover effects are on the Link itself
                className="bg-brand-light p-8 rounded-lg shadow-lg flex flex-col text-center hover:bg-brand-blue transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-brand-teal uppercase tracking-wider group-hover:text-white">
                  {category.title}
                </h3>
                {/* 3. Text colors on hover are updated to be more visible */}
                <p className="text-gray-500 mb-6 font-light group-hover:text-gray-200">
                  {category.subtitle}
                </p>
                <ul className="space-y-2 flex-grow text-left">
                  {category.items.slice(0, 3).map(
                    (
                      item // Show first 3 items
                    ) => (
                      <li key={item} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-brand-teal mr-3 flex-shrink-0 group-hover:text-white" />
                        <span className="text-gray-700 group-hover:text-white">
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>
                {/* 4. The "Learn More" link is now a styled div, as the parent is the link */}
                <div className="mt-6 font-bold text-brand-teal group-hover:text-white self-center">
                  Learn More &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- END OF UPDATED SECTION --- */}
    </div>
  );
};

export default HomePage;
