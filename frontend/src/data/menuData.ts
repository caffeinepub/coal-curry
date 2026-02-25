export interface Dish {
  id: string;
  name: string;
  category: string;
  description: string;
  spiceLevel: number;
  priceDisplay: string;
  imageUrl: string;
  isVeg: boolean;
  isSpecial?: boolean;
}

const IMAGES = {
  chicken: '/assets/generated/dish-coal-smoked-chicken.dim_800x600.png',
  biryani: '/assets/generated/dish-chettinad-biryani.dim_800x600.png',
  bbq: '/assets/generated/dish-bbq-wings.dim_800x600.png',
  dosa: '/assets/generated/dish-ghee-roast-dosa.dim_800x600.png',
  // Newly generated dish-specific images
  jigarthanda: '/assets/generated/jigarthanda.dim_400x400.png',
  iceCream: '/assets/generated/ice-cream.dim_400x400.png',
  chettinadChickenCurry: '/assets/generated/chettinad-chicken-curry.dim_400x400.png',
  muttonKolaUrundai: '/assets/generated/mutton-kola-urundai.dim_400x400.png',
  prawnMasala: '/assets/generated/prawn-masala.dim_400x400.png',
  paneerTikka: '/assets/generated/paneer-tikka.dim_400x400.png',
  chettinadFishCurry: '/assets/generated/chettinad-fish-curry.dim_400x400.png',
  biryaniDish: '/assets/generated/biryani.dim_400x400.png',
  parotta: '/assets/generated/parotta.dim_400x400.png',
  rasam: '/assets/generated/rasam.dim_400x400.png',
  sambar: '/assets/generated/sambar.dim_400x400.png',
  curdRice: '/assets/generated/curd-rice.dim_400x400.png',
};

export const menuCategories = [
  'Veg Starters',
  'Non-Veg Starters',
  'Coal Specials',
  'Biryani & Rice',
  'Dosa & Tiffin',
  'Seafood Specials',
  'Beverages',
  'Desserts',
];

