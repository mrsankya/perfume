require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

async function testConnection() {
  console.log('Connecting to MongoDB Atlas Cluster...');
  console.log('URI:', uri.replace(/:([^:@]+)@/, ':****@'));

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('✅ Successfully connected to MongoDB Atlas!');

    const db = client.db('perfumeshope');
    const collections = await db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));

    // Ping
    const pingResult = await db.command({ ping: 1 });
    console.log('Ping response:', pingResult);

    console.log('MongoDB Atlas is fully reachable and operational.');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
  } finally {
    await client.close();
  }
}

testConnection();
