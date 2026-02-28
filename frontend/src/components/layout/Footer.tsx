import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import NewsletterSignup from "./NewsletterSignup";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About Us", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Offers", path: "/offers" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Loyalty Program", path: "/loyalty" },
];

const menuCategories = [
  "Starters",
  "Dosas & Uttapam",
  "Idly & Vada",
  "Rice & Biryani",
  "Curries & Gravies",
  "Seafood Specials",
  "Desserts",
  "Drinks",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "coalandcurry"
  );

  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-saffron">
                <img
                  src="/assets/generated/coal-curry-logo-circular.dim_512x512.png"
                  alt="Coal & Curry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Coal & Curry</h3>
                <p className="text-xs text-cream/80">South Indian Multi-Cuisine</p>
              </div>
            </div>
            <p className="text-sm text-cream/90 leading-relaxed mb-6">
              Authentic South Indian flavors crafted with love, tradition, and the finest spices. 
              Experience the rich culinary heritage of South India.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-saffron/10 flex items-center justify-center text-saffron hover:bg-saffron hover:text-charcoal transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-saffron/10 flex items-center justify-center text-saffron hover:bg-saffron hover:text-charcoal transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-saffron/10 flex items-center justify-center text-saffron hover:bg-saffron hover:text-charcoal transition-colors"
                aria-label="YouTube"
              >
                <SiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-cream/90 hover:text-saffron transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">Our Menu</h4>
            <ul className="space-y-2">
              {menuCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    to="/menu"
                    className="text-sm text-cream/90 hover:text-saffron transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-cream/90">
                <MapPin className="w-4 h-4 text-saffron mt-0.5 shrink-0" />
                <span>123 Spice Garden Road, Chennai, Tamil Nadu 600001</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-cream/90">
                <Phone className="w-4 h-4 text-saffron shrink-0" />
                <a href="tel:+917845582661" className="hover:text-saffron transition-colors">
                  +91 78455 82661
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-cream/90">
                <Mail className="w-4 h-4 text-saffron shrink-0" />
                <a href="mailto:isacksanthosh@gmail.com" className="hover:text-saffron transition-colors">
                  isacksanthosh@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-cream/90">
                <Clock className="w-4 h-4 text-saffron mt-0.5 shrink-0" />
                <div>
                  <p>Mon–Fri: 7:00 AM – 10:30 PM</p>
                  <p>Sat–Sun: 7:00 AM – 11:00 PM</p>
                </div>
              </li>
            </ul>
            <NewsletterSignup />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-saffron/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/70">
            © {year} Coal & Curry. All rights reserved.
          </p>
          <p className="text-xs text-cream/70 flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3 h-3 text-saffron fill-saffron" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
