import { Shield, Leaf, Award, CheckCircle, Target, Eye } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

const chefs = [
  {
    name: 'Chef Murugesan',
    specialty: 'Chettinad Cuisine & Coal Grilling',
    experience: '18 years',
    image: '/assets/generated/founder-portrait.dim_600x600.png',
  },
  {
    name: 'Chef Priya Devi',
    specialty: 'Traditional Tiffin & Dosa Varieties',
    experience: '12 years',
    image: '/assets/generated/founder-portrait.dim_600x600.png',
  },
  {
    name: 'Chef Rajan Kumar',
    specialty: 'Seafood & Biryani Specialist',
    experience: '15 years',
    image: '/assets/generated/founder-portrait.dim_600x600.png',
  },
];

const hygieneFeatures = [
  { icon: Shield, label: 'FSSAI Certified', desc: 'Fully licensed and compliant with food safety standards' },
  { icon: Leaf, label: 'Fresh Ingredients', desc: 'Locally sourced, farm-fresh produce delivered daily' },
  { icon: Award, label: 'ISO Standards', desc: 'Kitchen operations follow international hygiene protocols' },
  { icon: CheckCircle, label: 'Daily Sanitization', desc: 'Complete kitchen deep-clean every morning before service' },
];

export default function About() {
  return (
    <main className="min-h-screen bg-coal pt-20">
      <SEOHead
        title="About Us | Coal & Curry – Chettinad Charcoal Cooking, Neyveli"
        description="Discover the story of Coal & Curry — born from a deep reverence for Tamil Nadu's ancient culinary traditions. Meet our founder Selvam Arumugam and our master chefs who bring authentic Chettinad charcoal cooking to Neyveli."
        canonical="https://coalandcurry.com/about"
        ogType="website"
        ogUrl="https://coalandcurry.com/about"
        ogImage="/assets/generated/founder-portrait.dim_600x600.png"
      />

      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/assets/generated/restaurant-interior.dim_1200x800.png')` }}
        />
        <div className="absolute inset-0 bg-coal/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Our Heritage</p>
          <h1 className="section-heading text-5xl sm:text-6xl mb-4">About Us</h1>
          <div className="gold-divider w-32 mx-auto" />
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Our Heritage</p>
            <h2 className="section-heading text-4xl mb-6">Our Story</h2>
            <div className="gold-divider w-24 mb-6" />
            <div className="space-y-4 text-cream/70 font-sans leading-relaxed">
              <p>
                Coal & Curry was born from a deep reverence for Tamil Nadu's ancient culinary traditions. In the heart of Neyveli, we set out to revive the lost art of charcoal cooking — a method that has been the soul of South Indian kitchens for centuries.
              </p>
              <p>
                Our journey began with a simple belief: that the best flavors come from the most authentic methods. We source our spices directly from Chettinad farms, grind them fresh each morning, and cook every dish over live coal fire — just as our grandmothers did.
              </p>
              <p>
                Today, Coal & Curry stands as a testament to the marriage of tradition and modernity — where ancient Chettinad recipes meet premium fine dining comfort, creating an experience that is both deeply familiar and excitingly new.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/generated/gallery-charcoal-cooking.dim_1200x800.png"
              alt="Our Story"
              className="rounded-lg w-full object-cover h-80 lg:h-96"
            />
            <div className="absolute inset-0 rounded-lg border border-gold/20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="gold-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />

      {/* Founder Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">The Visionary</p>
          <h2 className="section-heading text-4xl mb-4">Founder's Story</h2>
          <div className="gold-divider w-32 mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="card-smoky rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gold/30 shadow-fire">
                <img
                  src="/assets/generated/founder-portrait.dim_600x600.png"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="font-display text-gold text-2xl font-bold mb-1">Mr. Selvam Arumugam</h3>
              <p className="text-cream/50 font-sans text-sm mb-4 italic">Founder & Managing Director</p>
              <div className="gold-divider w-20 mb-4" />
              <p className="text-cream/70 font-sans leading-relaxed mb-3">
                Growing up in a traditional Chettinad household, Selvam watched his mother cook over wood fire every morning. The aroma of freshly ground spices and the crackle of coal became his earliest memories. After 20 years in the hospitality industry, he returned to Neyveli with one dream: to share those flavors with the world.
              </p>
              <p className="text-cream/70 font-sans leading-relaxed">
                "Every dish we serve carries a piece of our heritage. Coal & Curry is not just a restaurant — it's a love letter to Tamil Nadu's culinary soul."
              </p>
              <p className="text-gold font-serif-alt italic mt-3">— Selvam Arumugam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="gold-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />

      {/* Our Chefs */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">The Masters</p>
          <h2 className="section-heading text-4xl mb-4">Our Chefs</h2>
          <div className="gold-divider w-32 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chefs.map(chef => (
            <div key={chef.name} className="card-smoky rounded-xl p-6 text-center hover:border-gold/40 transition-colors">
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gold/30 mx-auto mb-4">
                <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-gold font-semibold text-lg mb-1">{chef.name}</h3>
              <p className="text-cream/60 font-sans text-sm mb-2">{chef.specialty}</p>
              <span className="inline-block bg-maroon/60 text-gold text-xs px-3 py-1 rounded-full font-sans">
                {chef.experience} experience
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="gold-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />

      {/* Mission & Vision */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Our Purpose</p>
          <h2 className="section-heading text-4xl mb-4">Mission & Vision</h2>
          <div className="gold-divider w-32 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="card-smoky rounded-xl p-8 border-l-4 border-gold">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <Target size={20} className="text-gold" />
              </div>
              <h3 className="font-display text-gold text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-cream/70 font-sans leading-relaxed">
              To preserve and celebrate the authentic flavors of Tamil Nadu's Chettinad cuisine by combining traditional coal-fire cooking methods with modern fine dining standards — making every meal a cultural experience.
            </p>
          </div>
          <div className="card-smoky rounded-xl p-8 border-l-4 border-maroon">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-maroon/20 rounded-full flex items-center justify-center">
                <Eye size={20} className="text-gold" />
              </div>
              <h3 className="font-display text-gold text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-cream/70 font-sans leading-relaxed">
              To become South India's most celebrated coal-fire dining destination — a place where every guest leaves with a deeper appreciation for Tamil culinary heritage and an unforgettable dining memory.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="gold-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />

      {/* Hygienic Kitchen */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Our Standards</p>
          <h2 className="section-heading text-4xl mb-4">Hygienic Kitchen</h2>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="text-cream/60 font-sans max-w-xl mx-auto">
            We maintain the highest standards of cleanliness and food safety so you can dine with complete peace of mind.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hygieneFeatures.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="card-smoky rounded-xl p-6 text-center hover:border-gold/40 transition-colors">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-gold font-semibold text-base mb-2">{label}</h3>
              <p className="text-cream/60 font-sans text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Restaurant Interior */}
      <section className="py-16 bg-smoky/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/assets/generated/restaurant-interior.dim_1200x800.png"
              alt="Restaurant Interior"
              className="rounded-lg w-full h-64 object-cover"
            />
            <img
              src="/assets/generated/gallery-food-spread.dim_1200x800.png"
              alt="Food Spread"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
