/* ==========================================================================
   PERFUME SHOPE - LUXURY E-COMMERCE & DYNAMIC THEME ENGINE
   ========================================================================== */

const PERFUMES_DEFAULT_DB = [
  {
    id: 'p1',
    name: "KHAMRAH D'OR",
    brand: 'Lattafa',
    price: 2899,
    gender: 'Unisex',
    accord: 'Warm Vanilla & Kesar',
    notes: 'Kashmiri Kesar, Cinnamon, Sweet Dates, Praline, Amber Vanilla',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'Bestseller 🇮🇳',
    longevity: '16+ Hours (Beast Mode ⚡)',
    sillage: 'Room Filler (3.5m 💨)',
    season: 'Festive, Winter & Evening Wear 🌙',
    blindBuyInsurance: true,
    inStock: true
  },
  {
    id: 'p2',
    name: 'OUD SUPRÊME',
    brand: 'Rasasi',
    price: 3499,
    gender: 'Unisex',
    accord: 'Royal Dehn Al Oud',
    notes: 'Pure Cambodian Oud, Mysore Sandalwood, Royal Cardamom, Amber',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'Top Pick',
    longevity: '18+ Hours (Eternal 🪵)',
    sillage: 'Intense Heavy Projection 💨',
    season: 'Weddings & Royal Occasions 👑',
    blindBuyInsurance: true,
    inStock: true
  },
  {
    id: 'p3',
    name: 'TURATHI BROWN',
    brand: 'Afnan',
    price: 3199,
    gender: 'Men',
    accord: 'Mysore Sandal & Woods',
    notes: 'Ambergris, Rich Cedarwood, Patchouli, Pink Peppercorn',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'Trending',
    longevity: '14+ Hours (All Day 🌲)',
    sillage: 'Strong 2.5m Sillage 💨',
    season: 'Boardroom & Executive Office 💼',
    blindBuyInsurance: true,
    inStock: true
  },
  {
    id: 'p4',
    name: 'YARA BLUSH',
    brand: 'Lattafa',
    price: 2499,
    gender: 'Women',
    accord: 'Kashmiri Gulab & Rose',
    notes: 'Kashmiri Rose Petals, Tropical Fruits, Vanilla Orchid, Sandalwood',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'Viral Hit',
    longevity: '12+ Hours (Long Lasting 🌸)',
    sillage: 'Pleasant Radiant Sillage ✨',
    season: 'Daily Glamour & Brunch 🥂',
    blindBuyInsurance: true,
    inStock: true
  },
  {
    id: 'p5',
    name: 'CLUB DE NUIT INTENSE',
    brand: 'Armaf',
    price: 3899,
    gender: 'Men',
    accord: 'Fresh Citrus & Monsoon Aqua',
    notes: 'Smoky Birch, Italian Lemon, Pineapple, Blackcurrant, Ambergris',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'Beast Mode ⚡',
    longevity: '16+ Hours (Compliment Monster 🔥)',
    sillage: 'Massive Room Filler (4m 💨)',
    season: 'Indian Summer Heat & Night Outs 🌃',
    blindBuyInsurance: true,
    inStock: true
  },
  {
    id: 'p6',
    name: 'AMIR ONE OUD',
    brand: 'Ajmal',
    price: 4999,
    gender: 'Unisex',
    accord: 'Royal Dehn Al Oud',
    notes: 'Aged Dehn Al Oudh, Frankincense, Sandalwood, Damascene Rose',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'Royal Blend',
    longevity: '20+ Hours (Extrait De Parfum 👑)',
    sillage: 'Regal Enveloping Aura 💨',
    season: 'Heritage Sangeet & VIP Galas ✨',
    blindBuyInsurance: true,
    inStock: true
  },
  {
    id: 'p7',
    name: 'DELINA EXCLUSIF',
    brand: 'Parfums de Marly',
    price: 8499,
    gender: 'Women',
    accord: 'Kashmiri Gulab & Rose',
    notes: 'Turkish Rose, Incense, Lychee, Warm Amber, Bourbon Vanilla',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'Haute Extrait 👑',
    longevity: '15+ Hours (Haute Couture 💎)',
    sillage: 'Enchanting 3m Cloud 🌸',
    season: 'Bridal, Red Carpet & Date Nights 💖',
    blindBuyInsurance: true,
    inStock: true
  },
  {
    id: 'p8',
    name: 'HAWAS POUR HOMME',
    brand: 'Rasasi',
    price: 3699,
    gender: 'Men',
    accord: 'Fresh Citrus & Monsoon Aqua',
    notes: 'Fresh Bergamot, Cinnamon, Orange Blossom, Aquatic Grey Amber',
    image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'All-Season 🌊',
    longevity: '14+ Hours (Aqua Beast ⚡)',
    sillage: 'Sharp Crisp Sillage 💨',
    season: 'Monsoon Rains, Gym & Summer Days ☀️',
    blindBuyInsurance: true,
    inStock: true
  },
  {
    id: 'p9',
    name: 'MYSORE CHANDAN ROYALE',
    brand: 'Perfume Shope Reserve',
    price: 4200,
    gender: 'Unisex',
    accord: 'Mysore Sandal & Woods',
    notes: 'Original Mysore Sandalwood Oil, Cardamom, White Musk, Cedar',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'Artisanal Reserve 🇮🇳',
    longevity: '24+ Hours (Pure Oil Concentrate 🌿)',
    sillage: 'Meditative Warm Aura 🧘',
    season: 'Puja, Festive Celebrations & Meditation 🪔',
    blindBuyInsurance: true,
    inStock: true
  },
  {
    id: 'p10',
    name: 'NEBRAS GOURMAND',
    brand: 'Lattafa Pride',
    price: 2999,
    gender: 'Women',
    accord: 'Warm Vanilla & Kesar',
    notes: 'Red Berries, Cocoa, Sugared Kesar Vanilla, Tonka, Soft Musk',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'Gourmand 🍓',
    longevity: '13+ Hours (Edible Sweetness 🍫)',
    sillage: 'Cozy Seductive Cloud ☁️',
    season: 'Autumn Evenings & Cafe Dates ☕',
    blindBuyInsurance: true,
    inStock: true
  },
  {
    id: 'p11',
    name: 'TOBACCO VANILLE',
    brand: 'Tom Ford',
    price: 11999,
    gender: 'Unisex',
    accord: 'Warm Vanilla & Kesar',
    notes: 'Tobacco Leaf, Spiced Ginger, Cocoa, Tonka Bean, Wood Sap',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'Luxury Niche',
    longevity: '18+ Hours (High Connoisseur 🥃)',
    sillage: 'Dense Opulent Projection 💨',
    season: 'Winter Nights & Royal Celebrations ❄️',
    blindBuyInsurance: true,
    inStock: true
  },
  {
    id: 'p12',
    name: 'AVENTUS NOIR',
    brand: 'Creed',
    price: 13499,
    gender: 'Men',
    accord: 'Mysore Sandal & Woods',
    notes: 'Blackcurrant, Italian Bergamot, Birch, Oakmoss, Indian Vetiver',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80'
    ],
    badge: 'Masterpiece 👑',
    longevity: '16+ Hours (Legendary Alpha ⚡)',
    sillage: 'Unforgettable Magnetic Trail 💨',
    season: 'Signature All-Season Legend 🏆',
    blindBuyInsurance: true,
    inStock: true
  }
];

const DEFAULT_CELEBRITY_WARDROBES = [
  {
    id: 'celeb-srk',
    name: 'Shah Rukh Khan',
    tagline: 'The King of Bollywood Signature Layering',
    subtitle: 'SRK’s iconic blend of smoky Mysore Sandalwood + spicy Woody Amber',
    badge: '👑 King Khan’s Scent Signature',
    rating: '5.0',
    ratingCount: '2.4k+ Fans • 99% Compliments',
    image: 'images/shah-rukh-khan.jpg',
    perfumeImage: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80',
    perfumeName: 'MYSORE CHANDAN ROYALE + TURATHI BROWN',
    perfumeBrand: 'Reserve & Afnan Duo',
    quote: '"I always layer two fragrances: a rich woody oriental base with a fresh peppery leather top note."',
    items: [
      { id: 'p9', name: 'MYSORE CHANDAN ROYALE', brand: 'Reserve', price: 4200 },
      { id: 'p3', name: 'TURATHI BROWN', brand: 'Afnan', price: 3199 }
    ],
    comboPrice: 6599,
    regularPrice: 7399,
    savings: 800
  },
  {
    id: 'celeb-virat',
    name: 'Virat Kohli',
    tagline: 'The Alpha Captain Beast-Mode Signature',
    subtitle: 'Intense Spiced Tobacco Vanilla layered with Royal Dehn Al Oud',
    badge: '🏏 Alpha Champion Sillage',
    rating: '4.9',
    ratingCount: '1.9k+ Fans • 98% Longevity',
    image: 'images/virat-kohli.jpeg',
    perfumeImage: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80',
    perfumeName: "KHAMRAH D'OR + OUD SUPRÊME",
    perfumeBrand: 'Lattafa & Rasasi Duo',
    quote: '"For me, performance is everything. My scent has to project for 16+ hours even in extreme heat."',
    items: [
      { id: 'p1', name: "KHAMRAH D'OR", brand: 'Lattafa', price: 2899 },
      { id: 'p2', name: 'OUD SUPRÊME', brand: 'Rasasi', price: 3499 }
    ],
    comboPrice: 5598,
    regularPrice: 6398,
    savings: 800
  },
  {
    id: 'celeb-deepika',
    name: 'Deepika Padukone',
    tagline: 'Royal Grace & Haute Rose Extrait',
    subtitle: 'Kashmiri Damascene Rose Petals blended with Bourbon Vanilla Gourmand',
    badge: '🌸 Queen of Grace Wardrobe',
    rating: '5.0',
    ratingCount: '3.1k+ Fans • 100% Sillage Trail',
    image: 'images/deepika-padukone.jpeg',
    perfumeImage: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80',
    perfumeName: 'DELINA EXCLUSIF + YARA BLUSH',
    perfumeBrand: 'Parfums de Marly & Lattafa',
    quote: '"A fragrance should be like a silk saree—ethereal, lasting, and leaving an unforgettable floral trail."',
    items: [
      { id: 'p7', name: 'DELINA EXCLUSIF', brand: 'Parfums de Marly', price: 8499 },
      { id: 'p4', name: 'YARA BLUSH', brand: 'Lattafa', price: 2499 }
    ],
    comboPrice: 10198,
    regularPrice: 10998,
    savings: 800
  },
  {
    id: 'celeb-tony',
    name: 'Marvel Titan / Tony Stark',
    tagline: 'Billionaire Tech & High-Voltage Sillage',
    subtitle: 'Smoky Birch Creed Aventus paired with Aquatic Grey Amber Beast Mode',
    badge: '⚡ Titanium Arc Reactor Duo',
    rating: '4.9',
    ratingCount: '2.8k+ Fans • Beast Mode Projection',
    image: 'images/tony-stark.webp',
    perfumeImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80',
    perfumeName: 'CLUB DE NUIT INTENSE + HAWAS',
    perfumeBrand: 'Armaf & Rasasi Duo',
    quote: '"Jarvis, set sillage projection to maximum overload. Unapologetic power."',
    items: [
      { id: 'p5', name: 'CLUB DE NUIT INTENSE', brand: 'Armaf', price: 3899 },
      { id: 'p8', name: 'HAWAS POUR HOMME', brand: 'Rasasi', price: 3699 }
    ],
    comboPrice: 6798,
    regularPrice: 7598,
    savings: 800
  }
];

function getStoredCelebrityWardrobes() {
  try {
    const saved = localStorage.getItem('perfumes_celebrity_wardrobes');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return DEFAULT_CELEBRITY_WARDROBES;
}

const INITIAL_COMMUNITY_POSTS = [
  {
    id: 'sotd-1',
    author: 'Rohan Deshpande',
    city: 'Pune (FC Road Boutique Regular)',
    date: '2 hours ago',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    sotd: "Khamrah D'Or + Mysore Chandan Royale",
    occasion: 'Friend’s Sangeet Night at Koregaon Park',
    compliments: 14,
    longevityRating: '16.5 Hours',
    text: 'Layered 3 sprays of Mysore Chandan as base on collarbones, topped with 4 sprays of Khamrah D’Or. Total compliment magnet! Still projecting strongly the next morning.',
    likes: 42,
    duoIds: ['p1', 'p9'],
    verifiedPurchase: true
  },
  {
    id: 'sotd-2',
    author: 'Ananya Singhania',
    city: 'Mumbai',
    date: '5 hours ago',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    sotd: 'Delina Exclusif + Yara Blush',
    occasion: 'Sunday Rooftop High Tea',
    compliments: 9,
    longevityRating: '14 Hours',
    text: 'The Blind Buy Insurance gave me confidence to order. Tested the 2ml vial first and fell in love instantly. Ethereal Turkish rose cloud that lasted through Mumbai humidity!',
    likes: 38,
    duoIds: ['p7', 'p4'],
    verifiedPurchase: true
  },
  {
    id: 'sotd-3',
    author: 'Vikramaditya Roy',
    city: 'Bengaluru',
    date: 'Yesterday',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80',
    sotd: 'Club De Nuit Intense + Hawas Pour Homme',
    occasion: 'Executive Boardroom Meeting & Gym',
    compliments: 11,
    longevityRating: '18 Hours',
    text: 'Pure beast mode. The smoky birch blends flawlessly with the aquatic grey amber. Even after 1 hour of intense workout, projection remained unmatched.',
    likes: 67,
    duoIds: ['p5', 'p8'],
    verifiedPurchase: true
  }
];

let cart = [];
let currentUser = null;
let currentGenderTheme = 'All';
let selectedAccord = 'All';
let searchQuery = '';
let discountCoupon = { code: '', amount: 0 };
let bottleEngravingText = '';
let isEngravingEnabled = false;

let deliveryAddress = {
  mode: 'manual',
  fullAddress: '',
  city: 'Pune',
  state: 'Maharashtra',
  pincode: '411004',
  lat: null,
  lng: null
};

let discoveryBoxState = {
  size: 5,
  price: 999,
  selected: ['p1', 'p5', 'p9', 'p4', 'p8']
};

let alchemyState = {
  baseId: 'p2',
  topId: 'p1'
};

let communityPosts = [...INITIAL_COMMUNITY_POSTS];

function formatRupees(amount) {
  return `₹${Number(amount || 0).toLocaleString('en-IN')}`;
}

function getStoredProducts() {
  const saved = localStorage.getItem('perfumes_catalog');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }
  localStorage.setItem('perfumes_catalog', JSON.stringify(PERFUMES_DEFAULT_DB));
  return PERFUMES_DEFAULT_DB;
}

function getStoreSettings() {
  const saved = localStorage.getItem('perfumes_settings');
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  return {
    storeName: 'PERFUME SHOPE',
    tagline: 'Haute Parfumerie & Luxury Attars • India',
    whatsappNumber: '919579453006',
    upiVpa: 'perfumeshope@upi'
  };
}

function getWhatsAppNumber() {
  const settings = getStoreSettings();
  return settings.whatsappNumber || '919579453006';
}

document.addEventListener('DOMContentLoaded', () => {
  loadSiteVisualStyles();
  loadCartFromStorage();
  loadUserFromStorage();
  initVisitorTracker();

  const savedGender = localStorage.getItem('perfume_selected_gender') || 'All';
  switchGenderTheme(savedGender, false);
  
  initHeroSlider();
  setCatalogViewMode(catalogViewMode);
  renderWizard();
  renderCelebrityWardrobes();
  renderDiscoveryBoxBuilder();
  renderAlchemyBlender();
  renderCommunityFeed();
  initGlobalVideoShowcase();
  updateCartBadge();

  setTimeout(() => {
    if (!localStorage.getItem('perfume_lead_captured')) {
      openLeadGiftModal();
    }
  }, 4000);

  window.addEventListener('load', () => {
    setTimeout(initGoogleSignIn, 800);
  });
});

// Run immediately on script execution to prevent style flash
loadSiteVisualStyles();
applyHeroBannerOpacity();

// Cross-tab real-time style sync
window.addEventListener('storage', (e) => {
  if (e.key === 'perfumes_site_style') {
    loadSiteVisualStyles();
  }
  if (e.key === 'perfumes_hero_opacity') {
    applyHeroBannerOpacity();
  }
  if (e.key === 'perfumes_hero_banners') {
    setHeroSlide(currentHeroSlideIndex);
  }
  if (e.key === 'perfumes_video_settings') {
    initGlobalVideoShowcase();
  }
});

function loadSiteVisualStyles() {
  const style = localStorage.getItem('perfumes_site_style') || 'glassmorphism';
  document.documentElement.setAttribute('data-style', style);
  document.body.setAttribute('data-style', style);
}

function applyHeroBannerOpacity() {
  const opacityVal = parseInt(localStorage.getItem('perfumes_hero_opacity') || '55', 10);
  document.documentElement.style.setProperty('--hero-opacity', (opacityVal / 100).toString());
}

