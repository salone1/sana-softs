import React, { useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articles = [
    {
      id: 1,
      title: "The Future of Mobile App Development in 2026",
      category: "trends",
      date: "May 20, 2026",
      image: "📱",
      excerpt:
        "Explore the latest trends and technologies shaping mobile app development in 2026. From AI integration to enhanced security features.",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Getting Started with React and Tailwind CSS",
      category: "tutorial",
      date: "May 15, 2026",
      image: "⚛️",
      excerpt:
        "A comprehensive guide to building modern web applications using React and Tailwind CSS. Perfect for beginners and intermediate developers.",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "Why Cloud Deployment Matters for Your Business",
      category: "business",
      date: "May 10, 2026",
      image: "☁️",
      excerpt:
        "Learn how cloud deployment can scale your business, improve reliability, and reduce infrastructure costs. Explore AWS, Google Cloud, and Azure.",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Building Secure Applications: Best Practices",
      category: "security",
      date: "May 5, 2026",
      image: "🔒",
      excerpt:
        "Essential security practices for developers. Learn about authentication, encryption, and how to protect your applications from common vulnerabilities.",
      readTime: "10 min read",
    },
    {
      id: 5,
      title: "SANA Softs Launches New Mobile App Suite",
      category: "company",
      date: "April 28, 2026",
      image: "🚀",
      excerpt:
        "We're excited to announce the launch of our new mobile app suite designed to boost productivity. Download now from Google Play Store.",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Web Development Trends to Watch in 2026",
      category: "trends",
      date: "April 20, 2026",
      image: "🌐",
      excerpt:
        "From serverless architecture to edge computing, discover the web development trends that are reshaping the industry.",
      readTime: "9 min read",
    },
  ];

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "trends", name: "Trends" },
    { id: "tutorial", name: "Tutorials" },
    { id: "business", name: "Business" },
    { id: "security", name: "Security" },
    { id: "company", name: "Company" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-white mb-4">SANA Softs Blog</h1>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            Insights, tutorials, and updates on software development, technology trends, and industry news
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div key={article.id} className="card hover:shadow-xl transition-all flex flex-col">
                  <div className="text-6xl mb-4">{article.image}</div>

                  <div className="flex gap-2 mb-3">
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded text-xs font-semibold">
                      {categories.find((c) => c.id === article.category)?.name}
                    </span>
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 flex-grow">{article.title}</h3>

                  <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.date}</span>
                    <a href="#" className="text-blue-600 hover:underline font-semibold">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-700 text-lg mb-8">
            Get the latest articles, tips, and updates delivered to your inbox weekly.
          </p>

          <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>

          <p className="text-gray-600 text-sm mt-4">We respect your privacy. No spam, unsubscribe anytime.</p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Featured Articles</h2>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg overflow-hidden shadow-lg">
            <div className="md:grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">
                  The Future of Mobile App Development
                </h3>
                <p className="text-gray-100 mb-6">
                  Discover the cutting-edge technologies and trends shaping mobile app development in 2026 and beyond.
                </p>
                <a href="#" className="inline-block bg-white text-blue-600 px-6 py-2 rounded font-bold hover:bg-gray-100 w-fit">
                  Read Full Article
                </a>
              </div>
              <div className="text-8xl flex items-center justify-center p-8">📱</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
