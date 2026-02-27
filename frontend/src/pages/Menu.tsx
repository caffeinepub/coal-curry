import { useState } from "react";
import MenuTabs from "../components/menu/MenuTabs";
import DishCard from "../components/menu/DishCard";
import SEOHead from "../components/seo/SEOHead";
import { getItemsByCategory } from "../data/menuData";
import { Search } from "lucide-react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = getItemsByCategory(activeCategory).filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <SEOHead
        title="South Indian Multi-Cuisine Menu | Coal & Curry"
        description="Explore our extensive South Indian menu with 9 categories: Starters, Dosas, Idly & Vada, Rice & Biryani, Curries, Breads, Seafood Specials, Desserts, and Drinks."
        ogImage="/assets/generated/gallery-food-spread.dim_1200x800.png"
      />

      {/* Page Header */}
      <div className="pt-20 lg:pt-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <span className="text-saffron font-medium text-sm uppercase tracking-widest">Explore</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Our Menu
          </h1>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            50+ authentic South Indian dishes across 9 categories — from crispy Dosas to fiery Chettinad Curries.
          </p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes..."
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-saffron"
            />
          </div>
        </div>
      </div>

      <MenuTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {/* Dish Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🍽️</p>
            <p className="text-white/70 text-lg">No dishes found. Try a different search.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-white/60 mb-6">
              Showing {filtered.length} dish{filtered.length !== 1 ? "es" : ""}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