// 1. SHOPPING CART & ENGRAVING
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('perfumes_cart');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }
}

function saveCartToStorage() {
  localStorage.setItem('perfumes_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

function addToCart(productId, event = null) {
  if (event) event.stopPropagation();
  const products = getStoredProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      accord: product.accord,
      qty: 1
    });
  }

  saveCartToStorage();
  openCartDrawer();
  showToast(`Added '${product.name}' to cart 🛍️`, 'success');
}

function buyNow(productId, event = null) {
  if (event) event.stopPropagation();
  addToCart(productId);
  openCartDrawer();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCartToStorage();
  showToast('Item removed from cart');
}

function updateCartQty(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += change;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCartToStorage();
  }
}

function updateCartBadge() {
  const count = cart.reduce((total, item) => total + item.qty, 0);
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(b => {
    b.innerText = count;
    b.classList.toggle('hidden', count === 0);
  });
}

function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  const panel = document.getElementById('cart-drawer-panel');
  if (overlay && panel) {
    overlay.classList.remove('hidden');
    setTimeout(() => panel.classList.add('open'), 10);
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  const panel = document.getElementById('cart-drawer-panel');
  if (overlay && panel) {
    panel.classList.remove('open');
    setTimeout(() => overlay.classList.add('hidden'), 350);
  }
}

function toggleBottleEngraving(enabled) {
  isEngravingEnabled = enabled;
  const inputContainer = document.getElementById('engraving-input-container');
  if (inputContainer) {
    inputContainer.classList.toggle('hidden', !enabled);
  }
  renderCartDrawer();
}

function updateEngravingText(text) {
  bottleEngravingText = typeof sanitizeInput === 'function' ? sanitizeInput(text.trim()) : text.trim();
  renderCartDrawer();
}

function renderCartDrawer() {
  const listEl = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const discountRowEl = document.getElementById('cart-discount-row');
  const discountValEl = document.getElementById('cart-discount-val');
  const totalValEl = document.getElementById('cart-total-val');
  const footerEl = document.getElementById('cart-footer-section');

  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div class="py-12 text-center space-y-3">
        <div class="w-16 h-16 rounded-2xl theme-bg-surface border theme-border flex items-center justify-center theme-text-muted mx-auto text-2xl">
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
        <p class="font-heading text-sm theme-text-secondary">Your Luxury Scent Cart is Empty</p>
        <button onclick="closeCartDrawer()" class="theme-btn-primary px-4 py-2 rounded-xl text-xs font-bold uppercase">Explore Royal Fragrances</button>
      </div>
    `;
    if (footerEl) footerEl.classList.add('hidden');
    return;
  }

  if (footerEl) footerEl.classList.remove('hidden');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const total = Math.max(0, subtotal - discountCoupon.amount);

  listEl.innerHTML = cart.map(item => `
    <div class="p-3 rounded-2xl theme-card border theme-border flex items-center gap-3">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&auto=format&fit=crop&q=60';" class="w-14 h-14 rounded-xl object-cover border theme-border">
      <div class="flex-1 min-w-0">
        <h4 class="font-heading text-xs font-bold theme-text-main uppercase truncate">${item.name}</h4>
        <p class="text-[10px] theme-text-muted truncate">${item.brand} • ${item.accord}</p>
        <p class="text-xs font-bold theme-accent mt-0.5">${formatRupees(item.price)}</p>
        
        ${isEngravingEnabled && bottleEngravingText ? `
          <span class="inline-block mt-1 px-2 py-0.5 rounded text-[9px] theme-badge">
            ✨ Laser Engraved: "${bottleEngravingText}"
          </span>
        ` : ''}
      </div>

      <div class="flex items-center gap-2 theme-bg-surface px-2 py-1 rounded-xl border theme-border">
        <button onclick="updateCartQty('${item.id}', -1)" class="theme-text-muted hover:theme-text-main px-1 text-xs">-</button>
        <span class="text-xs font-bold theme-text-main font-mono">${item.qty}</span>
        <button onclick="updateCartQty('${item.id}', 1)" class="theme-text-muted hover:theme-text-main px-1 text-xs">+</button>
      </div>

      <button onclick="removeFromCart('${item.id}')" class="theme-text-muted hover:text-red-500 p-1">
        <i class="fa-solid fa-trash text-xs"></i>
      </button>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.innerText = formatRupees(subtotal);
  if (discountRowEl && discountValEl) {
    if (discountCoupon.amount > 0) {
      discountRowEl.classList.remove('hidden');
      discountValEl.innerText = `- ${formatRupees(discountCoupon.amount)} (${discountCoupon.code})`;
    } else {
      discountRowEl.classList.add('hidden');
    }
  }
  if (totalValEl) totalValEl.innerText = formatRupees(total);
}

function applyPromoCode() {
  const input = document.getElementById('cart-coupon-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'ROYAL500' || code === 'FIRST500') {
    discountCoupon = { code: code, amount: 500 };
    showToast('Promo Code ROYAL500 applied! ₹500 OFF 🎉', 'success');
  } else if (code === 'MARVEL10' || code === 'FEMME10') {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const disc = Math.round(subtotal * 0.10);
    discountCoupon = { code: code, amount: disc };
    showToast(`10% VIP Discount Applied (-${formatRupees(disc)})!`, 'success');
  } else {
    showToast('Invalid Coupon Code. Try ROYAL500', 'error');
  }
  renderCartDrawer();
}

// 2. ADDRESS SELECTION (GPS VS MANUAL)
function setAddressMode(mode) {
  deliveryAddress.mode = mode;
  const gpsView = document.getElementById('addr-gps-view');
  const manualView = document.getElementById('addr-manual-view');
  const gpsBtn = document.getElementById('addr-mode-gps-btn');
  const manualBtn = document.getElementById('addr-mode-manual-btn');

  if (mode === 'gps') {
    gpsView.classList.remove('hidden');
    manualView.classList.add('hidden');
    gpsBtn.className = 'flex-1 py-2 rounded-xl text-xs font-bold bg-[#16a34a] text-white shadow-sm flex items-center justify-center gap-1.5 transition-all';
    manualBtn.className = 'flex-1 py-2 rounded-xl text-xs font-medium theme-card flex items-center justify-center gap-1.5 transition-all';
    fetchAutomaticGPSLocation();
  } else {
    gpsView.classList.add('hidden');
    manualView.classList.remove('hidden');
    manualBtn.className = 'flex-1 py-2 rounded-xl text-xs font-bold theme-btn-primary shadow-sm flex items-center justify-center gap-1.5 transition-all';
    gpsBtn.className = 'flex-1 py-2 rounded-xl text-xs font-medium theme-card flex items-center justify-center gap-1.5 transition-all';
  }
}

