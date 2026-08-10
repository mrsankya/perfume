# Perfume Shope - Project Memory & Context

## Project Overview
- **Project Name**: Perfume Shope (India's Premier Luxury Parfumerie & Attar Boutique)
- **Repository**: Sakshi-patil48/perfume-shopee
- **Tech Stack**: Vanilla HTML5, Tailwind CSS CDN, Vanilla JavaScript (ES6+), FontAwesome Icons, Google Fonts (Cinzel, Outfit, Teko)
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

## E-Commerce & Customer Features
1. **🛒 Shopping Cart & Slide-Over Drawer**:
   - Add to Cart, Buy Now, Quantity controls (+ / - / delete).
   - Live Subtotal & GST breakdown in INR (₹).
   - Coupon Discount Codes (`ROYAL500` for ₹500 OFF, `MARVEL10`, `FEMME10`).
2. **📍 2 Address Selection Options**:
   - **Automatic Precise GPS Address**: Pinpoint accuracy using browser Geolocation API & Reverse Geocoding to auto-fill Pin Code, City, State, and exact deliverable coordinates.
   - **Manual Address Entry**: Flat, Building, Street, City, State, and 6-digit PIN Code.
3. **🔑 User Profile & Google Login**:
   - One-Tap Google Sign-In simulation with user avatar, name, and email.
   - VIP Royalty Points (750 Points Balance) & Attar Club Membership tier.
4. **📞 Visitor Tracking & Admin Promotional Calling List**:
   - **Welcome Lead Gift Popup**: Unlocks ₹500 discount voucher on first order in exchange for customer Name, WhatsApp number, and City.
   - Captures visitor browsing leads directly into Admin and Super Admin.
   - **Admin Calling Dashboard**: 1-Click Phone Call button, 1-Click WhatsApp promotional template button, Call Status Selector (`New Lead`, `Call Pending`, `Called - Interested`, `Order Placed`, `Do Not Call`), and Export Calling List to CSV.
5. **💳 1-Click Multi-Payment Checkout**:
   - WhatsApp Direct Order
   - Instant UPI QR Payment (GPay, PhonePe, Paytm)
   - Cash on Delivery / Boutique Store Pickup

## Dynamic Dual UI Themes
- 🌸 **Women's Luxe Theme**: Soft Rose Gold, Nude Cream, Champagne, Delina & Rose Slides.
- ⚡ **Men's Marvel Titanium Theme**: Obsidian Carbon, Marvel Crimson, Arc Reactor Cyan, Creed Aventus & Hawas Beast-Mode Slides.
- 👑 **All / Unisex Luxury Mode**: Royal Gold & Warm Espresso.

## Role-Based Access Control (RBAC)
- **👑 Super Admin (Direct URL Only)**: `superadmin.html` (Passwords: `superadmin` or `9822725265`)
- **👔 Regular Staff Admin**: `admin.html` (Password: `admin`)
