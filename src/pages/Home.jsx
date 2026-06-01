import React from "react";
import { Link } from "react-router-dom";
import { companyName, portfolioLink } from "../config/siteConfig";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-white mb-4">Welcome to {companyName}</h1>
          <p className="text-gray-100 text-xl mb-8 max-w-3xl mx-auto">
            Innovative Software Solutions for Modern Businesses
          </p>
          <p className="text-gray-100 text-lg mb-8">
            We create high-quality mobile apps, web solutions, and digital products that transform businesses and empower users worldwide.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/apps" className="cta-button inline-block mt-0 bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Explore Our Apps
            </Link>
            <Link to="/services" className="cta-button inline-block mt-0 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">About SANA Softs</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                <strong>SANA Softs</strong> is a professional software company dedicated to building reliable, scalable, and user-friendly applications for businesses and individuals worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Founded by <strong>Salis Amin Lone Nadiya Rafiq</strong>, our mission is to bridge the gap between innovation and practicality, delivering software solutions that make a real difference.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We specialize in mobile app development, web solutions, cloud deployment, and enterprise consulting. Our team is committed to excellence, reliability, and continuous innovation.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-blue-600 font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-700">To become a leading software company known for innovation, reliability, and exceptional user experiences.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-blue-600 font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-700">Deliver high-quality software solutions that empower businesses and enhance lives through technology.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-blue-600 font-bold mb-2">Our Values</h3>
                  <p className="text-gray-700">Innovation, Reliability, User-Centric Design, and Continuous Improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Featured Apps</h2>
          <div className="card-grid">
            <div className="card">
              <div className="text-4xl mb-4">📅</div>
              <h3>JK Hijri Calendar App</h3>
              <p className="text-gray-600">
                A powerful calendar application designed for productivity. Organize your schedule, set reminders, and manage events effortlessly.
              </p>
              <Link to="/apps/calendar" className="btn btn-primary inline-block">
                View Details
              </Link>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">📝</div>
              <h3>Smart Notes App</h3>
              <p className="text-gray-600">
                Capture your thoughts instantly. Our intelligent notes app helps you organize, search, and sync your notes across devices.
              </p>
              <Link to="/apps/notes" className="btn btn-primary inline-block">
                View Details
              </Link>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🚀</div>
              <h3>More Apps Coming Soon</h3>
              <p className="text-gray-600">
                We are continuously developing innovative applications to meet your evolving needs. Stay tuned for exciting releases!
              </p>
              <Link to="/apps" className="btn btn-secondary inline-block">
                All Apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3>Mobile Apps</h3>
              <p className="text-gray-600 text-sm">Innovative apps for iOS & Android platforms.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌐</div>
              <h3>Web Solutions</h3>
              <p className="text-gray-600 text-sm">Modern, responsive websites and web applications.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">☁️</div>
              <h3>Cloud Services</h3>
              <p className="text-gray-600 text-sm">Deployment, hosting, and cloud infrastructure.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3>Consulting</h3>
              <p className="text-gray-600 text-sm">Expert advice for your digital transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center mb-12">Meet the Founder</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <div className="text-7xl mb-4">👨‍💼</div>
              <h3>Salis Amin Lone</h3>
              <p className="text-blue-600 font-semibold mb-4">Founder & Lead Developer</p>
            </div>
            <p className="text-center text-gray-700 mb-4">
              Salis Amin Lone is a passionate software developer and entrepreneur with a vision to create innovative digital solutions. With expertise in mobile and web development, cloud technologies, and enterprise consulting, Salis founded SANA Softs to help businesses and individuals succeed in the digital era.
            </p>
            <p className="text-center text-gray-700 mb-4">
              His commitment to excellence, user-centric design, and continuous innovation has made SANA Softs a trusted name in the software industry.
            </p>
            <div className="text-center mt-6">
              <a href={portfolioLink} target="_blank" rel="noreferrer" className="btn btn-outline">
                Visit Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-8">Ready to Get Started?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's collaborate to bring your ideas to life. Contact us today to discuss your project.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn bg-blue-600 text-white hover:bg-blue-700">
              Contact Us
            </Link>
            <Link to="/careers" className="btn bg-gray-700 text-white hover:bg-gray-600">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
