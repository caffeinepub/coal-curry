import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGetTopReviews } from '@/hooks/useQueries';
import { useLanguage } from '@/context/LanguageContext';

const fallbackReviews = [
  { name: 'Priya Rajan', rating: 5, comment: 'The Coal Smoked Chicken Roast is absolutely divine! The smoky flavor is unlike anything I\'ve had before. Authentic Chettinad taste.', dish: 'Coal Smoked Chicken Roast' },
  { name: 'Karthik Murugan', rating: 5, comment: 'Best biryani in Neyveli! The Seeraga Samba Biryani is cooked to perfection. The ambience is premium and the service is excellent.', dish: 'Seeraga Samba Biryani' },
  { name: 'Deepa Sundaram', rating: 5, comment: 'Came for my anniversary dinner and the experience was magical. The coal-grilled dishes have a unique depth of flavor. Highly recommend!', dish: 'Charcoal Grill Platter' },
  { name: 'Vijay Anand', rating: 4, comment: 'The Chettinad Chicken Fry is spicy and authentic. Reminds me of my grandmother\'s cooking. Great place for family dining.', dish: 'Chettinad Chicken Fry' },
  { name: 'Meena Krishnan', rating: 5, comment: 'The Ghee Roast Dosa is crispy perfection! And the filter coffee is the best I\'ve had outside of a traditional home. Will definitely return.', dish: 'Ghee Roast Dosa' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={16}
          className={i <= rating ? 'text-gold fill-gold' : 'text-gold/30'}
        />
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const { t } = useLanguage();
  const { data: backendReviews } = useGetTopReviews();
  const [current, setCurrent] = useState(0);

  const reviews = backendReviews && backendReviews.length > 0
    ? backendReviews.map(r => ({
        name: r.name,
        rating: Number(r.rating),
        comment: r.comment,
        dish: r.dish ?? undefined,
      }))
    : fallbackReviews;

  const prev = () => setCurrent(c => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent(c => (c + 1) % reviews.length);

  const visibleReviews = [
    reviews[current % reviews.length],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ];

  return (
    <section className="py-20 bg-smoky/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-serif-alt text-gold/70 text-sm uppercase tracking-[0.3em] mb-2">What They Say</p>
          <h2 className="section-heading text-4xl sm:text-5xl mb-4">{t('customerReviews')}</h2>
          <div className="gold-divider w-32 mx-auto" />
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((review, idx) => (
              <div
                key={idx}
                className={`card-smoky rounded-lg p-6 transition-all duration-300 ${idx === 1 ? 'border-gold/40 scale-105' : 'border-gold/10'}`}
              >
                <StarRating rating={review.rating} />
                <p className="text-cream/80 font-sans text-sm leading-relaxed mt-4 mb-4 italic">
                  "{review.comment}"
                </p>
                <div className="border-t border-gold/10 pt-4">
                  <p className="font-display text-gold font-semibold">{review.name}</p>
                  {review.dish && (
                    <p className="text-cream/40 text-xs font-sans mt-1">Ordered: {review.dish}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 border border-gold/30 rounded-full text-gold hover:bg-gold/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-gold w-4' : 'bg-gold/30'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 border border-gold/30 rounded-full text-gold hover:bg-gold/10 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
