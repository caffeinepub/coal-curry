import { useState, useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

const navLinks = [
  { key: 'home' as const, path: '/' },
  { key: 'menu' as const, path: '/menu' },
  { key: 'about' as const, path: '/about' },
  { key: 'offers' as const, path: '/offers' },
  { key: 'gallery' as const, path: '/gallery' },
  { key: 'blog' as const, path: '/blog' },
  { key: 'contact' as const, path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const { t, language, toggleLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-coal shadow-lg' : 'bg-coal/80 backdrop-blur-md'
        } border-b border-gold/30`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="/assets/generated/coal-curry-logo-horizontal.dim_800x300.png"
                alt="Coal & Curry"
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.key}
                  to={link.path}
                  className={`font-sans text-sm font-medium transition-colors duration-200 hover:text-gold ${
                    location.pathname === link.path ? 'text-gold' : 'text-cream/80'
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/40 text-gold text-xs font-medium hover:bg-gold/10 transition-colors"
              >
                <Globe size={14} />
                {language === 'en' ? 'தமிழ்' : 'EN'}
              </button>

              {/* Cart */}
              <Link to="/cart" className="relative p-2 text-cream hover:text-gold transition-colors">
                <ShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-maroon text-gold text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border border-gold/50">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </Link>

              {/* Reserve Button (desktop) */}
              <Link
                to="/reserve"
                className="hidden md:block btn-maroon px-4 py-2 rounded text-sm font-medium font-sans"
              >
                {t('reserveTable')}
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-cream hover:text-gold transition-colors"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-coal/95 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-16 right-0 bottom-0 w-72 bg-coal border-l border-gold/20 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.key}
                to={link.path}
                className={`font-display text-lg font-medium transition-colors py-2 border-b border-gold/10 ${
                  location.pathname === link.path ? 'text-gold' : 'text-cream/80 hover:text-gold'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gold text-sm font-medium mt-2"
            >
              <Globe size={16} />
              {language === 'en' ? 'Switch to தமிழ்' : 'Switch to English'}
            </button>
            <Link
              to="/reserve"
              className="btn-maroon text-center px-4 py-3 rounded font-medium mt-4"
            >
              {t('reserveTable')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
