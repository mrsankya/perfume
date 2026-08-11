# Perfume Shope - Project Memory & Context

## Project Overview
- **Project Name**: Perfume Shope (India's Premier Luxury Parfumerie & Attar Boutique)
- **Repository**: mrsankya/perfume (https://github.com/mrsankya/perfume.git)
- **Repository Note**: Dedicated independent repository. (Original repository `Sakshi-patil48/perfume-shopee` is maintained separately).
- **Tech Stack**: Vanilla HTML5, Tailwind CSS CDN, Vanilla JavaScript (ES6+), Google Identity Services (GSI), FontAwesome Icons, Google Fonts (Cinzel, Outfit, Teko)
- **Currency**: Indian Rupees (INR ₹)
- **Deployment Platform**: Cloudflare Pages
- **Physical Boutique**: Shop No. 4, Ground Floor, Royal Heritage Galleria, FC Road, Pune, Maharashtra - 411004, India.

## Live Deployment Links
- **Storefront URL**: [https://perfume-shopee.pages.dev](https://perfume-shopee.pages.dev)
- **Regular Admin URL**: [https://perfume-shopee.pages.dev/admin.html](https://perfume-shopee.pages.dev/admin.html)
- **Super Admin URL (Hidden / URL-Only Navigation)**: [https://perfume-shopee.pages.dev/superadmin.html](https://perfume-shopee.pages.dev/superadmin.html)
- **Render Live API Backend URL**: [https://perfume-rujn.onrender.com](https://perfume-rujn.onrender.com)
- **Cloudflare Account ID**: `0fbadd932cb4ec64fe049a68da13c315`
- **Cloudflare Pages Project Name**: `perfume-shopee`
- **Production Branch**: `main`

## MongoDB Atlas Cloud Database & Render Backend Integration
- **Cluster**: `cluster0.uw1rkyw.mongodb.net`
- **Database Name**: `perfumeshope`
- **Database User**: `bhendesanket21_db_user`
- **Driver**: Official `mongodb` Node.js driver + `mongoose`
- **REST API Backend**: `server.js` (Express with `/healthz`, `/api/health`, `/api/products/bulk`, `/api/reviews`, `/api/orders`, `/api/visitors`, `/api/consultations`)
- **Render Blueprint**: `render.yaml` (Build: `npm install`, Start: `npm start`, Health: `/healthz`)
- **Database Seeder**: `seed_db.js` (`npm run seed`)
- **Frontend Sync Layer**: `db-sync.js` (Auto-resolves Render URL from `localStorage` or `window.PERFUME_BACKEND_URL`, with resilient localStorage fallback)
- **Admin Cloud Desk**: Integrated in both `superadmin.html` and `admin.html` for 1-click Render connection test, bulk product push to MongoDB Atlas, and live remote catalog pull.
- **Collections**: `products`, `orders`, `visitors`, `consultations`, `settings`, `hero_banners`, `reviews`

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
18. **📱 Ultra-Optimized Phone & Mobile UI (Header, Sub-Bar & Luxury Footer)**:
    - Dedicated mobile header row with compact glowing crown logo, tactile action cluster (Track, Google Sign-In, Cart with badge count), and responsive single-line announcement ticker.
    - Touch-optimized segmented sub-header gender switcher pills (`👑 All` • `🌸 Women` • `⚡ Men`) on phones with smooth theme transitions.
    - Upgraded luxury mobile footer with 1-tap WhatsApp Scent Concierge, direct boutique call, live Pune store hours badge (`🟢 Open Today: 10:30 AM - 10:00 PM IST`), Google Maps directions, 2-column mobile vault navigation, and safe-area floating bottom dock spacing.
19. **⭐ 1-Click Primary Cover Image Selector & 3D Pop-Out Hover Animations**:
    - In Super Admin and Staff Admin product modals, admins can upload multiple photos and set ANY photo as the Primary Cover Image with 1-click (`⭐ Set as Cover`), automatically elevating it to position #1 with a glowing gold crown badge.
    - Added fluid 3D Pop-Out animations on cursor hover across all product flacon images, gallery cards (`.admin-gallery-card`), category sliders, and quickview modal thumbnails (`transform: scale(1.09) translateY(-4px)`, shadow lift, and gold edge glow).
20. **🌟 "Wear Like a Legend" QuickView Breakdown & Base64 Image Upload Fix**:
    - Clicking the "Wear Like a Legend" section header or any celebrity card opens a dedicated **Celebrity Scent Wardrobe Story & Layering Breakdown QuickView Modal** (`#celebrity-detail-modal`) with high-res portrait, quote, duo flacons, step-by-step "How to Layer" guide, and 1-click duo checkout.
    - Upgraded celebrity image inputs in Super Admin (`superadmin.html`) and Staff Admin (`admin.html`) to support Base64 compressed image uploads and web URLs without HTML5 URL validation errors.
21. **🎨 Universal Dynamic Theme Synchronization (Storefront + Super Admin + Staff Admin) & Discovery Box Contrast**:
    - Fixed text readability and contrast in the **Custom Discovery Box & 5ml Tester Slots** for Clean Skin & White Minimal theme (`[data-style="artisan-minimal"]`).
    - Super Admin (`superadmin.html`) and Staff Admin (`admin.html`) now dynamically inherit and synchronize the exact active store theme styling across all tables, inputs, sidebars, and cards.
22. **🖼️ Hero Banner Contrast Protection & Interactive Transparency / Darkness Overlay Slider**:
    - Protected hero typography (`#hero-title-text`, `#hero-badge-text`, `#hero-desc-text`, and buttons) with high-contrast luminous text-shadows, ensuring crystal-clear readability over photographic backgrounds in ALL themes.
    - Added an interactive **Storefront Banner Darkness & Transparency Slider** (0% clear to 95% deep velvet tint) in both **Super Admin** (`superadmin.html`) and **Staff Admin** (`admin.html`) with real-time live preview and cross-device synchronization.
23. **🌍 3D Orbit Globe & YouTube Video Showcase Engine (Multi-Format Support)**:
    - Added local high-def video asset `videos/animo-orbit-globe-720p.mp4` (H.264 faststart 6MB 3D animated orbit globe).
    - **YouTube Video Links & Shorts Parsing Support**: Admins can paste standard YouTube URLs (`youtube.com/watch?v=...`), Short URLs (`youtu.be/...`), Shorts (`youtube.com/shorts/...`), or embed links. The system automatically extracts the video ID and renders a high-performance, responsive YouTube embed iframe with live preview in Super Admin and Staff Admin.
    - Integrated a complete **Video Showcase Controller** in both **Super Admin** and **Staff Admin** allowing administrators to decide the exact storefront placement:
      - `🌍 Dedicated Global Sourcing Section`: Interactive luxury section between Products and Celebrity Wardrobes with play/pause, audio toggle, and fullscreen controls.
      - `👑 Hero Banner Background Video`: Looping cinematic orbit globe replacing hero photography.
      - `✨ Floating Hologram Globe Widget`: Tactile corner orb badge with 1-click expand modal for authentic Arabian sourcing origin details.
      - `🌟 Both Section & Floating Widget`: Maximum immersion across the storefront.
      - `🛑 Hidden / Disabled`: 1-click global hide option.
    - Full admin customization of badge text, main title, narrative copy, and background overlay darkness tint.

## Super Admin 1-Click Control Engines
1. **🎨 1-Click Global UI Visual Styles Switcher**:
   - **Liquid Glassmorphism**: Frosted glass blur (24px saturate), translucent depth, and glowing highlights (`data-style="glassmorphism"`).
   - **Royal Indian Heritage**: Saffron gold filigree borders, rich velvet depth, and opulent flacon framing (`data-style="royal-heritage"`).
   - **Cyberpunk / Neon Titanium**: Arc reactor cyan glow, titanium carbon chassis, and electric neons (`data-style="cyberpunk"`).
   - **Minimalist Scandinavian Luxe**: Clean modernism, hairline borders, and champagne typography (`data-style="minimal-luxe"`).
   - **Clean Skin & White Minimal (Studio Organic)**: Clean, simple, human-designed bespoke aesthetic. Warm skin/linen tones (`#FAF8F5`, `#F4EFEB`), pure white cards (`#FFFFFF`), high-contrast charcoal black typography (`#14110E`), and zero brown background artifacts (`data-style="artisan-minimal"`).
   - Persists in `perfumes_site_style` and applies seamlessly across the storefront.

2. **🖼️ Dynamic Hero Perfume Banners & Opacity Manager**:
   - Full CRUD management of hero banner slides for **All / Unisex**, **Women's Haute Rose**, and **Men's Titanium Beast Mode** sections.
   - Interactive **Banner Darkness & Transparency Slider** (0% to 95%) with instant live preview.
   - Dynamic auto-sliding carousel (every 5 seconds) with interactive indicator dots.
   - Stored in `perfumes_hero_banners` and `perfumes_hero_opacity` with live storefront synchronization and cloud database backup.

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
- **Physical Boutique Showcase (Club 99 – The Perfume Shop, Jalgaon)**:
  - Added dedicated flagship boutique section `#jalgaon-boutique` at the end of the page (Section 10) right before the footer.
  - Implemented responsive 2-column showcase:
    - **Left Column**: Luxury storefront showcase photo with dynamic gold badges (`👑 Flagship Perfumery`, `🟢 Open Today`), bottom caption, and 3-feature grid (`Sensory Testing`, `Live Engraving`, `15-Min Pickup`).
    - **Right Column**: Interactive responsive Google Maps embed of Jalgaon location with 1-click turn-by-turn navigation shortcut (`📍 Get Directions`), followed by comprehensive store address and contact card with direct WhatsApp (`+91 9822725265`) and hotline call buttons.
  - Fully integrated with the dynamic theme engine (`theme-bg-main`, `theme-card`, `theme-border`, `theme-text-main`, `theme-accent`) supporting all 5 visual themes seamlessly.
  - Synchronized default store settings (`storeName`, `storeAddress`, `whatsappNumber`, `supportPhone`, `storeHours`) across `index.html`, `app.js`, `superadmin.js`, and `admin.js`.
