import { Link } from '@tanstack/react-router';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

const signatureDishes = [
  {
    id: 'sig1',
    name: 'Coal Smoked Chicken Roast',
    description: 'Whole chicken slow-roasted over live coal with our signature spice rub.',
    price: '₹ 520',
    imageUrl: '/assets/generated/dish-coal-smoked-chicken.dim_800x600.png',
    badge: '🔥 Chef\'s Special',
    category: 'Coal Specials',
  },
  {
    id: 'sig2',
    name: 'Chettinad Biryani',
    description: 'Fragrant seeraga samba rice with authentic Chettinad spices and tender meat.',
    price: '₹ 360',
    imageUrl: '/assets/generated/dish-chettinad-biryani.dim_800x600.png',
    badge: '⭐ Most Loved',
    category: 'Biryani & Rice',
  },
  {
    id: 'sig3',
    name: 'Charcoal BBQ Wings',
    description: 'Chicken wings glazed with house BBQ sauce and charcoal grilled to perfection.',
    price: '₹ 360',
    imageUrl: '/assets/generated/dish-bbq-wings.dim_800x600.png',
    badge: '🏆 Best Seller',
    category: 'Coal Specials',
  },
  {
    id: 'sig4',
    name: 'Ghee Roast Dosa',
    description: 'Paper-thin crispy dosa roasted in generous ghee, served with sambar and chutneys.',
    price: '₹ 160',
    imageUrl: '/assets/generated/dish-ghee-roast-dosa.dim_800x600.png',
    badge: '🌿 Vegetarian',
    category: 'Dosa & Tiffin',
  },
];

export default function SignatureDishes() {
  const { t } = useLanguage();
  const { addToCart } = useCart();

  return (
    <section className="py-20 bg-coal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Our Finest</p>
          <h2 className="section-heading text-4xl sm:text-5xl mb-4">{t('signatureDishes')}</h2>
          <div className="gold-divider w-32 mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureDishes.map(dish => (
            <div
              key={dish.id}
              className="card-smoky rounded-lg overflow-hidden group hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={dish.imageUrl}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/80 to-transparent" />
                <span className="absolute top-3 left-3 bg-maroon/90 text-gold text-xs px-2 py-1 rounded font-sans">
                  {dish.badge}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-gold font-semibold text-lg mb-1">{dish.name}</h3>
                <p className="text-cream/60 text-sm font-sans mb-3 leading-relaxed">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-display font-bold text-lg">{dish.price}</span>
                  <button
                    onClick={() => addToCart({ id: dish.id, name: dish.name, price: dish.price, imageUrl: dish.imageUrl, category: dish.category })}
                    className="btn-maroon p-2 rounded text-xs flex items-center gap-1"
                  >
                    <ShoppingCart size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/menu" className="btn-gold px-8 py-3 rounded font-display font-semibold inline-block hover:scale-105 transition-transform">
            Explore Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
