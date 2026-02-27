# Specification

## Summary
**Goal:** Rebuild Coal & Curry as a full-featured South Indian multi-cuisine restaurant web app with warm spice-palette theming, a complete menu, cart/checkout flow, reservations, reviews, chatbot, SEO, and a rich homepage.

**Planned changes:**
- Apply a warm South Indian spice palette (saffron, turmeric, deep red, cream, dark charcoal) with bold display typography and textured backgrounds across all pages
- Build a complete South Indian multi-cuisine menu (9+ categories: Starters, Dosas & Uttapam, Idly & Vada, Rice & Biryani, Curries & Gravies, Breads, Seafood Specials, Desserts, Drinks) stored in `menuData.ts`, each dish with name, description, INR price, spice level, and veg/non-veg badge
- Add horizontally scrollable category tabs on the Menu page with emoji icons and active-tab styling to filter the dish grid
- Render dish cards with image, name, description, spice level, price, veg/non-veg badge, and Add to Cart button
- Implement a shopping cart (localStorage persistence, navbar badge) with add/remove/quantity controls, subtotal, and a multi-step checkout flow (order type → address → payment → confirmation)
- Build a full-screen hero section on the homepage with background image, "Coal & Curry" branding, South Indian tagline, and CTAs linking to /menu and /reservation
- Create a Contact page with address, phone, email, WhatsApp link, opening hours, social media links, and a contact inquiry form
- Build a table reservation page with validated form fields; save reservations to Motoko backend; show confirmation summary
- Add a Signature Dishes section on the homepage (4 featured South Indian specialties with images, descriptions, prices, and Add to Cart)
- Add a customer reviews carousel on the homepage fetching from Motoko backend with static fallback (4+ entries, star ratings, prev/next navigation)
- Add SEO metadata (title, meta description, Open Graph, JSON-LD Restaurant schema on homepage), update robots.txt and sitemap.xml
- Include a floating "Agni" chatbot widget (bottom-right, all pages) with keyword-based static responses for 8+ topics and quick-reply buttons
- Add a responsive Navbar with scroll-aware styling, mobile hamburger menu, cart badge, and links to all pages
- Add a site-wide Footer with brand description, social links, navigation links, menu category links, contact info, and newsletter signup (stored in Motoko backend with duplicate-check feedback)

**User-visible outcome:** Visitors can browse a full South Indian multi-cuisine menu, add dishes to a persistent cart and checkout, make table reservations, read customer reviews, explore featured dishes, contact the restaurant, get help from a chatbot assistant, and find the site via Google search.
