import mongoose from "mongoose";
import "dotenv/config";

// Update this with your actual MongoDB URI or ensure it is set in your .env file as MONGODB_URI
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/test";

async function testConnection() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Database connection successful!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
}

testConnection();
