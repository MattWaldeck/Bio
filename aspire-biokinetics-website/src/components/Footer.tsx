import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/content.json';

// --- ICONS (You can replace these with a library like react-icons) ---

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 4.98 3.66 9.13 8.44 9.9v-7.02H7.9V12.06h2.54V9.84c0-2.5 1.5-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.88h-2.33v7.02c4.78-.77 8.44-4.92 8.44-9.9C22 6.53 17.5 2.04 12 2.04z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2c2.72 0 3.05.01 4.12.06 1.06.05 1.79.22 2.42.47.65.25 1.13.59 1.62 1.08.49.49.83.97 1.08 1.62.25.63.42 1.36.47 2.42.05 1.07.06 1.4.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.42a4.89 4.89 0 01-1.08 1.62c-.49.49-.97.83-1.62 1.08-1.28.5-4.4.49-8.24 0-.65-.25-1.13-.59-1.62-1.08a4.89 4.89 0 01-1.08-1.62c-.25-.63-.42-1.36-.47-2.42C2.01 15.05 2 14.72 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.42.25-.65.59-1.13 1.08-1.62.49-.49.97-.83 1.62-1.08.63-.25 1.36-.42 2.42-.47C8.95 2.01 9.28 2 12 2zm0 1.8c-2.69 0-3.01.01-4.07.06-1.03.05-1.6.21-2.06.39-.5.2-.87.46-1.25.83a2.89 2.89 0 00-.83 1.25c-.18.46-.34 1.03-.39 2.06C3.81 8.99 3.8 9.31 3.8 12s.01 3.01.06 4.07c.05 1.03.21 1.6.39 2.06.2.5.46.87.83 1.25.38.38.75.63 1.25.83.46.18 1.03.34 2.06.39 1.06.05 1.38.06 4.07.06s3.01-.01 4.07-.06c1.03-.05 1.6-.21 2.06-.39.5-.2.87-.46 1.25-.83.38-.38.63-.75.83-1.25.18-.46.34-1.03.39-2.06.05-1.06.06-1.38.06-4.07s-.01-3.01-.06-4.07c-.05-1.03-.21-1.6-.39-2.06a2.89 2.89 0 00-.83-1.25c-.38-.38-.75-.63-1.25-.83-.46-.18-1.03-.34-2.06-.39C15.01 3.81 14.69 3.8 12 3.8zm0 3.35c-2.42 0-4.38 1.96-4.38 4.38s1.96 4.38 4.38 4.38 4.38-1.96 4.38-4.38-1.96-4.38-4.38-4.38zm0 7.16c-1.54 0-2.78-1.24-2.78-2.78s1.24-2.78 2.78-2.78 2.78 1.24 2.78 2.78-1.24 2.78-2.78 2.78zm4.97-8.21a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
  </svg>
);

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const Footer: React.FC = () => {
  const { footer, contact, socialMedia } = data;

  const socialIcons = {
    Facebook: <FacebookIcon className="w-5 h-5" />,
    Instagram: <InstagramIcon className="w-5 h-5" />,
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">ABOUT US</h3>
            <p className="text-sm leading-relaxed">{footer.aboutUs}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              IMPORTANT LINKS
            </h3>
            <ul className="space-y-2">
              {footer.importantLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              CONNECT WITH US
            </h3>
            <ul className="space-y-3">
              {socialMedia.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:text-white transition-colors"
                  >
                    {socialIcons[platform.name as keyof typeof socialIcons]}
                    <span className="ml-3">{platform.name}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-700 mt-4">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center text-sm hover:text-white transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span className="ml-3">{contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center text-sm hover:text-white transition-colors"
                >
                  <EmailIcon className="w-5 h-5" />
                  <span className="ml-3">{contact.email}</span>
                </a>
              </li>
              <li>
                <p className="flex items-start text-sm">
                  <LocationIcon className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="ml-3">{contact.address}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto px-6 text-center text-xs">
          <p>
            © {new Date().getFullYear()} Aspire Biokinetics. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
