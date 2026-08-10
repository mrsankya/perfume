/* ==========================================================================
   PERFUME SHOPE - ADMIN DASHBOARD & INVENTORY ENGINE
   ========================================================================== */

const DEFAULT_ADMIN_PASSWORDS = ['admin', '9822725265'];

const DEFAULT_STORE_SETTINGS = {
  storeName: 'PERFUME SHOPE',
  tagline: 'Haute Parfumerie & Luxury Attars • India',
  whatsappNumber: '919579453006',
  supportPhone: '+91 95794 53006 / +91 98227 25265',
  supportEmail: 'contact@perfumeshope.in',
  storeAddress: 'Shop No. 4, Ground Floor, Royal Heritage Galleria, FC Road, Pune, Maharashtra - 411004, India',
  storeHours: 'Mon - Sun: 10:30 AM - 10:00 PM (IST)',
  announcementText: '100% Authentic Original Batches • Same-Day Store Pickup • WhatsApp Booking in INR (₹)',
  announcementActive: true
};

const DEFAULT_PRODUCTS = [
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
    badge: 'Beast Mode',
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
    badge: 'Haute Extrait',
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
    badge: 'All-Season',
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
    badge: 'Gourmand',
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
    badge: 'Masterpiece',
    inStock: true
  }
];

// State
let products = [];
let reservations = [];
let settings = {};
let activeTab = 'inventory';
let editingProductId = null;
let searchQuery = '';
let filterAccord = 'All';

function formatRupees(amount) {
  return `₹${Number(amount || 0).toLocaleString('en-IN')}`;
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  checkAuth();
});

function loadData() {
  const savedProducts = localStorage.getItem('perfumes_catalog');
  if (savedProducts) {
    try {
      products = JSON.parse(savedProducts);
    } catch (e) {
      products = [...DEFAULT_PRODUCTS];
    }
  } else {
    products = [...DEFAULT_PRODUCTS];
    saveProducts();
  }

  const savedReservations = localStorage.getItem('perfumes_reservations');
  if (savedReservations) {
    try {
      reservations = JSON.parse(savedReservations);
    } catch (e) {
      reservations = [];
    }
  } else {
    reservations = [
      {
        id: 'res-1',
        perfumeName: "KHAMRAH D'OR",
        brand: 'Lattafa',
        price: 2899,
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
        status: 'Confirmed'
      },
      {
        id: 'res-2',
        perfumeName: 'OUD SUPRÊME',
        brand: 'Rasasi',
        price: 3499,
        timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
        status: 'Pending'
      }
    ];
    saveReservations();
  }

  const savedSettings = localStorage.getItem('perfumes_settings');
  if (savedSettings) {
    try {
      settings = { ...DEFAULT_STORE_SETTINGS, ...JSON.parse(savedSettings) };
    } catch (e) {
      settings = { ...DEFAULT_STORE_SETTINGS };
    }
  } else {
    settings = { ...DEFAULT_STORE_SETTINGS };
    saveSettings();
  }
}

function saveProducts() {
  localStorage.setItem('perfumes_catalog', JSON.stringify(products));
}

function saveReservations() {
  localStorage.setItem('perfumes_reservations', JSON.stringify(reservations));
}

function saveSettings() {
  localStorage.setItem('perfumes_settings', JSON.stringify(settings));
}

// Authentication
function checkAuth() {
  const isAuth = sessionStorage.getItem('perfume_admin_logged_in') === 'true';
  const loginView = document.getElementById('admin-login-view');
  const dashboardView = document.getElementById('admin-dashboard-view');

  if (isAuth) {
    loginView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
    renderDashboard();
  } else {
    loginView.classList.remove('hidden');
    dashboardView.classList.add('hidden');
  }
}

function handleLogin(e) {
  e.preventDefault();
  const passwordInput = document.getElementById('admin-password');
  const errorMsg = document.getElementById('login-error');
  const enteredPass = passwordInput.value.trim();

  const customPass = localStorage.getItem('perfume_admin_password');
  const validPasswords = customPass ? [customPass, ...DEFAULT_ADMIN_PASSWORDS] : DEFAULT_ADMIN_PASSWORDS;

  if (validPasswords.includes(enteredPass)) {
    sessionStorage.setItem('perfume_admin_logged_in', 'true');
    errorMsg.classList.add('hidden');
    passwordInput.value = '';
    checkAuth();
    showToast('Welcome to Perfume Shope Admin Portal', 'success');
  } else {
    errorMsg.classList.remove('hidden');
    passwordInput.focus();
  }
}

function handleLogout() {
  sessionStorage.removeItem('perfume_admin_logged_in');
  checkAuth();
  showToast('Logged out successfully');
}

