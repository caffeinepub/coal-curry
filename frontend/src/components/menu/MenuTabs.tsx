import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { menuCategories } from '@/data/menuData';

interface MenuTabsProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

const categoryIcons: Record<string, string> = {
  'Veg Starters': '🥬',
  'Non-Veg Starters': '🍗',
  'Coal Specials': '🔥',
  'Biryani & Rice': '🍛',
  'Dosa & Tiffin': '🥞',
  'Seafood Specials': '🐟',
  'Beverages': '🍹',
  'Desserts': '🍰',
};

export default function MenuTabs({ activeCategory, onCategoryChange }: MenuTabsProps) {
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-2 pb-2">
        {menuCategories.map(cat => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-sans font-medium whitespace-nowrap transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-gold text-coal shadow-gold'
                : 'bg-smoky text-cream/70 border border-gold/20 hover:border-gold/50 hover:text-gold'
            }`}
          >
            <span>{categoryIcons[cat]}</span>
            {cat}
          </button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
