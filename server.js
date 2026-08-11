require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static(path.join(__dirname)));

let db = null;
let client = null;
let isConnecting = false;

// Connect to MongoDB Atlas with auto-retry
async function connectDB() {
  if (isConnecting || db) return;
  if (!MONGODB_URI) {
    console.warn('⚠️ MONGODB_URI is not defined in environment variables.');
    return;
  }
  isConnecting = true;
  try {
    console.log('🔄 Connecting to MongoDB Atlas Cluster...');
    client = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 10000
    });
    await client.connect();
    db = client.db('perfumeshope');
    console.log('🍃 Connected to MongoDB Atlas Database: perfumeshope');
  } catch (err) {
    console.error('❌ MongoDB Atlas Connection Error:', err.message);
    db = null;
    // Auto-retry connection after 10 seconds
    setTimeout(connectDB, 10000);
  } finally {
    isConnecting = false;
  }
}

// 0. Render & Healthcheck Endpoints (Bypasses DB check so Render deployment passes immediately)
app.get('/healthz', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Perfume Shope API Backend',
    mongoConnected: !!db,
    timestamp: new Date().toISOString()
  });
});

// Middleware to ensure DB connection for DB-dependent routes
app.use('/api', (req, res, next) => {
  if (req.path === '/health' && !db) {
    return res.json({
      status: 'starting',
      database: 'MongoDB Atlas',
      mongoConnected: false,
      message: 'Connecting to MongoDB Atlas. Ensure 0.0.0.0/0 is added in MongoDB Atlas Network Access.'
    });
  }
  if (!db) {
    // Trigger reconnection attempt if idle
    connectDB();
    return res.status(503).json({
      error: 'MongoDB Atlas service initializing or connecting. Please retry in a moment.',
      mongoConnected: false
    });
  }
  next();
});

// =========================================================================
// REST API ROUTES
// =========================================================================

// 1. Health & Cluster Status
app.get('/api/health', async (req, res) => {
  try {
    const ping = await db.command({ ping: 1 });
    const productCount = await db.collection('products').countDocuments();
    const orderCount = await db.collection('orders').countDocuments();
    const visitorCount = await db.collection('visitors').countDocuments();
    res.json({
      status: 'online',
      database: 'MongoDB Atlas',
      cluster: 'cluster0.uw1rkyw.mongodb.net',
      counts: { products: productCount, orders: orderCount, visitors: visitorCount },
      ping: ping
    });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// 2. Products CRUD
app.get('/api/products', async (req, res) => {
  try {
    const products = await db.collection('products').find({}).toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const product = req.body;
    if (!product.id) product.id = 'p-' + Date.now();
    await db.collection('products').updateOne({ id: product.id }, { $set: product }, { upsert: true });
    res.status(201).json({ success: true, product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    await db.collection('products').updateOne({ id }, { $set: updates });
    res.json({ success: true, id, updates });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('products').deleteOne({ id });
    res.json({ success: true, deletedId: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Orders Management
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await db.collection('orders').find({}).sort({ timestamp: -1 }).toArray();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const order = req.body;
    if (!order.id) order.id = 'ORD-PUNE-' + Date.now().toString().slice(-6);
    order.timestamp = order.timestamp || new Date().toISOString();
    await db.collection('orders').insertOne(order);
    res.status(201).json({ success: true, order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Visitors & Promotional Calling Leads
app.get('/api/visitors', async (req, res) => {
  try {
    const visitors = await db.collection('visitors').find({}).sort({ lastActive: -1 }).toArray();
    res.json(visitors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/visitors', async (req, res) => {
  try {
    const lead = req.body;
    if (!lead.phone) return res.status(400).json({ error: 'Phone number is required' });
    lead.lastActive = new Date().toISOString();
    await db.collection('visitors').updateOne({ phone: lead.phone }, { $set: lead }, { upsert: true });
    res.status(201).json({ success: true, lead });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. VIP Scent Consultations
app.get('/api/consultations', async (req, res) => {
  try {
    const consults = await db.collection('consultations').find({}).sort({ timestamp: -1 }).toArray();
    res.json(consults);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/consultations', async (req, res) => {
  try {
    const booking = req.body;
    if (!booking.id) booking.id = 'VIP-PUNE-' + Date.now().toString().slice(-5);
    booking.timestamp = new Date().toISOString();
    await db.collection('consultations').insertOne(booking);
    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 6. Settings & Store Configuration
app.get('/api/settings', async (req, res) => {
  try {
    const settings = await db.collection('settings').findOne({});
    res.json(settings || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/settings', async (req, res) => {
  try {
    const updates = req.body;
    await db.collection('settings').updateOne({}, { $set: updates }, { upsert: true });
    res.json({ success: true, settings: updates });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 7. Visual Style Setting
app.get('/api/style', async (req, res) => {
  try {
    const doc = await db.collection('settings').findOne({}, { projection: { siteStyle: 1 } });
    res.json({ style: doc?.siteStyle || 'artisan-minimal' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/style', async (req, res) => {
  try {
    const { style } = req.body;
    await db.collection('settings').updateOne({}, { $set: { siteStyle: style } }, { upsert: true });
    res.json({ success: true, style });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 8. Bulk Product Sync (Push Local Catalog to MongoDB in 1-Click)
app.post('/api/products/bulk', async (req, res) => {
  try {
    const products = req.body;
    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: 'Array of products is required' });
    }
    const operations = products.map(p => ({
      updateOne: {
        filter: { id: p.id },
        update: { $set: p },
        upsert: true
      }
    }));
    const result = await db.collection('products').bulkWrite(operations);
    res.json({ success: true, count: products.length, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 9. Verified Customer Reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await db.collection('reviews').find({}).sort({ date: -1 }).toArray();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const review = req.body;
    if (!review.id) review.id = 'rev-' + Date.now();
    review.date = review.date || new Date().toISOString();
    await db.collection('reviews').insertOne(review);
    res.status(201).json({ success: true, review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fallback Route for SPA (Express 5 compatible)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server immediately so cloud platforms (Render, Railway, etc.) detect the open PORT instantly
app.listen(PORT, () => {
  console.log(`🚀 Perfume Shope Backend Server listening on port ${PORT}`);
  connectDB();
});
