import SEOHead from '@/components/seo/SEOHead';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Secret Behind Chettinad Spice Blends',
    excerpt: 'Discover the ancient art of grinding Chettinad masalas — from kalpasi to marathi mokku — and how these rare spices create the distinctive flavour profile of our cuisine.',
    category: 'Food Stories',
    categoryColor: 'bg-ember-500 text-white',
    date: 'February 20, 2026',
    readTime: '5 min read',
    image: '/assets/generated/gallery-food-spread.dim_1200x800.png',
    featured: true,
  },
  {
    id: 2,
    title: 'How We Achieve the Perfect Charcoal Smoke',
    excerpt: 'Our grill master Chef Arjun shares the techniques behind our signature coal-smoked dishes — the right wood, the right temperature, and the patience it takes.',
    category: 'Behind the Kitchen',
    categoryColor: 'bg-coal-700 text-gold-400',
    date: 'February 10, 2026',
    readTime: '4 min read',
    image: '/assets/generated/gallery-charcoal-cooking.dim_1200x800.png',
    featured: false,
  },
  {
    id: 3,
    title: 'A Guide to Chettinad Biryani: What Makes It Different',
    excerpt: 'Chettinad biryani is unlike any other. Learn about the unique spice combinations, the dum cooking method, and why our Coal Dum Biryani has become a legend in Neyveli.',
    category: 'Recipes & Tips',
    categoryColor: 'bg-gold-500 text-coal-900',
    date: 'January 28, 2026',
    readTime: '6 min read',
    image: '/assets/generated/dish-chettinad-biryani.dim_800x600.png',
    featured: false,
  },
  {
    id: 4,
    title: 'The Cultural Heritage of Chettinad Cuisine',
    excerpt: "Chettinad food is more than just a meal — it's a cultural identity. Explore the history of the Nattukotai Chettiars and how their trade routes shaped one of India's most complex cuisines.",
    category: 'Tamil Culture',
    categoryColor: 'bg-saffron-400 text-coal-900',
    date: 'January 15, 2026',
    readTime: '7 min read',
    image: '/assets/generated/restaurant-interior.dim_1200x800.png',
    featured: false,
  },
  {
    id: 5,
    title: 'Top 5 Vegetarian Dishes You Must Try at Coal & Curry',
    excerpt: 'Think Chettinad is only for meat lovers? Think again. Our vegetarian menu is a celebration of bold flavours — from Coal Grilled Paneer to the legendary Mushroom Sukka.',
    category: 'Food Stories',
    categoryColor: 'bg-ember-500 text-white',
    date: 'January 5, 2026',
    readTime: '4 min read',
    image: '/assets/generated/dish-veg-starter-paneer-tikka.dim_800x600.png',
    featured: false,
  },
  {
    id: 6,
    title: 'Celebrating Pongal: Our Special Festival Menu',
    excerpt: "This Pongal, we brought back traditional recipes that have been part of Chettinad celebrations for centuries. Here's a look at what made our festival menu so special.",
    category: 'Tamil Culture',
    categoryColor: 'bg-saffron-400 text-coal-900',
    date: 'December 20, 2025',
    readTime: '3 min read',
    image: '/assets/generated/gallery-celebration.dim_1200x800.png',
    featured: false,
  },
];

export default function Blog() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <SEOHead
        title="Blog | Coal & Curry – Chettinad Food Stories, Recipes & Culture"
        description="Read the Coal & Curry blog for Chettinad food stories, spice guides, chef insights, Tamil cultural heritage, and behind-the-scenes kitchen stories from Neyveli."
        ogImage="/assets/generated/gallery-food-spread.dim_1200x800.png"
      />

      {/* Header */}
      <section className="pt-32 pb-12 bg-coal-950 text-center">
        <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-3">Stories & Insights</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Our Blog</h1>
        <p className="text-coal-200 text-base max-w-xl mx-auto">
          Food stories, recipes, cultural heritage, and behind-the-scenes from the Coal & Curry kitchen.
        </p>
      </section>

      <div className="bg-coal-950 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featured && (
            <div className="mb-12 bg-coal-800 border border-coal-700 rounded-2xl overflow-hidden shadow-premium grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-coal-900/60 to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-coal-200 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-coal-400 text-xs mb-5">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <button className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-bold text-sm transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Post Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article
                key={post.id}
                className="bg-coal-800 border border-coal-700 rounded-xl overflow-hidden shadow-card hover:shadow-premium hover:border-gold-500/40 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full mb-3 ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <h3 className="font-display font-bold text-white text-base mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-coal-300 text-xs leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-coal-400 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <button className="text-gold-400 hover:text-gold-300 text-xs font-bold flex items-center gap-1 transition-colors">
                      Read <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
