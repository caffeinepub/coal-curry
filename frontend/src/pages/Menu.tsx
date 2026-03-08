import { useState } from 'react';
import { Search } from 'lucide-react';
import MenuTabs from '@/components/menu/MenuTabs';
import DishCard from '@/components/menu/DishCard';
import { menuItems } from '@/data/menuData';
import SEOHead from '@/components/seo/SEOHead';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDishes = menuItems.filter((dish) => {
    const matchesCategory = activeCategory === 'all' || dish.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Menu | Coal & Curry – Chettinad Biryani, Coal Specials & More"
        description="Explore Coal & Curry's full menu — authentic Chettinad biryani, coal-grilled meats, vegetarian starters, dosas, and refreshing beverages. Order online or dine in Neyveli."
        ogImage="/assets/generated/dish-chettinad-biryani.dim_800x600.png"
        ogUrl="https://coalandcurry.com/menu"
        canonical="https://coalandcurry.com/menu"
      />

      {/* Page Header */}
      <div className="pt-24 pb-8 bg-coal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-2">
              Explore Our Offerings
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
              Our Menu
            </h1>
            <p className="text-coal-200 text-base max-w-xl mx-auto">
              Authentic Chettinad flavours, slow-cooked over real charcoal. Every dish tells a story.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-coal-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes…"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-coal-800 border border-coal-600 text-white placeholder-coal-400 text-sm focus:outline-none focus:border-ember-500 focus:ring-1 focus:ring-ember-500 transition-colors"
            />
          </div>
        </div>
      </div>

      <MenuTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {/* Dish Grid */}
      <div className="bg-coal-950 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDishes.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-coal-300 text-lg">No dishes found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 px-5 py-2 rounded bg-ember-500 hover:bg-ember-600 text-white font-bold text-sm transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
