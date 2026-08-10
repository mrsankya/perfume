/* ==========================================================================
   PERFUME SHOPE - SUPER ADMIN MASTER CONTROL ENGINE (OWNER LEVEL)
   ========================================================================== */

const SUPER_ADMIN_PASSWORDS = ['superadmin', '9822725265'];

const DEFAULT_STAFF_ACCOUNTS = [
  {
    id: 'staff-1',
    name: 'Boutique Manager',
    role: 'Store Manager',
    email: 'manager@perfumeshope.in',
    pin: 'admin',
    status: 'Active',
    created: '2026-01-15'
  },
  {
    id: 'staff-2',
    name: 'Inventory Associate',
    role: 'Inventory Staff',
    email: 'inventory@perfumeshope.in',
    pin: '9822725265',
    status: 'Active',
    created: '2026-02-01'
  }
];

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

const DEFAULT_STORE_SETTINGS = {
  storeName: 'PERFUME SHOPE',
  tagline: 'Haute Parfumerie & Luxury Attars • India',
  whatsappNumber: '919579453006',
  supportPhone: '+91 95794 53006 / +91 98227 25265',
  supportEmail: 'contact@perfumeshope.in',
  storeAddress: 'Shop No. 4, Ground Floor, Royal Heritage Galleria, FC Road, Pune, Maharashtra - 411004, India',
  storeHours: 'Mon - Sun: 10:30 AM - 10:00 PM (IST)',
  upiVpa: 'perfumeshope@upi',
  gstNumber: '27AABCP9822F1Z4',
  announcementText: '100% Authentic Original Batches • Same-Day Store Pickup • WhatsApp Booking in INR (₹)',
  announcementActive: true,
  maintenanceMode: false
};

// Global State
let products = [];
let reservations = [];
let staffList = [];
let settings = {};
let auditLogs = [];
let currentTab = 'analytics';
let editingProductId = null;
let editingStaffId = null;

function formatRupees(amount) {
  return `₹${Number(amount || 0).toLocaleString('en-IN')}`;
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  loadSuperAdminData();
  checkSuperAdminAuth();
});

function loadSuperAdminData() {
  // Products
  const savedProducts = localStorage.getItem('perfumes_catalog');
  if (savedProducts) {
    try { products = JSON.parse(savedProducts); } catch (e) { products = [...DEFAULT_PRODUCTS]; }
  } else {
    products = [...DEFAULT_PRODUCTS];
    localStorage.setItem('perfumes_catalog', JSON.stringify(products));
  }

  // Reservations
  const savedReservations = localStorage.getItem('perfumes_reservations');
  if (savedReservations) {
    try { reservations = JSON.parse(savedReservations); } catch (e) { reservations = []; }
  } else {
    reservations = [
      {
        id: 'res-101',
        perfumeName: "KHAMRAH D'OR",
        brand: 'Lattafa',
        price: 2899,
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
        status: 'Confirmed'
      },
      {
        id: 'res-102',
        perfumeName: 'OUD SUPRÊME',
        brand: 'Rasasi',
        price: 3499,
        timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
        status: 'Pending'
      },
      {
        id: 'res-103',
        perfumeName: 'DELINA EXCLUSIF',
        brand: 'Parfums de Marly',
        price: 8499,
        timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
        status: 'Picked Up'
      }
    ];
    localStorage.setItem('perfumes_reservations', JSON.stringify(reservations));
  }

  // Staff
  const savedStaff = localStorage.getItem('perfumes_staff');
  if (savedStaff) {
    try { staffList = JSON.parse(savedStaff); } catch (e) { staffList = [...DEFAULT_STAFF_ACCOUNTS]; }
  } else {
    staffList = [...DEFAULT_STAFF_ACCOUNTS];
    localStorage.setItem('perfumes_staff', JSON.stringify(staffList));
  }

  // Settings
  const savedSettings = localStorage.getItem('perfumes_settings');
  if (savedSettings) {
    try { settings = { ...DEFAULT_STORE_SETTINGS, ...JSON.parse(savedSettings) }; } catch (e) { settings = { ...DEFAULT_STORE_SETTINGS }; }
  } else {
    settings = { ...DEFAULT_STORE_SETTINGS };
    localStorage.setItem('perfumes_settings', JSON.stringify(settings));
  }

  // Audit Logs
  const savedLogs = localStorage.getItem('perfumes_audit_logs');
  if (savedLogs) {
    try { auditLogs = JSON.parse(savedLogs); } catch (e) { auditLogs = []; }
  } else {
    auditLogs = [
      { id: 'log-1', action: 'System Initialized', user: 'System', time: new Date().toISOString() },
      { id: 'log-2', action: 'Super Admin Login', user: 'Super Admin', time: new Date().toISOString() }
    ];
    localStorage.setItem('perfumes_audit_logs', JSON.stringify(auditLogs));
  }
}

