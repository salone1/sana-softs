import React from "react";

function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-100">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700">
                SANA Softs ("we", "us", "our") operates the SANA Softs website and mobile applications (collectively, the "Services"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Services and the choices you have associated with that data.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information in the following ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Information you provide directly:</strong> When you contact us, sign up for our services, or fill out forms, we collect personal information such as your name, email address, phone number, and message content.</li>
                <li><strong>Automatically collected information:</strong> When you use our Services, we may automatically collect information such as your IP address, browser type, pages visited, and the time and duration of your visits.</li>
                <li><strong>Cookie information:</strong> We use cookies and similar tracking technologies to understand how you use our Services and to improve your experience.</li>
                <li><strong>Device information:</strong> We may collect information about your device, including device type, operating system, and unique device identifiers.</li>
              </ul>
            </div>

            {/* Use of Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Providing and maintaining our Services</li>
                <li>Notifying you about changes to our Services</li>
                <li>Allowing you to participate in interactive features of our Services</li>
                <li>Providing customer support and responding to your inquiries</li>
                <li>Gathering analytics data to improve our Services</li>
                <li>Monitoring the usage of our Services</li>
                <li>Detecting, preventing, and addressing technical and security issues</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-700">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-gray-700">
                We will retain your personal information for as long as necessary to provide our Services, unless a longer retention period is required or permitted by law. When you request deletion of your data, we will remove it within 30 days, except where we are required to keep it for compliance purposes.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our Services may contain links to third-party websites and services that are not operated by us. This Privacy Policy does not apply to third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services before providing your personal information.
              </p>
            </div>

            {/* GDPR Compliance */}
            <div>
              <h2 className="text-2xl font-bold mb-4">GDPR Compliance</h2>
              <p className="text-gray-700 mb-4">
                If you are a resident of the European Union, United Kingdom, or Lichtenstein, you have the following rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>The right to be informed about how your data is processed</li>
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to erase your data</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-700">
                You have the right to request access to, correction of, or deletion of your personal information. You can also opt-out of our marketing communications at any time. To exercise these rights, please contact us at <strong>privacy@sanasofts.com</strong>.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our Services after any modifications constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700"><strong>Email:</strong> privacy@sanasofts.com</p>
                <p className="text-gray-700"><strong>Address:</strong> SANA Softs, Your City, Your Country</p>
                <p className="text-gray-700"><strong>Phone:</strong> +1 (XXX) XXX-XXXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