export const menuData: Dish[] = [
  // Veg Starters
  { id: 'vs1', name: 'Gobi 65', category: 'Veg Starters', description: 'Crispy cauliflower florets tossed in spiced batter, deep fried to golden perfection.', spiceLevel: 3, priceDisplay: '₹ 180', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'vs2', name: 'Paneer Tikka (Coal Grilled)', category: 'Veg Starters', description: 'Marinated cottage cheese cubes grilled over live coal fire for a smoky, charred finish.', spiceLevel: 2, priceDisplay: '₹ 260', imageUrl: IMAGES.paneerTikka, isVeg: true, isSpecial: true },
  { id: 'vs3', name: 'Baby Corn Pepper Fry', category: 'Veg Starters', description: 'Tender baby corn sautéed with freshly cracked black pepper and curry leaves.', spiceLevel: 3, priceDisplay: '₹ 200', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'vs4', name: 'Mushroom Sukka', category: 'Veg Starters', description: 'Button mushrooms dry-roasted with Chettinad spices and coconut in a traditional wok.', spiceLevel: 3, priceDisplay: '₹ 220', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'vs5', name: 'Chilli Paneer', category: 'Veg Starters', description: 'Indo-Chinese style paneer tossed with bell peppers, onions, and fiery chilli sauce.', spiceLevel: 4, priceDisplay: '₹ 240', imageUrl: IMAGES.paneerTikka, isVeg: true },
  { id: 'vs6', name: 'Veg Cutlet', category: 'Veg Starters', description: 'Crispy mixed vegetable patties seasoned with aromatic spices, served with mint chutney.', spiceLevel: 2, priceDisplay: '₹ 160', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'vs7', name: 'Onion Pakoda', category: 'Veg Starters', description: 'Crunchy onion fritters made with besan batter and green chillies, a classic Tamil snack.', spiceLevel: 2, priceDisplay: '₹ 140', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'vs8', name: 'Vazhaipoo Vadai', category: 'Veg Starters', description: 'Traditional banana flower fritters with lentils and spices, a rare Chettinad delicacy.', spiceLevel: 2, priceDisplay: '₹ 180', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'vs9', name: 'Veg Spring Rolls', category: 'Veg Starters', description: 'Crispy rolls stuffed with seasoned vegetables and glass noodles, served with sweet chilli sauce.', spiceLevel: 1, priceDisplay: '₹ 180', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'vs10', name: 'Mini Idli Sambar', category: 'Veg Starters', description: 'Bite-sized soft idlis dunked in aromatic sambar with ghee and curry leaves.', spiceLevel: 1, priceDisplay: '₹ 160', imageUrl: IMAGES.sambar, isVeg: true },

  // Non-Veg Starters
  { id: 'nvs1', name: 'Chicken 65', category: 'Non-Veg Starters', description: 'Iconic spicy deep-fried chicken with curry leaves and red chillies — a South Indian classic.', spiceLevel: 4, priceDisplay: '₹ 280', imageUrl: IMAGES.chicken, isVeg: false },
  { id: 'nvs2', name: 'Chettinad Chicken Fry', category: 'Non-Veg Starters', description: 'Bone-in chicken marinated in authentic Chettinad masala and pan-fried to perfection.', spiceLevel: 5, priceDisplay: '₹ 320', imageUrl: IMAGES.chettinadChickenCurry, isVeg: false },
  { id: 'nvs3', name: 'Mutton Sukka', category: 'Non-Veg Starters', description: 'Tender mutton pieces dry-roasted with freshly ground spices and coconut in a traditional kadai.', spiceLevel: 4, priceDisplay: '₹ 380', imageUrl: IMAGES.muttonKolaUrundai, isVeg: false },
  { id: 'nvs4', name: 'Pepper Chicken', category: 'Non-Veg Starters', description: 'Juicy chicken tossed with freshly cracked black pepper, ginger, and curry leaves.', spiceLevel: 4, priceDisplay: '₹ 300', imageUrl: IMAGES.chicken, isVeg: false },
  { id: 'nvs5', name: 'Tandoori Chicken (Coal)', category: 'Non-Veg Starters', description: 'Whole chicken marinated in yogurt and spices, slow-roasted over live coal for authentic smokiness.', spiceLevel: 3, priceDisplay: '₹ 420', imageUrl: IMAGES.chicken, isVeg: false, isSpecial: true },
  { id: 'nvs6', name: 'Chicken Lollipop', category: 'Non-Veg Starters', description: 'Frenched chicken wings coated in spiced batter and deep fried, served with dipping sauce.', spiceLevel: 3, priceDisplay: '₹ 320', imageUrl: IMAGES.bbq, isVeg: false },
  { id: 'nvs7', name: 'Fish Fry (Vanjaram)', category: 'Non-Veg Starters', description: 'King mackerel marinated in turmeric and red chilli paste, shallow fried on a tawa.', spiceLevel: 3, priceDisplay: '₹ 360', imageUrl: IMAGES.chettinadFishCurry, isVeg: false },
  { id: 'nvs8', name: 'Prawn Pepper Fry', category: 'Non-Veg Starters', description: 'Juicy prawns sautéed with black pepper, garlic, and curry leaves in a hot iron pan.', spiceLevel: 4, priceDisplay: '₹ 400', imageUrl: IMAGES.prawnMasala, isVeg: false },
  { id: 'nvs9', name: 'Nethili Fry', category: 'Non-Veg Starters', description: 'Crispy anchovies marinated in spiced rice flour batter and deep fried until crunchy.', spiceLevel: 3, priceDisplay: '₹ 240', imageUrl: IMAGES.chicken, isVeg: false },
  { id: 'nvs10', name: 'Egg Podimas', category: 'Non-Veg Starters', description: 'Scrambled eggs cooked with onions, tomatoes, and South Indian spices in a dry preparation.', spiceLevel: 2, priceDisplay: '₹ 180', imageUrl: IMAGES.chicken, isVeg: false },

  // Coal Specials
  { id: 'cs1', name: 'Coal Grilled Paneer Steak', category: 'Coal Specials', description: 'Thick-cut paneer steak marinated in herb butter and grilled directly over glowing coal embers.', spiceLevel: 2, priceDisplay: '₹ 380', imageUrl: IMAGES.paneerTikka, isVeg: true, isSpecial: true },
  { id: 'cs2', name: 'Coal Smoked Chicken Roast', category: 'Coal Specials', description: 'Whole chicken slow-roasted over coal fire with our signature spice rub for deep smoky flavor.', spiceLevel: 3, priceDisplay: '₹ 520', imageUrl: IMAGES.chicken, isVeg: false, isSpecial: true },
  { id: 'cs3', name: 'Coal Grilled Fish', category: 'Coal Specials', description: 'Fresh catch of the day marinated in Chettinad spices and grilled whole over live coal.', spiceLevel: 3, priceDisplay: '₹ 480', imageUrl: IMAGES.chettinadFishCurry, isVeg: false, isSpecial: true },
  { id: 'cs4', name: 'Smoky Mutton Chops', category: 'Coal Specials', description: 'Tender lamb chops marinated overnight and grilled over coal for a rich, smoky crust.', spiceLevel: 4, priceDisplay: '₹ 580', imageUrl: IMAGES.muttonKolaUrundai, isVeg: false, isSpecial: true },
  { id: 'cs5', name: 'Charcoal BBQ Wings', category: 'Coal Specials', description: 'Chicken wings glazed with our house BBQ sauce and charcoal grilled to caramelized perfection.', spiceLevel: 3, priceDisplay: '₹ 360', imageUrl: IMAGES.bbq, isVeg: false, isSpecial: true },
  { id: 'cs6', name: 'Coal Dum Biryani', category: 'Coal Specials', description: 'Aromatic biryani slow-cooked in a sealed clay pot over coal fire for authentic dum cooking.', spiceLevel: 3, priceDisplay: '₹ 480', imageUrl: IMAGES.biryaniDish, isVeg: false, isSpecial: true },
  { id: 'cs7', name: 'Coal Smoked Veg Platter', category: 'Coal Specials', description: 'Seasonal vegetables marinated and smoked over coal, served with three chutneys.', spiceLevel: 2, priceDisplay: '₹ 340', imageUrl: IMAGES.dosa, isVeg: true, isSpecial: true },
  { id: 'cs8', name: 'Firewood Dosa Special', category: 'Coal Specials', description: 'Giant crispy dosa cooked on a traditional firewood tawa with ghee and secret spice blend.', spiceLevel: 1, priceDisplay: '₹ 280', imageUrl: IMAGES.dosa, isVeg: true, isSpecial: true },
  { id: 'cs9', name: 'Smoked Crab Masala', category: 'Coal Specials', description: 'Fresh crab cooked in a rich Chettinad masala with a hint of coal smoke for depth.', spiceLevel: 5, priceDisplay: '₹ 680', imageUrl: IMAGES.prawnMasala, isVeg: false, isSpecial: true },
  { id: 'cs10', name: 'Charcoal Grill Platter Combo', category: 'Coal Specials', description: 'A grand platter of coal-grilled chicken, fish, prawns, and paneer with three dipping sauces.', spiceLevel: 3, priceDisplay: '₹ 980', imageUrl: IMAGES.bbq, isVeg: false, isSpecial: true },

  // Biryani & Rice
  { id: 'br1', name: 'Chicken Biryani', category: 'Biryani & Rice', description: 'Fragrant basmati rice layered with spiced chicken and slow-cooked in dum style.', spiceLevel: 3, priceDisplay: '₹ 320', imageUrl: IMAGES.biryaniDish, isVeg: false },
  { id: 'br2', name: 'Mutton Biryani', category: 'Biryani & Rice', description: 'Tender mutton pieces cooked with aromatic spices and long-grain basmati in traditional dum.', spiceLevel: 4, priceDisplay: '₹ 420', imageUrl: IMAGES.biryaniDish, isVeg: false },
  { id: 'br3', name: 'Prawn Biryani', category: 'Biryani & Rice', description: 'Juicy prawns layered with saffron-infused rice and coastal spices for a seafood delight.', spiceLevel: 3, priceDisplay: '₹ 380', imageUrl: IMAGES.biryaniDish, isVeg: false },
  { id: 'br4', name: 'Veg Biryani', category: 'Biryani & Rice', description: 'Seasonal vegetables and paneer cooked with fragrant basmati and whole spices.', spiceLevel: 2, priceDisplay: '₹ 260', imageUrl: IMAGES.biryaniDish, isVeg: true },
  { id: 'br5', name: 'Egg Biryani', category: 'Biryani & Rice', description: 'Boiled eggs cooked in a spiced masala and layered with aromatic basmati rice.', spiceLevel: 3, priceDisplay: '₹ 280', imageUrl: IMAGES.biryaniDish, isVeg: false },
  { id: 'br6', name: 'Seeraga Samba Biryani', category: 'Biryani & Rice', description: 'Traditional Tamil biryani made with rare seeraga samba rice and authentic Chettinad spices.', spiceLevel: 4, priceDisplay: '₹ 360', imageUrl: IMAGES.biryaniDish, isVeg: false, isSpecial: true },
  { id: 'br7', name: 'Tomato Rice', category: 'Biryani & Rice', description: 'Tangy rice cooked with ripe tomatoes, mustard seeds, and curry leaves in sesame oil.', spiceLevel: 2, priceDisplay: '₹ 180', imageUrl: IMAGES.biryani, isVeg: true },
  { id: 'br8', name: 'Lemon Rice', category: 'Biryani & Rice', description: 'Fluffy rice tempered with mustard, turmeric, and fresh lemon juice — a Tamil comfort classic.', spiceLevel: 1, priceDisplay: '₹ 160', imageUrl: IMAGES.biryani, isVeg: true },
  { id: 'br9', name: 'Curd Rice', category: 'Biryani & Rice', description: 'Cooling yogurt rice tempered with mustard, ginger, and pomegranate — the perfect meal ender.', spiceLevel: 1, priceDisplay: '₹ 160', imageUrl: IMAGES.curdRice, isVeg: true },
  { id: 'br10', name: 'Ghee Rice', category: 'Biryani & Rice', description: 'Fragrant basmati rice cooked in pure cow ghee with whole spices and caramelized onions.', spiceLevel: 1, priceDisplay: '₹ 200', imageUrl: IMAGES.biryani, isVeg: true },

  // Dosa & Tiffin
  { id: 'dt1', name: 'Ghee Roast Dosa', category: 'Dosa & Tiffin', description: 'Paper-thin crispy dosa roasted in generous ghee until golden, served with sambar and chutneys.', spiceLevel: 1, priceDisplay: '₹ 160', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'dt2', name: 'Kari Dosa', category: 'Dosa & Tiffin', description: 'Crispy dosa stuffed with spiced minced meat filling — a Chettinad specialty.', spiceLevel: 4, priceDisplay: '₹ 240', imageUrl: IMAGES.dosa, isVeg: false },
  { id: 'dt3', name: 'Kal Dosa', category: 'Dosa & Tiffin', description: 'Thick, soft stone-cooked dosa with a slightly fermented tang, served with coconut chutney.', spiceLevel: 1, priceDisplay: '₹ 140', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'dt4', name: 'Masala Dosa', category: 'Dosa & Tiffin', description: 'Classic crispy dosa filled with spiced potato masala, served with sambar and three chutneys.', spiceLevel: 2, priceDisplay: '₹ 180', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'dt5', name: 'Onion Uttapam', category: 'Dosa & Tiffin', description: 'Thick savory pancake topped with caramelized onions, tomatoes, and green chillies.', spiceLevel: 2, priceDisplay: '₹ 160', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'dt6', name: 'Idiyappam with Coconut Milk', category: 'Dosa & Tiffin', description: 'Delicate rice noodle strings served with sweet coconut milk and a side of egg curry.', spiceLevel: 1, priceDisplay: '₹ 180', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'dt7', name: 'Pongal', category: 'Dosa & Tiffin', description: 'Creamy rice and lentil porridge tempered with ghee, black pepper, and cashews.', spiceLevel: 1, priceDisplay: '₹ 140', imageUrl: IMAGES.sambar, isVeg: true },
  { id: 'dt8', name: 'Poori Masala', category: 'Dosa & Tiffin', description: 'Fluffy deep-fried wheat bread served with spiced potato masala and coconut chutney.', spiceLevel: 2, priceDisplay: '₹ 160', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'dt9', name: 'Rava Dosa', category: 'Dosa & Tiffin', description: 'Lacy, crispy semolina dosa with onions and green chillies, made to order.', spiceLevel: 2, priceDisplay: '₹ 180', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'dt10', name: 'Kothu Parotta', category: 'Dosa & Tiffin', description: 'Shredded layered parotta stir-fried with eggs, onions, and spiced masala on a hot griddle.', spiceLevel: 3, priceDisplay: '₹ 220', imageUrl: IMAGES.parotta, isVeg: false },

  // Seafood Specials
  { id: 'ss1', name: 'Meen Kuzhambu', category: 'Seafood Specials', description: 'Traditional Tamil fish curry cooked in tamarind gravy with freshly ground Chettinad spices.', spiceLevel: 4, priceDisplay: '₹ 380', imageUrl: IMAGES.chettinadFishCurry, isVeg: false },
  { id: 'ss2', name: 'Prawn Masala', category: 'Seafood Specials', description: 'Succulent prawns cooked in a rich onion-tomato masala with coastal spices.', spiceLevel: 3, priceDisplay: '₹ 420', imageUrl: IMAGES.prawnMasala, isVeg: false },
  { id: 'ss3', name: 'Crab Curry', category: 'Seafood Specials', description: 'Fresh crab cooked in a fiery Chettinad coconut masala — a true coastal delicacy.', spiceLevel: 5, priceDisplay: '₹ 580', imageUrl: IMAGES.prawnMasala, isVeg: false },
  { id: 'ss4', name: 'Fish 65', category: 'Seafood Specials', description: 'Crispy fried fish tossed in a spicy tangy sauce with curry leaves and green chillies.', spiceLevel: 4, priceDisplay: '₹ 320', imageUrl: IMAGES.chettinadFishCurry, isVeg: false },
  { id: 'ss5', name: 'Squid Fry', category: 'Seafood Specials', description: 'Tender squid rings marinated in pepper and spices, shallow fried to a perfect crisp.', spiceLevel: 3, priceDisplay: '₹ 360', imageUrl: IMAGES.prawnMasala, isVeg: false },

  // Beverages
  { id: 'bv1', name: 'Jigarthanda', category: 'Beverages', description: 'Madurai\'s iconic cold drink with milk, almond gum, nannari syrup, and ice cream.', spiceLevel: 0, priceDisplay: '₹ 120', imageUrl: IMAGES.jigarthanda, isVeg: true },
  { id: 'bv2', name: 'Filter Coffee', category: 'Beverages', description: 'Traditional South Indian filter coffee with frothy milk — brewed fresh every hour.', spiceLevel: 0, priceDisplay: '₹ 60', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'bv3', name: 'Rose Milk', category: 'Beverages', description: 'Chilled milk infused with rose syrup and basil seeds — a refreshing Tamil classic.', spiceLevel: 0, priceDisplay: '₹ 80', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'bv4', name: 'Fresh Lime Soda', category: 'Beverages', description: 'Freshly squeezed lime with sparkling water, black salt, and mint — sweet or salted.', spiceLevel: 0, priceDisplay: '₹ 80', imageUrl: IMAGES.dosa, isVeg: true },
  { id: 'bv5', name: 'Tender Coconut', category: 'Beverages', description: 'Fresh tender coconut water served chilled with the soft malai — nature\'s best drink.', spiceLevel: 0, priceDisplay: '₹ 100', imageUrl: IMAGES.dosa, isVeg: true },

  // Desserts
  { id: 'ds1', name: 'Elaneer Payasam', category: 'Desserts', description: 'Creamy tender coconut pudding with milk, sugar, and cardamom — a Kerala-Tamil fusion.', spiceLevel: 0, priceDisplay: '₹ 160', imageUrl: IMAGES.iceCream, isVeg: true },
  { id: 'ds2', name: 'Gulab Jamun', category: 'Desserts', description: 'Soft milk-solid dumplings soaked in rose-cardamom sugar syrup, served warm.', spiceLevel: 0, priceDisplay: '₹ 120', imageUrl: IMAGES.iceCream, isVeg: true },
  { id: 'ds3', name: 'Brownie with Ice Cream', category: 'Desserts', description: 'Warm chocolate brownie served with a scoop of vanilla ice cream and chocolate drizzle.', spiceLevel: 0, priceDisplay: '₹ 200', imageUrl: IMAGES.iceCream, isVeg: true },
  { id: 'ds4', name: 'Kesari', category: 'Desserts', description: 'Traditional semolina halwa with saffron, ghee, cashews, and raisins — a temple sweet.', spiceLevel: 0, priceDisplay: '₹ 100', imageUrl: IMAGES.iceCream, isVeg: true },
  { id: 'ds5', name: 'Falooda', category: 'Desserts', description: 'Layered dessert drink with rose syrup, basil seeds, vermicelli, milk, and ice cream.', spiceLevel: 0, priceDisplay: '₹ 180', imageUrl: IMAGES.iceCream, isVeg: true },
];
