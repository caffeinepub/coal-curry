import { Link } from '@tanstack/react-router';
import { useLanguage } from '@/context/LanguageContext';

export default function OffersGallery() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/generated/offers-banner-bg.dim_1920x600.png')` }}
      />
      <div className="absolute inset-0 bg-coal/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-maroon/40 via-transparent to-maroon/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Limited Time</p>
        <h2 className="section-heading text-4xl sm:text-5xl mb-4">{t('latestOffers')}</h2>
        <div className="gold-divider w-32 mx-auto mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          {[
            { title: 'Lunch Combo', desc: 'Starter + Main + Dessert', discount: '20% OFF' },
            { title: 'Family Feast', desc: 'For 4+ guests, special platter', discount: '25% OFF' },
            { title: 'Weekend Grill Fest', desc: 'Unlimited coal-grilled items', discount: 'FLAT ₹999' },
          ].map(offer => (
            <div key={offer.title} className="card-smoky rounded-lg p-5 border-gold/30 hover:border-gold/60 transition-colors">
              <div className="bg-maroon text-gold text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                {offer.discount}
              </div>
              <h3 className="font-display text-gold font-semibold text-lg mb-1">{offer.title}</h3>
              <p className="text-cream/60 text-sm font-sans">{offer.desc}</p>
            </div>
          ))}
        </div>

        <Link
          to="/offers"
          className="btn-gold px-8 py-3.5 rounded font-display font-semibold inline-block hover:scale-105 transition-transform"
        >
          {t('viewAllOffers')} →
        </Link>
      </div>
    </section>
  );
}
