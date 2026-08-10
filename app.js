/* ==========================================================================
   PERFUME SHOPE - DUAL-THEME ENGINE (WOMEN LUXE & MEN MARVEL TITANIUM)
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
      title: 'Long-Lasting Royal Wedding Silage',
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

function getActiveCatalog() {
  const saved = localStorage.getItem('perfumes_catalog');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {
      console.warn('Error reading perfumes_catalog, using defaults');
    }
  }
  localStorage.setItem('perfumes_catalog', JSON.stringify(PERFUMES_DEFAULT_DB));
  return PERFUMES_DEFAULT_DB;
}

function getStoreSettings() {
  const saved = localStorage.getItem('perfumes_settings');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {}
  }
  return {
    storeName: 'PERFUME SHOPE',
    tagline: 'Haute Parfumerie & Luxury Attars • India',
    whatsappNumber: '919579453006',
    announcementText: '100% Authentic Original Batches • Same-Day Store Pickup • WhatsApp Booking in INR (₹)',
    announcementActive: true
  };
}

function getWhatsAppNumber() {
  const settings = getStoreSettings();
  return settings.whatsappNumber || '919579453006';
}

function formatRupees(amount) {
  return `₹${Number(amount || 0).toLocaleString('en-IN')}`;
}

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

let currentSlide = 0;
let slideInterval = null;
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', () => {
  const savedGender = localStorage.getItem('perfume_selected_gender') || 'All';
  switchGenderTheme(savedGender, false);
  
  initHeroSlider();
  renderProducts();
  renderWizard();
  window.addEventListener('scroll', updateDockActiveState, { passive: true });
});

/**
 * DUAL THEME ENGINE (WOMEN LUXE vs MEN MARVEL TITANIUM)
 */
function switchGenderTheme(gender, triggerScroll = true) {
  catalogState.gender = gender;
  catalogState.accord = 'All';
  localStorage.setItem('perfume_selected_gender', gender);

  const body = document.body;
  const themeMode = gender.toLowerCase();
  body.setAttribute('data-theme', themeMode);

  // Update Navigation Gender Buttons
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

  // Update Theme Subtitle / Branding
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

  // Update Hero Slides for Theme
  renderHeroSlides(gender);
  renderAccordPills(gender);
  renderWizard();
  renderProducts();

  if (triggerScroll) {
    showToast(
      gender === 'Men' ? '⚡ Men\'s Marvel Titanium Beast-Mode Theme Activated' : 
      (gender === 'Women' ? '🌸 Women\'s Royal Rose Gold Theme Activated' : '👑 All Fragrances Collection Active')
    );
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

/**
 * INTERACTIVE "FIND YOUR SCENT" WIZARD
 */
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

      <button onclick="handleWhatsAppReservation('${match.id}')" class="w-full sm:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white px-4 py-2.5 rounded-xl text-[11px] font-semibold uppercase flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-xs">
        <i class="fa-brands fa-whatsapp text-sm"></i>
        <span>Reserve Match &rarr;</span>
      </button>
    </div>
  `;
}

/**
 * HERO CAROUSEL SLIDER ENGINE
 */
function initHeroSlider() {
  const sliderContainer = document.getElementById('hero');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
      if (slideInterval) clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
      startSlideTimer();
    });

    sliderContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleTouchSwipe();
    }, { passive: true });
  }

  startSlideTimer();
}

function startSlideTimer() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    nextSlide();
  }, 4000);
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
    if (idx === currentSlide) {
      dot.className = 'slider-dot active-dot';
    } else {
      dot.className = 'slider-dot';
    }
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
  startSlideTimer();
}

function prevSlide() {
  showSlide(currentSlide - 1);
  startSlideTimer();
}

function goToSlide(index) {
  showSlide(index);
  startSlideTimer();
}

function handleTouchSwipe() {
  const swipeThreshold = 40;
  if (touchEndX < touchStartX - swipeThreshold) {
    nextSlide();
  } else if (touchEndX > touchStartX + swipeThreshold) {
    prevSlide();
  }
}

/**
 * BOTTOM APP DOCK ACTIVE SCROLL HIGHLIGHT
 */
function updateDockActiveState() {
  const sections = ['hero', 'catalog', 'scent-experience', 'store-locator'];
  const dockLinks = document.querySelectorAll('.floating-app-dock .dock-nav-link');
  const scrollPos = window.scrollY + 200;

  sections.forEach((sectionId, idx) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        dockLinks.forEach(link => link.classList.remove('active'));
        if (dockLinks[idx]) dockLinks[idx].classList.add('active');
      }
    }
  });
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

  const accordButtons = document.querySelectorAll('.accord-filter-btn');
  accordButtons.forEach(btn => {
    if (btn.dataset.accord === accord) {
      btn.className = 'accord-filter-btn snap-start px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#231B17] text-white shadow-md shrink-0 transition-all';
    } else {
      btn.className = 'accord-filter-btn snap-start px-3.5 py-1.5 rounded-full text-[11px] font-medium theme-card shrink-0 transition-all';
    }
  });

  renderProducts();
  scrollToCatalog();
}

function resetAllFilters() {
  catalogState = { searchQuery: '', gender: catalogState.gender, accord: 'All', brand: 'All' };
  
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';

  filterAccord('All');
}

function scrollToCatalog() {
  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
}

function generateWhatsAppUrl(perfumeName, brand, price) {
  const number = getWhatsAppNumber();
  const message = `Namaste Perfume Shope! I would like to reserve '${perfumeName}' by ${brand} (${formatRupees(price)}) for store pickup at your boutique. Please confirm availability.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
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
  } catch (e) {
    console.error('Error logging reservation lead', e);
  }
}

