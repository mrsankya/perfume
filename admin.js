/* ==========================================================================
   PERFUME SHOPE - ADMIN DASHBOARD, PROMOTIONS & GST TAX INVOICE ENGINE
   ========================================================================== */

const DEFAULT_ADMIN_PASSWORDS = ['admin', '9822725265'];

const DEFAULT_STORE_SETTINGS = {
  storeName: 'Club 99 – The Perfume Shop',
  tagline: 'Luxury Parfumerie & Arabian Extraits • Jalgaon',
  gstNumber: '27AABCP9822F1Z4',
  whatsappNumber: '919822725265',
  supportPhone: '+91 9822725265',
  supportEmail: 'contact@club99perfumes.in',
  storeAddress: 'Club 99 – The Perfume Shop, Near Station Road / City Center, Jalgaon, Maharashtra – 425001, India',
  storeHours: 'Monday – Sunday: 10:30 AM – 10:00 PM (IST)',
  announcementText: '100% Authentic Original Batches • Jalgaon Store Pickup • WhatsApp VIP Concierge',
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
  applyAdminTheme();
  loadAdminData();
  checkAuth();
  initAdminRenderCloudDesk();
});

window.addEventListener('storage', (e) => {
  if (e.key === 'perfumes_site_style') {
    applyAdminTheme();
  }
});

function applyAdminTheme() {
  const currentStyle = localStorage.getItem('perfumes_site_style') || 'artisan-minimal';
  document.documentElement.setAttribute('data-style', currentStyle);
  document.body.setAttribute('data-style', currentStyle);
}

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
  if (tabId === 'celebrities') renderAdminCelebrityWardrobes();
  if (tabId === 'banners') renderStaffHeroBanners();
  if (tabId === 'video') initStaffVideoSettings();
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

// =========================================================================
// IMAGE UPLOAD & CANVAS COMPRESSION ENGINE
// =========================================================================
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

// =========================================================================
// STAFF PRODUCT MULTI-IMAGE GALLERY HANDLERS
// =========================================================================
let adminProductImages = [];

async function handleProductMultipleFiles(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;
  
  showToast(`Compressing & loading ${files.length} image(s)...`, 'info');
  let loadedCount = 0;
  for (let i = 0; i < files.length; i++) {
    try {
      const result = await processImageFile(files[i], 1000, 1000, 0.85);
      if (result && result.dataUrl) {
        adminProductImages.push(result.dataUrl);
        loadedCount++;
      }
    } catch (err) {
      console.warn('Error processing image:', err);
    }
  }
  renderAdminProductImagesGallery();
  showToast(`Added ${loadedCount} photo(s) to product gallery! 📸`, 'success');
  event.target.value = '';
}

function addProductImageUrl() {
  const input = document.getElementById('inp-image-url-input');
  if (!input) return;
  const url = input.value.trim();
  if (!url) {
    showToast('Please enter a valid image URL', 'error');
    return;
  }
  adminProductImages.push(url);
  input.value = '';
  renderAdminProductImagesGallery();
  showToast('Image URL added! 🖼️', 'success');
}

function removeProductImage(index) {
  if (index >= 0 && index < adminProductImages.length) {
    adminProductImages.splice(index, 1);
    renderAdminProductImagesGallery();
  }
}

function setProductCoverImage(index) {
  if (index >= 0 && index < adminProductImages.length) {
    if (index !== 0) {
      const item = adminProductImages.splice(index, 1)[0];
      adminProductImages.unshift(item);
    }
    renderAdminProductImagesGallery();
    showToast('Cover photo updated! ⭐', 'success');
  }
}

function clearAllProductImages() {
  adminProductImages = [];
  renderAdminProductImagesGallery();
}

