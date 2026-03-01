import { ShoppingCart, Flame, Leaf, Plus, Minus, UtensilsCrossed } from "lucide-react";
import { MenuItem } from "../../data/menuData";
import { useCart } from "../../contexts/CartContext";

interface DishCardProps {
  dish: MenuItem;
}

function spiceLevelLabel(level: number): string {
  if (level <= 1) return "Mild";
  if (level <= 2) return "Medium";
  if (level <= 3) return "Spicy";
  if (level <= 4) return "Hot";
  return "Extra Hot";
}

export default function DishCard({ dish }: DishCardProps) {
  const { addToCart, cartItems, updateQuantity } = useCart();
  const cartItem = cartItems.find((i) => i.id === dish.id);
  const quantity = cartItem?.quantity ?? 0;
  const spiceLevel = dish.spiceLevel ?? 0;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-warm transition-all hover:-translate-y-0.5 group border border-border">
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-cream">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <div className="w-full h-full hidden flex-col items-center justify-center gap-2 bg-charcoal/10 absolute inset-0">
          <UtensilsCrossed className="w-10 h-10 text-saffron/40" />
          <span className="text-xs text-muted-foreground text-center px-2 line-clamp-2">{dish.name}</span>
        </div>

        {/* Veg/Non-veg */}
        <div className="absolute top-2 left-2">
          {dish.isVeg ? (
            <span className="flex items-center gap-1 px-2 py-0.5 bg-white/95 text-green-700 text-xs font-bold rounded-full border border-green-500">
              <Leaf className="w-3 h-3" /> Veg
            </span>
          ) : (
            <span className="flex items-center gap-1 px-2 py-0.5 bg-white/95 text-red-700 text-xs font-bold rounded-full border border-red-500">
              <span className="w-2 h-2 rounded-full bg-red-600 inline-block" /> Non-Veg
            </span>
          )}
        </div>

        {/* Signature */}
        {dish.isSignature && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-0.5 bg-saffron text-charcoal text-xs font-bold rounded-full">
              ⭐ Signature
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-base font-bold text-charcoal mb-1 leading-tight">{dish.name}</h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed">{dish.description}</p>

        {/* Spice Level */}
        {spiceLevel > 0 && (
          <div className="flex items-center gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Flame
                key={i}
                className={`w-3 h-3 ${i < spiceLevel ? "text-deep-red" : "text-muted-foreground/20"}`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              {spiceLevelLabel(spiceLevel)}
            </span>
          </div>
        )}

        {/* Price & Cart */}
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-bold text-saffron">₹{dish.price}</span>
          {quantity === 0 ? (
            <button
              onClick={() => addToCart(dish)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-saffron text-charcoal text-sm font-bold rounded-md hover:bg-turmeric transition-colors"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(dish.id, quantity - 1)}
                className="w-7 h-7 rounded-full bg-saffron/10 text-saffron hover:bg-saffron hover:text-charcoal transition-colors flex items-center justify-center"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-bold text-charcoal w-5 text-center">{quantity}</span>
              <button
                onClick={() => addToCart(dish)}
                className="w-7 h-7 rounded-full bg-saffron text-charcoal hover:bg-turmeric transition-colors flex items-center justify-center"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
