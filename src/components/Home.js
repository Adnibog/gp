import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <div className="hero-content">
                    <h1>Gobinda Pandey</h1>
                    <h2>PhD Student in Computing and Information Sciences</h2>
                    <p>Exploring Secure Technologies for a Better Tomorrow.</p>
                    <img src="/pp.jpg" alt="Profile" className="profile-photo" />
                </div>
            </div>
            <nav className="quick-links">
                <Link to="/about">About</Link>
                <Link to="/research-interests">Research Interests</Link>
                <Link to="/publications">Publications</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/certifications">Certifications</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Home;
