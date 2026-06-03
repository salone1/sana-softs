import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Custom iOS and Android applications tailored to your business needs.",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development (React Native, Flutter)",
        "App store optimization",
        "Ongoing support and updates",
      ],
      price: "Starting from 5,000",
    },
    {
      id: 2,
      icon: "🌐",
      title: "Web Solutions",
      description:
        "Modern, responsive websites and web applications for your business.",
      features: [
        "Responsive web design",
        "E-commerce solutions",
        "Progressive web apps",
        "SEO optimization",
      ],
      price: "Starting from 3,000",
    },
    {
      id: 3,
      icon: "☁️",
      title: "Cloud Deployment",
      description:
        "Scalable cloud infrastructure and deployment services.",
      features: [
        "AWS, Google Cloud, Azure setup",
        "CI/CD pipeline configuration",
        "Database management",
        "Performance optimization",
      ],
      price: "Starting from 2,000",
    },
    {
      id: 4,
      icon: "🤝",
      title: "Enterprise Consulting",
      description:
        "Strategic technology consulting for digital transformation.",
      features: [
        "Technology strategy",
        "System architecture design",
        "Team training",
        "Process optimization",
      ],
      price: "Custom pricing",
    },
    {
      id: 5,
      icon: "🔒",
      title: "Security & Compliance",
      description:
        "Ensure your applications are secure and compliant with standards.",
      features: [
        "Security audits",
        "Data encryption",
        "GDPR compliance",
        "Penetration testing",
      ],
      price: "Starting from 3,000",
    },
    {
      id: 6,
      icon: "🚀",
      title: "API Development",
      description:
        "Build robust, scalable APIs for your applications.",
      features: [
        "RESTful API design",
        "GraphQL APIs",
        "API documentation",
        "Rate limiting & security",
      ],
      price: "Starting from 2,500",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-white mb-4">Our Services</h1>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            Comprehensive software solutions tailored to meet your unique business requirements
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <p className="text-blue-600 font-bold mb-3">{service.price}</p>
                  <Link to="/contact" className="btn btn-primary inline-block w-full text-center">
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Our Development Process</h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: "1", title: "Discovery", desc: "Understanding your needs" },
              { num: "2", title: "Planning", desc: "Strategic planning" },
              { num: "3", title: "Development", desc: "Coding & implementation" },
              { num: "4", title: "Testing", desc: "QA & testing" },
              { num: "5", title: "Launch", desc: "Deployment & support" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.num}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Why Choose SANA Softs?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="font-bold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  We understand the importance of timely delivery without compromising on quality.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="font-bold mb-2">Custom Solutions</h3>
                <p className="text-gray-600">
                  Every project is unique. We tailor solutions to fit your specific requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">🔒</div>
              <div>
                <h3 className="font-bold mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">
                  Enterprise-grade security and reliability in every solution we build.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">👥</div>
              <div>
                <h3 className="font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Experienced developers, designers, and consultants working for your success.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">💬</div>
              <div>
                <h3 className="font-bold mb-2">Excellent Support</h3>
                <p className="text-gray-600">
                  24/7 support and ongoing maintenance to ensure your systems run smoothly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">📈</div>
              <div>
                <h3 className="font-bold mb-2">Scalability</h3>
                <p className="text-gray-600">
                  Solutions built to grow with your business, from startup to enterprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how SANA Softs can help you achieve your digital goals.
          </p>
          <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
            Start Your Project Today
          </Link>
        </div>
      </section>
    </>
  );
}

export default Services;
