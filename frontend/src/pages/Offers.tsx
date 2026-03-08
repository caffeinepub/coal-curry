import { Link } from '@tanstack/react-router';
import CountdownTimer from '@/components/offers/CountdownTimer';
import SEOHead from '@/components/seo/SEOHead';

const offers = [
  {
    id: 1,
    title: 'Weekend Biryani Feast',
    description: 'Get 20% off on all Biryani orders every Saturday and Sunday. Dine-in only.',
    discount: '20% OFF',
    validUntil: '2026-03-31',
    terms: 'Valid on dine-in orders only. Cannot be combined with other offers.',
    badge: 'Weekend Special',
    badgeColor: 'bg-ember-500 text-white',
  },
  {
    id: 2,
    title: 'Coal Special Combo',
    description: 'Order any 2 Coal Specials and get a complimentary Jigarthanda dessert.',
    discount: 'FREE DESSERT',
    validUntil: '2026-04-15',
    terms: 'Valid on orders of 2 or more Coal Special dishes. Dine-in and takeaway.',
    badge: 'Combo Deal',
    badgeColor: 'bg-gold-500 text-coal-900',
  },
  {
    id: 3,
    title: 'Family Thali Thursday',
    description: 'Every Thursday, enjoy our Family Thali for 4 at just ₹999. A complete Chettinad spread!',
    discount: '₹999 for 4',
    validUntil: '2026-05-01',
    terms: 'Valid every Thursday. Dine-in only. Advance booking recommended.',
    badge: 'Thursday Only',
    badgeColor: 'bg-saffron-400 text-coal-900',
  },
  {
    id: 4,
    title: 'Loyalty Double Points',
    description: 'Earn double loyalty points on all orders placed through our website this month.',
    discount: '2X POINTS',
    validUntil: '2026-03-31',
    terms: 'Valid for registered loyalty members only. Online orders only.',
    badge: 'Loyalty Bonus',
    badgeColor: 'bg-coal-700 text-gold-400',
  },
  {
    id: 5,
    title: 'Early Bird Lunch',
    description: 'Arrive before 1 PM on weekdays and enjoy 15% off your entire lunch order.',
    discount: '15% OFF',
    validUntil: '2026-06-30',
    terms: 'Valid Monday to Friday, 11 AM – 1 PM. Dine-in only.',
    badge: 'Lunch Offer',
    badgeColor: 'bg-ember-500 text-white',
  },
  {
    id: 6,
    title: 'Birthday Celebration',
    description: 'Celebrate your birthday with us and get a complimentary dessert platter for the table.',
    discount: 'FREE PLATTER',
    validUntil: '2026-12-31',
    terms: 'Valid on your birthday. ID proof required. Dine-in only.',
    badge: 'Birthday Special',
    badgeColor: 'bg-gold-500 text-coal-900',
  },
];

export default function Offers() {
  return (
    <>
      <SEOHead
        title="Offers & Deals | Coal & Curry – Chettinad Restaurant Neyveli"
        description="Discover the latest offers and deals at Coal & Curry. Weekend biryani discounts, combo deals, family thali specials, and loyalty bonus points. Don't miss out!"
        ogImage="/assets/generated/offers-banner-bg.dim_1920x600.png"
      />

      {/* Hero Banner */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/generated/offers-banner-bg.dim_1920x600.png')" }}
        />
        <div className="absolute inset-0 bg-coal-950/80" />
        <div className="relative z-10 py-24 px-4 text-center">
          <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-3">
            Limited Time
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}
          >
            Exclusive Offers
          </h1>
          <p
            className="text-coal-200 text-lg max-w-xl mx-auto"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
          >
            Savour more for less — handpicked deals crafted to make every visit special.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 bg-coal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-coal-800 border border-coal-700 rounded-xl overflow-hidden shadow-card hover:shadow-premium hover:border-gold-500/40 transition-all duration-300 flex flex-col"
              >
                {/* Badge + Discount */}
                <div className="p-5 border-b border-coal-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${offer.badgeColor}`}>
                      {offer.badge}
                    </span>
                    <span className="text-gold-400 font-bold text-lg">{offer.discount}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{offer.title}</h3>
                  <p className="text-coal-300 text-sm leading-relaxed">{offer.description}</p>
                </div>

                {/* Countdown */}
                <div className="px-5 py-4 bg-coal-900/50">
                  <p className="text-coal-300 text-xs font-semibold uppercase tracking-wide mb-2">
                    Offer Ends In:
                  </p>
                  <CountdownTimer targetDate={offer.validUntil} />
                </div>

                {/* Terms */}
                <div className="px-5 py-3 flex-1">
                  <p className="text-coal-400 text-xs italic leading-relaxed">
                    * {offer.terms}
                  </p>
                </div>

                {/* CTA */}
                <div className="px-5 pb-5">
                  <Link
                    to="/reservation"
                    className="block w-full text-center py-2.5 rounded bg-ember-500 hover:bg-ember-600 text-white font-bold text-sm transition-colors"
                  >
                    Claim This Offer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