function fetchAutomaticGPSLocation() {
  const statusEl = document.getElementById('gps-status-text');
  const coordsEl = document.getElementById('gps-coords-display');
  if (!navigator.geolocation) {
    statusEl.innerHTML = `<span class="text-red-500">Geolocation not supported by browser. Please use Manual Address.</span>`;
    return;
  }

  statusEl.innerHTML = `<i class="fa-solid fa-spinner fa-spin theme-accent"></i> Calibrating satellite coordinates for high-precision Pune delivery pin...`;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lng = pos.coords.longitude.toFixed(6);
      deliveryAddress.lat = lat;
      deliveryAddress.lng = lng;

      coordsEl.innerText = `🛰️ Lat: ${lat}, Long: ${lng} (Precision: ±${Math.round(pos.coords.accuracy)}m)`;

      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.display_name) {
            deliveryAddress.fullAddress = `${data.display_name} (GPS: ${lat}, ${lng})`;
            statusEl.innerHTML = `
              <div class="p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-xs">
                <span class="text-green-600 font-bold block">🟢 High-Precision GPS Lock Verified:</span>
                <p class="theme-text-main mt-0.5">${deliveryAddress.fullAddress}</p>
              </div>
            `;
          } else {
            deliveryAddress.fullAddress = `Pune High-Precision Pin: ${lat}, ${lng}`;
            statusEl.innerHTML = `
              <div class="p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-xs">
                <span class="text-green-600 font-bold block">📍 GPS Location:</span>
                <p class="theme-text-main">${deliveryAddress.fullAddress}</p>
              </div>
            `;
          }
        })
        .catch(() => {
          deliveryAddress.fullAddress = `FC Road Area, Pune - 411004 (GPS: ${lat}, ${lng})`;
          statusEl.innerHTML = `
            <div class="p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-xs">
              <span class="text-green-600 font-bold block">📍 GPS Location Verified:</span>
              <p class="theme-text-main">${deliveryAddress.fullAddress}</p>
            </div>
          `;
        });
    },
    (err) => {
      statusEl.innerHTML = `<span class="text-yellow-600">GPS access denied. Switched to Manual Address.</span>`;
      setAddressMode('manual');
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

function saveManualAddress() {
  const line1 = document.getElementById('man-addr-line1')?.value.trim() || '';
  const city = document.getElementById('man-city')?.value.trim() || 'Pune';
  const state = document.getElementById('man-state')?.value.trim() || 'Maharashtra';
  const pin = document.getElementById('man-pincode')?.value.trim() || '411004';

  deliveryAddress.fullAddress = `${line1}, ${city}, ${state} - ${pin}`;
  deliveryAddress.city = city;
  deliveryAddress.state = state;
  deliveryAddress.pincode = pin;
}

// 3. CHECKOUT & ORDERS
function handleCheckoutOrder(paymentMethod) {
  if (cart.length === 0) {
    showToast('Your cart is empty', 'error');
    return;
  }

  if (deliveryAddress.mode === 'manual') {
    saveManualAddress();
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const total = Math.max(0, subtotal - discountCoupon.amount);
  const orderId = 'ORD-IN-' + Date.now().toString().slice(-6);

  const orderData = {
    id: orderId,
    timestamp: new Date().toISOString(),
    customer: currentUser ? currentUser.name : (localStorage.getItem('visitor_name') || 'Valued Fragrance Connoisseur'),
    phone: currentUser ? currentUser.phone : (localStorage.getItem('visitor_phone') || '+91 95794 53006'),
    email: currentUser ? currentUser.email : 'guest@perfumeshope.in',
    items: [...cart],
    subtotal: subtotal,
    discount: discountCoupon.amount,
    total: total,
    paymentMethod: paymentMethod,
    engraving: isEngravingEnabled && bottleEngravingText ? bottleEngravingText : null,
    address: deliveryAddress.fullAddress || 'FC Road Boutique Store Pickup, Pune, Maharashtra - 411004',
    status: 'Confirmed'
  };

  let allOrders = [];
  try {
    const saved = localStorage.getItem('perfumes_orders');
    if (saved) allOrders = JSON.parse(saved);
  } catch (e) {}
  allOrders.unshift(orderData);
  localStorage.setItem('perfumes_orders', JSON.stringify(allOrders));

  if (typeof MongoSync !== 'undefined' && MongoSync.pushOrder) {
    MongoSync.pushOrder(orderData);
  }

  if (paymentMethod === 'WhatsApp') {
    const waNumber = getWhatsAppNumber();
    let msg = `*🛍️ NEW ORDER - PERFUME SHOPE INDIA*\n`;
    msg += `*Order ID:* ${orderData.id}\n`;
    msg += `*Customer:* ${orderData.customer} (${orderData.phone})\n`;
    msg += `--------------------------------\n`;
    orderData.items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name} (${item.brand}) x ${item.qty} = ₹${(item.price * item.qty).toLocaleString('en-IN')}\n`;
    });
    msg += `--------------------------------\n`;
    if (orderData.engraving) {
      msg += `✨ *Laser Engraving:* "${orderData.engraving}"\n`;
    }
    msg += `*Subtotal:* ₹${orderData.subtotal.toLocaleString('en-IN')}\n`;
    if (orderData.discount > 0) msg += `*Discount:* -₹${orderData.discount.toLocaleString('en-IN')}\n`;
    msg += `*Total Amount:* ₹${orderData.total.toLocaleString('en-IN')}\n`;
    msg += `*Payment:* ${orderData.paymentMethod}\n`;
    msg += `*Delivery Address:* ${orderData.address}\n\n`;
    msg += `*Includes:* Free 2ml Tester Vial + Blind Buy Insurance 🛡️\n`;
    msg += `Please confirm my genuine batch packaging & dispatch timeline.`;

    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  } else if (paymentMethod === 'UPI') {
    openUPIModal(orderData);
  }

  cart = [];
  saveCartToStorage();
  closeCartDrawer();
  openOrderSuccessModal(orderData);
}

function openUPIModal(orderData) {
  const modal = document.getElementById('upi-payment-modal');
  if (!modal) return;
  const qrImg = document.getElementById('upi-qr-image');
  if (qrImg) {
    const upiLink = `upi://pay?pa=perfumeshope@upi&pn=Perfume%20Shope&am=${orderData.total}&cu=INR&tn=Order-${orderData.id}`;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;
  }
  document.getElementById('upi-order-id').innerText = orderData.id;
  document.getElementById('upi-amount-val').innerText = formatRupees(orderData.total);
  modal.classList.remove('hidden');
}

function closeUPIModal() {
  document.getElementById('upi-payment-modal')?.classList.add('hidden');
}

function confirmUPIPaymentDone() {
  closeUPIModal();
  showToast('Payment verification received! Your order is being packed with genuine batch seal.', 'success');
}

let lastPlacedOrderId = null;

function openOrderSuccessModal(orderData) {
  lastPlacedOrderId = orderData.id;
  const modal = document.getElementById('order-success-modal');
  if (!modal) {
    showToast(`Order #${orderData.id} Confirmed!`, 'success');
    return;
  }
  document.getElementById('success-order-id').innerText = orderData.id;
  document.getElementById('success-total-val').innerText = formatRupees(orderData.total);
  document.getElementById('success-address-val').innerText = orderData.address;
  modal.classList.remove('hidden');
}

function closeOrderSuccessModal() {
  document.getElementById('order-success-modal')?.classList.add('hidden');
}

function trackNewlyPlacedOrder() {
  closeOrderSuccessModal();
  openOrderTrackingModal(lastPlacedOrderId);
}

// 4. LIVE ORDER TRACKING CONTROLLER
function openOrderTrackingModal(prefillOrderId = '') {
  const modal = document.getElementById('order-tracking-modal');
  if (!modal) return;

  const searchInput = document.getElementById('tracking-search-input');
  if (searchInput) {
    searchInput.value = prefillOrderId || (currentUser ? currentUser.phone : '');
  }

  modal.classList.remove('hidden');
  if (prefillOrderId) {
    lookupOrderTracking();
  } else {
    // Show most recent order if available
    let allOrders = [];
    try {
      allOrders = JSON.parse(localStorage.getItem('perfumes_orders')) || [];
    } catch (e) {}
    if (allOrders.length > 0) {
      renderTrackingDetails(allOrders[0]);
    } else {
      document.getElementById('tracking-result-container').innerHTML = `
        <div class="p-8 text-center theme-bg-surface rounded-2xl border theme-border space-y-2">
          <div class="w-10 h-10 rounded-full border theme-border flex items-center justify-center theme-accent mx-auto text-sm">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <h4 class="font-heading text-sm font-bold theme-text-main uppercase">No Order Selected</h4>
          <p class="text-xs theme-text-muted">Enter your Order ID (e.g. ORD-123456) or phone number to check live dispatch status.</p>
        </div>
      `;
    }
  }
}

function closeOrderTrackingModal() {
  document.getElementById('order-tracking-modal')?.classList.add('hidden');
}

function lookupOrderTracking() {
  const input = document.getElementById('tracking-search-input')?.value.trim();
  const container = document.getElementById('tracking-result-container');
  if (!container) return;

  if (!input) {
    showToast('Please enter an Order ID or Phone Number', 'error');
    return;
  }

  let allOrders = [];
  try {
    allOrders = JSON.parse(localStorage.getItem('perfumes_orders')) || [];
  } catch (e) {}

  const cleanQuery = input.toLowerCase().replace(/[\s\-\+]/g, '');
  const matchedOrder = allOrders.find(o => {
    const oId = String(o.id || '').toLowerCase().replace(/[\s\-\+]/g, '');
    const oPhone = String(o.phone || '').toLowerCase().replace(/[\s\-\+]/g, '');
    return oId.includes(cleanQuery) || oPhone.includes(cleanQuery);
  });

  if (!matchedOrder) {
    container.innerHTML = `
      <div class="p-8 text-center theme-bg-surface rounded-2xl border theme-border space-y-3">
        <div class="w-12 h-12 rounded-full bg-amber-950/40 border border-amber-500/40 text-amber-400 flex items-center justify-center text-lg mx-auto">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <h4 class="font-heading text-base font-bold theme-text-main uppercase">Order Not Found</h4>
        <p class="text-xs theme-text-muted max-w-sm mx-auto">We couldn't find an active order matching "<strong class="theme-text-main">${input}</strong>". Please verify your Order ID or contact boutique support.</p>
        <button onclick="window.open('https://wa.me/919579453006?text=${encodeURIComponent('Hello Perfume Shope, I need help tracking my order: ' + input)}', '_blank')" class="theme-btn-primary px-4 py-2 rounded-xl text-xs font-bold uppercase inline-flex items-center gap-1.5 shadow-md">
          <i class="fa-brands fa-whatsapp"></i>
          <span>Ask on WhatsApp</span>
        </button>
      </div>
    `;
    return;
  }

  renderTrackingDetails(matchedOrder);
}

function renderTrackingDetails(order) {
  const container = document.getElementById('tracking-result-container');
  if (!container) return;

  const status = (order.status || 'Placed').toLowerCase();
  let stepIndex = 0;
  let statusBadgeClass = 'bg-blue-950 text-blue-300 border-blue-700';
  let statusIcon = 'fa-receipt';

  if (status.includes('deliver')) {
    stepIndex = 4;
    statusBadgeClass = 'bg-green-950 text-green-300 border-green-700';
    statusIcon = 'fa-circle-check';
  } else if (status.includes('out')) {
    stepIndex = 3;
    statusBadgeClass = 'bg-purple-950 text-purple-300 border-purple-700';
    statusIcon = 'fa-motorcycle';
  } else if (status.includes('dispatch') || status.includes('transit') || status.includes('shipped')) {
    stepIndex = 2;
    statusBadgeClass = 'bg-amber-950 text-amber-300 border-amber-700';
    statusIcon = 'fa-truck-fast';
  } else if (status.includes('pack')) {
    stepIndex = 1;
    statusBadgeClass = 'bg-indigo-950 text-indigo-300 border-indigo-700';
    statusIcon = 'fa-box-open';
  } else {
    stepIndex = 0;
    statusBadgeClass = 'bg-blue-950 text-blue-300 border-blue-700';
    statusIcon = 'fa-file-invoice-dollar';
  }

  const steps = [
    {
      title: 'Order Placed & Confirmed',
      desc: `Verified payment via ${order.paymentMethod || 'UPI'}. Free 2ml tester vial assigned.`,
      icon: 'fa-receipt'
    },
    {
      title: 'Quality Check & Luxury Packaging',
      desc: 'Authenticity hologram sealed. Velvet presentation box cushioning applied.',
      icon: 'fa-box-open'
    },
    {
      title: 'Dispatched / In Air Transit',
      desc: order.courier ? `Handed over to ${order.courier} (AWB: ${order.awb || 'Generated'}).` : 'Assigned to BlueDart Air Express / Pune Speed Dispatch.',
      icon: 'fa-plane-departure'
    },
    {
      title: 'Out for Delivery',
      desc: 'Delivery executive out for doorstep handoff. Please keep phone available.',
      icon: 'fa-motorcycle'
    },
    {
      title: 'Delivered & Scent Ready',
      desc: 'Package delivered. Enjoy your luxury fragrance & Blind Buy guarantee!',
      icon: 'fa-champagne-glasses'
    }
  ];

  container.innerHTML = `
    <!-- Top Order Card -->
    <div class="p-4 sm:p-5 rounded-2xl theme-bg-surface border theme-border space-y-3">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b theme-border pb-3">
        <div>
          <span class="text-[10px] uppercase font-bold theme-text-muted block">Order ID</span>
          <span class="font-heading font-bold text-base theme-accent font-mono">${order.id}</span>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${statusBadgeClass}">
          <i class="fa-solid ${statusIcon}"></i>
          <span>${order.status || 'Confirmed & Processing'}</span>
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div>
          <span class="text-[10px] uppercase theme-text-muted font-semibold block">Customer</span>
          <span class="font-bold theme-text-main block">${order.customer}</span>
          <span class="theme-text-muted text-[11px] font-mono">${order.phone}</span>
        </div>
        <div>
          <span class="text-[10px] uppercase theme-text-muted font-semibold block">Courier & AWB</span>
          <span class="font-bold theme-text-main block">${order.courier || 'BlueDart Express'}</span>
          <span class="theme-accent text-[11px] font-mono font-bold">${order.awb ? 'AWB: ' + order.awb : 'AWB: In Assignment'}</span>
        </div>
        <div>
          <span class="text-[10px] uppercase theme-text-muted font-semibold block">Order Total</span>
          <span class="font-heading font-bold text-base theme-accent">${formatRupees(order.total)}</span>
          <span class="text-[10px] text-green-600 dark:text-green-400 font-semibold block">✓ Paid via ${order.paymentMethod || 'UPI'}</span>
        </div>
      </div>

      <div class="pt-2 border-t theme-border text-xs">
        <span class="text-[10px] uppercase theme-text-muted font-semibold block">Delivery Address:</span>
        <p class="theme-text-secondary leading-relaxed">${order.address}</p>
      </div>
    </div>

    <!-- Live Stepper -->
    <div class="p-4 sm:p-5 rounded-2xl theme-card border theme-border space-y-4">
      <span class="text-[10px] uppercase tracking-wider font-bold theme-accent block">Shipment Progress Stepper</span>
      
      <div class="space-y-4 pt-1">
        ${steps.map((st, idx) => {
          const isCompleted = idx < stepIndex;
          const isActive = idx === stepIndex;
          const stateClass = isCompleted ? 'completed' : (isActive ? 'active' : 'pending');

          return `
            <div class="tracking-stepper-step ${stateClass}">
              ${idx < steps.length - 1 ? '<div class="tracking-stepper-line"></div>' : ''}
              <div class="tracking-step-dot">
                <i class="fa-solid ${isCompleted ? 'fa-check' : st.icon}"></i>
              </div>
              <div class="space-y-0.5 min-w-0 flex-1">
                <div class="flex items-center justify-between gap-2">
                  <h5 class="font-heading text-xs sm:text-sm font-bold ${isActive ? 'theme-accent' : (isCompleted ? 'text-green-500 dark:text-green-400' : 'theme-text-muted')} uppercase">
                    ${st.title}
                  </h5>
                  ${isActive ? '<span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 animate-pulse">Current Stage</span>' : ''}
                </div>
                <p class="text-[11px] ${isActive ? 'theme-text-secondary font-medium' : 'theme-text-muted'} leading-relaxed">
                  ${st.desc}
                </p>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Items in Order -->
    <div class="p-4 sm:p-5 rounded-2xl theme-bg-surface border theme-border space-y-3">
      <span class="text-[10px] uppercase tracking-wider font-bold theme-accent block">Items In This Shipment (${order.items ? order.items.length : 0})</span>
      <div class="divide-y theme-border">
        ${order.items ? order.items.map(item => `
          <div class="py-2.5 flex items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-3">
              <img src="${item.image || 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=120&auto=format&fit=crop&q=80'}" alt="${item.name}" class="w-10 h-10 rounded-xl object-cover border theme-border shrink-0">
              <div>
                <span class="font-heading font-bold theme-text-main uppercase block truncate">${item.name}</span>
                <span class="text-[10px] theme-text-muted">${item.brand || 'Luxury Extrait'} • Qty: ${item.qty || 1}</span>
              </div>
            </div>
            <span class="font-heading font-bold theme-accent shrink-0">${formatRupees(item.price * (item.qty || 1))}</span>
          </div>
        `).join('') : '<p class="text-xs theme-text-muted">No item details available.</p>'}
      </div>
    </div>

    <!-- Need Help Button -->
    <div class="flex items-center justify-between gap-3 p-3.5 rounded-2xl theme-card border theme-border">
      <div class="flex items-center gap-2.5">
        <div class="w-9 h-9 rounded-xl bg-green-950/60 border border-green-600 text-green-400 flex items-center justify-center text-sm">
          <i class="fa-brands fa-whatsapp"></i>
        </div>
        <div>
          <span class="text-xs font-bold theme-text-main block">Questions regarding delivery?</span>
          <span class="text-[10px] theme-text-muted">Chat with our FC Road Pune concierge team.</span>
        </div>
      </div>
      <button onclick="window.open('https://wa.me/919579453006?text=${encodeURIComponent('Hi Perfume Shope team, I would like an update on my Order ' + order.id)}', '_blank')" class="theme-btn-primary px-3.5 py-2 rounded-xl text-xs font-bold uppercase shrink-0 flex items-center gap-1.5 shadow-md">
        <span>Chat Now</span>
      </button>
    </div>
  `;
}

// 4. CELEBRITY SCENT WARDROBES (ANIMATED LUXURY SLIDER)
let celebritySliderIndex = 0;
let celebritySliderInterval = null;

function renderCelebrityWardrobes() {
  const container = document.getElementById('celebrity-wardrobe-slider-track') || document.getElementById('celebrity-wardrobe-grid');
  if (!container) return;

  const wardrobes = getStoredCelebrityWardrobes();

  container.innerHTML = wardrobes.map((c, idx) => {
    const starCount = Math.floor(Number(c.rating || 5));
    const starsHtml = '★'.repeat(starCount) + (starCount < 5 ? '☆'.repeat(5 - starCount) : '');

    return `
    <div onclick="openCelebrityDetailModal('${c.id}')" class="luxury-slider-item four-col celebrity-card rounded-3xl p-5 theme-card border theme-border flex flex-col justify-between space-y-4 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:border-[#C59B27]/70">
      
      <!-- Top Header: Celebrity Photo & Perfume Flacon Photo -->
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-3 min-w-0">
          <div class="relative shrink-0">
            <img src="${c.image || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600'}" alt="${c.name}" class="w-16 h-16 rounded-2xl object-cover border-2 border-[#C59B27] shadow-md group-hover:scale-105 transition-transform duration-300">
            <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#C59B27] text-[#120D0A] flex items-center justify-center text-[10px] font-bold shadow-sm">
              <i class="fa-solid fa-crown text-[8px]"></i>
            </span>
          </div>
          <div class="min-w-0">
            <span class="px-2 py-0.5 rounded-full text-[9px] font-bold theme-badge inline-block mb-1 truncate max-w-full">
              ${c.badge || '🌟 Iconic Signature'}
            </span>
            <h3 class="font-heading text-sm sm:text-base font-bold theme-text-main uppercase truncate group-hover:theme-accent transition-colors">${c.name}</h3>
            <p class="text-[11px] theme-text-muted truncate">${c.tagline || ''}</p>
          </div>
        </div>

        ${c.perfumeImage ? `
          <div class="shrink-0 relative" title="Signature Perfume with Celeb">
            <img src="${c.perfumeImage}" alt="${c.perfumeName || 'Perfume Flacon'}" class="w-14 h-14 rounded-2xl object-cover border theme-border shadow-sm p-0.5 bg-white/5 group-hover:scale-110 transition-transform duration-300">
            <span class="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 bg-amber-500 text-black font-extrabold text-[8px] rounded-full uppercase tracking-tighter">Duo</span>
          </div>
        ` : ''}
      </div>

      <!-- Star Rating & Compliments Badge -->
      <div class="flex items-center justify-between px-3 py-1.5 rounded-xl theme-bg-surface border theme-border text-xs">
        <div class="flex items-center gap-1 text-amber-400 text-xs font-bold">
          <span>${starsHtml}</span>
          <span class="text-xs font-mono theme-text-main font-bold ml-1">${c.rating || '5.0'}</span>
        </div>
        <span class="text-[10px] text-green-600 dark:text-green-400 font-semibold flex items-center gap-1">
          <i class="fa-solid fa-sparkles text-[9px]"></i>
          <span>${c.ratingCount || '99% Compliment Magnet'}</span>
        </span>
      </div>

      <!-- Celebrity Quote / Story -->
      <blockquote class="text-xs italic theme-text-secondary p-3 rounded-2xl theme-bg-surface border theme-border leading-relaxed relative">
        <i class="fa-solid fa-quote-left text-[9px] text-[#C59B27] mr-1 opacity-70"></i>
        ${c.quote || 'A timeless, magnetic scent combination that commands elegance.'}
      </blockquote>

      <!-- Perfume Duo Breakdown -->
      <div class="space-y-1.5 pt-1 border-t theme-border">
        <div class="flex justify-between items-center text-[10px]">
          <span class="font-bold theme-accent uppercase tracking-wider">Layering Composition:</span>
          <span class="text-[9px] theme-text-muted font-mono">${c.perfumeBrand || 'Haute Duo'}</span>
        </div>
        <div class="p-2.5 rounded-xl theme-bg-surface border theme-border text-[11px] space-y-1">
          <span class="font-bold theme-text-main block uppercase text-xs truncate">${c.perfumeName || (c.items ? c.items.map(i => i.name).join(' + ') : 'Signature Fragrance')}</span>
          <p class="text-[10px] theme-text-muted truncate">${c.subtitle || 'Custom blended for high-longevity sillage'}</p>
        </div>
      </div>

      <!-- Quick Exploration Link -->
      <div class="flex items-center justify-between text-[11px] font-bold theme-accent hover:underline pt-0.5">
        <span>✨ Explore Scent Story & Layering</span>
        <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
      </div>

      <!-- Pricing & Add Duo to Cart -->
      <div class="pt-2 flex items-center justify-between border-t theme-border" onclick="event.stopPropagation()">
        <div>
          <span class="text-[10px] theme-text-muted line-through">${formatRupees(c.regularPrice || 7999)}</span>
          <span class="font-heading text-base sm:text-lg font-bold theme-accent block">${formatRupees(c.comboPrice || 6999)}</span>
          <span class="text-[9px] font-bold text-green-600 dark:text-green-400">Save ${formatRupees(c.savings || 800)} Combo</span>
        </div>

        <button onclick="buyCelebrityDuo('${c.id}')" class="theme-btn-primary px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5 hover:scale-105 transition-transform">
          <i class="fa-solid fa-cart-plus"></i>
          <span>Add Duo</span>
        </button>
      </div>

    </div>
    `;
  }).join('');

  renderCelebritySliderDots();
  initCelebritySliderAutoPlay();
}

function openCelebrityDetailModal(celebId) {
  const wardrobes = getStoredCelebrityWardrobes();
  const celeb = wardrobes.find(c => c.id === celebId) || wardrobes[0];
  if (!celeb) return;

  const modal = document.getElementById('celebrity-detail-modal');
  if (!modal) return;

  const celebImg = document.getElementById('cdm-celeb-img');
  if (celebImg) {
    celebImg.src = celeb.image || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600';
    celebImg.alt = celeb.name;
  }

  const badgeEl = document.getElementById('cdm-badge');
  if (badgeEl) badgeEl.innerText = celeb.badge || '🌟 Iconic Scent Wardrobe';

  const nameEl = document.getElementById('cdm-name');
  if (nameEl) nameEl.innerText = celeb.name;

  const taglineEl = document.getElementById('cdm-tagline');
  if (taglineEl) taglineEl.innerText = celeb.tagline || '';

  const starCount = Math.floor(Number(celeb.rating || 5));
  const starsEl = document.getElementById('cdm-stars');
  if (starsEl) starsEl.innerText = '★'.repeat(starCount) + (starCount < 5 ? '☆'.repeat(5 - starCount) : '');

  const ratingValEl = document.getElementById('cdm-rating-val');
  if (ratingValEl) ratingValEl.innerText = celeb.rating || '5.0';

  const reviewsEl = document.getElementById('cdm-reviews-text');
  if (reviewsEl) reviewsEl.innerText = celeb.ratingCount || '99% Compliment Magnet';

  const quoteEl = document.getElementById('cdm-quote-text');
  if (quoteEl) quoteEl.innerText = celeb.quote || 'A timeless, magnetic fragrance pairing designed to project unforgettable elegance.';

  const brandTag = document.getElementById('cdm-brand-tag');
  if (brandTag) brandTag.innerText = celeb.perfumeBrand || 'Haute Duo Extrait';

  const perfumeImg = document.getElementById('cdm-perfume-img');
  if (perfumeImg) {
    perfumeImg.src = celeb.perfumeImage || celeb.image || 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600';
    perfumeImg.alt = celeb.perfumeName || 'Perfume Flacons';
  }

  const perfumeNameEl = document.getElementById('cdm-perfume-name');
  if (perfumeNameEl) perfumeNameEl.innerText = celeb.perfumeName || (celeb.items ? celeb.items.map(i => i.name).join(' + ') : 'Signature Fragrance Duo');

  const subtitleEl = document.getElementById('cdm-subtitle');
  if (subtitleEl) subtitleEl.innerText = celeb.subtitle || 'Specially formulated dual layering for maximum silage and 16+ hour skin projection.';

  const regularPrice = celeb.regularPrice || 7999;
  const comboPrice = celeb.comboPrice || 6999;
  const savings = celeb.savings || Math.max(0, regularPrice - comboPrice) || 800;

  const regEl = document.getElementById('cdm-regular-price');
  if (regEl) regEl.innerText = formatRupees(regularPrice);

  const comboEl = document.getElementById('cdm-combo-price');
  if (comboEl) comboEl.innerText = formatRupees(comboPrice);

  const savingsEl = document.getElementById('cdm-savings-badge');
  if (savingsEl) savingsEl.innerText = `Save ${formatRupees(savings)} Duo Discount (Code: CELEBDUO)`;

  const buyBtn = document.getElementById('cdm-buy-btn');
  if (buyBtn) {
    buyBtn.onclick = () => {
      closeCelebrityDetailModal();
      buyCelebrityDuo(celeb.id);
    };
  }

  modal.classList.remove('hidden');
}

function closeCelebrityDetailModal() {
  document.getElementById('celebrity-detail-modal')?.classList.add('hidden');
}

function renderCelebritySliderDots() {
  const dotsContainer = document.getElementById('celebrity-slider-dots');
  if (!dotsContainer) return;

  const wardrobes = getStoredCelebrityWardrobes();

  dotsContainer.innerHTML = wardrobes.map((_, idx) => `
    <button onclick="jumpToCelebritySlide(${idx})" class="slider-dot-btn ${idx === celebritySliderIndex ? 'active' : ''}" aria-label="Celebrity Slide ${idx + 1}"></button>
  `).join('');
}

function slideCelebrityWardrobe(direction) {
  const track = document.getElementById('celebrity-wardrobe-slider-track');
  if (!track) return;

  const cardWidth = track.firstElementChild ? track.firstElementChild.offsetWidth + 20 : 300;
  track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

function jumpToCelebritySlide(index) {
  const track = document.getElementById('celebrity-wardrobe-slider-track');
  if (!track) return;
  const cardWidth = track.firstElementChild ? track.firstElementChild.offsetWidth + 20 : 300;
  track.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  celebritySliderIndex = index;
  renderCelebritySliderDots();
}

function updateCelebritySliderDots() {
  const track = document.getElementById('celebrity-wardrobe-slider-track');
  if (!track || !track.firstElementChild) return;
  const cardWidth = track.firstElementChild.offsetWidth + 20;
  const currentIndex = Math.round(track.scrollLeft / cardWidth);
  const wardrobes = getStoredCelebrityWardrobes();
  if (currentIndex !== celebritySliderIndex && currentIndex >= 0 && currentIndex < wardrobes.length) {
    celebritySliderIndex = currentIndex;
    renderCelebritySliderDots();
  }
}

function initCelebritySliderAutoPlay() {
  clearInterval(celebritySliderInterval);
  const track = document.getElementById('celebrity-wardrobe-slider-track');
  if (!track) return;

  celebritySliderInterval = setInterval(() => {
    if (track.matches(':hover')) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 15) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slideCelebrityWardrobe(1);
    }
  }, 4500);
}

function buyCelebrityDuo(celebId) {
  const wardrobes = getStoredCelebrityWardrobes();
  const celeb = wardrobes.find(c => c.id === celebId);
  if (!celeb) return;

  const products = getStoredProducts();
  const savings = Number(celeb.savings) || (celeb.regularPrice && celeb.comboPrice ? Math.max(0, celeb.regularPrice - celeb.comboPrice) : 800);

  if (celeb.items && Array.isArray(celeb.items) && celeb.items.length > 0) {
    celeb.items.forEach(cItem => {
      const prod = products.find(p => p.id === cItem.id);
      if (prod) {
        const existing = cart.find(i => i.id === prod.id);
        if (existing) existing.qty += 1;
        else cart.push({ id: prod.id, name: prod.name, brand: prod.brand, price: prod.price, image: prod.image, accord: prod.accord, qty: 1 });
      } else {
        const existing = cart.find(i => i.name === cItem.name);
        if (existing) existing.qty += 1;
        else cart.push({ id: 'celeb-item-' + Date.now() + Math.random(), name: cItem.name, brand: cItem.brand || 'Luxury Extrait', price: cItem.price || Math.round(celeb.comboPrice / 2), image: celeb.perfumeImage || celeb.image, accord: 'Celebrity Choice', qty: 1 });
      }
    });
    discountCoupon = { code: 'CELEBDUO', amount: savings };
  } else {
    // Custom single/duo combo item
    const comboId = 'celeb-combo-' + celeb.id;
    const existing = cart.find(i => i.id === comboId);
    if (existing) {
      existing.qty += 1;
    } else {
      const itemPrice = celeb.regularPrice && celeb.regularPrice > celeb.comboPrice ? celeb.regularPrice : (celeb.comboPrice || 5999);
      cart.push({
        id: comboId,
        name: `${celeb.name} Signature Wardrobe (${celeb.perfumeName || 'Luxury Duo'})`,
        brand: celeb.perfumeBrand || 'Haute Duo Extrait',
        price: itemPrice,
        image: celeb.perfumeImage || celeb.image,
        accord: 'Celebrity Wardrobe',
        qty: 1
      });
    }
    if (celeb.regularPrice && celeb.regularPrice > celeb.comboPrice) {
      discountCoupon = { code: 'CELEBDUO', amount: savings };
    }
  }

  saveCartToStorage();
  openCartDrawer();
  showToast(`Added ${celeb.name}'s Wardrobe Duo (Saved ${formatRupees(savings)})! 👑`, 'success');
}

// 5. DISCOVERY SAMPLE BOX BUILDER
function setDiscoveryBoxSize(size) {
  discoveryBoxState.size = size;
  discoveryBoxState.price = size === 3 ? 699 : 999;
  if (discoveryBoxState.selected.length > size) {
    discoveryBoxState.selected = discoveryBoxState.selected.slice(0, size);
  }
  renderDiscoveryBoxBuilder();
}

function toggleDiscoveryItem(productId) {
  const idx = discoveryBoxState.selected.indexOf(productId);
  if (idx !== -1) {
    discoveryBoxState.selected.splice(idx, 1);
  } else {
    if (discoveryBoxState.selected.length < discoveryBoxState.size) {
      discoveryBoxState.selected.push(productId);
    } else {
      showToast(`Your velvet box holds ${discoveryBoxState.size} miniatures max. Remove one to swap!`, 'info');
      return;
    }
  }
  renderDiscoveryBoxBuilder();
}

function renderDiscoveryBoxBuilder() {
  const slotsContainer = document.getElementById('discovery-slots-container');
  const selectorGrid = document.getElementById('discovery-selector-grid');
  const priceDisplay = document.getElementById('discovery-price-display');
  const addBtn = document.getElementById('discovery-add-to-cart-btn');

  if (!slotsContainer || !selectorGrid) return;

  const products = getStoredProducts();

  const slotsHtml = [];
  for (let i = 0; i < discoveryBoxState.size; i++) {
    const pId = discoveryBoxState.selected[i];
    const prod = pId ? products.find(p => p.id === pId) : null;

    if (prod) {
      slotsHtml.push(`
        <div class="velvet-slot filled rounded-2xl p-3 text-center relative group">
          <button onclick="toggleDiscoveryItem('${prod.id}')" class="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-800 text-white text-[10px] flex items-center justify-center shadow-sm">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <img src="${prod.image}" alt="${prod.name}" class="w-12 h-12 mx-auto rounded-lg object-cover border theme-border mb-1.5">
          <span class="font-heading text-[10px] font-bold theme-text-main block uppercase truncate">${prod.name}</span>
          <span class="text-[9px] theme-accent font-bold block">5ml Tester</span>
        </div>
      `);
    } else {
      slotsHtml.push(`
        <div class="velvet-slot rounded-2xl p-4 text-center flex flex-col items-center justify-center min-h-[105px]">
          <i class="fa-solid fa-plus theme-text-muted text-sm mb-1"></i>
          <span class="text-[10px] theme-text-secondary font-medium">Slot ${i + 1} Empty</span>
          <span class="text-[8px] theme-text-muted">Tap below to pick</span>
        </div>
      `);
    }
  }
  slotsContainer.innerHTML = slotsHtml.join('');

  selectorGrid.innerHTML = products.map(prod => {
    const isSelected = discoveryBoxState.selected.includes(prod.id);
    return `
      <div onclick="toggleDiscoveryItem('${prod.id}')" class="cursor-pointer p-2.5 rounded-2xl border transition-all ${isSelected ? 'theme-bg-surface border-2 theme-border' : 'theme-card border theme-border hover:border-gray-400'} flex items-center gap-2.5">
        <img src="${prod.image}" alt="${prod.name}" class="w-10 h-10 rounded-lg object-cover border theme-border">
        <div class="flex-1 min-w-0">
          <span class="font-heading text-xs font-bold theme-text-main block truncate uppercase">${prod.name}</span>
          <span class="text-[10px] theme-text-muted block">${prod.accord}</span>
        </div>
        <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs ${isSelected ? 'theme-btn-primary' : 'border theme-border theme-text-muted'}">
          <i class="fa-solid ${isSelected ? 'fa-check' : 'fa-plus'}"></i>
        </div>
      </div>
    `;
  }).join('');

  if (priceDisplay) priceDisplay.innerText = formatRupees(discoveryBoxState.price);
  if (addBtn) {
    const isFull = discoveryBoxState.selected.length === discoveryBoxState.size;
    addBtn.disabled = !isFull;
    addBtn.innerText = isFull 
      ? `Add Velvet Box to Cart (${formatRupees(discoveryBoxState.price)})`
      : `Pick ${discoveryBoxState.size - discoveryBoxState.selected.length} More Fragrance${discoveryBoxState.size - discoveryBoxState.selected.length > 1 ? 's' : ''}`;
  }
}

function addDiscoveryBoxToCart() {
  if (discoveryBoxState.selected.length < discoveryBoxState.size) {
    showToast(`Please fill all ${discoveryBoxState.size} slots in your discovery box`, 'info');
    return;
  }

  const products = getStoredProducts();
  const selectedNames = discoveryBoxState.selected.map(id => {
    const p = products.find(prod => prod.id === id);
    return p ? p.name : 'Miniature';
  }).join(', ');

  const boxItem = {
    id: 'discovery-box-' + Date.now(),
    name: `ROYAL VELVET DISCOVERY BOX (${discoveryBoxState.size}x 5ml)`,
    brand: 'Perfume Shope Reserve',
    price: discoveryBoxState.price,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&auto=format&fit=crop&q=80',
    accord: `Includes: ${selectedNames}`,
    qty: 1
  };

  cart.push(boxItem);
  saveCartToStorage();
  openCartDrawer();
  showToast(`Added ${discoveryBoxState.size}-Piece Discovery Sample Box to Cart! 🎁`, 'success');
}

// 6. FRAGRANCE LAYERING ALCHEMY LAB
function setAlchemyBase(id) {
  alchemyState.baseId = id;
  renderAlchemyBlender();
}

function setAlchemyTop(id) {
  alchemyState.topId = id;
  renderAlchemyBlender();
}

function renderAlchemyBlender() {
  const baseGrid = document.getElementById('alchemy-base-grid');
  const topGrid = document.getElementById('alchemy-top-grid');
  const scoreVal = document.getElementById('alchemy-synergy-score');
  const projectionVal = document.getElementById('alchemy-projection-rating');
  const comboPriceVal = document.getElementById('alchemy-combo-price');

  if (!baseGrid || !topGrid) return;

  const products = getStoredProducts();
  const baseProd = products.find(p => p.id === alchemyState.baseId) || products[1];
  const topProd = products.find(p => p.id === alchemyState.topId) || products[0];

  const baseOptions = products.filter(p => p.gender !== 'Women').slice(0, 4);
  baseGrid.innerHTML = baseOptions.map(p => `
    <button onclick="setAlchemyBase('${p.id}')" class="w-full p-2.5 rounded-2xl border text-left transition-all ${alchemyState.baseId === p.id ? 'theme-bg-surface border-2 theme-border shadow-sm' : 'theme-card border theme-border hover:border-gray-400'}">
      <span class="font-heading text-xs font-bold theme-text-main block uppercase truncate">${p.name}</span>
      <span class="text-[10px] theme-text-muted block">${p.accord}</span>
    </button>
  `).join('');

  const topOptions = products.slice(0, 4);
  topGrid.innerHTML = topOptions.map(p => `
    <button onclick="setAlchemyTop('${p.id}')" class="w-full p-2.5 rounded-2xl border text-left transition-all ${alchemyState.topId === p.id ? 'theme-bg-surface border-2 theme-border shadow-sm' : 'theme-card border theme-border hover:border-gray-400'}">
      <span class="font-heading text-xs font-bold theme-text-main block uppercase truncate">${p.name}</span>
      <span class="text-[10px] theme-text-muted block">${p.accord}</span>
    </button>
  `).join('');

  const regularTotal = baseProd.price + topProd.price;
  const comboPrice = Math.round(regularTotal * 0.85);

  document.getElementById('alchemy-base-name').innerText = baseProd.name;
  document.getElementById('alchemy-top-name').innerText = topProd.name;
  if (scoreVal) scoreVal.innerText = '98% Royal Synergy ✨';
  if (projectionVal) projectionVal.innerText = '18+ Hours Beast Mode ⚡';
  if (comboPriceVal) comboPriceVal.innerText = formatRupees(comboPrice);
}

function addLayeringDuoToCart() {
  const products = getStoredProducts();
  const baseProd = products.find(p => p.id === alchemyState.baseId);
  const topProd = products.find(p => p.id === alchemyState.topId);
  if (!baseProd || !topProd) return;

  addToCart(baseProd.id);
  addToCart(topProd.id);

  const savings = Math.round((baseProd.price + topProd.price) * 0.15);
  discountCoupon = { code: 'ALCHEMY15', amount: savings };

  saveCartToStorage();
  openCartDrawer();
  showToast(`Layering Duo Added! Saved ${formatRupees(savings)} with 15% Alchemy Discount 🧪`, 'success');
}

// 7. THE SCENT CLUB - COMMUNITY SOTD FEED (ANIMATED LUXURY SLIDER)
let communitySliderIndex = 0;
let communitySliderInterval = null;

function renderCommunityFeed() {
  const container = document.getElementById('community-slider-track') || document.getElementById('community-feed-grid');
  if (!container) return;

  container.innerHTML = communityPosts.map(post => `
    <div class="luxury-slider-item three-col rounded-3xl p-5 theme-card border theme-border flex flex-col justify-between space-y-3.5 shadow-sm hover:shadow-xl transition-all duration-300">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="${post.avatar}" alt="${post.author}" class="w-10 h-10 rounded-full object-cover border theme-border shrink-0">
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-xs theme-text-main">${post.author}</span>
              ${post.verifiedPurchase ? '<span class="text-[10px] text-green-600 dark:text-green-400 font-bold">✓ Verified</span>' : ''}
            </div>
            <span class="text-[10px] theme-text-muted">${post.city} • ${post.date}</span>
          </div>
        </div>

        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold theme-badge shrink-0">
          ⚡ ${post.longevityRating}
        </span>
      </div>

      <div class="p-3 rounded-2xl theme-bg-surface border theme-border space-y-1">
        <div class="flex items-center justify-between text-[11px]">
          <span class="theme-text-muted">Scent of the Day:</span>
          <span class="font-heading font-bold theme-text-main uppercase truncate">${post.sotd}</span>
        </div>
      </div>

      ${post.image ? `
        <div class="rounded-2xl overflow-hidden border theme-border max-h-48">
          <img src="${post.image}" alt="${post.sotd}" class="w-full h-36 object-cover hover:scale-105 transition-transform duration-500">
        </div>
      ` : ''}

      <p class="text-xs theme-text-secondary italic leading-relaxed">
        "${post.text}"
      </p>

      <div class="pt-2 flex items-center justify-between border-t theme-border">
        <button onclick="likeCommunityPost('${post.id}')" class="text-xs theme-text-muted hover:text-red-500 flex items-center gap-1.5 transition-colors">
          <i class="fa-solid fa-heart text-red-500"></i>
          <span>${post.likes} Upvotes</span>
        </button>

        <button onclick="buyCommunityDuo(['${post.duoIds[0]}', '${post.duoIds[1]}'])" class="text-xs font-bold theme-accent hover:underline flex items-center gap-1">
          <span>Buy This Duo</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    </div>
  `).join('');

  renderCommunitySliderDots();
  initCommunitySliderAutoPlay();
}

function renderCommunitySliderDots() {
  const dotsContainer = document.getElementById('community-slider-dots');
  if (!dotsContainer) return;

  dotsContainer.innerHTML = communityPosts.map((_, idx) => `
    <button onclick="jumpToCommunitySlide(${idx})" class="slider-dot-btn ${idx === communitySliderIndex ? 'active' : ''}" aria-label="Review ${idx + 1}"></button>
  `).join('');
}

function slideCommunityFeed(direction) {
  const track = document.getElementById('community-slider-track');
  if (!track) return;
  const cardWidth = track.firstElementChild ? track.firstElementChild.offsetWidth + 20 : 320;
  track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

function jumpToCommunitySlide(index) {
  const track = document.getElementById('community-slider-track');
  if (!track) return;
  const cardWidth = track.firstElementChild ? track.firstElementChild.offsetWidth + 20 : 320;
  track.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  communitySliderIndex = index;
  renderCommunitySliderDots();
}

function updateCommunitySliderDots() {
  const track = document.getElementById('community-slider-track');
  if (!track || !track.firstElementChild) return;
  const cardWidth = track.firstElementChild.offsetWidth + 20;
  const currentIndex = Math.round(track.scrollLeft / cardWidth);
  if (currentIndex !== communitySliderIndex && currentIndex >= 0 && currentIndex < communityPosts.length) {
    communitySliderIndex = currentIndex;
    renderCommunitySliderDots();
  }
}

function initCommunitySliderAutoPlay() {
  clearInterval(communitySliderInterval);
  const track = document.getElementById('community-slider-track');
  if (!track) return;

  communitySliderInterval = setInterval(() => {
    if (track.matches(':hover')) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 15) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slideCommunityFeed(1);
    }
  }, 5000);
}

