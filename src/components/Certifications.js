import React from 'react';

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

const certificationsData = [
        {
                title: 'Reactor Certification',
                institution: 'Chainalysis',
                completionDate: 'Nov 2024',
                details: 'Acquired knowledge and skills to analyze and trace transactions on the Bitcoin blockchain using the Chainalysis Reactor tool.',
                logo: `${process.env.PUBLIC_URL}/chain.png`
        },
        {
                title: 'Cryptocurrency Fundamentals Certification',
                institution: 'Chainalysis',
                completionDate: 'Oct 2024',
                details: 'Gained insights into cryptocurrency fundamentals, including blockchain technology and cryptocurrency, and learned to utilize blockchain explorers to investigate Bitcoin transactions.',
                logo: `${process.env.PUBLIC_URL}/chain.png`
        },
        {
                title: 'Cyber Security Specialization',
                institution: 'Coursera',
                completionDate: 'Jan 2024 – Mar 2024',
                details: 'Covered four courses on Introduction to Cyber Attacks, Cyber Attack Countermeasures, Real-Time Cyber Threat Detection and Mitigation, Enterprise and Infrastructure Security.',
                logo: `${process.env.PUBLIC_URL}/coursera.png`
        },
        {
                title: 'Datacom Cybersecurity Job Simulation',
                institution: 'Forage',
                completionDate: 'Feb 2024',
                details: 'Completed a job simulation focused on how Datacom’s cybersecurity team helps protect its clients. Investigated a cyberattack and reported the key recommendations to improve the client’s cybersecurity posture.',
                logo: `${process.env.PUBLIC_URL}/forage.png`
        },
        {
                title: 'Tata Cybersecurity Security Analyst Job Simulation',
                institution: 'Forage',
                completionDate: 'Feb 2024',
                details: 'Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services. Acquired expertise in IAM, cybersecurity best practices, and strategic alignment with business objectives.',
                logo: `${process.env.PUBLIC_URL}/forage.png`
        },
        {
                title: 'Google Cybersecurity Professional Certificate',
                institution: 'Coursera',
                completionDate: 'May 2023 – Oct 2023',
                details: 'Covered topics including Security Risk Management, Network Security, Linux and SQL tools, Threat Detection and Response, and Python-based Cybersecurity Task Automation.',
                logo: `${process.env.PUBLIC_URL}/coursera.png`
        },
        {
                title: 'Blockchain Specialization',
                institution: 'Coursera',
                completionDate: 'Feb 2023 – Apr 2023',
                details: 'Obtained insights on the foundations of blockchain, smart contracts, decentralized applications (Dapps), and blockchain platforms.',
                logo: `${process.env.PUBLIC_URL}/coursera.png`
        },
];

const cardStyle = {
        background: "#f8f8f8",
        borderRadius: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        padding: 24,
        margin: "16px 0",
        display: "flex",
        alignItems: "flex-start",
        gap: 20,
        flexWrap: "wrap"
};

const logoStyle = {
        width: 60,
        height: 60,
        objectFit: "contain",
        borderRadius: 8,
        marginRight: 16,
        flexShrink: 0
};

const Certifications = () => (
        <section id="certifications" style={sectionStyle}>
                <div style={innerStyle}>
                        <h2 style={{ fontSize: "2em", marginBottom: 32, textAlign: "center" }}>Certifications</h2>
                        {certificationsData.map((cert, idx) => (
                                <div key={idx} style={cardStyle} className="certification-card">
                                        <img src={cert.logo} alt={`${cert.institution} logo`} style={logoStyle} />
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                                <h3 style={{ margin: "0 0 8px 0", fontSize: "1.2em" }}>{cert.title}</h3>
                                                <div style={{ color: "#555", marginBottom: 4, fontSize: "1em" }}><strong>Institution:</strong> {cert.institution}</div>
                                                <div style={{ color: "#888", marginBottom: 4, fontSize: "0.95em" }}><strong>Completion Date:</strong> {cert.completionDate}</div>
                                                <div style={{ fontSize: "1em", textAlign: "justify" }}>{cert.details}</div>
                                        </div>
                                </div>
                        ))}
                </div>
                <style>
                        {`
                        @media (max-width: 1200px) {
                                #certifications > div {
                                        max-width: 98vw;
                                        padding: 32px 8px !important;
                                }
                        }
                        @media (max-width: 900px) {
                                #certifications > div {
                                        padding: 24px 4px !important;
                                }
                                #certifications h2 {
                                        font-size: 1.5em !important;
                                }
                                #certifications .certification-card {
                                        padding: 16px !important;
                                }
                        }
                        @media (max-width: 600px) {
                                #certifications > div {
                                        padding: 12px 2px !important;
                                }
                                #certifications img {
                                        width: 40px !important;
                                        height: 40px !important;
                                        margin-right: 0 !important;
                                        margin-bottom: 8px !important;
                                }
                                #certifications .certification-card {
                                        flex-direction: column !important;
                                        gap: 10px !important;
                                        align-items: flex-start !important;
                                        padding: 12px !important;
                                }
                                #certifications h3 {
                                        font-size: 1em !important;
                                }
                        }
                        @media (max-width: 400px) {
                                #certifications h2 {
                                        font-size: 1.1em !important;
                                }
                                #certifications .certification-card {
                                        padding: 8px !important;
                                }
                        }
                        `}
                </style>
        </section>
);

export default Certifications;