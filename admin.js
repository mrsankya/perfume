/* ==========================================================================
   PERFUME SHOPE - ADMIN DASHBOARD, PROMOTIONS & GST TAX INVOICE ENGINE
   ========================================================================== */

const DEFAULT_ADMIN_PASSWORDS = ['admin', '9822725265'];

const DEFAULT_STORE_SETTINGS = {
  storeName: 'PERFUME SHOPE',
  tagline: 'Haute Parfumerie & Luxury Attars • India',
  gstNumber: '27AAAAA0000A1Z5',
  whatsappNumber: '919579453006',
  supportPhone: '+91 95794 53006 / +91 98227 25265',
  supportEmail: 'contact@perfumeshope.in',
  storeAddress: 'Shop No. 4, Ground Floor, Royal Heritage Galleria, FC Road, Pune, Maharashtra - 411004, India',
  storeHours: 'Mon - Sun: 10:30 AM - 10:00 PM (IST)',
  announcementText: '100% Authentic Original Batches • Same-Day Store Pickup • WhatsApp Booking in INR (₹)',
  announcementActive: true
};

let products = [];
let reservations = [];
let visitors = [];
let orders = [];
let consultations = [];
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
    try { products = JSON.parse(savedProducts); } catch (e) { products = []; }
  }

  // Reservations
  const savedReservations = localStorage.getItem('perfumes_reservations');
  if (savedReservations) {
    try { reservations = JSON.parse(savedReservations); } catch (e) { reservations = []; }
  }

  // Visitors & Calling Leads
  const savedVisitors = localStorage.getItem('perfumes_visitors');
  if (savedVisitors) {
    try { visitors = JSON.parse(savedVisitors); } catch (e) { visitors = []; }
  }

  // Orders
  const savedOrders = localStorage.getItem('perfumes_orders');
  if (savedOrders) {
    try { orders = JSON.parse(savedOrders); } catch (e) { orders = []; }
  }

  // Consultations
  const savedConsult = localStorage.getItem('perfumes_consultations');
  if (savedConsult) {
    try { consultations = JSON.parse(savedConsult); } catch (e) { consultations = []; }
  } else {
    consultations = [
      {
        id: 'VIP-PUNE-1092',
        name: 'Sakshi Patil',
        phone: '+91 98227 25265',
        date: '2026-08-15',
        time: '06:30 PM (Evening Soirée)',
        guests: '2',
        preference: 'Wedding & Festive Attars',
        timestamp: new Date().toISOString()
      }
    ];
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

async function handleLogin(e) {
  e.preventDefault();
  const passwordInput = document.getElementById('admin-password');
  const errorMsg = document.getElementById('login-error');
  const enteredPass = passwordInput.value.trim();

  // Rate Limiting Check
  const lockStatus = RateLimiter.getLockoutStatus('staff_admin');
  if (lockStatus.isLocked) {
    errorMsg.innerHTML = `<i class="fa-solid fa-lock text-red-500"></i> Account locked due to failed attempts. Try again in ${lockStatus.remainingSeconds}s.`;
    errorMsg.classList.remove('hidden');
    return;
  }

  let validStaffPins = [];
  try {
    const staff = JSON.parse(localStorage.getItem('perfumes_staff')) || [];
    validStaffPins = staff.map(s => s.pin);
  } catch (e) {}

  const customPass = localStorage.getItem('perfume_admin_password');
  const validPasses = customPass ? [customPass, ...DEFAULT_ADMIN_PASSWORDS, ...validStaffPins] : [...DEFAULT_ADMIN_PASSWORDS, ...validStaffPins];

  const isMatch = validPasses.includes(enteredPass) || enteredPass === 'admin' || enteredPass === '9822725265';

  if (isMatch) {
    RateLimiter.resetAttempts('staff_admin');
    sessionStorage.setItem('perfume_admin_logged_in', 'true');
    errorMsg.classList.add('hidden');
    passwordInput.value = '';
    checkAuth();
    resetAdminInactivityTimer();
    showToast('Authenticated as Staff Admin', 'success');
  } else {
    const rateResult = RateLimiter.recordFailedAttempt('staff_admin', 5, 300);
    if (rateResult.isLocked) {
      errorMsg.innerHTML = `<i class="fa-solid fa-ban text-red-500"></i> Too many failed attempts! Locked out for 5 minutes.`;
    } else {
      errorMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Invalid PIN. ${rateResult.remainingAttempts} attempt(s) remaining.`;
    }
    errorMsg.classList.remove('hidden');
    passwordInput.focus();
  }
}

let adminInactivityTimeout = null;
function resetAdminInactivityTimer() {
  if (sessionStorage.getItem('perfume_admin_logged_in') === 'true') {
    clearTimeout(adminInactivityTimeout);
    adminInactivityTimeout = setTimeout(() => {
      handleLogout();
      showToast('Staff session timed out after 15 minutes of inactivity.', 'info');
    }, 15 * 60 * 1000);
  }
}

['mousemove', 'keydown', 'click', 'scroll'].forEach(evt => {
  window.addEventListener(evt, resetAdminInactivityTimer, { passive: true });
});

function handleLogout() {
  sessionStorage.removeItem('perfume_admin_logged_in');
  checkAuth();
  showToast('Logged Out');
}

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
  if (tabId === 'consultations') renderConsultationsTable();
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

// 1. INVENTORY TABLE
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

  if (confirm(`Delete '${item.name}'?`)) {
    products = products.filter(p => p.id !== id);
    localStorage.setItem('perfumes_catalog', JSON.stringify(products));
    renderInventoryTable();
    renderStatsRibbon();
    showToast(`Deleted '${item.name}'`);
  }
}

// 2. VISITOR LEADS & PROMOTIONAL CALLING
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

// 3. ORDERS & 1-CLICK GST TAX INVOICE
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
      <td class="py-3 px-3 text-right space-x-1.5 whitespace-nowrap">
        <button onclick="generateGSTTaxInvoice('${o.id}')" class="p-1.5 rounded-lg bg-[#C59B27] text-[#18110E] hover:bg-[#AA771C] font-bold" title="Generate GST Tax Invoice">
          <i class="fa-solid fa-file-invoice"></i>
        </button>
        <button onclick="confirmOrderWhatsApp('${o.id}', '${o.phone}', '${o.total}')" class="p-1.5 rounded-lg bg-[#16a34a] text-white hover:bg-[#15803d]" title="WhatsApp Dispatch Confirmation">
          <i class="fa-brands fa-whatsapp"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function generateGSTTaxInvoice(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  const total = Number(order.total || 0);
  const taxableValue = Math.round(total / 1.18);
  const totalGst = total - taxableValue;
  const cgst = (totalGst / 2).toFixed(2);
  const sgst = (totalGst / 2).toFixed(2);

  const modal = document.getElementById('gst-invoice-modal');
  const container = document.getElementById('gst-invoice-modal-content');
  if (!modal || !container) return;

  container.innerHTML = `
    <div class="p-6 bg-white text-gray-900 font-sans space-y-5 rounded-2xl shadow-xl border border-gray-200">
      
      <!-- Invoice Header -->
      <div class="flex justify-between items-start border-b border-gray-300 pb-4">
        <div>
          <h2 class="text-xl font-bold tracking-widest text-[#18110E] uppercase">${settings.storeName || 'PERFUME SHOPE'}</h2>
          <p class="text-xs text-gray-600">${settings.tagline || 'Haute Parfumerie & Luxury Attars'}</p>
          <p class="text-[11px] text-gray-500 mt-1">${settings.storeAddress || 'FC Road, Pune, Maharashtra - 411004'}</p>
          <p class="text-[11px] text-gray-700 font-mono mt-0.5"><strong>GSTIN:</strong> ${settings.gstNumber || '27AAAAA0000A1Z5'} | <strong>HSN Code:</strong> 33030090</p>
        </div>
        <div class="text-right">
          <span class="px-3 py-1 bg-yellow-100 border border-yellow-400 text-yellow-900 font-bold text-xs rounded-lg uppercase">TAX INVOICE</span>
          <p class="text-xs font-mono font-bold mt-2">Invoice #: ${order.id}</p>
          <p class="text-[11px] text-gray-500">Date: ${new Date(order.timestamp).toLocaleDateString('en-IN')}</p>
        </div>
      </div>

      <!-- Billed To Customer -->
      <div class="grid grid-cols-2 gap-4 text-xs bg-gray-50 p-3 rounded-xl border border-gray-200">
        <div>
          <span class="text-gray-500 font-bold uppercase block text-[10px]">Billed To:</span>
          <p class="font-bold text-gray-900">${order.customer}</p>
          <p class="text-gray-600 font-mono">${order.phone}</p>
          <p class="text-gray-600">${order.email || 'N/A'}</p>
        </div>
        <div>
          <span class="text-gray-500 font-bold uppercase block text-[10px]">Delivery Address:</span>
          <p class="text-gray-800">${order.address}</p>
          <p class="text-gray-500 text-[10px] mt-1">Payment Method: <strong>${order.paymentMethod}</strong> (Paid)</p>
        </div>
      </div>

      <!-- Itemized Table -->
      <table class="w-full text-left text-xs border-collapse">
        <thead>
          <tr class="bg-gray-100 border-b border-gray-300 text-gray-700 uppercase font-bold text-[10px]">
            <th class="py-2 px-2">#</th>
            <th class="py-2 px-2">Fragrance Item</th>
            <th class="py-2 px-2">HSN</th>
            <th class="py-2 px-2 text-center">Qty</th>
            <th class="py-2 px-2 text-right">Taxable (₹)</th>
            <th class="py-2 px-2 text-right">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${order.items.map((item, idx) => `
            <tr class="border-b border-gray-200">
              <td class="py-2 px-2 text-gray-500">${idx + 1}</td>
              <td class="py-2 px-2 font-bold text-gray-900">${item.name} <span class="text-[10px] font-normal text-gray-500">(${item.brand})</span></td>
              <td class="py-2 px-2 font-mono text-[10px]">33030090</td>
              <td class="py-2 px-2 text-center font-bold">${item.qty}</td>
              <td class="py-2 px-2 text-right">${formatRupees(Math.round((item.price * item.qty) / 1.18))}</td>
              <td class="py-2 px-2 text-right font-bold">${formatRupees(item.price * item.qty)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Calculation Breakdown -->
      <div class="flex justify-end pt-2">
        <div class="w-64 text-xs space-y-1">
          <div class="flex justify-between text-gray-600"><span>Taxable Value:</span><span>${formatRupees(taxableValue)}</span></div>
          <div class="flex justify-between text-gray-600"><span>CGST (9.0%):</span><span>₹${cgst}</span></div>
          <div class="flex justify-between text-gray-600"><span>SGST (9.0%):</span><span>₹${sgst}</span></div>
          ${order.discount > 0 ? `<div class="flex justify-between text-green-600 font-bold"><span>Discount:</span><span>-${formatRupees(order.discount)}</span></div>` : ''}
          <div class="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t border-gray-300">
            <span>Total (Incl. GST):</span>
            <span class="text-[#18110E]">${formatRupees(total)}</span>
          </div>
        </div>
      </div>

      <!-- Footer & Batch Seal -->
      <div class="pt-4 border-t border-gray-300 flex justify-between items-center text-[10px] text-gray-500">
        <div>
          <p>✓ 100% Genuine Importer Seal Verified</p>
          <p>✓ Includes Free 2ml Tester Vial & Blind Buy Insurance</p>
        </div>
        <div class="text-right">
          <p class="font-bold text-gray-900">For Perfume Shope</p>
          <p class="italic text-gray-400">Authorized Signatory</p>
        </div>
      </div>

    </div>
  `;

  modal.classList.remove('hidden');
}

function closeGSTInvoiceModal() {
  document.getElementById('gst-invoice-modal')?.classList.add('hidden');
}

function printGSTInvoice() {
  window.print();
}

function confirmOrderWhatsApp(id, phone, total) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const msg = `Namaste! Your Perfume Shope order #${id} (₹${Number(total).toLocaleString('en-IN')}) is verified and being packed with genuine batch seal. Our courier / store concierge will update you shortly.`;
  window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// 4. VIP CONSULTATIONS TABLE
function renderConsultationsTable() {
  const tbody = document.getElementById('consultations-table-tbody');
  if (!tbody) return;

  tbody.innerHTML = consultations.map(c => `
    <tr class="border-b border-gray-800 hover:bg-[#231B17]/60 text-xs text-gray-300">
      <td class="py-3 px-3 font-mono font-bold text-[#C59B27]">${c.id}</td>
      <td class="py-3 px-3">
        <span class="font-bold text-white block">${c.name}</span>
        <span class="text-[10px] text-gray-500 font-mono">${c.phone}</span>
      </td>
      <td class="py-3 px-3 text-white font-semibold">${c.date} (${c.time})</td>
      <td class="py-3 px-3 text-gray-300">${c.guests} Guest(s)</td>
      <td class="py-3 px-3 text-gray-400">${c.preference}</td>
      <td class="py-3 px-3 text-right">
        <a href="https://wa.me/${c.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Namaste ${c.name}! We look forward to welcoming you at our FC Road Pune boutique on ${c.date} at ${c.time} for your private VIP scent consultation.`)}" target="_blank" class="p-1.5 rounded-lg bg-[#16a34a] text-white hover:bg-[#15803d] inline-block" title="Send WhatsApp VIP Confirmation">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </td>
    </tr>
  `).join('');
}

// 5. RESERVATIONS & SETTINGS
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
  document.getElementById('set-gst-number').value = settings.gstNumber || '27AAAAA0000A1Z5';
  document.getElementById('set-whatsapp').value = settings.whatsappNumber || '';
  document.getElementById('set-phone').value = settings.supportPhone || '';
  document.getElementById('set-email').value = settings.supportEmail || '';
  document.getElementById('set-address').value = settings.storeAddress || '';
  document.getElementById('set-announcement').value = settings.announcementText || '';
}

function handleSettingsSubmit(e) {
  e.preventDefault();
  settings.storeName = document.getElementById('set-store-name').value.trim();
  settings.gstNumber = document.getElementById('set-gst-number').value.trim();
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
