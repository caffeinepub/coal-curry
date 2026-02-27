import { useState, useEffect } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { ShoppingCart, Menu, X, UtensilsCrossed } from "lucide-react";
import { useCart } from "../../contexts/CartContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Offers", path: "/offers" },
  { label: "Reservations", path: "/reservation" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? currentPath === "/" : currentPath.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileOpen
          ? "bg-charcoal shadow-warm-lg"
          : "bg-gradient-to-b from-charcoal/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-saffron">
              <img
                src="/assets/generated/coal-curry-logo-circular.dim_512x512.png"
                alt="Coal & Curry"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-bold text-cream group-hover:text-saffron transition-colors">
                Coal & Curry
              </span>
              <p className="text-xs text-cream/60 leading-none">South Indian Multi-Cuisine</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-body font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-saffron bg-saffron/10"
                    : "text-cream/80 hover:text-saffron hover:bg-saffron/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              className="relative p-2 text-cream hover:text-saffron transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-deep-red text-cream text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/reservation"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-saffron text-charcoal text-sm font-bold rounded-md hover:bg-turmeric transition-colors"
            >
              <UtensilsCrossed className="w-4 h-4" />
              Book Table
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-cream hover:text-saffron transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-charcoal border-t border-saffron/20">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-saffron bg-saffron/10"
                    : "text-cream/80 hover:text-saffron hover:bg-saffron/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/reservation"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 bg-saffron text-charcoal text-sm font-bold rounded-md text-center hover:bg-turmeric transition-colors"
            >
              Book a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
