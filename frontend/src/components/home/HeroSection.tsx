import { Link } from '@tanstack/react-router';
import { ChevronDown, Star, Users, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-coal-curry.dim_1920x1080.png')" }}
      />

      {/* Strong dark overlay for text readability */}
      <div className="absolute inset-0 bg-coal-950/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-coal-950/60 via-transparent to-coal-950/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ember-500/30 border border-ember-500/50 mb-6">
          <span className="text-gold-300 text-sm font-semibold tracking-wide" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
            🔥 Authentic Chettinad Cuisine
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.95)' }}
        >
          Coal &amp; Curry
        </h1>

        {/* Tagline */}
        <p
          className="font-display text-xl sm:text-2xl text-gold-300 mb-4 italic"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
        >
          Where Fire Meets Flavour
        </p>

        {/* Description */}
        <p
          className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.85)' }}
        >
          Experience the bold, smoky essence of Neyveli's finest Chettinad cooking — slow-charcoal-grilled meats, aromatic biryanis, and fiery curries crafted from generations-old recipes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/menu"
            className="px-8 py-3.5 rounded bg-ember-500 hover:bg-ember-600 text-white font-bold text-base transition-colors shadow-glow-ember"
          >
            Explore Our Menu
          </Link>
          <Link
            to="/reservation"
            className="px-8 py-3.5 rounded border-2 border-gold-400 text-gold-300 hover:bg-gold-400 hover:text-coal-900 font-bold text-base transition-colors"
          >
            Reserve a Table
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: Star, value: '4.9★', label: 'Rating' },
            { icon: Users, value: '10,000+', label: 'Happy Guests' },
            { icon: Award, value: '15+', label: 'Years of Craft' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-2xl font-bold text-white"
                style={{ textShadow: '0 1px 6px rgba(0,0,0,0.85)' }}
              >
                {value}
              </div>
              <div
                className="text-sm text-white/80 font-medium"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span
          className="text-xs text-white/70 font-medium tracking-widest uppercase"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
        >
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-white/70" />
      </div>
    </section>
  );
}