function recordAudit(action) {
  const log = {
    id: 'log-' + Date.now().toString().slice(-5),
    action: action,
    user: 'Super Admin (Owner)',
    time: new Date().toISOString()
  };
  auditLogs.unshift(log);
  if (auditLogs.length > 50) auditLogs.pop();
  localStorage.setItem('perfumes_audit_logs', JSON.stringify(auditLogs));
}

// Authentication
function checkSuperAdminAuth() {
  const isAuth = sessionStorage.getItem('perfume_superadmin_auth') === 'true';
  const loginCard = document.getElementById('superadmin-login-view');
  const dashboardCard = document.getElementById('superadmin-dashboard-view');

  if (isAuth) {
    loginCard.classList.add('hidden');
    dashboardCard.classList.remove('hidden');
    renderSuperAdminDashboard();
  } else {
    loginCard.classList.remove('hidden');
    dashboardCard.classList.add('hidden');
  }
}

function handleSuperAdminLogin(e) {
  e.preventDefault();
  const passInput = document.getElementById('superadmin-password');
  const errorMsg = document.getElementById('superadmin-login-error');
  const enteredPass = passInput.value.trim();

  const customSuperPass = localStorage.getItem('perfume_superadmin_password');
  const validPasses = customSuperPass ? [customSuperPass, ...SUPER_ADMIN_PASSWORDS] : SUPER_ADMIN_PASSWORDS;

  if (validPasses.includes(enteredPass)) {
    sessionStorage.setItem('perfume_superadmin_auth', 'true');
    errorMsg.classList.add('hidden');
    passInput.value = '';
    recordAudit('Super Admin Access Granted');
    checkSuperAdminAuth();
    showToast('Authenticated as Super Admin (Owner)', 'success');
  } else {
    errorMsg.classList.remove('hidden');
    passInput.focus();
  }
}

function handleSuperAdminLogout() {
  recordAudit('Super Admin Logged Out');
  sessionStorage.removeItem('perfume_superadmin_auth');
  checkSuperAdminAuth();
  showToast('Super Admin Logged Out');
}

// Tabs
function switchSuperTab(tabId) {
  currentTab = tabId;
  document.querySelectorAll('.super-tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.className = 'super-tab-btn px-4 py-2.5 rounded-xl font-bold text-xs bg-[#C59B27] text-[#18110E] shadow-sm flex items-center gap-2 transition-all';
    } else {
      btn.className = 'super-tab-btn px-4 py-2.5 rounded-xl font-semibold text-xs bg-[#231B17] text-gray-300 border border-gray-700 hover:border-[#C59B27] hover:text-white flex items-center gap-2 transition-all';
    }
  });

  document.querySelectorAll('.super-tab-content').forEach(content => {
    if (content.id === `super-tab-${tabId}`) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });

  if (tabId === 'analytics') renderAnalytics();
  if (tabId === 'inventory') renderMasterInventory();
  if (tabId === 'staff') renderStaffList();
  if (tabId === 'reservations') renderSuperReservations();
  if (tabId === 'settings') renderSuperSettings();
  if (tabId === 'backup') renderBackupView();
  if (tabId === 'audit') renderAuditLogs();
}

