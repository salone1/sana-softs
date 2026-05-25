import React from "react";
import { Link } from "react-router-dom";

function Apps() {
  const apps = [
    {
      id: "calendar",
      name: "JK Calendar App",
      icon: "📅",
      description: "A powerful calendar application for scheduling and event management.",
      shortDesc: "Organize your schedule with ease. Set reminders, manage events, and boost your productivity.",
      category: "Productivity",
    },
    {
      id: "notes",
      name: "Smart Notes App",
      icon: "📝",
      description: "Intelligent notes app for capturing and organizing your thoughts.",
      shortDesc: "Take notes instantly. Search, sync, and organize your ideas across all devices.",
      category: "Productivity",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-white mb-4">Our Apps</h1>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            Discover our collection of innovative, user-friendly applications designed to simplify your daily tasks and boost productivity.
          </p>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <div key={app.id} className="card hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{app.icon}</div>
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm font-semibold mb-3">
                  {app.category}
                </div>
                <h3 className="text-2xl font-bold mb-2">{app.name}</h3>
                <p className="text-gray-600 mb-4">{app.shortDesc}</p>
                <p className="text-gray-500 text-sm mb-6">{app.description}</p>
                <Link to={`/apps/${app.id}`} className="btn btn-primary inline-block">
                  View Details & Download
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3>Gaming App</h3>
              <p className="text-gray-600">Engaging mobile games built with the latest technology.</p>
              <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm font-semibold mt-4">
                Coming Soon
              </span>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3>Finance Tracker</h3>
              <p className="text-gray-600">Smart expense tracking and financial management tool.</p>
              <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm font-semibold mt-4">
                Coming Soon
              </span>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3>Health Companion</h3>
              <p className="text-gray-600">Monitor your health with an all-in-one companion app.</p>
              <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm font-semibold mt-4">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-8">Download Our Apps</h2>
          <p className="text-lg text-gray-700 mb-8">
            All our apps are available on Google Play Store and as APK files for direct download. Choose what works best for you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              📱 Google Play Store
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              📥 GitHub Releases
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apps;
  );
}

export default Apps;
