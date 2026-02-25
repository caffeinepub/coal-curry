import CountdownTimer from '@/components/offers/CountdownTimer';
import SEOHead from '@/components/seo/SEOHead';

const now = new Date();

const offers = [
  {
    id: 1,
    title: 'Lunch Combo',
    description: 'Starter + Main Course + Dessert + Beverage for one. Available Monday to Friday, 11 AM – 3 PM.',
    discount: '20% OFF',
    badge: '🍽️',
    expiry: new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000),
    color: 'border-gold',
  },
  {
    id: 2,
    title: 'Family Feast',
    description: 'Special platter for 4+ guests including 2 Coal Specials, 2 Biryanis, and 4 Desserts.',
    discount: '25% OFF',
    badge: '👨‍👩‍👧‍👦',
    expiry: new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000),
    color: 'border-maroon',
  },
  {
    id: 3,
    title: 'Weekend Grill Fest',
    description: 'Unlimited coal-grilled items every Saturday & Sunday. Includes all Coal Specials.',
    discount: 'FLAT ₹999',
    badge: '🔥',
    expiry: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000),
    color: 'border-gold',
  },
  {
    id: 4,
    title: 'Student Discount',
    description: 'Valid student ID required. Applicable on all regular menu items. Not valid on Coal Specials.',
    discount: '15% OFF',
    badge: '🎓',
    expiry: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
    color: 'border-maroon',
  },
  {
    id: 5,
    title: 'Festival Special',
    description: 'Celebrate Tamil festivals with our special thali — a curated 12-course traditional meal.',
    discount: '30% OFF',
    badge: '🎉',
    expiry: new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000),
    color: 'border-gold',
  },
  {
    id: 6,
    title: 'Birthday Package',
    description: 'Celebrate your birthday with a complimentary dessert platter and personalized service.',
    discount: 'FREE DESSERT',
    badge: '🎂',
    expiry: new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000),
    color: 'border-maroon',
  },
];

export default function Offers() {
  return (
    <main className="min-h-screen bg-coal pt-20">
      <SEOHead
        title="Special Offers | Coal & Curry Restaurant Neyveli"
        description="Grab exclusive limited-time deals at Coal & Curry, Neyveli. Lunch combos, family feasts, weekend grill fests, student discounts, festival specials, and birthday packages — authentic South Indian food at unbeatable value."
        canonical="https://coalandcurry.com/offers"
        ogType="website"
        ogUrl="https://coalandcurry.com/offers"
        ogImage="/assets/generated/offers-banner-bg.dim_1920x600.png"
      />

      {/* Hero Banner */}
      <div className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/generated/offers-banner-bg.dim_1920x600.png')` }}
        />
        <div className="absolute inset-0 bg-coal/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/30 via-transparent to-maroon/30" />
        <div className="relative z-10 text-center px-4">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Limited Time</p>
          <h1 className="section-heading text-5xl sm:text-6xl mb-4">Exclusive Offers</h1>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="text-cream/60 font-sans max-w-xl mx-auto">
            Grab these limited-time deals before they expire. Authentic flavors at unbeatable value.
          </p>
        </div>
      </div>

      {/* Offers Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map(offer => (
            <div
              key={offer.id}
              className={`card-smoky rounded-xl overflow-hidden border-t-4 ${offer.color} hover:shadow-fire transition-all duration-300 hover:-translate-y-1 flex flex-col`}
            >
              <div className="p-6 flex-1">
                {/* Badge & Discount */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{offer.badge}</span>
                  <span className="bg-maroon text-gold font-bold text-sm px-3 py-1.5 rounded-full font-sans">
                    {offer.discount}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-gold text-2xl font-bold mb-2">{offer.title}</h3>

                {/* Description */}
                <p className="text-cream/60 font-sans text-sm leading-relaxed mb-6">{offer.description}</p>

                {/* Countdown */}
                <div className="border-t border-gold/10 pt-4">
                  <p className="text-cream/40 text-xs font-sans text-center mb-3 uppercase tracking-wider">Offer Expires In</p>
                  <CountdownTimer targetDate={offer.expiry} />
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <button className="btn-maroon w-full py-2.5 rounded font-display font-semibold text-sm">
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Terms */}
        <p className="text-center text-cream/30 text-xs font-sans mt-10">
          * All offers are subject to availability. Cannot be combined with other promotions. Valid at Coal & Curry, Neyveli only.
        </p>
      </section>
    </main>
  );
}
