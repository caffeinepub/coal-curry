import { Link } from "@tanstack/react-router";
import { ChevronDown, UtensilsCrossed, CalendarCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-coal-curry.dim_1920x1080.png"
          alt="Coal and curry themed background with glowing charcoal embers and spices"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-saffron/20 border border-saffron/40 rounded-full text-saffron text-sm font-medium mb-6 backdrop-blur-sm">
          <span>🌶️</span>
          <span>Authentic South Indian Multi-Cuisine</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Coal &{" "}
          <span className="text-saffron">Curry</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-white/90 font-body mb-4 leading-relaxed">
          Authentic South Indian Multi-Cuisine Experience
        </p>
        <p className="text-base text-white/75 font-body mb-10 max-w-2xl mx-auto">
          From crispy Ghee Roast Dosas to fiery Chettinad Curries, Filter Coffee to Payasam — 
          every dish tells a story of tradition, spice, and love.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-saffron text-charcoal font-bold text-lg rounded-md hover:bg-turmeric transition-all hover:scale-105 shadow-warm"
          >
            <UtensilsCrossed className="w-5 h-5" />
            Explore Menu
          </Link>
          <Link
            to="/reservation"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-md hover:bg-white hover:text-charcoal transition-all hover:scale-105"
          >
            <CalendarCheck className="w-5 h-5" />
            Book a Table
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "50+", label: "Dishes" },
            { value: "9", label: "Categories" },
            { value: "100%", label: "Authentic" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-saffron">{stat.value}</p>
              <p className="text-sm text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
}
