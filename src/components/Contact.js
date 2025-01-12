import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles.css'; // Correct import path

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to an API or email)
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <div className="contact-container section">
            <h2>Contact Me</h2>
            <div className="contact-content">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="form-control"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send</button>
                </form>
                <div className="contact-details">
                    <h3>Contact Details</h3>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} /> (+1)-585-290-2209
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:gp8479@g.rit.edu">gp8479@g.rit.edu</a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Rochester, NY, USA
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/gobinda-pandey-6b8127185/">gobinda-pandey</a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Adnibog">Adnibog</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
