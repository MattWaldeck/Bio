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

// --- START: ICONS FOR CONDITIONS (Waiting for your SVG code) ---
const iconProps = {
  className: 'w-10 h-10 text-brand-teal',
  'aria-hidden': true,
};

const LowBackPainIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect
      x="7"
      y="10"
      width="10"
      height="4"
      rx="2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="7"
      y1="12"
      x2="17"
      y2="12"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const NeckPainIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="7" r="2" strokeWidth="2" />
    <line
      x1="12"
      y1="9"
      x2="12"
      y2="17"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const ShoulderIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="9" cy="12" r="2" strokeWidth="2" />
    <circle cx="15" cy="12" r="2" strokeWidth="2" />
    <line
      x1="11"
      y1="12"
      x2="13"
      y2="12"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const HipKneeIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 9l-1 1-3-3-1 1v6l1 1 3-3 1 1V9z"
    />
    <circle cx="15.5" cy="8.5" r="1.5" strokeWidth="2" />
  </svg>
);
const AnkleFootIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 17V8M10 15l2 2 2-2"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 8h-4v3h4V8z"
    />
  </svg>
);
const ArthritisIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v8m-3-4h6m-5-3h4m-4 6h4"
    />
  </svg>
);
const OsteoporosisIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6v12M9 8h6M9 12h6M9 16h6"
    />
  </svg>
);
const SportsInjuryIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v8m-3-2l3 3 3-3"
    />
  </svg>
);

const conditionIcons = {
  'Low Back Pain': <LowBackPainIcon />,
  'Neck Pain': <NeckPainIcon />,
  'Shoulder Injuries': <ShoulderIcon />,
  'Hip & Knee Pain': <HipKneeIcon />,
  'Ankle & Foot Pain': <AnkleFootIcon />,
  Arthritis: <ArthritisIcon />,
  Osteoporosis: <OsteoporosisIcon />,
  'Sports Injuries': <SportsInjuryIcon />,
};
// --- END: ICONS FOR CONDITIONS ---

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
      <section className="py-20 lg:py-28 scroll-mt-20" id="intro">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            {intro.title}
          </h2>
          <p className="text-lg text-gray-600">{intro.text}</p>
        </div>
      </section>

      {/* --- SERVICES PREVIEW (UPDATED) --- */}
      <section
        className="py-20 lg:py-28 bg-brand-light scroll-mt-20"
        id="services"
      >
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
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col text-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-brand-teal uppercase tracking-wider">
                  {category.title}
                </h3>
                <p className="text-gray-500 mb-6 font-light">
                  {category.subtitle}
                </p>
                <ul className="space-y-2 flex-grow text-left">
                  {category.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-brand-teal mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 font-bold text-brand-teal self-center">
                  Learn More &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONDITIONS WE TREAT (UPDATED)--- */}
      <section className="py-20 lg:py-28 scroll-mt-20" id="conditions">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
              {conditions.title}
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {conditions.items.map((item) => (
              <div
                key={item}
                className="bg-brand-light p-6 rounded-lg flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {conditionIcons[item as keyof typeof conditionIcons]}
                <p className="font-medium text-gray-800 mt-3">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
