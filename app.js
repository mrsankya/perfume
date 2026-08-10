/* ==========================================================================
   PERFUME SHOPE - INDIA'S LUXURY PARFUMERIE & ATTAR BOUTIQUE ENGINE
   ========================================================================== */

const PERFUMES_DATABASE = [
  {
    id: 'p1',
    name: "KHAMRAH D'OR",
    brand: 'Lattafa',
    price: 2899,
    gender: 'Unisex',
    accord: 'Warm Vanilla & Kesar',
    notes: 'Kashmiri Kesar, Cinnamon, Sweet Dates, Praline, Amber Vanilla',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80',
    badge: 'Bestseller 🇮🇳'
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
    badge: 'Top Pick'
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
    badge: 'Trending'
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
    badge: 'Viral Hit'
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
    badge: 'Beast Mode'
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
    badge: 'Royal Blend'
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
    badge: 'Haute Extrait'
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
    badge: 'All-Season'
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
    badge: 'Artisanal'
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
    badge: 'Gourmand'
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
    badge: 'Luxury Niche'
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
    badge: 'Masterpiece'
  }
];

const WHATSAPP_PHONE_NUMBER = '919579453006';

function formatRupees(amount) {
  return `₹${Number(amount).toLocaleString('en-IN')}`;
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
let isLowBandwidth = false;

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('lowBandwidth') === 'true') {
    enableLowBandwidth(true);
  }
  renderProducts();
  initHeroSlider();
  renderWizardResult();
  window.addEventListener('scroll', updateDockActiveState, { passive: true });
});

/**
 * INTERACTIVE "FIND YOUR SCENT" WIZARD SELECTION LOGIC
 */
function setWizardOption(category, value, btnElement) {
  wizardState[category] = value;

  if (btnElement && btnElement.parentElement) {
    btnElement.parentElement.querySelectorAll('.wizard-btn').forEach(b => {
      b.className = 'wizard-btn px-3 py-1.5 rounded-full border border-[#EBE2D7] bg-[#FAF5EE] text-[#231B17] font-medium hover:border-[#A67642] transition-all';
    });
    btnElement.className = 'wizard-btn px-3.5 py-1.5 rounded-full border border-[#231B17] bg-[#231B17] text-[#FAF5EE] font-semibold shadow-xs transition-all ring-1 ring-[#A67642]/50';
  }

  renderWizardResult();
}

function renderWizardResult() {
  const resultBox = document.getElementById('wizard-result-box');
  if (!resultBox) return;

  let match = PERFUMES_DATABASE.find(p => {
    const matchesGender = wizardState.gender === 'Unisex' || p.gender === wizardState.gender || p.gender === 'Unisex';
    const vibeFirstWord = wizardState.vibe.split(' ')[0].toLowerCase();
    const matchesVibe = p.accord.toLowerCase().includes(vibeFirstWord) || p.notes.toLowerCase().includes(vibeFirstWord);
    return matchesGender && matchesVibe;
  });

  if (!match) {
    match = PERFUMES_DATABASE.find(p => p.gender === wizardState.gender) || PERFUMES_DATABASE[0];
  }

  const waUrl = generateWhatsAppUrl(match.name, match.brand, match.price);

  resultBox.innerHTML = `
    <div class="bg-[#FAF5EE] p-3.5 rounded-2xl border border-[#EBE2D7] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
      <div class="flex items-center gap-3 w-full sm:w-auto">
        <img src="${match.image}" alt="${match.name}" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=60';" class="w-14 h-14 rounded-xl object-cover border border-[#EBE2D7] shrink-0">
        <div>
          <span class="text-[9px] font-bold text-[#A67642] uppercase tracking-widest block">${match.brand} &bull; ${match.accord}</span>
          <h4 class="font-heading text-sm font-semibold text-[#231B17] uppercase">${match.name}</h4>
          <span class="text-xs font-extrabold text-[#231B17] block mt-0.5">${formatRupees(match.price)} <span class="text-[10px] font-normal text-gray-500">(Store Pickup)</span></span>
        </div>
      </div>

      <a href="${waUrl}" target="_blank" class="w-full sm:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white px-4 py-2.5 rounded-xl text-[11px] font-semibold uppercase flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-xs">
        <i class="fa-brands fa-whatsapp text-sm"></i>
        <span>Reserve Match &rarr;</span>
      </a>
    </div>
  `;
}

/**
 * HERO CAROUSEL SLIDER ENGINE (SINGLE VIEWPORT CONTAINER)
 */
