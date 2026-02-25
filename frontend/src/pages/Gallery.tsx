import { useState } from 'react';
import Lightbox from '@/components/gallery/Lightbox';
import SEOHead from '@/components/seo/SEOHead';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GallerySection {
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

const gallerySections: GallerySection[] = [
  {
    title: 'Live Charcoal Cooking',
    subtitle: 'The art of fire',
    images: [
      { src: '/assets/generated/gallery-charcoal-cooking.dim_1200x800.png', alt: 'Chef tending coal fire' },
      { src: '/assets/generated/dish-coal-smoked-chicken.dim_800x600.png', alt: 'Coal smoked chicken' },
      { src: '/assets/generated/dish-bbq-wings.dim_800x600.png', alt: 'BBQ wings on coal' },
      { src: '/assets/generated/gallery-charcoal-cooking.dim_1200x800.png', alt: 'Live coal grill' },
    ],
  },
  {
    title: 'Restaurant Interiors',
    subtitle: 'Premium ambience',
    images: [
      { src: '/assets/generated/restaurant-interior.dim_1200x800.png', alt: 'Main dining hall' },
      { src: '/assets/generated/restaurant-interior.dim_1200x800.png', alt: 'Private dining area' },
      { src: '/assets/generated/gallery-food-spread.dim_1200x800.png', alt: 'Table setting' },
      { src: '/assets/generated/restaurant-interior.dim_1200x800.png', alt: 'Bar area' },
    ],
  },
  {
    title: 'Food Photography',
    subtitle: 'Culinary artistry',
    images: [
      { src: '/assets/generated/gallery-food-spread.dim_1200x800.png', alt: 'Food spread' },
      { src: '/assets/generated/dish-chettinad-biryani.dim_800x600.png', alt: 'Chettinad biryani' },
      { src: '/assets/generated/dish-ghee-roast-dosa.dim_800x600.png', alt: 'Ghee roast dosa' },
      { src: '/assets/generated/dish-coal-smoked-chicken.dim_800x600.png', alt: 'Coal smoked chicken platter' },
    ],
  },
  {
    title: 'Customer Celebrations',
    subtitle: 'Memorable moments',
    images: [
      { src: '/assets/generated/gallery-celebration.dim_1200x800.png', alt: 'Birthday celebration' },
      { src: '/assets/generated/gallery-celebration.dim_1200x800.png', alt: 'Anniversary dinner' },
      { src: '/assets/generated/gallery-celebration.dim_1200x800.png', alt: 'Family gathering' },
      { src: '/assets/generated/gallery-food-spread.dim_1200x800.png', alt: 'Special occasion' },
    ],
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ sectionIdx: number; imageIdx: number } | null>(null);

  const openLightbox = (sectionIdx: number, imageIdx: number) => {
    setLightbox({ sectionIdx, imageIdx });
  };

  const closeLightbox = () => setLightbox(null);

  const handlePrev = () => {
    if (!lightbox) return;
    const section = gallerySections[lightbox.sectionIdx];
    setLightbox({
      sectionIdx: lightbox.sectionIdx,
      imageIdx: (lightbox.imageIdx - 1 + section.images.length) % section.images.length,
    });
  };

  const handleNext = () => {
    if (!lightbox) return;
    const section = gallerySections[lightbox.sectionIdx];
    setLightbox({
      sectionIdx: lightbox.sectionIdx,
      imageIdx: (lightbox.imageIdx + 1) % section.images.length,
    });
  };

  return (
    <main className="min-h-screen bg-coal pt-20">
      <SEOHead
        title="Gallery | Coal & Curry – Charcoal Grill & Restaurant Ambience"
        description="Explore the visual world of Coal & Curry, Neyveli — live charcoal cooking in action, premium restaurant interiors, stunning food photography, and memorable customer celebrations."
        canonical="https://coalandcurry.com/gallery"
        ogType="website"
        ogUrl="https://coalandcurry.com/gallery"
        ogImage="/assets/generated/gallery-charcoal-cooking.dim_1200x800.png"
      />

      {/* Hero */}
      <div className="relative py-16 bg-smoky/30 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Visual Stories</p>
          <h1 className="section-heading text-5xl sm:text-6xl mb-4">Gallery</h1>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="text-cream/60 font-sans max-w-xl mx-auto">
            A glimpse into the world of Coal & Curry — where fire, flavor, and tradition come alive.
          </p>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {gallerySections.map((section, sectionIdx) => (
          <div key={section.title}>
            <div className="mb-6">
              <p className="font-serif-alt text-gold/60 text-sm uppercase tracking-[0.3em] mb-1">{section.subtitle}</p>
              <h2 className="section-heading text-3xl">{section.title}</h2>
              <div className="gold-divider w-20 mt-2" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {section.images.map((image, imageIdx) => (
                <button
                  key={imageIdx}
                  onClick={() => openLightbox(sectionIdx, imageIdx)}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-coal/0 group-hover:bg-coal/40 transition-colors flex items-center justify-center">
                    <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-coal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-cream text-xs font-sans truncate">{image.alt}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          images={gallerySections[lightbox.sectionIdx].images}
          currentIndex={lightbox.imageIdx}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </main>
  );
}
