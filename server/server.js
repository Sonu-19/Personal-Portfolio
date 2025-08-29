require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/router");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Debug: Check if MONGO_URI is loaded
console.log("MONGO_URI:", process.env.MONGO_URI);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit process if connection fails
  });

// ✅ Root Route (Fixes "Cannot GET /" Error)
app.get("/", (req, res) => {
  res.send("Welcome to the Portfolio Backend API 🚀");
});

// ✅ Test API Route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working! ✅" });
});

// ✅ Use Routes from Router
app.use("/api", router);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT} 🚀`));
