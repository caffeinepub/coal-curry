import { Link } from '@tanstack/react-router';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import SEOHead from '@/components/seo/SEOHead';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-coal pt-20 flex items-center justify-center">
        <SEOHead
          title="Your Cart | Coal & Curry"
          description="Your shopping cart at Coal & Curry restaurant."
          noindex={true}
        />
        <div className="text-center px-4">
          <ShoppingBag size={64} className="text-gold/30 mx-auto mb-4" />
          <h2 className="font-display text-gold text-3xl font-bold mb-2">Your Cart is Empty</h2>
          <p className="text-cream/60 font-sans mb-6">Add some delicious dishes to get started!</p>
          <Link to="/menu" className="btn-gold px-8 py-3 rounded font-display font-semibold inline-block">
            Browse Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-coal pt-20">
      <SEOHead
        title="Your Cart | Coal & Curry"
        description="Review your selected dishes and proceed to checkout at Coal & Curry restaurant."
        noindex={true}
        ogType="website"
        ogImage="/assets/generated/coal-curry-logo-circular.dim_512x512.png"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="section-heading text-4xl">Your Cart</h1>
          <button
            onClick={clearCart}
            className="text-cream/40 hover:text-red-400 text-sm font-sans transition-colors flex items-center gap-1"
          >
            <Trash2 size={14} /> Clear All
          </button>
        </div>

        <div className="space-y-4 mb-8">
          {items.map(item => (
            <div key={item.id} className="card-smoky rounded-xl p-4 flex items-center gap-4">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-gold font-semibold text-base truncate">{item.name}</h3>
                <p className="text-cream/50 text-xs font-sans">{item.category}</p>
                <p className="text-gold font-bold font-sans mt-1">{item.price}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="text-cream font-sans font-medium w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-cream/30 hover:text-red-400 transition-colors ml-2 flex-shrink-0"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="card-smoky rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-cream/60 font-sans">Subtotal</span>
            <span className="text-cream font-sans">₹ {subtotal.toFixed(0)}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-cream/60 font-sans">Delivery</span>
            <span className="text-cream/60 font-sans text-sm">Calculated at checkout</span>
          </div>
          <div className="gold-divider my-4" />
          <div className="flex items-center justify-between mb-6">
            <span className="font-display text-gold text-xl font-bold">Total</span>
            <span className="font-display text-gold text-xl font-bold">₹ {subtotal.toFixed(0)}</span>
          </div>
          <Link
            to="/checkout"
            className="btn-maroon w-full py-3.5 rounded-xl font-display font-bold text-base text-center block"
          >
            Proceed to Checkout →
          </Link>
        </div>
      </div>
    </main>
  );
}
