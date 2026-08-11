/* ==========================================================================
   PERFUME SHOPE - MONGODB ATLAS & RENDER CLOUD SYNC LAYER
   ========================================================================== */

const MongoSync = (function() {
  'use strict';

  // Production Default Render URL
  const DEFAULT_RENDER_URL = 'https://perfume-rujn.onrender.com';

  // Get dynamic API base URL
  function getApiBase() {
    // 1. Custom Render backend URL stored in localStorage
    const savedUrl = localStorage.getItem('perfume_backend_url');
    if (savedUrl && savedUrl.trim()) {
      return savedUrl.trim().replace(/\/+$/, '');
    }

    // 2. Window global variable override
    if (typeof window !== 'undefined' && window.PERFUME_BACKEND_URL) {
      return window.PERFUME_BACKEND_URL.replace(/\/+$/, '');
    }

    // 3. Localhost development
    if (typeof window !== 'undefined') {
      const origin = window.location.origin || '';
      if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
        return window.location.port === '5000' ? '' : 'http://localhost:5000';
      }
    }

    // 4. Default live Render production backend URL
    return DEFAULT_RENDER_URL;
  }

  function setBackendUrl(url) {
    if (url && typeof url === 'string') {
      const cleanUrl = url.trim().replace(/\/+$/, '');
      localStorage.setItem('perfume_backend_url', cleanUrl);
      console.log('✅ Render Backend URL updated:', cleanUrl);
      checkHealth();
    } else {
      localStorage.removeItem('perfume_backend_url');
      console.log('🔄 Render Backend URL reset to default');
      checkHealth();
    }
  }

  function getBackendUrl() {
    return localStorage.getItem('perfume_backend_url') || getApiBase();
  }

  let isConnected = false;
  let lastStatus = null;

  async function checkHealth() {
    const apiBase = getApiBase();
    if (!apiBase) {
      updateMongoIndicator(false, { message: 'No backend configured' });
      return false;
    }

    try {
      const res = await fetch(`${apiBase}/api/health`, { signal: AbortSignal.timeout(6000) });
      if (res.ok) {
        const data = await res.json();
        isConnected = data.status === 'online' || data.mongoConnected === true;
        lastStatus = data;
        updateMongoIndicator(true, data);
        return true;
      }
    } catch (e) {
      isConnected = false;
      updateMongoIndicator(false, { message: e.message });
    }
    return false;
  }

  function updateMongoIndicator(online, info) {
    const indicator = document.getElementById('mongo-atlas-badge');
    if (indicator) {
      if (online) {
        indicator.className = 'px-3 py-1 rounded-full text-xs font-bold bg-green-950/80 border border-green-500 text-green-300 flex items-center gap-1.5 shadow-md backdrop-blur-md';
        indicator.innerHTML = `<span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> <span>MongoDB Atlas: Live Cloud 🍃</span>`;
      } else {
        indicator.className = 'px-3 py-1 rounded-full text-xs font-bold bg-amber-950/80 border border-amber-500 text-amber-300 flex items-center gap-1.5 backdrop-blur-md';
        indicator.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400"></span> <span>Database: Local Resilient Storage</span>`;
      }
    }

    // Also update any admin backend status pill if present
    const adminStatusPill = document.getElementById('admin-render-status-badge') || document.getElementById('render-cloud-status-badge');
    if (adminStatusPill) {
      if (online) {
        adminStatusPill.className = 'px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1.5';
        adminStatusPill.innerHTML = `<i class="fa-solid fa-cloud text-emerald-400"></i> Render API & MongoDB Atlas Online 🍃`;
      } else {
        adminStatusPill.className = 'px-3 py-1 text-xs rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold flex items-center gap-1.5';
        adminStatusPill.innerHTML = `<i class="fa-solid fa-server text-amber-400"></i> Local Storage Mode`;
      }
    }
  }

  // Auto-sync products on load
  async function syncProducts() {
    const apiBase = getApiBase();
    if (!apiBase) return null;
    try {
      const res = await fetch(`${apiBase}/api/products`, { signal: AbortSignal.timeout(6000) });
      if (res.ok) {
        const products = await res.json();
        if (Array.isArray(products) && products.length > 0) {
          localStorage.setItem('perfumes_catalog', JSON.stringify(products));
          console.log(`🍃 Synced ${products.length} products from MongoDB Atlas Cloud`);

          // Live UI re-renders
          if (typeof setCatalogViewMode === 'function') {
            const mode = localStorage.getItem('perfumes_catalog_view_mode') || 'slider';
            setCatalogViewMode(mode);
          }
          if (typeof renderMasterInventory === 'function') renderMasterInventory();
          if (typeof renderInventoryTable === 'function') renderInventoryTable();
          if (typeof renderWizard === 'function') renderWizard();
          if (typeof renderDiscoveryBoxBuilder === 'function') renderDiscoveryBoxBuilder();
          return products;
        }
      }
    } catch (e) {
      console.warn('Could not sync products from MongoDB Atlas, using local cache:', e.message);
    }
    return null;
  }

  // Push single product (add or edit) directly to MongoDB Atlas
  async function pushProduct(product) {
    const apiBase = getApiBase();
    if (!apiBase) return null;
    try {
      const res = await fetch(`${apiBase}/api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
      if (res.ok) {
        console.log(`🍃 Product '${product.name}' pushed directly to MongoDB Atlas!`);
        return await res.json();
      }
    } catch (e) {
      console.warn('Failed to push product to MongoDB Atlas:', e.message);
    }
    return null;
  }

  // Delete single product directly from MongoDB Atlas
  async function deleteProduct(productId) {
    const apiBase = getApiBase();
    if (!apiBase) return null;
    try {
      const res = await fetch(`${apiBase}/api/products/${productId}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        console.log(`🍃 Product '${productId}' deleted from MongoDB Atlas!`);
        return await res.json();
      }
    } catch (e) {
      console.warn('Failed to delete product from MongoDB Atlas:', e.message);
    }
    return null;
  }

  // Push bulk local catalog to MongoDB Atlas
  async function pushProductsBulk(productsArray) {
    const apiBase = getApiBase();
    if (!apiBase) throw new Error('Render Backend URL is not configured.');
    const res = await fetch(`${apiBase}/api/products/bulk`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productsArray)
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Upload failed' }));
      throw new Error(err.error || 'Failed to bulk sync products');
    }
    return await res.json();
  }

  // Hero Banners Sync
  async function syncBanners() {
    const apiBase = getApiBase();
    if (!apiBase) return null;
    try {
      const res = await fetch(`${apiBase}/api/banners`, { signal: AbortSignal.timeout(6000) });
      if (res.ok) {
        const banners = await res.json();
        if (banners && typeof banners === 'object') {
          localStorage.setItem('perfumes_hero_banners', JSON.stringify(banners));
          if (typeof initHeroSlider === 'function') initHeroSlider();
          if (typeof renderHeroBannersManager === 'function') renderHeroBannersManager();
          return banners;
        }
      }
    } catch (e) {}
    return null;
  }

  async function pushBanners(banners) {
    const apiBase = getApiBase();
    if (!apiBase) return null;
    try {
      const res = await fetch(`${apiBase}/api/banners`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(banners)
      });
      if (res.ok) {
        console.log('🍃 Hero Banners synced to MongoDB Atlas!');
        return await res.json();
      }
    } catch (e) {
      console.warn('Failed to push hero banners to MongoDB:', e.message);
    }
    return null;
  }

  // Celebrity Wardrobes Sync
  async function syncCelebrities() {
    const apiBase = getApiBase();
    if (!apiBase) return null;
    try {
      const res = await fetch(`${apiBase}/api/celebrities`, { signal: AbortSignal.timeout(6000) });
      if (res.ok) {
        const list = await res.json();
        if (Array.isArray(list) && list.length > 0) {
          localStorage.setItem('perfumes_celebrity_wardrobes', JSON.stringify(list));
          if (typeof renderCelebrityWardrobes === 'function') renderCelebrityWardrobes();
          if (typeof renderSuperCelebrityWardrobes === 'function') renderSuperCelebrityWardrobes();
          if (typeof renderAdminCelebrityWardrobes === 'function') renderAdminCelebrityWardrobes();
          return list;
        }
      }
    } catch (e) {}
    return null;
  }

  async function pushCelebrities(list) {
    const apiBase = getApiBase();
    if (!apiBase) return null;
    try {
      const res = await fetch(`${apiBase}/api/celebrities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(list)
      });
      if (res.ok) {
        console.log('🍃 Celebrity Wardrobes synced to MongoDB Atlas!');
        return await res.json();
      }
    } catch (e) {
      console.warn('Failed to push celebrity wardrobes to MongoDB:', e.message);
    }
    return null;
  }

  // Push new order to MongoDB
  async function pushOrder(orderData) {
    const apiBase = getApiBase();
    if (!apiBase) return;
    try {
      await fetch(`${apiBase}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
    } catch (e) {
      console.warn('Queued order in local storage fallback:', e.message);
    }
  }

  // Push visitor lead to MongoDB
  async function pushVisitor(visitorData) {
    const apiBase = getApiBase();
    if (!apiBase) return;
    try {
      await fetch(`${apiBase}/api/visitors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visitorData)
      });
    } catch (e) {}
  }

  // Push VIP consultation to MongoDB
  async function pushConsultation(consultData) {
    const apiBase = getApiBase();
    if (!apiBase) return;
    try {
      await fetch(`${apiBase}/api/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(consultData)
      });
    } catch (e) {}
  }

  // Push UI visual style change to MongoDB
  async function pushStyle(styleName) {
    const apiBase = getApiBase();
    if (!apiBase) return;
    try {
      await fetch(`${apiBase}/api/style`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ style: styleName })
      });
    } catch (e) {}
  }

  // Push Review to MongoDB
  async function pushReview(reviewData) {
    const apiBase = getApiBase();
    if (!apiBase) return;
    try {
      await fetch(`${apiBase}/api/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData)
      });
    } catch (e) {}
  }

  // Background Wake-Up Ping for Render Free Tier
  async function wakeBackend() {
    const apiBase = getApiBase();
    if (!apiBase) return;
    try {
      fetch(`${apiBase}/healthz`, { mode: 'cors' }).catch(() => {});
    } catch (e) {}
  }

  // Initialize background connection check & silent wake-up
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      wakeBackend();
      checkHealth();
      syncProducts();
      syncBanners();
      syncCelebrities();
    });
  }

  return {
    getApiBase,
    getBackendUrl,
    setBackendUrl,
    checkHealth,
    syncProducts,
    pushProduct,
    deleteProduct,
    pushProductsBulk,
    syncBanners,
    pushBanners,
    syncCelebrities,
    pushCelebrities,
    pushOrder,
    pushVisitor,
    pushConsultation,
    pushStyle,
    pushReview,
    get isConnected() { return isConnected; },
    get lastStatus() { return lastStatus; }
  };
})();
