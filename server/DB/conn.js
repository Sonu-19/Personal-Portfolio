const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.DATABASE;

mongoose
    .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((error) => console.log("❌ MongoDB Connection Error:", error));

module.exports = mongoose;
