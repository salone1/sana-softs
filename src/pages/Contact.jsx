import React from "react";
import { contactFormLink, contactFormEmbedLink, phoneNumber, whatsappLink, socialLinks } from "../config/siteConfig";

function Contact() {

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-white mb-4">Get in Touch</h1>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            Have a project in mind or want to discuss collaboration? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <h2 className="mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-blue-600 font-bold mb-2">Get in Touch</h3>
                  <p className="text-gray-700">Fill out the form or reach us through:</p>
                  <p className="text-gray-600 text-sm mt-2">We respond within 24 hours</p>
                </div>

                <div>
                  <h3 className="text-blue-600 font-bold mb-2">Phone & WhatsApp</h3>
                  <p className="text-gray-700">
                    <a href={whatsappLink} className="hover:underline" target="_blank" rel="noreferrer">
                      {phoneNumber}
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm mt-2">Monday - Friday, 9 AM - 6 PM</p>
                </div>

                <div>
                  <h3 className="text-blue-600 font-bold mb-4">Follow Us</h3>
                  <div className="space-y-3">
                    <a
                      href={socialLinks.telegram}
                      target="_blank"
                      rel="noreferrer"
                      className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded transition text-center"
                    >
                      🔗 Telegram
                    </a>
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="block bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 rounded transition text-center"
                    >
                      📸 Instagram
                    </a>
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      className="block bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded transition text-center"
                    >
                      🔧 GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="mb-8">Send us a Message</h2>
                <p className="text-gray-700 mb-6">Submit your request directly below. No extra clicks are needed — the Google Form is embedded right on the page.</p>

                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  <iframe
                    src={contactFormEmbedLink}
                    title="Google Contact Form"
                    className="w-full h-[720px]"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    scrolling="auto"
                  >
                    Loading…
                  </iframe>
                </div>

                <p className="text-gray-600 text-sm">
                  If the form does not display in your browser, open it directly:
                  <a href={contactFormLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline ml-1">
                    Open Google Form
                  </a>
                </p>
                <p className="text-gray-600 text-sm mt-4">💡 We also respond via WhatsApp and social channels if you need faster assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-blue-600 font-bold mb-2">How long does it take to develop an app?</h3>
              <p className="text-gray-700">Project timelines vary based on complexity. A simple app might take 4-6 weeks, while complex projects can take several months. We'll provide a detailed timeline after discussing your requirements.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-blue-600 font-bold mb-2">What platforms do you develop for?</h3>
              <p className="text-gray-700">
                We specialize in iOS, Android, web applications, and cross-platform solutions using React Native and Flutter.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-blue-600 font-bold mb-2">Do you provide support after launch?</h3>
              <p className="text-gray-700">
                Yes! We offer comprehensive post-launch support, including bug fixes, updates, maintenance, and feature enhancements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-blue-600 font-bold mb-2">What is your pricing model?</h3>
              <p className="text-gray-700">
                We offer flexible pricing models: fixed-price projects, hourly rates, and dedicated team engagement. Contact us for a custom quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
