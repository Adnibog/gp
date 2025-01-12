import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBook, faUtensils, faPenNib, faFutbol, faBrain, faSpa } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const hobbies = [
    { name: 'Music', icon: faMusic },
    { name: 'Cooking', icon: faUtensils },
    { name: 'Writing', icon: faPenNib },
    { name: 'Cricket', icon: faFutbol },
    { name: 'Soccer', icon: faFutbol },
    { name: 'Reading', icon: faBook },
    { name: 'Philosophy', icon: faBrain },
    { name: 'Meditation', icon: faSpa }
];

const education = [
    {
        institution: 'Rochester Institute of Technology',
        location: 'Rochester, NY, USA',
        degree: 'PhD in Computing and Information Sciences',
        duration: 'Aug 2024 – Present'
    },
    {
        institution: 'Tribhuvan University (Institute of Engineering)',
        location: 'Pokhara, Gandaki, Nepal',
        degree: 'Bachelor’s in Electronics, Communication and Information Engineering',
        duration: 'Nov 2018 – Sep 2023'
    }
];

const experience = [
    {
        title: 'Graduate Research Assistant',
        description: 'Research on exploring microarchitectural timing attack vectors on different processor architectures.',
        duration: 'Aug 2024 – Dec 2024'
    },
    {
        title: 'Teaching Assistant for Side Channel Analysis Course',
        description: 'Assisted in teaching the Side Channel Analysis course, providing support to students and helping with course materials.',
        duration: 'Aug 2024 – Dec 2024'
    }
];

const About = () => {
    return (
        <div className="about-container section">
            <h2>About Me</h2>
            <div className="description">
                <p>
                    I come from Mirmi, Syangja, a beautiful and peaceful place in western Nepal. I love learning new things and want to make a positive impact on society. I am inspired by the quote, "Don't aspire to make a living, aspire to make a difference." This guides my actions and goals. I believe in teamwork, as the saying goes, "If you want to go fast, go alone; but if you want to go far, go together." This belief drives my commitment to working with others and achieving collective success.
                </p>
                <p>
                    I have many interests that show my varied personality. I love music, which inspires and relaxes me. I enjoy playing sports like cricket and soccer, which keep me active and connected with others. Cooking is another passion of mine, allowing me to be creative and share happiness through food. I also enjoy writing and reading literature, as they help me express myself and learn new things. I am interested in philosophy, which makes me think about life's big questions, and meditation, which brings me peace and mindfulness.
                </p>
            </div>
            <h3>Education</h3>
            <div className="education">
                {education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <p><strong>{edu.institution}</strong></p>
                        <p>{edu.location}</p>
                        <p>{edu.degree}</p>
                        <p>{edu.duration}</p>
                    </div>
                ))}
            </div>
            <h3>Experience</h3>
            <div className="experience">
                {experience.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <p><strong>{exp.title}</strong></p>
                        <p>{exp.description}</p>
                        <p>{exp.duration}</p>
                    </div>
                ))}
            </div>
            <h3>Hobbies</h3>
            <div className="hobbies section">
                <div className="hobbies-grid">
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="hobby-item">
                            <FontAwesomeIcon icon={hobby.icon} className="hobby-icon" />
                            <p>{hobby.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;

