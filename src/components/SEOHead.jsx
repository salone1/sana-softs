import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageTitle, useSiteContent } from "../config/contentStore";

function SEOHead() {
  const location = useLocation();
  const content = useSiteContent();
  const pathname = location.pathname;

  useEffect(() => {
    const title = getPageTitle(pathname, content);
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        pathname.startsWith("/blog/")
          ? `${content.companyName} blog article` 
          : content.seo.defaultDescription
      );
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute(
        "href",
        `${content.seo.siteUrl}${pathname === "/" ? "" : pathname}`
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        pathname.startsWith("/blog/")
          ? `${content.companyName} blog article`
          : content.seo.defaultDescription
      );
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", `${content.seo.siteUrl}${pathname === "/" ? "" : pathname}`);
    }

    const robotsTag = document.querySelector('meta[name="robots"]');
    if (robotsTag) {
      robotsTag.setAttribute("content", pathname === "/admin" ? "noindex, nofollow" : "index, follow");
    }
  }, [content, pathname]);

  return null;
}

export default SEOHead;
