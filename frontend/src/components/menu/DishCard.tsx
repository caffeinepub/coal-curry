import { ShoppingCart, Flame } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import type { Dish } from '@/data/menuData';

interface DishCardProps {
  dish: Dish;
}

function SpiceLevel({ level }: { level: number }) {
  if (level === 0) return <span className="text-cream/40 text-xs font-sans">No Spice</span>;
  return (
    <div className="flex gap-0.5 items-center">
      {[1, 2, 3, 4, 5].map(i => (
        <Flame
          key={i}
          size={12}
          className={i <= level ? 'text-red-500 fill-red-500' : 'text-red-500/20'}
        />
      ))}
    </div>
  );
}

export default function DishCard({ dish }: DishCardProps) {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const handleAdd = () => {
    addToCart({
      id: dish.id,
      name: dish.name,
      price: dish.priceDisplay,
      imageUrl: dish.imageUrl,
      category: dish.category,
    });
  };

  return (
    <div className="card-smoky rounded-lg overflow-hidden group hover:border-gold/40 transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
      <div className="relative overflow-hidden h-44">
        <img
          src={dish.imageUrl}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal/70 to-transparent" />
        {dish.isSpecial && (
          <span className="absolute top-2 right-2 bg-gold text-coal text-xs font-bold px-2 py-0.5 rounded">
            SPECIAL
          </span>
        )}
        <span className={`absolute top-2 left-2 text-xs px-2 py-0.5 rounded font-sans ${dish.isVeg ? 'bg-green-800/80 text-green-300' : 'bg-red-900/80 text-red-300'}`}>
          {dish.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display text-gold font-semibold text-base mb-1 leading-tight">{dish.name}</h3>
        <p className="text-cream/60 text-xs font-sans leading-relaxed mb-3 flex-1">{dish.description}</p>
        <div className="flex items-center justify-between mb-3">
          <SpiceLevel level={dish.spiceLevel} />
          <span className="font-display text-gold font-bold text-base">{dish.priceDisplay}</span>
        </div>
        <button
          onClick={handleAdd}
          className="btn-maroon w-full py-2 rounded text-sm font-medium font-sans flex items-center justify-center gap-2"
        >
          <ShoppingCart size={14} />
          {t('addToCart')}
        </button>
      </div>
    </div>
  );
}
