import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useActor } from "../../hooks/useActor";

const staticReviews = [
  {
    name: "Priya Ramachandran",
    rating: 5,
    comment: "The Chettinad Chicken Curry is absolutely divine! Authentic flavors that remind me of my grandmother's cooking. The spice levels are perfect.",
    dish: "Chettinad Chicken Curry",
  },
  {
    name: "Arjun Krishnamurthy",
    rating: 5,
    comment: "Best Ghee Roast Dosa in the city! Crispy, buttery, and served with the most flavorful coconut chutney. Will definitely come back.",
    dish: "Ghee Roast Dosa",
  },
  {
    name: "Meena Sundaram",
    rating: 5,
    comment: "The Filter Coffee here is a revelation. Served in the traditional davara set, it's the perfect end to a wonderful South Indian meal.",
    dish: "Filter Coffee",
  },
  {
    name: "Karthik Venkatesh",
    rating: 4,
    comment: "Prawn Biryani was outstanding — fragrant, perfectly spiced, and generous portions. The Jigarthanda dessert was a delightful surprise!",
    dish: "Prawn Biryani",
  },
  {
    name: "Lakshmi Narayanan",
    rating: 5,
    comment: "Authentic South Indian experience from start to finish. The Idly Sambar is soft and the sambar is rich with tamarind. Highly recommended!",
    dish: "Idly Sambar",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-saffron fill-saffron" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const [current, setCurrent] = useState(0);
  const { actor, isFetching } = useActor();

  const { data: backendReviews } = useQuery({
    queryKey: ["topReviews"],
    queryFn: async () => {
      if (!actor) return [];
      const reviews = await actor.getTopReviews();
      return reviews.map((r) => ({
        name: r.name,
        rating: Number(r.rating),
        comment: r.comment,
        dish: r.dish ?? undefined,
      }));
    },
    enabled: !!actor && !isFetching,
  });

  const reviews = backendReviews && backendReviews.length > 0 ? backendReviews : staticReviews;
  const total = reviews.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [
    reviews[current],
    reviews[(current + 1) % total],
    reviews[(current + 2) % total],
  ].filter(Boolean);

  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-saffron font-medium text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display text-4xl font-bold text-cream mt-2 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-cream/60 max-w-xl mx-auto">
            Real experiences from our valued guests who have savored the authentic flavors of South India.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((review, idx) => (
            <div
              key={idx}
              className={`bg-charcoal border border-saffron/20 rounded-xl p-6 transition-all ${
                idx === 0 ? "border-saffron/50 shadow-warm" : ""
              }`}
            >
              <StarRating rating={review.rating} />
              <p className="text-cream/80 text-sm leading-relaxed mt-3 mb-4 italic">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-saffron/20 flex items-center justify-center text-saffron font-bold font-display">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-cream font-semibold text-sm">{review.name}</p>
                  {review.dish && (
                    <p className="text-saffron text-xs">{review.dish}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-saffron/40 text-saffron hover:bg-saffron hover:text-charcoal transition-colors flex items-center justify-center"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-saffron w-6" : "bg-saffron/30"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-saffron/40 text-saffron hover:bg-saffron hover:text-charcoal transition-colors flex items-center justify-center"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
