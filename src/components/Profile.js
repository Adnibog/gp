import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTools, faLaptopCode, faUserShield } from '@fortawesome/free-solid-svg-icons';

const sectionStyle = {
  width: "100vw",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  margin: "0 auto 48px auto",
  padding: "0"
};
const innerStyle = {
  width: "100%",
  maxWidth: 1200,
  padding: "48px 32px",
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
            <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
                <img
                    src={`${process.env.PUBLIC_URL}/pp.jpg`}
                    alt="Gobinda Pandey"
                    style={{
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
                    }}
                />
                <div style={{ flex: 1, minWidth: 220 }}>
                    <h1 style={{ fontSize: "2.2em", marginBottom: 8 }}>Gobinda Pandey</h1>
                    <h2 style={{ fontSize: "1.1em", color: "#555", marginBottom: 16, fontWeight: 400 }}>
                        Cybersecurity enthusiast focused on offensive and defensive security, with a passion for penetration testing and network security. Dedicated to solving real-world challenges and advancing cybersecurity practices, with a strong interest in AI/ML-driven solutions.
                    </h2>
                    <a
                        href={`${process.env.PUBLIC_URL}/GP_Resume.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            padding: "10px 24px",
                            background: "#007bff",
                            color: "#fff",
                            borderRadius: 24,
                            fontWeight: 600,
                            textDecoration: "none"
                        }}
                    >
                        View Resume
                    </a>
                </div>
            </div>
            <div style={{ marginTop: 32 }}>
                <h2 style={{ fontSize: "1.5em", marginBottom: 16 }}>Skills</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                    {skills.map((skill, index) => (
                        <div key={index} style={{
                            background: "#f8f8f8",
                            borderRadius: 8,
                            padding: 16,
                            minWidth: 180,
                            flex: "1 1 180px",
                            textAlign: "center"
                        }}>
                            <FontAwesomeIcon icon={skill.icon} style={{ fontSize: 28, color: "#007bff", marginBottom: 8 }} />
                            <div style={{ fontWeight: 600 }}>{skill.name}</div>
                            <div style={{ fontSize: "0.95em", color: "#444" }}>{skill.details}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ marginTop: 32 }}>
                <h2 style={{ fontSize: "1.5em", marginBottom: 16 }}>Education</h2>
                <div>
                    {education.map((edu, index) => (
                        <div key={index} style={{
                            background: "#f8f8f8",
                            borderRadius: 8,
                            padding: 16,
                            marginBottom: 12
                        }}>
                            <div style={{ fontWeight: 600 }}>{edu.institution}</div>
                            <div>{edu.degree}</div>
                            <div style={{ color: "#555" }}>{edu.location}</div>
                            <div style={{ fontSize: "0.95em", color: "#888" }}>{edu.duration}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ marginTop: 32 }}>
                <h2 style={{ fontSize: "1.5em", marginBottom: 16 }}>Experience</h2>
                <div>
                    {experience.map((exp, index) => (
                        <div key={index} style={{
                            background: "#f8f8f8",
                            borderRadius: 8,
                            padding: 16,
                            marginBottom: 12
                        }}>
                            <div style={{ fontWeight: 600 }}>{exp.title}</div>
                            <div>{exp.description}</div>
                            <div style={{ fontSize: "0.95em", color: "#888" }}>{exp.duration}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <style>
            {`
            @media (max-width: 900px) {
                #profile > div {
                    padding: 32px 12px !important;
                }
            }
            @media (max-width: 600px) {
                #profile > div {
                    padding: 24px 4px !important;
                }
                #profile img {
                    width: 90px !important;
                    height: 90px !important;
                }
                #profile h1 {
                    font-size: 1.3em !important;
                }
            }
            `}
        </style>
    </section>
);

export default Profile;