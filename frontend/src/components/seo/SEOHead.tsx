import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  // Open Graph
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;
  ogSiteName?: string;
  ogLocale?: string;
  ogTitle?: string;
  ogDescription?: string;
  // Twitter Card
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  // Structured Data
  structuredData?: object;
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function removeMeta(name: string, attr: 'name' | 'property' = 'name') {
  const el = document.querySelector(`meta[${attr}="${name}"]`);
  if (el) el.remove();
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function removeLink(rel: string) {
  const el = document.querySelector(`link[rel="${rel}"]`);
  if (el) el.remove();
}

const STRUCTURED_DATA_ID = 'seo-structured-data';

export default function SEOHead({
  title,
  description,
  canonical,
  noindex = false,
  ogType = 'website',
  ogUrl,
  ogImage,
  ogSiteName = 'Coal & Curry',
  ogLocale = 'en_IN',
  ogTitle,
  ogDescription,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
}: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Basic meta
    setMeta('description', description);

    // Robots
    if (noindex) {
      setMeta('robots', 'noindex, nofollow');
    } else {
      removeMeta('robots');
    }

    // Canonical
    if (canonical) {
      setLink('canonical', canonical);
    } else {
      removeLink('canonical');
    }

    // Open Graph
    setMeta('og:title', ogTitle || title, 'property');
    setMeta('og:description', ogDescription || description, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('og:site_name', ogSiteName, 'property');
    setMeta('og:locale', ogLocale, 'property');
    if (ogUrl) setMeta('og:url', ogUrl, 'property');
    if (ogImage) {
      const absoluteImage = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
      setMeta('og:image', absoluteImage, 'property');
    }

    // Twitter Card
    setMeta('twitter:card', twitterCard);
    setMeta('twitter:title', twitterTitle || title);
    setMeta('twitter:description', twitterDescription || description);
    if (twitterImage || ogImage) {
      const img = twitterImage || ogImage || '';
      const absoluteImg = img.startsWith('http') ? img : `${window.location.origin}${img}`;
      setMeta('twitter:image', absoluteImg);
    }

    // Structured Data (JSON-LD)
    let scriptEl = document.getElementById(STRUCTURED_DATA_ID) as HTMLScriptElement | null;
    if (structuredData) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = STRUCTURED_DATA_ID;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(structuredData);
    } else {
      if (scriptEl) scriptEl.remove();
    }

    return () => {
      // Cleanup on unmount
      removeMeta('description');
      removeMeta('robots');
      removeMeta('og:title', 'property');
      removeMeta('og:description', 'property');
      removeMeta('og:type', 'property');
      removeMeta('og:site_name', 'property');
      removeMeta('og:locale', 'property');
      removeMeta('og:url', 'property');
      removeMeta('og:image', 'property');
      removeMeta('twitter:card');
      removeMeta('twitter:title');
      removeMeta('twitter:description');
      removeMeta('twitter:image');
      removeLink('canonical');
      const sd = document.getElementById(STRUCTURED_DATA_ID);
      if (sd) sd.remove();
    };
  }, [
    title, description, canonical, noindex,
    ogType, ogUrl, ogImage, ogSiteName, ogLocale, ogTitle, ogDescription,
    twitterCard, twitterTitle, twitterDescription, twitterImage,
    structuredData,
  ]);

  return null;
}
