export const quickReplies = [
  "Menu",
  "Timings",
  "Reservations",
  "Delivery",
  "Specialties",
  "Location",
  "Offers",
  "Payment",
];

const responses: Record<string, string> = {
  menu: "🍛 Our menu features 9 categories: Starters, Dosas & Uttapam, Idly & Vada, Rice & Biryani, Curries & Gravies, Breads, Seafood Specials, Desserts, and Drinks. Visit our Menu page to explore all 50+ authentic South Indian dishes!",
  timings: "🕐 We're open Monday–Friday: 7:00 AM – 10:30 PM, and Saturday–Sunday: 7:00 AM – 11:00 PM. We serve breakfast, lunch, and dinner!",
  hours: "🕐 We're open Monday–Friday: 7:00 AM – 10:30 PM, and Saturday–Sunday: 7:00 AM – 11:00 PM.",
  reservation: "📅 You can book a table through our Reservations page! We accommodate groups of all sizes. For large parties (10+), please call us at +91 78455 82661.",
  reservations: "📅 You can book a table through our Reservations page! We accommodate groups of all sizes. For large parties (10+), please call us at +91 78455 82661.",
  book: "📅 Head to our Reservations page to book your table. We'll confirm your booking shortly!",
  delivery: "🛵 We offer delivery through Swiggy and Zomato. You can also order directly from our website for dine-in pickup. Delivery radius is 5 km from our restaurant.",
  order: "🛒 You can add items to your cart from our Menu page and proceed to checkout. We also deliver via Swiggy and Zomato!",
  location: "📍 We're located at 123 Spice Garden Road, Chennai, Tamil Nadu 600001. Easily accessible by metro and bus. Free parking available!",
  address: "📍 123 Spice Garden Road, Chennai, Tamil Nadu 600001. Near the central metro station.",
  specialties: "⭐ Our signature dishes include: Ghee Roast Dosa, Chettinad Chicken Curry, Fish Curry, Prawn Biryani, Smoked Crab Masala, and Jigarthanda! Each is crafted with authentic Chettinad spices.",
  special: "⭐ Our signature dishes include: Ghee Roast Dosa, Chettinad Chicken Curry, Fish Curry, Prawn Biryani, and Jigarthanda!",
  offers: "🎉 We have exciting offers! Check our Offers page for current deals including family combos, weekday discounts, and seasonal specials. Subscribe to our newsletter for exclusive offers!",
  discount: "🎉 Check our Offers page for current deals and discounts. We also have a Loyalty Program — earn points with every visit!",
  payment: "💳 We accept Cash, UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, and Net Banking. All major payment methods are welcome!",
  pay: "💳 We accept Cash, UPI, Credit/Debit Cards, and Net Banking.",
  veg: "🌿 We have a wide variety of vegetarian options! Starters like Gobi 65, Paneer Tikka, all Dosas, Idly & Vada, Veg Biryani, and more. Our menu clearly marks all veg items with a green badge.",
  vegetarian: "🌿 We have excellent vegetarian options across all categories — from crispy Dosas to rich Paneer curries and refreshing Payasam!",
  dosa: "🫓 Our Dosa menu includes Masala Dosa, Ghee Roast Dosa, Onion Uttapam, Egg Dosa, and Rava Dosa. The Ghee Roast Dosa is our most popular!",
  biryani: "🍛 We serve Prawn Biryani, Chicken Biryani, Mutton Biryani, and Veg Biryani — all slow-cooked with authentic Chettinad spices and fragrant basmati rice.",
  coffee: "☕ Our Filter Coffee is a must-try! Brewed with a special chicory blend and served in the traditional davara set. It's the perfect end to any South Indian meal.",
  contact: "📞 Call us: +91 78455 82661 | Email: isacksanthosh@gmail.com | WhatsApp: +91 78455 82661. We're happy to help!",
  phone: "📞 You can reach us at +91 78455 82661. We're available during restaurant hours.",
  wifi: "📶 Yes, we offer free WiFi for all our dine-in guests! Ask our staff for the password.",
  parking: "🚗 Free parking is available at our restaurant. We have space for 30+ vehicles.",
  spicy: "🌶️ Our spice levels range from mild (Idly, Dosas) to extra hot (Chettinad Chicken, Smoked Crab Masala). Each dish on our menu shows the spice level so you can choose accordingly!",
  seafood: "🦐 Our Seafood Specials include Fish Curry, Fish Moilee, Prawn Masala, Smoked Crab Masala, and Chettinad Fish Fry. All made with fresh, daily-sourced seafood!",
  loyalty: "🏆 Join our Loyalty Program to earn points with every visit! Redeem points for free dishes and exclusive discounts. Sign up at our Loyalty page.",
};

export function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(responses)) {
    if (lower.includes(key)) return response;
  }
  return "🙏 Thank you for your question! For detailed assistance, please call us at +91 78455 82661 or email isacksanthosh@gmail.com. You can also visit our Menu, Reservations, or Contact pages for more information.";
}
