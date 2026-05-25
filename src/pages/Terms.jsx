import React from "react";

function Terms() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white mb-4">Terms & Conditions</h1>
          <p className="text-gray-100">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
              <p className="text-gray-700">
                Welcome to SANA Softs. These Terms & Conditions ("Terms") govern your access to and use of the SANA Softs website, mobile applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you may not use our Services.
              </p>
            </div>

            {/* Use License */}
            <div>
              <h2 className="text-2xl font-bold mb-4">License and Use</h2>
              <p className="text-gray-700 mb-4">
                SANA Softs grants you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your personal, non-commercial purposes. This license does not include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Modifying or copying our materials</li>
                <li>Using our materials for any commercial purpose or for any public display</li>
                <li>Attempting to reverse engineer, decompile, or disassemble any software contained on our Services</li>
                <li>Removing any copyright or other proprietary notations from our materials</li>
                <li>Transferring our materials to another person or "mirroring" our materials on any other server</li>
                <li>Using our Services in any way that infringes upon any rights of others</li>
              </ul>
            </div>

            {/* Disclaimer of Warranties */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-700">
                Our Services are provided "AS IS" and "AS AVAILABLE" without any representations or warranties, express or implied. SANA Softs specifically disclaims all implied warranties of title, merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that our Services will be uninterrupted, secure, or error-free.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-gray-700">
                In no event shall SANA Softs be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our Services, even if we have been advised of the possibility of such damages. Our total liability to you for any claim arising from these Terms or your use of our Services shall not exceed $100 or the amount you paid us in the past 12 months, whichever is greater.
              </p>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                By using our Services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not use our Services for any illegal or unauthorized purpose</li>
                <li>Not transmit viruses, malware, or any malicious code</li>
                <li>Not engage in any activity that disrupts or interferes with our Services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700">
                All content, materials, software, code, and other information contained on or made available through our Services, including but not limited to text, graphics, logos, images, videos, and audio, are owned by SANA Softs or our licensors and are protected by copyright and other intellectual property laws. Unauthorized reproduction or use of any materials is prohibited.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <p className="text-gray-700">
                Our Services may contain links to third-party websites and services. We are not responsible for the content, accuracy, or availability of external websites. Your use of third-party websites is governed by their respective terms and conditions. We encourage you to review the terms and conditions and privacy policies of any third-party services before using them.
              </p>
            </div>

            {/* Modifications to Terms */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Modifications to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our Services following the posting of revised Terms means that you accept and agree to the changes. It is your responsibility to review these Terms periodically for updates.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p className="text-gray-700">
                We may terminate or suspend your access to our Services at any time for any reason, including if we believe you have violated these Terms. Upon termination, your right to use our Services will immediately cease. All provisions of these Terms which by their nature should survive termination, shall survive.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms and Conditions are governed by and construed in accordance with the laws of your country, and you irrevocably submit to the exclusive jurisdiction of the courts located in that country.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions or concerns about these Terms & Conditions, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700"><strong>Email:</strong> legal@sanasofts.com</p>
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

export default Terms;