function likeCommunityPost(postId) {
  const post = communityPosts.find(p => p.id === postId);
  if (post) {
    post.likes += 1;
    renderCommunityFeed();
    showToast('Upvoted compliment story! ❤️');
  }
}

function buyCommunityDuo(duoIds) {
  const products = getStoredProducts();
  duoIds.forEach(id => {
    const prod = products.find(p => p.id === id);
    if (prod) {
      const existing = cart.find(i => i.id === prod.id);
      if (existing) existing.qty += 1;
      else cart.push({ ...prod, qty: 1 });
    }
  });

  discountCoupon = { code: 'COMMUNITY10', amount: 600 };
  saveCartToStorage();
  openCartDrawer();
  showToast('Community Layering Combo Added with ₹600 Discount! 👑', 'success');
}

// SOTD Community Post Image Handlers
function processImageFile(file, maxWidth = 1200, maxHeight = 1200, quality = 0.85) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      return reject(new Error('Please select a valid image file (JPG, PNG, WebP)'));
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve({
          dataUrl,
          width,
          height,
          originalSize: file.size,
          compressedSize: Math.round(dataUrl.length * 0.75)
        });
      };
      img.onerror = () => reject(new Error('Failed to load image file'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

async function handleSotdFileUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    showToast('Loading & compressing photo...', 'info');
    const result = await processImageFile(file, 800, 800, 0.85);
    document.getElementById('post-sotd-image').value = result.dataUrl;
    previewSotdImage(result.dataUrl, file.name);
    showToast('Bottle photo attached to post! 📸', 'success');
  } catch (err) {
    showToast(err.message || 'Photo upload failed', 'error');
  }
}

