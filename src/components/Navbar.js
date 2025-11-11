import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['profile', 'interests', 'projects', 'publications', 'certifications', 'awards', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-brand" onClick={() => scrollToSection('profile')}>
                    <Logo />
                </div>
                
                <button 
                    className="mobile-menu-toggle" 
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                </button>

                <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <a
                        href="#profile"
                        className={activeSection === 'profile' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); scrollToSection('profile'); }}
                    >
                        Profile
                    </a>
                    <a
                        href="#interests"
                        className={activeSection === 'interests' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); scrollToSection('interests'); }}
                    >
                        Interests
                    </a>
                    <a
                        href="#projects"
                        className={activeSection === 'projects' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                    >
                        Projects
                    </a>
                    <a
                        href="#publications"
                        className={activeSection === 'publications' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); scrollToSection('publications'); }}
                    >
                        Publications
                    </a>
                    <a
                        href="#certifications"
                        className={activeSection === 'certifications' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}
                    >
                        Certifications
                    </a>
                    <a
                        href="#awards"
                        className={activeSection === 'awards' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); scrollToSection('awards'); }}
                    >
                        Awards
                    </a>
                    <a
                        href="#contact"
                        className={activeSection === 'contact' ? 'active' : ''}
                        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;