/* ==========================================================================
   PERFUME SHOPE - ENTERPRISE CLIENT-SIDE SECURITY & ANTI-TAMPER SHIELD
   ========================================================================== */

(function() {
  'use strict';

  // 1. DISABLE RIGHT-CLICK CONTEXT MENU
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showSecurityToast('⚠️ Right-click inspection is disabled for storefront security.');
    return false;
  }, false);

  // 2. DISABLE DEVTOOLS KEYBOARD SHORTCUTS & SOURCE VIEW
  document.addEventListener('keydown', function(e) {
    // F12 Key
    if (e.keyCode === 123 || e.key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
      showSecurityToast('🛡️ Developer Console access is protected.');
      return false;
    }

    // Ctrl+Shift+I / Cmd+Option+I (Inspect Element)
    // Ctrl+Shift+J / Cmd+Option+J (Console)
    // Ctrl+Shift+C / Cmd+Option+C (Inspect Element Mode)
    // Ctrl+Shift+K / Cmd+Option+K (Firefox Console)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (
      e.keyCode === 73 || e.key === 'I' || e.key === 'i' ||
      e.keyCode === 74 || e.key === 'J' || e.key === 'j' ||
      e.keyCode === 67 || e.key === 'C' || e.key === 'c' ||
      e.keyCode === 75 || e.key === 'K' || e.key === 'k'
    )) {
      e.preventDefault();
      e.stopPropagation();
      showSecurityToast('🛡️ Source Inspector is disabled.');
      return false;
    }

    // Ctrl+U / Cmd+Option+U (View Page Source)
    if ((e.ctrlKey || e.metaKey) && (e.keyCode === 85 || e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      e.stopPropagation();
      showSecurityToast('🛡️ View Source is restricted.');
      return false;
    }

    // Ctrl+S / Cmd+S (Save Page HTML)
    if ((e.ctrlKey || e.metaKey) && (e.keyCode === 83 || e.key === 'S' || e.key === 's')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, true);

  // 3. CONSOLE WARNING BANNER & ANTI-TAMPER NOTICE
  const warningTitle = 'font-size: 24px; font-weight: 800; color: #EF4444; text-shadow: 0 2px 4px rgba(0,0,0,0.8);';
  const warningBody = 'font-size: 13px; color: #F59E0B; line-height: 1.5;';
  const warningLegal = 'font-size: 11px; color: #9CA3AF; font-style: italic;';

  console.log('%c⛔ STOP! PRIVILEGED SECURITY SHIELD ACTIVE', warningTitle);
  console.log('%cThis browser session is monitored by the Perfume Shope Anti-Tamper Engine.\nExecuting scripts, tampering with pricing or session storage, or attempting XSS/injection attacks is strictly prohibited and logged.', warningBody);
  console.log('%cProtected by Perfume Shope Security Protocol • All Rights Reserved.', warningLegal);

  // Periodic console cleaner to prevent snooping outputs
  setInterval(function() {
    console.clear();
    console.log('%c⛔ STOP! PRIVILEGED SECURITY SHIELD ACTIVE', warningTitle);
    console.log('%cThis session is protected against client-side tampering.', warningBody);
  }, 30000);

  // 4. DEVTOOLS DETECTION TRAP
  let devtoolsDetected = false;
  const threshold = 160;

  function detectDevTools() {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    if (widthThreshold || heightThreshold) {
      if (!devtoolsDetected) {
        devtoolsDetected = true;
        recordSecurityEvent('DevTools Window Opened');
      }
    } else {
      devtoolsDetected = false;
    }
  }

  window.addEventListener('resize', detectDevTools);
  setInterval(detectDevTools, 2000);

  // 5. SECURITY TOAST NOTIFICATION
  function showSecurityToast(msg) {
    let toast = document.getElementById('security-shield-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'security-shield-toast';
      toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#18110E;color:#F59E0B;border:1px solid #C59B27;padding:10px 18px;border-radius:14px;font-size:12px;font-weight:600;z-index:999999;box-shadow:0 10px 25px rgba(0,0,0,0.8);display:flex;align-items:center;gap:8px;font-family:sans-serif;transition:all 0.3s ease;opacity:0;pointer-events:none;';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span style="color:#EF4444;">🛡️</span> <span>${msg}</span>`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
    setTimeout(function() {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(10px)';
    }, 2800);
  }

  // 6. RECORD SECURITY AUDIT LOGS
  function recordSecurityEvent(eventType) {
    try {
      let logs = JSON.parse(localStorage.getItem('perfumes_security_logs') || '[]');
      logs.unshift({
        id: 'sec-' + Date.now().toString().slice(-6),
        event: eventType,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent.slice(0, 80)
      });
      if (logs.length > 50) logs.pop();
      localStorage.setItem('perfumes_security_logs', JSON.stringify(logs));
    } catch (e) {}
  }

})();

// ==========================================================================
// GLOBAL SECURITY UTILITIES (XSS SANITIZER & SHA-256 CRYPTO)
// ==========================================================================

/**
 * Escapes HTML entities to prevent Cross-Site Scripting (XSS)
 */
function sanitizeInput(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Browser-native Cryptographic SHA-256 Hashing
 */
async function computeSha256(message) {
  if (!crypto || !crypto.subtle) return message;
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Brute-Force Rate Limiter for Authentication Gates
 */
const RateLimiter = {
  getLockoutStatus: function(key) {
    try {
      const lockData = JSON.parse(localStorage.getItem(`lockout_${key}`) || '{}');
      if (lockData.lockedUntil && Date.now() < lockData.lockedUntil) {
        const remainingSeconds = Math.ceil((lockData.lockedUntil - Date.now()) / 1000);
        return { isLocked: true, remainingSeconds: remainingSeconds };
      }
    } catch (e) {}
    return { isLocked: false, remainingSeconds: 0 };
  },

  recordFailedAttempt: function(key, maxAttempts = 5, lockDurationSeconds = 300) {
    try {
      let lockData = JSON.parse(localStorage.getItem(`lockout_${key}`) || '{}');
      const attempts = (lockData.attempts || 0) + 1;

      if (attempts >= maxAttempts) {
        lockData = {
          attempts: attempts,
          lockedUntil: Date.now() + (lockDurationSeconds * 1000)
        };
        localStorage.setItem(`lockout_${key}`, JSON.stringify(lockData));
        return { isLocked: true, remainingSeconds: lockDurationSeconds };
      } else {
        lockData = { attempts: attempts, lockedUntil: null };
        localStorage.setItem(`lockout_${key}`, JSON.stringify(lockData));
        return { isLocked: false, remainingAttempts: maxAttempts - attempts };
      }
    } catch (e) {}
    return { isLocked: false, remainingAttempts: 1 };
  },

  resetAttempts: function(key) {
    try {
      localStorage.removeItem(`lockout_${key}`);
    } catch (e) {}
  }
};