// Tab Switching
function switchTab(tabId) {
  activeTab = tabId;
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.className = 'admin-tab-btn px-4 py-2.5 rounded-xl font-semibold text-xs bg-[#231B17] text-white shadow-xs flex items-center gap-2 transition-all';
    } else {
      btn.className = 'admin-tab-btn px-4 py-2.5 rounded-xl font-medium text-xs bg-white text-[#231B17] border border-[#EBE2D7] hover:border-[#A67642] hover:text-[#A67642] flex items-center gap-2 transition-all';
    }
  });

  document.querySelectorAll('.tab-content').forEach(content => {
    if (content.id === `tab-${tabId}`) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });

  if (tabId === 'inventory') renderInventory();
  if (tabId === 'reservations') renderReservations();
  if (tabId === 'settings') renderSettingsForm();
}

// Dashboard Overview Stats
function renderDashboard() {
  const totalFragrancesEl = document.getElementById('stat-total-fragrances');
  const totalValuationEl = document.getElementById('stat-total-valuation');
  const totalLeadsEl = document.getElementById('stat-total-leads');
  const totalBrandsEl = document.getElementById('stat-total-brands');

  if (totalFragrancesEl) totalFragrancesEl.innerText = products.length;

  const totalValuation = products.reduce((acc, curr) => acc + (Number(curr.price) || 0), 0);
  if (totalValuationEl) totalValuationEl.innerText = formatRupees(totalValuation);

  if (totalLeadsEl) totalLeadsEl.innerText = reservations.length;

  const uniqueBrands = new Set(products.map(p => p.brand));
  if (totalBrandsEl) totalBrandsEl.innerText = uniqueBrands.size;

  switchTab(activeTab);
}

// Inventory CRUD
function renderInventory() {
  const listEl = document.getElementById('inventory-table-body');
  if (!listEl) return;

  const filtered = products.filter(item => {
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery) ||
      item.brand.toLowerCase().includes(searchQuery) ||
      item.accord.toLowerCase().includes(searchQuery);

    const matchesAccord = filterAccord === 'All' || item.accord === filterAccord;
    return matchesSearch && matchesAccord;
  });

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <tr>
        <td colspan="7" class="text-center py-10 text-gray-500 text-xs">
          <i class="fa-solid fa-box-open text-2xl text-gray-300 mb-2 block"></i>
          No fragrances match your filters.
        </td>
      </tr>
    `;
    return;
  }

  listEl.innerHTML = filtered.map((item, idx) => `
    <tr class="border-b border-[#EBE2D7] hover:bg-[#FAF5EE]/50 transition-colors text-xs">
      <td class="py-3 px-3">
        <div class="flex items-center gap-3">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&auto=format&fit=crop&q=60';" class="w-11 h-11 rounded-lg object-cover border border-[#EBE2D7] shrink-0">
          <div>
            <div class="font-heading font-bold text-sm text-[#231B17] uppercase">${item.name}</div>
            <div class="text-[10px] text-gray-500 line-clamp-1">${item.notes}</div>
          </div>
        </div>
      </td>
      <td class="py-3 px-3 font-semibold text-[#A67642] uppercase text-[11px]">${item.brand}</td>
      <td class="py-3 px-3">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#FAF5EE] border border-[#EBE2D7] text-[#231B17]">
          ${item.accord}
        </span>
      </td>
      <td class="py-3 px-3">
        <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-700">
          ${item.gender}
        </span>
      </td>
      <td class="py-3 px-3 font-extrabold text-[#231B17] text-sm">
        ${formatRupees(item.price)}
      </td>
      <td class="py-3 px-3">
        <button onclick="toggleStockStatus('${item.id}')" class="cursor-pointer px-2.5 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${item.inStock !== false ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}">
          ${item.inStock !== false ? '✓ In Stock' : '✕ Out of Stock'}
        </button>
      </td>
      <td class="py-3 px-3 text-right space-x-1 whitespace-nowrap">
        <button onclick="openProductModal('${item.id}')" class="p-1.5 rounded-lg bg-white border border-[#EBE2D7] text-blue-600 hover:bg-blue-50 transition-colors" title="Edit Fragrance">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onclick="deleteProduct('${item.id}')" class="p-1.5 rounded-lg bg-white border border-[#EBE2D7] text-red-600 hover:bg-red-50 transition-colors" title="Delete Fragrance">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function handleInventorySearch(e) {
  searchQuery = e.target.value.trim().toLowerCase();
  renderInventory();
}

function handleAccordFilter(e) {
  filterAccord = e.target.value;
  renderInventory();
}

