import { Link } from '@tanstack/react-router';
import { SiInstagram, SiFacebook, SiYoutube } from 'react-icons/si';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = typeof window !== 'undefined' ? window.location.hostname : 'coal-and-curry';

  return (
    <footer className="bg-smoky border-t border-gold/20">
      {/* Newsletter */}
      <div className="border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <NewsletterSignup />
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/assets/generated/coal-curry-logo-icon.dim_256x256.png"
              alt="Coal & Curry"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="font-display text-gold text-lg italic mb-2">Where Fire Meets Flavor</p>
            <p className="text-cream/60 text-sm font-sans leading-relaxed">
              Authentic South Indian cuisine crafted over coal fire. Chettinad flavors, premium ambience.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold transition-colors">
                <SiInstagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold transition-colors">
                <SiFacebook size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold transition-colors">
                <SiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-gold font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Menu', path: '/menu' },
                { label: 'About Us', path: '/about' },
                { label: 'Offers', path: '/offers' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Loyalty Program', path: '/loyalty' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-cream/60 hover:text-gold text-sm font-sans transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="font-display text-gold font-semibold mb-4 text-sm uppercase tracking-widest">Menu</h4>
            <ul className="space-y-2">
              {['Veg Starters', 'Non-Veg Starters', 'Coal Specials', 'Biryani & Rice', 'Dosa & Tiffin', 'Seafood Specials', 'Desserts'].map(cat => (
                <li key={cat}>
                  <Link to="/menu" className="text-cream/60 hover:text-gold text-sm font-sans transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-gold font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-cream/60 text-sm font-sans">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>Neyveli, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-2 text-cream/60 text-sm font-sans">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2 text-cream/60 text-sm font-sans">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href="mailto:hello@coalandcurry.in" className="hover:text-gold transition-colors">hello@coalandcurry.in</a>
              </li>
            </ul>
            <div className="mt-4 space-y-1">
              <p className="text-gold text-xs font-sans font-medium uppercase tracking-wider">Hours</p>
              <p className="text-cream/60 text-xs font-sans">Mon–Fri: 11 AM – 11 PM</p>
              <p className="text-cream/60 text-xs font-sans">Sat–Sun: 10 AM – 11:30 PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs font-sans">
            © {year} Coal & Curry. All rights reserved. Neyveli, Tamil Nadu.
          </p>
          <p className="text-cream/40 text-xs font-sans flex items-center gap-1">
            Built with <Heart size={12} className="text-gold fill-gold" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
