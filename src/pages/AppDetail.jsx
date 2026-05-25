import React from "react";
import { useParams, Link } from "react-router-dom";

function AppDetail() {
  const { id } = useParams();

  const appData = {
    calendar: {
      name: "JK Calendar App",
      icon: "📅",
      version: "2.0.1",
      rating: "4.8",
      downloads: "50K+",
      description: "A comprehensive calendar application that helps you organize your schedule, manage events, and boost productivity.",
      features: [
        "Create and manage events with ease",
        "Set reminders for important tasks",
        "Share calendars with friends and colleagues",
        "Sync across multiple devices",
        "Beautiful, intuitive user interface",
        "Offline support",
        "Dark/Light mode",
        "Search and filter events",
      ],
      screenshots: [
        "📱 Clean, modern interface",
        "📊 Event statistics and analytics",
        "🔔 Smart notifications",
        "🌍 Global timezone support",
      ],
      useCases: [
        "Personal schedule management",
        "Team collaboration and event planning",
        "Project timeline tracking",
        "Meeting scheduling",
        "Birthday and anniversary reminders",
      ],
      changelog: [
        "v2.0.1 - Bug fixes and performance improvements",
        "v2.0.0 - Major redesign with dark mode support",
        "v1.9.5 - Added event sharing feature",
        "v1.9.0 - Offline support implementation",
      ],
      downloadLink: "https://github.com/releases/download/calendar-app-2.0.1/calendar.apk",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.sanasofts.calendar",
    },
    notes: {
      name: "Smart Notes App",
      icon: "📝",
      version: "1.5.3",
      rating: "4.7",
      downloads: "30K+",
      description: "An intelligent notes app that helps you capture, organize, and access your thoughts from anywhere.",
      features: [
        "Create rich text notes",
        "Voice-to-text recording",
        "Smart search and tagging",
        "Notes synchronization",
        "Cloud backup",
        "Category organization",
        "Pin important notes",
        "Export notes to PDF/Email",
      ],
      screenshots: [
        "📝 Distraction-free writing",
        "🏷️ Smart categorization",
        "🔐 Secure encryption",
        "☁️ Cloud synchronization",
      ],
      useCases: [
        "Personal journaling",
        "Meeting notes",
        "Study material compilation",
        "Creative brainstorming",
        "To-do lists and reminders",
      ],
      changelog: [
        "v1.5.3 - Enhanced search functionality",
        "v1.5.0 - Added voice-to-text feature",
        "v1.4.0 - Cloud backup integration",
        "v1.3.0 - Note sharing capability",
      ],
      downloadLink: "https://github.com/releases/download/notes-app-1.5.3/notes.apk",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.sanasofts.notes",
    },
  };

  const app = appData[id];

  if (!app) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="mb-4">App Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, the app you're looking for doesn't exist.</p>
        <Link to="/apps" className="btn btn-primary">
          Back to Apps
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* App Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-6xl mb-4">{app.icon}</div>
              <h1 className="text-white mb-4">{app.name}</h1>
              <div className="flex gap-6 text-lg">
                <span>⭐ {app.rating} Rating</span>
                <span>📥 {app.downloads} Downloads</span>
                <span>📦 v{app.version}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 flex-wrap">
            <a href={app.downloadLink} target="_blank" rel="noreferrer" className="btn bg-blue-600 text-white hover:bg-blue-700 font-bold">
              📥 Download APK
            </a>
            <a href={app.playStoreLink} target="_blank" rel="noreferrer" className="btn bg-green-600 text-white hover:bg-green-700 font-bold">
              🏪 Google Play Store
            </a>
            <Link to="/apps" className="btn btn-secondary">
              ← Back to Apps
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Description */}
          <div className="mb-16">
            <h2 className="mb-6">About This App</h2>
            <p className="text-lg text-gray-700">{app.description}</p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {app.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <span className="text-2xl">✨</span>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots/Highlights */}
          <div className="mb-16">
            <h2 className="mb-6">Screenshots & Highlights</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {app.screenshots.map((screenshot, index) => (
                <div key={index} className="card text-center">
                  <p className="text-4xl mb-3">📱</p>
                  <p className="text-gray-700 font-semibold">{screenshot}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="mb-6">Perfect For</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <ul className="space-y-3">
                {app.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="text-blue-600 text-xl">→</span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Changelog */}
          <div className="mb-16">
            <h2 className="mb-6">Changelog</h2>
            <div className="space-y-4">
              {app.changelog.map((change, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                  <p className="text-gray-700">{change}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Download CTA */}
          <div className="text-center bg-blue-50 p-12 rounded-lg">
            <h3 className="mb-4">Ready to Download?</h3>
            <p className="text-gray-700 mb-8">Get {app.name} now and enhance your productivity!</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={app.downloadLink} target="_blank" rel="noreferrer" className="btn bg-blue-600 text-white hover:bg-blue-700 font-bold">
                📥 Download APK
              </a>
              <a href={app.playStoreLink} target="_blank" rel="noreferrer" className="btn bg-green-600 text-white hover:bg-green-700 font-bold">
                🏪 Get on Play Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppDetail;
