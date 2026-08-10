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
    console.log(`✅ Seeded master store configuration into 'settings' collection.`);

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
