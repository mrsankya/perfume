require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

const INITIAL_PRODUCTS = [
  {
    id: 'p1',
    name: "Khamrah D'Or (Extrait de Parfum)",
    brand: "Lattafa Luxury Collection",
    accord: "Warm Vanilla & Kesar",
    gender: "Unisex",
    price: 2899,
    regularPrice: 3899,
    longevity: "18+ Hours (Beast Mode ⚡)",
    sillage: "Room Filler (3.5m 💨)",
    season: "Winter & Royal Weddings 👑",
    notes: "Top: Kashmiri Kesar, Bergamot, Cinnamon • Heart: Praline, Dates, White Flowers • Base: Pure Vanilla Bourbon, Tonka Bean, Amberwood",
    badge: "Royal Bestseller",
    rating: 4.9,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80",
    inStock: true
  },
  {
    id: 'p2',
    name: "Oud Suprême Noir",
    brand: "Swiss Arabian Royale",
    accord: "Royal Dehn Al Oud",
    gender: "Unisex",
    price: 4499,
    regularPrice: 5999,
    longevity: "24+ Hours (Nuclear Projection ⚡)",
    sillage: "Monstrous (4.5m 💨)",
    season: "Evening Gala & Festive 🌙",
    notes: "Top: Aged Cambodian Oud, Nutmeg • Heart: Taif Rose, Smoky Frankincense • Base: Leather, Imperial Musk, Golden Amber",
    badge: "Pure Extrait",
    rating: 5.0,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80",
    inStock: true
  },
  {
    id: 'p3',
    name: "Delina Exclusif Rosé",
    brand: "Parfums de Marly Classique",
    accord: "Haute Turkish Rose & Lychee",
    gender: "Women",
    price: 3699,
    regularPrice: 4899,
    longevity: "14+ Hours (All-Day Bloom 🌸)",
    sillage: "Heavy Scent Cloud (3m 💨)",
    season: "Spring, Summer & Date Nights ✨",
    notes: "Top: Lychee, Pear, Bergamot • Heart: Turkish Damask Rose, Incense, Agarwood • Base: Vanilla, Amber, Vanilla Pod",
    badge: "Queen's Choice",
    rating: 4.9,
    reviewCount: 186,
    image: "https://images.unsplash.com/photo-1588405748480-1cf414c843f8?w=600&auto=format&fit=crop&q=80",
    inStock: true
  },
  {
    id: 'p4',
    name: "Yara Blush Blossom",
    brand: "Lattafa Perfumes",
    accord: "Sweet Marshmallow & Berries",
    gender: "Women",
    price: 2199,
    regularPrice: 2999,
    longevity: "12+ Hours (Intense Compliment Magnet 💕)",
    sillage: "Strong (2.5m 💨)",
    season: "Daily Signature & College / Office 🌺",
    notes: "Top: Heliotrope, Orchid, Tangerine • Heart: Tropical Gourmand Accord • Base: Vanilla, Sandalwood, Clean White Musk",
    badge: "Trending #1",
    rating: 4.8,
    reviewCount: 220,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80",
    inStock: true
  },
  {
    id: 'p5',
    name: "Aventus Noir Titan",
    brand: "Armaf Luxury Private Blend",
    accord: "Smoky Birch & Pineapple",
    gender: "Men",
    price: 3299,
    regularPrice: 4499,
    longevity: "16+ Hours (Executive Beast Mode ⚡)",
    sillage: "Alpha Trail (3m 💨)",
    season: "Boardrooms, Gym & Night Out 🔥",
    notes: "Top: Crisp Lemon, Blackcurrant, Apple, Pineapple • Heart: Birch, Jasmine, Moroccan Rose • Base: Ambergris, Oakmoss, Patchouli",
    badge: "Alpha King",
    rating: 5.0,
    reviewCount: 310,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80",
    inStock: true
  },
  {
    id: 'p6',
    name: "Hawas Aqua Pour Homme",
    brand: "Rasasi Luxury Dubai",
    accord: "Fresh Citrus & Monsoon Aqua",
    gender: "Men",
    price: 2999,
    regularPrice: 3999,
    longevity: "14+ Hours (High-Heat Monster 🌊)",
    sillage: "Heavy (3m 💨)",
    season: "Indian Summer & Monsoon 🌧️",
    notes: "Top: Apple, Bergamot, Lemon, Cinnamon • Heart: Watery Notes, Plum, Cardamom • Base: Ambergris, Musk, Driftwood",
    badge: "Monsoon Beast",
    rating: 4.9,
    reviewCount: 275,
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=80",
    inStock: true
  }
];

