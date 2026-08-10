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
- **Admin Panel URL**: [https://perfume-shopee.pages.dev/admin.html](https://perfume-shopee.pages.dev/admin.html)
- **Cloudflare Account ID**: `0fbadd932cb4ec64fe049a68da13c315`
- **Cloudflare Pages Project Name**: `perfume-shopee`
- **Production Branch**: `main`

## Admin Panel Details
- **Access Route**: [`admin.html`](file:///C:/Users/sanke/perfume-shopee-main/admin.html) (or click "Admin" in header/footer)
- **Default Passwords**: `admin` or `9822725265` (customizable in store settings)
- **Key Admin Features**:
  1. **📦 Fragrance Inventory (CRUD)**: Add, edit, delete fragrances, update notes, accords, badges, image URLs, prices in ₹ INR, and 1-click toggle In-Stock / Out-of-Stock status.
  2. **📋 WhatsApp Leads / Inquiries Tracker**: Real-time log of customer reservations with customer name, brand, price, timestamp, and interactive status selector (Pending, Confirmed, Picked Up, Cancelled) + Export to CSV.
  3. **⚙️ Boutique & Store Settings**: Manage store name, tagline, WhatsApp booking number, support phone/email, address, store hours, top announcement banner, and admin password change.
  4. **🔄 Reset to Defaults**: 1-click restore to original 12 luxury perfumes.

## Indian Features & Architecture
1. **Indian Currency (₹)**: All prices formatted dynamically in INR (e.g. ₹2,899, ₹3,499, ₹13,499) with Indian numbering format.
2. **Indian Fragrance Catalog**: Curated luxury perfumes popular in India (Lattafa Khamrah, Rasasi Hawas & Oud Suprême, Afnan Turathi, Armaf Club De Nuit Intense, Ajmal Amir One Oud, Delina Exclusif, Mysore Chandan Royale, Tom Ford, Creed).
3. **Indian Olfactory Accords**:
   - 🌸 Kashmiri Gulab & Rose
   - 🪵 Royal Dehn Al Oud
   - 🍦 Warm Vanilla & Kesar
   - 🌲 Mysore Sandal & Woods
   - 🍋 Fresh Citrus & Monsoon Aqua
4. **Indian Occasion Scent Quiz**: Tailored for Indian Weddings & Sangeet, Daily Office/College, Evening Dawat & Parties, Festive Celebrations.
5. **WhatsApp Reservation Engine**: Pre-fills messages in Indian context ("Namaste Perfume Shope!...") with Rupee pricing and store pickup confirmation.
6. **Flagship Indian Boutique**: FC Road, Pune, Maharashtra with UPI (GPay, PhonePe, Paytm), Card & Cash on Pickup options.

## 1-Click Deployment Files
- **[`deploy.bat`](file:///C:/Users/sanke/perfume-shopee-main/deploy.bat)**: Double-click to instantly deploy any local changes to Cloudflare Pages.
- **[`deploy_cloudflare.bat`](file:///C:/Users/sanke/perfume-shopee-main/deploy_cloudflare.bat)**: Interactive deployer script.
