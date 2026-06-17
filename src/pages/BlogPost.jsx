import React from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogPostBySlug, useSiteContent } from "../config/contentStore";

function BlogPost() {
  const { slug } = useParams();
  const content = useSiteContent();
  const post = getBlogPostBySlug(slug) || content.blogPosts[0];

  if (!post) {
    return (
      <section className="min-h-screen bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Blog</p>
          <h1 className="mt-3 text-4xl font-bold">Article not found</h1>
          <p className="mt-4 text-lg text-slate-600">The post you requested could not be found. Return to the blog home to browse other articles.</p>
          <Link to="/blog" className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white">Return to blog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <Link to="/blog" className="text-sm font-semibold text-blue-600">← Back to blog</Link>
        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold text-slate-900">{post.title}</h1>
          <p className="mt-4 text-xl text-slate-600">{post.excerpt}</p>
          <div className="mt-8 rounded-2xl bg-slate-900 p-8 text-center text-6xl">{post.image}</div>
          <article className="prose prose-lg mt-8 max-w-none text-slate-700">
            <p>{post.content}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
