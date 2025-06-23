import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" style={sectionStyle}>
            <div style={innerStyle}>
                <h2 style={{ fontSize: "2em", marginBottom: 32, textAlign: "center" }}>Contact Me</h2>
                <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }} className="contact-content">
                    <form onSubmit={handleSubmit} style={{ flex: 2, minWidth: 260 }}>
                        <div>
                            <label htmlFor="name" style={labelStyle}>Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
                        </div>
                        <div>
                            <label htmlFor="email" style={labelStyle}>Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                        </div>
                        <div>
                            <label htmlFor="message" style={labelStyle}>Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required style={{ ...inputStyle, height: 100 }} />
                        </div>
                        <button type="submit" style={buttonStyle}>Send</button>
                    </form>
                    <div style={{ flex: 1, minWidth: 220 }}>
                        <h3 style={{ marginBottom: 12 }}>Contact Details</h3>
                        <div style={{ marginBottom: 8 }}><FontAwesomeIcon icon={faPhone} /> (+1)-585-290-2209</div>
                        <div style={{ marginBottom: 8 }}><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:gp8479@g.rit.edu">gp8479@g.rit.edu</a></div>
                        <div style={{ marginBottom: 8 }}><FontAwesomeIcon icon={faMapMarkerAlt} /> Rochester, NY, USA</div>
                        <div style={{ marginBottom: 8 }}><FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/gobinda-pandey-6b8127185/">gobinda-pandey</a></div>
                        <div><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Adnibog">Adnibog</a></div>
                    </div>
                </div>
            </div>
            <style>
                {`
                @media (max-width: 900px) {
                    #contact > div {
                        padding: 32px 12px !important;
                    }
                }
                @media (max-width: 600px) {
                    #contact > div {
                        padding: 24px 4px !important;
                    }
                    #contact .contact-content {
                        flex-direction: column !important;
                    }
                    #contact .contact-details, #contact form {
                        min-width: 100% !important;
                    }
                    #contact .contact-details {
                        margin-top: 24px !important;
                    }
                }
                `}
            </style>
        </section>
    );
};

export default Contact;