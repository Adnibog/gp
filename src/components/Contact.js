import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faSpinner, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const sectionStyle = {
    width: "100vw",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto 48px auto",
    padding: "0"
};
const innerStyle = {
    width: "100%",
    maxWidth: 1200,
    padding: "48px 32px",
    boxSizing: "border-box"
};

const labelStyle = { fontWeight: 600, marginBottom: 4, display: "block" };
const inputStyle = { width: "100%", padding: 8, borderRadius: 5, border: "1px solid #ccc", marginBottom: 12 };
const buttonStyle = { padding: "10px 24px", background: "#007bff", color: "#fff", border: "none", borderRadius: 5, fontWeight: 600, cursor: "pointer" };

const Contact = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        subject: '',
        message: '',
        website: '' // Honeypot field
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear status when user starts typing again
        if (status.type) {
            setStatus({ type: '', message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const API_KEY = process.env.REACT_APP_API_KEY;
            
            if (!API_KEY) {
                console.error('API key not configured');
                setStatus({ 
                    type: 'error', 
                    message: 'Configuration error. Please contact the administrator.' 
                });
                setIsSubmitting(false);
                return;
            }
            
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': API_KEY
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    honeypot: formData.website // Send honeypot field
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus({ 
                    type: 'success', 
                    message: data.message || 'Message sent successfully! I will get back to you soon.' 
                });
                setFormData({ name: '', email: '', subject: '', message: '', website: '' });
            } else {
                setStatus({ 
                    type: 'error', 
                    message: data.message || 'Failed to send message. Please try again.' 
                });
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus({ 
                type: 'error', 
                message: 'Network error. Please check your connection and try again, or email me directly at gobindapandey223@gmail.com' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" style={sectionStyle}>
            <div style={innerStyle}>
                <h2 style={{ fontSize: "2em", marginBottom: 32, textAlign: "center" }}>Contact Me</h2>
                <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }} className="contact-content">
                    <form onSubmit={handleSubmit} style={{ flex: 2, minWidth: 220, width: "100%" }}>
                        {/* Honeypot field - hidden from users, catches bots */}
                        <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                            <label htmlFor="website">Website (do not fill)</label>
                            <input 
                                type="text" 
                                id="website" 
                                name="website" 
                                value={formData.website} 
                                onChange={handleChange}
                                tabIndex="-1"
                                autoComplete="off"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="name" style={labelStyle}>Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                                style={inputStyle}
                                disabled={isSubmitting}
                                maxLength="100"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={labelStyle}>Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                style={inputStyle}
                                disabled={isSubmitting}
                                maxLength="100"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" style={labelStyle}>Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                required 
                                style={inputStyle}
                                disabled={isSubmitting}
                                maxLength="200"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" style={labelStyle}>Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                                style={{ ...inputStyle, height: 100, resize: "vertical" }}
                                disabled={isSubmitting}
                                maxLength="2000"
                            />
                        </div>
                        
                        {status.message && (
                            <div style={{
                                padding: '12px',
                                marginBottom: '12px',
                                borderRadius: '5px',
                                background: status.type === 'success' ? '#d4edda' : '#f8d7da',
                                color: status.type === 'success' ? '#155724' : '#721c24',
                                border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <FontAwesomeIcon icon={status.type === 'success' ? faCheckCircle : faExclamationCircle} />
                                {status.message}
                            </div>
                        )}
                        
                        <button 
                            type="submit" 
                            style={{
                                ...buttonStyle,
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting && <FontAwesomeIcon icon={faSpinner} spin />}
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                    <div className="contact-details" style={{ flex: 1, minWidth: 180, width: "100%" }}>
                        <h3 style={{ marginBottom: 12 }}>Contact Details</h3>
                        <div style={{ marginBottom: 8 }}><FontAwesomeIcon icon={faPhone} /> (+1)-585-290-2209</div>
                        <div style={{ marginBottom: 8 }}><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:gobindapandey223@gmail.com">gobindapandey223@gmail.com</a></div>
                        <div style={{ marginBottom: 8 }}><FontAwesomeIcon icon={faMapMarkerAlt} /> St. Cloud, MN, USA</div>
                        <div style={{ marginBottom: 8 }}><FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/gobinda-pandey-6b8127185/">gobinda-pandey</a></div>
                        <div><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Adnibog">Adnibog</a></div>
                    </div>
                </div>
            </div>
                        <style>
                                {`
                                #contact .contact-content {
                                        align-items: flex-start;
                                }
                                @media (max-width: 900px) {
                                        #contact > div {
                                                padding: 32px 12px !important;
                                        }
                                        #contact .contact-content {
                                                gap: 16px !important;
                                        }
                                }
                                @media (max-width: 600px) {
                                        #contact > div {
                                                padding: 16px 2vw !important;
                                        }
                                        #contact .contact-content {
                                                flex-direction: column !important;
                                                gap: 0 !important;
                                        }
                                        #contact .contact-details, #contact form {
                                                min-width: 100% !important;
                                                width: 100% !important;
                                        }
                                        #contact .contact-details {
                                                margin-top: 24px !important;
                                        }
                                        #contact h2 {
                                                font-size: 1.5em !important;
                                        }
                                }
                                @media (max-width: 400px) {
                                        #contact > div {
                                                padding: 8px 1vw !important;
                                        }
                                        #contact h2 {
                                                font-size: 1.1em !important;
                                        }
                                }
                                `}
                        </style>
                </section>
        );
};

export default Contact;