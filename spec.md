# Specification

## Summary
**Goal:** Add comprehensive SEO meta tags across all pages of the Coal & Curry website to improve discoverability and enable rich social media previews.

**Planned changes:**
- Update `frontend/index.html` with a descriptive `<title>`, meta description, keywords, Open Graph tags (og:title, og:description, og:type, og:url, og:image), and Twitter Card tags
- Add the existing `SEOHead` component to every public page (Home, About, Menu, Offers, Gallery, Blog, Contact, Reservation, Loyalty) with unique, page-specific title, description, canonical URL, Open Graph, and Twitter Card values
- Update `frontend/public/robots.txt` to reference the correct sitemap URL and ensure no public pages are blocked
- Update `frontend/public/sitemap.xml` to include all 9 public pages with canonical URLs, correct priorities, and updated lastmod dates

**User-visible outcome:** The site will display rich link previews when shared on social media, and all public pages will be properly indexed by search engines with accurate, unique metadata.
