import { useState } from 'react';
import SEOHead from '@/components/seo/SEOHead';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const sections = [
  {
    title: 'Signature Dishes',
    images: [
      { src: '/assets/generated/dish-coal-smoked-chicken.dim_800x600.png', alt: 'Coal Smoked Chicken' },
      { src: '/assets/generated/dish-chettinad-biryani.dim_800x600.png', alt: 'Chettinad Biryani' },
      { src: '/assets/generated/dish-coal-special-lamb.dim_800x600.png', alt: 'Coal Special Lamb' },
      { src: '/assets/generated/dish-veg-starter-paneer-tikka.dim_800x600.png', alt: 'Paneer Tikka' },
    ],
  },
  {
    title: 'The Charcoal Kitchen',
    images: [
      { src: '/assets/generated/gallery-charcoal-cooking.dim_1200x800.png', alt: 'Charcoal Cooking' },
      { src: '/assets/generated/gallery-food-spread.dim_1200x800.png', alt: 'Food Spread' },
      { src: '/assets/generated/dish-biryani-handi.dim_800x600.png', alt: 'Biryani Handi' },
      { src: '/assets/generated/dish-bbq-wings.dim_800x600.png', alt: 'BBQ Wings' },
    ],
  },
  {
    title: 'Restaurant Ambience',
    images: [
      { src: '/assets/generated/restaurant-interior.dim_1200x800.png', alt: 'Restaurant Interior' },
      { src: '/assets/generated/ambience-dining.dim_1200x800.png', alt: 'Dining Ambience' },
      { src: '/assets/generated/gallery-celebration.dim_1200x800.png', alt: 'Celebration Dining' },
      { src: '/assets/generated/founder-portrait.dim_600x600.png', alt: 'Chef Portrait' },
    ],
  },
  {
    title: 'Dosas & Tiffin',
    images: [
      { src: '/assets/generated/dish-dosa-crispy.dim_800x600.png', alt: 'Crispy Dosa' },
      { src: '/assets/generated/dish-dosa-masala.dim_800x600.png', alt: 'Masala Dosa' },
      { src: '/assets/generated/dish-ghee-roast-dosa.dim_800x600.png', alt: 'Ghee Roast Dosa' },
      { src: '/assets/generated/dish-beverage-lassi.dim_600x800.png', alt: 'Lassi' },
    ],
  },
];

const allImages = sections.flatMap((s) => s.images);

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + allImages.length) % allImages.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % allImages.length : null));

  let globalIndex = 0;

  return (
    <>
      <SEOHead
        title="Gallery | Coal & Curry – Chettinad Food & Restaurant Photos"
        description="Browse the Coal & Curry photo gallery — stunning images of our signature Chettinad dishes, charcoal kitchen, restaurant ambience, and celebrations in Neyveli."
        ogImage="/assets/generated/gallery-charcoal-cooking.dim_1200x800.png"
      />

      {/* Header */}
      <section className="pt-32 pb-12 bg-coal-950 text-center">
        <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-3">Visual Stories</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Our Gallery</h1>
        <p className="text-coal-200 text-base max-w-xl mx-auto">
          A feast for the eyes — explore the flavours, fire, and ambience of Coal & Curry.
        </p>
      </section>

      {/* Gallery Sections */}
      <div className="bg-coal-950 pb-20">
        {sections.map((section) => (
          <div key={section.title} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
            <h2 className="font-display text-2xl font-bold text-white mb-6 border-l-4 border-ember-500 pl-4">
              {section.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {section.images.map((img) => {
                const idx = globalIndex++;
                return (
                  <button
                    key={img.src}
                    onClick={() => openLightbox(idx)}
                    className="relative group rounded-lg overflow-hidden aspect-square focus:outline-none focus:ring-2 focus:ring-gold-400"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-coal-950/0 group-hover:bg-coal-950/50 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-coal-800 border border-coal-600 flex items-center justify-center text-white hover:bg-coal-700 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 w-10 h-10 rounded-full bg-coal-800 border border-coal-600 flex items-center justify-center text-white hover:bg-coal-700 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl max-h-[85vh] mx-16">
            <img
              src={allImages[lightboxIndex].src}
              alt={allImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-premium"
            />
            <p className="text-white text-center mt-3 text-sm font-medium">
              {allImages[lightboxIndex].alt}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 w-10 h-10 rounded-full bg-coal-800 border border-coal-600 flex items-center justify-center text-white hover:bg-coal-700 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}