function previewSotdImage(url, filename = '') {
  const previewBox = document.getElementById('post-image-preview-box');
  const previewImg = document.getElementById('post-preview-img');
  const previewTitle = document.getElementById('post-preview-title');
  if (!previewBox || !previewImg) return;

  if (url && url.trim().length > 0) {
    previewImg.src = url.trim();
    if (previewTitle) previewTitle.innerText = filename || 'Attached Bottle Photo';
    previewBox.classList.remove('hidden');
  } else {
    previewBox.classList.add('hidden');
  }
}

function clearSotdImage() {
  document.getElementById('post-sotd-image').value = '';
  const fileInp = document.getElementById('post-image-file');
  if (fileInp) fileInp.value = '';
  document.getElementById('post-image-preview-box')?.classList.add('hidden');
}

function handleCommunityPostSubmit(e) {
  e.preventDefault();
  const clean = (val) => typeof sanitizeInput === 'function' ? sanitizeInput(val.trim()) : val.trim();
  const name = clean(document.getElementById('post-author-name').value);
  const city = clean(document.getElementById('post-city-name').value) || 'Pune';
  const sotd = clean(document.getElementById('post-sotd-name').value);
  const text = clean(document.getElementById('post-review-text').value);
  const longevity = document.getElementById('post-longevity-select').value;
  const image = document.getElementById('post-sotd-image')?.value.trim() || '';

  const newPost = {
    id: 'sotd-' + Date.now(),
    author: name,
    city: city,
    date: 'Just now',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    sotd: sotd,
    image: image,
    occasion: 'Special Occasion',
    compliments: 5,
    longevityRating: longevity,
    text: text,
    likes: 1,
    duoIds: ['p1', 'p5'],
    verifiedPurchase: true
  };

  communityPosts.unshift(newPost);
  renderCommunityFeed();
  document.getElementById('community-post-form').reset();
  clearSotdImage();
  document.getElementById('post-sotd-modal')?.classList.add('hidden');
  showToast('Your Scent of the Day post is live on The Scent Club! 🎉', 'success');
}

// 8. IN-STORE VIP SCENT CONSULTATION BOOKING
function handleConsultationBooking(e) {
  e.preventDefault();
  const clean = (val) => typeof sanitizeInput === 'function' ? sanitizeInput(val.trim()) : val.trim();
  const name = clean(document.getElementById('consult-name').value);
  const phone = clean(document.getElementById('consult-phone').value);
  const date = document.getElementById('consult-date').value;
  const time = document.getElementById('consult-time').value;
  const guests = document.getElementById('consult-guests').value;
  const preference = document.getElementById('consult-pref').value;

  const bookingId = 'VIP-PUNE-' + Date.now().toString().slice(-5);

  const bookingData = {
    id: bookingId,
    name: name,
    phone: phone,
    date: date,
    time: time,
    guests: guests,
    preference: preference,
    timestamp: new Date().toISOString()
  };

  let allBookings = [];
  try {
    const saved = localStorage.getItem('perfumes_consultations');
    if (saved) allBookings = JSON.parse(saved);
  } catch (e) {}
  allBookings.unshift(bookingData);
  localStorage.setItem('perfumes_consultations', JSON.stringify(allBookings));

  if (typeof MongoSync !== 'undefined' && MongoSync.pushConsultation) {
    MongoSync.pushConsultation(bookingData);
  }

  const waNumber = getWhatsAppNumber();
  let msg = `*👑 VIP IN-STORE SCENT CONSULTATION PASS*\n`;
  msg += `*Booking Ref:* ${bookingId}\n`;
  msg += `*Guest:* ${name} (${phone})\n`;
  msg += `*Date & Time:* ${date} at ${time}\n`;
  msg += `*Party Size:* ${guests} Person(s)\n`;
  msg += `*Fragrance Preference:* ${preference}\n`;
  msg += `*Location:* Perfume Shope Flagship, FC Road, Pune\n\n`;
  msg += `Please reserve our private tasting table with complimentary attar sampling and master perfumer guidance.`;

  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  showToast(`VIP Consultation Confirmed for ${date} at ${time}! ☕`, 'success');
  document.getElementById('consultation-form').reset();
}

// 9. GOOGLE IDENTITY SERVICES OAUTH
const GOOGLE_CLIENT_ID = '269277017328-r3olvtqb8nf91rbqifpmchbpflkceves.apps.googleusercontent.com';

function decodeJwtPayload(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Error decoding Google JWT token', e);
    return null;
  }
}

function handleGoogleCredentialResponse(response) {
  if (!response || !response.credential) return;
  const payload = decodeJwtPayload(response.credential);
  if (!payload) return;

  const name = payload.name || payload.given_name || 'Google User';
  const email = payload.email || '';
  const avatar = payload.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';

  currentUser = {
    id: payload.sub || ('usr-' + Date.now().toString().slice(-5)),
    name: name,
    email: email,
    phone: localStorage.getItem('visitor_phone') || '+91 98227 25265',
    avatar: avatar,
    points: 750,
    vipTier: 'Royal Attar Club 👑'
  };

  localStorage.setItem('perfume_user', JSON.stringify(currentUser));
  
  recordVisitorLead({
    name: currentUser.name,
    phone: currentUser.phone,
    email: currentUser.email,
    city: 'Pune, Maharashtra',
    source: 'Google Verified OAuth'
  });

  closeGoogleLoginModal();
  updateUserUI();
  showToast(`Welcome ${name}! Google Sign-In Verified`, 'success');
}

function initGoogleSignIn() {
  if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleCredentialResponse,
      auto_select: false,
      cancel_on_tap_outside: true
    });

    const googleBtnEl = document.getElementById('google-signin-btn-container');
    if (googleBtnEl) {
      google.accounts.id.renderButton(googleBtnEl, {
        theme: 'filled_black',
        size: 'large',
        type: 'standard',
        shape: 'pill',
        text: 'signin_with',
        logo_alignment: 'left',
        width: 260
      });
    }
  }
}

function openGoogleLoginModal() {
  document.getElementById('google-login-modal')?.classList.remove('hidden');
  initGoogleSignIn();
}

function closeGoogleLoginModal() {
  document.getElementById('google-login-modal')?.classList.add('hidden');
}

function handleGoogleLoginSuccess(name, email, phone = null) {
  currentUser = {
    id: 'usr-' + Date.now().toString().slice(-5),
    name: name || 'Indian Fragrance Lover',
    email: email || 'user@gmail.com',
    phone: phone || '+91 98227 25265',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    points: 750,
    vipTier: 'Royal Attar Club 👑'
  };

  localStorage.setItem('perfume_user', JSON.stringify(currentUser));
  
  recordVisitorLead({
    name: currentUser.name,
    phone: currentUser.phone,
    email: currentUser.email,
    city: 'Pune / Mumbai',
    source: 'Google Sign-In'
  });

  closeGoogleLoginModal();
  updateUserUI();
  showToast(`Welcome back, ${currentUser.name}! 750 Royalty Points Available`, 'success');
}

function loadUserFromStorage() {
  try {
    const saved = localStorage.getItem('perfume_user');
    if (saved) currentUser = JSON.parse(saved);
  } catch (e) {
    currentUser = null;
  }
  updateUserUI();
}

function updateUserUI() {
  const userBtn = document.getElementById('header-user-btn');
  if (!userBtn) return;

  if (currentUser) {
    userBtn.innerHTML = `
      <img src="${currentUser.avatar}" alt="${currentUser.name}" class="w-6 h-6 rounded-full border theme-border object-cover">
      <span class="hidden md:inline font-bold text-xs theme-text-main">${currentUser.name.split(' ')[0]}</span>
    `;
    userBtn.onclick = openProfileModal;
  } else {
    userBtn.innerHTML = `
      <i class="fa-brands fa-google text-red-500"></i>
      <span class="hidden md:inline font-semibold text-xs theme-text-main">Sign In</span>
    `;
    userBtn.onclick = openGoogleLoginModal;
  }
}

function openProfileModal() {
  if (!currentUser) {
    openGoogleLoginModal();
    return;
  }

  const modal = document.getElementById('user-profile-modal');
  if (!modal) return;

  document.getElementById('prof-name').innerText = currentUser.name;
  document.getElementById('prof-email').innerText = currentUser.email;
  document.getElementById('prof-phone').innerText = currentUser.phone;
  document.getElementById('prof-points').innerText = `${currentUser.points} Royalty Points`;
  document.getElementById('prof-vip-tier').innerText = currentUser.vipTier;
  document.getElementById('prof-avatar-img').src = currentUser.avatar;

  modal.classList.remove('hidden');
}

function closeProfileModal() {
  document.getElementById('user-profile-modal')?.classList.add('hidden');
}

function handleUserLogout() {
  currentUser = null;
  localStorage.removeItem('perfume_user');
  closeProfileModal();
  updateUserUI();
  showToast('Logged out of Scent Club profile');
}

// 10. VISITOR LEADS CAPTURE
function initVisitorTracker() {
  let count = Number(localStorage.getItem('perfume_visit_count') || 0) + 1;
  localStorage.setItem('perfume_visit_count', count);
}

function openLeadGiftModal() {
  document.getElementById('lead-gift-modal')?.classList.remove('hidden');
}

function closeLeadGiftModal() {
  document.getElementById('lead-gift-modal')?.classList.add('hidden');
  localStorage.setItem('perfume_lead_captured', 'true');
}

function handleLeadGiftSubmit(e) {
  e.preventDefault();
  const clean = (val) => typeof sanitizeInput === 'function' ? sanitizeInput(val.trim()) : val.trim();
  const name = clean(document.getElementById('lead-name-input').value);
  const phone = clean(document.getElementById('lead-phone-input').value);
  const city = clean(document.getElementById('lead-city-input').value) || 'Pune';

  localStorage.setItem('visitor_name', name);
  localStorage.setItem('visitor_phone', phone);
  localStorage.setItem('visitor_city', city);
  localStorage.setItem('perfume_lead_captured', 'true');

  recordVisitorLead({
    name: name,
    phone: phone,
    email: '',
    city: city,
    source: '₹500 Voucher Popup'
  });

  closeLeadGiftModal();
  discountCoupon = { code: 'ROYAL500', amount: 500 };
  showToast(`₹500 Discount Coupon 'ROYAL500' Unlocked! 🎉`, 'success');
  openCartDrawer();
}

function recordVisitorLead(leadData) {
  let allVisitors = [];
  try {
    const saved = localStorage.getItem('perfumes_visitors');
    if (saved) allVisitors = JSON.parse(saved);
  } catch (e) {}

  const newLead = {
    id: 'lead-' + Date.now(),
    name: leadData.name,
    phone: leadData.phone,
    email: leadData.email || '',
    city: leadData.city || 'Pune',
    source: leadData.source || 'Website Visit',
    lastActive: new Date().toISOString(),
    callStatus: 'Promotional Call Pending'
  };

  allVisitors = allVisitors.filter(v => v.phone !== newLead.phone);
  allVisitors.unshift(newLead);
  localStorage.setItem('perfumes_visitors', JSON.stringify(allVisitors));

  if (typeof MongoSync !== 'undefined' && MongoSync.pushVisitor) {
    MongoSync.pushVisitor(newLead);
  }
}

// 11. CATALOG PRODUCT RENDERING & CATEGORY-BASED ANIMATED SLIDERS
let catalogViewMode = localStorage.getItem('perfumes_catalog_view_mode') || 'slider';
let categorySliderIntervals = {};

const CATEGORY_DEFINITIONS = [
  {
    id: 'cat-trending',
    title: 'Trending Bestsellers & Top Rated',
    subtitle: 'Signature masterpieces with verified Beast Mode performance & highest customer compliment ratings.',
    icon: '🔥',
    badgeText: '👑 FLAGSHIP TOP PICKS',
    accord: null,
    filterFn: (p) => p.badge && (p.badge.toLowerCase().includes('bestseller') || p.badge.toLowerCase().includes('top') || p.badge.toLowerCase().includes('signature'))
  },
  {
    id: 'cat-vanilla',
    accord: 'Warm Vanilla & Kesar',
    title: 'Warm Vanilla & Kashmiri Kesar Accords',
    subtitle: 'Decadent bourbon vanilla, Kashmiri saffron, sweet medjool dates, praline, and warm golden amber.',
    icon: '🍦',
    badgeText: 'GOURMAND & AMBER'
  },
  {
    id: 'cat-oud',
    accord: 'Royal Dehn Al Oud',
    title: 'Royal Dehn Al Oud & Arabian Musk',
    subtitle: 'Aged Cambodian agarwood, pure Dehn Al Oud, Mysore sandalwood, and royal oriental incense.',
    icon: '🪵',
    badgeText: 'ORIENTAL EXTRAITS'
  },
  {
    id: 'cat-sandal',
    accord: 'Mysore Sandal & Woods',
    title: 'Mysore Sandalwood & Earthy Woods',
    subtitle: 'Creamy authentic Chandan, atlas cedarwood, earthy patchouli, and warm ambergris.',
    icon: '🌲',
    badgeText: 'HERITAGE WOODS'
  },
  {
    id: 'cat-rose',
    accord: 'Kashmiri Gulab & Rose',
    title: 'Kashmiri Gulab & Haute Florals',
    subtitle: 'Pure Kannauj Damascene rose, night-blooming jasmine sambac, and delicate powdery musks.',
    icon: '🌸',
    badgeText: 'FLORAL ELEGANCE'
  },
  {
    id: 'cat-citrus',
    accord: 'Fresh Citrus & Monsoon Aqua',
    title: 'Fresh Citrus & Monsoon Aqua Sillage',
    subtitle: 'Sparkling Italian bergamot, fresh marine sea breeze, vetiver, and cooling aromatic woods.',
    icon: '🌊',
    badgeText: 'HIGH SILLAGE FRESH'
  }
];

