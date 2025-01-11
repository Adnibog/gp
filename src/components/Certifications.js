import React from 'react';
import '../styles.css';

const certificationsData = [
    {
        title: 'Reactor Certification',
        institution: 'Chainalysis',
        completionDate: 'Nov 2024',
        details: 'Acquired knowledge and skills to analyze and trace transactions on the Bitcoin blockchain using the Chainalysis Reactor tool.',
        logo: `${process.env.PUBLIC_URL}/images/chain.png`
    },
    {
        title: 'Cryptocurrency Fundamentals Certification',
        institution: 'Chainalysis',
        completionDate: 'Oct 2024',
        details: 'Gained insights into cryptocurrency fundamentals, including blockchain technology and cryptocurrency, and learned to utilize blockchain explorers to investigate Bitcoin transactions.',
        logo: `${process.env.PUBLIC_URL}/images/chain.png`
    },
    {
        title: 'Cyber Security Specialization',
        institution: 'Coursera',
        completionDate: 'Jan 2024 – Mar 2024',
        details: 'Covered four courses on Introduction to Cyber Attacks, Cyber Attack Countermeasures, Real-Time Cyber Threat Detection and Mitigation, Enterprise and Infrastructure Security.',
        logo: `${process.env.PUBLIC_URL}/images/coursera.png`
    },
    {
        title: 'Datacom Cybersecurity Job Simulation',
        institution: 'Forage',
        completionDate: 'Feb 2024',
        details: 'Completed a job simulation focused on how Datacom’s cybersecurity team helps protect its clients. Investigated a cyberattack and reported the key recommendations to improve the client’s cybersecurity posture.',
        logo: `${process.env.PUBLIC_URL}/images/forage.png`
    },
    {
        title: 'Tata Cybersecurity Security Analyst Job Simulation',
        institution: 'Forage',
        completionDate: 'Feb 2024',
        details: 'Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services. Acquired expertise in IAM, cybersecurity best practices, and strategic alignment with business objectives.',
        logo: `${process.env.PUBLIC_URL}/images/forage.png`
    },
    {
        title: 'Google Cybersecurity Professional Certificate',
        institution: 'Coursera',
        completionDate: 'May 2023 – Oct 2023',
        details: 'Covered topics including Security Risk Management, Network Security, Linux and SQL tools, Threat Detection and Response, and Python-based Cybersecurity Task Automation.',
        logo: `${process.env.PUBLIC_URL}/images/coursera.png`
    },
    {
        title: 'Blockchain Specialization',
        institution: 'Coursera',
        completionDate: 'Feb 2023 – Apr 2023',
        details: 'Obtained insights on the foundations of blockchain, smart contracts, decentralized applications (Dapps), and blockchain platforms.',
        logo: `${process.env.PUBLIC_URL}/images/coursera.png`
    },
];

const Certification = ({ title, institution, completionDate, details, logo }) => (
    <div className="certification">
        <img src={logo} alt={`${institution} logo`} className="certification-logo" />
        <h3>{title}</h3>
        <p><strong>Institution:</strong> {institution}</p>
        <p><strong>Completion Date:</strong> {completionDate}</p>
        <p>{details}</p>
    </div>
);

const Certifications = () => (
    <div className="certifications section">
        <h2>Certifications</h2>
        <div className="certifications-grid">
            {certificationsData.map((cert, index) => (
                <Certification key={index} {...cert} />
            ))}
        </div>
    </div>
);

export default Certifications;
