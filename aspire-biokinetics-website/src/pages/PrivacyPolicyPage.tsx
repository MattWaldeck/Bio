import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-8">
          Privacy Policy
        </h1>
        <div className="prose lg:prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            At Aspire Biokinetics, we are committed to protecting your privacy
            and ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, and safeguard your data when
            you visit our website or use our services.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, contact details
                (email address, phone number), date of birth, medical history,
                and other relevant information necessary for providing our
                services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our website, including IP addresses, browser type, pages
                visited, and other diagnostic data.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide and improve our services.</li>
              <li>
                Communicate with you regarding appointments, services, and
                updates.
              </li>
              <li>Process payments and manage billing.</li>
              <li>Comply with legal obligations and protect our rights.</li>
              <li>Analyze website usage to enhance user experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              Sharing Your Information
            </h2>
            <p>
              We do not sell or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Service Providers:</strong> Trusted third-party service
                providers who assist us in operating our website, conducting our
                business, and delivering services to you, under strict
                confidentiality agreements.
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law or in
                response to valid requests by public authorities (e.g., a court
                or government agency).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of any inaccurate or incomplete data.</li>
              <li>
                Request deletion of your personal information, subject to
                certain legal obligations.
              </li>
              <li>
                Object to or restrict the processing of your personal
                information.
              </li>
              <li>
                Withdraw your consent at any time where we rely on your consent
                to process your data.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">Cookies</h2>
            <p>
              Our website uses cookies to enhance your Browse experience.
              Cookies are small files stored on your device that help us analyze
              web traffic and remember your preferences. You can choose to
              accept or decline cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date. We
              encourage you to review this policy periodically to stay informed
              about how we are protecting your information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
            </p>
            <div className="mt-2 not-prose">
              <p className="font-semibold">Aspire Biokinetics</p>
              <p>
                Bella Rosa Lifestyle Centre, Bella Rosa St, Rosendal, Cape Town,
                7550
              </p>
              <p>
                Phone:{' '}
                <a
                  href="tel:0828934028"
                  className="text-brand-teal hover:underline"
                >
                  082 893 4028
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:aspirebiokinetics@gmail.com"
                  className="text-brand-teal hover:underline"
                >
                  aspirebiokinetics@gmail.com
                </a>
              </p>
            </div>
            <p className="mt-4">
              Thank you for trusting Aspire Biokinetics with your health and
              personal information. We are committed to protecting your privacy
              and ensuring your data is handled carefully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
