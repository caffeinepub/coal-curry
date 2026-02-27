import { Link } from "@tanstack/react-router";
import { ShoppingCart, Flame, Leaf } from "lucide-react";
import { useCart } from "../../contexts/CartContext";
import { menuItems } from "../../data/menuData";

const signatureIds = ["d2", "c1", "sf1", "ds2"]; // Ghee Roast Dosa, Chettinad Chicken, Fish Curry, Jigarthanda

export default function SignatureDishes() {
  const { addToCart } = useCart();
  const dishes = menuItems.filter((item) => signatureIds.includes(item.id));

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-saffron font-medium text-sm uppercase tracking-widest">Chef's Picks</span>
          <h2 className="font-display text-4xl font-bold text-charcoal mt-2 mb-4">
            Signature Dishes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our most-loved creations — crafted with generations of culinary wisdom and the finest South Indian spices.
          </p>
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Veg/Non-veg badge */}
                <div className="absolute top-3 left-3">
                  {dish.isVeg ? (
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-white/90 text-green-700 text-xs font-bold rounded-full border border-green-500">
                      <Leaf className="w-3 h-3" /> Veg
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-white/90 text-red-700 text-xs font-bold rounded-full border border-red-500">
                      <span className="w-2 h-2 rounded-full bg-red-600 inline-block" /> Non-Veg
                    </span>
                  )}
                </div>
                {/* Signature badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 bg-saffron text-charcoal text-xs font-bold rounded-full">
                    ⭐ Signature
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-charcoal mb-1">{dish.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{dish.description}</p>

                {/* Spice Level */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Flame
                      key={i}
                      className={`w-3.5 h-3.5 ${i < dish.spiceLevel ? "text-deep-red" : "text-muted-foreground/30"}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-saffron">₹{dish.price}</span>
                  <button
                    onClick={() => addToCart(dish)}
                    className="flex items-center gap-1.5 px-3 py-2 bg-saffron text-charcoal text-sm font-bold rounded-md hover:bg-turmeric transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add
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
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-saffron text-saffron font-bold rounded-md hover:bg-saffron hover:text-charcoal transition-colors"
          >
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
