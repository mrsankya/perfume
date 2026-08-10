require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

let db = null;
let client = null;

// Connect to MongoDB Atlas
async function connectDB() {
  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db('perfumeshope');
    console.log('🍃 Connected to MongoDB Atlas Database: perfumeshope');
  } catch (err) {
    console.error('❌ MongoDB Atlas Connection Error:', err.message);
  }
}

// Middleware to ensure DB connection
app.use((req, res, next) => {
  if (!db) {
    return res.status(503).json({ error: 'MongoDB Atlas service initializing. Please retry in a moment.' });
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

// Fallback Route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Perfume Shope MongoDB Backend Server running on http://localhost:${PORT}`);
  });
});
