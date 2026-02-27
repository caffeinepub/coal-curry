import { Link } from "@tanstack/react-router";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import SEOHead from "../components/seo/SEOHead";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  return (
    <>
      <SEOHead
        title="Your Cart | Coal & Curry"
        description="Review your order from Coal & Curry."
        robots="noindex, nofollow"
      />

      <div className="pt-20 lg:pt-24 min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="font-display text-3xl font-bold text-charcoal mb-8">Your Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold text-charcoal mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Add some delicious South Indian dishes to get started!</p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-charcoal font-bold rounded-md hover:bg-turmeric transition-colors"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-border flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display font-bold text-charcoal">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{item.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full bg-saffron/10 text-saffron hover:bg-saffron hover:text-charcoal transition-colors flex items-center justify-center"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-bold text-charcoal w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full bg-saffron text-charcoal hover:bg-turmeric transition-colors flex items-center justify-center"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="font-display font-bold text-saffron">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={clearCart}
                  className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear all items
                </button>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border sticky top-24">
                  <h2 className="font-display text-xl font-bold text-charcoal mb-4">Order Summary</h2>
                  <div className="space-y-2 mb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.name} × {item.quantity}</span>
                        <span className="text-charcoal font-medium">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between font-bold text-charcoal">
                      <span>Total</span>
                      <span className="text-saffron font-display text-xl">₹{cartTotal}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Taxes and delivery charges may apply</p>
                  </div>
                  <Link
                    to="/checkout"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-saffron text-charcoal font-bold rounded-md hover:bg-turmeric transition-colors"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
