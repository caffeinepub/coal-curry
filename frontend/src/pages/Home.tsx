import HeroSection from "../components/home/HeroSection";
import SignatureDishes from "../components/home/SignatureDishes";
import CustomerReviews from "../components/home/CustomerReviews";
import SEOHead from "../components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { UtensilsCrossed, Clock, MapPin, Phone } from "lucide-react";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Coal & Curry",
  description: "Authentic Chettinad Restaurant in Neyveli, Tamil Nadu. Traditional coal-grilled specialties, biryanis, dosas, and South Indian classics.",
  url: "https://coalandcurry.com",
  telephone: "+917845582661",
  email: "isacksanthosh@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Neyveli",
    addressLocality: "Neyveli",
    addressRegion: "Tamil Nadu",
    postalCode: "607803",
    addressCountry: "IN",
  },
  servesCuisine: ["Chettinad", "South Indian", "Tamil", "Coal-Grilled", "Biryani"],
  priceRange: "₹₹",
  openingHours: ["Mo-Fr 11:00-23:00", "Sa-Su 10:00-23:30"],
  image: "/assets/generated/hero-coal-curry.dim_1920x1080.png",
};

export default function Home() {
  return (
    <>
      <SEOHead
        title="Coal & Curry | Authentic Chettinad Restaurant – Neyveli, Tamil Nadu"
        description="Experience authentic Chettinad cuisine with traditional coal-grilled specialties, biryanis, dosas, and South Indian classics in a warm, inviting atmosphere. Book a table today!"
        canonical="https://coalandcurry.com/"
        ogUrl="https://coalandcurry.com/"
        ogImage="/assets/generated/hero-coal-curry.dim_1920x1080.png"
        jsonLd={restaurantSchema}
      />

      <HeroSection />

      {/* Features Strip */}
      <section className="bg-saffron py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: "🌶️", label: "Authentic Spices" },
              { icon: "🍃", label: "Fresh Ingredients" },
              { icon: "👨‍🍳", label: "Expert Chefs" },
              { icon: "❤️", label: "Made with Love" },
            ].map((f) => (
              <div key={f.label} className="flex items-center justify-center gap-2">
                <span className="text-2xl">{f.icon}</span>
                <span className="font-bold text-charcoal text-sm">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SignatureDishes />

      {/* About Teaser */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-saffron font-medium text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="font-display text-4xl font-bold text-charcoal mt-2 mb-6">
                A Culinary Journey Through South India
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coal & Curry was born from a passion for authentic South Indian flavors. 
                Our chefs bring decades of experience from the kitchens of Tamil Nadu, Kerala, 
                Karnataka, and Andhra Pradesh.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From the fiery Chettinad curries to the delicate Kerala fish moilee, 
                every dish is crafted with freshly ground spices and time-honored recipes 
                passed down through generations.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 bg-saffron text-charcoal font-bold rounded-md hover:bg-turmeric transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  to="/menu"
                  className="px-6 py-3 border-2 border-saffron text-saffron font-bold rounded-md hover:bg-saffron hover:text-charcoal transition-colors"
                >
                  View Menu
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/restaurant-interior.dim_1200x800.png"
                alt="Coal & Curry restaurant interior"
                className="rounded-2xl shadow-warm-lg w-full object-cover h-80"
              />
              <div className="absolute -bottom-6 -left-6 bg-saffron rounded-xl p-4 shadow-warm">
                <p className="font-display text-3xl font-bold text-charcoal">50+</p>
                <p className="text-charcoal/80 text-sm font-medium">Authentic Dishes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerReviews />

      {/* Info Strip */}
      <section className="py-12 bg-cream border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-saffron" />
              </div>
              <div>
                <p className="font-display font-bold text-charcoal">Opening Hours</p>
                <p className="text-sm text-muted-foreground">Mon–Fri: 11 AM – 11 PM</p>
                <p className="text-sm text-muted-foreground">Sat–Sun: 10 AM – 11:30 PM</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-saffron" />
              </div>
              <div>
                <p className="font-display font-bold text-charcoal">Location</p>
                <p className="text-sm text-muted-foreground">Neyveli, Tamil Nadu</p>
                <p className="text-sm text-muted-foreground">607 803, India</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-saffron" />
              </div>
              <div>
                <p className="font-display font-bold text-charcoal">Reservations</p>
                <p className="text-sm text-muted-foreground">+91 78455 82661</p>
                <Link to="/reservation" className="text-sm text-saffron font-medium hover:underline">
                  Book Online →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
