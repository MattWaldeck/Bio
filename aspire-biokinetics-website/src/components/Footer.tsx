import React from 'react';
import data from '../data/content.json';

const Footer: React.FC = () => {
  const { contact } = data;
  return (
    <footer className="bg-cyan-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>
          © {new Date().getFullYear()} Aspire Biokinetics. All Rights Reserved.
        </p>
        <p className="text-cyan-300 text-sm mt-2">{contact.address}</p>
      </div>
    </footer>
  );
};

export default Footer;