function handleWhatsAppReservation(perfumeId) {
  const catalog = getActiveCatalog();
  const item = catalog.find(p => p.id === perfumeId);
  if (!item) return;

  recordReservationLead(item);

  const waUrl = generateWhatsAppUrl(item.name, item.brand, item.price);
  window.open(waUrl, '_blank');
  showToast(`Reserving ${item.name} (${formatRupees(item.price)}) on WhatsApp...`);
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

      <div class="pt-3 border-t theme-border mt-3 flex items-center justify-between gap-1">
        <div>
          <span class="text-[9px] text-gray-500 uppercase block font-sans">Price (INR)</span>
          <span class="font-heading text-xs sm:text-sm font-extrabold theme-text-main">${formatRupees(item.price)}</span>
        </div>

        <button 
          onclick="handleWhatsAppReservation('${item.id}')" 
          ${isOutOfStock ? 'disabled' : ''}
          class="${isOutOfStock ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#16a34a] hover:bg-[#15803d]'} text-white px-2.5 sm:px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
          title="Reserve on WhatsApp"
        >
          <i class="fa-brands fa-whatsapp text-xs sm:text-sm"></i>
          <span>${isOutOfStock ? 'Out of Stock' : 'Reserve'}</span>
        </button>
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

          <button onclick="handleWhatsAppReservation('${item.id}'); closeProductModal();" ${isOutOfStock ? 'disabled' : ''} class="${isOutOfStock ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#16a34a] hover:bg-[#15803d]'} text-white px-4 py-2.5 rounded-xl text-xs font-semibold uppercase flex items-center gap-2 transition-colors shadow-xs">
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>${isOutOfStock ? 'Sold Out' : 'Reserve via WhatsApp'}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('product-modal')?.classList.add('hidden');
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

function showToast(message) {
  let toast = document.getElementById('perfume-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'perfume-toast';
    toast.className = 'fixed bottom-20 right-4 z-50 bg-[#18110E] text-white border border-[#C59B27]/50 px-4 py-2.5 rounded-xl text-xs shadow-xl flex items-center gap-2 transition-all duration-300 transform translate-y-10 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-[#C59B27]"></i> ${message}`;
  toast.classList.remove('translate-y-10', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3000);
}
