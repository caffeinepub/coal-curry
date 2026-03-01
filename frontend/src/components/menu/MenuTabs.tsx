import { menuCategories } from "../../data/menuData";

interface MenuTabsProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

// Build a unified tab list: "All Items" plus each category using its `icon` field
const allTab = { id: "all", name: "All Items", icon: "🍽️" };

export default function MenuTabs({ activeCategory, onCategoryChange }: MenuTabsProps) {
  const tabs = [
    allTab,
    ...menuCategories.map((cat) => ({ id: cat.id, name: cat.name, icon: cat.icon })),
  ];

  return (
    <div className="sticky top-16 lg:top-20 z-30 bg-charcoal/95 backdrop-blur-sm border-b border-saffron/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onCategoryChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
                activeCategory === tab.id
                  ? "bg-saffron text-charcoal shadow-warm font-bold"
                  : "bg-white/15 text-white hover:bg-saffron/30 hover:text-saffron border border-white/30"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
