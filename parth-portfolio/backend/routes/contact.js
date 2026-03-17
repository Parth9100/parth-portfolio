const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact — save a new contact submission
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and message are required'
            });
        }

        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        res.status(201).json({ success: true, message: 'Message received' });
    } catch (err) {
        console.error('Contact save error:', err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// GET /api/contact — return all submissions (newest first)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ submittedAt: -1 });
        res.json(contacts);
    } catch (err) {
        console.error('Contact fetch error:', err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
