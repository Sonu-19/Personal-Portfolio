const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
