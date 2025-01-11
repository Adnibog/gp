import React, { useState } from 'react';

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
            <form onSubmit={handleSubmit}>
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
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div className="contact-details">
                <h3>Contact Details</h3>
                <p>
                    <i className="fa fa-phone"></i> (+1)-585-290-2209
                </p>
                <p>
                    <i className="fa fa-envelope"></i> <a href="mailto:gp8479@g.rit.edu">gp8479@g.rit.edu</a>
                </p>
                <p>
                    <i className="fa fa-map-marker"></i> Rochester, NY, USA
                </p>
                <p>
                    <i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/gobinda-pandey-6b8127185/">gobinda-pandey</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;