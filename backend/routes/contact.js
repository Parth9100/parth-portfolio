const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// POST /api/contact — send a contact form email
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

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or another email service like outlook, yahoo, etc.
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email options
        const mailOptions = {
            from: `"${name}" <${email}>`, // sender address
            to: process.env.EMAIL_USER, // receiver (yourself)
            replyTo: email,
            subject: subject ? `Portfolio Contact: ${subject}` : `New message from ${name}`,
            text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\nMessage:\n${message}`,
            html: `
                <h3>New Contact Request</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        res.status(201).json({ success: true, message: 'Message sent successfully' });
    } catch (err) {
        console.error('Email send error:', err.message);
        res.status(500).json({ success: false, message: 'Server error while sending email' });
    }
});

module.exports = router;
