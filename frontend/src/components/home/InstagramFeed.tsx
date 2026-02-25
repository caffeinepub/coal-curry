import { useLanguage } from '@/context/LanguageContext';
import { SiInstagram } from 'react-icons/si';

const feedImages = [
  '/assets/generated/gallery-charcoal-cooking.dim_1200x800.png',
  '/assets/generated/dish-coal-smoked-chicken.dim_800x600.png',
  '/assets/generated/gallery-food-spread.dim_1200x800.png',
  '/assets/generated/dish-chettinad-biryani.dim_800x600.png',
  '/assets/generated/gallery-celebration.dim_1200x800.png',
  '/assets/generated/dish-bbq-wings.dim_800x600.png',
];

export default function InstagramFeed() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-coal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">Social</p>
          <h2 className="section-heading text-4xl sm:text-5xl mb-2">{t('followUs')}</h2>
          <a
            href="https://instagram.com/coalandcurry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold/70 hover:text-gold font-sans text-sm transition-colors"
          >
            <SiInstagram size={16} />
            @coalandcurry
          </a>
          <div className="gold-divider w-32 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {feedImages.map((img, idx) => (
            <a
              key={idx}
              href="https://instagram.com/coalandcurry"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded group"
            >
              <img
                src={img}
                alt={`Instagram post ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-coal/0 group-hover:bg-coal/40 transition-colors flex items-center justify-center">
                <SiInstagram size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
