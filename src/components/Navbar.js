import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/research-interests">Research Interests</Link>
                    <Link to="/publications">Publications</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/certifications">Certifications</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
