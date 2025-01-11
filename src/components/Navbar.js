import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/research-interests">Research Interests</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Navbar;
