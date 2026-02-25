# Specification

## Summary
**Goal:** Add full SEO optimization to the Coal & Curry React SPA, including per-page meta tags, Open Graph/Twitter Card tags, sitemap.xml, robots.txt, and Schema.org structured data.

**Planned changes:**
- Create a reusable `SEOHead` component that injects unique `<title>`, `<meta name="description">`, Open Graph, and Twitter Card tags for all 11 page routes (Home, About, Menu, Offers, Gallery, Contact, Reservation, Blog, Loyalty, Cart, Checkout)
- Add Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`, `og:locale`) and Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) to every page, referencing existing assets from `/assets/generated`
- Create `frontend/public/sitemap.xml` listing all 9 public routes (`/`, `/menu`, `/about`, `/offers`, `/gallery`, `/contact`, `/reservation`, `/blog`, `/loyalty`) with `<loc>`, `<lastmod>`, and `<changefreq>` entries
- Create `frontend/public/robots.txt` allowing all crawlers, disallowing `/cart` and `/checkout`, and referencing `/sitemap.xml`
- Inject a `<script type="application/ld+json">` Restaurant Schema.org structured data block on the Home page with name, address (Neyveli, Tamil Nadu), cuisine, price range, opening hours, and image

**User-visible outcome:** The site will have proper SEO metadata on every page, social media link previews will render rich cards when shared, search engines can crawl and index all public pages, and Google can display rich results (address, hours, cuisine) for the restaurant.