const INITIAL_SETTINGS = {
  id: 'store_config',
  storeName: 'PERFUME SHOPE',
  tagline: 'Haute Parfumerie & Luxury Attars • India',
  gstNumber: '27AAAAA0000A1Z5',
  whatsappNumber: '919579453006',
  supportPhone: '+91 95794 53006 / +91 98227 25265',
  supportEmail: 'contact@perfumeshope.in',
  storeAddress: 'Shop No. 4, Ground Floor, Royal Heritage Galleria, FC Road, Pune, Maharashtra - 411004, India',
  storeHours: 'Mon - Sun: 10:30 AM - 10:00 PM (IST)',
  announcementText: '100% Authentic Original Batches • Same-Day Store Pickup • WhatsApp Booking in INR (₹)',
  announcementActive: true,
  siteStyle: 'artisan-minimal'
};

const INITIAL_CELEBRITIES = [
  {
    id: 'celeb-srk',
    name: 'Shah Rukh Khan',
    tagline: 'The King of Bollywood Signature Layering',
    subtitle: 'SRK’s iconic blend of smoky Mysore Sandalwood + spicy Woody Amber',
    badge: '👑 King Khan’s Scent Signature',
    rating: '5.0',
    ratingCount: '2.4k+ Fans • 99% Compliments',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
    perfumeImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80',
    perfumeName: 'CLUB DE NUIT INTENSE + HAWAS',
    perfumeBrand: 'Armaf & Rasasi Duo',
    quote: '"Jarvis, set sillage projection to maximum overload. Unapologetic power."',
    regularPrice: 7598,
    comboPrice: 6798,
    savings: 800
  }
];

async function seedDatabase() {
  console.log('🌱 Starting MongoDB Atlas Database Initialization...');
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('perfumeshope');

    // 1. Products Collection
    const productsCol = db.collection('products');
    await productsCol.deleteMany({});
    await productsCol.insertMany(INITIAL_PRODUCTS);
    console.log(`✅ Seeded ${INITIAL_PRODUCTS.length} luxury fragrances into 'products' collection.`);

    // 2. Settings Collection
    const settingsCol = db.collection('settings');
    await settingsCol.deleteMany({});
    await settingsCol.insertOne(INITIAL_SETTINGS);
    await settingsCol.updateOne(
      { id: 'celebrity_wardrobes' },
      { $set: { id: 'celebrity_wardrobes', list: INITIAL_CELEBRITIES, updatedAt: new Date().toISOString() } },
      { upsert: true }
    );
    console.log(`✅ Seeded store configuration & ${INITIAL_CELEBRITIES.length} celebrity wardrobes into 'settings' collection.`);

    // 3. Ensure Indexes
    await productsCol.createIndex({ id: 1 }, { unique: true });
    await db.collection('orders').createIndex({ id: 1 }, { unique: true });
    await db.collection('visitors').createIndex({ phone: 1 });
    await db.collection('consultations').createIndex({ id: 1 }, { unique: true });
    console.log('✅ Created unique database indexes.');

    console.log('🎉 MongoDB Atlas Database is fully seeded and ready for production!');
  } catch (err) {
    console.error('❌ Seeding Failed:', err);
  } finally {
    await client.close();
  }
}

seedDatabase();
