# Perfume Shope - Project Memory & Context

## Project Overview
- **Project Name**: Perfume Shope (India's Premier Luxury Parfumerie & Attar Boutique)
- **Repository**: mrsankya/perfume (https://github.com/mrsankya/perfume.git)
- **Tech Stack**: Vanilla HTML5, Tailwind CSS CDN, Vanilla JavaScript (ES6+), Google Identity Services (GSI), FontAwesome Icons, Google Fonts (Cinzel, Outfit, Teko)
- **Currency**: Indian Rupees (INR ₹)
- **Deployment Platform**: Cloudflare Pages
- **Physical Boutique**: Shop No. 4, Ground Floor, Royal Heritage Galleria, FC Road, Pune, Maharashtra - 411004, India.

## Live Deployment Links
- **Storefront URL**: [https://perfume-shopee.pages.dev](https://perfume-shopee.pages.dev)
- **Regular Admin URL**: [https://perfume-shopee.pages.dev/admin.html](https://perfume-shopee.pages.dev/admin.html)
- **Super Admin URL (Hidden / URL-Only Navigation)**: [https://perfume-shopee.pages.dev/superadmin.html](https://perfume-shopee.pages.dev/superadmin.html)
- **Cloudflare Account ID**: `0fbadd932cb4ec64fe049a68da13c315`
- **Cloudflare Pages Project Name**: `perfume-shopee`
- **Production Branch**: `main`

## MongoDB Atlas Cloud Database Integration
- **Cluster**: `cluster0.uw1rkyw.mongodb.net`
- **Database Name**: `perfumeshope`
- **Database User**: `bhendesanket21_db_user`
- **Driver**: Official `mongodb` Node.js driver + `mongoose`
- **REST API Backend**: `server.js` (Express on port 5000)
- **Database Seeder**: `seed_db.js` (`npm run seed`)
- **Frontend Sync Layer**: `db-sync.js` (Auto-syncs catalog, orders, visitors, and consultations with resilient localStorage fallback)
- **Collections**: `products`, `orders`, `visitors`, `consultations`, `settings`, `hero_banners`

## Google OAuth & Identity Services Integration
- **Client ID**: `269277017328-r3olvtqb8nf91rbqifpmchbpflkceves.apps.googleusercontent.com`
- **Project ID**: `gen-lang-client-0813461738`
- **Authorized Javascript Origins**: `https://perfume-shopee.pages.dev`
- **Google SDK**: Google Identity Services (`https://accounts.google.com/gsi/client`) with JWT ID token decoder, One-Tap prompt, and rendered Google Sign-In button.

## Luxury E-Commerce & Community Features
1. **🎁 Custom Discovery Sample Box Builder (`#discovery-box`)**:
   - Interactive Velvet Box Builder: Pick 3 Miniatures for ₹699 or 5 for ₹999.
   - Real-time velvet slot visualizer and 1-click add to cart.
2. **⏳ Longevity & Sillage Performance Gauges on Product Cards**:
   - Longevity Gauge (e.g., *16+ Hours • Beast Mode ⚡*).
   - Sillage Projection Gauge (e.g., *Room Filler (3.5m) 💨*).
   - Indian Climate & Occasion suitability.
3. **🛡️ Blind Buy Insurance**:
   - Every full 100ml bottle includes a **Free 2ml Mini Tester Vial** + 100% money-back / exchange guarantee.
4. **🌟 Iconic Celebrity Scent Wardrobes (`#celebrity-wardrobe`)**:
   - **Positioned directly below the Main Products Catalog section**.
   - **Animated Luxury Slider & Carousel**: Smooth prev/next arrows, interactive dot pagination, touch swipe, and auto-scrolling (with pause on hover).
   - Shah Rukh Khan (SRK's Mysore Sandalwood + Turathi Leather Layering Duo).
   - Virat Kohli (Alpha Captain Tobacco Vanille + Aged Cambodian Oud Duo).
   - Deepika Padukone (Queen of Grace Haute Turkish Rose + Vanilla Extrait Duo).
   - Tony Stark / Marvel Titan (Smoky Birch Creed Aventus + Monsoon Hawas Aqua Duo).
   - 1-Click "Add Celebrity Duo to Cart (Save ₹800)".
5. **🧪 Fragrance Layering Alchemy Lab (`#alchemy-lab`)**:
   - Interactive visual blender pairing Base Notes (Oud, Sandalwood, Birch) with Top Notes (Rose, Vanilla, Aqua).
   - Real-time 98% Royal Indian Synergy rating + 15% Duo Discount.
6. **👑 The Scent Club — Community SOTD Feed (`#scent-community`)**:
   - **Animated Luxury Slider**: Auto-sliding customer compliment reviews, longevity ratings, bottle photographs, and upvotes.
   - 1-Click "Buy This Layering Duo" with instant checkout discount.
7. **✨ Luxury Live Broadcast Ticker Marquee**:
   - Continuous smooth animated ticker under hero banners highlighting genuine imported batches, tester vials, laser engraving, and Pune boutique hours.
8. **📅 In-Store VIP Scent Consultation Booking (`#book-consultation`)**:
   - Private tasting table reservations at FC Road Pune flagship boutique.
   - Generates instant VIP Pass via WhatsApp.
9. **✨ Free Custom Laser Bottle Engraving**:
   - Checkbox toggle in cart with live preview of custom name engraved on bottle.
10. **📄 1-Click GST Tax Invoice Generator & High-Fidelity PDF Export**:
    - Itemized GST tax invoices (18% rate, HSN Code 33030090, CGST 9% + SGST 9%) with store header, batch hologram seal, and isolated print iframe engine for clean paper & PDF printing. Available in both Staff Admin & Super Admin.
11. **🔍 Interactive Product Detail Quickview Modal (`#product-detail-modal`)**:
    - High-resolution perfume flacon with interactive **Zoom Controls (+ / - / Reset)** and mouse loupe pan.
    - Olfactory pyramid breakdown, Beast Mode longevity & sillage projection meters, Season badge, Blind Buy Insurance seal.
    - Verified Customer Reviews & compliment ratings.
    - Quantity counter, 1-Click "Add to Cart", and "Buy Now".
12. **🧭 Restored Floating Bottom Navigation Pill Bar**:
    - High-contrast frosted dock with glowing golden icons (`#E5BE72` / `#C59B27`), distinct item labels, and elevation shadow for quick one-tap jumping to **Home**, **Shop Catalog**, **Discovery Box**, **Alchemy Lab**, **The Scent Club**, and **Cart Drawer** with live item count badge.
13. **📦 Live Customer Order Tracking Portal (`#order-tracking-modal`)**:
    - Accessible via header "Track Order" button, floating shortcuts, and order confirmation modal.
    - Search by Order ID or phone number.
    - Interactive 5-stage shipment stepper: **Order Placed & Confirmed** -> **Quality Checked & Velvet Box Sealed** -> **Dispatched / In Air Transit** -> **Out for Delivery** -> **Delivered Successfully**.
    - Displays Courier Partner (e.g., *BlueDart Air Express / Delhivery*), Tracking AWB Number, itemized bottle manifest, destination address, and 1-click WhatsApp Concierge assistance.
14. **🚚 Staff & Super Admin Order Fulfillment Management**:
    - Dedicated fulfillment desk with status update modal (`Placed`, `Packed`, `Dispatched`, `Out for Delivery`, `Delivered`, `Cancelled`).
    - Editable Courier Name, Tracking AWB number, and dispatch remarks with automatic cloud synchronization to MongoDB Atlas (`db-sync.js`).
    - 1-Click WhatsApp customer dispatch alert with pre-filled tracking links.
15. **🎠 Left-to-Right Animated Category Product Sliders**:
    - Replaced static layout with dedicated **horizontal animated carousels for each fragrance category / accord**:
      1. 🔥 **Trending Bestsellers & Top Rated** (Top picks & flagship extraits).
      2. 🍦 **Warm Vanilla & Kashmiri Kesar** (Gourmand saffron & amber extraits).
      3. 🪵 **Royal Dehn Al Oud & Arabian Musk** (Aged Cambodian & pure oud blends).
      4. 🌲 **Mysore Sandalwood & Earthy Woods** (Heritage Chandan & cedar blends).
      5. 🌸 **Kashmiri Gulab & Haute Florals** (Damascene rose & haute couture florals).
      6. 🌊 **Fresh Citrus & Monsoon Aqua Sillage** (Marine bergamot beast mode fresh).
    - Smooth horizontal scroll-snap, glowing left/right navigation arrow buttons, touch swiping, and automated gentle left-to-right auto-play with pause-on-hover.
    - Integrated **View Mode Switcher**: 1-click toggle between **Animated Sliders 🎠** and **Grid View 🔲**.
16. **🌟 Fully Editable Celebrity Scent Wardrobes & Recommendations**:
    - Manageable via both **Super Admin (`superadmin.html`)** and **Staff Admin (`admin.html`)**.
    - Dual Image Uploads: Upload **Celebrity Portrait Photo** + **Perfume Bottle with Celeb Photo** (via URL or local image file with Canvas compression).
    - Customizable Star Ratings (1-5 stars), Fan Compliment Score, Scent Accords Subtitle, Celebrity Quote/Story, and Layering Duo Combo Pricing with instant savings badge.
    - Synchronized with MongoDB Atlas Cloud (`db-sync.js`) and auto-rendered on the live storefront luxury carousel.
17. **⚡ Invisible Seamless Navigation Shortcuts**:
    - Header brand logo & subtitle, footer crown & shop name, and footer copyright bar smoothly scroll to top of page without page refreshes.

## Super Admin 1-Click Control Engines
1. **🎨 1-Click Global UI Visual Styles Switcher**:
   - **Liquid Glassmorphism**: Frosted glass blur (24px saturate), translucent depth, and glowing highlights (`data-style="glassmorphism"`).
   - **Royal Indian Heritage**: Saffron gold filigree borders, rich velvet depth, and opulent flacon framing (`data-style="royal-heritage"`).
   - **Cyberpunk / Neon Titanium**: Arc reactor cyan glow, titanium carbon chassis, and electric neons (`data-style="cyberpunk"`).
   - **Minimalist Scandinavian Luxe**: Clean modernism, hairline borders, and champagne typography (`data-style="minimal-luxe"`).
   - **Clean Skin & White Minimal (Studio Organic)**: Clean, simple, human-designed bespoke aesthetic. Warm skin/linen tones (`#FAF8F5`, `#F4EFEB`), pure white cards (`#FFFFFF`), high-contrast charcoal black typography (`#14110E`), and zero brown background artifacts (`data-style="artisan-minimal"`).
   - Persists in `perfumes_site_style` and applies seamlessly across the storefront.

2. **🖼️ Dynamic Hero Perfume Banners Manager**:
   - Full CRUD management of hero banner slides for **All / Unisex**, **Women's Haute Rose**, and **Men's Titanium Beast Mode** sections.
   - Dynamic auto-sliding carousel (every 5 seconds) with interactive indicator dots.
   - Stored in `perfumes_hero_banners` with live storefront synchronization and JSON backup/restore support.

3. **🌟 Celebrity Scent Wardrobes & Recommendations Manager**:
   - Add, edit, reprice, or remove celebrity layering recommendations with dual photo uploads, custom star ratings, and quotes.

4. **📸 Dual Image Upload & Client-Side Compression Engine**:
   - Dual Input Modes: **Web URL** or **Local File Upload** (Drag & Drop / File Picker).
   - High-performance HTML5 Canvas compression auto-resizes high-res phone/camera photos down to lightweight JPEG DataURLs without loss of sharpness.
   - Live interactive thumbnail & banner previews with 1-click removal.
   - Integrated across **Super Admin Products**, **Super Admin Hero Banners**, **Super Admin & Staff Celebrity Wardrobes**, **Staff Admin Products**, and **Customer SOTD Community Posts**.

## Enterprise Security & Anti-Tamper Shield
1. **🛡️ Client-Side Anti-Inspect & DevTools Shield (`security.js`)**:
   - Disabled right-click context menu & developer shortcuts (`F12`, `Ctrl+Shift+I/J/C`, `Ctrl+U`, `Ctrl+S`, `Cmd+Option+I/J/C/U`) for **regular customer sessions**.
   - **Full DevTools & Right-Click Privileges Unlocked Exclusively for Staff Admin & Super Admin** (`isPrivilegedAdmin()`).
   - 1-Click "Inspect Mode" toggle button in Super Admin console header.
   - Continuous DevTools open detection for visitor sessions.
   - XSS sanitization helper (`sanitizeInput`) across all user form inputs.
2. **🔐 Brute-Force Rate Limiting & Cryptographic Protection**:
   - `RateLimiter` enforces a max of 5 failed attempts -> 5-minute exponential lockout cooldown.
   - SHA-256 password hashing helper (`computeSha256`) using Web Crypto API.
   - Inactivity session auto-logout (15 minutes) for Admin & Super Admin.
3. **🔒 Cloudflare HTTP Security Headers (`_headers`)**:
   - `Content-Security-Policy`: Restricts scripts, frames, and styles to authorized origins.
   - `X-Frame-Options: SAMEORIGIN` (prevents clickjacking).
   - `X-Content-Type-Options: nosniff`.
   - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`.
   - `Permissions-Policy: camera=(), microphone=(), geolocation=(self)`.

## Role-Based Access Control (RBAC)
- **👑 Super Admin (Direct URL Only)**: `superadmin.html` (Passwords: `superadmin` or `9822725265`)
- **👔 Regular Staff Admin**: `admin.html` (Password: `admin` or `9822725265`)

## Recent Fixes & Maintenance Log
- **Celebrity Scent Wardrobes & Duo Combos Modal & Add Button**:
  - Fixed unclosed modal container tag in `superadmin.html` that previously trapped `#super-celebrity-modal` inside `#super-gst-invoice-modal` (which was hidden by default), allowing the "+ Add Celebrity Wardrobe" modal and "Edit" modal to open and display instantly.
  - Enhanced `buyCelebrityDuo()` in `app.js` to handle both multi-bottle layering duos and custom single/combo packs with proper cart quantity incrementing, discount coupon computation, cart drawer opening, and toast confirmation.
  - Added clean file input name reset in `openCelebrityWardrobeModal()` for both `superadmin.js` and `admin.js`.
- **Multiple Product Image Upload (Admin & Super Admin)**:
  - Added interactive Multi-Image Gallery Manager in both `superadmin.html` / `superadmin.js` and `admin.html` / `admin.js`.
  - Supports uploading multiple photo files simultaneously (with Canvas compression) or pasting image URLs.
  - Interactive gallery preview grid with 1-click "Make Cover" photo selection, delete buttons, and cover badge.
  - Product data model upgraded to support `images: [url1, url2, ...]` with backwards compatibility (`image: images[0]`).
- **Storefront Product Quickview Multi-Image Carousel**:
  - Upgraded `#product-detail-modal` in `index.html` and `app.js` to render interactive photo carousel with Prev/Next navigation overlay arrows, photo index counter (`1 / 3`), and interactive thumbnail row with active golden ring.
- **Verified Buyer Reviews System with Received Bottle Photo Uploads**:
  - Implemented strict purchase verification gate: Customers can only review a product if they have a verified order containing that specific fragrance (checked against `perfumes_orders` / `/api/orders` by Phone number or Order ID).
  - Unlocked review form includes 5-star rating picker with scent performance titles, headline, experience text, and multi-file unboxing photo uploader (up to 4 received bottle photos compressed via Canvas).
  - Reviews rendered on product quickview modal with author, city, 5-star rating, verified buyer badge, order ID, genuine bottle seal, and clickable unboxing photo gallery.
  - Added Fullscreen Photo Lightbox modal (`#review-photo-lightbox`) for high-resolution inspection of customer unboxing photos.


