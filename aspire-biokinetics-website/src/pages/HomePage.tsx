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
  const { hero, intro, about, services } = data;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white bg-brand-blue">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://placehold.co/1920x1080/e2e8f0/334155?text=Movement')",
          }}
        ></div>
        <div className="relative container mx-auto px-6 text-center py-32 md:py-48">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 tracking-tight">
            {hero.subtitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {hero.tagline}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-white text-brand-blue font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
              {intro.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {intro.text}
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intro.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start">
                  <CheckCircleIcon className="w-7 h-7 text-brand-teal mr-4 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <div
                key={category.title}
                className="bg-brand-light p-8 rounded-lg shadow-lg flex flex-col text-center hover:bg-brand-blue hover:text-white transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-brand-teal uppercase tracking-wider group-hover:text-white">
                  {category.title}
                </h3>
                <p className="text-gray-500 mb-6 font-light group-hover:text-gray-300">
                  {category.subtitle}
                </p>
                <ul className="space-y-2 flex-grow text-left">
                  {category.items.slice(0, 3).map(
                    (
                      item // Show first 3 items
                    ) => (
                      <li key={item} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-brand-teal mr-3 flex-shrink-0 group-hover:text-white" />
                        <span className="text-gray-700 group-hover:text-gray-200">
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>
                <Link
                  to="/services"
                  className="mt-6 font-bold text-brand-teal group-hover:text-white self-center"
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
