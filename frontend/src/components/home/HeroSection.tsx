import { Link } from '@tanstack/react-router';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/generated/hero-charcoal-grill.dim_1920x1080.png')` }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-coal/70" />
      <div className="absolute inset-0 smoke-overlay" />
      {/* Decorative fire glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Tagline */}
        <p className="font-serif-alt text-gold text-lg sm:text-xl italic mb-4 tracking-widest tamil-motif">
          {t('tagline')}
        </p>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-cream leading-tight mb-6">
          {t('heroHeadline')}
        </h1>

        {/* Divider */}
        <div className="gold-divider w-48 mx-auto mb-8" />

        {/* Subtitle */}
        <p className="font-sans text-cream/70 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Authentic Chettinad flavors. Locally sourced spices. Premium coal-fire cooking.
          Experience the taste of Tamil Nadu like never before.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/menu"
            className="btn-gold px-8 py-3.5 rounded font-display font-semibold text-base shadow-fire hover:scale-105 transition-transform"
          >
            {t('viewMenu')}
          </Link>
          <Link
            to="/reserve"
            className="btn-maroon px-8 py-3.5 rounded font-display font-semibold text-base hover:scale-105 transition-transform"
          >
            {t('reserveTable')}
          </Link>
          <Link
            to="/checkout"
            className="border border-gold/60 text-gold px-8 py-3.5 rounded font-display font-semibold text-base hover:bg-gold/10 transition-colors"
          >
            {t('orderOnline')}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float-anim">
          <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-gold/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
