export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const responses: Record<string, string[]> = {
  menu: [
    "Our menu features 50+ authentic South Indian dishes across 8 categories! 🍛 We have Veg & Non-Veg Starters, Coal Specials, Biryani & Rice, Dosa & Tiffin, Seafood, Beverages, and Desserts. Visit our Menu page to explore all dishes with prices and descriptions.",
    "Coal & Curry offers a wide range of dishes from crispy Gobi 65 to our signature Coal Smoked Chicken Roast. Our Coal Specials are unique — cooked over live charcoal fire! Check the Menu page for the full list. 🔥"
  ],
  hours: [
    "We're open 7 days a week! ⏰\n• Monday–Friday: 11:00 AM – 11:00 PM\n• Saturday–Sunday: 10:00 AM – 11:30 PM\nWe recommend reserving a table for weekends as we get quite busy!",
    "Our kitchen is open from 11 AM to 11 PM on weekdays, and 10 AM to 11:30 PM on weekends. Last orders are taken 30 minutes before closing. 🕐"
  ],
  reservation: [
    "Booking a table is easy! 🪑 Visit our Reservation page and fill in your date, time, guest count, and occasion. We offer both Indoor and Outdoor seating. You'll receive an SMS confirmation once your booking is confirmed!",
    "To reserve a table, head to our Reserve page. We accommodate groups from 1 to 20+ guests. Special occasions like birthdays and anniversaries get extra attention from our team! 🎉"
  ],
  delivery: [
    "We deliver within a 10 km radius of our Neyveli location! 🛵 Estimated delivery time is 30–45 minutes. You can also order via WhatsApp, Swiggy, or Zomato. Takeaway is available too — just call ahead!",
    "Our delivery service covers Neyveli and surrounding areas. Order online through our website, WhatsApp us at +91 98765 43210, or find us on Swiggy and Zomato. Minimum order for delivery is ₹200. 📦"
  ],
  location: [
    "We're located in Neyveli, Tamil Nadu! 📍 You can find us on Google Maps — just search 'Coal & Curry Neyveli'. Visit our Contact page for the exact address, map, and directions.",
    "Coal & Curry is situated in the heart of Neyveli, Tamil Nadu. Our Contact page has a live Google Maps embed with directions. We're easy to find and have ample parking! 🗺️"
  ],
  offers: [
    "We have amazing offers running right now! 🎉\n• Lunch Combo (20% off)\n• Family Feast Package\n• Weekend Grill Fest\n• Student Discount (15% off with ID)\n• Festival Specials\n• Birthday Package\nVisit our Offers page for details and countdown timers!",
    "Don't miss our current deals! The Weekend Grill Fest is especially popular — unlimited coal-grilled items for a fixed price. Check the Offers page for all active promotions and their expiry dates. ⏳"
  ],
  price: [
    "Our prices are very reasonable for the quality we offer! Starters start from ₹140, Biryanis from ₹260, and our Coal Specials from ₹280. Check the full Menu page for all prices. 💰",
    "We believe in value for money! Our dishes range from ₹60 (Filter Coffee) to ₹980 (Charcoal Grill Platter Combo). Visit the Menu page for complete pricing. 🍽️"
  ],
  payment: [
    "We accept multiple payment methods: 💳\n• UPI (GPay, PhonePe, Paytm)\n• Debit/Credit Cards\n• Net Banking\n• Cash on Delivery\nAll online payments are 100% secure!",
    "You can pay via UPI, cards, net banking, or cash. For online orders, we use a secure payment gateway. We also accept WhatsApp Pay! 📱"
  ],
  special: [
    "Our Coal Specials are what make us unique! 🔥 Every dish in this category is cooked over live charcoal fire — from Coal Smoked Chicken Roast to Firewood Dosa Special. The smoky flavor is absolutely authentic and unforgettable!",
    "The must-try dishes at Coal & Curry are: Coal Smoked Chicken Roast, Seeraga Samba Biryani, Chettinad Chicken Fry, and our Charcoal Grill Platter Combo. These are our chef's signature creations! 👨‍🍳"
  ],
  loyalty: [
    "Join our Loyalty Program and earn points on every order! 🌟 Enroll with your phone number on our Loyalty page. Earn 1 point per ₹10 spent and redeem for free dishes and discounts!",
    "Our loyalty members get exclusive benefits — early access to offers, birthday rewards, and priority reservations. Sign up on the Loyalty page with just your phone number! 🎁"
  ],
};

const fallbackResponses = [
  "I'm Agni, your Coal & Curry assistant! 🔥 I can help you with information about our menu, opening hours, table reservations, delivery, location, and current offers. What would you like to know?",
  "That's a great question! For more specific information, please visit the relevant page on our website or call us at +91 98765 43210. I'm here to help with menu, hours, reservations, delivery, location, and offers! 😊",
  "I'd love to help! Try asking me about our menu, opening hours, how to make a reservation, delivery options, our location, or current offers. 🍛",
];

export function getBotResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();

  if (msg.includes('menu') || msg.includes('dish') || msg.includes('food') || msg.includes('eat') || msg.includes('item')) {
    return responses.menu[Math.floor(Math.random() * responses.menu.length)];
  }
  if (msg.includes('hour') || msg.includes('time') || msg.includes('open') || msg.includes('close') || msg.includes('timing')) {
    return responses.hours[Math.floor(Math.random() * responses.hours.length)];
  }
  if (msg.includes('reserv') || msg.includes('book') || msg.includes('table') || msg.includes('seat')) {
    return responses.reservation[Math.floor(Math.random() * responses.reservation.length)];
  }
  if (msg.includes('deliver') || msg.includes('order') || msg.includes('takeaway') || msg.includes('swiggy') || msg.includes('zomato')) {
    return responses.delivery[Math.floor(Math.random() * responses.delivery.length)];
  }
  if (msg.includes('location') || msg.includes('address') || msg.includes('where') || msg.includes('neyveli') || msg.includes('direction')) {
    return responses.location[Math.floor(Math.random() * responses.location.length)];
  }
  if (msg.includes('offer') || msg.includes('discount') || msg.includes('deal') || msg.includes('promo') || msg.includes('combo')) {
    return responses.offers[Math.floor(Math.random() * responses.offers.length)];
  }
  if (msg.includes('price') || msg.includes('cost') || msg.includes('rate') || msg.includes('how much') || msg.includes('₹')) {
    return responses.price[Math.floor(Math.random() * responses.price.length)];
  }
  if (msg.includes('pay') || msg.includes('upi') || msg.includes('card') || msg.includes('cash')) {
    return responses.payment[Math.floor(Math.random() * responses.payment.length)];
  }
  if (msg.includes('special') || msg.includes('coal') || msg.includes('signature') || msg.includes('best') || msg.includes('recommend')) {
    return responses.special[Math.floor(Math.random() * responses.special.length)];
  }
  if (msg.includes('loyal') || msg.includes('point') || msg.includes('reward') || msg.includes('member')) {
    return responses.loyalty[Math.floor(Math.random() * responses.loyalty.length)];
  }
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('namaste')) {
    return "Vanakkam! 🙏 I'm Agni, your Coal & Curry assistant. Welcome to Coal & Curry — Where Fire Meets Flavor! How can I help you today? Ask me about our menu, reservations, delivery, or anything else!";
  }
  if (msg.includes('thank') || msg.includes('thanks') || msg.includes('bye') || msg.includes('goodbye')) {
    return "Thank you for visiting Coal & Curry! 🔥 We hope to serve you soon. Vanakkam! 🙏";
  }

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}
