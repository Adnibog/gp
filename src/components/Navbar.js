import React, { useEffect } from 'react';
import '../styles.css';

const Navbar = () => {
    useEffect(() => {
        const handleHashChange = () => {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        // Scroll to section on initial load if hash is present
        if (window.location.hash) {
            handleHashChange();
        }

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Update URL hash without triggering a full page reload
            window.history.pushState(null, '', `#${sectionId}`);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-links">
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
                <a href="#interests" onClick={(e) => scrollToSection(e, 'interests')}>Interests</a>
                <a href="#publications" onClick={(e) => scrollToSection(e, 'publications')}>Publications</a>
                <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
                <a href="#certifications" onClick={(e) => scrollToSection(e, 'certifications')}>Certifications</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;