function initHeroSlider() {
  const slides = document.querySelectorAll('#hero .hero-slide');
  if (!slides || slides.length === 0) return;

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

  showSlide(0);
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
  catalogState.gender = gender;
  
  const genderButtons = document.querySelectorAll('.gender-filter-btn');
  genderButtons.forEach(btn => {
    if (btn.dataset.gender === gender) {
      btn.className = 'gender-filter-btn px-2 sm:px-3 py-1 rounded-full font-semibold bg-[#231B17] text-white shadow-xs transition-all';
    } else {
      btn.className = 'gender-filter-btn px-2 sm:px-3 py-1 rounded-full font-semibold bg-white text-[#231B17] border border-[#EBE2D7] hover:border-[#A67642] hover:text-[#A67642] transition-all';
    }
  });

  renderProducts();
}

function filterAccord(accord) {
  catalogState.accord = accord;

  const accordButtons = document.querySelectorAll('.accord-filter-btn');
  accordButtons.forEach(btn => {
    if (btn.dataset.accord === accord) {
      btn.className = 'accord-filter-btn snap-start px-3.5 py-1.5 rounded-full text-[11px] font-semibold bg-[#231B17] text-white shadow-xs transition-all shrink-0';
    } else {
      btn.className = 'accord-filter-btn snap-start px-3.5 py-1.5 rounded-full text-[11px] font-medium bg-white border border-[#EBE2D7] text-[#231B17] hover:border-[#A67642] hover:text-[#A67642] transition-all shrink-0 shadow-xs';
    }
  });

  renderProducts();
  scrollToCatalog();
}

function resetAllFilters() {
  catalogState = { searchQuery: '', gender: 'All', accord: 'All', brand: 'All' };
  
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';

  filterGender('All');
  filterAccord('All');
}

function scrollToCatalog() {
  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
}

