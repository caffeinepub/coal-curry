import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'en' | 'ta';

const translations = {
  en: {
    home: 'Home',
    menu: 'Menu',
    about: 'About',
    offers: 'Offers',
    gallery: 'Gallery',
    blog: 'Blog',
    contact: 'Contact',
    reserve: 'Reserve',
    tagline: 'Where Fire Meets Flavor',
    heroHeadline: 'Authentic South Indian Cuisine Crafted Over Coal Fire',
    viewMenu: 'View Menu',
    reserveTable: 'Reserve Table',
    orderOnline: 'Order Online',
    reserveNow: 'Reserve Now',
    signatureDishes: 'Signature Dishes',
    customerReviews: 'Customer Reviews',
    latestOffers: 'Latest Offers',
    viewAllOffers: 'View All Offers',
    followUs: 'Follow Us',
    ourStory: 'Our Story',
    ourChefs: 'Our Chefs',
    missionVision: 'Mission & Vision',
    hygienicKitchen: 'Hygienic Kitchen',
    addToCart: 'Add to Cart',
    loyalty: 'Loyalty',
    newsletter: 'Newsletter',
    subscribe: 'Subscribe',
    sendMessage: 'Send Message',
    confirmReservation: 'Confirm Reservation',
  },
  ta: {
    home: 'முகப்பு',
    menu: 'மெனு',
    about: 'எங்களை பற்றி',
    offers: 'சலுகைகள்',
    gallery: 'படக்காட்சி',
    blog: 'வலைப்பதிவு',
    contact: 'தொடர்பு',
    reserve: 'முன்பதிவு',
    tagline: 'நெருப்பும் சுவையும் சந்திக்கும் இடம்',
    heroHeadline: 'நிலக்கரி நெருப்பில் சமைக்கப்பட்ட தமிழ் உணவு',
    viewMenu: 'மெனு பார்க்க',
    reserveTable: 'மேசை முன்பதிவு',
    orderOnline: 'ஆன்லைன் ஆர்டர்',
    reserveNow: 'இப்போதே முன்பதிவு',
    signatureDishes: 'சிறப்பு உணவுகள்',
    customerReviews: 'வாடிக்கையாளர் கருத்துகள்',
    latestOffers: 'சலுகைகள்',
    viewAllOffers: 'அனைத்து சலுகைகளும்',
    followUs: 'எங்களை பின்தொடரவும்',
    ourStory: 'எங்கள் கதை',
    ourChefs: 'எங்கள் சமையல்காரர்கள்',
    missionVision: 'நோக்கம் & தொலைநோக்கு',
    hygienicKitchen: 'சுகாதார சமையலறை',
    addToCart: 'கூடையில் சேர்',
    loyalty: 'விசுவாசம்',
    newsletter: 'செய்திமடல்',
    subscribe: 'சந்தா',
    sendMessage: 'செய்தி அனுப்பு',
    confirmReservation: 'முன்பதிவு உறுதிப்படுத்து',
  }
};

type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'ta' : 'en');
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    return translations[language][key] || translations.en[key];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