function toggleStockStatus(id) {
  const item = products.find(p => p.id === id);
  if (item) {
    item.inStock = item.inStock === false ? true : false;
    saveProducts();
    renderInventory();
    showToast(`${item.name} stock updated to ${item.inStock ? 'In Stock' : 'Out of Stock'}`);
  }
}

function openProductModal(id = null) {
  editingProductId = id;
  const modal = document.getElementById('product-edit-modal');
  const title = document.getElementById('modal-form-title');
  const form = document.getElementById('product-form');

  if (id) {
    title.innerText = 'Edit Fragrance Details';
    const item = products.find(p => p.id === id);
    if (item) {
      document.getElementById('form-name').value = item.name;
      document.getElementById('form-brand').value = item.brand;
      document.getElementById('form-price').value = item.price;
      document.getElementById('form-gender').value = item.gender;
      document.getElementById('form-accord').value = item.accord;
      document.getElementById('form-badge').value = item.badge || 'Bestseller';
      document.getElementById('form-notes').value = item.notes;
      document.getElementById('form-image').value = item.image;
      document.getElementById('form-stock').checked = item.inStock !== false;
      updateImagePreview(item.image);
    }
  } else {
    title.innerText = 'Add New Luxury Fragrance';
    form.reset();
    document.getElementById('form-stock').checked = true;
    document.getElementById('form-badge').value = 'New Arrival';
    updateImagePreview('');
  }

  modal.classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('product-edit-modal').classList.add('hidden');
  editingProductId = null;
}

function updateImagePreview(url) {
  const preview = document.getElementById('image-preview-img');
  if (url) {
    preview.src = url;
    preview.classList.remove('hidden');
  } else {
    preview.classList.add('hidden');
  }
}

function handleProductFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('form-name').value.trim().toUpperCase();
  const brand = document.getElementById('form-brand').value.trim();
  const price = Number(document.getElementById('form-price').value);
  const gender = document.getElementById('form-gender').value;
  const accord = document.getElementById('form-accord').value;
  const badge = document.getElementById('form-badge').value.trim();
  const notes = document.getElementById('form-notes').value.trim();
  const image = document.getElementById('form-image').value.trim() || 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80';
  const inStock = document.getElementById('form-stock').checked;

  if (editingProductId) {
    const idx = products.findIndex(p => p.id === editingProductId);
    if (idx !== -1) {
      products[idx] = {
        ...products[idx],
        name,
        brand,
        price,
        gender,
        accord,
        badge,
        notes,
        image,
        inStock
      };
      showToast(`Updated '${name}' successfully!`, 'success');
    }
  } else {
    const newId = 'p' + Date.now();
    products.unshift({
      id: newId,
      name,
      brand,
      price,
      gender,
      accord,
      badge,
      notes,
      image,
      inStock
    });
    showToast(`Added '${name}' to catalog!`, 'success');
  }

  saveProducts();
  closeProductModal();
  renderDashboard();
}

function deleteProduct(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;

  if (confirm(`Are you sure you want to delete '${item.name}' by ${item.brand}?`)) {
    products = products.filter(p => p.id !== id);
    saveProducts();
    renderDashboard();
    showToast(`Deleted '${item.name}' from catalog`);
  }
}

function resetCatalogToDefault() {
  if (confirm('Reset entire catalog to original 12 luxury perfumes? Custom changes will be restored to default.')) {
    products = [...DEFAULT_PRODUCTS];
    saveProducts();
    renderDashboard();
    showToast('Catalog restored to default Indian luxury collection', 'success');
  }
}