function generateProductCardHTML(p, isSliderCard = false) {
  return `
    <div onclick="openProductModal('${p.id}')" class="${isSliderCard ? 'category-slider-card' : ''} theme-card rounded-3xl p-4 border theme-border flex flex-col justify-between space-y-3 group hover:border-gray-400 transition-all cursor-pointer">
      
      <!-- Image & Badges with 3D Pop-Out Hover -->
      <div class="product-card-img-wrapper">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80';">
        
        <span class="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider theme-badge shadow-sm">
          ${p.badge || 'Bestseller'}
        </span>

        <span class="absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-[9px] font-bold bg-black/80 backdrop-blur-md text-green-300 border border-green-700/60 shadow-sm flex items-center gap-1">
          <i class="fa-solid fa-shield-check text-green-400"></i> Free 2ml Tester Vial
        </span>
      </div>

      <!-- Details -->
      <div class="space-y-1.5 flex-1 flex flex-col justify-between">
        <div class="space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold uppercase tracking-widest theme-text-muted">${p.brand}</span>
            <span class="text-[10px] font-semibold theme-text-muted truncate max-w-[120px]">${p.accord}</span>
          </div>

          <h3 class="font-heading text-sm sm:text-base font-bold theme-text-main uppercase tracking-wide truncate">${p.name}</h3>
          <p class="text-[11px] theme-text-muted line-clamp-2 leading-relaxed">${p.notes}</p>
        </div>

        <!-- Performance Gauges -->
        <div class="p-2.5 rounded-xl theme-bg-surface border theme-border space-y-1.5 mt-2">
          <div class="flex items-center justify-between text-[10px]">
            <span class="theme-text-muted flex items-center gap-1"><i class="fa-solid fa-clock theme-accent"></i> Longevity:</span>
            <span class="font-bold theme-text-main">${p.longevity || '16+ Hours ⚡'}</span>
          </div>
          <div class="w-full bg-black/20 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
            <div class="meter-bar-fill h-1.5 rounded-full" style="width: 92%"></div>
          </div>

          <div class="flex items-center justify-between text-[10px] pt-0.5">
            <span class="theme-text-muted flex items-center gap-1"><i class="fa-solid fa-wind theme-accent"></i> Sillage:</span>
            <span class="font-bold theme-text-main">${p.sillage || 'Room Filler 💨'}</span>
          </div>
        </div>
      </div>

      <!-- Pricing & Buy -->
      <div class="pt-2 border-t theme-border flex items-center justify-between gap-2" onclick="event.stopPropagation()">
        <div>
          <span class="text-[9px] uppercase tracking-wider theme-text-muted block font-bold">Boutique Price</span>
          <span class="font-heading text-base sm:text-lg font-bold theme-accent">${formatRupees(p.price)}</span>
        </div>

        <div class="flex items-center gap-1.5">
          <button onclick="addToCart('${p.id}', event)" class="p-2.5 rounded-xl theme-bg-surface border theme-border theme-text-main hover:border-gray-400 transition-colors" title="Add to Cart">
            <i class="fa-solid fa-cart-shopping text-xs"></i>
          </button>
          <button onclick="buyNow('${p.id}', event)" class="theme-btn-primary px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all">
            Buy Now
          </button>
        </div>
      </div>

    </div>
  `;
}