function generateWhatsAppUrl(perfumeName, brand, price) {
  const message = `Namaste Perfume Shope! I would like to reserve '${perfumeName}' by ${brand} (${formatRupees(price)}) for store pickup at your boutique. Please confirm availability and share store location.`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

function handleWhatsAppReservation(perfumeId) {
  const item = PERFUMES_DATABASE.find(p => p.id === perfumeId);
  if (!item) return;

  const waUrl = generateWhatsAppUrl(item.name, item.brand, item.price);
  window.open(waUrl, '_blank');
  showToast(`Reserving ${item.name} (${formatRupees(item.price)}) on WhatsApp...`);
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const countBadge = document.getElementById('results-count-badge');
  if (!grid) return;

  const filteredProducts = PERFUMES_DATABASE.filter(item => {
    const matchesSearch = !catalogState.searchQuery || 
      item.name.toLowerCase().includes(catalogState.searchQuery) ||
      item.brand.toLowerCase().includes(catalogState.searchQuery) ||
      item.notes.toLowerCase().includes(catalogState.searchQuery) ||
      item.accord.toLowerCase().includes(catalogState.searchQuery);

    const matchesGender = catalogState.gender === 'All' || item.gender === catalogState.gender;
    const matchesAccord = catalogState.accord === 'All' || item.accord === catalogState.accord;

    return matchesSearch && matchesGender && matchesAccord;
  });

  if (countBadge) {
    countBadge.innerText = `Showing ${filteredProducts.length} Fragrance${filteredProducts.length !== 1 ? 's' : ''}`;
  }

  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white rounded-2xl p-6 border border-[#EBE2D7] shadow-xs">
        <i class="fa-solid fa-spray-can text-2xl text-[#A67642]/40 mb-2 block"></i>
        <h3 class="font-heading text-sm font-semibold text-[#231B17]">No Fragrances Found</h3>
        <p class="text-xs text-gray-500 mt-1 max-w-xs mx-auto">No perfumes match your current filters. Try clearing your search.</p>
        <button onclick="resetAllFilters()" class="px-5 py-2 rounded-xl text-xs font-semibold bg-[#231B17] text-white hover:bg-[#A67642] transition-colors mt-3">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredProducts.map(item => `
    <div class="group bg-white rounded-2xl p-2.5 sm:p-4 flex flex-col justify-between border border-[#EBE2D7] hover:border-[#A67642] shadow-xs hover:shadow-md transition-all duration-300 relative">
      
      <div>
        <div class="relative h-44 sm:h-56 w-full mb-3 overflow-hidden rounded-xl bg-[#FAF5EE] flex items-center justify-center cursor-pointer" onclick="openQuickViewModal('${item.id}')">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=60';" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          >
          
          <span class="absolute top-2 right-2 bg-white/95 text-[#231B17] text-[9px] sm:text-[10px] px-2 py-0.5 rounded border border-[#EBE2D7] font-semibold uppercase tracking-wider shadow-xs">
            ${item.badge}
          </span>
        </div>

        <span class="text-[9px] sm:text-[10px] font-bold text-[#A67642] uppercase tracking-widest block mb-0.5">
          ${item.brand}
        </span>

        <h3 onclick="openQuickViewModal('${item.id}')" class="font-heading text-xs sm:text-base font-semibold text-[#231B17] group-hover:text-[#A67642] transition-colors cursor-pointer uppercase line-clamp-1">
          ${item.name}
        </h3>

        <p class="text-[10px] sm:text-xs text-gray-500 mt-0.5 line-clamp-1">
          ${item.notes}
        </p>
      </div>

      <div class="pt-3 border-t border-[#EBE2D7] mt-3 flex items-center justify-between gap-1">
        <div>
          <span class="text-[9px] text-gray-400 uppercase block font-sans">Price (INR)</span>
          <span class="font-heading text-xs sm:text-sm font-extrabold text-[#231B17]">${formatRupees(item.price)}</span>
        </div>

        <button 
          onclick="handleWhatsAppReservation('${item.id}')" 
          class="bg-[#16a34a] hover:bg-[#15803d] text-white px-2.5 sm:px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
          title="Reserve on WhatsApp"
        >
          <i class="fa-brands fa-whatsapp text-xs sm:text-sm"></i>
          <span>Reserve</span>
        </button>
      </div>

    </div>
  `).join('');
}

function openQuickViewModal(productId) {
  const item = PERFUMES_DATABASE.find(p => p.id === productId);
  if (!item) return;

  const modal = document.getElementById('product-modal');
  const content = document.getElementById('modal-product-content');
  if (!modal || !content) return;

  const waUrl = generateWhatsAppUrl(item.name, item.brand, item.price);

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
      <div class="h-56 sm:h-64 rounded-xl overflow-hidden border border-[#EBE2D7] bg-[#FAF5EE]">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=60';" class="w-full h-full object-cover">
      </div>

      <div class="space-y-3 text-left">
        <div>
          <span class="text-[10px] font-bold text-[#A67642] uppercase tracking-widest">${item.brand} &bull; ${item.gender}</span>
          <h2 class="font-heading text-xl sm:text-2xl font-semibold text-[#231B17] mt-0.5">${item.name}</h2>
          <span class="inline-block mt-1 bg-[#FAF5EE] text-[#A67642] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#EBE2D7]">${item.accord}</span>
        </div>

        <p class="text-xs text-gray-600 leading-relaxed">
          100% Genuine batch verified. Tested and curated for long-lasting sillage in Indian climate conditions. Available for direct store pickup with free tester spray.
        </p>

        <div class="bg-[#FAF5EE] p-2.5 rounded-xl border border-[#EBE2D7] text-[11px] space-y-1">
          <div><strong class="text-[#A67642]">Fragrance Notes:</strong> ${item.notes}</div>
          <div class="text-[10px] text-gray-500 pt-1 flex items-center gap-2">
            <span><i class="fa-solid fa-shield-check text-[#16a34a]"></i> 100% Authentic</span>
            <span>&bull;</span>
            <span><i class="fa-solid fa-store text-[#A67642]"></i> Physical Store Pickup</span>
            <span>&bull;</span>
            <span><i class="fa-solid fa-qrcode text-[#231B17]"></i> UPI Accepted</span>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2">
          <div>
            <span class="text-[9px] text-gray-400 uppercase block font-sans">Boutique Price</span>
            <span class="font-heading text-xl font-extrabold text-[#231B17]">${formatRupees(item.price)}</span>
          </div>

          <a href="${waUrl}" target="_blank" onclick="closeProductModal()" class="bg-[#16a34a] hover:bg-[#15803d] text-white px-4 py-2.5 rounded-xl text-xs font-semibold uppercase flex items-center gap-2 transition-colors shadow-xs">
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>Reserve via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('product-modal')?.classList.add('hidden');
}

function toggleLowBandwidth(forceState) {
  isLowBandwidth = forceState !== undefined ? forceState : !isLowBandwidth;
  localStorage.setItem('lowBandwidth', isLowBandwidth ? 'true' : 'false');

  const banner = document.getElementById('low-bandwidth-banner');
  if (isLowBandwidth) {
    document.body.classList.add('low-bandwidth');
    if (banner) banner.classList.remove('hidden');
    showToast('Data Saver Mode Active');
  } else {
    document.body.classList.remove('low-bandwidth');
    if (banner) banner.classList.add('hidden');
    showToast('High Resolution Mode Active');
  }
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
    toast.className = 'fixed bottom-20 right-4 z-50 bg-white border border-[#EBE2D7] text-[#231B17] px-3.5 py-2.5 rounded-xl text-xs shadow-lg flex items-center gap-2 transition-all duration-300 transform translate-y-10 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-[#A67642]"></i> ${message}`;
  toast.classList.remove('translate-y-10', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3000);
}
