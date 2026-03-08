import { Flame, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import type { MenuItem } from '@/data/menuData';

interface DishCardProps {
  dish: MenuItem;
}

function SpiceFlames({ level }: { level: number }) {
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

export default function DishCard({ dish }: DishCardProps) {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const cartItem = cartItems.find((item) => item.id === dish.id);
  const quantity = cartItem?.quantity ?? 0;
  const spiceLevel = dish.spiceLevel ?? 0;

  const handleDecrement = () => {
    if (quantity === 1) {
      removeFromCart(dish.id);
    } else {
      // updateQuantity is available but we can use removeFromCart + addToCart pattern
      // CartContext has updateQuantity, so let's use it via the context
      removeFromCart(dish.id);
      // re-add with quantity - 1 by adding the item back quantity-1 times
      for (let i = 0; i < quantity - 1; i++) {
        addToCart(dish);
      }
    }
  };

  return (
    <div className="bg-coal-800 border border-coal-700 rounded-xl overflow-hidden shadow-card hover:shadow-premium hover:border-gold-500/40 transition-all duration-300 group flex flex-col">
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
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-white text-base mb-1 leading-snug">
          {dish.name}
        </h3>
        <p className="text-coal-300 text-xs leading-relaxed mb-3 flex-1 line-clamp-3">
          {dish.description}
        </p>

        {/* Price + Spice */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-gold-400 font-bold text-lg">₹{dish.price}</span>
          {spiceLevel > 0 && <SpiceFlames level={spiceLevel} />}
        </div>

        {/* Cart Controls */}
        {quantity === 0 ? (
          <button
            onClick={() => addToCart(dish)}
            className="w-full flex items-center justify-center gap-2 py-2 rounded bg-ember-500 hover:bg-ember-600 text-white font-bold text-sm transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-between bg-coal-700 rounded px-3 py-1.5">
            <button
              onClick={handleDecrement}
              className="w-7 h-7 rounded-full bg-coal-600 hover:bg-ember-500 flex items-center justify-center text-white transition-colors"
              aria-label="Remove one"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-white font-bold text-sm">{quantity}</span>
            <button
              onClick={() => addToCart(dish)}
              className="w-7 h-7 rounded-full bg-coal-600 hover:bg-ember-500 flex items-center justify-center text-white transition-colors"
              aria-label="Add one more"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
