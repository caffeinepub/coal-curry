import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Loader2, UtensilsCrossed, Truck, CreditCard, ArrowLeft } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import SEOHead from "../components/seo/SEOHead";

type Step = "order-type" | "details" | "payment" | "confirmation";
type OrderType = "dine-in" | "takeaway" | "delivery";

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>("order-type");
  const [orderType, setOrderType] = useState<OrderType>("dine-in");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId] = useState(() => `CC${Date.now().toString().slice(-6)}`);

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsProcessing(false);
    clearCart();
    setStep("confirmation");
  };

  if (cartItems.length === 0 && step !== "confirmation") {
    return (
      <div className="pt-20 lg:pt-24 min-h-screen bg-background flex items-center justify-center">
        <SEOHead
          title="Checkout | Coal & Curry"
          noindex={true}
        />
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Your cart is empty.</p>
          <Link
            to="/menu"
            className="px-6 py-3 bg-saffron text-charcoal font-bold rounded-md hover:bg-turmeric transition-colors"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  const steps: Step[] = ["order-type", "details", "payment", "confirmation"];
  const stepIdx = steps.indexOf(step);

  const stepLabels = ["Order Type", "Details", "Payment"];

  return (
    <>
      <SEOHead
        title="Checkout | Coal & Curry"
        noindex={true}
      />
      <div className="pt-20 lg:pt-24 min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-3 mb-8">
            <Link to="/cart" className="text-muted-foreground hover:text-saffron transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-display text-3xl font-bold text-charcoal">Checkout</h1>
          </div>

          {/* Step Indicator */}
          {step !== "confirmation" && (
            <div className="flex items-center gap-2 mb-8">
              {stepLabels.map((label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      i <= stepIdx
                        ? "bg-saffron text-charcoal"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`text-sm hidden sm:inline ${
                      i <= stepIdx ? "text-charcoal font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                  {i < stepLabels.length - 1 && (
                    <div className="w-8 h-px bg-border mx-1" />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Step: Order Type */}
          {step === "order-type" && (
            <div className="space-y-4">
              <h2 className="font-display text-xl font-bold text-charcoal mb-4">
                How would you like your order?
              </h2>
              {[
                {
                  id: "dine-in" as OrderType,
                  label: "Dine In",
                  desc: "Enjoy at our restaurant",
                  icon: <UtensilsCrossed className="w-6 h-6" />,
                },
                {
                  id: "takeaway" as OrderType,
                  label: "Takeaway",
                  desc: "Pick up from restaurant",
                  icon: <CreditCard className="w-6 h-6" />,
                },
                {
                  id: "delivery" as OrderType,
                  label: "Delivery",
                  desc: "Delivered to your door",
                  icon: <Truck className="w-6 h-6" />,
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setOrderType(opt.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    orderType === opt.id
                      ? "border-saffron bg-saffron/5"
                      : "border-border hover:border-saffron/50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      orderType === opt.id
                        ? "bg-saffron text-charcoal"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {opt.icon}
                  </div>
                  <div>
                    <p className="font-bold text-charcoal">{opt.label}</p>
                    <p className="text-sm text-muted-foreground">{opt.desc}</p>
                  </div>
                </button>
              ))}
              <button
                onClick={() => setStep("details")}
                className="w-full py-3 bg-saffron text-charcoal font-bold rounded-md hover:bg-turmeric transition-colors mt-4"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step: Details */}
          {step === "details" && (
            <form onSubmit={handleDetailsSubmit} className="space-y-4">
              <h2 className="font-display text-xl font-bold text-charcoal mb-4">
                Your Details
              </h2>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-saffron"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-saffron"
                />
              </div>
              {orderType === "delivery" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.address}
                      onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                      placeholder="Street address"
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-saffron"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.city}
                        onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                        placeholder="City"
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-saffron"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.pincode}
                        onChange={(e) => setForm((f) => ({ ...f, pincode: e.target.value }))}
                        placeholder="600001"
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-saffron"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Order Summary */}
              <div className="bg-cream rounded-xl p-4 mt-4">
                <h3 className="font-display font-bold text-charcoal mb-3">Order Summary</h3>
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="text-charcoal font-medium">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-border pt-2 flex justify-between font-bold">
                    <span className="text-charcoal">Total</span>
                    <span className="text-saffron font-display">₹{cartTotal}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep("order-type")}
                  className="flex-1 py-3 border-2 border-border text-charcoal font-bold rounded-md hover:border-saffron transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-saffron text-charcoal font-bold rounded-md hover:bg-turmeric transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {/* Step: Payment */}
          {step === "payment" && (
            <form onSubmit={handlePayment} className="space-y-4">
              <h2 className="font-display text-xl font-bold text-charcoal mb-4">
                Payment Method
              </h2>
              {[
                { id: "upi", label: "UPI", desc: "GPay, PhonePe, Paytm" },
                { id: "card", label: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay" },
                { id: "cash", label: "Cash", desc: orderType === "delivery" ? "Cash on delivery" : "Pay at restaurant" },
              ].map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    paymentMethod === method.id
                      ? "border-saffron bg-saffron/5"
                      : "border-border hover:border-saffron/50"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      paymentMethod === method.id
                        ? "border-saffron bg-saffron"
                        : "border-muted-foreground"
                    }`}
                  />
                  <div>
                    <p className="font-bold text-charcoal">{method.label}</p>
                    <p className="text-sm text-muted-foreground">{method.desc}</p>
                  </div>
                </button>
              ))}

              <div className="bg-cream rounded-xl p-4">
                <div className="flex justify-between font-bold text-charcoal">
                  <span>Total to Pay</span>
                  <span className="text-saffron font-display text-xl">₹{cartTotal}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep("details")}
                  className="flex-1 py-3 border-2 border-border text-charcoal font-bold rounded-md hover:border-saffron transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 py-3 bg-saffron text-charcoal font-bold rounded-md hover:bg-turmeric transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay ₹${cartTotal}`
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Step: Confirmation */}
          {step === "confirmation" && (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-2">
                Order Confirmed!
              </h2>
              <p className="text-muted-foreground mb-2">
                Your order <span className="font-bold text-saffron">#{orderId}</span> has been placed.
              </p>
              <p className="text-muted-foreground mb-8">
                {orderType === "delivery"
                  ? "Estimated delivery time: 30–45 minutes."
                  : orderType === "takeaway"
                  ? "Your order will be ready in 20–30 minutes."
                  : "Your order has been sent to the kitchen. Enjoy your meal!"}
              </p>
              <div className="bg-cream rounded-xl p-4 text-left mb-8">
                <h3 className="font-display font-bold text-charcoal mb-3">Order Details</h3>
                <div className="space-y-2">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.name} × {item.quantity}
                        </span>
                        <span className="text-charcoal font-medium">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">Order placed successfully.</p>
                  )}
                </div>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-saffron text-charcoal font-bold rounded-md hover:bg-turmeric transition-colors"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
