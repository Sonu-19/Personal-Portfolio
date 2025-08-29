const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

router.post("/contact", async (req, res) => {
  try {
    const { fname, lname, email, mobile, message } = req.body;

    // Validate required fields
    if (!fname || !lname || !email || !mobile || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save contact data to MongoDB
    const newContact = new Contact({ fname, lname, email, mobile, message });
    await newContact.save();

    // Set up Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS, // Use app password (not raw password)
      },
    });

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Admin email
      subject: "New Contact Form Submission",
      text: `You received a new message from:
      
      Name: ${fname} ${lname}
      Email: ${email}
      Mobile: ${mobile}

      Message:
      ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent and stored successfully!" });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
