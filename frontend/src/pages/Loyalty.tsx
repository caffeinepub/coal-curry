import { useState } from 'react';
import { Star, Gift, Trophy, Zap } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

const tiers = [
  { name: 'Coal', points: '0–499', color: 'text-cream/60', bg: 'bg-smoky', icon: '⚫' },
  { name: 'Ember', points: '500–1499', color: 'text-orange-400', bg: 'bg-orange-900/30', icon: '🟠' },
  { name: 'Flame', points: '1500–2999', color: 'text-gold', bg: 'bg-gold/10', icon: '🔥' },
  { name: 'Inferno', points: '3000+', color: 'text-red-400', bg: 'bg-red-900/20', icon: '💎' },
];

const benefits = [
  { icon: Star, title: 'Earn Points', desc: '1 point for every ₹10 spent on all orders' },
  { icon: Gift, title: 'Redeem Rewards', desc: 'Use points for free dishes and exclusive discounts' },
  { icon: Trophy, title: 'Tier Benefits', desc: 'Unlock special perks as you climb the loyalty tiers' },
  { icon: Zap, title: 'Birthday Bonus', desc: 'Double points on your birthday month' },
];

export default function Loyalty() {
  const [phone, setPhone] = useState('');
  const [enrolled, setEnrolled] = useState(false);
  const [error, setError] = useState('');

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || phone.length < 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    setError('');
    setEnrolled(true);
  };

  return (
    <main className="min-h-screen bg-coal pt-20">
      <SEOHead
        title="Loyalty Program | Coal & Curry Neyveli – Earn Points & Rewards"
        description="Join the Coal & Curry loyalty program in Neyveli. Earn 1 point for every ₹10 spent, unlock tier rewards from Coal to Inferno, redeem points for free dishes, and enjoy birthday bonuses."
        canonical="https://coalandcurry.com/loyalty"
        ogType="website"
        ogUrl="https://coalandcurry.com/loyalty"
        ogImage="/assets/generated/coal-curry-logo-circular.dim_512x512.png"
      />

      {/* Hero */}
      <div className="relative py-16 bg-smoky/30 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Rewards Program</p>
          <h1 className="section-heading text-5xl sm:text-6xl mb-4">Loyalty Program</h1>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="text-cream/60 font-sans max-w-xl mx-auto">
            Earn points with every meal and unlock exclusive rewards. The more you dine, the more you earn.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-smoky rounded-xl p-5 text-center hover:border-gold/40 transition-colors">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-gold font-semibold text-base mb-1">{title}</h3>
              <p className="text-cream/60 font-sans text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div className="mb-16">
          <h2 className="section-heading text-3xl text-center mb-8">Loyalty Tiers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map(tier => (
              <div key={tier.name} className={`${tier.bg} border border-gold/10 rounded-xl p-5 text-center`}>
                <div className="text-3xl mb-2">{tier.icon}</div>
                <h3 className={`font-display font-bold text-xl mb-1 ${tier.color}`}>{tier.name}</h3>
                <p className="text-cream/50 font-sans text-xs">{tier.points} pts</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enrollment */}
        <div className="max-w-md mx-auto">
          {enrolled ? (
            <div className="card-smoky rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="font-display text-gold text-2xl font-bold mb-2">Welcome to the Club!</h2>
              <div className="gold-divider w-24 mx-auto mb-6" />
              <div className="bg-coal/60 rounded-xl p-5 mb-4">
                <p className="text-cream/50 font-sans text-xs uppercase tracking-wider mb-1">Phone Number</p>
                <p className="font-display text-gold text-xl font-bold">{phone}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-coal/40 rounded-lg p-3">
                  <p className="text-cream/40 font-sans text-xs mb-1">Points Balance</p>
                  <p className="font-display text-gold text-2xl font-bold">0</p>
                </div>
                <div className="bg-coal/40 rounded-lg p-3">
                  <p className="text-cream/40 font-sans text-xs mb-1">Current Tier</p>
                  <p className="font-display text-gold text-lg font-bold">⚫ Coal</p>
                </div>
              </div>
              <p className="text-cream/40 font-sans text-xs">
                Start earning points on your next visit!
              </p>
            </div>
          ) : (
            <div className="card-smoky rounded-2xl p-8">
              <h2 className="font-display text-gold text-2xl font-bold mb-2 text-center">Join Now</h2>
              <p className="text-cream/60 font-sans text-sm text-center mb-6">
                Enter your phone number to enroll and start earning points today.
              </p>
              <form onSubmit={handleEnroll} className="space-y-4">
                <div>
                  <label className="block text-gold text-sm font-sans font-medium mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-coal border border-gold/30 rounded-lg px-4 py-3 text-cream text-sm font-sans placeholder-cream/30 focus:outline-none focus:border-gold transition-colors"
                  />
                  {error && <p className="text-red-400 text-xs mt-1 font-sans">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="btn-gold w-full py-3.5 rounded-xl font-display font-bold text-base"
                >
                  🔥 Enroll Now — It's Free!
                </button>
              </form>
              <p className="text-center text-cream/30 text-xs font-sans mt-4">
                No spam. Just rewards. We respect your privacy.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
