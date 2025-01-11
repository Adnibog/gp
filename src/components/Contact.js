// filepath: /home/gobinda/gp/portfolio/src/components/Contact.js
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
        <div className="contact-container">
            <h2>Contact Me</h2>
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
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Send</button>
            </form>
            <div className="contact-details">
                <h3>Contact Details</h3>
                <p>
                    <FontAwesomeIcon icon={faPhone} /> (+1)-585-290-2209
                </p>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:gp8479@g.rit.edu">gp8479@g.rit.edu</a>
                </p>
                <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Rochester, NY, USA
                </p>
                <p>
                    <FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/gobinda-pandey-6b8127185/">gobinda-pandey</a>
                </p>
                <p>
                    <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Adnibog">Adnibog</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
