const mongoose = require("mongoose");
require("dotenv").config();

// Check if MONGO_URI is set
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing. Check your .env file.");
  process.exit(1); // Exit the app if no URI is found
}

// MongoDB Connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Exit the app if connection fails
  });

// Handle connection events
mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB Disconnected! Retrying...");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB Connection Error:", err.message);
});

module.exports = mongoose;
