import React from "react";
import { Link } from "react-router-dom";

function Careers() {
  const positions = [
    {
      id: 1,
      title: "Senior Mobile Developer",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced mobile developer with 5+ years of experience in iOS and Android development.",
    },
    {
      id: 2,
      title: "Full-Stack Web Developer",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to build scalable web applications using modern technologies and frameworks.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful and intuitive user interfaces for our applications. Experience with Figma and design systems required.",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Help us build and maintain our cloud infrastructure. Experience with Docker, Kubernetes, and AWS preferred.",
    },
    {
      id: 5,
      title: "QA Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Ensure quality of our applications through comprehensive testing. Automation experience is a plus.",
    },
    {
      id: 6,
      title: "Technical Writer",
      location: "Remote",
      type: "Part-time",
      description: "Document our projects, create tutorials, and help our users understand our products.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-white mb-4">Join Our Team</h1>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            Build innovative software solutions with a talented and passionate team
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Why Work at SANA Softs?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3>Innovation First</h3>
              <p className="text-gray-600">
                Work on cutting-edge technologies and innovative projects that make a real impact.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3>Competitive Compensation</h3>
              <p className="text-gray-600">
                Competitive salaries, benefits, and growth opportunities based on performance.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3>Remote-First</h3>
              <p className="text-gray-600">
                Work from anywhere in the world with flexible working hours and a supportive culture.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3>Learning & Development</h3>
              <p className="text-gray-600">
                Continuous learning opportunities, training budgets, and skill development programs.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3>Great Team</h3>
              <p className="text-gray-600">
                Collaborate with talented professionals passionate about creating excellent software.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">⚖️</div>
              <h3>Work-Life Balance</h3>
              <p className="text-gray-600">
                We believe in maintaining a healthy balance between work and personal life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Open Positions</h2>

          <div className="space-y-4">
            {positions.map((position) => (
              <div key={position.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>📍 {position.location}</span>
                      <span>⏰ {position.type}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{position.description}</p>
                <a
                  href="mailto:careers@sanasofts.com?subject=Application for - " + encodeURIComponent(position.title)}
                  className="btn btn-primary inline-block"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Don't see a position that fits?</h3>
            <p className="text-gray-700 mb-6">
              We're always looking for talented individuals. Feel free to reach out with your profile and experience!
            </p>
            <a
              href="mailto:careers@sanasofts.com?subject=Inquiry about careers at SANA Softs"
              className="btn btn-primary"
            >
              Send us your CV
            </a>
          </div>
        </div>
      </section>

      {/* Interview Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Our Hiring Process</h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: "1", title: "Application", desc: "Submit your resume & portfolio" },
              { num: "2", title: "Screening", desc: "Initial phone/video screening" },
              { num: "3", title: "Technical", desc: "Technical assessment & interview" },
              { num: "4", title: "Meeting", desc: "Meet with team members" },
              { num: "5", title: "Offer", desc: "Receive offer & start date" },
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

      {/* Employee Benefits */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Benefits & Perks</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "🏥 Comprehensive health insurance",
              "🎓 Professional development budget",
              "💻 Latest equipment and tools",
              "🌴 Generous paid time off",
              "🎯 Performance-based bonuses",
              "🚀 Career advancement opportunities",
              "🤝 Mentorship programs",
              "🎉 Team events and celebrations",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-8">Ready to Make an Impact?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join SANA Softs and be part of a team creating innovative software solutions.
          </p>
          <a
            href="mailto:careers@sanasofts.com"
            className="btn bg-blue-600 text-white hover:bg-blue-700"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}

export default Careers;
