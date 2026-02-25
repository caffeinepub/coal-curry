import HeroSection from '@/components/home/HeroSection';
import SignatureDishes from '@/components/home/SignatureDishes';
import CustomerReviews from '@/components/home/CustomerReviews';
import OffersGallery from '@/components/home/OffersGallery';
import InstagramFeed from '@/components/home/InstagramFeed';
import SEOHead from '@/components/seo/SEOHead';

const restaurantStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Coal & Curry',
  description: 'Authentic South Indian charcoal-grilled cuisine in Neyveli, Tamil Nadu. Experience the ancient art of Chettinad cooking with live coal fire.',
  url: 'https://coalandcurry.com',
  image: 'https://coalandcurry.com/assets/generated/coal-curry-logo-circular.dim_512x512.png',
  telephone: '+91-98765-43210',
  email: 'hello@coalandcurry.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Main Road, Neyveli Township',
    addressLocality: 'Neyveli',
    addressRegion: 'Tamil Nadu',
    postalCode: '607803',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.5983,
    longitude: 79.4917,
  },
  servesCuisine: ['South Indian', 'Chettinad', 'Tamil'],
  priceRange: '₹₹',
  openingHours: 'Mo-Su 11:00-23:00',
  hasMenu: 'https://coalandcurry.com/menu',
  acceptsReservations: true,
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, UPI',
  sameAs: [
    'https://instagram.com/coalandcurry',
    'https://facebook.com/coalandcurry',
  ],
};

export default function Home() {
  return (
    <main>
      <SEOHead
        title="Coal & Curry | Authentic South Indian Charcoal Restaurant in Neyveli"
        description="Experience the ancient art of Chettinad charcoal cooking at Coal & Curry, Neyveli, Tamil Nadu. Authentic South Indian cuisine — biryani, coal-smoked chicken, ghee roast dosa, and more."
        canonical="https://coalandcurry.com/"
        ogType="restaurant"
        ogUrl="https://coalandcurry.com/"
        ogImage="/assets/generated/hero-charcoal-grill.dim_1920x1080.png"
        structuredData={restaurantStructuredData}
      />
      <HeroSection />
      <SignatureDishes />
      <CustomerReviews />
      <OffersGallery />
      <InstagramFeed />
    </main>
  );
}
