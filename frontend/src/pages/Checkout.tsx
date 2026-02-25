import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { useCart } from '@/context/CartContext';
import SEOHead from '@/components/seo/SEOHead';

type PaymentMethod = 'upi' | 'card' | 'netbanking' | 'cod';
type OrderType = 'delivery' | 'takeaway';

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState<PaymentMethod>('upi');
  const [confirmed, setConfirmed] = useState(false);

  const deliveryFee = orderType === 'delivery' ? 49 : 0;
  const total = subtotal + deliveryFee;

  const handleOrder = () => {
    clearCart();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <main className="min-h-screen bg-coal pt-20 flex items-center justify-center px-4">
        <SEOHead
          title="Order Confirmed | Coal & Curry"
          description="Your order at Coal & Curry has been confirmed."
          noindex={true}
        />
        <div className="card-smoky rounded-2xl p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="font-display text-gold text-3xl font-bold mb-2">Order Confirmed!</h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="text-cream/60 font-sans mb-6">
            Your order has been placed successfully. We'll prepare your food with love and fire!
          </p>
          <Link to="/menu" className="btn-gold px-8 py-3 rounded font-display font-semibold inline-block">
            Order More
          </Link>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-coal pt-20 flex items-center justify-center px-4">
        <SEOHead
          title="Checkout | Coal & Curry"
          description="Complete your order at Coal & Curry restaurant."
          noindex={true}
        />
        <div className="text-center">
          <p className="text-cream/60 font-sans mb-4">Your cart is empty.</p>
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
        title="Checkout | Coal & Curry"
        description="Complete your order at Coal & Curry restaurant. Choose delivery or takeaway, enter your address, and select your payment method."
        noindex={true}
        ogType="website"
        ogImage="/assets/generated/coal-curry-logo-circular.dim_512x512.png"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="section-heading text-4xl mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Type */}
            <div className="card-smoky rounded-xl p-6">
              <h2 className="font-display text-gold text-xl font-bold mb-4">Order Type</h2>
              <div className="grid grid-cols-2 gap-3">
                {(['delivery', 'takeaway'] as OrderType[]).map(type => (
                  <button
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`py-3 rounded-lg border font-sans font-medium text-sm capitalize transition-all ${
                      orderType === type
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-gold/20 text-cream/60 hover:border-gold/40'
                    }`}
                  >
                    {type === 'delivery' ? '🛵 Delivery' : '🏃 Takeaway'}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            {orderType === 'delivery' && (
              <div className="card-smoky rounded-xl p-6">
                <h2 className="font-display text-gold text-xl font-bold mb-4">Delivery Address</h2>
                <textarea
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder="Enter your full delivery address..."
                  rows={3}
                  className="w-full bg-coal border border-gold/30 rounded-lg px-4 py-2.5 text-cream text-sm font-sans placeholder-cream/30 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
            )}

            {/* Payment Method */}
            <div className="card-smoky rounded-xl p-6">
              <h2 className="font-display text-gold text-xl font-bold mb-4">Payment Method</h2>
              <div className="space-y-3">
                {([
                  { value: 'upi', label: '📱 UPI / QR Code' },
                  { value: 'card', label: '💳 Credit / Debit Card' },
                  { value: 'netbanking', label: '🏦 Net Banking' },
                  { value: 'cod', label: '💵 Cash on Delivery' },
                ] as { value: PaymentMethod; label: string }[]).map(({ value, label }) => (
                  <label key={value} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="payment"
                      value={value}
                      checked={payment === value}
                      onChange={() => setPayment(value)}
                      className="accent-gold"
                    />
                    <span className={`font-sans text-sm transition-colors ${payment === value ? 'text-gold' : 'text-cream/60 group-hover:text-cream/80'}`}>
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* External Order Options */}
            <div className="card-smoky rounded-xl p-6">
              <h2 className="font-display text-gold text-xl font-bold mb-2">Order via Other Platforms</h2>
              <p className="text-cream/50 font-sans text-sm mb-4">You can also order through these platforms:</p>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent('I would like to place an order from Coal & Curry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white py-2.5 rounded-lg font-sans text-sm font-medium transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="https://swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white py-2.5 rounded-lg font-sans text-sm font-medium transition-colors"
                >
                  Swiggy
                </a>
                <a
                  href="https://zomato.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-red-600 hover:bg-red-500 text-white py-2.5 rounded-lg font-sans text-sm font-medium transition-colors"
                >
                  Zomato
                </a>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="card-smoky rounded-xl p-6 sticky top-24">
              <h2 className="font-display text-gold text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex items-center justify-between text-sm">
                    <span className="text-cream/70 font-sans truncate flex-1 mr-2">{item.name} × {item.quantity}</span>
                    <span className="text-cream font-sans flex-shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gold/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-cream/60 font-sans">Subtotal</span>
                  <span className="text-cream font-sans">₹ {subtotal.toFixed(0)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between text-sm">
                    <span className="text-cream/60 font-sans">Delivery</span>
                    <span className="text-cream font-sans">₹ {deliveryFee}</span>
                  </div>
                )}
                <div className="gold-divider my-2" />
                <div className="flex justify-between">
                  <span className="font-display text-gold font-bold">Total</span>
                  <span className="font-display text-gold font-bold">₹ {total.toFixed(0)}</span>
                </div>
              </div>
              <button
                onClick={handleOrder}
                className="btn-maroon w-full py-3.5 rounded-xl font-display font-bold text-base mt-6"
              >
                🔥 Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
