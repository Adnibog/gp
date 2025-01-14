import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/interests">Interests</Link>
                <Link to="/publications">Publications</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/certifications">Certifications</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
