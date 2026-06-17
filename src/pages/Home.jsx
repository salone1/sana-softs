import React from "react";
import { Link } from "react-router-dom";
import apps from "../data/apps";
import { useSiteContent } from "../config/contentStore";

function Home() {
  const content = useSiteContent();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_35%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-24 md:py-32 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Trusted digital partner</p>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">{content.heroTitle}</h1>
            <p className="max-w-2xl text-lg text-blue-50 md:text-xl">{content.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/apps" className="rounded-full bg-white px-7 py-3 font-semibold text-blue-700 transition hover:bg-blue-50">
                {content.heroPrimaryCta}
              </Link>
              <Link to="/services" className="rounded-full border border-white/60 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
                {content.heroSecondaryCta}
              </Link>
            </div>
          </div>
          <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-3">
              <img src="/img/sanalogo.svg" alt="SANA Softs logo" className="h-16 w-16 rounded-2xl" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Fast launch</p>
                <h2 className="text-2xl font-semibold">Built for growth</h2>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm text-blue-50">
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">Responsive websites with clear conversion paths.</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">Mobile apps and cloud deployment support from idea to launch.</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">Easy-to-manage content updates through the built-in admin panel.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">About</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">{content.aboutTitle}</h2>
              <p className="mt-4 text-lg text-slate-600">{content.aboutBody}</p>
              <p className="mt-4 text-lg text-slate-600">From polished web products to scalable apps, the team builds every experience with clarity, accessibility, and reliability in mind.</p>
              <Link to="/about" className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Learn more about us
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Reliable delivery", text: "Clear processes, strong communication, and thoughtful testing." },
                { title: "Modern product design", text: "User-friendly interfaces that work beautifully on every screen." },
                { title: "SEO-first thinking", text: "Search-ready content and structure to improve discoverability." },
                { title: "Flexible support", text: "Ongoing enhancements and guidance after launch." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Featured apps</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Launch-ready software for real-world needs</h2>
            </div>
            <Link to="/apps" className="text-sm font-semibold text-blue-600">View all apps →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {apps.map((app) => (
              <div key={app.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl">{app.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{app.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{app.shortDesc}</p>
                <Link to={`/apps/${app.id}`} className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white">
                  View details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Ready when you are</p>
              <h2 className="mt-3 text-3xl font-bold">Need a stronger online presence or a polished product?</h2>
              <p className="mt-4 text-lg text-blue-50">We help businesses launch faster, rank better in search, and turn visitors into customers.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-blue-700">Contact us</Link>
              <Link to="/blog" className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white">Read the blog</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
