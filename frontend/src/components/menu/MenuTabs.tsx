import { menuCategories } from "../../data/menuData";

interface MenuTabsProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export default function MenuTabs({ activeCategory, onCategoryChange }: MenuTabsProps) {
  const allCategories = [
    { id: "all", name: "All Items", emoji: "🍽️" },
    ...menuCategories,
  ];

  return (
    <div className="sticky top-16 lg:top-20 z-30 bg-charcoal/95 backdrop-blur-sm border-b border-saffron/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
                activeCategory === cat.id
                  ? "bg-saffron text-charcoal shadow-warm font-bold"
                  : "bg-white/15 text-white hover:bg-saffron/30 hover:text-saffron border border-white/30"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
