import { useEffect, useState } from "react";

const STORAGE_KEY = "sana-softs-content-v1";

export const defaultSiteContent = {
  companyName: "SANA Softs",
  copyrightHolder: "Salis Amin Lone & Nadiya Rafiq",
  siteTagline: "Reliable software and digital growth for modern businesses.",
  heroTitle: "Build smarter digital experiences with SANA Softs",
  heroSubtitle:
    "We design reliable mobile apps, websites, and growth-focused digital products for founders and fast-moving teams.",
  heroPrimaryCta: "Explore Our Apps",
  heroSecondaryCta: "Our Services",
  aboutTitle: "About SANA Softs",
  aboutBody:
    "SANA Softs helps businesses launch polished products, improve operations, and build a stronger online presence through reliable software solutions.",
  contactEmail: "lonesalis4@gmail.com",
  phoneNumber: "+91 6006XXXXXX",
  whatsappLink: "https://wa.me/6006598481",
  address: "Anantnag, Jammu and Kashmir, India - 192101",
  portfolioLink: "https://salone1.github.io/Portfolio/",
  footerNote: "Made with care for founders, teams, and growing brands.",
  socialLinks: {
    telegram: "https://t.me/salislone",
    instagram: "https://instagram.com/salis.lone",
    github: "https://github.com/salone1",
  },
  blogPosts: [
    {
      id: 1,
      title: "The Future of Mobile App Development in 2026",
      slug: "future-of-mobile-app-development-2026",
      category: "trends",
      date: "May 20, 2026",
      image: "📱",
      excerpt:
        "Explore how AI, better automation, and stronger privacy tools are changing the way modern apps are built.",
      readTime: "8 min read",
      featured: true,
      content:
        "Modern app teams are shipping faster by combining AI-based automation with polished UX design. The most successful products in 2026 are not just feature-rich; they are reliable, accessible, and deeply focused on the user journey.",
    },
    {
      id: 2,
      title: "Getting Started with React and Tailwind CSS",
      slug: "getting-started-with-react-and-tailwind",
      category: "tutorial",
      date: "May 15, 2026",
      image: "⚛️",
      excerpt:
        "A practical guide for building elegant and responsive sites with React and Tailwind.",
      readTime: "12 min read",
      featured: false,
      content:
        "React and Tailwind CSS pair beautifully for fast development and flexible design. Start by defining a strong component structure, then layer your styles with small utility classes to keep the experience consistent across devices.",
    },
    {
      id: 3,
      title: "Why Cloud Deployment Matters for Your Business",
      slug: "why-cloud-deployment-matters",
      category: "business",
      date: "May 10, 2026",
      image: "☁️",
      excerpt:
        "A reliable cloud strategy can improve uptime, reduce costs, and make growth smoother.",
      readTime: "7 min read",
      featured: false,
      content:
        "Cloud deployment removes much of the friction that slows growth. Teams can scale faster, protect business continuity, and update products with confidence when their hosting and deployment workflow is well planned.",
    },
  ],
  seo: {
    defaultDescription:
      "SANA Softs delivers modern software, mobile apps, web services, and digital growth support for ambitious brands.",
    siteUrl: "https://sanasofts.salone.workers.dev",
  },
};

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function deepMerge(target, source) {
  const output = { ...target };
  Object.keys(source || {}).forEach((key) => {
    const targetValue = output[key];
    const sourceValue = source[key];

    if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
      output[key] = deepMerge(targetValue, sourceValue);
    } else {
      output[key] = sourceValue;
    }
  });

  return output;
}

export function getStoredContent() {
  if (typeof window === "undefined") {
    return defaultSiteContent;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultSiteContent;
    }

    const saved = JSON.parse(raw);
    return deepMerge(defaultSiteContent, saved);
  } catch (error) {
    console.warn("Unable to read site content", error);
    return defaultSiteContent;
  }
}

export function saveSiteContent(nextContent) {
  const merged = deepMerge(defaultSiteContent, nextContent);

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    window.dispatchEvent(new Event("sana-content-updated"));
  }

  return merged;
}

export function useSiteContent() {
  const [content, setContent] = useState(() => getStoredContent());

  useEffect(() => {
    const handleUpdate = () => setContent(getStoredContent());
    window.addEventListener("sana-content-updated", handleUpdate);
    return () => window.removeEventListener("sana-content-updated", handleUpdate);
  }, []);

  return content;
}

export function getBlogPostBySlug(slug) {
  const content = getStoredContent();
  return content.blogPosts.find((post) => post.slug === slug);
}

export function getPageTitle(pathname, content) {
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.split("/").filter(Boolean).pop();
    const post = content.blogPosts.find((entry) => entry.slug === slug);
    return post ? `${post.title} | ${content.companyName}` : `Blog | ${content.companyName}`;
  }

  switch (pathname) {
    case "/about":
      return `About | ${content.companyName}`;
    case "/apps":
      return `Apps | ${content.companyName}`;
    case "/services":
      return `Services | ${content.companyName}`;
    case "/contact":
      return `Contact | ${content.companyName}`;
    case "/blog":
      return `Blog | ${content.companyName}`;
    case "/privacy":
      return `Privacy Policy | ${content.companyName}`;
    case "/terms":
      return `Terms & Conditions | ${content.companyName}`;
    case "/admin":
      return `Admin Panel | ${content.companyName}`;
    default:
      return `${content.companyName} | Software Development & Digital Growth`;
  }
}
