import { useState } from "react";
import { useSubmitReservation } from "../hooks/useQueries";
import { CheckCircle, Calendar, Clock, Users, Loader2 } from "lucide-react";
import SEOHead from "../components/seo/SEOHead";

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  seating: string;
  notes: string;
}

const occasions = [
  "Birthday",
  "Anniversary",
  "Business Dinner",
  "Family Gathering",
  "Date Night",
  "Other",
];

const timeSlots = [
  "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
  "22:00",
];

export default function Reservation() {
  const { mutate, isPending } = useSubmitReservation();
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    seating: "Indoor",
    notes: "",
  });
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || form.phone.length < 10)
      e.phone = "Valid phone number required";
    if (!form.date) e.date = "Date is required";
    if (!form.time) e.time = "Time is required";
    if (!form.occasion) e.occasion = "Please select an occasion";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    mutate(
      {
        name: form.name,
        phone: form.phone,
        date: form.date,
        time: form.time,
        guests: parseInt(form.guests, 10),
        occasion: form.occasion,
        seating: form.seating,
        notes: form.notes,
      },
      {
        onSuccess: () => setConfirmed(true),
      }
    );
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-background border rounded-lg px-4 py-2.5 text-foreground text-sm font-body placeholder-muted-foreground focus:outline-none transition-colors ${
      errors[field]
        ? "border-destructive focus:border-destructive"
        : "border-border focus:border-saffron"
    }`;

  const today = new Date().toISOString().split("T")[0];

  if (confirmed) {
    return (
      <main className="min-h-screen bg-background pt-20 lg:pt-24 flex items-center justify-center px-4">
        <SEOHead
          title="Reservation Confirmed | Coal & Curry"
          description="Your table reservation at Coal & Curry has been confirmed."
          noindex={true}
        />
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-warm-lg border border-border">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="font-display text-3xl font-bold text-charcoal mb-2">
            Reservation Confirmed!
          </h2>
          <p className="text-muted-foreground mb-6">
            We look forward to welcoming you at Coal & Curry.
          </p>
          <div className="space-y-3 text-left mb-6">
            {[
              { emoji: "👤", label: "Name", value: form.name },
              { emoji: "📅", label: "Date", value: form.date },
              { emoji: "⏰", label: "Time", value: form.time },
              { emoji: "👥", label: "Guests", value: form.guests },
              { emoji: "🎉", label: "Occasion", value: form.occasion },
              { emoji: "🪑", label: "Seating", value: form.seating },
            ].map(({ emoji, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-cream rounded-lg px-4 py-2.5"
              >
                <span className="text-lg">{emoji}</span>
                <span className="text-muted-foreground text-sm w-20">{label}</span>
                <span className="text-charcoal text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            📱 A confirmation will be sent to{" "}
            <span className="text-saffron font-medium">{form.phone}</span>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-20 lg:pt-24">
      <SEOHead
        title="Book a Table | Coal & Curry South Indian Restaurant"
        description="Reserve your table at Coal & Curry. Choose your date, time, number of guests, and seating preference. Perfect for birthdays, anniversaries, and family gatherings."
        canonical="https://coalandcurry.com/reservation"
        ogType="website"
        ogUrl="https://coalandcurry.com/reservation"
        ogImage="/assets/generated/restaurant-interior.dim_1200x800.png"
      />

      {/* Hero */}
      <div className="bg-charcoal py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-saffron font-medium text-sm uppercase tracking-widest">
            Book Your Table
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream mt-2 mb-4">
            Reserve a Table
          </h1>
          <p className="text-cream/60 max-w-xl mx-auto">
            Secure your spot at Coal & Curry. We'll make your dining experience unforgettable.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { icon: Calendar, label: "Open 7 Days", sub: "Mon–Sun" },
            { icon: Clock, label: "Breakfast to Dinner", sub: "7 AM – 11 PM" },
            { icon: Users, label: "Groups Welcome", sub: "Up to 50 guests" },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="bg-white rounded-xl p-4 text-center shadow-sm border border-border"
            >
              <Icon className="w-5 h-5 text-saffron mx-auto mb-2" />
              <p className="text-charcoal font-medium text-sm">{label}</p>
              <p className="text-muted-foreground text-xs">{sub}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-warm border border-border space-y-5"
        >
          <h2 className="font-display text-2xl font-bold text-charcoal mb-2">
            Booking Details
          </h2>
          <div className="h-px bg-saffron/20" />

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                className={inputClass("name")}
              />
              {errors.name && (
                <p className="text-destructive text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+91 98765 43210"
                className={inputClass("phone")}
              />
              {errors.phone && (
                <p className="text-destructive text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Date *
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                min={today}
                className={inputClass("date")}
              />
              {errors.date && (
                <p className="text-destructive text-xs mt-1">{errors.date}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Time *
              </label>
              <select
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                className={inputClass("time")}
              >
                <option value="">Select time</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="text-destructive text-xs mt-1">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Guests & Occasion */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Number of Guests
              </label>
              <select
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                className={inputClass("guests")}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={String(n)}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Occasion *
              </label>
              <select
                value={form.occasion}
                onChange={(e) => update("occasion", e.target.value)}
                className={inputClass("occasion")}
              >
                <option value="">Select occasion</option>
                {occasions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              {errors.occasion && (
                <p className="text-destructive text-xs mt-1">{errors.occasion}</p>
              )}
            </div>
          </div>

          {/* Seating */}
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Seating Preference
            </label>
            <div className="flex gap-3">
              {["Indoor", "Outdoor", "Private Dining"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => update("seating", s)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-medium border-2 transition-colors ${
                    form.seating === s
                      ? "border-saffron bg-saffron/10 text-saffron"
                      : "border-border text-muted-foreground hover:border-saffron/50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Special Requests
            </label>
            <textarea
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Any dietary requirements, allergies, or special arrangements..."
              rows={3}
              className={`${inputClass("notes")} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3.5 bg-saffron text-charcoal font-bold rounded-lg hover:bg-turmeric transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Confirming Reservation...
              </>
            ) : (
              "Confirm Reservation"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
