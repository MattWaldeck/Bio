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
  const { hero, intro, services, conditions } = data;

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.imageUrl})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative container mx-auto px-6 py-40 lg:py-56 flex flex-col items-start max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {hero.ctaButtons.map((button, index) => (
              <Link
                key={index}
                to={button.to}
                className={`font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  index === 0
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                    : 'bg-brand-blue hover:bg-opacity-80 text-white'
                }`}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            {intro.title}
          </h2>
          <p className="text-lg text-gray-600">{intro.text}</p>
        </div>
      </section>

      {/* --- SERVICES PREVIEW --- */}
      <section className="py-20 lg:py-28 bg-brand-light">
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
              <Link
                key={category.title}
                to="/services"
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col text-center hover:bg-brand-blue transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-brand-teal uppercase tracking-wider group-hover:text-white">
                  {category.title}
                </h3>
                <p className="text-gray-500 mb-6 font-light group-hover:text-gray-200">
                  {category.subtitle}
                </p>
                <ul className="space-y-2 flex-grow text-left">
                  {category.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-brand-teal mr-3 flex-shrink-0 group-hover:text-white" />
                      <span className="text-gray-700 group-hover:text-white">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 font-bold text-brand-teal group-hover:text-white self-center">
                  Learn More &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONDITIONS WE TREAT --- */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
              {conditions.title}
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {conditions.items.map((item) => (
              <div
                key={item}
                className="bg-brand-light p-4 rounded-lg text-center"
              >
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
