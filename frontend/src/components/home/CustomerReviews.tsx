import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useGetTopReviews } from '@/hooks/useQueries';

const fallbackReviews = [
  {
    name: 'Priya Rajan',
    rating: 5,
    comment: 'The Coal Dum Biryani is absolutely divine! The smoky aroma and perfectly spiced rice made it the best biryani I\'ve ever had. Will definitely be back!',
    dish: 'Coal Dum Biryani',
  },
  {
    name: 'Karthik Murugan',
    rating: 5,
    comment: 'Authentic Chettinad flavours that remind me of my grandmother\'s cooking. The Mutton Sukka was perfectly spiced and the service was exceptional.',
    dish: 'Mutton Sukka',
  },
  {
    name: 'Ananya Krishnan',
    rating: 5,
    comment: 'The ambience is fantastic and the food is even better. The Coal Grilled Paneer was smoky, tender, and absolutely delicious. Highly recommend!',
    dish: 'Coal Grilled Paneer',
  },
  {
    name: 'Rajesh Sundaram',
    rating: 4,
    comment: 'Great place for authentic South Indian food. The Chettinad Chicken Curry had the perfect balance of spices. The staff was very friendly and attentive.',
    dish: 'Chettinad Chicken Curry',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-gold-400 fill-gold-400' : 'text-white/25'}`}
        />
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const [current, setCurrent] = useState(0);
  const { data: backendReviews } = useGetTopReviews();

  const reviews = (backendReviews && backendReviews.length > 0)
    ? backendReviews.map((r) => ({
        name: r.name,
        rating: Number(r.rating),
        comment: r.comment,
        dish: r.dish ?? undefined,
      }))
    : fallbackReviews;

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section className="py-20 bg-coal-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-ember-400 text-sm font-bold uppercase tracking-widest mb-2">
            What Our Guests Say
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Stories from Our Table
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto" />
        </div>

        {/* Review Card */}
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-coal-800 border border-coal-700 rounded-2xl p-8 shadow-premium">
            <Quote className="w-10 h-10 text-ember-500/50 mb-4" />
            <p className="text-white text-base sm:text-lg leading-relaxed mb-6 italic">
              "{reviews[current].comment}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-base">{reviews[current].name}</p>
                {reviews[current].dish && (
                  <p className="text-gold-400 text-sm mt-0.5">{reviews[current].dish}</p>
                )}
              </div>
              <StarRating rating={reviews[current].rating} />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-coal-800 border border-coal-700 flex items-center justify-center text-white hover:bg-coal-700 hover:border-gold-500 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? 'bg-gold-400' : 'bg-coal-600'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-coal-800 border border-coal-700 flex items-center justify-center text-white hover:bg-coal-700 hover:border-gold-500 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
