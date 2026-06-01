import React, { useState } from "react";
import { contactEmail, phoneNumber, whatsappLink, socialLinks } from "../config/siteConfig";

function Contact() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { subject, message, name, email } = formData;
    const mailBody = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
    setFormData({ subject: "", message: "", name: "", email: "" });
  };

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
                  <h3 className="text-blue-600 font-bold mb-2">Email</h3>
                  <p className="text-gray-700">
                    <a href={`mailto:${contactEmail}`} className="hover:underline">
                      {contactEmail}
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm mt-2">Response time: Within 24 hours</p>
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-semibold mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-semibold mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your project..."
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">Send Message</button>
                </form>

                <p className="text-gray-600 text-sm mt-4">💡 Tip: For faster response, please include relevant details about your project or inquiry.</p>
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
