import { useState } from 'react';
import { useSubmitReservation } from '@/hooks/useQueries';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle, Calendar, Clock, Users } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

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

const occasions = ['Birthday', 'Anniversary', 'Business Dinner', 'Family Gathering', 'Date Night', 'Other'];

export default function Reservation() {
  const { t } = useLanguage();
  const { mutate, isPending } = useSubmitReservation();
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', date: '', time: '',
    guests: '2', occasion: '', seating: 'Indoor', notes: '',
  });
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || form.phone.length < 10) e.phone = 'Valid phone number required';
    if (!form.date) e.date = 'Date is required';
    if (!form.time) e.time = 'Time is required';
    if (!form.occasion) e.occasion = 'Please select an occasion';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    mutate({
      name: form.name,
      phone: form.phone,
      date: form.date,
      time: form.time,
      guests: BigInt(parseInt(form.guests)),
      occasion: form.occasion,
      seating: form.seating,
      notes: form.notes,
    }, {
      onSuccess: () => setConfirmed(true),
    });
  };

  const update = (field: keyof FormData, value: string) => {
    setForm(f => ({ ...f, [field]: value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }));
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-coal border rounded-lg px-4 py-2.5 text-cream text-sm font-sans placeholder-cream/30 focus:outline-none transition-colors ${
      errors[field] ? 'border-red-500 focus:border-red-400' : 'border-gold/30 focus:border-gold'
    }`;

  if (confirmed) {
    return (
      <main className="min-h-screen bg-coal pt-20 flex items-center justify-center px-4">
        <SEOHead
          title="Reservation Confirmed | Coal & Curry"
          description="Your table reservation at Coal & Curry, Neyveli has been confirmed."
          noindex={true}
        />
        <div className="card-smoky rounded-2xl p-8 max-w-md w-full text-center">
          <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
          <h2 className="font-display text-gold text-3xl font-bold mb-2">Reservation Confirmed!</h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <div className="space-y-3 text-left mb-6">
            {[
              { icon: '👤', label: 'Name', value: form.name },
              { icon: '📅', label: 'Date', value: form.date },
              { icon: '⏰', label: 'Time', value: form.time },
              { icon: '👥', label: 'Guests', value: form.guests },
              { icon: '🎉', label: 'Occasion', value: form.occasion },
              { icon: '🪑', label: 'Seating', value: form.seating },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 bg-coal/50 rounded-lg px-4 py-2">
                <span>{icon}</span>
                <span className="text-cream/50 font-sans text-sm w-20">{label}</span>
                <span className="text-cream font-sans text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
          <p className="text-cream/50 font-sans text-sm">
            📱 An SMS confirmation will be sent to <span className="text-gold">{form.phone}</span>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-coal pt-20">
      <SEOHead
        title="Reserve a Table | Coal & Curry Restaurant Neyveli"
        description="Book your table at Coal & Curry, Neyveli. Choose your date, time, number of guests, and seating preference. Perfect for birthdays, anniversaries, family gatherings, and special occasions."
        canonical="https://coalandcurry.com/reservation"
        ogType="website"
        ogUrl="https://coalandcurry.com/reservation"
        ogImage="/assets/generated/restaurant-interior.dim_1200x800.png"
      />

      {/* Hero */}
      <div className="relative py-16 bg-smoky/30 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Book Your Table</p>
          <h1 className="section-heading text-5xl sm:text-6xl mb-4">Reserve a Table</h1>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="text-cream/60 font-sans max-w-xl mx-auto">
            Secure your spot at Coal & Curry. We'll make your dining experience unforgettable.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { icon: Calendar, label: 'Open 7 Days', sub: 'Mon–Sun' },
            { icon: Clock, label: 'Lunch & Dinner', sub: '11 AM – 11 PM' },
            { icon: Users, label: 'Groups Welcome', sub: 'Up to 50 guests' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="card-smoky rounded-xl p-4 text-center">
              <Icon size={20} className="text-gold mx-auto mb-2" />
              <p className="text-cream font-sans text-sm font-medium">{label}</p>
              <p className="text-cream/40 font-sans text-xs">{sub}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card-smoky rounded-2xl p-8 space-y-5">
          <h2 className="font-display text-gold text-2xl font-bold mb-2">Booking Details</h2>
          <div className="gold-divider mb-6" />

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gold text-sm font-sans font-medium mb-1.5">Full Name *</label>
              <input type="text" value={form.name} onChange={e => update('name', e.target.value)}
                placeholder="Your name" className={inputClass('name')} />
              {errors.name && <p className="text-red-400 text-xs mt-1 font-sans">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gold text-sm font-sans font-medium mb-1.5">Phone Number *</label>
              <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)}
                placeholder="+91 98765 43210" className={inputClass('phone')} />
              {errors.phone && <p className="text-red-400 text-xs mt-1 font-sans">{errors.phone}</p>}
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gold text-sm font-sans font-medium mb-1.5">Date *</label>
              <input type="date" value={form.date} onChange={e => update('date', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className={inputClass('date')} />
              {errors.date && <p className="text-red-400 text-xs mt-1 font-sans">{errors.date}</p>}
            </div>
            <div>
              <label className="block text-gold text-sm font-sans font-medium mb-1.5">Time *</label>
              <input type="time" value={form.time} onChange={e => update('time', e.target.value)}
                className={inputClass('time')} />
              {errors.time && <p className="text-red-400 text-xs mt-1 font-sans">{errors.time}</p>}
            </div>
          </div>

          {/* Guests & Occasion */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gold text-sm font-sans font-medium mb-1.5">Number of Guests *</label>
              <select value={form.guests} onChange={e => update('guests', e.target.value)}
                className={`${inputClass('guests')} appearance-none`}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
                  <option key={n} value={n} className="bg-coal">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
                <option value="21" className="bg-coal">20+ Guests</option>
              </select>
            </div>
            <div>
              <label className="block text-gold text-sm font-sans font-medium mb-1.5">Occasion *</label>
              <select value={form.occasion} onChange={e => update('occasion', e.target.value)}
                className={`${inputClass('occasion')} appearance-none`}>
                <option value="" className="bg-coal">Select occasion</option>
                {occasions.map(o => (
                  <option key={o} value={o} className="bg-coal">{o}</option>
                ))}
              </select>
              {errors.occasion && <p className="text-red-400 text-xs mt-1 font-sans">{errors.occasion}</p>}
            </div>
          </div>

          {/* Seating */}
          <div>
            <label className="block text-gold text-sm font-sans font-medium mb-2">Seating Preference</label>
            <div className="grid grid-cols-2 gap-3">
              {['Indoor', 'Outdoor'].map(type => (
                <button
                  key={type}
                  type="button"
                  onClick={() => update('seating', type)}
                  className={`py-3 rounded-lg border font-sans font-medium text-sm transition-all ${
                    form.seating === type
                      ? 'border-gold bg-gold/10 text-gold'
                      : 'border-gold/20 text-cream/60 hover:border-gold/40'
                  }`}
                >
                  {type === 'Indoor' ? '🏠 Indoor' : '🌿 Outdoor'}
                </button>
              ))}
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-gold text-sm font-sans font-medium mb-1.5">Special Requests</label>
            <textarea
              value={form.notes}
              onChange={e => update('notes', e.target.value)}
              placeholder="Any dietary requirements, special arrangements, or notes..."
              rows={3}
              className="w-full bg-coal border border-gold/30 rounded-lg px-4 py-2.5 text-cream text-sm font-sans placeholder-cream/30 focus:outline-none focus:border-gold transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="btn-maroon w-full py-4 rounded-xl font-display font-bold text-base disabled:opacity-50 transition-opacity"
          >
            {isPending ? 'Confirming...' : `🔥 ${t('confirmReservation')}`}
          </button>

          <p className="text-center text-cream/30 text-xs font-sans">
            📱 SMS confirmation will be sent to your phone number after booking.
          </p>
        </form>
      </div>
    </main>
  );
}
