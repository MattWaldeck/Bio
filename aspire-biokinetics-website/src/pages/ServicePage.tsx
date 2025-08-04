import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ & /g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const ServicesPage: React.FC = () => {
  const { services } = data;
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [location.hash]);

  return (
    <div className="bg-white">
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6">
              {services.title}
            </h1>
          </div>
          <div className="mt-16 space-y-20">
            {services.categories.map((category) => (
              <div
                key={category.title}
                id={slugify(category.title)}
                className="bg-brand-light p-8 lg:p-12 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-bold text-brand-teal mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-500 mb-8 text-lg">
                  {category.subtitle}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