function renderAdminProductImagesGallery() {
  const grid = document.getElementById('inp-images-gallery-grid');
  const countText = document.getElementById('inp-images-count-text');
  const hiddenImage = document.getElementById('inp-image');
  if (!grid) return;

  if (hiddenImage) {
    hiddenImage.value = adminProductImages.length > 0 ? adminProductImages[0] : '';
  }

  if (countText) {
    countText.innerText = `${adminProductImages.length} Photo(s) (${adminProductImages.length > 0 ? 'Click any photo to make it the Primary Cover ⭐' : 'No photos added yet'})`;
  }

  if (adminProductImages.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-4 text-center text-xs text-gray-500 italic">
        <i class="fa-solid fa-images text-base text-gray-600 block mb-1"></i>
        No photos added yet. Upload files or paste URLs above.
      </div>
    `;
    return;
  }

  grid.innerHTML = adminProductImages.map((imgUrl, idx) => `
    <div onclick="setProductCoverImage(${idx})" class="admin-gallery-card ${idx === 0 ? 'is-cover' : ''} flex flex-col justify-between p-1.5" title="${idx === 0 ? 'Current Primary Cover Photo' : 'Click to make this the Primary Cover Photo'}">
      <img src="${imgUrl}" alt="Product Image #${idx + 1}">
      
      <!-- Top Badges & Actions -->
      <div class="absolute top-1.5 inset-x-1.5 flex items-center justify-between pointer-events-none">
        ${idx === 0 ? `
          <span class="px-2 py-0.5 rounded-md bg-[#C59B27] text-[#120D0A] font-extrabold text-[9px] uppercase tracking-wider shadow-md flex items-center gap-1">
            <i class="fa-solid fa-crown text-[8px]"></i> Cover
          </span>
        ` : `
          <button type="button" onclick="event.stopPropagation(); setProductCoverImage(${idx})" title="Set as Cover Photo" class="pointer-events-auto px-1.5 py-0.5 rounded-md bg-black/80 hover:bg-[#C59B27] hover:text-[#120D0A] text-gray-200 text-[8px] font-bold transition-all shadow-sm backdrop-blur-sm border border-gray-700">
            <i class="fa-solid fa-star text-yellow-400"></i> Set Cover
          </button>
        `}

        <button type="button" onclick="event.stopPropagation(); removeProductImage(${idx})" title="Delete Image" class="pointer-events-auto w-5 h-5 rounded-md bg-red-950/90 hover:bg-red-600 text-red-300 hover:text-white flex items-center justify-center text-[9px] transition-all shadow-sm border border-red-800/50">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <!-- Bottom Index & Caption -->
      <div class="absolute bottom-1.5 inset-x-1.5 flex items-center justify-between pointer-events-none">
        <span class="px-1.5 py-0.5 rounded bg-black/75 text-gray-200 text-[8px] font-mono backdrop-blur-sm border border-white/10">
          ${idx === 0 ? '⭐ Primary' : `#${idx + 1}`}
        </span>
      </div>
    </div>
  `).join('');
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
      document.getElementById('inp-stock').checked = item.inStock !== false;
      
      const urlInput = document.getElementById('inp-image-url-input');
      if (urlInput) urlInput.value = item.image || '';

      // Load images array or single image
      if (item.images && Array.isArray(item.images) && item.images.length > 0) {
        adminProductImages = [...item.images];
      } else if (item.image) {
        adminProductImages = [item.image];
      } else {
        adminProductImages = [];
      }
      renderAdminProductImagesGallery();
    }
  } else {
    title.innerText = 'Add New Fragrance';
    form.reset();
    document.getElementById('inp-stock').checked = true;
    const urlInput = document.getElementById('inp-image-url-input');
    if (urlInput) urlInput.value = '';
    adminProductImages = [];
    renderAdminProductImagesGallery();
  }

  modal.classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('product-edit-modal').classList.add('hidden');
  editingProductId = null;
  adminProductImages = [];
  const urlInput = document.getElementById('inp-image-url-input');
  if (urlInput) urlInput.value = '';
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

  // Auto-capture direct URL input if entered or modified
  const urlInput = document.getElementById('inp-image-url-input');
  if (urlInput && urlInput.value.trim()) {
    const typedUrl = urlInput.value.trim();
    if (!adminProductImages.includes(typedUrl)) {
      adminProductImages.unshift(typedUrl);
    }
  }

  const images = adminProductImages.length > 0 ? [...adminProductImages] : ['https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80'];
  const image = images[0];
  const inStock = document.getElementById('inp-stock').checked;

  let savedProduct = null;
  if (editingProductId) {
    const idx = products.findIndex(p => p.id === editingProductId);
    if (idx !== -1) {
      const existing = products[idx];
      const { _id, ...cleanExisting } = existing;
      products[idx] = { ...cleanExisting, id: editingProductId, name, brand, price, gender, accord, badge, notes, image, images, inStock };
      savedProduct = products[idx];
      showToast(`Updated '${name}' (${images.length} photos) ✨`, 'success');
    }
  } else {
    const newId = 'p' + Date.now();
    savedProduct = { id: newId, name, brand, price, gender, accord, badge, notes, image, images, inStock };
    products.unshift(savedProduct);
    showToast(`Added '${name}' (${images.length} photos) ✨`, 'success');
  }

  localStorage.setItem('perfumes_catalog', JSON.stringify(products));

  // Push directly to MongoDB Atlas Cloud in real-time
  if (savedProduct && typeof MongoSync !== 'undefined' && MongoSync.pushProduct) {
    MongoSync.pushProduct(savedProduct).then(res => {
      if (res) showToast(`Product '${name}' stored in MongoDB Atlas 🍃`, 'success');
    });
  }

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

    // Delete directly from MongoDB Atlas Cloud in real-time
    if (typeof MongoSync !== 'undefined' && MongoSync.deleteProduct) {
      MongoSync.deleteProduct(id);
    }

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

// 3. ORDERS & 1-CLICK GST TAX INVOICE & FULFILLMENT TRACKING
function renderOrdersTable() {
  const tbody = document.getElementById('orders-table-tbody');
  if (!tbody) return;

  if (orders.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center py-8 text-gray-500 text-xs">
          <i class="fa-solid fa-box-open text-2xl block mb-2 text-gray-600"></i>
          No online orders received yet.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = orders.map(o => {
    const status = o.status || 'Placed';
    let badgeClass = 'bg-blue-950 text-blue-300 border-blue-800';
    if (status === 'Packed') badgeClass = 'bg-indigo-950 text-indigo-300 border-indigo-800';
    else if (status === 'Dispatched') badgeClass = 'bg-amber-950 text-amber-300 border-amber-800';
    else if (status === 'Out for Delivery') badgeClass = 'bg-purple-950 text-purple-300 border-purple-800';
    else if (status === 'Delivered') badgeClass = 'bg-green-950 text-green-300 border-green-800';
    else if (status === 'Cancelled') badgeClass = 'bg-red-950 text-red-300 border-red-800';

    return `
      <tr class="border-b border-gray-800 hover:bg-[#231B17]/60 text-xs text-gray-300">
        <td class="py-3 px-3 font-mono font-bold text-[#C59B27]">${o.id}</td>
        <td class="py-3 px-3">
          <span class="font-bold text-white block">${o.customer}</span>
          <span class="text-[10px] text-gray-500 font-mono">${o.phone}</span>
        </td>
        <td class="py-3 px-3 text-[11px]">${o.items ? o.items.map(i => `${i.name} (x${i.qty})`).join(', ') : 'Perfume'}</td>
        <td class="py-3 px-3 font-bold text-white">${formatRupees(o.total)}</td>
        <td class="py-3 px-3">
          <button onclick="openOrderStatusModal('${o.id}')" class="px-2.5 py-1 rounded-full text-[10px] font-bold border ${badgeClass} hover:opacity-80 flex items-center gap-1 shadow-sm transition-all" title="Click to update fulfillment stage">
            <span>${status}</span>
            <i class="fa-solid fa-pen-to-square text-[9px]"></i>
          </button>
        </td>
        <td class="py-3 px-3 text-[11px]">
          <span class="text-white block font-medium">${o.courier || 'BlueDart Express'}</span>
          <span class="text-[10px] font-mono text-[#C59B27]">${o.awb ? 'AWB: ' + o.awb : 'AWB: Pending'}</span>
        </td>
        <td class="py-3 px-3">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-950 text-green-300 border border-green-800">${o.paymentMethod || 'UPI'}</span>
        </td>
        <td class="py-3 px-3 text-right space-x-1.5 whitespace-nowrap">
          <button onclick="openOrderStatusModal('${o.id}')" class="p-1.5 rounded-lg bg-blue-600/80 text-white hover:bg-blue-500 font-bold" title="Update Fulfillment Status">
            <i class="fa-solid fa-truck-fast"></i>
          </button>
          <button onclick="generateGSTTaxInvoice('${o.id}')" class="p-1.5 rounded-lg bg-[#C59B27] text-[#18110E] hover:bg-[#AA771C] font-bold" title="Generate GST Tax Invoice">
            <i class="fa-solid fa-file-invoice"></i>
          </button>
          <button onclick="sendWhatsAppOrderStatus('${o.id}')" class="p-1.5 rounded-lg bg-[#16a34a] text-white hover:bg-[#15803d]" title="WhatsApp Dispatch Alert">
            <i class="fa-brands fa-whatsapp"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function openOrderStatusModal(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  const modal = document.getElementById('order-status-modal');
  if (!modal) return;

  document.getElementById('status-order-id').value = order.id;
  document.getElementById('status-modal-order-id-display').innerText = order.id;
  document.getElementById('status-modal-customer-display').innerText = `${order.customer} (${order.phone})`;
  document.getElementById('status-select-stage').value = order.status || 'Placed';
  document.getElementById('status-input-courier').value = order.courier || 'BlueDart Air Express';
  document.getElementById('status-input-awb').value = order.awb || '';
  document.getElementById('status-input-note').value = order.dispatchNote || '';

  modal.classList.remove('hidden');
}

function closeOrderStatusModal() {
  document.getElementById('order-status-modal')?.classList.add('hidden');
}

function handleSaveOrderStatus(e) {
  e.preventDefault();
  const orderId = document.getElementById('status-order-id').value;
  const stage = document.getElementById('status-select-stage').value;
  const courier = document.getElementById('status-input-courier').value.trim();
  const awb = document.getElementById('status-input-awb').value.trim();
  const note = document.getElementById('status-input-note').value.trim();

  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  order.status = stage;
  order.courier = courier;
  order.awb = awb;
  order.dispatchNote = note;
  order.updatedAt = new Date().toISOString();

  // Save to storage
  localStorage.setItem('perfumes_orders', JSON.stringify(orders));

  // Sync to MongoDB Cloud
  if (typeof MongoSync !== 'undefined' && MongoSync.pushOrder) {
    MongoSync.pushOrder(order);
  }

  closeOrderStatusModal();
  renderOrdersTable();
  showToast(`Order #${order.id} status updated to "${stage}"! 📦`, 'success');
}

function sendWhatsAppOrderStatus(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  const phone = (order.phone || '').replace(/[\s\-\+]/g, '');
  let msg = `*👑 PERFUME SHOPE - ORDER SHIPMENT UPDATE*\n`;
  msg += `*Order Reference:* ${order.id}\n`;
  msg += `*Dear ${order.customer},*\n\n`;
  msg += `*Current Status:* ${order.status || 'Dispatched'}\n`;
  if (order.courier) msg += `*Courier Partner:* ${order.courier}\n`;
  if (order.awb) msg += `*Tracking AWB Number:* ${order.awb}\n`;
  if (order.dispatchNote) msg += `*Dispatch Note:* ${order.dispatchNote}\n`;
  msg += `*Delivery Destination:* ${order.address}\n\n`;
  msg += `Track your luxury fragrance live anytime on our portal: https://perfume-shopee.pages.dev\n`;
  msg += `Thank you for shopping with Perfume Shope Flagship Boutique! ✨`;

  window.open(`https://wa.me/${phone.startsWith('91') ? phone : '91' + phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

let currentActiveInvoiceOrder = null;

function generateGSTTaxInvoice(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  currentActiveInvoiceOrder = order;

  const total = Number(order.total || 0);
  const taxableValue = Math.round(total / 1.18);
  const totalGst = total - taxableValue;
  const cgst = (totalGst / 2).toFixed(2);
  const sgst = (totalGst / 2).toFixed(2);

  const modal = document.getElementById('gst-invoice-modal');
  const container = document.getElementById('gst-invoice-modal-content');
  if (!modal || !container) return;

  const orderDate = order.timestamp || order.date ? new Date(order.timestamp || order.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : new Date().toLocaleDateString('en-IN');

  container.innerHTML = `
    <div id="printable-gst-document" class="p-6 bg-white text-gray-900 font-sans space-y-5 rounded-2xl shadow-xl border border-gray-200">
      
      <!-- Invoice Header -->
      <div class="flex justify-between items-start border-b-2 border-gray-900 pb-4">
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xl">👑</span>
            <h2 class="text-xl font-bold tracking-widest text-[#18110E] uppercase">${settings.storeName || 'PERFUME SHOPE'}</h2>
          </div>
          <p class="text-xs text-gray-600 font-medium">${settings.tagline || 'Haute Parfumerie & Luxury Attars'}</p>
          <p class="text-[11px] text-gray-500 mt-1">${settings.storeAddress || 'FC Road, Deccan Gymkhana, Pune, Maharashtra - 411004'}</p>
          <p class="text-[11px] text-gray-700 font-mono mt-0.5"><strong>GSTIN:</strong> ${settings.gstNumber || '27AAAAA0000A1Z5'} | <strong>State:</strong> 27 (Maharashtra) | <strong>HSN:</strong> 33030090</p>
        </div>
        <div class="text-right">
          <span class="px-3 py-1 bg-amber-100 border border-amber-400 text-amber-900 font-bold text-xs rounded-lg uppercase tracking-wider">TAX INVOICE</span>
          <p class="text-xs font-mono font-bold mt-2 text-gray-900">Invoice #: ${order.id}</p>
          <p class="text-[11px] text-gray-500">Date: ${orderDate}</p>
          <p class="text-[10px] text-green-700 font-bold">✓ Original for Recipient</p>
        </div>
      </div>

      <!-- Billed To Customer -->
      <div class="grid grid-cols-2 gap-4 text-xs bg-gray-50 p-3.5 rounded-xl border border-gray-200">
        <div>
          <span class="text-gray-500 font-bold uppercase block text-[10px] tracking-wider">Billed & Shipped To:</span>
          <p class="font-bold text-gray-900 text-sm mt-0.5">${order.customer}</p>
          <p class="text-gray-700 font-mono font-medium">${order.phone}</p>
          <p class="text-gray-600">${order.email || 'N/A'}</p>
        </div>
        <div>
          <span class="text-gray-500 font-bold uppercase block text-[10px] tracking-wider">Delivery Destination:</span>
          <p class="text-gray-800 leading-relaxed mt-0.5">${order.address}</p>
          <p class="text-gray-600 text-[11px] mt-1.5">Payment Method: <strong class="text-gray-900">${order.paymentMethod || 'Prepaid UPI'}</strong> (PAID)</p>
        </div>
      </div>

      <!-- Itemized Table -->
      <table class="w-full text-left text-xs border-collapse">
        <thead>
          <tr class="bg-gray-100 border-b border-gray-300 text-gray-700 uppercase font-bold text-[10px]">
            <th class="py-2.5 px-3">#</th>
            <th class="py-2.5 px-3">Fragrance Extrait / Attar</th>
            <th class="py-2.5 px-3">HSN Code</th>
            <th class="py-2.5 px-3 text-center">Qty</th>
            <th class="py-2.5 px-3 text-right">Taxable Value (₹)</th>
            <th class="py-2.5 px-3 text-right">Total (₹)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          ${order.items ? order.items.map((item, idx) => {
            const itemTotal = (item.price || 0) * (item.qty || 1);
            const itemTaxable = Math.round(itemTotal / 1.18);
            return `
              <tr>
                <td class="py-2.5 px-3 text-gray-500">${idx + 1}</td>
                <td class="py-2.5 px-3">
                  <span class="font-bold text-gray-900 block">${item.name}</span>
                  <span class="text-[10px] text-gray-500">${item.brand || 'Luxury Extrait'} + Free 2ml Tester Vial</span>
                </td>
                <td class="py-2.5 px-3 font-mono text-[10px] text-gray-600">33030090</td>
                <td class="py-2.5 px-3 text-center font-bold text-gray-900">${item.qty || 1}</td>
                <td class="py-2.5 px-3 text-right font-mono">${formatRupees(itemTaxable)}</td>
                <td class="py-2.5 px-3 text-right font-bold text-gray-900 font-mono">${formatRupees(itemTotal)}</td>
              </tr>
            `;
          }).join('') : `
            <tr>
              <td class="py-2.5 px-3 text-gray-500">1</td>
              <td class="py-2.5 px-3 font-bold text-gray-900">Luxury Fragrance Extrait</td>
              <td class="py-2.5 px-3 font-mono text-[10px]">33030090</td>
              <td class="py-2.5 px-3 text-center font-bold">1</td>
              <td class="py-2.5 px-3 text-right">${formatRupees(taxableValue)}</td>
              <td class="py-2.5 px-3 text-right font-bold">${formatRupees(total)}</td>
            </tr>
          `}
        </tbody>
      </table>

      <!-- Calculation Breakdown -->
      <div class="flex justify-end pt-2">
        <div class="w-72 text-xs space-y-1.5 bg-gray-50 p-3 rounded-xl border border-gray-200">
          <div class="flex justify-between text-gray-600"><span>Taxable Amount:</span><span class="font-mono font-medium">${formatRupees(taxableValue)}</span></div>
          <div class="flex justify-between text-gray-600"><span>CGST (9.0%):</span><span class="font-mono font-medium">₹${cgst}</span></div>
          <div class="flex justify-between text-gray-600"><span>SGST (9.0%):</span><span class="font-mono font-medium">₹${sgst}</span></div>
          ${order.discount > 0 ? `<div class="flex justify-between text-green-700 font-bold"><span>Promo Discount:</span><span class="font-mono">-${formatRupees(order.discount)}</span></div>` : ''}
          <div class="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t-2 border-gray-300">
            <span>Grand Total:</span>
            <span class="text-[#18110E] font-mono text-base">${formatRupees(total)}</span>
          </div>
        </div>
      </div>

      <!-- Footer & Batch Seal -->
      <div class="pt-4 border-t border-gray-300 flex justify-between items-center text-[10px] text-gray-500">
        <div class="space-y-0.5">
          <p class="font-bold text-gray-700">✓ 100% Genuine Importer Hologram Seal Verified</p>
          <p>✓ Includes Free 2ml Tester Vial & Blind Buy Money-Back Insurance</p>
          <p class="italic text-gray-400">This is a computer-generated tax invoice valid under GST Rules, 2017.</p>
        </div>
        <div class="text-right border-l border-gray-200 pl-4">
          <p class="font-bold text-gray-900 text-xs">For ${settings.storeName || 'PERFUME SHOPE'}</p>
          <div class="h-6"></div>
          <p class="italic text-gray-500 text-[9px] border-t border-gray-300 pt-1">Authorized Signatory</p>
        </div>
      </div>

    </div>
  `;

  modal.classList.remove('hidden');
}

function getInvoiceFilename(order) {
  const rawCustomer = (order && order.customer ? order.customer : 'Valued_Customer').trim();
  const cleanName = rawCustomer.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_');
  const cleanId = String(order && order.id ? order.id : 'ORD').replace(/[^a-zA-Z0-9]/g, '');
  return `Tax_Invoice_${cleanName}_${cleanId}.pdf`;
}

function convertNumberToWords(amount) {
  const num = Math.round(Number(amount) || 0);
  if (num === 0) return 'Zero Rupees Only';

  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  function toWords(n) {
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
    if (n < 1000) return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' and ' + toWords(n % 100) : '');
    if (n < 100000) return toWords(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + toWords(n % 1000) : '');
    if (n < 10000000) return toWords(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 ? ' ' + toWords(n % 100000) : '');
    return toWords(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 ? ' ' + toWords(n % 10000000) : '');
  }

  return toWords(num) + ' Rupees Only';
}

function closeGSTInvoiceModal() {
  document.getElementById('gst-invoice-modal')?.classList.add('hidden');
}

function downloadGSTInvoicePDF() {
  if (!currentActiveInvoiceOrder) {
    showToast('No active order selected for invoice download', 'error');
    return;
  }

  const element = document.getElementById('printable-gst-document');
  if (!element) return;

  const filename = getInvoiceFilename(currentActiveInvoiceOrder);

  if (typeof html2pdf !== 'undefined') {
    const opt = {
      margin: [8, 10, 8, 10],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2.5, useCORS: true, letterRendering: true, logging: false },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
    showToast(`Downloading Tax Invoice for ${currentActiveInvoiceOrder.customer}... 📥`, 'success');
  } else {
    printGSTInvoice();
  }
}

function printGSTInvoice() {
  if (!currentActiveInvoiceOrder) return;
  const originalTitle = document.title;
  const filenameNoExt = getInvoiceFilename(currentActiveInvoiceOrder).replace('.pdf', '');

  // Change page title so Chrome/Edge default save-as name matches Customer Name
  document.title = filenameNoExt;

  const container = document.getElementById('printable-gst-document');
  if (!container) {
    document.title = originalTitle;
    return;
  }

  const printWin = window.open('', '_blank', 'width=880,height=960');
  if (!printWin) {
    window.print();
    setTimeout(() => { document.title = originalTitle; }, 1000);
    return;
  }

  printWin.document.open();
  printWin.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${filenameNoExt}</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 10mm 12mm;
        }
        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          background: #ffffff !important;
          color: #111827 !important;
          margin: 0;
          padding: 8px;
          font-size: 12px;
          line-height: 1.4;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 12px 0;
        }
        th, td {
          padding: 8px 10px;
          border-bottom: 1px solid #e5e7eb;
          font-size: 11px;
          text-align: left;
        }
        th {
          background-color: #f3f4f6 !important;
          color: #374151;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 10px;
        }
      </style>
    </head>
    <body onload="window.focus(); window.print(); window.close();">
      ${container.outerHTML}
    </body>
    </html>
  `);
  printWin.document.close();

  setTimeout(() => {
    document.title = originalTitle;
  }, 1500);
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

function cleanStaffGoogleMapEmbedUrl(val) {
  if (!val || typeof val !== 'string') return '';
  val = val.trim();
  const iframeMatch = val.match(/src=["']([^"']+)["']/i);
  if (iframeMatch && iframeMatch[1]) {
    return iframeMatch[1];
  }
  return val;
}

function handleStaffStorefrontUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const maxDim = 1200;
      let width = img.width;
      let height = img.height;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

      const input = document.getElementById('set-storefront-img');
      const preview = document.getElementById('set-storefront-preview');
      if (input) input.value = dataUrl;
      if (preview) preview.src = dataUrl;
      showToast('Storefront Photo Uploaded & Compressed', 'success');
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function renderSettingsForm() {
  document.getElementById('set-store-name').value = settings.storeName || '';
  document.getElementById('set-gst-number').value = settings.gstNumber || '27AABCP9822F1Z4';
  document.getElementById('set-whatsapp').value = settings.whatsappNumber || '';
  document.getElementById('set-phone').value = settings.supportPhone || '';
  if (document.getElementById('set-email')) document.getElementById('set-email').value = settings.supportEmail || '';
  document.getElementById('set-address').value = settings.storeAddress || '';
  if (document.getElementById('set-announcement')) document.getElementById('set-announcement').value = settings.announcementText || '';

  // Physical Boutique & Map Config
  const storefrontImgEl = document.getElementById('set-storefront-img');
  const mapEmbedEl = document.getElementById('set-map-embed-url');
  const mapDirectionsEl = document.getElementById('set-map-directions-url');
  const storeDescEl = document.getElementById('set-store-description');
  const previewEl = document.getElementById('set-storefront-preview');

  if (storefrontImgEl) storefrontImgEl.value = settings.storefrontImage || 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&auto=format&fit=crop&q=80';
  if (mapEmbedEl) mapEmbedEl.value = settings.mapEmbedUrl || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119227.1896898495!2d75.5000574972656!3d20.998064600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fa4a1eab717%3A0x52efbdc30d3be000!2sJalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';
  if (mapDirectionsEl) mapDirectionsEl.value = settings.mapDirectionsUrl || 'https://www.google.com/maps/search/?api=1&query=Club+99+The+Perfume+Shop+Jalgaon+Maharashtra';
  if (storeDescEl) storeDescEl.value = settings.storeDescription || 'Step into our flagship fragrance sanctuary in Jalgaon. Experience 100+ authentic Arabian extraits, designer flacons, live laser bottle engraving, and complimentary sensory drydown testing on skin before you buy.';
  if (previewEl) previewEl.src = settings.storefrontImage || 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&auto=format&fit=crop&q=80';
}

function handleSettingsSubmit(e) {
  e.preventDefault();
  settings.storeName = document.getElementById('set-store-name').value.trim();
  settings.gstNumber = document.getElementById('set-gst-number').value.trim();
  settings.whatsappNumber = document.getElementById('set-whatsapp').value.trim();
  settings.supportPhone = document.getElementById('set-phone').value.trim();
  if (document.getElementById('set-email')) settings.supportEmail = document.getElementById('set-email').value.trim();
  settings.storeAddress = document.getElementById('set-address').value.trim();
  if (document.getElementById('set-announcement')) settings.announcementText = document.getElementById('set-announcement').value.trim();

  // Save Physical Boutique & Map Config
  const customImg = (document.getElementById('set-storefront-img')?.value || '').trim();
  const rawMapEmbed = (document.getElementById('set-map-embed-url')?.value || '').trim();
  const customDirections = (document.getElementById('set-map-directions-url')?.value || '').trim();
  const customDesc = (document.getElementById('set-store-description')?.value || '').trim();

  settings.storefrontImage = customImg || 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&auto=format&fit=crop&q=80';
  settings.mapEmbedUrl = cleanStaffGoogleMapEmbedUrl(rawMapEmbed) || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119227.1896898495!2d75.5000574972656!3d20.998064600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fa4a1eab717%3A0x52efbdc30d3be000!2sJalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';
  settings.mapDirectionsUrl = customDirections || 'https://www.google.com/maps/search/?api=1&query=Club+99+The+Perfume+Shop+Jalgaon+Maharashtra';
  settings.storeDescription = customDesc || 'Step into our flagship fragrance sanctuary in Jalgaon. Experience 100+ authentic Arabian extraits, designer flacons, live laser bottle engraving, and complimentary sensory drydown testing on skin before you buy.';

  const newPass = document.getElementById('set-new-password').value.trim();
  if (newPass) {
    localStorage.setItem('perfume_admin_password', newPass);
    document.getElementById('set-new-password').value = '';
  }

  localStorage.setItem('perfumes_settings', JSON.stringify(settings));
  showToast('Storefront Settings & Map saved successfully', 'success');
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

// =========================================================================
// CELEBRITY SCENT WARDROBES CONTROLLER (STAFF ADMIN)
// =========================================================================
const DEFAULT_STAFF_CELEBRITY_WARDROBES = [
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
    regularPrice: 7399,
    comboPrice: 6599,
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
    regularPrice: 6398,
    comboPrice: 5598,
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
    regularPrice: 10998,
    comboPrice: 10198,
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
    regularPrice: 7598,
    comboPrice: 6798,
    savings: 800
  }
];

function getAdminCelebrityWardrobes() {
  try {
    const saved = localStorage.getItem('perfumes_celebrity_wardrobes');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return DEFAULT_STAFF_CELEBRITY_WARDROBES;
}

function saveAdminCelebrityWardrobes(list) {
  localStorage.setItem('perfumes_celebrity_wardrobes', JSON.stringify(list));
  if (typeof MongoSync !== 'undefined' && MongoSync.pushCelebrities) {
    MongoSync.pushCelebrities(list);
  }
}

function renderAdminCelebrityWardrobes() {
  const container = document.getElementById('admin-celebrity-wardrobes-grid');
  if (!container) return;

  const wardrobes = getAdminCelebrityWardrobes();

  container.innerHTML = wardrobes.map((c, idx) => {
    const starCount = Math.floor(Number(c.rating || 5));
    const stars = '★'.repeat(starCount) + (starCount < 5 ? '☆'.repeat(5 - starCount) : '');

    return `
      <div class="bg-[#1C1511] border border-gray-800 rounded-3xl p-5 flex flex-col justify-between space-y-4 hover:border-[#C59B27]/60 transition-all shadow-md group">
        
        <!-- Header with Photos -->
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <div class="relative shrink-0">
              <img src="${c.image || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600'}" alt="${c.name}" class="w-16 h-16 rounded-2xl object-cover border-2 border-[#C59B27] shadow-md">
              <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#C59B27] text-[#120D0A] flex items-center justify-center text-[10px] font-bold">
                <i class="fa-solid fa-crown text-[8px]"></i>
              </span>
            </div>
            <div class="min-w-0">
              <span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#C59B27]/20 text-[#C59B27] border border-[#C59B27]/30 inline-block mb-1 truncate">
                ${c.badge || '🌟 Scent Signature'}
              </span>
              <h4 class="font-heading text-base font-bold text-white uppercase truncate">${c.name}</h4>
              <p class="text-xs text-gray-400 truncate">${c.tagline || ''}</p>
            </div>
          </div>

          <div class="shrink-0 text-right">
            ${c.perfumeImage ? `
              <img src="${c.perfumeImage}" alt="Perfume with Celeb" class="w-14 h-14 rounded-2xl object-cover border border-gray-700 shadow-sm p-0.5 bg-black/40" title="Perfume Flacon">
            ` : `
              <div class="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-600 text-xs">
                <i class="fa-solid fa-bottle-droplet"></i>
              </div>
            `}
          </div>
        </div>

        <!-- Rating & Compliments -->
        <div class="flex items-center justify-between px-3 py-2 rounded-xl bg-[#120D0A] border border-gray-800 text-xs">
          <div class="flex items-center gap-1 text-amber-400 font-bold">
            <span>${stars}</span>
            <span class="text-white font-mono ml-1">${c.rating || '5.0'}</span>
          </div>
          <span class="text-[10px] text-green-400 font-semibold">${c.ratingCount || '99% Compliment Magnet'}</span>
        </div>

        <!-- Quote -->
        <blockquote class="text-xs italic text-gray-300 p-3 rounded-2xl bg-[#120D0A] border border-gray-800/80 leading-relaxed">
          <i class="fa-solid fa-quote-left text-[9px] text-[#C59B27] mr-1"></i>
          ${c.quote || 'No quote provided.'}
        </blockquote>

        <!-- Perfume Duo & Notes -->
        <div class="p-3 rounded-2xl bg-[#120D0A] border border-gray-800 text-xs space-y-1">
          <div class="flex justify-between items-center text-[10px]">
            <span class="font-bold text-[#C59B27] uppercase">Perfume Duo:</span>
            <span class="text-gray-400 font-mono">${c.perfumeBrand || 'Luxury Blend'}</span>
          </div>
          <p class="font-bold text-white text-xs uppercase truncate">${c.perfumeName || 'Perfume Extrait'}</p>
          <p class="text-[10px] text-gray-400 truncate">${c.subtitle || ''}</p>
        </div>

        <!-- Pricing & Action Controls -->
        <div class="pt-2 flex items-center justify-between border-t border-gray-800">
          <div>
            <span class="text-[10px] text-gray-500 line-through">${formatRupees(c.regularPrice || 0)}</span>
            <span class="font-mono text-base font-bold text-[#C59B27] block">${formatRupees(c.comboPrice || 0)}</span>
            <span class="text-[9px] font-bold text-green-400">Save ${formatRupees(c.savings || 0)} Combo</span>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="openCelebrityWardrobeModal('${c.id}')" class="px-3 py-1.5 rounded-xl bg-blue-600/80 hover:bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm">
              <i class="fa-solid fa-pen-to-square"></i>
              <span>Edit</span>
            </button>
            <button onclick="deleteCelebrityWardrobe('${c.id}')" class="p-2 rounded-xl bg-red-900/40 hover:bg-red-800/80 text-red-300 text-xs transition-all" title="Delete Wardrobe">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

function openCelebrityWardrobeModal(celebId = null) {
  const form = document.getElementById('admin-celebrity-form');
  if (!form) return;
  form.reset();

  const titleEl = document.getElementById('admin-celeb-modal-title');
  const previewCelebImg = document.getElementById('admin-celeb-image-preview');
  const previewPerfumeImg = document.getElementById('admin-celeb-perfume-image-preview');

  if (celebId) {
    const list = getAdminCelebrityWardrobes();
    const celeb = list.find(c => c.id === celebId);
    if (celeb) {
      if (titleEl) titleEl.innerText = `Edit: ${celeb.name}`;
      document.getElementById('admin-celeb-input-id').value = celeb.id;
      document.getElementById('admin-celeb-input-name').value = celeb.name || '';
      document.getElementById('admin-celeb-input-tagline').value = celeb.tagline || '';
      document.getElementById('admin-celeb-input-badge').value = celeb.badge || '';
      document.getElementById('admin-celeb-select-rating').value = celeb.rating || '5.0';
      document.getElementById('admin-celeb-input-reviews').value = celeb.ratingCount || '';
      document.getElementById('admin-celeb-input-image-url').value = celeb.image || '';
      document.getElementById('admin-celeb-input-perfume-image-url').value = celeb.perfumeImage || '';
      document.getElementById('admin-celeb-input-perfume-name').value = celeb.perfumeName || '';
      document.getElementById('admin-celeb-input-perfume-brand').value = celeb.perfumeBrand || '';
      document.getElementById('admin-celeb-input-subtitle').value = celeb.subtitle || '';
      document.getElementById('admin-celeb-input-quote').value = celeb.quote || '';
      document.getElementById('admin-celeb-input-regular-price').value = celeb.regularPrice || '';
      document.getElementById('admin-celeb-input-combo-price').value = celeb.comboPrice || '';
      document.getElementById('admin-celeb-input-savings').value = celeb.savings || '';

      if (previewCelebImg) previewCelebImg.src = celeb.image || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600';
      if (previewPerfumeImg) previewPerfumeImg.src = celeb.perfumeImage || 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600';
    }
  } else {
    if (titleEl) titleEl.innerText = 'Add Celebrity Scent Wardrobe';
    document.getElementById('admin-celeb-input-id').value = '';
    document.getElementById('admin-celeb-select-rating').value = '5.0';
    document.getElementById('admin-celeb-input-reviews').value = '2.4k+ Fans • 99% Compliment Magnet';
    if (previewCelebImg) previewCelebImg.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600';
    if (previewPerfumeImg) previewPerfumeImg.src = 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600';
  }

  const fileNameCeleb = document.getElementById('admin-celeb-image-file-name');
  if (fileNameCeleb) fileNameCeleb.innerText = 'No file chosen';
  const fileNamePerfume = document.getElementById('admin-celeb-perfume-image-file-name');
  if (fileNamePerfume) fileNamePerfume.innerText = 'No file chosen';

  document.getElementById('admin-celebrity-modal')?.classList.remove('hidden');
}

function closeCelebrityWardrobeModal() {
  document.getElementById('admin-celebrity-modal')?.classList.add('hidden');
}

function previewAdminCelebImageUrl(url) {
  const preview = document.getElementById('admin-celeb-image-preview');
  if (preview && url) preview.src = url;
}

function previewAdminCelebPerfumeImageUrl(url) {
  const preview = document.getElementById('admin-celeb-perfume-image-preview');
  if (preview && url) preview.src = url;
}

async function handleAdminCelebImageUpload(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const nameEl = document.getElementById('admin-celeb-image-file-name');
    if (nameEl) nameEl.innerText = file.name;
    try {
      showToast('Compressing & loading celebrity portrait... 📸', 'info');
      const result = await processImageFile(file, 900, 900, 0.85);
      if (result && result.dataUrl) {
        document.getElementById('admin-celeb-input-image-url').value = result.dataUrl;
        const preview = document.getElementById('admin-celeb-image-preview');
        if (preview) preview.src = result.dataUrl;
        showToast('Celebrity portrait loaded! ✨', 'success');
      }
    } catch (err) {
      console.warn('Admin celeb image error:', err);
      showToast('Failed to process celebrity portrait', 'error');
    }
  }
}

async function handleAdminCelebPerfumeImageUpload(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const nameEl = document.getElementById('admin-celeb-perfume-image-file-name');
    if (nameEl) nameEl.innerText = file.name;
    try {
      showToast('Compressing & loading perfume photo... 🧴', 'info');
      const result = await processImageFile(file, 900, 900, 0.85);
      if (result && result.dataUrl) {
        document.getElementById('admin-celeb-input-perfume-image-url').value = result.dataUrl;
        const preview = document.getElementById('admin-celeb-perfume-image-preview');
        if (preview) preview.src = result.dataUrl;
        showToast('Perfume photo loaded! ✨', 'success');
      }
    } catch (err) {
      console.warn('Admin celeb perfume image error:', err);
      showToast('Failed to process perfume photo', 'error');
    }
  }
}

function handleSaveCelebrityWardrobe(e) {
  e.preventDefault();
  const id = document.getElementById('admin-celeb-input-id').value;
  const name = document.getElementById('admin-celeb-input-name').value.trim();
  const tagline = document.getElementById('admin-celeb-input-tagline').value.trim();
  const badge = document.getElementById('admin-celeb-input-badge').value.trim() || '👑 Scent Signature';
  const rating = document.getElementById('admin-celeb-select-rating').value;
  const ratingCount = document.getElementById('admin-celeb-input-reviews').value.trim() || '2.4k+ Fans';
  const image = document.getElementById('admin-celeb-input-image-url').value.trim() || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600';
  const perfumeImage = document.getElementById('admin-celeb-input-perfume-image-url').value.trim() || 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600';
  const perfumeName = document.getElementById('admin-celeb-input-perfume-name').value.trim();
  const perfumeBrand = document.getElementById('admin-celeb-input-perfume-brand').value.trim() || 'Haute Parfumerie';
  const subtitle = document.getElementById('admin-celeb-input-subtitle').value.trim();
  const quote = document.getElementById('admin-celeb-input-quote').value.trim();
  const regularPrice = Number(document.getElementById('admin-celeb-input-regular-price').value) || 0;
  const comboPrice = Number(document.getElementById('admin-celeb-input-combo-price').value) || 0;
  let savings = Number(document.getElementById('admin-celeb-input-savings').value) || 0;
  if (!savings && regularPrice > comboPrice) {
    savings = regularPrice - comboPrice;
  }

  let list = getAdminCelebrityWardrobes();

  if (id) {
    const idx = list.findIndex(c => c.id === id);
    if (idx !== -1) {
      list[idx] = {
        ...list[idx],
        name,
        tagline,
        badge,
        rating,
        ratingCount,
        image,
        perfumeImage,
        perfumeName,
        perfumeBrand,
        subtitle,
        quote,
        regularPrice,
        comboPrice,
        savings
      };
      showToast(`Celebrity Wardrobe for "${name}" updated successfully! ✨`, 'success');
    }
  } else {
    const newId = 'celeb-' + Date.now();
    list.push({
      id: newId,
      name,
      tagline,
      badge,
      rating,
      ratingCount,
      image,
      perfumeImage,
      perfumeName,
      perfumeBrand,
      subtitle,
      quote,
      regularPrice,
      comboPrice,
      savings
    });
    showToast(`New Celebrity Wardrobe for "${name}" published! 🌟`, 'success');
  }

  saveAdminCelebrityWardrobes(list);
  closeCelebrityWardrobeModal();
  renderAdminCelebrityWardrobes();
}

function deleteCelebrityWardrobe(celebId) {
  let list = getAdminCelebrityWardrobes();
  const item = list.find(c => c.id === celebId);
  if (!item) return;

  if (confirm(`Are you sure you want to remove the celebrity wardrobe for "${item.name}"?`)) {
    list = list.filter(c => c.id !== celebId);
    saveAdminCelebrityWardrobes(list);
    renderAdminCelebrityWardrobes();
    showToast(`Celebrity Wardrobe for "${item.name}" removed`, 'info');
  }
}

function resetCelebrityWardrobesToDefault() {
  if (confirm('Reset all celebrity wardrobes to standard royal presets?')) {
    saveAdminCelebrityWardrobes(DEFAULT_STAFF_CELEBRITY_WARDROBES);
    renderAdminCelebrityWardrobes();
    showToast('Celebrity Wardrobes reset to original presets ✨', 'success');
  }
}

// =========================================================================
// RENDER BACKEND & MONGODB ATLAS CLOUD SYNC OPERATIONS (STAFF ADMIN)
// =========================================================================
function initAdminRenderCloudDesk() {
  const input = document.getElementById('admin-render-url-input');
  if (input) {
    input.value = localStorage.getItem('perfume_backend_url') || '';
  }
  updateAdminRenderCloudStatus();
}

async function updateAdminRenderCloudStatus() {
  const badge = document.getElementById('admin-render-status-badge');
  if (!badge) return;

  if (typeof MongoSync !== 'undefined') {
    const isOk = await MongoSync.checkHealth();
    if (isOk) {
      badge.className = 'px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1.5';
      badge.innerHTML = `<i class="fa-solid fa-cloud text-emerald-400"></i> Render API & MongoDB Atlas Online 🍃`;
    } else {
      const url = MongoSync.getBackendUrl();
      if (!url && !window.location.origin.includes('localhost')) {
        badge.className = 'px-3 py-1 text-xs rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold flex items-center gap-1.5';
        badge.innerHTML = `<i class="fa-solid fa-server text-amber-400"></i> Local Storage Mode (Enter Render URL)`;
      } else {
        badge.className = 'px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-300 border border-red-500/40 font-bold flex items-center gap-1.5';
        badge.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-red-400"></i> Connection Failed / Offline`;
      }
    }
  }
}

async function saveAndTestAdminRenderBackend() {
  const input = document.getElementById('admin-render-url-input');
  const url = input?.value?.trim() || '';
  if (typeof MongoSync !== 'undefined') {
    MongoSync.setBackendUrl(url);
    showToast('Pinging Render API backend & MongoDB Atlas...', 'info');
    const ok = await MongoSync.checkHealth();
    if (ok) {
      showToast('Successfully connected to Render & MongoDB Atlas! 🍃', 'success');
    } else {
      showToast('Could not connect to URL. Ensure Render service is deployed & awake.', 'error');
    }
    updateAdminRenderCloudStatus();
  }
}

async function syncLocalCatalogToMongoAtlasAdmin() {
  if (typeof MongoSync === 'undefined' || !MongoSync.pushProductsBulk) {
    showToast('Sync engine not loaded', 'error');
    return;
  }
  const currentCatalog = JSON.parse(localStorage.getItem('perfumes_catalog') || '[]');
  if (!currentCatalog.length) {
    showToast('No products in catalog to push', 'error');
    return;
  }
  try {
    showToast(`Uploading ${currentCatalog.length} products to MongoDB Atlas...`, 'info');
    await MongoSync.pushProductsBulk(currentCatalog);
    showToast(`✅ Successfully uploaded ${currentCatalog.length} products to MongoDB Atlas! 🍃`, 'success');
  } catch (err) {
    showToast('Push failed: ' + err.message, 'error');
  }
}

async function syncCatalogFromMongoAtlasAdmin() {
  if (typeof MongoSync === 'undefined') return;
  try {
    showToast('Pulling latest catalog from MongoDB Atlas...', 'info');
    const remoteProducts = await MongoSync.syncProducts();
    if (remoteProducts && remoteProducts.length > 0) {
      localStorage.setItem('perfumes_catalog', JSON.stringify(remoteProducts));
      renderAdminInventory();
      showToast(`✅ Loaded ${remoteProducts.length} products from MongoDB Atlas! 🍃`, 'success');
    } else {
      showToast('No remote products found or backend unreachable.', 'info');
    }
  } catch (err) {
    showToast('Pull failed: ' + err.message, 'error');
  }
}

// =========================================================================
// STAFF ADMIN: HERO BANNERS & TRANSPARENCY CONTROLLER
// =========================================================================
let staffActiveBannerSection = 'All';

function getStaffHeroBanners() {
  const saved = localStorage.getItem('perfumes_hero_banners');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.All) && Array.isArray(parsed.Women) && Array.isArray(parsed.Men)) {
        return parsed;
      }
    } catch (e) {}
  }
  return {
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
}

