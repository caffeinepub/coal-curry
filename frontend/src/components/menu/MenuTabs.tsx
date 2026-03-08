import { menuCategories } from '@/data/menuData';

interface MenuTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuTabs({ activeCategory, onCategoryChange }: MenuTabsProps) {
  return (
    <div className="sticky top-16 z-40 bg-coal-900 border-b border-coal-700 shadow-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          <button
            onClick={() => onCategoryChange('all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
              activeCategory === 'all'
                ? 'bg-ember-500 text-white'
                : 'bg-coal-800 text-coal-200 hover:bg-coal-700 hover:text-white'
            }`}
          >
            🍽️ All Items
          </button>
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-ember-500 text-white'
                  : 'bg-coal-800 text-coal-200 hover:bg-coal-700 hover:text-white'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
