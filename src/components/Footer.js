// filepath: /home/gobinda/gp/portfolio/src/components/Footer.js
import React from 'react';
import '../styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">&copy; {new Date().getFullYear()} Gobinda Pandey. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
