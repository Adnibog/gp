import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you will create a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Gobinda Pandey</h1>
                <p>PhD Student in Computing and Information Sciences</p>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/research-interests">Research Interests</Link></li>
                <li><Link to="/publications">Publications</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;