function slideCategoryTrack(trackId, direction) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const scrollAmount = track.clientWidth * 0.75 * direction;
  track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function initCategorySliders() {
  Object.values(categorySliderIntervals).forEach(int => clearInterval(int));
  categorySliderIntervals = {};

  const tracks = document.querySelectorAll('.category-slider-track');
  tracks.forEach((track, idx) => {
    const trackId = track.id;
    if (!trackId) return;

    let isPaused = false;
    track.addEventListener('mouseenter', () => isPaused = true);
    track.addEventListener('mouseleave', () => isPaused = false);
    track.addEventListener('touchstart', () => isPaused = true, { passive: true });
    track.addEventListener('touchend', () => {
      setTimeout(() => isPaused = false, 3000);
    });

    const intervalTime = 4500 + (idx * 700);
    categorySliderIntervals[trackId] = setInterval(() => {
      if (isPaused) return;
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, intervalTime);
  });
}

function setCatalogViewMode(mode) {
  catalogViewMode = mode;
  localStorage.setItem('perfumes_catalog_view_mode', mode);

  const btnSlider = document.getElementById('btn-view-slider');
  const btnGrid = document.getElementById('btn-view-grid');

  if (btnSlider && btnGrid) {
    if (mode === 'slider') {
      btnSlider.className = 'px-3 py-1.5 rounded-xl text-xs font-bold theme-btn-primary shadow-sm flex items-center gap-1.5 transition-all';
      btnGrid.className = 'px-3 py-1.5 rounded-xl text-xs font-semibold theme-text-muted hover:theme-text-main flex items-center gap-1.5 transition-all';
    } else {
      btnGrid.className = 'px-3 py-1.5 rounded-xl text-xs font-bold theme-btn-primary shadow-sm flex items-center gap-1.5 transition-all';
      btnSlider.className = 'px-3 py-1.5 rounded-xl text-xs font-semibold theme-text-muted hover:theme-text-main flex items-center gap-1.5 transition-all';
    }
  }

  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('products-catalog-container') || document.getElementById('products-grid');
  if (!container) return;

  const products = getStoredProducts();

  // Filter based on gender
  const genderFiltered = products.filter(p => {
    return currentGenderTheme === 'All' || p.gender === currentGenderTheme || p.gender === 'Unisex';
  });

  // If search query is active or user selected Grid View, render grid
  if (searchQuery) {
    const searchResults = genderFiltered.filter(p => {
      const matchAccord = selectedAccord === 'All' || p.accord === selectedAccord;
      const matchSearch = p.name.toLowerCase().includes(searchQuery) || p.brand.toLowerCase().includes(searchQuery) || p.notes.toLowerCase().includes(searchQuery);
      return matchAccord && matchSearch;
    });

    if (searchResults.length === 0) {
      container.innerHTML = `
        <div class="py-12 text-center space-y-2">
          <p class="font-heading text-lg theme-text-main">No fragrances match "${searchQuery}"</p>
          <button onclick="resetFilters()" class="text-xs theme-accent font-bold underline">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold theme-accent uppercase tracking-wider">Search Results (${searchResults.length} Extrait${searchResults.length > 1 ? 's' : ''})</span>
          <button onclick="resetFilters()" class="text-xs theme-text-muted hover:theme-text-main underline">Clear Search</button>
        </div>
        <div id="products-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          ${searchResults.map(p => generateProductCardHTML(p, false)).join('')}
        </div>
      </div>
    `;
    return;
  }

  // If user explicitly chose Grid View
  if (catalogViewMode === 'grid') {
    const filtered = genderFiltered.filter(p => {
      return selectedAccord === 'All' || p.accord === selectedAccord;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="py-12 text-center space-y-2">
          <p class="font-heading text-lg theme-text-main">No fragrances match your filter</p>
          <button onclick="resetFilters()" class="text-xs theme-accent font-bold underline">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div id="products-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        ${filtered.map(p => generateProductCardHTML(p, false)).join('')}
      </div>
    `;
    return;
  }

  // =========================================================================
  // LEFT-TO-RIGHT ANIMATED SLIDERS BY CATEGORY (DEFAULT LUXURY EXPERIENCE)
  // =========================================================================
  let categoriesToRender = CATEGORY_DEFINITIONS;

  if (selectedAccord !== 'All') {
    categoriesToRender = CATEGORY_DEFINITIONS.filter(c => c.accord === selectedAccord);
  }

  const categoryBlocks = categoriesToRender.map(cat => {
    let catProducts = [];
    if (cat.filterFn) {
      catProducts = genderFiltered.filter(cat.filterFn);
    } else if (cat.accord) {
      catProducts = genderFiltered.filter(p => p.accord === cat.accord);
    }

    if (catProducts.length === 0) return '';

    const trackId = `slider-track-${cat.id}`;

    return `
      <div class="category-slider-section space-y-4 pt-6 border-t theme-border first:border-t-0 first:pt-0">
        <!-- Category Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div class="space-y-0.5 max-w-2xl">
            <div class="flex items-center gap-2">
              <span class="text-lg">${cat.icon}</span>
              <span class="text-[10px] uppercase tracking-[0.25em] theme-accent font-bold">${cat.badgeText || 'LUXURY COLLECTION'} • ${catProducts.length} EXTRAIT${catProducts.length > 1 ? 'S' : ''}</span>
            </div>
            <h3 class="font-heading text-xl sm:text-2xl font-bold theme-text-main uppercase">${cat.title}</h3>
            <p class="text-xs theme-text-muted leading-relaxed">${cat.subtitle}</p>
          </div>

          <!-- Slider Navigation Arrows -->
          <div class="flex items-center gap-2 self-end sm:self-auto">
            <button onclick="slideCategoryTrack('${trackId}', -1)" aria-label="Previous Fragrance in ${cat.title}" class="category-slider-nav-btn" title="Slide Left">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button onclick="slideCategoryTrack('${trackId}', 1)" aria-label="Next Fragrance in ${cat.title}" class="category-slider-nav-btn" title="Slide Right">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <!-- Left-to-Right Animated Slider Track -->
        <div class="category-slider-wrapper">
          <div id="${trackId}" class="category-slider-track scrollbar-none">
            ${catProducts.map(p => generateProductCardHTML(p, true)).join('')}
          </div>
        </div>
      </div>
    `;
  }).filter(Boolean);

  if (categoryBlocks.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center space-y-2">
        <p class="font-heading text-lg theme-text-main">No fragrances match your category selection</p>
        <button onclick="resetFilters()" class="text-xs theme-accent font-bold underline">Reset All Collections</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="space-y-10">
      ${categoryBlocks.join('')}
    </div>
  `;

  // Initialize auto-sliding intervals with hover pause
  setTimeout(initCategorySliders, 100);
}

function switchGenderTheme(gender, updateUrl = true) {
  currentGenderTheme = gender;
  localStorage.setItem('perfume_selected_gender', gender);
  document.body.setAttribute('data-theme', gender.toLowerCase());

  document.querySelectorAll('.gender-tab-btn').forEach(btn => {
    if (btn.dataset.gender === gender) {
      btn.className = 'gender-tab-btn px-4 py-2 rounded-xl font-bold text-xs theme-btn-primary shadow-sm transition-all';
    } else {
      btn.className = 'gender-tab-btn px-4 py-2 rounded-xl font-semibold text-xs theme-card hover:border-gray-400 transition-all';
    }
  });

  renderProducts();
  renderCelebrityWardrobes();
  renderDiscoveryBoxBuilder();
  renderAlchemyBlender();
  renderCommunityFeed();
  initHeroSlider();
}

function filterByAccord(accord) {
  selectedAccord = accord;
  document.querySelectorAll('.accord-pill-btn').forEach(btn => {
    if (btn.dataset.accord === accord) {
      btn.className = 'accord-pill-btn px-4 py-1.5 rounded-full text-xs font-bold theme-btn-primary shadow-sm transition-all shrink-0';
    } else {
      btn.className = 'accord-pill-btn px-4 py-1.5 rounded-full text-xs font-medium theme-card hover:border-gray-400 transition-all shrink-0';
    }
  });
  renderProducts();
}

function handleSearch(query) {
  searchQuery = query.trim().toLowerCase();
  renderProducts();
}

function resetFilters() {
  selectedAccord = 'All';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  filterByAccord('All');
}

// 12. DYNAMIC HERO SLIDER CAROUSEL (ALL / WOMEN / MEN)
const DEFAULT_HERO_SLIDES = {
  All: [
    {
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1600&auto=format&fit=crop&q=80',
      badge: '👑 100% ORIGINAL IMPORTED EXTRAITS & ROYAL ATTARS',
      title: 'HAUTE PARFUMERIE • PUNE',
      desc: 'Curated Arabian Masterpieces, Designer Extraits & 100% Risk-Free Tester Guarantee with same-day FC Road boutique pickup.'
    },
    {
      image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=1600&auto=format&fit=crop&q=80',
      badge: '🪵 ROYAL DEHN AL OUD & MYSORE SANDALWOOD',
      title: 'PURE HERITAGE EXTRAITS',
      desc: 'Aged Cambodian Oud, Pure Mysore Sandalwood Oil & Kashmiri Kesar distilled for eternal longevity.'
    },
    {
      image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=1600&auto=format&fit=crop&q=80',
      badge: '✨ BESPOKE CONNOISSEUR RESERVE',
      title: 'ARTISANAL LUXURY FLACONS',
      desc: 'Hand-blown crystal flacons, high-concentration oils, and complimentary custom laser bottle engraving.'
    }
  ],
  Women: [
    {
      image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=1600&auto=format&fit=crop&q=80',
      badge: '🌸 WOMEN’S HAUTE COUTURE & ROSE GOLD ATTARS',
      title: 'ETHEREAL PEONY & DAMASCENE LUXE',
      desc: 'Turkish Rose Petals, Kashmiri Kesar Vanilla & Sugared Gourmand Extraits with enchanting sillage.'
    },
    {
      image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=1600&auto=format&fit=crop&q=80',
      badge: '🍓 VIRAL GOURMAND & SWEET BERRY ESSENCE',
      title: 'YARA BLUSH & ROSE PETALS',
      desc: 'Soft powdery vanilla orchid, tropical red berries, and creamy sandalwood for daily glamour.'
    },
    {
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1600&auto=format&fit=crop&q=80',
      badge: '💖 BRIDAL SANGEET & DATE NIGHT SIGNATURE',
      title: 'ROYAL KESAR GOURMAND',
      desc: 'Sweet dates, praline, cinnamon, and warm amber vanilla crafted for memorable celebrations.'
    }
  ],
  Men: [
    {
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1600&auto=format&fit=crop&q=80',
      badge: '⚡ MEN’S TITANIUM & MARVEL BEAST MODE COLLECTION',
      title: 'UNLEASH ALPHA SILLAGE',
      desc: '16+ Hour Longevity in Pune Summer Heat. Smoky Birch, Mysore Sandalwood & Arabian Grey Amber.'
    },
    {
      image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=1600&auto=format&fit=crop&q=80',
      badge: '🌊 AQUATIC MONSOON & HIGH VOLTAGE PROJECTION',
      title: 'HAWAS POUR HOMME BEAST',
      desc: 'Italian Bergamot, Cinnamon spice, and Crisp Grey Amber for intense all-day projection.'
    },
    {
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&auto=format&fit=crop&q=80',
      badge: '🔥 18-HOUR COMPLIMENT MONSTER',
      title: 'CLUB DE NUIT INTENSE',
      desc: 'Smoky birchwood, crisp blackcurrant, and magnetic ambergris engineered for alpha presence.'
    }
  ]
};

function getStoredHeroBanners() {
  const saved = localStorage.getItem('perfumes_hero_banners');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.All) && Array.isArray(parsed.Women) && Array.isArray(parsed.Men)) {
        return parsed;
      }
    } catch (e) {}
  }
  return DEFAULT_HERO_SLIDES;
}

let currentHeroSlideIndex = 0;
let heroSliderInterval = null;

function setHeroSlide(index) {
  const allBanners = getStoredHeroBanners();
  const slides = allBanners[currentGenderTheme] || allBanners.All;
  currentHeroSlideIndex = (index + slides.length) % slides.length;
  const slide = slides[currentHeroSlideIndex];

  const heroEl = document.getElementById('hero-banner');
  if (heroEl) {
    heroEl.style.backgroundImage = `url('${slide.image}')`;
  }
  const badgeEl = document.getElementById('hero-badge-text');
  const titleEl = document.getElementById('hero-title-text');
  const descEl = document.getElementById('hero-desc-text');

  if (badgeEl) badgeEl.innerText = slide.badge;
  if (titleEl) titleEl.innerText = slide.title;
  if (descEl) descEl.innerText = slide.desc;

  renderHeroDots();
}

function renderHeroDots() {
  const dotsContainer = document.getElementById('hero-dots-container');
  if (!dotsContainer) return;
  const allBanners = getStoredHeroBanners();
  const slides = allBanners[currentGenderTheme] || allBanners.All;

  dotsContainer.innerHTML = slides.map((_, i) => `
    <button onclick="setHeroSlide(${i})" class="h-2 rounded-full transition-all ${i === currentHeroSlideIndex ? 'w-8 bg-white shadow-md' : 'w-2 bg-white/40 hover:bg-white/70'}" title="Slide ${i + 1}"></button>
  `).join('');
}

function startHeroAutoSlide() {
  if (heroSliderInterval) clearInterval(heroSliderInterval);
  heroSliderInterval = setInterval(() => {
    setHeroSlide(currentHeroSlideIndex + 1);
  }, 5000);
}

function initHeroSlider() {
  currentHeroSlideIndex = 0;
  setHeroSlide(0);
  startHeroAutoSlide();
}

const QUIZ_QUESTIONS = [
  {
    question: "Which vibe defines your signature style?",
    options: [
      { text: "Royal Indian Heritage & Weddings 👑", accord: "Royal Dehn Al Oud" },
      { text: "Warm Sweet Vanilla & Kashmiri Kesar 🍦", accord: "Warm Vanilla & Kesar" },
      { text: "Smoky Alpha Woods & Executive Power ⚡", accord: "Mysore Sandal & Woods" },
      { text: "Fresh Aquatic Breeze & Summer Monsoon 🌊", accord: "Fresh Citrus & Monsoon Aqua" }
    ]
  }
];

function renderWizard() {
  const container = document.getElementById('quiz-container');
  if (!container) return;
  const q = QUIZ_QUESTIONS[0];

  container.innerHTML = `
    <div class="space-y-3">
      <h4 class="font-heading text-base font-bold theme-text-main">${q.question}</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${q.options.map(opt => `
          <button onclick="handleQuizAnswer('${opt.accord}')" class="p-3.5 rounded-2xl theme-card border theme-border text-left hover:border-gray-400 transition-all flex items-center justify-between group">
            <span class="font-semibold text-xs theme-text-main">${opt.text}</span>
            <i class="fa-solid fa-arrow-right text-xs theme-text-muted group-hover:theme-accent transition-colors"></i>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function handleQuizAnswer(accord) {
  filterByAccord(accord);
  document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  showToast(`Scent Profile Matched: ${accord} ✨`, 'success');
}

function showToast(message, type = 'info') {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 theme-card border theme-border px-4 py-2.5 rounded-2xl text-xs shadow-2xl flex items-center gap-2 transition-all duration-300 translate-y-10 opacity-0';
    document.body.appendChild(toast);
  }

  const icon = type === 'success' ? 'fa-circle-check text-green-500' : 'fa-circle-info theme-accent';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span class="theme-text-main font-semibold">${message}</span>`;
  toast.classList.remove('translate-y-10', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3500);
}

// =========================================================================
// 13. PRODUCT DETAIL QUICKVIEW MODAL WITH MULTI-IMAGE GALLERY & VERIFIED REVIEWS
// =========================================================================
let activeModalProduct = null;
let currentDetailZoom = 1.0;
let currentDetailQty = 1;
let detailProductImages = [];
let detailProductImageIndex = 0;

// Active review submission state
let activeReviewProductId = null;
let currentReviewRating = 5;
let currentReviewImages = [];
let verifiedBuyerSession = null; // { orderId, customerName, phone }

const DEFAULT_PRODUCT_REVIEWS = {
  'p1': [
    {
      id: 'rev-p1-1',
      author: 'Aarav Mehta',
      city: 'Pune (FC Road Boutique Regular)',
      rating: 5,
      title: 'Unbelievable 18-Hour Performance & Free Tester Included!',
      comment: 'Sprayed at 8 AM for an executive meeting and was still receiving compliments during a dinner gala at 11 PM. The bottle packaging with velvet box is pure luxury. Complimentary 2ml tester gave total peace of mind!',
      date: '2 days ago',
      verified: true,
      orderId: 'ORD-IN-849201',
      images: [
        'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80'
      ]
    },
    {
      id: 'rev-p1-2',
      author: 'Simran Kaur',
      city: 'Mumbai',
      rating: 5,
      title: 'Pure Luxury Vanilla Saffron Gourmand',
      comment: 'The scent pyramid transition is hypnotic. Sweet dates and warm vanilla bourbon that projects beautifully without being cloying. 10/10 presentation with laser engraving.',
      date: '1 week ago',
      verified: true,
      orderId: 'ORD-IN-731940',
      images: [
        'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80'
      ]
    }
  ],
  'p2': [
    {
      id: 'rev-p2-1',
      author: 'Vikramaditya Roy',
      city: 'Delhi NCR',
      rating: 5,
      title: 'Nuclear Cambodian Oud Sillage!',
      comment: 'The aged Dehn Al Oud note is regal and deep. Lasts well over 24 hours on clothes. Received in 2 days in BlueDart air express with batch hologram seal.',
      date: '3 days ago',
      verified: true,
      orderId: 'ORD-IN-619283',
      images: [
        'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80'
      ]
    }
  ],
  'p5': [
    {
      id: 'rev-p5-1',
      author: 'Kunal Deshmukh',
      city: 'Bengaluru',
      rating: 5,
      title: 'Authentic Batch & Free Laser Engraving is Amazing',
      comment: 'Got my name engraved on the flacon—looks like a high-end French boutique custom bottle. Beast mode projection for 16+ hours even in Indian summer heat.',
      date: '2 weeks ago',
      verified: true,
      orderId: 'ORD-IN-902814',
      images: [
        'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80'
      ]
    }
  ]
};

function getStoredReviews(productId) {
  let customReviews = {};
  try {
    const saved = localStorage.getItem('perfumes_product_reviews');
    if (saved) customReviews = JSON.parse(saved);
  } catch (e) {}

  const productCustom = customReviews[productId] || [];
  const defaults = DEFAULT_PRODUCT_REVIEWS[productId] || [
    {
      id: 'rev-def-1',
      author: 'Rohan Joshi',
      city: 'Pune',
      rating: 5,
      title: 'Masterpiece Fragrance & 100% Authentic Import',
      comment: 'Exceptional longevity and compliments from friends. Blind buy insurance gave me complete confidence. Highly recommended boutique!',
      date: '1 week ago',
      verified: true,
      orderId: 'ORD-IN-550192',
      images: [
        'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80'
      ]
    }
  ];

  return [...productCustom, ...defaults];
}

function saveStoredReview(productId, review) {
  let customReviews = {};
  try {
    const saved = localStorage.getItem('perfumes_product_reviews');
    if (saved) customReviews = JSON.parse(saved);
  } catch (e) {}

  if (!customReviews[productId]) customReviews[productId] = [];
  customReviews[productId].unshift(review);
  localStorage.setItem('perfumes_product_reviews', JSON.stringify(customReviews));
}

function openProductModal(productId) {
  const products = getStoredProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  activeModalProduct = product;
  currentDetailZoom = 1.0;
  currentDetailQty = 1;

  // Multi-image list setup
  if (product.images && Array.isArray(product.images) && product.images.length > 0) {
    detailProductImages = [...product.images];
  } else if (product.image) {
    detailProductImages = [product.image];
  } else {
    detailProductImages = ['https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600'];
  }
  detailProductImageIndex = 0;

  const imgEl = document.getElementById('detail-product-img');
  const badgeEl = document.getElementById('detail-badge');
  const brandEl = document.getElementById('detail-brand');
  const genderEl = document.getElementById('detail-gender-tag');
  const nameEl = document.getElementById('detail-name');
  const accordEl = document.getElementById('detail-accord');
  const longevityEl = document.getElementById('detail-longevity');
  const sillageEl = document.getElementById('detail-sillage');
  const seasonEl = document.getElementById('detail-season');
  const notesEl = document.getElementById('detail-notes');
  const priceEl = document.getElementById('detail-price');
  const qtyEl = document.getElementById('detail-qty-val');

  if (imgEl) imgEl.src = detailProductImages[0];
  if (badgeEl) badgeEl.innerText = product.badge || 'Haute Extrait';
  if (brandEl) brandEl.innerText = product.brand;
  if (genderEl) genderEl.innerText = product.gender;
  if (nameEl) nameEl.innerText = product.name;
  if (accordEl) accordEl.innerText = product.accord;
  if (longevityEl) longevityEl.innerText = product.longevity || '16+ Hours (Beast Mode ⚡)';
  if (sillageEl) sillageEl.innerText = product.sillage || 'Room Filler (3.5m 💨)';
  if (seasonEl) seasonEl.innerText = product.season || 'All-Season Signature Wear 👑';
  if (notesEl) notesEl.innerText = product.notes;
  if (priceEl) priceEl.innerText = formatRupees(product.price);
  if (qtyEl) qtyEl.innerText = '1';

  renderDetailImageGallery();
  resetDetailZoom();
  renderDetailReviews();

  document.getElementById('product-detail-modal')?.classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('product-detail-modal')?.classList.add('hidden');
  resetDetailZoom();
}

function renderDetailImageGallery() {
  const counterEl = document.getElementById('detail-image-counter');
  const prevBtn = document.getElementById('detail-prev-img-btn');
  const nextBtn = document.getElementById('detail-next-img-btn');
  const thumbsRow = document.getElementById('detail-thumbnails-row');

  if (counterEl) {
    counterEl.innerText = `${detailProductImageIndex + 1} / ${detailProductImages.length}`;
    counterEl.classList.toggle('hidden', detailProductImages.length <= 1);
  }

  if (prevBtn && nextBtn) {
    prevBtn.classList.toggle('hidden', detailProductImages.length <= 1);
    nextBtn.classList.toggle('hidden', detailProductImages.length <= 1);
  }

  if (thumbsRow) {
    if (detailProductImages.length > 1) {
      thumbsRow.classList.remove('hidden');
      thumbsRow.innerHTML = detailProductImages.map((imgUrl, idx) => `
        <button type="button" onclick="selectDetailProductImage(${idx})" class="modal-thumb-pop w-12 h-12 rounded-xl overflow-hidden border-2 transition-all shrink-0 aspect-square ${idx === detailProductImageIndex ? 'border-[#C59B27] ring-2 ring-[#C59B27]/40 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}">
          <img src="${imgUrl}" alt="Thumbnail ${idx + 1}" class="w-full h-full object-cover">
        </button>
      `).join('');
    } else {
      thumbsRow.classList.add('hidden');
    }
  }
}

function selectDetailProductImage(index) {
  if (index >= 0 && index < detailProductImages.length) {
    detailProductImageIndex = index;
    const imgEl = document.getElementById('detail-product-img');
    if (imgEl) {
      imgEl.style.opacity = '0';
      setTimeout(() => {
        imgEl.src = detailProductImages[detailProductImageIndex];
        imgEl.style.opacity = '1';
      }, 150);
    }
    renderDetailImageGallery();
    resetDetailZoom();
  }
}

function changeDetailImageSlide(direction) {
  if (detailProductImages.length <= 1) return;
  let newIndex = detailProductImageIndex + direction;
  if (newIndex < 0) newIndex = detailProductImages.length - 1;
  else if (newIndex >= detailProductImages.length) newIndex = 0;
  selectDetailProductImage(newIndex);
}

function renderDetailReviews() {
  const container = document.getElementById('detail-reviews-list');
  const summaryEl = document.getElementById('detail-reviews-summary');
  if (!container || !activeModalProduct) return;

  const reviews = getStoredReviews(activeModalProduct.id);
  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + Number(r.rating || 5), 0) / reviews.length).toFixed(1)
    : '5.0';

  if (summaryEl) {
    summaryEl.innerText = `${avgRating} / 5.0 (${reviews.length} Verified Buyer Review${reviews.length === 1 ? '' : 's'})`;
  }

  if (reviews.length === 0) {
    container.innerHTML = `
      <div class="p-4 rounded-2xl theme-bg-surface border theme-border text-center text-xs text-gray-500 italic">
        No reviews published yet. Be the first verified buyer to share your scent experience!
      </div>
    `;
    return;
  }

  container.innerHTML = reviews.map(r => `
    <div class="p-3.5 rounded-2xl theme-bg-surface border theme-border space-y-2 shadow-sm transition-all hover:border-[#C59B27]/40">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="font-bold theme-text-main text-xs">${r.author}</span>
          <span class="text-[10px] theme-text-muted">(${r.city || 'India'})</span>
          ${r.verified ? `
            <span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/30 flex items-center gap-1">
              <i class="fa-solid fa-circle-check text-[8px]"></i> Verified Buyer
            </span>
          ` : ''}
          ${r.orderId ? `<span class="text-[9px] font-mono theme-text-muted">#${r.orderId}</span>` : ''}
        </div>
        <div class="flex items-center text-yellow-500 text-xs font-bold gap-1">
          <span>${'★'.repeat(r.rating || 5)}</span>
          <span class="text-xs font-mono theme-text-main ml-1">${r.rating || 5}.0</span>
        </div>
      </div>

      <h5 class="font-bold text-xs theme-text-main">${r.title}</h5>
      <p class="text-xs theme-text-secondary leading-relaxed italic">"${r.comment}"</p>

      <!-- Customer Uploaded Photos of Received Perfume -->
      ${(r.images && Array.isArray(r.images) && r.images.length > 0) ? `
        <div class="pt-1.5 space-y-1">
          <span class="text-[10px] font-bold text-[#C59B27] flex items-center gap-1">
            <i class="fa-solid fa-camera"></i> Customer Received Photos:
          </span>
          <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            ${r.images.map((imgUrl, i) => `
              <div onclick="openReviewPhotoLightbox('${imgUrl}', 'Photo by ${r.author} - ${r.title}')" class="relative group w-14 h-14 rounded-xl overflow-hidden border theme-border cursor-pointer shrink-0 shadow-sm hover:scale-105 hover:border-[#C59B27] transition-all bg-black/40">
                <img src="${imgUrl}" alt="Customer Photo #${i + 1}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] transition-opacity">
                  <i class="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="flex items-center justify-between text-[9px] theme-text-muted pt-1 border-t theme-border">
        <span>${r.date || 'Verified Customer'}</span>
        <span class="text-green-600 dark:text-green-400 font-semibold flex items-center gap-1">
          <i class="fa-solid fa-shield-check"></i> Genuine Bottle Verified
        </span>
      </div>
    </div>
  `).join('');
}

// =========================================================================
// VERIFIED BUYER REVIEW SUBMISSION ENGINE
// =========================================================================
function openWriteReviewModal() {
  if (!activeModalProduct) return;
  activeReviewProductId = activeModalProduct.id;
  currentReviewRating = 5;
  currentReviewImages = [];
  verifiedBuyerSession = null;

  const titleEl = document.getElementById('review-modal-product-title');
  if (titleEl) titleEl.innerText = `Review: ${activeModalProduct.name}`;

  const verifyInput = document.getElementById('review-verify-input');
  const verifyMsg = document.getElementById('review-verify-msg');
  const verifyCard = document.getElementById('review-verify-card');
  const reviewForm = document.getElementById('write-review-form');

  if (verifyInput) verifyInput.value = '';
  if (verifyMsg) {
    verifyMsg.className = 'text-[11px] font-semibold hidden';
    verifyMsg.innerText = '';
  }

  // Check if current user session has already purchased this product
  const storedOrders = getStoredOrders();
  const phoneFromStorage = localStorage.getItem('visitor_phone') || (currentUser ? currentUser.phone : null);
  const emailFromStorage = currentUser ? currentUser.email : null;
  const lastOrderId = localStorage.getItem('perfumes_last_order_id');

  let autoMatchedOrder = null;
  if (storedOrders.length > 0) {
    autoMatchedOrder = storedOrders.find(ord => {
      const containsProd = ord.items && Array.isArray(ord.items) && ord.items.some(it => 
        it.id === activeReviewProductId || (it.name && it.name.toLowerCase() === activeModalProduct.name.toLowerCase())
      );
      if (!containsProd) return false;

      if (lastOrderId && ord.id === lastOrderId) return true;
      if (phoneFromStorage && ord.phone && ord.phone.replace(/\D/g, '').endsWith(phoneFromStorage.replace(/\D/g, '').slice(-10))) return true;
      if (emailFromStorage && ord.email && ord.email.toLowerCase() === emailFromStorage.toLowerCase()) return true;
      return false;
    });
  }

  if (autoMatchedOrder) {
    unlockReviewForm(autoMatchedOrder);
  } else {
    // Show verification card
    if (verifyCard) verifyCard.classList.remove('hidden');
    if (reviewForm) reviewForm.classList.add('hidden');
  }

  setReviewRating(5);
  renderReviewImagesPreview();
  document.getElementById('write-review-modal')?.classList.remove('hidden');
}

function closeWriteReviewModal() {
  document.getElementById('write-review-modal')?.classList.add('hidden');
  activeReviewProductId = null;
  currentReviewImages = [];
  verifiedBuyerSession = null;
}

function getStoredOrders() {
  let list = [];
  try {
    const saved = localStorage.getItem('perfumes_orders');
    if (saved) list = JSON.parse(saved);
  } catch (e) {}

  // Fallback demo orders for testing convenience
  if (list.length === 0) {
    list = [
      {
        id: 'ORD-IN-982272',
        customer: 'Sanket Bhende (Boutique VIP)',
        phone: '9822725265',
        email: 'sanket@perfumeshope.in',
        items: [{ id: 'p1', name: "KHAMRAH D'OR", price: 2899, qty: 1 }],
        status: 'Delivered'
      },
      {
        id: 'ORD-IN-957945',
        customer: 'Sakshi Patil',
        phone: '9579453006',
        email: 'sakshi@perfumeshope.in',
        items: [{ id: 'p2', name: 'OUD SUPRÊME', price: 3499, qty: 1 }],
        status: 'Delivered'
      }
    ];
  }
  return list;
}

function verifyBuyerForReview() {
  const input = document.getElementById('review-verify-input');
  const msgEl = document.getElementById('review-verify-msg');
  if (!input || !msgEl || !activeModalProduct) return;

  const val = input.value.trim().toLowerCase();
  if (!val) {
    msgEl.className = 'text-[11px] font-semibold text-red-400 block';
    msgEl.innerText = 'Please enter your phone number or Order ID to verify.';
    return;
  }

  const cleanDigits = val.replace(/\D/g, '');
  const orders = getStoredOrders();

  // Find any matching order containing this product
  const matchedOrder = orders.find(ord => {
    const containsProd = ord.items && Array.isArray(ord.items) && ord.items.some(it => 
      it.id === activeReviewProductId || (it.name && it.name.toLowerCase() === activeModalProduct.name.toLowerCase())
    );
    if (!containsProd) return false;

    // Check order id
    if (ord.id && ord.id.toLowerCase().includes(val)) return true;
    // Check phone number
    if (ord.phone) {
      const ordDigits = ord.phone.replace(/\D/g, '');
      if (cleanDigits.length >= 6 && (ordDigits.includes(cleanDigits) || cleanDigits.includes(ordDigits))) return true;
      if (ordDigits.endsWith(cleanDigits) || cleanDigits.endsWith(ordDigits)) return true;
    }
    // Check email
    if (ord.email && ord.email.toLowerCase() === val) return true;
    // Check customer name
    if (ord.customer && ord.customer.toLowerCase().includes(val) && val.length >= 4) return true;

    return false;
  });

  if (matchedOrder) {
    unlockReviewForm(matchedOrder);
  } else {
    msgEl.className = 'text-[11px] font-semibold text-red-400 block leading-relaxed';
    msgEl.innerHTML = `🔒 <b>Purchase Not Found:</b> We couldn't find an order for <i>"${activeModalProduct.name}"</i> with "${input.value}". Only customers who ordered this fragrance can submit reviews.`;
  }
}

function unlockReviewForm(order) {
  verifiedBuyerSession = {
    orderId: order.id,
    customerName: order.customer || 'Verified Buyer',
    phone: order.phone
  };

  const verifyCard = document.getElementById('review-verify-card');
  const reviewForm = document.getElementById('write-review-form');
  const verifiedText = document.getElementById('review-verified-buyer-text');
  const verifiedOrderId = document.getElementById('review-verified-order-id');
  const nameInput = document.getElementById('review-author-name');
  const cityInput = document.getElementById('review-author-city');

  if (verifyCard) verifyCard.classList.add('hidden');
  if (reviewForm) reviewForm.classList.remove('hidden');

  if (verifiedText) verifiedText.innerText = `Verified Buyer: ${order.customer || 'Valued Connoisseur'}`;
  if (verifiedOrderId) verifiedOrderId.innerText = order.id || 'ORD-VERIFIED';
  if (nameInput) nameInput.value = order.customer || '';
  if (cityInput && !cityInput.value) cityInput.value = 'Pune, Maharashtra';

  showToast(`Purchase verified for Order #${order.id}! 🌟`, 'success');
}

function setReviewRating(rating) {
  currentReviewRating = rating;
  const valInput = document.getElementById('review-rating-val');
  if (valInput) valInput.value = rating;

  const stars = document.querySelectorAll('#review-star-picker span');
  stars.forEach((s, idx) => {
    if (idx < rating) {
      s.className = 'text-yellow-400 font-bold';
    } else {
      s.className = 'text-gray-600';
    }
  });

  const label = document.getElementById('review-rating-label');
  if (label) {
    const titles = {
      5: '5.0 / 5.0 (Beast Mode & Nuclear Projection ✨)',
      4: '4.0 / 5.0 (High Compliment Magnet & Performance 🌸)',
      3: '3.0 / 5.0 (Good Daily Wear & Moderate Sillage 👍)',
      2: '2.0 / 5.0 (Soft Projection / Subtle Scent)',
      1: '1.0 / 5.0 (Disappointed / Not For Me)'
    };
    label.innerText = titles[rating] || `${rating}.0 / 5.0`;
  }
}

function hoverReviewRating(rating) {
  const stars = document.querySelectorAll('#review-star-picker span');
  stars.forEach((s, idx) => {
    if (idx < rating) {
      s.className = 'text-yellow-300';
    } else {
      s.className = 'text-gray-600';
    }
  });
}

function resetHoverReviewRating() {
  setReviewRating(currentReviewRating);
}

async function handleReviewImagesUpload(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;

  if (currentReviewImages.length + files.length > 4) {
    showToast('Maximum 4 photos allowed per review', 'error');
  }

  showToast('Compressing unboxing photos...', 'info');
  for (let i = 0; i < files.length && currentReviewImages.length < 4; i++) {
    try {
      const result = await processImageFile(files[i], 1000, 1000, 0.85);
      if (result && result.dataUrl) {
        currentReviewImages.push(result.dataUrl);
      }
    } catch (e) {
      console.warn('Error processing review photo:', e);
    }
  }

  renderReviewImagesPreview();
  showToast(`${currentReviewImages.length} photo(s) attached! 📸`, 'success');
  event.target.value = '';
}

function removeReviewImage(index) {
  if (index >= 0 && index < currentReviewImages.length) {
    currentReviewImages.splice(index, 1);
    renderReviewImagesPreview();
  }
}

function renderReviewImagesPreview() {
  const grid = document.getElementById('review-images-preview-grid');
  const countLabel = document.getElementById('review-image-count-label');
  if (!grid) return;

  if (countLabel) {
    countLabel.innerText = `${currentReviewImages.length} / 4 photo(s) added`;
  }

  if (currentReviewImages.length === 0) {
    grid.classList.add('hidden');
    grid.innerHTML = '';
    return;
  }

  grid.classList.remove('hidden');
  grid.innerHTML = currentReviewImages.map((imgUrl, idx) => `
    <div class="relative group rounded-xl overflow-hidden border theme-border aspect-square bg-black/40 shadow-sm">
      <img src="${imgUrl}" alt="Review Photo #${idx + 1}" class="w-full h-full object-cover">
      <button type="button" onclick="removeReviewImage(${idx})" class="absolute top-1 right-1 w-5 h-5 rounded-md bg-red-950/80 hover:bg-red-600 text-red-300 hover:text-white flex items-center justify-center text-[9px] shadow-sm">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `).join('');
}

function handleReviewSubmit(e) {
  e.preventDefault();
  if (!activeReviewProductId) return;

  const author = document.getElementById('review-author-name').value.trim() || 'Verified Buyer';
  const city = document.getElementById('review-author-city').value.trim() || 'Pune, India';
  const title = document.getElementById('review-title').value.trim();
  const comment = document.getElementById('review-comment').value.trim();
  const rating = Number(document.getElementById('review-rating-val').value) || 5;

  const newReview = {
    id: 'rev-user-' + Date.now(),
    author: author,
    city: city,
    rating: rating,
    title: title,
    comment: comment,
    date: 'Just now',
    verified: true,
    orderId: verifiedBuyerSession ? verifiedBuyerSession.orderId : 'ORD-VERIFIED',
    images: [...currentReviewImages]
  };

  saveStoredReview(activeReviewProductId, newReview);
  closeWriteReviewModal();
  renderDetailReviews();
  showToast('Verified review & photos published successfully! ✨', 'success');
}

// Lightbox Handlers
function openReviewPhotoLightbox(imgUrl, caption = '') {
  const lightbox = document.getElementById('review-photo-lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (!lightbox || !img) return;

  img.src = imgUrl;
  if (cap) cap.innerText = caption || '📸 Customer Received Photo';
  lightbox.classList.remove('hidden');
}

function closeReviewPhotoLightbox() {
  document.getElementById('review-photo-lightbox')?.classList.add('hidden');
}

// Interactive Zoom Handlers
function adjustDetailZoom(change) {
  currentDetailZoom = Math.min(2.5, Math.max(0.8, Number((currentDetailZoom + change).toFixed(2))));
  applyDetailZoom();
}

function resetDetailZoom() {
  currentDetailZoom = 1.0;
  applyDetailZoom();
  resetZoomPan();
}

function applyDetailZoom() {
  const img = document.getElementById('detail-product-img');
  const levelText = document.getElementById('detail-zoom-level-text');
  if (img) {
    img.style.transform = `scale(${currentDetailZoom})`;
  }
  if (levelText) {
    levelText.innerText = `${Math.round(currentDetailZoom * 100)}%`;
  }
}

function handleZoomPan(e) {
  if (currentDetailZoom <= 1.0) return;
  const container = document.getElementById('zoom-viewport-container');
  const img = document.getElementById('detail-product-img');
  if (!container || !img) return;

  const rect = container.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  img.style.transformOrigin = `${x}% ${y}%`;
}

function resetZoomPan() {
  const img = document.getElementById('detail-product-img');
  if (img) {
    img.style.transformOrigin = 'center center';
  }
}

function adjustDetailQty(change) {
  currentDetailQty = Math.max(1, currentDetailQty + change);
  const qtyEl = document.getElementById('detail-qty-val');
  if (qtyEl) qtyEl.innerText = currentDetailQty;
}

function handleDetailAddToCart() {
  if (!activeModalProduct) return;
  for (let i = 0; i < currentDetailQty; i++) {
    addToCart(activeModalProduct.id);
  }
  closeProductModal();
  openCartDrawer();
}

function handleDetailBuyNow() {
  if (!activeModalProduct) return;
  addToCart(activeModalProduct.id);
  closeProductModal();
  openCartDrawer();
}

// 14. SMOOTH NAVIGATION & INVISIBLE SHORTCUTS
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// =========================================================================
// 15. 3D ORBIT GLOBE & STOREFRONT VIDEO SHOWCASE CONTROLLER
// =========================================================================
const DEFAULT_STOREFRONT_VIDEO_CONFIG = {
  placement: 'section',
  videoSrc: 'videos/animo-orbit-globe-720p.mp4',
  badge: '🌍 DIRECT GLOBAL SOURCING • DUBAI TO PUNE',
  title: 'The World’s Rarest Oils & Arabian Extraits',
  desc: 'Ethically sourced from aged Cambodian oud reserves, French Grasse rose fields, pure Mysore sandalwood forests, and Royal Taif distilleries. 100% uncut luxury extraits bottled with precision craftsmanship.',
  overlayOpacity: 40,
  autoplay: true,
  loop: true,
  muted: true
};

function getStoredVideoConfig() {
  const saved = localStorage.getItem('perfumes_video_settings');
  if (saved) {
    try {
      return { ...DEFAULT_STOREFRONT_VIDEO_CONFIG, ...JSON.parse(saved) };
    } catch (e) {}
  }
  return { ...DEFAULT_STOREFRONT_VIDEO_CONFIG };
}

function parseYouTubeId(url) {
  if (!url || typeof url !== 'string') return null;
  url = url.trim();
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function initGlobalVideoShowcase() {
  const cfg = getStoredVideoConfig();
  const placement = cfg.placement || 'section';
  const videoSrc = cfg.videoSrc || 'videos/animo-orbit-globe-720p.mp4';
  const ytId = parseYouTubeId(videoSrc);

  const sectionEl = document.getElementById('global-sourcing-video-section');
  const heroVideoEl = document.getElementById('hero-bg-video');
  const floatingWidgetEl = document.getElementById('floating-orbit-globe-widget');
  const globalVideoEl = document.getElementById('global-sourcing-video');
  const globalYtIframeEl = document.getElementById('global-sourcing-youtube-iframe');
  const formatBadgeEl = document.getElementById('global-video-format-badge');
  const customControlsEl = document.getElementById('global-video-custom-controls');
  const soundBtnEl = document.getElementById('video-sound-toggle-btn');
  const floatingVideoEl = document.getElementById('floating-orbit-globe-video');

  // Video / YouTube Rendering in Section
  if (ytId) {
    if (globalVideoEl) {
      globalVideoEl.pause();
      globalVideoEl.classList.add('hidden');
    }
    if (globalYtIframeEl) {
      globalYtIframeEl.classList.remove('hidden');
      const embedUrl = `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=1&rel=0&modestbranding=1`;
      if (globalYtIframeEl.src !== embedUrl) {
        globalYtIframeEl.src = embedUrl;
      }
    }
    if (formatBadgeEl) formatBadgeEl.textContent = 'YouTube 4K • Global Origins & Sourcing';
    if (customControlsEl) customControlsEl.classList.add('hidden');
    if (soundBtnEl) soundBtnEl.classList.add('hidden');
  } else {
    if (globalYtIframeEl) {
      globalYtIframeEl.src = '';
      globalYtIframeEl.classList.add('hidden');
    }
    if (globalVideoEl) {
      globalVideoEl.classList.remove('hidden');
      if (videoSrc && !globalVideoEl.src.endsWith(videoSrc)) {
        globalVideoEl.src = videoSrc;
      }
      globalVideoEl.play().catch(() => {});
    }
    if (formatBadgeEl) formatBadgeEl.textContent = 'HD 720p • Global Origin Orbit';
    if (customControlsEl) customControlsEl.classList.remove('hidden');
    if (soundBtnEl) soundBtnEl.classList.remove('hidden');
  }

  // Set Text Copy
  const badgeEl = document.getElementById('video-showcase-badge');
  const titleEl = document.getElementById('video-showcase-title');
  const descEl = document.getElementById('video-showcase-desc');
  const overlayTintEl = document.getElementById('global-video-overlay-tint');

  if (badgeEl) badgeEl.textContent = cfg.badge;
  if (titleEl) titleEl.textContent = cfg.title;
  if (descEl) descEl.textContent = cfg.desc;
  if (overlayTintEl) {
    if (ytId) {
      overlayTintEl.style.backgroundColor = 'transparent';
    } else {
      overlayTintEl.style.backgroundColor = `rgba(0,0,0,${(cfg.overlayOpacity || 40) / 100})`;
    }
  }

  // Handle Placements
  if (placement === 'section') {
    if (sectionEl) sectionEl.classList.remove('hidden');
    if (heroVideoEl) heroVideoEl.classList.add('hidden');
    if (floatingWidgetEl) floatingWidgetEl.classList.add('hidden');
  } else if (placement === 'hero') {
    if (sectionEl) sectionEl.classList.add('hidden');
    if (heroVideoEl) {
      heroVideoEl.classList.remove('hidden');
      if (videoSrc && !heroVideoEl.src.endsWith(videoSrc) && !ytId) {
        heroVideoEl.src = videoSrc;
      }
      heroVideoEl.play().catch(() => {});
    }
    if (floatingWidgetEl) floatingWidgetEl.classList.add('hidden');
  } else if (placement === 'floating') {
    if (sectionEl) sectionEl.classList.add('hidden');
    if (heroVideoEl) heroVideoEl.classList.add('hidden');
    if (floatingWidgetEl) {
      floatingWidgetEl.classList.remove('hidden');
      if (floatingVideoEl && !ytId) floatingVideoEl.play().catch(() => {});
    }
  } else if (placement === 'both_section_floating') {
    if (sectionEl) sectionEl.classList.remove('hidden');
    if (heroVideoEl) heroVideoEl.classList.add('hidden');
    if (floatingWidgetEl) {
      floatingWidgetEl.classList.remove('hidden');
      if (floatingVideoEl && !ytId) floatingVideoEl.play().catch(() => {});
    }
  } else if (placement === 'none') {
    if (sectionEl) sectionEl.classList.add('hidden');
    if (heroVideoEl) heroVideoEl.classList.add('hidden');
    if (floatingWidgetEl) floatingWidgetEl.classList.add('hidden');
  }
}

function toggleGlobalVideoPlay() {
  const video = document.getElementById('global-sourcing-video');
  const icon = document.getElementById('video-play-icon');
  if (!video) return;
  if (video.paused) {
    video.play();
    if (icon) icon.className = 'fa-solid fa-pause';
  } else {
    video.pause();
    if (icon) icon.className = 'fa-solid fa-play';
  }
}

function toggleGlobalVideoSound() {
  const video = document.getElementById('global-sourcing-video');
  const icon = document.getElementById('video-sound-icon');
  const label = document.getElementById('video-sound-label');
  if (!video) return;
  video.muted = !video.muted;
  if (video.muted) {
    if (icon) icon.className = 'fa-solid fa-volume-xmark';
    if (label) label.textContent = 'Unmute Audio';
  } else {
    if (icon) icon.className = 'fa-solid fa-volume-high text-[#C59B27]';
    if (label) label.textContent = 'Mute Audio';
  }
}

function toggleGlobalVideoFullscreen() {
  const video = document.getElementById('global-sourcing-video');
  if (!video) return;
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
}

function openOrbitGlobeModal() {
  const modal = document.getElementById('orbit-globe-modal');
  const modalVideo = document.getElementById('modal-orbit-globe-video');
  const modalIframe = document.getElementById('modal-youtube-iframe');
  const cfg = getStoredVideoConfig();
  const ytId = parseYouTubeId(cfg.videoSrc);

  if (modal) {
    modal.classList.remove('hidden');
    if (ytId) {
      if (modalVideo) {
        modalVideo.pause();
        modalVideo.classList.add('hidden');
      }
      if (modalIframe) {
        modalIframe.classList.remove('hidden');
        modalIframe.src = `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&mute=0&controls=1`;
      }
    } else {
      if (modalIframe) {
        modalIframe.src = '';
        modalIframe.classList.add('hidden');
      }
      if (modalVideo) {
        modalVideo.classList.remove('hidden');
        modalVideo.play().catch(() => {});
      }
    }
  }
}

function closeOrbitGlobeModal() {
  const modal = document.getElementById('orbit-globe-modal');
  const modalVideo = document.getElementById('modal-orbit-globe-video');
  const modalIframe = document.getElementById('modal-youtube-iframe');
  if (modal) {
    modal.classList.add('hidden');
    if (modalVideo) modalVideo.pause();
    if (modalIframe) modalIframe.src = '';
  }
}

