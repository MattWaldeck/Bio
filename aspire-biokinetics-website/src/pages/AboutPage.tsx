import React from 'react';
import data from '../data/content.json';

const AboutPage: React.FC = () => {
  const { about } = data;

  return (
    <div className="bg-brand-light">
      <section id="about" className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-12">
              {about.title}
            </h1>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {about.team.map((member) => (
              <div
                key={member.name}
                className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold text-brand-teal mb-4">
                  {member.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
