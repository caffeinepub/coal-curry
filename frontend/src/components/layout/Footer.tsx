import { Link } from '@tanstack/react-router';
import { Flame, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import NewsletterSignup from './NewsletterSignup';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Offers', path: '/offers' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Reservation', path: '/reservation' },
];

const menuCategories = [
  'Veg Starters',
  'Coal Specials',
  'Biryani & Rice',
  'Dosa & Tiffin',
  'Beverages',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'coal-and-curry');

  return (
    <footer className="bg-coal-950 border-t border-coal-800">
      {/* Newsletter */}
      <div className="bg-coal-900 border-b border-coal-800 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <NewsletterSignup />
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-ember-500 flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-white">
              Coal <span className="text-gold-400">&</span> Curry
            </span>
          </div>
          <p className="text-coal-200 text-sm leading-relaxed">
            Authentic Chettinad flavours from Neyveli, slow-cooked over real charcoal for a smoky, unforgettable experience.
          </p>
          <div className="flex gap-3 pt-1">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-coal-800 flex items-center justify-center text-coal-200 hover:bg-ember-500 hover:text-white transition-colors"
            >
              <SiFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-coal-800 flex items-center justify-center text-coal-200 hover:bg-ember-500 hover:text-white transition-colors"
            >
              <SiInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-coal-800 flex items-center justify-center text-coal-200 hover:bg-ember-500 hover:text-white transition-colors"
            >
              <SiYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-coal-200 hover:text-gold-400 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Categories */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 uppercase tracking-widest">Our Menu</h3>
          <ul className="space-y-2">
            {menuCategories.map((cat) => (
              <li key={cat}>
                <Link
                  to="/menu"
                  className="text-coal-200 hover:text-gold-400 text-sm transition-colors duration-200"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link
              to="/loyalty"
              className="text-gold-400 hover:text-gold-300 text-sm font-semibold transition-colors"
            >
              🏆 Loyalty Program
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 uppercase tracking-widest">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
              <span className="text-coal-200 text-sm leading-relaxed">
                12, Coal Street, Neyveli Township,<br />Tamil Nadu – 607 803
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="tel:+917845582661" className="text-coal-200 hover:text-gold-400 text-sm transition-colors">
                +91 78455 82661
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="mailto:hello@coalandcurry.in" className="text-coal-200 hover:text-gold-400 text-sm transition-colors">
                hello@coalandcurry.in
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
              <span className="text-coal-200 text-sm leading-relaxed">
                Mon–Sun: 11:00 AM – 11:00 PM
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-coal-800 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-coal-300">
            © {year} Coal & Curry. All rights reserved.
          </p>
          <p className="text-coal-300">
            Built with{' '}
            <span className="text-ember-400">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 font-semibold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
