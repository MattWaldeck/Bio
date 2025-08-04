import React from 'react';
import data from '../data/content.json';

const ContactPage: React.FC = () => {
  const { contact } = data;
  return (
    <div className="bg-brand-light">
      <section id="contact" className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600">
              We're here to help you on your journey to better health. Reach out
              to us today!
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="bg-white p-8 lg:p-12 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">
                Contact Details
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-lg">
                  <strong className="w-24 font-semibold text-gray-500">
                    Phone:
                  </strong>{' '}
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-brand-teal hover:underline"
                  >
                    {contact.phone}
                  </a>
                </p>
                <p className="flex items-center text-lg">
                  <strong className="w-24 font-semibold text-gray-500">
                    Email:
                  </strong>{' '}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-brand-teal hover:underline"
                  >
                    {contact.email}
                  </a>
                </p>
                <p className="flex items-start text-lg">
                  <strong className="w-24 font-semibold text-gray-500 flex-shrink-0">
                    Address:
                  </strong>{' '}
                  <span className="text-gray-700">{contact.address}</span>
                </p>
              </div>
              <div className="mt-8 border-t pt-8">
                <a
                  href={`mailto:${contact.email}`}
                  className="bg-brand-teal text-black font-bold py-3 px-6 rounded-lg hover:bg-brand-blue transition-all duration-300 inline-block mr-4 mb-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Email Us
                </a>
                <a
                  href={`https://wa.me/${contact.phone
                    .replace(/\s/g, '')
                    .replace('0', '27')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 inline-block shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-xl h-full min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.028670154865!2d18.61833081521198!3d-33.86944098064272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5a1e2f17e0e9%3A0x8c7c9c0f9a4b0f9c!2sBella%20Rosa%20Lifestyle%20Centre!5e0!3m2!1sen!2sza!4v1626875432109!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
