const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security: API Key validation middleware
const validateApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const validApiKey = process.env.API_SECRET_KEY;
    
    if (!validApiKey) {
        console.error('API_SECRET_KEY not configured in environment variables');
        return res.status(500).json({ 
            success: false, 
            message: 'Server configuration error' 
        });
    }
    
    if (!apiKey || apiKey !== validApiKey) {
        console.warn('Unauthorized API access attempt from:', req.ip);
        return res.status(401).json({ 
            success: false, 
            message: 'Unauthorized access' 
        });
    }
    
    next();
};

// Security: Verify request origin
const verifyOrigin = (req, res, next) => {
    const allowedOrigins = [
        process.env.CLIENT_URL,
        'http://localhost:3000',
        'http://localhost:3001',
        // Add your GitHub Pages URLs
        'https://adnibog.github.io',
        'https://gobindapandey.com.np'
    ].filter(Boolean);
    
    const origin = req.headers.origin || req.headers.referer;
    
    if (!origin || !allowedOrigins.some(allowed => origin.startsWith(allowed))) {
        console.warn('Request from unauthorized origin:', origin, 'IP:', req.ip);
        return res.status(403).json({ 
            success: false, 
            message: 'Forbidden: Invalid origin' 
        });
    }
    
    next();
};

// Middleware
app.use(cors({
    origin: function(origin, callback) {
        const allowedOrigins = [
            process.env.CLIENT_URL,
            'http://localhost:3000',
            'http://localhost:3001',
            'https://adnibog.github.io',
            'https://gobindapandey.com.np'
        ].filter(Boolean);
        
        // Allow requests with no origin (mobile apps, curl, Postman)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.some(allowed => origin.startsWith(allowed))) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(express.json({ limit: '10kb' })); // Limit payload size
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Rate limiting for contact form
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many contact form submissions from this IP, please try again later.'
});

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Verify email configuration on startup
transporter.verify((error, success) => {
    if (error) {
        console.error('Email configuration error:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Contact form endpoint with security
app.post('/api/contact', validateApiKey, verifyOrigin, contactLimiter, async (req, res) => {
    const { name, email, subject, message, honeypot } = req.body;

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
        console.warn('Bot detected via honeypot from IP:', req.ip);
        // Pretend success to fool the bot
        return res.status(200).json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });
    }

    // Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'All fields are required' 
        });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            success: false, 
            message: 'Invalid email format' 
        });
    }
    
    // Input sanitization - remove potential XSS
    const sanitize = (str) => {
        return String(str)
            .replace(/[<>]/g, '')
            .substring(0, 1000); // Limit length
    };
    
    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedSubject = sanitize(subject);
    const sanitizedMessage = sanitize(message);

    // Log submission attempt (for monitoring)
    console.log(`Contact form submission from ${sanitizedEmail} at ${new Date().toISOString()}`);
    
    // Prepare email content with sanitized data
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${sanitizedSubject}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                <h2 style="color: #2da44e; border-bottom: 2px solid #2da44e; padding-bottom: 10px;">New Contact Form Submission</h2>
                
                <div style="margin: 20px 0;">
                    <p style="margin: 10px 0;"><strong style="color: #0969da;">Name:</strong> ${sanitizedName}</p>
                    <p style="margin: 10px 0;"><strong style="color: #0969da;">Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #0969da;">${sanitizedEmail}</a></p>
                    <p style="margin: 10px 0;"><strong style="color: #0969da;">Subject:</strong> ${sanitizedSubject}</p>
                    <p style="margin: 10px 0;"><strong style="color: #0969da;">IP Address:</strong> ${req.ip}</p>
                    <p style="margin: 10px 0;"><strong style="color: #0969da;">User Agent:</strong> ${req.headers['user-agent']}</p>
                </div>
                
                <div style="background-color: #f6f8fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="color: #0969da; margin-top: 0;">Message:</h3>
                    <p style="white-space: pre-wrap; line-height: 1.6;">${sanitizedMessage}</p>
                </div>
                
                <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
                
                <p style="font-size: 12px; color: #666;">
                    This email was sent from your portfolio contact form at ${new Date().toLocaleString()}<br>
                    Security: API Key validated ✓ Origin verified ✓
                </p>
            </div>
        `,
        replyTo: sanitizedEmail
    };

    // Auto-reply to sender with sanitized data
    const autoReplyOptions = {
        from: process.env.EMAIL_USER,
        to: sanitizedEmail,
        subject: 'Thank you for contacting me!',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                <h2 style="color: #2da44e;">Thank You, ${sanitizedName}!</h2>
                
                <p style="line-height: 1.6; color: #333;">
                    Thank you for reaching out through my portfolio website. I have received your message and will get back to you as soon as possible.
                </p>
                
                <div style="background-color: #f6f8fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="color: #0969da; margin-top: 0;">Your Message:</h3>
                    <p style="margin: 5px 0;"><strong>Subject:</strong> ${sanitizedSubject}</p>
                    <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">${sanitizedMessage}</p>
                </div>
                
                <p style="line-height: 1.6; color: #333;">
                    Best regards,<br>
                    <strong>Gobinda Pandey</strong><br>
                    MS in Information Assurance - St. Cloud State University
                </p>
                
                <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
                
                <p style="font-size: 12px; color: #666;">
                    This is an automated response. Please do not reply to this email.
                </p>
            </div>
        `
    };

    try {
        // Send email to yourself
        await transporter.sendMail(mailOptions);
        
        // Send auto-reply to the sender
        await transporter.sendMail(autoReplyOptions);
        
        res.status(200).json({ 
            success: true, 
            message: 'Message sent successfully! I will get back to you soon.' 
        });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please try again later or email me directly.' 
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false, 
        message: 'Something went wrong on the server' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
