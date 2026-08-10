# Perfume Shope - Project Memory & Context

## Project Overview
- **Project Name**: Perfume Shope (India's Premier Luxury Parfumerie & Attar Boutique)
- **Repository**: Sakshi-patil48/perfume-shopee
- **Tech Stack**: Vanilla HTML5, Tailwind CSS CDN, Vanilla JavaScript (ES6+), FontAwesome Icons, Google Fonts (Cinzel, Outfit)
- **Currency**: Indian Rupees (INR ₹)
- **Deployment Platform**: Cloudflare Pages
- **Target Audience / Purpose**: Indian fragrance lovers looking for 100% authentic imported Arabian extraits, designer perfumes, and pure royal Indian attars (Dehn Al Oud, Mysore Sandalwood, Kashmiri Kesar, Kannauj Gulab) with physical boutique pickup in Pune, Maharashtra, and WhatsApp instant booking.

## Live Deployment Links
- **Storefront URL**: [https://perfume-shopee.pages.dev](https://perfume-shopee.pages.dev)
- **Regular Admin URL**: [https://perfume-shopee.pages.dev/admin.html](https://perfume-shopee.pages.dev/admin.html)
- **Super Admin URL (Hidden / URL-Only Navigation)**: [https://perfume-shopee.pages.dev/superadmin.html](https://perfume-shopee.pages.dev/superadmin.html)
- **Cloudflare Account ID**: `0fbadd932cb4ec64fe049a68da13c315`
- **Cloudflare Pages Project Name**: `perfume-shopee`
- **Production Branch**: `main`

## Role-Based Access Control (RBAC)

### 👑 Super Admin (Owner Level)
- **Access Route**: Direct URL ONLY (`superadmin.html`). *No public button on website.*
- **Master Passwords**: `superadmin` or `9822725265` (customizable in master settings)
- **Super Admin Features**:
  1. **👥 Staff & Admin Access Management**: Create, edit, and revoke staff / manager accounts with custom PINs.
  2. **📊 Financial & Sales Intelligence**: Catalog valuation in INR, WhatsApp inquiry pipeline, conversion rate, and brand breakdown.
  3. **📦 Master Inventory & Bulk Pricing**: Add / edit / delete fragrances and apply bulk discounts (-5%, -10%, etc.).
  4. **📋 Booking Leads Audit**: Complete log of customer WhatsApp reservations with status updates and export to CSV.
  5. **⚙️ Master Store Configuration**: WhatsApp API endpoint, UPI VPA ID, GST compliance, store address/timings, and maintenance mode toggle.
  6. **💾 Full Database Backup & Restore**: One-click JSON export of complete store data, JSON file import / restore, and factory hard reset.
  7. **📜 Security Audit Logs**: Real-time trail of all administrative and master operations.

### 👔 Regular Admin (Staff / Boutique Manager)
- **Access Route**: `admin.html` (or link in footer)
- **Staff Passwords**: `admin` or staff PINs created by Super Admin
- **Staff Features**: Daily inventory management, stock status toggle (In Stock / Out of Stock), WhatsApp lead processing.

## 1-Click Deployment Files
- **[`deploy.bat`](file:///C:/Users/sanke/perfume-shopee-main/deploy.bat)**: Double-click to instantly deploy any local changes to Cloudflare Pages.
- **[`deploy_cloudflare.bat`](file:///C:/Users/sanke/perfume-shopee-main/deploy_cloudflare.bat)**: Interactive deployer script.