// Reservations / Leads Management
function renderReservations() {
  const listEl = document.getElementById('reservations-table-body');
  if (!listEl) return;

  if (reservations.length === 0) {
    listEl.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-10 text-gray-500 text-xs">
          <i class="fa-brands fa-whatsapp text-3xl text-[#16a34a]/40 mb-2 block"></i>
          No customer WhatsApp reservations recorded yet.
        </td>
      </tr>
    `;
    return;
  }

  listEl.innerHTML = reservations.map(res => {
    const dateStr = new Date(res.timestamp).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    let statusClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
    if (res.status === 'Confirmed') statusClass = 'bg-blue-100 text-blue-800 border-blue-300';
    if (res.status === 'Picked Up') statusClass = 'bg-green-100 text-green-800 border-green-300';
    if (res.status === 'Cancelled') statusClass = 'bg-gray-100 text-gray-600 border-gray-300';

    return `
      <tr class="border-b border-[#EBE2D7] hover:bg-[#FAF5EE]/50 transition-colors text-xs">
        <td class="py-3 px-3 font-semibold text-[#231B17] font-mono text-[11px]">${res.id}</td>
        <td class="py-3 px-3">
          <div class="font-bold text-[#231B17] uppercase">${res.perfumeName}</div>
          <div class="text-[10px] text-[#A67642] font-semibold">${res.brand}</div>
        </td>
        <td class="py-3 px-3 font-extrabold text-[#231B17]">${formatRupees(res.price)}</td>
        <td class="py-3 px-3 text-gray-500 text-[11px]">${dateStr}</td>
        <td class="py-3 px-3">
          <select onchange="updateReservationStatus('${res.id}', this.value)" class="text-[10px] font-bold uppercase rounded-lg px-2 py-1 border ${statusClass} cursor-pointer focus:outline-none">
            <option value="Pending" ${res.status === 'Pending' ? 'selected' : ''}>⏳ Pending</option>
            <option value="Confirmed" ${res.status === 'Confirmed' ? 'selected' : ''}>✓ Confirmed</option>
            <option value="Picked Up" ${res.status === 'Picked Up' ? 'selected' : ''}>🛍️ Picked Up</option>
            <option value="Cancelled" ${res.status === 'Cancelled' ? 'selected' : ''}>✕ Cancelled</option>
          </select>
        </td>
        <td class="py-3 px-3 text-right">
          <a href="https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent(`Hi, regarding your reservation for ${res.perfumeName} (${formatRupees(res.price)})...`)}" target="_blank" class="p-1.5 rounded-lg bg-[#16a34a] text-white hover:bg-[#15803d] text-[11px] px-2.5 py-1 inline-flex items-center gap-1 font-semibold transition-colors">
            <i class="fa-brands fa-whatsapp"></i> Chat
          </a>
        </td>
      </tr>
    `;
  }).join('');
}

function updateReservationStatus(id, newStatus) {
  const res = reservations.find(r => r.id === id);
  if (res) {
    res.status = newStatus;
    saveReservations();
    renderReservations();
    showToast(`Reservation #${id} marked as ${newStatus}`);
  }
}

function clearAllReservations() {
  if (confirm('Clear all reservation inquiry logs?')) {
    reservations = [];
    saveReservations();
    renderDashboard();
    showToast('Reservation logs cleared');
  }
}

function exportReservationsCSV() {
  if (reservations.length === 0) {
    alert('No reservations to export.');
    return;
  }

  let csv = 'Reservation ID,Perfume Name,Brand,Price (INR),Date & Time,Status\n';
  reservations.forEach(r => {
    csv += `"${r.id}","${r.perfumeName}","${r.brand}","${r.price}","${r.timestamp}","${r.status}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `perfume_shope_reservations_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Store Settings Form
function renderSettingsForm() {
  document.getElementById('set-store-name').value = settings.storeName || '';
  document.getElementById('set-tagline').value = settings.tagline || '';
  document.getElementById('set-whatsapp').value = settings.whatsappNumber || '';
  document.getElementById('set-phone').value = settings.supportPhone || '';
  document.getElementById('set-email').value = settings.supportEmail || '';
  document.getElementById('set-address').value = settings.storeAddress || '';
  document.getElementById('set-hours').value = settings.storeHours || '';
  document.getElementById('set-announcement').value = settings.announcementText || '';
  document.getElementById('set-announcement-active').checked = settings.announcementActive !== false;
}

function handleSettingsSubmit(e) {
  e.preventDefault();

  settings.storeName = document.getElementById('set-store-name').value.trim();
  settings.tagline = document.getElementById('set-tagline').value.trim();
  settings.whatsappNumber = document.getElementById('set-whatsapp').value.trim();
  settings.supportPhone = document.getElementById('set-phone').value.trim();
  settings.supportEmail = document.getElementById('set-email').value.trim();
  settings.storeAddress = document.getElementById('set-address').value.trim();
  settings.storeHours = document.getElementById('set-hours').value.trim();
  settings.announcementText = document.getElementById('set-announcement').value.trim();
  settings.announcementActive = document.getElementById('set-announcement-active').checked;

  const newPass = document.getElementById('set-admin-password').value.trim();
  if (newPass) {
    localStorage.setItem('perfume_admin_password', newPass);
    document.getElementById('set-admin-password').value = '';
  }

  saveSettings();
  showToast('Store settings saved successfully!', 'success');
}

// Toast Notifications
function showToast(message, type = 'info') {
  let toast = document.getElementById('admin-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'admin-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-[#18110E] text-white border border-[#C59B27]/40 px-4 py-3 rounded-xl text-xs shadow-2xl flex items-center gap-2 transition-all duration-300 transform translate-y-10 opacity-0';
    document.body.appendChild(toast);
  }

  const icon = type === 'success' ? 'fa-circle-check text-[#16a34a]' : 'fa-circle-info text-[#C59B27]';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
  toast.classList.remove('translate-y-10', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3000);
}
