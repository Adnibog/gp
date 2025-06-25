import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTools, faLaptopCode, faUserShield } from '@fortawesome/free-solid-svg-icons';

const sectionStyle = {
    width: "100vw",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto 3rem auto",
    padding: "0"
};
const innerStyle = {
    width: "100%",
    maxWidth: 1200,
    padding: "3rem 2rem",
    boxSizing: "border-box"
};

const skills = [
        { name: 'Cybersecurity Tools', details: 'Burp Suite, Cisco Packet Tracer, Kali Linux, NMAP, Metasploit, Wireshark', icon: faUserShield },
        { name: 'Machine Learning', details: 'PyTorch, Scikit-learn, Keras, NumPy, Pandas, TensorFlow, OpenCV', icon: faLaptopCode },
        { name: 'Programming Languages', details: 'Python, C, C++, Assembly', icon: faCode },
        { name: 'Database', details: 'MySQL, MongoDB', icon: faDatabase },
        { name: 'Miscellaneous', details: 'GNU Assembler, Arduino Uno, OpenWrt, LaTeX, Git', icon: faTools }
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
                degree: 'B.E. in Electronics, Communication and Information Engineering',
                duration: 'Nov 2018 – Sep 2023'
        }
];

const experience = [
        {
                title: 'Graduate Research Assistant',
                description: 'Researched exploring timing attack vectors on different microarchitectures.',
                duration: 'Aug 2024 – Dec 2024'
        },
        {
                title: 'Teaching Assistant, CSEC 622: Side Channel Analysis',
                description: 'Assisted in course material preparation, student support, and grading.',
                duration: 'Aug 2024 – Dec 2024'
        }
];

const Profile = () => (
        <section id="profile" style={sectionStyle}>
                <div style={innerStyle}>
                        <div className="profile-header">
                                <img
                                        src={`${process.env.PUBLIC_URL}/pp.jpg`}
                                        alt="Gobinda Pandey"
                                        className="profile-img"
                                />
                                <div className="profile-info">
                                        <h1 className="profile-name">Gobinda Pandey</h1>
                                        <h2 className="profile-desc">
                                                Cybersecurity enthusiast focused on offensive and defensive security, with a passion for penetration testing and network security. Dedicated to solving real-world challenges and advancing cybersecurity practices, with a strong interest in AI/ML-driven solutions.
                                        </h2>
                                        <a
                                                href={`${process.env.PUBLIC_URL}/GP_Resume.pdf`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="profile-resume"
                                        >
                                                View Resume
                                        </a>
                                </div>
                        </div>
                        <div style={{ marginTop: "2rem" }}>
                                <h2 className="profile-section-title">Skills</h2>
                                <div className="profile-skills">
                                        {skills.map((skill, index) => (
                                                <div key={index} className="profile-skill-card">
                                                        <FontAwesomeIcon icon={skill.icon} className="profile-skill-icon" />
                                                        <div className="profile-skill-name">{skill.name}</div>
                                                        <div className="profile-skill-details">{skill.details}</div>
                                                </div>
                                        ))}
                                </div>
                        </div>
                        <div style={{ marginTop: "2rem" }}>
                                <h2 className="profile-section-title">Education</h2>
                                <div>
                                        {education.map((edu, index) => (
                                                <div key={index} className="profile-edu-card">
                                                        <div className="profile-edu-inst">{edu.institution}</div>
                                                        <div>{edu.degree}</div>
                                                        <div className="profile-edu-loc">{edu.location}</div>
                                                        <div className="profile-edu-dur">{edu.duration}</div>
                                                </div>
                                        ))}
                                </div>
                        </div>
                        <div style={{ marginTop: "2rem" }}>
                                <h2 className="profile-section-title">Experience</h2>
                                <div>
                                        {experience.map((exp, index) => (
                                                <div key={index} className="profile-exp-card">
                                                        <div className="profile-exp-title">{exp.title}</div>
                                                        <div>{exp.description}</div>
                                                        <div className="profile-exp-dur">{exp.duration}</div>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </div>
                <style>
                        {`
                        #profile {
                                font-size: 1rem;
                        }
                        .profile-header {
                                display: flex;
                                align-items: center;
                                gap: 2rem;
                                flex-wrap: wrap;
                        }
                        .profile-img {
                                width: 8.75rem;
                                height: 8.75rem;
                                border-radius: 50%;
                                object-fit: cover;
                                box-shadow: 0 2px 8px rgba(0,0,0,0.12);
                        }
                        .profile-info {
                                flex: 1;
                                min-width: 13rem;
                        }
                        .profile-name {
                                font-size: 2em;
                                margin-bottom: 0.5rem;
                        }
                        .profile-desc {
                                font-size: 1.05em;
                                color: #555;
                                margin-bottom: 1rem;
                                font-weight: 400;
                        }
                        .profile-resume {
                                display: inline-block;
                                padding: 0.6rem 1.5rem;
                                background: #007bff;
                                color: #fff;
                                border-radius: 1.5rem;
                                font-weight: 600;
                                text-decoration: none;
                                font-size: 1em;
                        }
                        .profile-section-title {
                                font-size: 1.3em;
                                margin-bottom: 1rem;
                        }
                        .profile-skills {
                                display: flex;
                                flex-wrap: wrap;
                                gap: 1rem;
                        }
                        .profile-skill-card {
                                background: #f8f8f8;
                                border-radius: 0.5rem;
                                padding: 1rem;
                                min-width: 11rem;
                                flex: 1 1 11rem;
                                text-align: center;
                        }
                        .profile-skill-icon {
                                font-size: 1.7em;
                                color: #007bff;
                                margin-bottom: 0.5rem;
                        }
                        .profile-skill-name {
                                font-weight: 600;
                        }
                        .profile-skill-details {
                                font-size: 0.97em;
                                color: #444;
                        }
                        .profile-edu-card, .profile-exp-card {
                                background: #f8f8f8;
                                border-radius: 0.5rem;
                                padding: 1rem;
                                margin-bottom: 0.75rem;
                        }
                        .profile-edu-inst {
                                font-weight: 600;
                        }
                        .profile-edu-loc {
                                color: #555;
                        }
                        .profile-edu-dur, .profile-exp-dur {
                                font-size: 0.97em;
                                color: #888;
                        }
                        .profile-exp-title {
                                font-weight: 600;
                        }
                        /* Responsive styles */
                        @media (max-width: 900px) {
                                #profile > div {
                                        padding: 2rem 0.75rem !important;
                                }
                                .profile-header {
                                        gap: 1rem;
                                }
                        }
                        @media (max-width: 600px) {
                                #profile > div {
                                        padding: 1.2rem 0.25rem !important;
                                }
                                .profile-header {
                                        flex-direction: column;
                                        align-items: flex-start;
                                }
                                .profile-img {
                                        width: 5.5rem !important;
                                        height: 5.5rem !important;
                                }
                                .profile-name {
                                        font-size: 1.2em !important;
                                }
                                .profile-section-title {
                                        font-size: 1.1em !important;
                                }
                        }
                        `}
                </style>
        </section>
);

export default Profile;