/* ==========================================================================
   PERFUME SHOPE - FULL E-COMMERCE ENGINE (CART, GPS, GOOGLE AUTH, VISITOR LEADS)
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
    badge: 'Artisanal',
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
    badge: 'Gourmand 🍦',
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
    badge: 'Masterpiece ⚡',
    inStock: true
  }
];

const THEME_HERO_SLIDES = {
  All: [
    {
      badge: '👑 ROYAL OUD & KASHMIRI KESAR EDITION',
      title: 'Regal Sillage for Weddings & Festivities',
      desc: 'Pure Dehn Al Oud, Kashmiri Saffron & Mysore Sandalwood extraits crafted for royalty.',
      image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=1600&auto=format&fit=crop&q=80'
    },
    {
      badge: '✨ ARABIAN & FRENCH EXTRAIT',
      title: 'Long-Lasting Beast Mode Fragrances',
      desc: 'Authentic imports from Lattafa, Rasasi, Afnan & Armaf with guaranteed 12+ hours projection.',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1600&auto=format&fit=crop&q=80'
    },
    {
      badge: '🌸 INDIAN BOTANICAL HERITAGE',
      title: 'Mysore Sandalwood & Kannauj Rose',
      desc: 'Centuries of pure Indian botanical essences refined into modern luxury EDPs.',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&auto=format&fit=crop&q=80'
    },
    {
      badge: '🏬 FLAGSHIP BOUTIQUE & TESTER LOUNGE',
      title: 'Visit In-Person & Try Free Tester Sprays',
      desc: 'Instant WhatsApp Reservation • UPI / Cards Accepted • 100% Genuine Batch Codes.',
      image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=1600&auto=format&fit=crop&q=80'
    }
  ],
  Women: [
    {
      badge: '🌸 FEMME HAUTE LUXE & ROSE GOLD',
      title: 'Delina, Yara Blush & Velvet Rose',
      desc: 'Enchanting floral sillage, Turkish rose petals, and warm vanilla extraits for queens.',
      image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=1600&auto=format&fit=crop&q=80'
    },
    {
      badge: '🍦 WARM GOURMAND & KESAR D’OR',
      title: 'Delicious Dates, Sweet Praline & Vanilla',
      desc: 'Viral gourmand sensations from Lattafa Khamrah & Nebras with heavenly sweet trails.',
      image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=1600&auto=format&fit=crop&q=80'
    },
    {
      badge: '👑 BRIDAL & FESTIVE MEHENDI COLLECTION',
      title: 'Long-Lasting Royal Wedding Sillage',
      desc: 'Kashmiri Kesar, Sandalwood and exotic florals tested for all-day Indian wedding festivities.',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1600&auto=format&fit=crop&q=80'
    },
    {
      badge: '🏬 TESTER LOUNGE IN PUNE',
      title: 'Try Free Fragrance Sprays Before Buying',
      desc: 'Visit our flagship boutique on FC Road Pune for personalized scent profiling.',
      image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=1600&auto=format&fit=crop&q=80'
    }
  ],
  Men: [
    {
      badge: '⚡ MARVEL BEAST MODE & TITANIUM SILLAGE',
      title: 'Armaf Club De Nuit & Creed Aventus Noir',
      desc: 'Smoky birch, Italian bergamot, blackcurrant & oakmoss engineered for 14+ hours unstoppable projection.',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1600&auto=format&fit=crop&q=80'
    },
    {
      badge: '🪵 ROYAL DEHN AL OUD & LEATHER NOIR',
      title: 'Cambodian Oud, Ambergris & Mysore Sandal',
      desc: 'Ajmal Amir One & Rasasi Oud Suprême — dark, masculine, and intensely commanding presence.',
      image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=1600&auto=format&fit=crop&q=80'
    },
    {
      badge: '🌊 MONSOON AQUA & BERGAMOT POWERHOUSE',
      title: 'Rasasi Hawas & Aquatic Citrus Energy',
      desc: 'The ultimate gym, office, and all-season beast mode performer built for the Indian climate.',
      image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=1600&auto=format&fit=crop&q=80'
    },
    {
      badge: '🛡️ 100% ORIGINAL IMPORTED BATCHES',
      title: 'Verified Batch Codes & Instant WhatsApp Pickup',
      desc: 'Skip waiting. Reserve on WhatsApp and collect from our Pune boutique in 30 seconds.',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&auto=format&fit=crop&q=80'
    }
  ]
};

// Global E-Commerce & State
let cart = [];
let currentUser = null;
let deliveryAddress = {
  mode: 'manual', // 'gps' | 'manual'
  fullAddress: '',
  city: 'Pune',
  state: 'Maharashtra',
  pincode: '411004',
  lat: null,
  lng: null
};

let discountCoupon = { code: '', amount: 0 };
let currentSlide = 0;
let slideInterval = null;
let touchStartX = 0;
let touchEndX = 0;

let catalogState = {
  searchQuery: '',
  gender: 'All',
  accord: 'All',
  brand: 'All'
};

let wizardState = {
  occasion: 'Indian Weddings & Sangeet',
  vibe: 'Royal Oud & Spices',
  gender: 'Women'
};

function formatRupees(amount) {
  return `₹${Number(amount || 0).toLocaleString('en-IN')}`;
}

function getActiveCatalog() {
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

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  loadUserFromStorage();
  initVisitorTracker();

  const savedGender = localStorage.getItem('perfume_selected_gender') || 'All';
  switchGenderTheme(savedGender, false);
  
  initHeroSlider();
  renderProducts();
  renderWizard();
  updateCartBadge();

  // Show Lead Gift Modal after 4s if not yet closed
  setTimeout(() => {
    if (!localStorage.getItem('perfume_lead_captured')) {
      openLeadGiftModal();
    }
  }, 4000);
});

// =========================================================================
// 1. SHOPPING CART SYSTEM & CHECKOUT
// =========================================================================
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
  const catalog = getActiveCatalog();
  const item = catalog.find(p => p.id === productId);
  if (!item) return;

  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      brand: item.brand,
      price: item.price,
      image: item.image,
      accord: item.accord,
      qty: 1
    });
  }

  saveCartToStorage();
  showToast(`Added ${item.name} to Cart`, 'success');
  openCartDrawer();
}

function buyNow(productId) {
  addToCart(productId);
  openCartDrawer();
  scrollToCheckoutSection();
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  saveCartToStorage();
}

function updateCartQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCartToStorage();
  }
}

function updateCartBadge() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.innerText = totalCount;
    if (totalCount > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });
}

function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  const panel = document.getElementById('cart-drawer-panel');
  if (!overlay || !panel) return;

  renderCartDrawer();
  overlay.classList.remove('hidden');
  setTimeout(() => {
    panel.classList.add('open');
  }, 10);
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  const panel = document.getElementById('cart-drawer-panel');
  if (!overlay || !panel) return;

  panel.classList.remove('open');
  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 300);
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const totalEl = document.getElementById('cart-total-val');
  const discountRow = document.getElementById('cart-discount-row');
  const discountValEl = document.getElementById('cart-discount-val');
  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="py-12 text-center text-gray-400 space-y-3">
        <i class="fa-solid fa-basket-shopping text-3xl text-gray-500"></i>
        <h4 class="font-heading text-sm font-semibold theme-text-main">Your Cart is Empty</h4>
        <p class="text-xs text-gray-400">Discover our authentic luxury perfumes and attars.</p>
        <button onclick="closeCartDrawer(); scrollToCatalog();" class="mt-2 bg-[#C59B27] text-[#18110E] px-4 py-2 rounded-xl text-xs font-bold uppercase">Explore Fragrances</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = formatRupees(0);
    if (totalEl) totalEl.innerText = formatRupees(0);
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const total = Math.max(0, subtotal - discountCoupon.amount);

  if (subtotalEl) subtotalEl.innerText = formatRupees(subtotal);
  if (totalEl) totalEl.innerText = formatRupees(total);

  if (discountCoupon.amount > 0 && discountRow) {
    discountRow.classList.remove('hidden');
    discountValEl.innerText = `- ${formatRupees(discountCoupon.amount)}`;
  } else if (discountRow) {
    discountRow.classList.add('hidden');
  }

  itemsContainer.innerHTML = cart.map(item => `
    <div class="flex items-center gap-3 p-2.5 rounded-xl theme-card border">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&auto=format&fit=crop&q=60';" class="w-12 h-12 rounded-lg object-cover border border-gray-700 shrink-0">
      
      <div class="flex-1 min-w-0">
        <span class="text-[9px] font-bold text-[#A67642] uppercase block">${item.brand}</span>
        <h4 class="font-heading text-xs font-bold theme-text-main truncate">${item.name}</h4>
        <span class="text-xs font-extrabold text-[#C59B27]">${formatRupees(item.price)}</span>
      </div>

      <div class="flex items-center gap-1.5 bg-black/20 rounded-lg p-1 border theme-border">
        <button onclick="updateCartQty('${item.id}', -1)" class="w-5 h-5 rounded flex items-center justify-center text-xs text-gray-300 hover:text-white font-bold">-</button>
        <span class="text-xs font-bold theme-text-main px-1">${item.qty}</span>
        <button onclick="updateCartQty('${item.id}', 1)" class="w-5 h-5 rounded flex items-center justify-center text-xs text-gray-300 hover:text-white font-bold">+</button>
      </div>

      <button onclick="removeFromCart('${item.id}')" class="text-gray-500 hover:text-red-400 p-1 text-xs">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `).join('');
}

function applyPromoCode() {
  const input = document.getElementById('cart-coupon-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'ROYAL500' || code === 'FIRST500') {
    discountCoupon = { code: code, amount: 500 };
    showToast('Promo Code ROYAL500 applied! ₹500 Discount', 'success');
    renderCartDrawer();
  } else if (code === 'MARVEL10' || code === 'FEMME10') {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const amt = Math.round(subtotal * 0.10);
    discountCoupon = { code: code, amount: amt };
    showToast(`Promo Code ${code} applied! 10% Discount`, 'success');
    renderCartDrawer();
  } else {
    showToast('Invalid Coupon Code. Try ROYAL500', 'error');
  }
}

// =========================================================================
// 2. AUTOMATIC PRECISE GPS ADDRESS vs MANUAL ADDRESS
// =========================================================================
function setAddressMode(mode) {
  deliveryAddress.mode = mode;
  const gpsBtn = document.getElementById('addr-mode-gps-btn');
  const manualBtn = document.getElementById('addr-mode-manual-btn');
  const gpsView = document.getElementById('addr-gps-view');
  const manualView = document.getElementById('addr-manual-view');

  if (mode === 'gps') {
    gpsBtn.className = 'flex-1 py-2 rounded-xl text-xs font-bold bg-[#C59B27] text-[#18110E] shadow-sm flex items-center justify-center gap-1.5 transition-all';
    manualBtn.className = 'flex-1 py-2 rounded-xl text-xs font-medium theme-card flex items-center justify-center gap-1.5 transition-all';
    gpsView.classList.remove('hidden');
    manualView.classList.add('hidden');
    fetchAutomaticGPSLocation();
  } else {
    manualBtn.className = 'flex-1 py-2 rounded-xl text-xs font-bold bg-[#C59B27] text-[#18110E] shadow-sm flex items-center justify-center gap-1.5 transition-all';
    gpsBtn.className = 'flex-1 py-2 rounded-xl text-xs font-medium theme-card flex items-center justify-center gap-1.5 transition-all';
    manualView.classList.remove('hidden');
    gpsView.classList.add('hidden');
  }
}

function fetchAutomaticGPSLocation() {
  const statusEl = document.getElementById('gps-status-text');
  const coordsEl = document.getElementById('gps-coords-display');
  const addressPreviewEl = document.getElementById('gps-address-result');
  if (!statusEl) return;

  statusEl.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-[#C59B27]"></i> Acquiring high-precision GPS satellite fix...`;

  if (!navigator.geolocation) {
    statusEl.innerHTML = `<span class="text-red-400">Geolocation not supported by your browser. Please use Manual Address.</span>`;
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lng = pos.coords.longitude.toFixed(6);
      const accuracy = Math.round(pos.coords.accuracy);

      deliveryAddress.lat = lat;
      deliveryAddress.lng = lng;

      // Reverse geocoding via OpenStreetMap Nominatim
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`)
        .then(res => res.json())
        .then(data => {
          const addr = data.address || {};
          const city = addr.city || addr.town || addr.county || 'Pune';
          const state = addr.state || 'Maharashtra';
          const pincode = addr.postcode || '411004';
          const road = addr.road || addr.suburb || 'FC Road Area';

          deliveryAddress.city = city;
          deliveryAddress.state = state;
          deliveryAddress.pincode = pincode;
          deliveryAddress.fullAddress = `${road}, ${city}, ${state} - ${pincode} (GPS: ${lat}, ${lng})`;

          statusEl.innerHTML = `<span class="text-[#16a34a] font-bold"><i class="fa-solid fa-circle-check"></i> High-Precision GPS Lock (±${accuracy}m)</span>`;
          if (coordsEl) coordsEl.innerText = `Coordinates: ${lat}° N, ${lng}° E`;
          if (addressPreviewEl) {
            addressPreviewEl.innerHTML = `
              <div class="p-3 rounded-xl bg-green-950/40 border border-green-700/50 text-xs space-y-1">
                <span class="text-green-300 font-bold block">📍 Auto-Detected Delivery Address:</span>
                <p class="text-white">${deliveryAddress.fullAddress}</p>
              </div>
            `;
          }
        })
        .catch(() => {
          deliveryAddress.fullAddress = `Near FC Road / Shivaji Nagar, Pune, Maharashtra - 411004 (GPS: ${lat}, ${lng})`;
          statusEl.innerHTML = `<span class="text-[#16a34a] font-bold"><i class="fa-solid fa-circle-check"></i> GPS Coordinates Locked</span>`;
          if (coordsEl) coordsEl.innerText = `Coordinates: ${lat}° N, ${lng}° E`;
          if (addressPreviewEl) {
            addressPreviewEl.innerHTML = `
              <div class="p-3 rounded-xl bg-green-950/40 border border-green-700/50 text-xs">
                <span class="text-green-300 font-bold block">📍 GPS Location:</span>
                <p class="text-white">${deliveryAddress.fullAddress}</p>
              </div>
            `;
          }
        });
    },
    (err) => {
      statusEl.innerHTML = `<span class="text-yellow-400">GPS permission not granted. Switched to Manual Address.</span>`;
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

// =========================================================================
// 3. CHECKOUT & ORDER PLACEMENT
// =========================================================================
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
    address: deliveryAddress.fullAddress || 'FC Road Boutique Store Pickup, Pune, Maharashtra - 411004',
    status: 'Confirmed'
  };

  // Save to Orders database
  let allOrders = [];
  try {
    const saved = localStorage.getItem('perfumes_orders');
    if (saved) allOrders = JSON.parse(saved);
  } catch (e) {}
  allOrders.unshift(orderData);
  localStorage.setItem('perfumes_orders', JSON.stringify(allOrders));

  // Log as reservation / lead
  cart.forEach(item => {
    recordReservationLead({
      name: item.name,
      brand: item.brand,
      price: item.price
    });
  });

  // Clear Cart
  cart = [];
  saveCartToStorage();
  closeCartDrawer();

  // Trigger Action
  if (paymentMethod === 'WhatsApp') {
    const itemsSummary = orderData.items.map(i => `${i.name} (x${i.qty})`).join(', ');
    const msg = `Namaste Perfume Shope! I placed Order #${orderId} for ₹${total.toLocaleString('en-IN')}.\n\nItems: ${itemsSummary}\nDelivery: ${orderData.address}\n\nPlease confirm delivery/pickup timing.`;
    window.open(`https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(msg)}`, '_blank');
  } else if (paymentMethod === 'UPI') {
    openUPIModal(orderData);
  } else {
    openOrderSuccessModal(orderData);
  }
}

function openUPIModal(orderData) {
  const modal = document.getElementById('upi-payment-modal');
  if (!modal) {
    openOrderSuccessModal(orderData);
    return;
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
  showToast('Payment verification received! Your order is being dispatched.', 'success');
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

// =========================================================================
// 4. USER PROFILE & GOOGLE LOGIN SIMULATION
// =========================================================================
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
      <img src="${currentUser.avatar}" alt="${currentUser.name}" class="w-6 h-6 rounded-full border border-[#C59B27] object-cover">
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

function openGoogleLoginModal() {
  document.getElementById('google-login-modal')?.classList.remove('hidden');
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
  
  // Record Visitor Lead for Promotional Calling
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
  document.getElementById('prof-tier').innerText = currentUser.vipTier || 'Royal Attar Club';

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
  showToast('Logged Out Successfully');
}

// =========================================================================
// 5. VISITOR TRACKING & PROMOTIONAL LEADS (FOR ADMIN CALLING LIST)
// =========================================================================
function initVisitorTracker() {
  const visitorId = localStorage.getItem('perfume_visitor_id') || 'vis-' + Date.now().toString().slice(-6);
  localStorage.setItem('perfume_visitor_id', visitorId);

  // Track Page view
  let visitors = [];
  try {
    const saved = localStorage.getItem('perfumes_visitors');
    if (saved) visitors = JSON.parse(saved);
  } catch (e) {}

  const existing = visitors.find(v => v.id === visitorId);
  if (existing) {
    existing.lastActive = new Date().toISOString();
    existing.visitCount = (existing.visitCount || 1) + 1;
  } else {
    visitors.unshift({
      id: visitorId,
      name: localStorage.getItem('visitor_name') || 'Website Visitor',
      phone: localStorage.getItem('visitor_phone') || '+91 95794 53006',
      city: 'Pune, Maharashtra',
      source: document.referrer ? 'Direct / Web' : 'Mobile Browser',
      lastActive: new Date().toISOString(),
      visitCount: 1,
      callStatus: 'New Lead'
    });
  }

  localStorage.setItem('perfumes_visitors', JSON.stringify(visitors));
}

function recordVisitorLead(leadInfo) {
  let visitors = [];
  try {
    const saved = localStorage.getItem('perfumes_visitors');
    if (saved) visitors = JSON.parse(saved);
  } catch (e) {}

  const newLead = {
    id: 'lead-' + Date.now().toString().slice(-6),
    name: leadInfo.name || 'Interested Customer',
    phone: leadInfo.phone || '+91 95794 53006',
    email: leadInfo.email || '',
    city: leadInfo.city || 'Pune',
    source: leadInfo.source || 'Promotional Offer Modal',
    lastActive: new Date().toISOString(),
    visitCount: 1,
    callStatus: 'Promotional Call Pending'
  };

  localStorage.setItem('visitor_name', newLead.name);
  localStorage.setItem('visitor_phone', newLead.phone);
  localStorage.setItem('perfume_lead_captured', 'true');

  visitors.unshift(newLead);
  localStorage.setItem('perfumes_visitors', JSON.stringify(visitors));
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
  const city = document.getElementById('lead-city-input')?.value.trim() || 'Pune';

  recordVisitorLead({ name, phone, city, source: '₹500 Gift Voucher Popup' });
  discountCoupon = { code: 'ROYAL500', amount: 500 };

  closeLeadGiftModal();
  showToast(`Namaste ${name}! ₹500 Discount Coupon ROYAL500 unlocked.`, 'success');
}

// =========================================================================
// 6. DUAL THEME & PRODUCT RENDERING
// =========================================================================
function switchGenderTheme(gender, triggerScroll = true) {
  catalogState.gender = gender;
  catalogState.accord = 'All';
  localStorage.setItem('perfume_selected_gender', gender);

  const body = document.body;
  body.setAttribute('data-theme', gender.toLowerCase());

  // Navigation Highlights
  document.querySelectorAll('.gender-filter-btn').forEach(btn => {
    const btnGender = btn.dataset.gender;
    if (btnGender === gender) {
      if (gender === 'Men') {
        btn.className = 'gender-filter-btn px-3 py-1 rounded-full font-bold text-xs bg-[#E62429] text-white shadow-lg border border-[#E62429] transition-all';
      } else if (gender === 'Women') {
        btn.className = 'gender-filter-btn px-3 py-1 rounded-full font-bold text-xs bg-[#A67642] text-white shadow-lg border border-[#A67642] transition-all';
      } else {
        btn.className = 'gender-filter-btn px-3 py-1 rounded-full font-bold text-xs bg-[#231B17] text-white shadow-lg border border-[#C59B27]/50 transition-all';
      }
    } else {
      btn.className = 'gender-filter-btn px-2.5 py-1 rounded-full font-medium text-xs bg-transparent text-gray-400 hover:text-white transition-all';
    }
  });

  const brandSub = document.getElementById('brand-tagline-sub');
  if (brandSub) {
    if (gender === 'Men') {
      brandSub.innerHTML = '⚡ Marvel Beast Mode &bull; Titanium Edition';
      brandSub.className = 'text-[7px] sm:text-[9px] uppercase tracking-[0.2em] text-[#38BDF8] font-sans block -mt-1 font-bold';
    } else if (gender === 'Women') {
      brandSub.innerHTML = '🌸 Femme Haute Parfumerie &bull; Rose Gold';
      brandSub.className = 'text-[7px] sm:text-[9px] uppercase tracking-[0.2em] text-[#C89B66] font-sans block -mt-1 font-bold';
    } else {
      brandSub.innerHTML = 'Haute Parfumerie &bull; India';
      brandSub.className = 'text-[7px] sm:text-[9px] uppercase tracking-[0.25em] text-[#A67642] font-sans block -mt-1 font-semibold';
    }
  }

  renderHeroSlides(gender);
  renderAccordPills(gender);
  renderWizard();
  renderProducts();

  if (triggerScroll) {
    showToast(gender === 'Men' ? '⚡ Men\'s Marvel Titanium Theme Activated' : (gender === 'Women' ? '🌸 Women\'s Royal Rose Gold Theme Activated' : '👑 All Fragrances Collection Active'));
  }
}

function renderHeroSlides(gender) {
  const slidesData = THEME_HERO_SLIDES[gender] || THEME_HERO_SLIDES.All;
  const sliderContainer = document.getElementById('hero-slides-container');
  if (!sliderContainer) return;

  sliderContainer.innerHTML = slidesData.map((s, idx) => `
    <div class="hero-slide ${idx === 0 ? 'active-slide' : ''} absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${idx === 0 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'}">
      <img src="${s.image}" alt="${s.title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&auto=format&fit=crop&q=80';" class="w-full h-full object-cover object-center">
      <div class="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0 z-10"></div>
      
      <div class="absolute bottom-16 sm:bottom-20 inset-x-0 z-20 text-center px-4 max-w-3xl mx-auto space-y-2.5">
        <span class="text-[10px] sm:text-xs uppercase tracking-[0.25em] ${gender === 'Men' ? 'text-[#38BDF8]' : 'text-[#C59B27]'} font-bold block drop-shadow-sm">
          ${s.badge}
        </span>
        <h1 class="font-heading text-2xl sm:text-5xl font-semibold tracking-tight text-white uppercase drop-shadow-md">
          ${s.title}
        </h1>
        <p class="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto font-sans">
          ${s.desc}
        </p>
      </div>
    </div>
  `).join('');

  showSlide(0);
}

function renderAccordPills(gender) {
  const accordContainer = document.getElementById('accord-pills-container');
  if (!accordContainer) return;

  let accords = [
    { id: 'All', label: gender === 'Men' ? '⚡ All Beast Mode' : (gender === 'Women' ? '🌸 All Femme Blends' : '✨ All Accords') },
    { id: 'Kashmiri Gulab & Rose', label: '🌸 Kashmiri Gulab & Rose' },
    { id: 'Royal Dehn Al Oud', label: '🪵 Royal Dehn Al Oud' },
    { id: 'Warm Vanilla & Kesar', label: '🍦 Warm Vanilla & Kesar' },
    { id: 'Mysore Sandal & Woods', label: '🌲 Mysore Sandal & Woods' },
    { id: 'Fresh Citrus & Monsoon Aqua', label: '🍋 Fresh Aqua & Citrus' }
  ];

  if (gender === 'Men') {
    accords = [
      { id: 'All', label: '⚡ All Powerhouse' },
      { id: 'Royal Dehn Al Oud', label: '🪵 Royal Dehn Al Oud' },
      { id: 'Mysore Sandal & Woods', label: '🌲 Mysore Sandal & Birch' },
      { id: 'Fresh Citrus & Monsoon Aqua', label: '🌊 Monsoon Aqua Beast' },
      { id: 'Warm Vanilla & Kesar', label: '🔥 Smoky Vanilla & Spices' }
    ];
  } else if (gender === 'Women') {
    accords = [
      { id: 'All', label: '🌸 All Floral Luxe' },
      { id: 'Kashmiri Gulab & Rose', label: '🌸 Kashmiri Gulab & Rose' },
      { id: 'Warm Vanilla & Kesar', label: '🍦 Warm Vanilla Gourmand' },
      { id: 'Mysore Sandal & Woods', label: '🌲 Sandalwood & Florals' },
      { id: 'Fresh Citrus & Monsoon Aqua', label: '🍋 Fresh Citrus Petals' }
    ];
  }

  accordContainer.innerHTML = accords.map(a => `
    <button 
      onclick="filterAccord('${a.id}')" 
      data-accord="${a.id}" 
      class="accord-filter-btn snap-start px-3.5 py-1.5 rounded-full text-[11px] ${a.id === 'All' ? 'font-bold bg-[#231B17] text-white shadow-sm' : 'font-medium theme-card'} transition-all shrink-0"
    >
      ${a.label}
    </button>
  `).join('');
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const countBadge = document.getElementById('results-count-badge');
  if (!grid) return;

  const catalog = getActiveCatalog();

  const filteredProducts = catalog.filter(item => {
    const matchesSearch = !catalogState.searchQuery || 
      item.name.toLowerCase().includes(catalogState.searchQuery) ||
      item.brand.toLowerCase().includes(catalogState.searchQuery) ||
      item.notes.toLowerCase().includes(catalogState.searchQuery) ||
      item.accord.toLowerCase().includes(catalogState.searchQuery);

    const matchesGender = catalogState.gender === 'All' || item.gender === catalogState.gender || item.gender === 'Unisex';
    const matchesAccord = catalogState.accord === 'All' || item.accord === catalogState.accord;

    return matchesSearch && matchesGender && matchesAccord;
  });

  if (countBadge) {
    countBadge.innerText = `Showing ${filteredProducts.length} Fragrance${filteredProducts.length !== 1 ? 's' : ''}`;
  }

  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center theme-card rounded-2xl p-6 border shadow-xs">
        <i class="fa-solid fa-spray-can text-2xl text-[#A67642]/40 mb-2 block"></i>
        <h3 class="font-heading text-sm font-semibold theme-text-main">No Fragrances Found</h3>
        <p class="text-xs text-gray-500 mt-1 max-w-xs mx-auto">No perfumes match your current filters. Try resetting filters.</p>
        <button onclick="resetAllFilters()" class="px-5 py-2 rounded-xl text-xs font-semibold bg-[#231B17] text-white hover:bg-[#A67642] transition-colors mt-3">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredProducts.map(item => {
    const isOutOfStock = item.inStock === false;

    return `
    <div class="group theme-card theme-glow-hover rounded-2xl p-2.5 sm:p-4 flex flex-col justify-between border shadow-xs hover:shadow-xl transition-all duration-300 relative ${isOutOfStock ? 'opacity-75' : ''}">
      
      <div>
        <div class="relative h-44 sm:h-56 w-full mb-3 overflow-hidden rounded-xl bg-black/10 flex items-center justify-center cursor-pointer" onclick="openQuickViewModal('${item.id}')">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=60';" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          >
          
          <span class="absolute top-2 right-2 bg-black/80 text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded border border-gray-700 font-semibold uppercase tracking-wider shadow-xs">
            ${isOutOfStock ? 'Sold Out' : (item.badge || 'Original')}
          </span>
        </div>

        <span class="text-[9px] sm:text-[10px] font-bold text-[#A67642] uppercase tracking-widest block mb-0.5">
          ${item.brand}
        </span>

        <h3 onclick="openQuickViewModal('${item.id}')" class="font-heading text-xs sm:text-base font-semibold theme-text-main group-hover:text-[#A67642] transition-colors cursor-pointer uppercase line-clamp-1">
          ${item.name}
        </h3>

        <p class="text-[10px] sm:text-xs text-gray-400 mt-0.5 line-clamp-1">
          ${item.notes}
        </p>
      </div>

      <div class="pt-3 border-t theme-border mt-3 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-[9px] text-gray-500 uppercase block font-sans">Price (INR)</span>
          <span class="font-heading text-xs sm:text-sm font-extrabold theme-text-main">${formatRupees(item.price)}</span>
        </div>

        <div class="grid grid-cols-2 gap-1.5">
          <button 
            onclick="addToCart('${item.id}', event)" 
            ${isOutOfStock ? 'disabled' : ''}
            class="${isOutOfStock ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#18110E] hover:bg-[#A67642] border border-[#C59B27]/40'} text-white py-1.5 rounded-xl text-[10px] sm:text-[11px] font-bold flex items-center justify-center gap-1 transition-all"
            title="Add to Cart"
          >
            <i class="fa-solid fa-cart-plus text-xs"></i>
            <span>Add Cart</span>
          </button>

          <button 
            onclick="handleWhatsAppReservation('${item.id}')" 
            ${isOutOfStock ? 'disabled' : ''}
            class="${isOutOfStock ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#16a34a] hover:bg-[#15803d]'} text-white py-1.5 rounded-xl text-[10px] sm:text-[11px] font-bold flex items-center justify-center gap-1 transition-all"
            title="Reserve on WhatsApp"
          >
            <i class="fa-brands fa-whatsapp text-xs"></i>
            <span>Reserve</span>
          </button>
        </div>
      </div>

    </div>
  `}).join('');
}

function openQuickViewModal(productId) {
  const catalog = getActiveCatalog();
  const item = catalog.find(p => p.id === productId);
  if (!item) return;

  const modal = document.getElementById('product-modal');
  const content = document.getElementById('modal-product-content');
  if (!modal || !content) return;

  const isOutOfStock = item.inStock === false;

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
      <div class="h-56 sm:h-64 rounded-xl overflow-hidden border border-gray-700 bg-black/20">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=60';" class="w-full h-full object-cover">
      </div>

      <div class="space-y-3 text-left">
        <div>
          <span class="text-[10px] font-bold text-[#A67642] uppercase tracking-widest">${item.brand} &bull; ${item.gender}</span>
          <h2 class="font-heading text-xl sm:text-2xl font-semibold theme-text-main mt-0.5">${item.name}</h2>
          <span class="inline-block mt-1 bg-black/20 text-[#A67642] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-gray-700">${item.accord}</span>
        </div>

        <p class="text-xs text-gray-400 leading-relaxed">
          100% Genuine batch verified. Tested and curated for long-lasting sillage in Indian climate conditions. Available for direct store pickup with free tester spray.
        </p>

        <div class="theme-card p-2.5 rounded-xl border text-[11px] space-y-1">
          <div><strong class="text-[#A67642]">Fragrance Notes:</strong> ${item.notes}</div>
          <div class="text-[10px] text-gray-400 pt-1 flex items-center gap-2">
            <span><i class="fa-solid fa-shield-check text-[#16a34a]"></i> 100% Authentic</span>
            <span>&bull;</span>
            <span><i class="fa-solid fa-store text-[#A67642]"></i> Store Pickup</span>
            <span>&bull;</span>
            <span><i class="fa-solid fa-qrcode text-white"></i> UPI Accepted</span>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2">
          <div>
            <span class="text-[9px] text-gray-500 uppercase block font-sans">Boutique Price</span>
            <span class="font-heading text-xl font-extrabold theme-text-main">${formatRupees(item.price)}</span>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="addToCart('${item.id}'); closeProductModal();" ${isOutOfStock ? 'disabled' : ''} class="bg-[#18110E] hover:bg-[#A67642] border border-[#C59B27]/50 text-white px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase flex items-center gap-1.5">
              <i class="fa-solid fa-cart-plus"></i>
              <span>Add Cart</span>
            </button>
            <button onclick="handleWhatsAppReservation('${item.id}'); closeProductModal();" ${isOutOfStock ? 'disabled' : ''} class="${isOutOfStock ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#16a34a] hover:bg-[#15803d]'} text-white px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase flex items-center gap-1.5">
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>Reserve</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('product-modal')?.classList.add('hidden');
}

function renderWizard() {
  const wizardContainer = document.getElementById('wizard-inputs-container');
  if (!wizardContainer) return;

  const isMen = catalogState.gender === 'Men';
  const isWomen = catalogState.gender === 'Women';

  const occasions = isMen ? [
    '💪 Gym & Alpha Daily', '💼 Boardroom & Executive', '🏍️ Night Out & Clubbing', '💍 Grand Weddings'
  ] : (isWomen ? [
    '💍 Royal Weddings & Sangeet', '🏢 Daily Office & College', '☕ Cafe Dates & Casuals', '✨ Festive Celebrations'
  ] : [
    '💍 Indian Weddings & Sangeet', '🏢 Daily Office & College', '🌙 Evening Parties', '☕ Dates & Festivals'
  ]);

  const vibes = isMen ? [
    '⚡ Stark Smoky Woods', '🪵 Royal Oud & Leather', '🌊 Monsoon Aquatic Fresh', '🔥 Spiced Amber'
  ] : (isWomen ? [
    '🌸 Kashmiri Rose Petals', '🍦 Warm Kesar Vanilla', '🍓 Sweet Gourmand Berries', '🌲 Mysore Sandal'
  ] : [
    '🪵 Royal Oud & Spices', '🌸 Kashmiri Rose', '🍋 Fresh Aqua', '🍦 Kesar Vanilla', '🌲 Mysore Sandal'
  ]);

  wizardState.occasion = occasions[0];
  wizardState.vibe = vibes[0];
  wizardState.gender = isMen ? 'Men' : (isWomen ? 'Women' : 'Unisex');

  wizardContainer.innerHTML = `
    <!-- Step 1: Occasion -->
    <div>
      <label class="text-[11px] font-bold ${isMen ? 'text-[#38BDF8]' : 'text-[#A67642]'} uppercase tracking-wider block mb-2">1. Select Occasion</label>
      <div class="flex flex-wrap gap-2 text-xs">
        ${occasions.map((occ, idx) => `
          <button onclick="setWizardOption('occasion', '${occ}', this)" class="wizard-btn px-3 py-1.5 rounded-full ${idx === 0 ? 'bg-[#231B17] text-white font-bold' : 'theme-card font-medium'} transition-all">
            ${occ}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Step 2: Vibe/Notes -->
    <div>
      <label class="text-[11px] font-bold ${isMen ? 'text-[#38BDF8]' : 'text-[#A67642]'} uppercase tracking-wider block mb-2">2. Fragrance Vibe & Accord</label>
      <div class="flex flex-wrap gap-2 text-xs">
        ${vibes.map((vb, idx) => `
          <button onclick="setWizardOption('vibe', '${vb}', this)" class="wizard-btn px-3 py-1.5 rounded-full ${idx === 0 ? 'bg-[#231B17] text-white font-bold' : 'theme-card font-medium'} transition-all">
            ${vb}
          </button>
        `).join('')}
      </div>
    </div>
  `;

  renderWizardResult();
}

function setWizardOption(category, value, btnElement) {
  wizardState[category] = value;

  if (btnElement && btnElement.parentElement) {
    btnElement.parentElement.querySelectorAll('.wizard-btn').forEach(b => {
      b.className = 'wizard-btn px-3 py-1.5 rounded-full theme-card font-medium transition-all';
    });
    btnElement.className = 'wizard-btn px-3.5 py-1.5 rounded-full bg-[#231B17] text-white font-bold shadow-sm transition-all';
  }

  renderWizardResult();
}

function renderWizardResult() {
  const resultBox = document.getElementById('wizard-result-box');
  if (!resultBox) return;

  const catalog = getActiveCatalog();
  const currentGender = catalogState.gender;

  let match = catalog.find(p => {
    const matchesGender = currentGender === 'All' || p.gender === currentGender || p.gender === 'Unisex';
    const vibeFirstWord = wizardState.vibe.split(' ')[1] ? wizardState.vibe.split(' ')[1].toLowerCase() : '';
    const matchesVibe = vibeFirstWord && (p.accord.toLowerCase().includes(vibeFirstWord) || p.notes.toLowerCase().includes(vibeFirstWord));
    return matchesGender && matchesVibe;
  });

  if (!match) {
    match = catalog.find(p => currentGender === 'All' || p.gender === currentGender) || catalog[0];
  }

  resultBox.innerHTML = `
    <div class="theme-card p-3.5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
      <div class="flex items-center gap-3 w-full sm:w-auto">
        <img src="${match.image}" alt="${match.name}" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=60';" class="w-14 h-14 rounded-xl object-cover border border-gray-700 shrink-0">
        <div>
          <span class="text-[9px] font-bold text-[#A67642] uppercase tracking-widest block">${match.brand} &bull; ${match.accord}</span>
          <h4 class="font-heading text-sm font-semibold theme-text-main uppercase">${match.name}</h4>
          <span class="text-xs font-extrabold theme-text-main block mt-0.5">${formatRupees(match.price)} <span class="text-[10px] font-normal text-gray-500">(Store Pickup)</span></span>
        </div>
      </div>

      <div class="flex items-center gap-2 w-full sm:w-auto">
        <button onclick="addToCart('${match.id}')" class="bg-[#18110E] hover:bg-[#A67642] border border-[#C59B27]/50 text-white px-3.5 py-2.5 rounded-xl text-[11px] font-bold uppercase flex items-center justify-center gap-1 transition-all">
          <i class="fa-solid fa-cart-plus"></i> Add
        </button>
        <button onclick="handleWhatsAppReservation('${match.id}')" class="bg-[#16a34a] hover:bg-[#15803d] text-white px-4 py-2.5 rounded-xl text-[11px] font-semibold uppercase flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-xs">
          <i class="fa-brands fa-whatsapp text-sm"></i>
          <span>Reserve Match &rarr;</span>
        </button>
      </div>
    </div>
  `;
}

function handleWhatsAppReservation(perfumeId) {
  const catalog = getActiveCatalog();
  const item = catalog.find(p => p.id === perfumeId);
  if (!item) return;

  recordReservationLead({
    name: item.name,
    brand: item.brand,
    price: item.price
  });

  const number = getWhatsAppNumber();
  const message = `Namaste Perfume Shope! I would like to reserve '${item.name}' by ${item.brand} (${formatRupees(item.price)}) for store pickup at your Pune boutique.`;
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
  showToast(`Opening WhatsApp to reserve ${item.name}...`, 'success');
}

function recordReservationLead(item) {
  try {
    let leads = [];
    const saved = localStorage.getItem('perfumes_reservations');
    if (saved) leads = JSON.parse(saved);

    const newLead = {
      id: 'res-' + Date.now().toString().slice(-6),
      perfumeName: item.name,
      brand: item.brand,
      price: item.price,
      timestamp: new Date().toISOString(),
      status: 'Pending'
    };

    leads.unshift(newLead);
    localStorage.setItem('perfumes_reservations', JSON.stringify(leads));
  } catch (e) {}
}

function scrollToCatalog() {
  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToCheckoutSection() {
  document.getElementById('cart-drawer-panel')?.scrollIntoView({ behavior: 'smooth' });
}

function handleSearch(event) {
  catalogState.searchQuery = event.target.value.trim().toLowerCase();
  renderProducts();
}

function filterGender(gender) {
  switchGenderTheme(gender, true);
  scrollToCatalog();
}

function filterAccord(accord) {
  catalogState.accord = accord;
  renderProducts();
  scrollToCatalog();
}

function resetAllFilters() {
  catalogState = { searchQuery: '', gender: catalogState.gender, accord: 'All', brand: 'All' };
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';
  filterAccord('All');
}

function initHeroSlider() {
  const sliderContainer = document.getElementById('hero');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
      if (slideInterval) clearInterval(slideInterval);
    });
    sliderContainer.addEventListener('mouseleave', startSlideTimer);
    sliderContainer.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    sliderContainer.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleTouchSwipe(); }, { passive: true });
  }
  startSlideTimer();
}

function startSlideTimer() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
}

function showSlide(index) {
  const slides = document.querySelectorAll('#hero .hero-slide');
  const dots = document.querySelectorAll('#slider-dots .slider-dot');
  if (!slides || slides.length === 0) return;

  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, idx) => {
    if (idx === currentSlide) {
      slide.className = 'hero-slide active-slide absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out opacity-100 pointer-events-auto z-10';
    } else {
      slide.className = 'hero-slide absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none z-0';
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === currentSlide) dot.className = 'slider-dot active-dot';
    else dot.className = 'slider-dot';
  });
}

function nextSlide() { showSlide(currentSlide + 1); startSlideTimer(); }
function prevSlide() { showSlide(currentSlide - 1); startSlideTimer(); }
function goToSlide(index) { showSlide(index); startSlideTimer(); }

function handleTouchSwipe() {
  if (touchEndX < touchStartX - 40) nextSlide();
  else if (touchEndX > touchStartX + 40) prevSlide();
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu')?.classList.toggle('hidden');
}

function focusSearch() {
  scrollToCatalog();
  document.getElementById('catalog-search-input')?.focus();
}

function handleMobileSearch(e) {
  const query = e.target.value;
  const catalogInput = document.getElementById('catalog-search-input');
  if (catalogInput) {
    catalogInput.value = query;
    handleSearch({ target: { value: query } });
  }
}

function showToast(message, type = 'info') {
  let toast = document.getElementById('perfume-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'perfume-toast';
    toast.className = 'fixed bottom-20 right-4 z-50 bg-[#18110E] text-white border border-[#C59B27]/50 px-4 py-2.5 rounded-xl text-xs shadow-xl flex items-center gap-2 transition-all duration-300 transform translate-y-10 opacity-0';
    document.body.appendChild(toast);
  }

  const icon = type === 'success' ? 'fa-circle-check text-[#16a34a]' : 'fa-circle-info text-[#C59B27]';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
  toast.classList.remove('translate-y-10', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3000);
}
