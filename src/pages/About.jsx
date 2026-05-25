import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-white mb-4">About SANA Softs</h1>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            Pioneering innovative software solutions since 2020
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                SANA Softs was founded by <strong>Salis Amin Lone</strong> with a vision to transform businesses through innovative software solutions. What started as a passion project has evolved into a trusted software development company serving clients worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We believe in the power of technology to solve real-world problems. Our team is dedicated to creating applications and solutions that make a difference in users' lives and drive business growth.
              </p>
              <p className="text-lg text-gray-700">
                Today, SANA Softs continues to push boundaries, embrace new technologies, and deliver exceptional results for every client we work with.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">2020</h3>
                  <p className="text-gray-700">SANA Softs founded with a mission to innovate</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">2021</h3>
                  <p className="text-gray-700">Launched first mobile app - JK Calendar</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">2022</h3>
                  <p className="text-gray-700">Expanded to web development services</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">2023-2026</h3>
                  <p className="text-gray-700">Continuous growth and innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Our Vision & Mission</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Vision</h3>
              <p className="text-gray-700">
                To be the leading software company known for innovation, reliability, and exceptional user experiences.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Mission</h3>
              <p className="text-gray-700">
                Deliver high-quality software solutions that empower businesses and enhance lives through technology.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Values</h3>
              <p className="text-gray-700">
                Innovation, Reliability, User-Centric Design, and Continuous Improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-7xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold mb-2">Salis Amin Lone</h3>
              <p className="text-blue-600 font-semibold mb-4">Founder & Lead Developer</p>
              <p className="text-gray-600">
                Passionate software developer with expertise in mobile and web development. Visionary leader driving innovation at SANA Softs.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-7xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-bold mb-2">Development Team</h3>
              <p className="text-blue-600 font-semibold mb-4">Expert Developers</p>
              <p className="text-gray-600">
                Skilled full-stack developers specializing in mobile, web, and cloud technologies.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-7xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Support Team</h3>
              <p className="text-blue-600 font-semibold mb-4">Client Success</p>
              <p className="text-gray-600">
                Dedicated support professionals ensuring client satisfaction and project success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Core Values That Drive Us</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🚀</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We embrace cutting-edge technologies and continuously explore new solutions to stay ahead of the curve.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">🔒</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-gray-700">
                  Quality and dependability are at the core of everything we build. Your trust is our priority.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">👥</div>
              <div>
                <h3 className="text-xl font-bold mb-2">User-Centric Design</h3>
                <p className="text-gray-700">
                  We put users first, designing solutions that are intuitive, accessible, and delightful to use.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">📈</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
                <p className="text-gray-700">
                  We're committed to learning, growing, and improving our processes and solutions every day.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">🤝</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-gray-700">
                  We believe in working together with clients as partners to achieve shared goals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">💼</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professionalism</h3>
                <p className="text-gray-700">
                  Integrity, transparency, and professional excellence in all our endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-8">Want to Work With Us?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to build something amazing together.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn bg-blue-600 text-white hover:bg-blue-700">
              Start a Project
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

export default About;
