import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  robots?: string;
  noindex?: boolean;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  jsonLd?: object;
}

export default function SEOHead({
  title = "Coal & Curry | Authentic South Indian Multi-Cuisine Restaurant",
  description = "Experience authentic South Indian multi-cuisine at Coal & Curry. Dosas, Biryanis, Chettinad Curries, Seafood, and more. Book a table or order online.",
  robots,
  noindex = false,
  canonical,
  ogImage = "/assets/generated/hero-bg.dim_1920x1080.png",
  ogType = "website",
  ogUrl,
  jsonLd,
}: SEOHeadProps) {
  const resolvedRobots = robots ?? (noindex ? "noindex, nofollow" : "index, follow");

  useEffect(() => {
    document.title = title;

    const setMeta = (nameOrProp: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, nameOrProp);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", resolvedRobots);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:type", ogType, "property");
    if (ogUrl) setMeta("og:url", ogUrl, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    let scriptEl: HTMLScriptElement | null = null;
    if (jsonLd) {
      const existing = document.getElementById("json-ld-schema");
      if (existing) existing.remove();
      scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.text = JSON.stringify(jsonLd);
      scriptEl.id = "json-ld-schema";
      document.head.appendChild(scriptEl);
    }

    return () => {
      if (scriptEl) scriptEl.remove();
    };
  }, [title, description, resolvedRobots, canonical, ogImage, ogType, ogUrl, jsonLd]);

  return null;
}
