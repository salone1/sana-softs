import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "../config/contentStore";

function Blog() {
  const content = useSiteContent();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(
    () => [{ id: "all", name: "All Posts" }, ...Array.from(new Set(content.blogPosts.map((post) => post.category))).map((category) => ({ id: category, name: category.charAt(0).toUpperCase() + category.slice(1) }))],
    [content.blogPosts]
  );

  const filteredArticles =
    selectedCategory === "all"
      ? content.blogPosts
      : content.blogPosts.filter((article) => article.category === selectedCategory);

  const featuredPost = content.blogPosts.find((post) => post.featured) || content.blogPosts[0];

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">SANA Softs blog</p>
          <h1 className="mt-3 text-white">Insights, tutorials, and updates for modern digital growth</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-50">
            Publish new posts from the admin panel and keep them visible to readers searching for the topics that matter to them.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-4 py-2 font-semibold transition ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-blue-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          {filteredArticles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
              No posts are available in this category yet.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article) => (
                <article key={article.id} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-5xl">{article.image}</div>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{article.title}</h3>
                  <p className="mt-3 flex-grow text-sm text-slate-600">{article.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                    <span>{article.date}</span>
                    <Link to={`/blog/${article.slug}`} className="font-semibold text-blue-600">
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-lg md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.7fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Featured article</p>
                <h2 className="mt-3 text-3xl font-bold">{featuredPost?.title}</h2>
                <p className="mt-4 text-lg text-blue-50">{featuredPost?.excerpt}</p>
                <Link to={`/blog/${featuredPost?.slug}`} className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-blue-700">
                  Read full article
                </Link>
              </div>
              <div className="text-center text-8xl">{featuredPost?.image}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
