import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTools, faLaptopCode, faUserShield, faNetworkWired, faGlobe } from '@fortawesome/free-solid-svg-icons';

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
    { name: 'Programming Languages', details: 'Python, C, C++, Bash, Assembly', icon: faCode },
    { name: 'Data & Machine Learning', details: 'Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch', icon: faLaptopCode },
    { name: 'Networking & Security', details: 'Wireshark, Nmap, Burp Suite, Nessus, Metasploit, Cisco Packet Tracer', icon: faUserShield },
    { name: 'Web & Systems', details: 'Linux, Git, HTML, CSS, JavaScript, Flask, Node.js', icon: faGlobe },
    { name: 'Databases', details: 'MySQL, MongoDB, Oracle', icon: faDatabase },
    { name: 'Tools & Platforms', details: 'Epic EHR, Microsoft Office Suite, LaTeX, Technical Writing, Collaboration', icon: faTools }
];

const education = [
    {
        institution: 'St. Cloud State University',
        location: 'St. Cloud, MN, USA',
        degree: 'MS in Information Assurance',
        duration: 'Aug 2025 – July 2026 (Anticipated)'
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
        title: 'Patient Access Assistant',
        organization: 'CentraCare Health System',
        description: 'Assist patients with registration, insurance verification, and scheduling using Epic EHR software. Maintain accurate and confidential patient data in compliance with HIPAA standards. Collaborate with healthcare staff to ensure secure and efficient patient access workflows.',
        duration: 'Oct 2025 – Present'
    },
    {
        title: 'Production Assistant',
        organization: 'Huskies Video Production Team',
        description: 'Support live event streaming, camera operations, and technical setup. Handle audiovisual troubleshooting, data coordination, and ensure smooth production for university media events.',
        duration: 'Sep 2025 – Present'
    },
    {
        title: 'Graduate Research & Teaching Assistant',
        organization: 'Rochester Institute of Technology',
        description: 'Researched timing attack vectors on different microarchitectures. Served as Teaching Assistant for CSEC 622: Side Channel Analysis course. Developed secure monitoring tools and collaborated on research publications in system security and performance testing.',
        duration: 'Aug 2024 – Dec 2024'
    }
];