function getStaffHeroBannerOpacity() {
  return parseInt(localStorage.getItem('perfumes_hero_opacity') || '55', 10);
}

function handleStaffHeroOpacityChange(val) {
  val = parseInt(val, 10);
  const valEl = document.getElementById('staff-hero-opacity-val');
  const sliderEl = document.getElementById('staff-hero-opacity-slider');
  if (valEl) valEl.textContent = val + '%';
  if (sliderEl) sliderEl.value = val;
  localStorage.setItem('perfumes_hero_opacity', val.toString());
  document.documentElement.style.setProperty('--hero-opacity', (val / 100).toString());
  if (typeof MongoSync !== 'undefined' && MongoSync.pushSettings) {
    MongoSync.pushSettings();
  }
}

function setStaffHeroOpacityPreset(val) {
  handleStaffHeroOpacityChange(val);
}

function switchStaffBannerManagerSection(sec) {
  staffActiveBannerSection = sec;
  ['all', 'women', 'men'].forEach(s => {
    const btn = document.getElementById(`staff-banner-sec-${s}-btn`);
    if (btn) {
      if (s === sec.toLowerCase()) {
        btn.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-[#C59B27] text-[#120D0A] shadow-sm';
      } else {
        btn.className = 'px-4 py-2 rounded-xl text-xs font-semibold bg-[#231B17] border border-gray-700 text-gray-300 hover:text-white';
      }
    }
  });
  renderStaffHeroBanners();
}

function renderStaffHeroBanners() {
  const currentOpacity = getStaffHeroBannerOpacity();
  const valEl = document.getElementById('staff-hero-opacity-val');
  const sliderEl = document.getElementById('staff-hero-opacity-slider');
  if (valEl) valEl.textContent = currentOpacity + '%';
  if (sliderEl) sliderEl.value = currentOpacity;

  const container = document.getElementById('staff-hero-banners-list-grid');
  if (!container) return;

  const banners = getStaffHeroBanners();
  const slides = banners[staffActiveBannerSection] || [];

  if (slides.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center space-y-2 bg-[#1C1511] rounded-2xl border border-gray-800 p-6">
        <p class="text-sm text-gray-400">No slides configured for ${staffActiveBannerSection} section.</p>
        <button onclick="openStaffHeroBannerModal()" class="bg-[#C59B27] text-[#120D0A] px-4 py-2 rounded-xl text-xs font-bold uppercase">Add First Slide</button>
      </div>
    `;
    return;
  }

  container.innerHTML = slides.map((slide, idx) => `
    <div class="bg-[#1C1511] rounded-3xl border border-gray-800 overflow-hidden space-y-3 flex flex-col justify-between shadow-md">
      <div class="relative aspect-video w-full bg-black/40 overflow-hidden">
        <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover">
        <span class="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/80 text-[#C59B27] border border-[#C59B27]/40 shadow-sm">
          Slide #${idx + 1} (${staffActiveBannerSection})
        </span>
      </div>

      <div class="p-4 space-y-2 flex-1">
        <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-[#231B17] border border-gray-700 text-gray-300 inline-block truncate max-w-full">
          ${slide.badge}
        </span>
        <h4 class="font-heading text-sm font-bold text-white uppercase">${slide.title}</h4>
        <p class="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">${slide.desc}</p>
      </div>

      <div class="p-4 pt-0 flex items-center justify-between border-t border-gray-800/80">
        <button onclick="openStaffHeroBannerModal(${idx})" class="text-xs text-[#C59B27] font-semibold hover:underline flex items-center gap-1">
          <i class="fa-solid fa-pen-to-square text-[10px]"></i> Edit Slide
        </button>
        <button onclick="deleteStaffHeroBannerSlide('${staffActiveBannerSection}', ${idx})" class="text-xs text-red-400 hover:text-red-300 flex items-center gap-1">
          <i class="fa-solid fa-trash text-[10px]"></i> Delete
        </button>
      </div>
    </div>
  `).join('');
}

function openStaffHeroBannerModal(editIndex = -1) {
  const modal = document.getElementById('staff-hero-banner-modal');
  const title = document.getElementById('staff-hero-banner-modal-title');
  const indexInput = document.getElementById('staff-hb-edit-index');
  const sectionSelect = document.getElementById('staff-hb-section');
  const imageInput = document.getElementById('staff-hb-image');
  const badgeInput = document.getElementById('staff-hb-badge');
  const titleInput = document.getElementById('staff-hb-title');
  const descInput = document.getElementById('staff-hb-desc');

  sectionSelect.value = staffActiveBannerSection;
  indexInput.value = editIndex;

  if (editIndex >= 0) {
    const banners = getStaffHeroBanners();
    const slide = (banners[staffActiveBannerSection] || [])[editIndex];
    if (slide) {
      title.textContent = `Edit Slide #${editIndex + 1} (${staffActiveBannerSection})`;
      imageInput.value = slide.image || '';
      badgeInput.value = slide.badge || '';
      titleInput.value = slide.title || '';
      descInput.value = slide.desc || '';
      previewStaffHeroBannerImage(slide.image || '');
    }
  } else {
    title.textContent = `Add Hero Banner Slide (${staffActiveBannerSection})`;
    document.getElementById('staff-hero-banner-form').reset();
    sectionSelect.value = staffActiveBannerSection;
    indexInput.value = -1;
    clearStaffHeroBannerImage();
  }

  modal.classList.remove('hidden');
}

function closeStaffHeroBannerModal() {
  const modal = document.getElementById('staff-hero-banner-modal');
  if (modal) modal.classList.add('hidden');
}

function previewStaffHeroBannerImage(url) {
  const previewBox = document.getElementById('staff-hb-image-preview-box');
  const previewImg = document.getElementById('staff-hb-preview-img');
  if (url && url.trim().length > 5) {
    previewImg.src = url;
    previewBox.classList.remove('hidden');
  } else {
    previewBox.classList.add('hidden');
  }
}

function clearStaffHeroBannerImage() {
  document.getElementById('staff-hb-image').value = '';
  document.getElementById('staff-hb-image-file').value = '';
  document.getElementById('staff-hb-file-label').textContent = 'Upload Banner';
  document.getElementById('staff-hb-image-preview-box').classList.add('hidden');
}

async function handleStaffHeroBannerFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const label = document.getElementById('staff-hb-file-label');
  label.textContent = 'Compressing...';

  try {
    const result = await processImageFile(file, 1600, 1000, 0.82);
    document.getElementById('staff-hb-image').value = result.dataUrl;
    label.textContent = file.name;
    previewStaffHeroBannerImage(result.dataUrl);
    showToast('Banner Compressed Successfully');
  } catch (err) {
    label.textContent = 'Upload Banner';
    showToast(err.message, 'error');
  }
}

function handleStaffHeroBannerSubmit(event) {
  event.preventDefault();
  const section = document.getElementById('staff-hb-section').value;
  const editIndex = parseInt(document.getElementById('staff-hb-edit-index').value, 10);
  const image = document.getElementById('staff-hb-image').value.trim();
  const badge = document.getElementById('staff-hb-badge').value.trim();
  const title = document.getElementById('staff-hb-title').value.trim();
  const desc = document.getElementById('staff-hb-desc').value.trim();

  if (!image) {
    showToast('Please provide a banner photograph', 'error');
    return;
  }

  const banners = getStaffHeroBanners();
  if (!banners[section]) banners[section] = [];

  const slideData = { image, badge, title, desc };

  if (editIndex >= 0 && editIndex < banners[section].length) {
    banners[section][editIndex] = slideData;
  } else {
    banners[section].push(slideData);
  }

  localStorage.setItem('perfumes_hero_banners', JSON.stringify(banners));
  if (typeof MongoSync !== 'undefined' && MongoSync.pushHeroBanners) {
    MongoSync.pushHeroBanners(banners);
  }

  closeStaffHeroBannerModal();
  renderStaffHeroBanners();
  showToast('Hero Banner Slide Saved & Synced');
}

function deleteStaffHeroBannerSlide(section, index) {
  if (!confirm(`Are you sure you want to delete this slide from ${section}?`)) return;

  const banners = getStaffHeroBanners();
  if (banners[section] && banners[section][index]) {
    banners[section].splice(index, 1);
    localStorage.setItem('perfumes_hero_banners', JSON.stringify(banners));
    if (typeof MongoSync !== 'undefined' && MongoSync.pushHeroBanners) {
      MongoSync.pushHeroBanners(banners);
    }
    renderStaffHeroBanners();
  }
}

// =========================================================================
// 3D ORBIT GLOBE & VIDEO SHOWCASE CONTROLLER (STAFF ADMIN)
// =========================================================================
const DEFAULT_STAFF_VIDEO_SETTINGS = {
  placement: 'section',
  videoSrc: 'videos/animo-orbit-globe-720p.mp4',
  badge: '🌍 DIRECT GLOBAL SOURCING • DUBAI TO PUNE',
  title: 'The World’s Rarest Oils & Arabian Extraits',
  desc: 'Ethically sourced from aged Cambodian oud reserves, French Grasse rose fields, pure Mysore sandalwood forests, and Royal Taif distilleries. 100% uncut luxury extraits bottled with precision craftsmanship.',
  overlayOpacity: 95,
  autoplay: true,
  loop: true,
  muted: true
};

function getStoredStaffVideoSettings() {
  const saved = localStorage.getItem('perfumes_video_settings');
  if (saved) {
    try {
      return { ...DEFAULT_STAFF_VIDEO_SETTINGS, ...JSON.parse(saved) };
    } catch (e) {}
  }
  return { ...DEFAULT_STAFF_VIDEO_SETTINGS };
}

function parseYouTubeId(url) {
  if (!url || typeof url !== 'string') return null;
  url = url.trim();
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function updateStaffVideoPreview(src) {
  src = (src || '').trim();
  const videoEl = document.getElementById('staff-preview-video');
  const iframeEl = document.getElementById('staff-preview-youtube-iframe');
  const labelEl = document.getElementById('staff-preview-source-label');
  const ytId = parseYouTubeId(src);

  if (ytId) {
    if (videoEl) {
      videoEl.pause();
      videoEl.classList.add('hidden');
    }
    if (iframeEl) {
      iframeEl.classList.remove('hidden');
      const embedUrl = `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=1&rel=0&modestbranding=1`;
      if (iframeEl.src !== embedUrl) {
        iframeEl.src = embedUrl;
      }
    }
    if (labelEl) labelEl.textContent = `📺 YouTube Embed: ${ytId}`;
  } else {
    if (iframeEl) {
      iframeEl.src = '';
      iframeEl.classList.add('hidden');
    }
    if (videoEl) {
      videoEl.classList.remove('hidden');
      if (src && (!videoEl.src.endsWith(src))) {
        videoEl.src = src;
      }
      videoEl.play().catch(() => {});
    }
    if (labelEl) labelEl.textContent = `🎥 MP4 File: ${src.split('/').pop() || src}`;
  }
}

function handleStaffVideoSrcChange(val) {
  updateStaffVideoPreview(val);
}

function setStaffVideoPreset(src) {
  const srcInp = document.getElementById('staff-video-src');
  if (srcInp) {
    srcInp.value = src;
    updateStaffVideoPreview(src);
  }
}

function initStaffVideoSettings() {
  const cfg = getStoredStaffVideoSettings();
  
  // Placement radio
  const radios = document.querySelectorAll('input[name="staff_video_placement"]');
  radios.forEach(r => {
    r.checked = (r.value === cfg.placement);
  });
  updateStaffPlacementCardStyles(cfg.placement);

  // Inputs
  const badgeInp = document.getElementById('staff-video-badge');
  const titleInp = document.getElementById('staff-video-title');
  const descInp = document.getElementById('staff-video-desc');
  const srcInp = document.getElementById('staff-video-src');
  const overlaySlider = document.getElementById('staff-video-overlay-slider');
  const overlayVal = document.getElementById('staff-video-overlay-val');
  const previewOverlay = document.getElementById('staff-preview-overlay');

  if (badgeInp) badgeInp.value = cfg.badge;
  if (titleInp) titleInp.value = cfg.title;
  if (descInp) descInp.value = cfg.desc;
  if (srcInp) srcInp.value = cfg.videoSrc;
  if (overlaySlider) overlaySlider.value = cfg.overlayOpacity;
  if (overlayVal) overlayVal.textContent = cfg.overlayOpacity + '%';
  if (previewOverlay) previewOverlay.style.opacity = (cfg.overlayOpacity / 100).toString();

  updateStaffVideoPreview(cfg.videoSrc);

  // Active Placement Badge
  const badge = document.getElementById('staff-video-active-placement-badge');
  if (badge) {
    const labels = {
      section: 'Active: Dedicated Section',
      hero: 'Active: Hero Background',
      floating: 'Active: Floating Widget',
      both_section_floating: 'Active: Section + Floating',
      none: 'Active: Hidden Globally'
    };
    badge.textContent = labels[cfg.placement] || 'Active: Section';
  }
}

function updateStaffPlacementCardStyles(placement) {
  document.querySelectorAll('.staff-video-placement-card').forEach(card => {
    if (card.dataset.val === placement) {
      card.className = 'p-3.5 rounded-2xl border border-[#C59B27] bg-[#C59B27]/10 cursor-pointer flex items-start gap-3 transition-all hover:border-[#C59B27] staff-video-placement-card';
    } else {
      card.className = 'p-3.5 rounded-2xl border border-gray-700 bg-[#120D0A] cursor-pointer flex items-start gap-3 transition-all hover:border-[#C59B27] staff-video-placement-card';
    }
  });
}

function handleStaffVideoPlacementChange(val) {
  updateStaffPlacementCardStyles(val);
  const badge = document.getElementById('staff-video-active-placement-badge');
  if (badge) {
    const labels = {
      section: 'Active: Dedicated Section',
      hero: 'Active: Hero Background',
      floating: 'Active: Floating Widget',
      both_section_floating: 'Active: Section + Floating',
      none: 'Active: Hidden Globally'
    };
    badge.textContent = labels[val] || val;
  }
}

function handleStaffVideoOverlayChange(val) {
  val = parseInt(val, 10);
  const valEl = document.getElementById('staff-video-overlay-val');
  const previewVideo = document.getElementById('staff-preview-video');
  if (valEl) valEl.textContent = val + '%';
  if (previewVideo) previewVideo.style.opacity = (val / 100).toString();
}

function saveStaffVideoSettings() {
  const placement = (document.querySelector('input[name="staff_video_placement"]:checked') || {}).value || 'section';
  const badge = (document.getElementById('staff-video-badge')?.value || DEFAULT_STAFF_VIDEO_SETTINGS.badge).trim();
  const title = (document.getElementById('staff-video-title')?.value || DEFAULT_STAFF_VIDEO_SETTINGS.title).trim();
  const desc = (document.getElementById('staff-video-desc')?.value || DEFAULT_STAFF_VIDEO_SETTINGS.desc).trim();
  const videoSrc = (document.getElementById('staff-video-src')?.value || DEFAULT_STAFF_VIDEO_SETTINGS.videoSrc).trim();
  const overlayOpacity = parseInt(document.getElementById('staff-video-overlay-slider')?.value || '95', 10);

  const videoSettings = {
    placement,
    badge,
    title,
    desc,
    videoSrc,
    overlayOpacity,
    autoplay: true,
    loop: true,
    muted: true
  };

  localStorage.setItem('perfumes_video_settings', JSON.stringify(videoSettings));
  
  if (typeof MongoSync !== 'undefined' && MongoSync.pushSettings) {
    MongoSync.pushSettings();
  }

  showToast('🌍 Video & Orbit Globe Placement Saved & Published!', 'success');
}