// 1. Analytics & Financial Intelligence
function renderAnalytics() {
  const totalValuation = products.reduce((sum, p) => sum + (Number(p.price) || 0), 0);
  const potentialRevenue = reservations.reduce((sum, r) => sum + (Number(r.price) || 0), 0);
  const confirmedCount = reservations.filter(r => r.status === 'Confirmed' || r.status === 'Picked Up').length;
  const avgPrice = products.length > 0 ? Math.round(totalValuation / products.length) : 0;

  document.getElementById('an-valuation').innerText = formatRupees(totalValuation);
  document.getElementById('an-pipeline').innerText = formatRupees(potentialRevenue);
  document.getElementById('an-avg-price').innerText = formatRupees(avgPrice);
  document.getElementById('an-conversion').innerText = reservations.length > 0 ? `${Math.round((confirmedCount / reservations.length) * 100)}%` : '0%';

  // Brand Breakdown
  const brandMap = {};
  products.forEach(p => {
    brandMap[p.brand] = (brandMap[p.brand] || 0) + (Number(p.price) || 0);
  });

  const brandBreakdownEl = document.getElementById('brand-breakdown-list');
  if (brandBreakdownEl) {
    brandBreakdownEl.innerHTML = Object.entries(brandMap)
      .sort((a, b) => b[1] - a[1])
      .map(([brand, val]) => `
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-[#18110E] border border-gray-800 text-xs">
          <span class="font-bold text-white uppercase">${brand}</span>
          <span class="font-bold text-[#C59B27]">${formatRupees(val)}</span>
        </div>
      `).join('');
  }

  // Accord Breakdown
  const accordMap = {};
  products.forEach(p => {
    accordMap[p.accord] = (accordMap[p.accord] || 0) + 1;
  });

  const accordBreakdownEl = document.getElementById('accord-breakdown-list');
  if (accordBreakdownEl) {
    accordBreakdownEl.innerHTML = Object.entries(accordMap)
      .sort((a, b) => b[1] - a[1])
      .map(([accord, count]) => `
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-[#18110E] border border-gray-800 text-xs">
          <span class="font-medium text-gray-300">${accord}</span>
          <span class="px-2 py-0.5 rounded-full bg-[#C59B27]/20 text-[#C59B27] font-bold text-[10px]">${count} Fragrances</span>
        </div>
      `).join('');
  }
}

function renderSuperAdminDashboard() {
  switchSuperTab(currentTab);
}

