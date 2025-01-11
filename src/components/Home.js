// filepath: /home/gobinda/gp/portfolio/src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <div className="hero-content">
                    <img src={process.env.PUBLIC_URL + "/pp.jpg"} alt="Gobinda Pandey" className="profile-photo" />
                    <h1>Gobinda Pandey</h1>
                    <h2>PhD Student in Computing and Information Sciences</h2>
                    <p>Exploring Secure Technologies for a Better Tomorrow.</p>
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
