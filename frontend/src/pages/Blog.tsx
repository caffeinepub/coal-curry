import SEOHead from '@/components/seo/SEOHead';

const blogPosts = [
  {
    id: 1,
    title: 'The Ancient Art of Chettinad Cooking',
    excerpt: 'Chettinad cuisine is one of the most aromatic and spiciest cuisines in India. Originating from the Chettinad region of Tamil Nadu, it uses a unique blend of spices that are rarely found elsewhere. We explore the history and techniques that make this cuisine so special.',
    date: 'February 10, 2026',
    category: 'Food Stories',
    readTime: '5 min read',
    image: '/assets/generated/gallery-charcoal-cooking.dim_1200x800.png',
  },
  {
    id: 2,
    title: 'Why Coal Fire Makes Food Taste Better',
    excerpt: 'There is a reason why food cooked over coal fire has a depth of flavor that gas or electric cooking simply cannot replicate. The Maillard reaction, the smoke compounds, and the radiant heat all combine to create something truly magical. Our head chef explains the science.',
    date: 'January 28, 2026',
    category: 'Chef\'s Corner',
    readTime: '4 min read',
    image: '/assets/generated/dish-coal-smoked-chicken.dim_800x600.png',
  },
  {
    id: 3,
    title: 'The Story Behind Seeraga Samba Biryani',
    excerpt: 'Seeraga Samba is a rare, short-grain rice variety native to Tamil Nadu. Its unique nutty flavor and ability to absorb spices makes it the perfect base for authentic Chettinad biryani. We trace its origins and explain why it is worth seeking out.',
    date: 'January 15, 2026',
    category: 'Recipes',
    readTime: '6 min read',
    image: '/assets/generated/dish-chettinad-biryani.dim_800x600.png',
  },
  {
    id: 4,
    title: 'Jigarthanda: Madurai\'s Iconic Cold Drink',
    excerpt: 'On a hot Tamil Nadu afternoon, nothing beats a tall glass of Jigarthanda. This unique cold drink made with milk, almond gum, nannari syrup, and ice cream has been a Madurai staple for over a century. We share the recipe and the story behind it.',
    date: 'January 5, 2026',
    category: 'Beverages',
    readTime: '3 min read',
    image: '/assets/generated/gallery-food-spread.dim_1200x800.png',
  },
  {
    id: 5,
    title: 'Celebrating Tamil Festivals Through Food',
    excerpt: 'Tamil Nadu\'s festivals are inseparable from its food. From Pongal\'s sweet rice to Diwali\'s savory murukku, every celebration has its own culinary identity. We explore how Coal & Curry honors these traditions with special festival menus.',
    date: 'December 20, 2025',
    category: 'Culture',
    readTime: '7 min read',
    image: '/assets/generated/gallery-celebration.dim_1200x800.png',
  },
  {
    id: 6,
    title: 'From Farm to Fire: Our Spice Sourcing Story',
    excerpt: 'Every spice in our kitchen has a story. We source our kalpasi, marathi mokku, and star anise directly from Chettinad farms, ensuring freshness and authenticity. Join us on a journey through the spice markets of Tamil Nadu.',
    date: 'December 8, 2025',
    category: 'Behind the Scenes',
    readTime: '5 min read',
    image: '/assets/generated/gallery-charcoal-cooking.dim_1200x800.png',
  },
];

const categoryColors: Record<string, string> = {
  'Food Stories': 'bg-maroon/60 text-gold',
  'Chef\'s Corner': 'bg-gold/20 text-gold',
  'Recipes': 'bg-green-900/60 text-green-300',
  'Beverages': 'bg-blue-900/60 text-blue-300',
  'Culture': 'bg-purple-900/60 text-purple-300',
  'Behind the Scenes': 'bg-smoky text-cream/70',
};

export default function Blog() {
  return (
    <main className="min-h-screen bg-coal pt-20">
      <SEOHead
        title="Blog | Coal & Curry – Food Stories, Recipes & Tamil Culinary Culture"
        description="Explore the Coal & Curry blog — stories about Chettinad cooking traditions, coal fire science, authentic South Indian recipes, Tamil festival foods, and behind-the-scenes glimpses of our Neyveli kitchen."
        canonical="https://coalandcurry.com/blog"
        ogType="website"
        ogUrl="https://coalandcurry.com/blog"
        ogImage="/assets/generated/gallery-food-spread.dim_1200x800.png"
      />

      {/* Hero */}
      <div className="relative py-16 bg-smoky/30 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Stories & Recipes</p>
          <h1 className="section-heading text-5xl sm:text-6xl mb-4">Our Blog</h1>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="text-cream/60 font-sans max-w-xl mx-auto">
            Food stories, recipes, and the rich cultural heritage behind every dish we serve.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        <div className="mb-12">
          <div className="card-smoky rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:border-gold/40 transition-colors">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coal/20" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs px-3 py-1 rounded-full font-sans ${categoryColors[blogPosts[0].category] || 'bg-smoky text-cream/70'}`}>
                  {blogPosts[0].category}
                </span>
                <span className="text-cream/40 text-xs font-sans">Featured</span>
              </div>
              <h2 className="font-display text-gold text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                {blogPosts[0].title}
              </h2>
              <p className="text-cream/60 font-sans text-sm leading-relaxed mb-4">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-cream/40 text-xs font-sans">
                  <span>{blogPosts[0].date}</span>
                  <span>·</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="text-gold text-sm font-display font-semibold hover:text-cream transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map(post => (
            <article
              key={post.id}
              className="card-smoky rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/60 to-transparent" />
                <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-sans ${categoryColors[post.category] || 'bg-smoky text-cream/70'}`}>
                  {post.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-gold font-semibold text-lg mb-2 leading-tight">{post.title}</h3>
                <p className="text-cream/60 font-sans text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-gold/10 pt-3">
                  <div className="text-cream/40 text-xs font-sans">
                    <span>{post.date}</span>
                    <span className="mx-2">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-gold text-xs font-display font-semibold hover:text-cream transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
