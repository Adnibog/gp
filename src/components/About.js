import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBook, faUtensils, faPenNib, faFutbol, faBrain, faSpa } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
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
        duration: 'Aug 2024 – Present',
        icon: faUniversity
    },
    {
        institution: 'Tribhuvan University (Institute of Engineering)',
        location: 'Pokhara, Gandaki, Nepal',
        degree: 'Bachelor’s in Electronics, Communication and Information Engineering',
        duration: 'Nov 2018 – Sep 2023',
        icon: faUniversity
    }
];

const About = () => {
    return (
        <div className="about-container section">
            <h2>About Me</h2>
            <p>
                I come from Mirmi, Syangja, a beautiful and peaceful place in western Nepal. I love learning new things and want to make a positive impact on society. I am inspired by the quote, "Don't aspire to make a living, aspire to make a difference." This guides my actions and goals. I believe in teamwork, as the saying goes, "If you want to go fast, go alone; but if you want to go far, go together." This belief drives my commitment to working with others and achieving collective success.
            </p>
            <p>
                I have many interests that show my varied personality. I love music, which inspires and relaxes me. I enjoy playing sports like cricket and soccer, which keep me active and connected with others. Cooking is another passion of mine, allowing me to be creative and share happiness through food. I also enjoy writing and reading literature, as they help me express myself and learn new things. I am interested in philosophy, which makes me think about life's big questions, and meditation, which brings me peace and mindfulness.
            </p>
            <h3>Education</h3>
            <div className="education">
                <div className="education-left">
                    <div className="education-item">
                        <FontAwesomeIcon icon={education[0].icon} className="education-icon" />
                        <div>
                            <p><strong>{education[0].institution}</strong></p>
                            <p>{education[0].location}</p>
                            <p>{education[0].degree}</p>
                            <p>{education[0].duration}</p>
                        </div>
                    </div>
                </div>
                <div className="education-right">
                    <div className="education-item">
                        <FontAwesomeIcon icon={education[1].icon} className="education-icon" />
                        <div>
                            <p><strong>{education[1].institution}</strong></p>
                            <p>{education[1].location}</p>
                            <p>{education[1].degree}</p>
                            <p>{education[1].duration}</p>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Hobbies</h3>
            <div className="hobbies">
                {hobbies.map((hobby, index) => (
                    <div key={index} className="hobby-item">
                        <FontAwesomeIcon icon={hobby.icon} className="hobby-icon" />
                        <p>{hobby.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
