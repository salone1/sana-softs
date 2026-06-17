import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../config/siteConfig";
import { useSiteContent } from "../config/contentStore";

function Footer() {
  const year = new Date().getFullYear();
  const content = useSiteContent();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <img src="/img/sanalogo.svg" alt="SANA Softs logo" className="h-12 w-12 rounded-xl" />
              <div>
                <p className="text-lg font-semibold">{content.companyName}</p>
                <p className="text-sm text-slate-400">{content.siteTagline}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">{content.footerNote}</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-blue-400">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={content.socialLinks.telegram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-blue-600">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M9.6 15.5 9.2 19a.7.7 0 0 0 1.1.6l2.2-2.1 4.7 3.4a1.1 1.1 0 0 0 1.7-.7l3.5-16.4A1.1 1.1 0 0 0 20.3 2l-18 7.3a1.1 1.1 0 0 0 .2 2l4.6 1.4 10.4-6.7-8.2 8.3Z" /></svg>
            Telegram
          </a>
          <a href={content.socialLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-pink-600">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2Zm6.2-1.4a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z" /></svg>
            Instagram
          </a>
          <a href={content.socialLinks.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-slate-700">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 2a10 10 0 0 0-3.2 19.2c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .8 1.3 2.3 1 2.9.8.1-.6.3-1 .6-1.2-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1A9.2 9.2 0 0 1 12 7.2c.8 0 1.6.1 2.4.4 2-.9 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" /></svg>
            GitHub
          </a>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          <p>&copy; {year} {content.companyName}. All rights reserved.</p>
          <p className="mt-2">Made with care by <span className="font-semibold text-slate-200">{content.copyrightHolder}</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
