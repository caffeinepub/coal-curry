import { useState } from 'react';
import { menuData, menuCategories } from '@/data/menuData';
import MenuTabs from '@/components/menu/MenuTabs';
import DishCard from '@/components/menu/DishCard';
import { useLanguage } from '@/context/LanguageContext';
import SEOHead from '@/components/seo/SEOHead';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const { t } = useLanguage();

  const filtered = menuData.filter(d => d.category === activeCategory);

  return (
    <main className="min-h-screen bg-coal pt-20">
      <SEOHead
        title="Menu | Coal & Curry – South Indian Charcoal Grilled Dishes, Biryani & More"
        description="Explore 50+ authentic South Indian dishes at Coal & Curry, Neyveli. From Chettinad biryani and coal-smoked chicken to ghee roast dosa and BBQ wings — all cooked over live coal fire."
        canonical="https://coalandcurry.com/menu"
        ogType="website"
        ogUrl="https://coalandcurry.com/menu"
        ogImage="/assets/generated/gallery-food-spread.dim_1200x800.png"
      />

      {/* Hero */}
      <div className="relative py-16 bg-smoky/30 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Explore</p>
          <h1 className="section-heading text-5xl sm:text-6xl mb-4">{t('menu')}</h1>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="text-cream/60 font-sans max-w-xl mx-auto">
            50+ authentic South Indian dishes crafted with locally sourced spices and traditional coal-fire cooking methods.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tabs */}
        <div className="mb-8">
          <MenuTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>

        {/* Category Info */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-gold text-2xl font-semibold">{activeCategory}</h2>
          <span className="text-cream/40 text-sm font-sans">{filtered.length} dishes</span>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </main>
  );
}
