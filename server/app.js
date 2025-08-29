require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./Routes/router");
const connectDB = require("./DB/conn");

const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/", router);

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT} 🚀`);
});
