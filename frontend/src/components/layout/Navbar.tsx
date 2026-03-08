import { useState, useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { ShoppingCart, Menu, X, Flame } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Offers', path: '/offers' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-coal-900 shadow-premium border-b border-coal-700'
          : 'bg-coal-950/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-ember-500 flex items-center justify-center shadow-glow-ember">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-wide">
            Coal <span className="text-gold-400">&</span> Curry
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`px-3 py-2 rounded text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-gold-400 bg-coal-800'
                    : 'text-white hover:text-gold-400 hover:bg-coal-800'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-coal-800 transition-colors">
            <ShoppingCart className="w-5 h-5 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-ember-500 text-white text-xs font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Book Table CTA */}
          <Link
            to="/reservation"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded bg-ember-500 hover:bg-ember-600 text-white font-bold text-sm transition-colors duration-200 shadow-glow-ember"
          >
            Book Table
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-coal-800 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X className="w-6 h-6 text-white" />
              : <Menu className="w-6 h-6 text-white" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-coal-900 border-t border-coal-700 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded text-sm font-semibold transition-colors ${
                isActive(link.path)
                  ? 'text-gold-400 bg-coal-800'
                  : 'text-white hover:text-gold-400 hover:bg-coal-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/reservation"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 px-4 py-3 rounded bg-ember-500 hover:bg-ember-600 text-white font-bold text-sm text-center transition-colors"
          >
            Book Table
          </Link>
        </div>
      )}
    </header>
  );
}
