import HeroSection from '@/components/home/HeroSection';
import SignatureDishes from '@/components/home/SignatureDishes';
import CustomerReviews from '@/components/home/CustomerReviews';
import { Link } from '@tanstack/react-router';
import { Flame, Clock, MapPin, Phone } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

const features = [
  { icon: '🔥', title: 'Charcoal Grilled', desc: 'Every dish slow-cooked over real charcoal for authentic smoky depth.' },
  { icon: '🌿', title: 'Fresh Spices', desc: 'Hand-ground Chettinad masalas sourced from local farms daily.' },
  { icon: '👨‍🍳', title: 'Master Chefs', desc: 'Recipes passed down through generations of Chettinad culinary tradition.' },
  { icon: '🏆', title: 'Award Winning', desc: "Recognised as Neyveli's best restaurant for 5 consecutive years." },
];

export default function Home() {
  return (
    <>
      <SEOHead
        title="Coal & Curry | Authentic Chettinad Restaurant in Neyveli"
        description="Experience the bold, smoky flavours of authentic Chettinad cuisine at Coal & Curry, Neyveli's finest restaurant. Charcoal-grilled meats, aromatic biryanis, and fiery curries."
        ogImage="/assets/generated/hero-coal-curry.dim_1920x1080.png"
        ogUrl="https://coalandcurry.com/"
        canonical="https://coalandcurry.com/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Coal & Curry",
          "description": "Authentic Chettinad restaurant in Neyveli, Tamil Nadu",
          "servesCuisine": "Chettinad, South Indian",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12, Coal Street, Neyveli Township",
            "addressLocality": "Neyveli",
            "addressRegion": "Tamil Nadu",
            "postalCode": "607803",
            "addressCountry": "IN"
          },
          "telephone": "+917845582661",
          "openingHours": "Mo-Su 11:00-23:00",
          "priceRange": "₹₹"
        }}
      />

      <HeroSection />

      {/* Features Strip */}
      <section className="py-14 bg-coal-800 border-y border-coal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-white text-base mb-1">{f.title}</h3>
                  <p className="text-coal-300 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SignatureDishes />
      <CustomerReviews />

      {/* About Teaser */}
      <section className="py-20 bg-coal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
              Born from the Coals of Neyveli
            </h2>
            <p className="text-coal-200 text-base leading-relaxed mb-4">
              Coal & Curry was founded in 2009 by Chef Murugan Pillai, a third-generation Chettinad cook who grew up watching his grandmother transform simple ingredients into extraordinary meals over glowing charcoal.
            </p>
            <p className="text-coal-200 text-base leading-relaxed mb-6">
              Today, we carry that legacy forward — every dish is a tribute to the bold, complex flavours of Chettinad cuisine, cooked with the same passion and respect for tradition.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-ember-500 hover:bg-ember-600 text-white font-bold text-sm transition-colors"
            >
              <Flame className="w-4 h-4" />
              Read Our Story
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-premium">
            <img
              src="/assets/generated/restaurant-interior.dim_1200x800.png"
              alt="Coal & Curry restaurant interior"
              className="w-full h-72 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal-950/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Quick Info Strip */}
      <section className="py-10 bg-coal-950 border-t border-coal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-6 h-6 text-gold-400" />
              <p className="text-white font-semibold text-sm">Mon–Sun: 11 AM – 11 PM</p>
              <p className="text-coal-300 text-xs">Open Every Day</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-gold-400" />
              <p className="text-white font-semibold text-sm">12, Coal Street, Neyveli</p>
              <p className="text-coal-300 text-xs">Tamil Nadu – 607 803</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-gold-400" />
              <a href="tel:+917845582661" className="text-white font-semibold text-sm hover:text-gold-400 transition-colors">
                +91 78455 82661
              </a>
              <p className="text-coal-300 text-xs">Call for Reservations</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
