/* ==========================================================================
   PERFUME SHOPE - ADMIN DASHBOARD & PROMOTIONAL CALLING ENGINE
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

let products = [];
let reservations = [];
let visitors = [];
let orders = [];
let settings = {};
let currentTab = 'inventory';
let editingProductId = null;

function formatRupees(amount) {
  return `₹${Number(amount || 0).toLocaleString('en-IN')}`;
}

document.addEventListener('DOMContentLoaded', () => {
  loadAdminData();
  checkAuth();
});

function loadAdminData() {
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
    reservations = [];
  }

  // Visitors & Promotional Calling Leads
  const savedVisitors = localStorage.getItem('perfumes_visitors');
  if (savedVisitors) {
    try { visitors = JSON.parse(savedVisitors); } catch (e) { visitors = []; }
  } else {
    visitors = [
      {
        id: 'lead-1',
        name: 'Sakshi Patil',
        phone: '+91 98227 25265',
        city: 'Pune',
        source: 'Google Sign-In',
        lastActive: new Date().toISOString(),
        callStatus: 'Promotional Call Pending'
      },
      {
        id: 'lead-2',
        name: 'Amit Deshmukh',
        phone: '+91 98901 23456',
        city: 'Mumbai',
        source: '₹500 Voucher Popup',
        lastActive: new Date(Date.now() - 3600000 * 3).toISOString(),
        callStatus: 'Called - Interested'
      }
    ];
    localStorage.setItem('perfumes_visitors', JSON.stringify(visitors));
  }

  // Orders
  const savedOrders = localStorage.getItem('perfumes_orders');
  if (savedOrders) {
    try { orders = JSON.parse(savedOrders); } catch (e) { orders = []; }
  } else {
    orders = [
      {
        id: 'ORD-IN-109281',
        timestamp: new Date().toISOString(),
        customer: 'Sakshi Patil',
        phone: '+91 98227 25265',
        items: [{ name: "KHAMRAH D'OR", price: 2899, qty: 1 }],
        total: 2399,
        paymentMethod: 'UPI (GPay)',
        address: 'FC Road Area, Pune, Maharashtra - 411004 (GPS: 18.5204, 73.8567)',
        status: 'Confirmed'
      }
    ];
    localStorage.setItem('perfumes_orders', JSON.stringify(orders));
  }

  // Settings
  const savedSettings = localStorage.getItem('perfumes_settings');
  if (savedSettings) {
    try { settings = { ...DEFAULT_STORE_SETTINGS, ...JSON.parse(savedSettings) }; } catch (e) { settings = { ...DEFAULT_STORE_SETTINGS }; }
  } else {
    settings = { ...DEFAULT_STORE_SETTINGS };
    localStorage.setItem('perfumes_settings', JSON.stringify(settings));
  }
}

// Authentication
function checkAuth() {
  const isAuth = sessionStorage.getItem('perfume_admin_logged_in') === 'true';
  const loginView = document.getElementById('login-view');
  const dashboardView = document.getElementById('dashboard-view');

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

  // Check Staff accounts
  let validStaffPins = [];
  try {
    const staff = JSON.parse(localStorage.getItem('perfumes_staff')) || [];
    validStaffPins = staff.map(s => s.pin);
  } catch (e) {}

  const customPass = localStorage.getItem('perfume_admin_password');
  const validPasses = customPass ? [customPass, ...DEFAULT_ADMIN_PASSWORDS, ...validStaffPins] : [...DEFAULT_ADMIN_PASSWORDS, ...validStaffPins];

  if (validPasses.includes(enteredPass)) {
    sessionStorage.setItem('perfume_admin_logged_in', 'true');
    errorMsg.classList.add('hidden');
    passwordInput.value = '';
    checkAuth();
    showToast('Authenticated Successfully', 'success');
  } else {
    errorMsg.classList.remove('hidden');
    passwordInput.focus();
  }
}

function handleLogout() {
  sessionStorage.removeItem('perfume_admin_logged_in');
  checkAuth();
  showToast('Logged Out');
}

// Tabs
function switchTab(tabId) {
  currentTab = tabId;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.className = 'tab-btn px-4 py-2 rounded-xl font-bold text-xs bg-[#C59B27] text-[#18110E] shadow-sm flex items-center gap-2 transition-all';
    } else {
      btn.className = 'tab-btn px-4 py-2 rounded-xl font-semibold text-xs bg-[#231B17] text-gray-300 border border-gray-700 hover:border-[#C59B27] hover:text-white flex items-center gap-2 transition-all';
    }
  });

  document.querySelectorAll('.tab-content').forEach(content => {
    if (content.id === `tab-${tabId}`) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });

  if (tabId === 'inventory') renderInventoryTable();
  if (tabId === 'visitors') renderVisitorsTable();
  if (tabId === 'orders') renderOrdersTable();
  if (tabId === 'reservations') renderReservationsTable();
  if (tabId === 'settings') renderSettingsForm();
}

function renderDashboard() {
  renderStatsRibbon();
  switchTab(currentTab);
}

function renderStatsRibbon() {
  const totalValuation = products.reduce((sum, p) => sum + (Number(p.price) || 0), 0);
  const totalOrdersVal = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);

  document.getElementById('stat-total-products').innerText = products.length;
  document.getElementById('stat-valuation').innerText = formatRupees(totalValuation);
  document.getElementById('stat-visitors-count').innerText = visitors.length;
  document.getElementById('stat-orders-count').innerText = `${orders.length} (${formatRupees(totalOrdersVal)})`;
}

// =========================================================================
// 1. INVENTORY CRUD
// =========================================================================
function renderInventoryTable() {
  const tbody = document.getElementById('inventory-table-tbody');
  if (!tbody) return;

  tbody.innerHTML = products.map(item => `
    <tr class="border-b border-gray-800 hover:bg-[#231B17]/60 text-xs text-gray-300">
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
      <td class="py-3 px-3 font-bold text-[#C59B27] text-sm">${formatRupees(item.price)}</td>
      <td class="py-3 px-3">
        <button onclick="toggleProductStock('${item.id}')" class="px-2 py-0.5 rounded-full text-[10px] font-bold ${item.inStock !== false ? 'bg-green-950 text-green-300 border border-green-700' : 'bg-red-950 text-red-300 border border-red-700'}">
          ${item.inStock !== false ? 'In Stock' : 'Out of Stock'}
        </button>
      </td>
      <td class="py-3 px-3 text-right space-x-1 whitespace-nowrap">
        <button onclick="openProductModal('${item.id}')" class="p-1.5 rounded-lg bg-gray-800 text-blue-400 hover:bg-gray-700">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button onclick="deleteProduct('${item.id}')" class="p-1.5 rounded-lg bg-gray-800 text-red-400 hover:bg-gray-700">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function toggleProductStock(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;
  item.inStock = item.inStock === false ? true : false;
  localStorage.setItem('perfumes_catalog', JSON.stringify(products));
  renderInventoryTable();
  showToast(`Stock updated for ${item.name}`);
}

function openProductModal(id = null) {
  editingProductId = id;
  const modal = document.getElementById('product-edit-modal');
  const title = document.getElementById('modal-title');
  const form = document.getElementById('product-edit-form');

  if (id) {
    title.innerText = 'Edit Fragrance';
    const item = products.find(p => p.id === id);
    if (item) {
      document.getElementById('inp-name').value = item.name;
      document.getElementById('inp-brand').value = item.brand;
      document.getElementById('inp-price').value = item.price;
      document.getElementById('inp-gender').value = item.gender;
      document.getElementById('inp-accord').value = item.accord;
      document.getElementById('inp-badge').value = item.badge || 'Bestseller';
      document.getElementById('inp-notes').value = item.notes;
      document.getElementById('inp-image').value = item.image;
      document.getElementById('inp-stock').checked = item.inStock !== false;
    }
  } else {
    title.innerText = 'Add New Fragrance';
    form.reset();
    document.getElementById('inp-stock').checked = true;
  }

  modal.classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('product-edit-modal').classList.add('hidden');
  editingProductId = null;
}

function handleProductSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('inp-name').value.trim().toUpperCase();
  const brand = document.getElementById('inp-brand').value.trim();
  const price = Number(document.getElementById('inp-price').value);
  const gender = document.getElementById('inp-gender').value;
  const accord = document.getElementById('inp-accord').value;
  const badge = document.getElementById('inp-badge').value.trim();
  const notes = document.getElementById('inp-notes').value.trim();
  const image = document.getElementById('inp-image').value.trim() || 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80';
  const inStock = document.getElementById('inp-stock').checked;

  if (editingProductId) {
    const idx = products.findIndex(p => p.id === editingProductId);
    if (idx !== -1) {
      products[idx] = { ...products[idx], name, brand, price, gender, accord, badge, notes, image, inStock };
      showToast(`Updated '${name}'`, 'success');
    }
  } else {
    const newId = 'p' + Date.now();
    products.unshift({ id: newId, name, brand, price, gender, accord, badge, notes, image, inStock });
    showToast(`Added '${name}'`, 'success');
  }

  localStorage.setItem('perfumes_catalog', JSON.stringify(products));
  closeProductModal();
  renderInventoryTable();
  renderStatsRibbon();
}

function deleteProduct(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;

  if (confirm(`Are you sure you want to delete '${item.name}'?`)) {
    products = products.filter(p => p.id !== id);
    localStorage.setItem('perfumes_catalog', JSON.stringify(products));
    renderInventoryTable();
    renderStatsRibbon();
    showToast(`Deleted '${item.name}'`);
  }
}

// =========================================================================
// 2. VISITOR LEADS & PROMOTIONAL CALLING LIST
// =========================================================================
function renderVisitorsTable() {
  const tbody = document.getElementById('visitors-table-tbody');
  if (!tbody) return;

  tbody.innerHTML = visitors.map(v => `
    <tr class="border-b border-gray-800 hover:bg-[#231B17]/60 text-xs text-gray-300">
      <td class="py-3 px-3">
        <span class="font-bold text-white block">${v.name}</span>
        <span class="text-[10px] text-gray-500">${v.city || 'Pune'}</span>
      </td>
      <td class="py-3 px-3 font-mono font-bold text-[#C59B27]">${v.phone}</td>
      <td class="py-3 px-3 text-gray-400">${v.source || 'Website Visit'}</td>
      <td class="py-3 px-3 text-gray-400 text-[11px]">${new Date(v.lastActive).toLocaleString('en-IN')}</td>
      <td class="py-3 px-3">
        <select onchange="updateVisitorCallStatus('${v.id}', this.value)" class="bg-[#120D0A] border border-gray-700 text-[11px] rounded-lg px-2 py-1 text-white focus:outline-none">
          <option value="New Lead" ${v.callStatus === 'New Lead' ? 'selected' : ''}>New Lead</option>
          <option value="Promotional Call Pending" ${v.callStatus === 'Promotional Call Pending' ? 'selected' : ''}>Call Pending</option>
          <option value="Called - Interested" ${v.callStatus === 'Called - Interested' ? 'selected' : ''}>Called - Interested</option>
          <option value="Order Placed" ${v.callStatus === 'Order Placed' ? 'selected' : ''}>Order Placed</option>
          <option value="Do Not Call" ${v.callStatus === 'Do Not Call' ? 'selected' : ''}>Do Not Call</option>
        </select>
      </td>
      <td class="py-3 px-3 text-right space-x-1.5 whitespace-nowrap">
        <a href="tel:${v.phone.replace(/[^0-9+]/g, '')}" class="p-1.5 rounded-lg bg-green-900 text-green-300 hover:bg-green-800 inline-block" title="Call Customer">
          <i class="fa-solid fa-phone"></i>
        </a>
        <button onclick="sendVisitorWhatsAppPromo('${v.name}', '${v.phone}')" class="p-1.5 rounded-lg bg-[#16a34a] text-white hover:bg-[#15803d]" title="Send WhatsApp Promo Offer">
          <i class="fa-brands fa-whatsapp"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function updateVisitorCallStatus(id, newStatus) {
  const item = visitors.find(v => v.id === id);
  if (!item) return;
  item.callStatus = newStatus;
  localStorage.setItem('perfumes_visitors', JSON.stringify(visitors));
  showToast(`Updated status for ${item.name}`);
}

function sendVisitorWhatsAppPromo(name, phone) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const msg = `Namaste ${name}! Thank you for visiting Perfume Shope. We have reserved an exclusive ₹500 discount coupon (Code: ROYAL500) + complimentary 5ml Attar Tester for you. Would you like us to help you pick your signature fragrance?`;
  window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function exportVisitorsCSV() {
  if (visitors.length === 0) {
    showToast('No visitor leads to export');
    return;
  }

  let csvContent = 'data:text/csv;charset=utf-8,Name,Phone,City,Source,LastActive,CallStatus\n';
  visitors.forEach(v => {
    csvContent += `"${v.name}","${v.phone}","${v.city || 'Pune'}","${v.source || 'Web'}","${v.lastActive}","${v.callStatus || 'New'}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `perfume_shope_promotional_calling_list_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Promotional Calling List Exported to CSV', 'success');
}

// =========================================================================
// 3. ORDERS & CART CHECKOUTS
// =========================================================================
function renderOrdersTable() {
  const tbody = document.getElementById('orders-table-tbody');
  if (!tbody) return;

  tbody.innerHTML = orders.map(o => `
    <tr class="border-b border-gray-800 hover:bg-[#231B17]/60 text-xs text-gray-300">
      <td class="py-3 px-3 font-mono font-bold text-[#C59B27]">${o.id}</td>
      <td class="py-3 px-3">
        <span class="font-bold text-white block">${o.customer}</span>
        <span class="text-[10px] text-gray-500 font-mono">${o.phone}</span>
      </td>
      <td class="py-3 px-3 text-[11px]">${o.items ? o.items.map(i => `${i.name} (x${i.qty})`).join(', ') : 'Perfume'}</td>
      <td class="py-3 px-3 font-bold text-white">${formatRupees(o.total)}</td>
      <td class="py-3 px-3 text-[10px] text-gray-400 max-w-xs truncate">${o.address}</td>
      <td class="py-3 px-3">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-950 text-green-300 border border-green-800">${o.paymentMethod || 'UPI'}</span>
      </td>
      <td class="py-3 px-3 text-right">
        <button onclick="confirmOrderWhatsApp('${o.id}', '${o.phone}', '${o.total}')" class="p-1.5 rounded-lg bg-[#16a34a] text-white hover:bg-[#15803d]" title="WhatsApp Dispatch Confirmation">
          <i class="fa-brands fa-whatsapp"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function confirmOrderWhatsApp(id, phone, total) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const msg = `Namaste! Your Perfume Shope order #${id} (₹${Number(total).toLocaleString('en-IN')}) is verified and being packed with genuine batch seal. Our courier / store concierge will update you shortly.`;
  window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// =========================================================================
// 4. RESERVATIONS & SETTINGS
// =========================================================================
function renderReservationsTable() {
  const tbody = document.getElementById('reservations-table-tbody');
  if (!tbody) return;

  tbody.innerHTML = reservations.map(r => `
    <tr class="border-b border-gray-800 hover:bg-[#231B17]/60 text-xs text-gray-300">
      <td class="py-3 px-3 font-mono text-gray-400 font-bold">${r.id}</td>
      <td class="py-3 px-3 font-bold text-white uppercase">${r.perfumeName}</td>
      <td class="py-3 px-3 font-bold text-[#C59B27]">${formatRupees(r.price)}</td>
      <td class="py-3 px-3 text-gray-400 text-[11px]">${new Date(r.timestamp).toLocaleString('en-IN')}</td>
      <td class="py-3 px-3">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${r.status === 'Confirmed' ? 'bg-blue-950 text-blue-300 border border-blue-800' : 'bg-yellow-950 text-yellow-300 border border-yellow-800'}">
          ${r.status}
        </span>
      </td>
    </tr>
  `).join('');
}

function renderSettingsForm() {
  document.getElementById('set-store-name').value = settings.storeName || '';
  document.getElementById('set-whatsapp').value = settings.whatsappNumber || '';
  document.getElementById('set-phone').value = settings.supportPhone || '';
  document.getElementById('set-email').value = settings.supportEmail || '';
  document.getElementById('set-address').value = settings.storeAddress || '';
  document.getElementById('set-announcement').value = settings.announcementText || '';
}

function handleSettingsSubmit(e) {
  e.preventDefault();
  settings.storeName = document.getElementById('set-store-name').value.trim();
  settings.whatsappNumber = document.getElementById('set-whatsapp').value.trim();
  settings.supportPhone = document.getElementById('set-phone').value.trim();
  settings.supportEmail = document.getElementById('set-email').value.trim();
  settings.storeAddress = document.getElementById('set-address').value.trim();
  settings.announcementText = document.getElementById('set-announcement').value.trim();

  const newPass = document.getElementById('set-new-password').value.trim();
  if (newPass) {
    localStorage.setItem('perfume_admin_password', newPass);
    document.getElementById('set-new-password').value = '';
  }

  localStorage.setItem('perfumes_settings', JSON.stringify(settings));
  showToast('Settings saved successfully', 'success');
}

function resetToDefaultProducts() {
  if (confirm('Reset catalog to the default 12 luxury Indian fragrances?')) {
    products = [...DEFAULT_PRODUCTS];
    localStorage.setItem('perfumes_catalog', JSON.stringify(products));
    renderInventoryTable();
    renderStatsRibbon();
    showToast('Catalog restored to default Indian luxury perfumes', 'success');
  }
}

function showToast(message, type = 'info') {
  let toast = document.getElementById('admin-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'admin-toast';
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
