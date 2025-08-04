import React from 'react';
import data from '../data/content.json';

const ContactPage: React.FC = () => {
  const { contact } = data;
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-cyan-800 text-center mb-12">
          Get In Touch
        </h2>
        <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                Contact Details
              </h3>
              <p className="text-gray-600 mb-2 text-lg">
                <strong>Phone:</strong>{' '}
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-cyan-700"
                >
                  {contact.phone}
                </a>
              </p>
              <p className="text-gray-600 mb-2 text-lg">
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-cyan-700"
                >
                  {contact.email}
                </a>
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                <strong>Address:</strong> {contact.address}
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${contact.email}`}
                  className="bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-800 transition-colors duration-300 inline-block mr-4 mb-4"
                >
                  Email Us
                </a>
                <a
                  href={`https://wa.me/${contact.phone
                    .replace(/\s/g, '')
                    .replace('0', '27')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 inline-block"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                  Our Location
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.332341999285!2d18.61868487635924!3d-33.88085317322044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc507e1e694509%3A0x29c73b446c590669!2sBella%20Rosa%20Lifestyle%20Centre!5e0!3m2!1sen!2sza!4v1722858971034!5m2!1sen!2sza"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
