import React from 'react';
import data from '../data/content.json';

const TestimonialsPage: React.FC = () => {
  const { testimonials } = data;

  return (
    <div className="bg-brand-light">
      <section id="testimonials" className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-12">
              {testimonials.title}
            </h1>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-xl flex flex-col"
              >
                <p className="text-gray-600 italic mb-6 flex-grow">
                  "{review.quote}"
                </p>
                <p className="font-bold text-brand-teal self-end">
                  - {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