const Profile = () => (
    <section id="profile" style={sectionStyle}>
        <div style={innerStyle}>
            <div className="profile-header">
                <img
                    src="/pp.jpg"
                    alt="Gobinda Pandey"
                    className="profile-img"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        console.log('Image failed to load');
                    }}
                />
                <div className="profile-info">
                    <h1 className="profile-name">Gobinda Pandey</h1>
                    <h2 className="profile-desc">
                        Cybersecurity enthusiast focused on cyber physical systems security, with expertise in network security, vulnerability detection, LLM security, and adversarial machine learning. Dedicated to offensive and defensive approaches to protect sensors and AI models.
                    </h2>
                    <a
                        href="/GP_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="profile-resume"
                    >
                        View CV
                    </a>
                </div>
            </div>
            
            <div style={{ marginTop: "3rem" }}>
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
            
            <div style={{ marginTop: "3rem" }}>
                <h2 className="profile-section-title">Education</h2>
                <div>
                    {education.map((edu, index) => (
                        <div key={index} className="profile-edu-card">
                            <div className="profile-edu-inst">{edu.institution}</div>
                            <div className="profile-edu-degree">{edu.degree}</div>
                            <div className="profile-edu-loc">{edu.location}</div>
                            <div className="profile-edu-dur">{edu.duration}</div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div style={{ marginTop: "3rem" }}>
                <h2 className="profile-section-title">Experience</h2>
                <div>
                    {experience.map((exp, index) => (
                        <div key={index} className="profile-exp-card">
                            <div className="profile-exp-title">{exp.title}</div>
                            {exp.organization && <div className="profile-exp-org">{exp.organization}</div>}
                            <div className="profile-exp-desc">{exp.description}</div>
                            <div className="profile-exp-dur">{exp.duration}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        <style>
            {`
            /* Override global styles with higher specificity */
            #profile {
                font-size: 1rem !important;
                font-family: 'Roboto', 'Segoe UI', Arial, sans-serif !important;
                color: #004d40 !important;
            }
            
            #profile * {
                font-family: 'Roboto', 'Segoe UI', Arial, sans-serif !important;
                color: #004d40 !important;
            }
            
            .profile-header {
                display: flex;
                align-items: center;
                gap: 2rem;
                flex-wrap: wrap;
                margin-bottom: 2rem;
            }
            
            .profile-img {
                width: 150px !important;
                height: 150px !important;
                border-radius: 50% !important;
                object-fit: cover !important;
                box-shadow: 0 8px 32px rgba(0,0,0,0.15) !important;
                border: 4px solid #80deea !important;
                transition: transform 0.3s ease, box-shadow 0.3s ease !important;
            }
            
            .profile-img:hover {
                transform: scale(1.05) !important;
                box-shadow: 0 12px 40px rgba(0,0,0,0.2) !important;
            }
            
            .profile-info {
                flex: 1;
                min-width: 300px;
            }
            
            .profile-name {
                font-size: 3rem !important;
                font-weight: 700 !important;
                margin-bottom: 1rem !important;
                color: #004d40 !important;
                line-height: 1.2 !important;
                background: linear-gradient(135deg, #004d40, #007bff) !important;
                -webkit-background-clip: text !important;
                -webkit-text-fill-color: transparent !important;
                background-clip: text !important;
            }
            
            .profile-desc {
                font-size: 1.1rem !important;
                color: #555 !important;
                margin-bottom: 1.5rem !important;
                font-weight: 400 !important;
                line-height: 1.7 !important;
                text-align: justify !important;
                text-justify: inter-word !important;
                hyphens: auto !important;
                word-spacing: 0.15em !important;
            }
            
            .profile-resume {
                display: inline-block !important;
                padding: 0.8rem 2rem !important;
                background: linear-gradient(135deg, #007bff, #0056b3) !important;
                color: #fff !important;
                border-radius: 2rem !important;
                font-weight: 600 !important;
                text-decoration: none !important;
                font-size: 1rem !important;
                transition: all 0.3s ease !important;
                box-shadow: 0 4px 15px rgba(0,123,255,0.3) !important;
            }
            
            .profile-resume:hover {
                transform: translateY(-2px) !important;
                box-shadow: 0 8px 25px rgba(0,123,255,0.4) !important;
                background: linear-gradient(135deg, #0056b3, #004085) !important;
            }
            
            .profile-section-title {
                font-size: 2rem !important;
                font-weight: 600 !important;
                margin-bottom: 1.5rem !important;
                color: #004d40 !important;
                border-bottom: 3px solid #80deea !important;
                padding-bottom: 0.5rem !important;
            }
            
            .profile-skills {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 1.5rem;
                margin-bottom: 2rem;
            }
            
            .profile-skill-card {
                background: linear-gradient(135deg, #f8f9fa, #e9ecef) !important;
                border-radius: 1rem !important;
                padding: 1.5rem !important;
                text-align: center !important;
                transition: all 0.3s ease !important;
                border: 1px solid #dee2e6 !important;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1) !important;
            }
            
            .profile-skill-card:hover {
                transform: translateY(-5px) !important;
                box-shadow: 0 12px 25px rgba(0,0,0,0.15) !important;
                background: linear-gradient(135deg, #fff, #f8f9fa) !important;
            }
            
            .profile-skill-icon {
                font-size: 2.5rem !important;
                color: #007bff !important;
                margin-bottom: 1rem !important;
                transition: color 0.3s ease !important;
            }
            
            .profile-skill-card:hover .profile-skill-icon {
                color: #0056b3 !important;
            }
            
            .profile-skill-name {
                font-weight: 600 !important;
                font-size: 1.1rem !important;
                margin-bottom: 0.5rem !important;
                color: #004d40 !important;
            }
            
            .profile-skill-details {
                font-size: 0.95rem !important;
                color: #666 !important;
                line-height: 1.6 !important;
                text-align: justify !important;
                text-justify: inter-word !important;
                word-spacing: 0.15em !important;
            }
            
            .profile-edu-card, .profile-exp-card {
                background: linear-gradient(135deg, #f8f9fa, #e9ecef) !important;
                border-radius: 1rem !important;
                padding: 1.5rem !important;
                margin-bottom: 1rem !important;
                transition: all 0.3s ease !important;
                border-left: 4px solid #007bff !important;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1) !important;
            }
            
            .profile-edu-card:hover, .profile-exp-card:hover {
                transform: translateX(5px) !important;
                box-shadow: 0 8px 15px rgba(0,0,0,0.15) !important;
                background: linear-gradient(135deg, #fff, #f8f9fa) !important;
            }
            
            .profile-edu-inst, .profile-exp-title {
                font-weight: 600 !important;
                font-size: 1.2rem !important;
                color: #004d40 !important;
                margin-bottom: 0.5rem !important;
            }
            
            .profile-exp-org {
                font-weight: 500 !important;
                font-size: 1.05rem !important;
                color: #007bff !important;
                margin-bottom: 0.5rem !important;
            }
            
            .profile-edu-degree, .profile-exp-desc {
                font-size: 1rem !important;
                color: #333 !important;
                margin-bottom: 0.3rem !important;
                line-height: 1.7 !important;
                text-align: justify !important;
                text-justify: inter-word !important;
                hyphens: auto !important;
                word-spacing: 0.15em !important;
            }
            
            .profile-edu-loc {
                color: #666 !important;
                font-size: 0.95rem !important;
                margin-bottom: 0.3rem !important;
            }
            
            .profile-edu-dur, .profile-exp-dur {
                font-size: 0.9rem !important;
                color: #007bff !important;
                font-weight: 500 !important;
            }
            
            /* Responsive Design */
            @media (max-width: 900px) {
                #profile > div {
                    padding: 2rem 1rem !important;
                }
                
                .profile-name {
                    font-size: 2.5rem !important;
                }
                
                .profile-section-title {
                    font-size: 1.8rem !important;
                }
                
                .profile-skills {
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                }
            }
            
            @media (max-width: 600px) {
                #profile > div {
                    padding: 2rem 1.5rem !important;
                }
                
                .profile-header {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 1.5rem;
                    padding-top: 1rem !important;
                }
                
                .profile-img {
                    width: 150px !important;
                    height: 150px !important;
                    margin: 0 auto !important;
                    flex-shrink: 0 !important;
                    display: block !important;
                }
                
                .profile-info {
                    width: 100% !important;
                    min-width: unset !important;
                }
                
                .profile-name {
                    font-size: 2rem !important;
                }
                
                .profile-desc {
                    text-align: left !important;
                    word-spacing: 0.2em !important;
                    hyphens: auto !important;
                }
                
                .profile-section-title {
                    font-size: 1.5rem !important;
                }
                
                .profile-skills {
                    grid-template-columns: 1fr;
                }
                
                .profile-skill-details,
                .profile-exp-desc,
                .profile-edu-degree {
                    text-align: left !important;
                    word-spacing: 0.18em !important;
                    hyphens: auto !important;
                }
            }
            `}
        </style>
    </section>
);

export default Profile;