import React from 'react';
import data from '../data/content.json';

const RatesPage: React.FC = () => {
  const { rates } = data;

  return (
    <div className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6">
            {rates.title}
          </h1>
          <p className="text-lg text-gray-600">{rates.subtitle}</p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-brand-light p-8 rounded-lg shadow-lg">
            <ul className="divide-y divide-gray-300">
              {rates.items.map((item, index) => (
                <li
                  key={index}
                  className="py-4 flex justify-between items-center"
                >
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <span className="text-brand-teal font-bold">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesPage;
