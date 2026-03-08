import { Link } from '@tanstack/react-router';
import { Flame } from 'lucide-react';
import { menuItems } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';

const FEATURED_IDS = ['veg-2', 'coal-1', 'coal-2', 'biryani-1'];

function SpiceLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((i) => (
        <Flame
          key={i}
          className={`w-3.5 h-3.5 ${i <= level ? 'text-ember-400' : 'text-coal-600'}`}
        />
      ))}
    </div>
  );
}

export default function SignatureDishes() {
  const { addToCart } = useCart();
  const featured = FEATURED_IDS
    .map((id) => menuItems.find((d) => d.id === id))
    .filter(Boolean) as typeof menuItems;

  return (
    <section className="py-20 bg-coal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-2">
            Chef's Picks
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Signature Dishes
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto" />
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((dish) => (
            <div
              key={dish.id}
              className="bg-coal-800 border border-coal-700 rounded-xl overflow-hidden shadow-card hover:shadow-premium hover:border-gold-500/50 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Veg/Non-veg badge */}
                <div className="absolute top-2 left-2">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      dish.isVeg
                        ? 'bg-green-800 text-green-200'
                        : 'bg-red-900 text-red-200'
                    }`}
                  >
                    {dish.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
                  </span>
                </div>
                {dish.isSignature && (
                  <div className="absolute top-2 right-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gold-500 text-coal-900">
                      ★ Signature
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display font-bold text-white text-base mb-1 leading-snug">
                  {dish.name}
                </h3>
                <p className="text-coal-300 text-xs leading-relaxed mb-3 line-clamp-2">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gold-400 font-bold text-base">₹{dish.price}</span>
                    <div className="mt-1">
                      <SpiceLevel level={dish.spiceLevel ?? 0} />
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(dish)}
                    className="px-3 py-1.5 rounded bg-ember-500 hover:bg-ember-600 text-white text-xs font-bold transition-colors"
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-coal-900 font-bold text-sm transition-colors"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
