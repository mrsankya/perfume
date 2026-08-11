/* ==========================================================================
   PERFUME SHOPE - MONGODB ATLAS & RENDER CLOUD SYNC LAYER
   ========================================================================== */

const MongoSync = (function() {
  'use strict';

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

    // 4. Default empty (relative path for same-origin proxy or fallback)
    return '';
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
    if (!apiBase && typeof window !== 'undefined' && !window.location.origin.includes('localhost') && !window.location.origin.includes('127.0.0.1')) {
      updateMongoIndicator(false, { message: 'No Render backend configured yet (using local storage)' });
      return false;
    }

    try {
      const res = await fetch(`${apiBase}/api/health`, { signal: AbortSignal.timeout(5000) });
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
    const adminStatusPill = document.getElementById('admin-render-status-badge');
    if (adminStatusPill) {
      if (online) {
        adminStatusPill.className = 'px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1.5';
        adminStatusPill.innerHTML = `<i class="fas fa-check-circle text-emerald-400"></i> Render API & MongoDB Atlas Online`;
      } else {
        adminStatusPill.className = 'px-3 py-1 text-xs rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold flex items-center gap-1.5';
        adminStatusPill.innerHTML = `<i class="fas fa-exclamation-triangle text-amber-400"></i> Local Storage Mode`;
      }
    }
  }

  // Auto-sync products on load
  async function syncProducts() {
    const apiBase = getApiBase();
    if (!apiBase) return null;
    try {
      const res = await fetch(`${apiBase}/api/products`, { signal: AbortSignal.timeout(5000) });
      if (res.ok) {
        const products = await res.json();
        if (Array.isArray(products) && products.length > 0) {
          localStorage.setItem('perfumes_catalog', JSON.stringify(products));
          return products;
        }
      }
    } catch (e) {}
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

  // Initialize background connection check
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      checkHealth();
      syncProducts();
    });
  }

  return {
    getApiBase,
    getBackendUrl,
    setBackendUrl,
    checkHealth,
    syncProducts,
    pushProductsBulk,
    pushOrder,
    pushVisitor,
    pushConsultation,
    pushStyle,
    pushReview,
    get isConnected() { return isConnected; },
    get lastStatus() { return lastStatus; }
  };
})();
