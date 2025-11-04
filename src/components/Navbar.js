import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('profile');

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
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a
          className={activeSection === 'profile' ? 'active' : ''}
          onClick={() => scrollToSection('profile')}
        >
          Profile
        </a>
        <a
          className={activeSection === 'interests' ? 'active' : ''}
          onClick={() => scrollToSection('interests')}
        >
          Interests
        </a>
        <a
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </a>
        <a
          className={activeSection === 'publications' ? 'active' : ''}
          onClick={() => scrollToSection('publications')}
        >
          Publications
        </a>
        <a
          className={activeSection === 'certifications' ? 'active' : ''}
          onClick={() => scrollToSection('certifications')}
        >
          Certifications
        </a>
        <a
          className={activeSection === 'awards' ? 'active' : ''}
          onClick={() => scrollToSection('awards')}
        >
          Awards
        </a>
        <a
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;