// 2. Master Inventory & Bulk Pricing
function renderMasterInventory() {
  const tbody = document.getElementById('master-inventory-tbody');
  if (!tbody) return;

  tbody.innerHTML = products.map(item => `
    <tr class="border-b border-gray-800 hover:bg-[#231B17]/60 transition-colors text-xs text-gray-300">
      <td class="py-3 px-3">
        <div class="flex items-center gap-2.5">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&auto=format&fit=crop&q=60';" class="w-10 h-10 rounded-lg object-cover border border-gray-700">
          <div>
            <span class="font-heading font-bold text-white block uppercase">${item.name}</span>
            <span class="text-[10px] text-gray-500">${item.brand}</span>
          </div>
        </div>
      </td>
      <td class="py-3 px-3">${item.accord}</td>
      <td class="py-3 px-3">${item.gender}</td>
      <td class="py-3 px-3 font-bold text-[#C59B27] text-sm">${formatRupees(item.price)}</td>
      <td class="py-3 px-3">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${item.inStock !== false ? 'bg-green-950 text-green-300 border border-green-700' : 'bg-red-950 text-red-300 border border-red-700'}">
          ${item.inStock !== false ? 'In Stock' : 'Out of Stock'}
        </span>
      </td>
      <td class="py-3 px-3 text-right space-x-1.5 whitespace-nowrap">
        <button onclick="openSuperProductModal('${item.id}')" class="p-1.5 rounded-lg bg-gray-800 text-blue-400 hover:bg-gray-700 transition-colors">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button onclick="deleteSuperProduct('${item.id}')" class="p-1.5 rounded-lg bg-gray-800 text-red-400 hover:bg-gray-700 transition-colors">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function applyBulkDiscount(percentage) {
  if (confirm(`Apply ${percentage}% price change across all products in catalog?`)) {
    products = products.map(p => {
      const newPrice = Math.round(p.price * (1 - percentage / 100));
      return { ...p, price: Math.max(newPrice, 499) };
    });
    localStorage.setItem('perfumes_catalog', JSON.stringify(products));
    recordAudit(`Applied bulk ${percentage}% discount across catalog`);
    renderMasterInventory();
    renderAnalytics();
    showToast(`Bulk ${percentage}% discount applied!`, 'success');
  }
}

function openSuperProductModal(id = null) {
  editingProductId = id;
  const modal = document.getElementById('super-product-modal');
  const title = document.getElementById('super-modal-title');
  const form = document.getElementById('super-product-form');

  if (id) {
    title.innerText = 'Edit Fragrance (Master)';
    const item = products.find(p => p.id === id);
    if (item) {
      document.getElementById('sp-name').value = item.name;
      document.getElementById('sp-brand').value = item.brand;
      document.getElementById('sp-price').value = item.price;
      document.getElementById('sp-gender').value = item.gender;
      document.getElementById('sp-accord').value = item.accord;
      document.getElementById('sp-badge').value = item.badge || 'Bestseller';
      document.getElementById('sp-notes').value = item.notes;
      document.getElementById('sp-image').value = item.image;
      document.getElementById('sp-stock').checked = item.inStock !== false;
    }
  } else {
    title.innerText = 'Add New Luxury Fragrance';
    form.reset();
    document.getElementById('sp-stock').checked = true;
    document.getElementById('sp-badge').value = 'New Arrival';
  }

  modal.classList.remove('hidden');
}

function closeSuperProductModal() {
  document.getElementById('super-product-modal').classList.add('hidden');
  editingProductId = null;
}

function handleSuperProductSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('sp-name').value.trim().toUpperCase();
  const brand = document.getElementById('sp-brand').value.trim();
  const price = Number(document.getElementById('sp-price').value);
  const gender = document.getElementById('sp-gender').value;
  const accord = document.getElementById('sp-accord').value;
  const badge = document.getElementById('sp-badge').value.trim();
  const notes = document.getElementById('sp-notes').value.trim();
  const image = document.getElementById('sp-image').value.trim() || 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80';
  const inStock = document.getElementById('sp-stock').checked;

  if (editingProductId) {
    const idx = products.findIndex(p => p.id === editingProductId);
    if (idx !== -1) {
      products[idx] = { ...products[idx], name, brand, price, gender, accord, badge, notes, image, inStock };
      recordAudit(`Updated product '${name}'`);
      showToast(`Updated '${name}'`, 'success');
    }
  } else {
    const newId = 'p' + Date.now();
    products.unshift({ id: newId, name, brand, price, gender, accord, badge, notes, image, inStock });
    recordAudit(`Added product '${name}'`);
    showToast(`Added '${name}'`, 'success');
  }

  localStorage.setItem('perfumes_catalog', JSON.stringify(products));
  closeSuperProductModal();
  renderMasterInventory();
  renderAnalytics();
}

function deleteSuperProduct(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;

  if (confirm(`Super Admin Action: Permanently delete '${item.name}'?`)) {
    products = products.filter(p => p.id !== id);
    localStorage.setItem('perfumes_catalog', JSON.stringify(products));
    recordAudit(`Deleted product '${item.name}'`);
    renderMasterInventory();
    renderAnalytics();
    showToast(`Deleted '${item.name}'`);
  }
}

// 3. Staff & Admin Management
function renderStaffList() {
  const tbody = document.getElementById('staff-table-tbody');
  if (!tbody) return;

  tbody.innerHTML = staffList.map(s => `
    <tr class="border-b border-gray-800 hover:bg-[#231B17]/60 text-xs text-gray-300">
      <td class="py-3 px-3 font-bold text-white">${s.name}</td>
      <td class="py-3 px-3 text-[#C59B27] font-semibold">${s.role}</td>
      <td class="py-3 px-3 text-gray-400">${s.email}</td>
      <td class="py-3 px-3 font-mono text-[11px] text-gray-300">••••</td>
      <td class="py-3 px-3">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-950 text-green-300 border border-green-800">
          ${s.status}
        </span>
      </td>
      <td class="py-3 px-3 text-right space-x-1 whitespace-nowrap">
        <button onclick="openStaffModal('${s.id}')" class="p-1.5 rounded-lg bg-gray-800 text-blue-400 hover:bg-gray-700" title="Edit Staff">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button onclick="deleteStaff('${s.id}')" class="p-1.5 rounded-lg bg-gray-800 text-red-400 hover:bg-gray-700" title="Revoke Access">
          <i class="fa-solid fa-user-xmark"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function openStaffModal(id = null) {
  editingStaffId = id;
  const modal = document.getElementById('staff-modal');
  const title = document.getElementById('staff-modal-title');
  const form = document.getElementById('staff-form');

  if (id) {
    title.innerText = 'Edit Staff Admin Account';
    const staff = staffList.find(s => s.id === id);
    if (staff) {
      document.getElementById('st-name').value = staff.name;
      document.getElementById('st-role').value = staff.role;
      document.getElementById('st-email').value = staff.email;
      document.getElementById('st-pin').value = staff.pin;
    }
  } else {
    title.innerText = 'Add New Admin / Staff Member';
    form.reset();
  }

  modal.classList.remove('hidden');
}

function closeStaffModal() {
  document.getElementById('staff-modal').classList.add('hidden');
  editingStaffId = null;
}

function handleStaffSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('st-name').value.trim();
  const role = document.getElementById('st-role').value;
  const email = document.getElementById('st-email').value.trim();
  const pin = document.getElementById('st-pin').value.trim();

  if (editingStaffId) {
    const idx = staffList.findIndex(s => s.id === editingStaffId);
    if (idx !== -1) {
      staffList[idx] = { ...staffList[idx], name, role, email, pin };
      recordAudit(`Updated staff account '${name}'`);
      showToast(`Updated staff account '${name}'`, 'success');
    }
  } else {
    const newStaff = {
      id: 'staff-' + Date.now(),
      name,
      role,
      email,
      pin,
      status: 'Active',
      created: new Date().toISOString().slice(0, 10)
    };
    staffList.push(newStaff);
    recordAudit(`Created staff account '${name}'`);
    showToast(`Staff account created for '${name}'`, 'success');
  }

  localStorage.setItem('perfumes_staff', JSON.stringify(staffList));
  closeStaffModal();
  renderStaffList();
}

function deleteStaff(id) {
  const staff = staffList.find(s => s.id === id);
  if (!staff) return;

  if (confirm(`Revoke admin access for '${staff.name}'?`)) {
    staffList = staffList.filter(s => s.id !== id);
    localStorage.setItem('perfumes_staff', JSON.stringify(staffList));
    recordAudit(`Revoked access for '${staff.name}'`);
    renderStaffList();
    showToast(`Revoked access for ${staff.name}`);
  }
}

// 4. Reservations / Leads
function renderSuperReservations() {
  const tbody = document.getElementById('super-reservations-tbody');
  if (!tbody) return;

  tbody.innerHTML = reservations.map(r => `
    <tr class="border-b border-gray-800 hover:bg-[#231B17]/60 text-xs text-gray-300">
      <td class="py-3 px-3 font-mono font-bold text-gray-400">${r.id}</td>
      <td class="py-3 px-3">
        <span class="font-bold text-white uppercase block">${r.perfumeName}</span>
        <span class="text-[10px] text-gray-500">${r.brand}</span>
      </td>
      <td class="py-3 px-3 font-bold text-[#C59B27]">${formatRupees(r.price)}</td>
      <td class="py-3 px-3 text-gray-400 text-[11px]">${new Date(r.timestamp).toLocaleString('en-IN')}</td>
      <td class="py-3 px-3">
        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${r.status === 'Confirmed' ? 'bg-blue-950 text-blue-300 border border-blue-800' : (r.status === 'Picked Up' ? 'bg-green-950 text-green-300 border border-green-800' : 'bg-yellow-950 text-yellow-300 border border-yellow-800')}">
          ${r.status}
        </span>
      </td>
    </tr>
  `).join('');
}

// 5. Store Settings
function renderSuperSettings() {
  document.getElementById('su-store-name').value = settings.storeName || '';
  document.getElementById('su-tagline').value = settings.tagline || '';
  document.getElementById('su-whatsapp').value = settings.whatsappNumber || '';
  document.getElementById('su-upi').value = settings.upiVpa || '';
  document.getElementById('su-gst').value = settings.gstNumber || '';
  document.getElementById('su-phone').value = settings.supportPhone || '';
  document.getElementById('su-email').value = settings.supportEmail || '';
  document.getElementById('su-address').value = settings.storeAddress || '';
  document.getElementById('su-hours').value = settings.storeHours || '';
  document.getElementById('su-announcement').value = settings.announcementText || '';
  document.getElementById('su-announcement-active').checked = settings.announcementActive !== false;
  document.getElementById('su-maintenance').checked = settings.maintenanceMode === true;
}

function handleSuperSettingsSubmit(e) {
  e.preventDefault();

  settings.storeName = document.getElementById('su-store-name').value.trim();
  settings.tagline = document.getElementById('su-tagline').value.trim();
  settings.whatsappNumber = document.getElementById('su-whatsapp').value.trim();
  settings.upiVpa = document.getElementById('su-upi').value.trim();
  settings.gstNumber = document.getElementById('su-gst').value.trim();
  settings.supportPhone = document.getElementById('su-phone').value.trim();
  settings.supportEmail = document.getElementById('su-email').value.trim();
  settings.storeAddress = document.getElementById('su-address').value.trim();
  settings.storeHours = document.getElementById('su-hours').value.trim();
  settings.announcementText = document.getElementById('su-announcement').value.trim();
  settings.announcementActive = document.getElementById('su-announcement-active').checked;
  settings.maintenanceMode = document.getElementById('su-maintenance').checked;

  const newSuperPass = document.getElementById('su-new-password').value.trim();
  if (newSuperPass) {
    localStorage.setItem('perfume_superadmin_password', newSuperPass);
    document.getElementById('su-new-password').value = '';
    recordAudit('Super Admin Master Password Updated');
  }

  localStorage.setItem('perfumes_settings', JSON.stringify(settings));
  recordAudit('Master Store Settings Updated');
  showToast('Master Store Settings Saved Successfully', 'success');
}

// 6. Backup, Export & Restore
function renderBackupView() {
  document.getElementById('backup-summary-stats').innerText = `Catalog: ${products.length} Items | Leads: ${reservations.length} | Staff Accounts: ${staffList.length}`;
}

function exportFullDatabaseJSON() {
  const dbSnapshot = {
    version: '2.0-superadmin',
    exportedAt: new Date().toISOString(),
    store: settings.storeName,
    products: products,
    reservations: reservations,
    staff: staffList,
    settings: settings,
    auditLogs: auditLogs
  };

  const jsonStr = JSON.stringify(dbSnapshot, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `perfume_shope_backup_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  recordAudit('Full Database Backup Exported');
  showToast('Database backup downloaded successfully', 'success');
}

function handleImportDatabaseJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.products && Array.isArray(data.products)) {
        products = data.products;
        localStorage.setItem('perfumes_catalog', JSON.stringify(products));
      }
      if (data.reservations && Array.isArray(data.reservations)) {
        reservations = data.reservations;
        localStorage.setItem('perfumes_reservations', JSON.stringify(reservations));
      }
      if (data.staff && Array.isArray(data.staff)) {
        staffList = data.staff;
        localStorage.setItem('perfumes_staff', JSON.stringify(staffList));
      }
      if (data.settings) {
        settings = data.settings;
        localStorage.setItem('perfumes_settings', JSON.stringify(settings));
      }

      recordAudit('Full Database Restored from Backup File');
      renderSuperAdminDashboard();
      showToast('Database successfully restored from backup!', 'success');
    } catch (err) {
      alert('Error parsing JSON backup file. Please ensure it is a valid database export.');
    }
  };
  reader.readAsText(file);
}

function hardResetStore() {
  if (confirm('CRITICAL ACTION: Reset entire store database to original factory defaults? All custom products, staff, and leads will be reset.')) {
    products = [...DEFAULT_PRODUCTS];
    reservations = [];
    staffList = [...DEFAULT_STAFF_ACCOUNTS];
    settings = { ...DEFAULT_STORE_SETTINGS };

    localStorage.setItem('perfumes_catalog', JSON.stringify(products));
    localStorage.setItem('perfumes_reservations', JSON.stringify(reservations));
    localStorage.setItem('perfumes_staff', JSON.stringify(staffList));
    localStorage.setItem('perfumes_settings', JSON.stringify(settings));

    recordAudit('Hard Factory Reset Executed');
    renderSuperAdminDashboard();
    showToast('Store factory reset complete', 'success');
  }
}

// 7. Audit Logs
function renderAuditLogs() {
  const tbody = document.getElementById('audit-table-tbody');
  if (!tbody) return;

  tbody.innerHTML = auditLogs.map(l => `
    <tr class="border-b border-gray-800 text-xs text-gray-300">
      <td class="py-2.5 px-3 font-mono text-gray-500 text-[11px]">${l.id}</td>
      <td class="py-2.5 px-3 font-semibold text-white">${l.action}</td>
      <td class="py-2.5 px-3 text-[#C59B27]">${l.user}</td>
      <td class="py-2.5 px-3 text-gray-400 text-[11px]">${new Date(l.time).toLocaleString('en-IN')}</td>
    </tr>
  `).join('');
}

// Toast
function showToast(message, type = 'info') {
  let toast = document.getElementById('super-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'super-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-[#231B17] text-white border border-[#C59B27]/50 px-4 py-3 rounded-xl text-xs shadow-2xl flex items-center gap-2 transition-all duration-300 transform translate-y-10 opacity-0';
    document.body.appendChild(toast);
  }

  const icon = type === 'success' ? 'fa-circle-check text-[#16a34a]' : 'fa-circle-info text-[#C59B27]';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
  toast.classList.remove('translate-y-10', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3000);
}
