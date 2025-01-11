import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTools, faLaptopCode, faLanguage, faUserShield, faHandsHelping, faComments } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const skills = [
    { name: 'Leadership', icon: faUserShield },
    { name: 'Communication', icon: faComments },
    { name: 'Teamwork', icon: faHandsHelping },
    { name: 'Programming: C, C++, Assembly, Python', icon: faCode },
    { name: 'Database: MySQL, MongoDB', icon: faDatabase },
    { name: 'Tools: GNU Assembler, Reactor, Arduino Uno', icon: faTools },
    { name: 'Misc: OpenWrt, LaTeX, Git, Linux', icon: faLaptopCode },
    { name: 'Languages: English, Nepali, Hindi', icon: faLanguage }
];

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <img src={`${process.env.PUBLIC_URL}/pp.jpg`} alt="Gobinda Pandey" className="profile-photo" />
                    <h1>Gobinda Pandey</h1>
                    <h2>PhD in Computing and Information Sciences</h2>
                    <p>Exploring Secure Technologies for a Better Tomorrow.</p>
                    <p>With a strong background in electronics, communication, and information, and a passion for cybersecurity, I am dedicated to advancing the field through innovative research and practical applications.</p>
                    <a href={`${process.env.PUBLIC_URL}/Adnibog_CV.pdf`} className="cv-link" target="_blank" rel="noopener noreferrer">View CV</a>
                </div>
            </section>
            <section className="skills section">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <FontAwesomeIcon icon={skill.icon} className="icon" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
