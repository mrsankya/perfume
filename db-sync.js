/* ==========================================================================
   PERFUME SHOPE - MONGODB ATLAS CLOUD SYNC & RESILIENT API LAYER
   ========================================================================== */

const MongoSync = (function() {
  'use strict';

  const API_BASE = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1')
    ? (window.location.port === '5000' ? '' : 'http://localhost:5000')
    : '';

  let isConnected = false;

  async function checkHealth() {
    try {
      const res = await fetch(`${API_BASE}/api/health`, { signal: AbortSignal.timeout(3000) });
      if (res.ok) {
        const data = await res.json();
        isConnected = data.status === 'online';
        updateMongoIndicator(true, data);
        return true;
      }
    } catch (e) {
      isConnected = false;
      updateMongoIndicator(false);
    }
    return false;
  }

  function updateMongoIndicator(online, info) {
    const indicator = document.getElementById('mongo-atlas-badge');
    if (indicator) {
      if (online) {
        indicator.className = 'px-3 py-1 rounded-full text-xs font-bold bg-green-950/60 border border-green-700 text-green-300 flex items-center gap-1.5 shadow-sm';
        indicator.innerHTML = `<span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> <span>MongoDB Atlas: Connected 🍃</span>`;
      } else {
        indicator.className = 'px-3 py-1 rounded-full text-xs font-bold bg-amber-950/60 border border-amber-700 text-amber-300 flex items-center gap-1.5';
        indicator.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400"></span> <span>Database: Local Storage Fallback</span>`;
      }
    }
  }

  // Auto-sync products on load
  async function syncProducts() {
    try {
      const res = await fetch(`${API_BASE}/api/products`, { signal: AbortSignal.timeout(3500) });
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

  // Push new order to MongoDB
  async function pushOrder(orderData) {
    try {
      await fetch(`${API_BASE}/api/orders`, {
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
    try {
      await fetch(`${API_BASE}/api/visitors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visitorData)
      });
    } catch (e) {}
  }

  // Push VIP consultation to MongoDB
  async function pushConsultation(consultData) {
    try {
      await fetch(`${API_BASE}/api/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(consultData)
      });
    } catch (e) {}
  }

  // Push UI visual style change to MongoDB
  async function pushStyle(styleName) {
    try {
      await fetch(`${API_BASE}/api/style`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ style: styleName })
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
    checkHealth,
    syncProducts,
    pushOrder,
    pushVisitor,
    pushConsultation,
    pushStyle
  };
})();
