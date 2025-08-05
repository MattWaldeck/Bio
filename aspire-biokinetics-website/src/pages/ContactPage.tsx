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
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex flex-col sm:flex-row sm:items-center text-lg">
                  <strong className="font-semibold text-gray-500 flex-shrink-0 sm:w-24 mb-1 sm:mb-0">
                    Phone:
                  </strong>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-brand-teal hover:underline break-words"
                  >
                    {contact.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:items-center text-lg">
                  <strong className="font-semibold text-gray-500 flex-shrink-0 sm:w-24 mb-1 sm:mb-0">
                    Email:
                  </strong>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-brand-teal hover:underline break-words"
                  >
                    {contact.email}
                  </a>
                </div>

                {/* Address */}
                <div className="flex flex-col sm:flex-row sm:items-start text-lg">
                  <strong className="font-semibold text-gray-500 flex-shrink-0 sm:w-24 mb-1 sm:mb-0">
                    Address:
                  </strong>
                  <span className="text-gray-700">{contact.address}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="bg-brand-teal text-black font-bold py-3 px-6 rounded-lg hover:bg-brand-blue transition-all duration-300 w-full sm:w-auto text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Email Us
                </a>
                <a
                  href={`https://wa.me/${contact.phone
                    .replace(/\s/g, '')
                    .replace('0', '27')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 w-full sm:w-auto text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-xl h-full min-h-[450px]">
              <iframe
                src="https://maps.google.com/maps?q=Bella%20Rosa%20Lifestyle%20Centre,%20Bella%20Rosa%20St,%20Rosendal,%20Cape%20Town,%207550&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
