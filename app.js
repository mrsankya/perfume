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
    badge: 'Masterpiece 👑',
    longevity: '16+ Hours (Legendary Alpha ⚡)',
    sillage: 'Unforgettable Magnetic Trail 💨',
    season: 'Signature All-Season Legend 🏆',
    blindBuyInsurance: true,
    inStock: true
  }
];

const CELEBRITY_WARDROBES = [
  {
    id: 'celeb-srk',
    name: 'Shah Rukh Khan',
    tagline: 'The King of Bollywood Signature Layering',
    subtitle: 'SRK’s iconic blend of smoky Mysore Sandalwood + spicy Woody Amber',
    badge: '👑 King Khan’s Scent Signature',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
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
  loadCartFromStorage();
  loadUserFromStorage();
  initVisitorTracker();

  const savedGender = localStorage.getItem('perfume_selected_gender') || 'All';
  switchGenderTheme(savedGender, false);
  
  initHeroSlider();
  renderProducts();
  renderWizard();
  renderCelebrityWardrobes();
  renderDiscoveryBoxBuilder();
  renderAlchemyBlender();
  renderCommunityFeed();
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
  bottleEngravingText = text.trim();
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

function openOrderSuccessModal(orderData) {
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

// 4. CELEBRITY SCENT WARDROBES
function renderCelebrityWardrobes() {
  const container = document.getElementById('celebrity-wardrobe-grid');
  if (!container) return;

  container.innerHTML = CELEBRITY_WARDROBES.map(c => `
    <div class="celebrity-card rounded-3xl p-5 theme-card border theme-border flex flex-col justify-between space-y-4">
      
      <div class="flex items-center gap-3.5">
        <img src="${c.image}" alt="${c.name}" class="w-16 h-16 rounded-2xl object-cover border theme-border shadow-md">
        <div>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold theme-badge inline-block mb-1">
            ${c.badge}
          </span>
          <h3 class="font-heading text-base font-bold theme-text-main">${c.name}</h3>
          <p class="text-[11px] theme-text-muted line-clamp-1">${c.tagline}</p>
        </div>
      </div>

      <blockquote class="text-xs italic theme-text-secondary p-3 rounded-2xl theme-bg-surface border theme-border">
        ${c.quote}
      </blockquote>

      <div class="space-y-2 pt-1 border-t theme-border">
        <span class="text-[10px] font-bold theme-accent uppercase tracking-wider block">Signature Scent Duo:</span>
        <div class="grid grid-cols-2 gap-2">
          ${c.items.map(item => `
            <div class="p-2 rounded-xl theme-bg-surface border theme-border text-[11px]">
              <span class="font-bold theme-text-main block truncate uppercase">${item.name}</span>
              <span class="theme-text-muted">${item.brand} • ${formatRupees(item.price)}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pt-2 flex items-center justify-between border-t theme-border">
        <div>
          <span class="text-[10px] theme-text-muted line-through">${formatRupees(c.regularPrice)}</span>
          <span class="font-heading text-base font-bold theme-accent block">${formatRupees(c.comboPrice)}</span>
          <span class="text-[9px] font-bold text-green-600 dark:text-green-400">Save ${formatRupees(c.savings)} Duo Combo</span>
        </div>

        <button onclick="buyCelebrityDuo('${c.id}')" class="theme-btn-primary px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5">
          <i class="fa-solid fa-cart-plus"></i>
          <span>Add Duo</span>
        </button>
      </div>

    </div>
  `).join('');
}

function buyCelebrityDuo(celebId) {
  const celeb = CELEBRITY_WARDROBES.find(c => c.id === celebId);
  if (!celeb) return;

  const products = getStoredProducts();
  celeb.items.forEach(cItem => {
    const prod = products.find(p => p.id === cItem.id);
    if (prod) {
      const existing = cart.find(i => i.id === prod.id);
      if (existing) existing.qty += 1;
      else cart.push({ id: prod.id, name: prod.name, brand: prod.brand, price: prod.price, image: prod.image, accord: prod.accord, qty: 1 });
    }
  });

  discountCoupon = { code: 'CELEBDUO', amount: celeb.savings };
  saveCartToStorage();
  openCartDrawer();
  showToast(`Added ${celeb.name}'s Wardrobe Duo (Saved ${formatRupees(celeb.savings)})! 👑`, 'success');
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

// 7. THE SCENT CLUB - COMMUNITY SOTD FEED
function renderCommunityFeed() {
  const container = document.getElementById('community-feed-grid');
  if (!container) return;

  container.innerHTML = communityPosts.map(post => `
    <div class="rounded-3xl p-5 theme-card border theme-border space-y-3.5 shadow-sm">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="${post.avatar}" alt="${post.author}" class="w-10 h-10 rounded-full object-cover border theme-border">
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-xs theme-text-main">${post.author}</span>
              ${post.verifiedPurchase ? '<span class="text-[10px] text-green-600 dark:text-green-400 font-bold">✓ Verified</span>' : ''}
            </div>
            <span class="text-[10px] theme-text-muted">${post.city} • ${post.date}</span>
          </div>
        </div>

        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold theme-badge">
          ⚡ ${post.longevityRating}
        </span>
      </div>

      <div class="p-3 rounded-2xl theme-bg-surface border theme-border space-y-1">
        <div class="flex items-center justify-between text-[11px]">
          <span class="theme-text-muted">Scent of the Day:</span>
          <span class="font-heading font-bold theme-text-main uppercase">${post.sotd}</span>
        </div>
        <div class="flex items-center justify-between text-[11px]">
          <span class="theme-text-muted">Occasion:</span>
          <span class="theme-text-secondary font-medium">${post.occasion}</span>
        </div>
      </div>

      <p class="text-xs theme-text-secondary italic leading-relaxed">
        "${post.text}"
      </p>

      <div class="pt-2 flex items-center justify-between border-t theme-border">
        <button onclick="likeCommunityPost('${post.id}')" class="text-xs theme-text-muted hover:text-red-500 flex items-center gap-1.5">
          <i class="fa-solid fa-heart text-red-500"></i>
          <span>${post.likes} Upvotes</span>
        </button>

        <button onclick="buyCommunityDuo(['${post.duoIds[0]}', '${post.duoIds[1]}'])" class="text-xs font-bold theme-accent hover:underline flex items-center gap-1">
          <span>Buy This Layering Duo</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    </div>
  `).join('');
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
      else cart.push({ id: prod.id, name: prod.name, brand: prod.brand, price: prod.price, image: prod.image, accord: prod.accord, qty: 1 });
    }
  });

  discountCoupon = { code: 'COMMUNITY10', amount: 600 };
  saveCartToStorage();
  openCartDrawer();
  showToast('Community Layering Combo Added with ₹600 Discount! 👑', 'success');
}

function handleCommunityPostSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('post-author-name').value.trim();
  const city = document.getElementById('post-city-name').value.trim();
  const sotd = document.getElementById('post-sotd-name').value.trim();
  const text = document.getElementById('post-review-text').value.trim();
  const longevity = document.getElementById('post-longevity-select').value;

  const newPost = {
    id: 'sotd-' + Date.now(),
    author: name,
    city: city || 'Pune',
    date: 'Just now',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    sotd: sotd,
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
  document.getElementById('post-sotd-modal')?.classList.add('hidden');
  showToast('Your Scent of the Day post is live on The Scent Club! 🎉', 'success');
}

// 8. IN-STORE VIP SCENT CONSULTATION BOOKING
function handleConsultationBooking(e) {
  e.preventDefault();
  const name = document.getElementById('consult-name').value.trim();
  const phone = document.getElementById('consult-phone').value.trim();
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
  const name = document.getElementById('lead-name-input').value.trim();
  const phone = document.getElementById('lead-phone-input').value.trim();
  const city = document.getElementById('lead-city-input').value.trim() || 'Pune';

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
}

// 11. CATALOG PRODUCT RENDERING & GAUGE METERS
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const products = getStoredProducts();
  const filtered = products.filter(p => {
    const matchGender = currentGenderTheme === 'All' || p.gender === currentGenderTheme || p.gender === 'Unisex';
    const matchAccord = selectedAccord === 'All' || p.accord === selectedAccord;
    const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery) || p.brand.toLowerCase().includes(searchQuery) || p.notes.toLowerCase().includes(searchQuery);
    return matchGender && matchAccord && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center space-y-2">
        <p class="font-heading text-lg theme-text-main">No fragrances match your filter</p>
        <button onclick="resetFilters()" class="text-xs theme-accent font-bold underline">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="theme-card rounded-3xl p-4 border theme-border flex flex-col justify-between space-y-3 group hover:border-gray-400 transition-all">
      
      <!-- Image & Badges -->
      <div class="relative rounded-2xl overflow-hidden aspect-square bg-black/20">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80';" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        
        <span class="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider theme-badge shadow-sm">
          ${p.badge || 'Bestseller'}
        </span>

        <span class="absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-[9px] font-bold bg-black/80 backdrop-blur-md text-green-300 border border-green-700/60 shadow-sm flex items-center gap-1">
          <i class="fa-solid fa-shield-check text-green-400"></i> Free 2ml Tester Vial
        </span>
      </div>

      <!-- Details -->
      <div class="space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold uppercase tracking-widest theme-text-muted">${p.brand}</span>
          <span class="text-[10px] font-semibold theme-text-muted">${p.accord}</span>
        </div>

        <h3 class="font-heading text-sm sm:text-base font-bold theme-text-main uppercase tracking-wide truncate">${p.name}</h3>
        <p class="text-[11px] theme-text-muted line-clamp-2 leading-relaxed">${p.notes}</p>

        <!-- Performance Gauges -->
        <div class="p-2.5 rounded-xl theme-bg-surface border theme-border space-y-1.5 mt-2">
          <div class="flex items-center justify-between text-[10px]">
            <span class="theme-text-muted flex items-center gap-1"><i class="fa-solid fa-clock theme-accent"></i> Longevity:</span>
            <span class="font-bold theme-text-main">${p.longevity || '16+ Hours ⚡'}</span>
          </div>
          <div class="w-full bg-black/20 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
            <div class="meter-bar-fill h-1.5 rounded-full" style="width: 92%"></div>
          </div>

          <div class="flex items-center justify-between text-[10px] pt-1">
            <span class="theme-text-muted flex items-center gap-1"><i class="fa-solid fa-wind theme-accent"></i> Sillage:</span>
            <span class="font-bold theme-text-main">${p.sillage || 'Room Filler 💨'}</span>
          </div>
        </div>
      </div>

      <!-- Pricing & Buy -->
      <div class="pt-2 border-t theme-border flex items-center justify-between gap-2">
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
  `).join('');
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
  document.getElementById('search-input')?.setAttribute('value', '');
  filterByAccord('All');
}

// 12. DYNAMIC HERO SLIDER CAROUSEL (ALL / WOMEN / MEN)
const HERO_SLIDES = {
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

let currentHeroSlideIndex = 0;
let heroSliderInterval = null;

function setHeroSlide(index) {
  const slides = HERO_SLIDES[currentGenderTheme] || HERO_SLIDES.All;
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
  const slides = HERO_SLIDES[currentGenderTheme] || HERO_SLIDES.All;

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
    toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 theme-card border theme-border px-4 py-2.5 rounded-2xl text-xs shadow-2xl flex items-center gap-2 transition-all duration-300 translate-y-10 opacity-0';
    document.body.appendChild(toast);
  }

  const icon = type === 'success' ? 'fa-circle-check text-green-500' : 'fa-circle-info theme-accent';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span class="theme-text-main font-semibold">${message}</span>`;
  toast.classList.remove('translate-y-10', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3500);
}
