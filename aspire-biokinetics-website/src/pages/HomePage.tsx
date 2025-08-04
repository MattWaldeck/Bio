import React from 'react';
import data from '../data/content.json';

// Type definitions for the component props
interface HeroProps {
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
  };
}

interface IntroProps {
  intro: {
    title: string;
    text: string;
    benefitsTitle: string;
    benefits: string[];
  };
}

// You can further break these down into their own component files inside src/components if you wish!
const Hero: React.FC<HeroProps> = ({ hero }) => (
  <section
    id="home"
    className="relative text-white text-center py-32 md:py-48 bg-cyan-800"
  >
    {' '}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{
        backgroundImage:
          "url('https://placehold.co/1920x1080/0f766e/ffffff?text=Aspire')",
      }}
    ></div>{' '}
    <div className="relative z-10 container mx-auto px-6">
      {' '}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        {hero.title}
      </h1>{' '}
      <p className="text-2xl md:text-4xl font-light mb-2">{hero.subtitle}</p>{' '}
      <p className="text-lg md:text-xl">{hero.tagline}</p>{' '}
    </div>{' '}
  </section>
);
const Intro: React.FC<IntroProps> = ({ intro }) => (
  <section id="intro" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-cyan-800 mb-4">
            {intro.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">{intro.text}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-cyan-800 mb-4">
            {intro.benefitsTitle}
          </h3>
          <ul className="space-y-3">
            {intro.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1"
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
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const HomePage: React.FC = () => {
  return (
    <>
      <Hero hero={data.hero} />
      <Intro intro={data.intro} />
      {/* You can add more sections here from your original file, like About, Services previews, etc. */}
    </>
  );
};

export default HomePage;
