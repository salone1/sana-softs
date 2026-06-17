import React from "react";
import { contactFormLink, contactFormEmbedLink } from "../config/siteConfig";
import { useSiteContent } from "../config/contentStore";

function Contact() {
  const content = useSiteContent();

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-white">Get in Touch</h1>
          <p className="mx-auto max-w-3xl text-lg text-blue-50">
            Need a new product, a better website, or reliable support after launch? We are ready to help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-[0.95fr_1.4fr]">
            <div>
              <h2 className="mb-8">Contact information</h2>
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="mb-2 font-semibold text-blue-600">Email</h3>
                  <a href={`mailto:${content.contactEmail}`} className="text-slate-700">{content.contactEmail}</a>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="mb-2 font-semibold text-blue-600">Phone & WhatsApp</h3>
                  <a href={content.whatsappLink} target="_blank" rel="noreferrer" className="text-slate-700">{content.phoneNumber}</a>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="mb-2 font-semibold text-blue-600">Location</h3>
                  <p className="text-slate-700">{content.address}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="mb-2 font-semibold text-blue-600">Follow us</h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a href={content.socialLinks.telegram} target="_blank" rel="noreferrer" className="rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white">Telegram</a>
                    <a href={content.socialLinks.instagram} target="_blank" rel="noreferrer" className="rounded-full bg-pink-600 px-3 py-2 text-sm font-semibold text-white">Instagram</a>
                    <a href={content.socialLinks.github} target="_blank" rel="noreferrer" className="rounded-full bg-slate-800 px-3 py-2 text-sm font-semibold text-white">GitHub</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="mb-4">Send a message</h2>
              <p className="mb-6 text-slate-600">Use the embedded form below or open the Google Form directly if you prefer.</p>
              <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <iframe src={contactFormEmbedLink} title="Google Contact Form" className="h-[720px] w-full" frameBorder="0" scrolling="auto">
                  Loading…
                </iframe>
              </div>
              <p className="text-sm text-slate-600">
                If the form does not display, open it directly:
                <a href={contactFormLink} target="_blank" rel="noreferrer" className="ml-1 text-blue-600">Open Google Form</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
