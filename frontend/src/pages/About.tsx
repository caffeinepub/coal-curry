import SEOHead from '@/components/seo/SEOHead';
import { Award, Heart, Leaf, Flame, Users } from 'lucide-react';

const chefs = [
  {
    name: 'Chef Murugan Pillai',
    role: 'Head Chef & Founder',
    image: '/assets/generated/founder-portrait.dim_600x600.png',
    bio: "A third-generation Chettinad cook with 25+ years of experience, Murugan brings the authentic flavours of his grandmother's kitchen to every dish.",
  },
  {
    name: 'Chef Kavitha Rajan',
    role: 'Sous Chef – Vegetarian Specialties',
    image: '/assets/generated/restaurant-interior.dim_1200x800.png',
    bio: 'Kavitha specialises in traditional Chettinad vegetarian dishes, transforming humble ingredients into extraordinary culinary experiences.',
  },
  {
    name: 'Chef Arjun Selvam',
    role: 'Grill Master – Coal Specials',
    image: '/assets/generated/gallery-charcoal-cooking.dim_1200x800.png',
    bio: 'Arjun is the master behind our signature coal-grilled dishes, with an expert hand for achieving the perfect smoky char.',
  },
];

const values = [
  { icon: Flame, title: 'Authentic Flavours', desc: 'We never compromise on authenticity. Every spice blend, every cooking technique follows generations-old Chettinad traditions.' },
  { icon: Leaf, title: 'Fresh Ingredients', desc: 'We source our spices and produce locally, ensuring the freshest ingredients reach your plate every single day.' },
  { icon: Heart, title: 'Cooked with Love', desc: 'Food is our love language. Every dish is prepared with care, passion, and a deep respect for the culinary heritage of Chettinad.' },
  { icon: Users, title: 'Community First', desc: 'We are proud to be part of the Neyveli community, supporting local farmers, artisans, and food traditions.' },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us | Coal & Curry – Authentic Chettinad Restaurant"
        description="Learn the story behind Coal & Curry — founded by Chef Murugan Pillai in Neyveli, Tamil Nadu. Discover our passion for authentic Chettinad cuisine, charcoal cooking, and community."
        ogImage="/assets/generated/founder-portrait.dim_600x600.png"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-coal-950 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/assets/generated/restaurant-interior.dim_1200x800.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coal-950/80 to-coal-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Born from the Coals of Neyveli
          </h1>
          <p className="text-coal-200 text-lg leading-relaxed">
            A journey of fire, flavour, and family — from a grandmother's kitchen to Neyveli's most beloved restaurant.
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-coal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-premium">
            <img
              src="/assets/generated/founder-portrait.dim_600x600.png"
              alt="Chef Murugan Pillai, Founder"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-bold text-lg">Chef Murugan Pillai</p>
              <p className="text-gold-400 text-sm">Founder & Head Chef</p>
            </div>
          </div>
          <div>
            <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-3">Founder's Story</p>
            <h2 className="font-display text-3xl font-bold text-white mb-5">
              A Passion Forged in Fire
            </h2>
            <p className="text-coal-200 text-base leading-relaxed mb-4">
              Growing up in Neyveli, Chef Murugan Pillai spent his childhood in his grandmother's kitchen, mesmerised by the way she coaxed extraordinary flavours from simple ingredients over glowing charcoal. Those early memories became the foundation of Coal & Curry.
            </p>
            <p className="text-coal-200 text-base leading-relaxed mb-4">
              After training under master chefs across Tamil Nadu and spending years perfecting his craft, Murugan returned to Neyveli in 2009 with a dream: to share the authentic, bold flavours of Chettinad cuisine with the world.
            </p>
            <p className="text-coal-200 text-base leading-relaxed">
              Today, Coal & Curry stands as a testament to that dream — a place where every dish tells a story, every spice carries a memory, and every meal is an experience to be savoured.
            </p>
          </div>
        </div>
      </section>

      {/* Our Chefs */}
      <section className="py-20 bg-coal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-2">The Team</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Our Chefs</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {chefs.map((chef) => (
              <div key={chef.name} className="bg-coal-800 border border-coal-700 rounded-xl overflow-hidden shadow-card">
                <div className="relative h-56 overflow-hidden">
                  <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal-900/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-white text-lg mb-0.5">{chef.name}</h3>
                  <p className="text-gold-400 text-sm font-semibold mb-3">{chef.role}</p>
                  <p className="text-coal-300 text-sm leading-relaxed">{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-coal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-2">What We Stand For</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Our Values</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-coal-800 border border-coal-700 rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-ember-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-ember-400" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-coal-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Certifications */}
      <section className="py-16 bg-coal-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-3">Standards</p>
          <h2 className="font-display text-3xl font-bold text-white mb-5">
            Hygiene & Quality Certifications
          </h2>
          <p className="text-coal-200 text-base leading-relaxed mb-8">
            We maintain the highest standards of food safety and hygiene. Our kitchen is FSSAI certified, and we undergo regular third-party audits to ensure every meal meets our strict quality benchmarks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['FSSAI Certified', 'ISO 22000', '5-Star Hygiene Rating', 'Zero Plastic Kitchen'].map((cert) => (
              <div key={cert} className="flex items-center gap-2 px-4 py-2 rounded-full bg-coal-800 border border-coal-700">
                <Award className="w-4 h-4 text-gold-400" />
                <span className="text-white text-sm font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
