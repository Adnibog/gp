import React from 'react';

const certificationsData = [
    {
        title: 'Reactor Certification',
        institution: 'Chainalysis',
        completionDate: 'Nov 2024',
        details: 'Acquired knowledge and skills to analyze and trace transactions on the Bitcoin blockchain using the Chainalysis Reactor tool.'
    },
    {
        title: 'Cryptocurrency Fundamentals Certification',
        institution: 'Chainalysis',
        completionDate: 'Oct 2024',
        details: 'Gained insights into cryptocurrency fundamentals, including blockchain technology and cryptocurrency, and learned to utilize blockchain explorers to investigate Bitcoin transactions.'
    },
    {
        title: 'Cyber Security Specialization',
        institution: 'Coursera',
        completionDate: 'Jan 2024 – Mar 2024',
        details: 'Covered four courses on Introduction to Cyber Attacks, Cyber Attack Countermeasures, Real-Time Cyber Threat Detection and Mitigation, Enterprise and Infrastructure Security.'
    },
    {
        title: 'Datacom Cybersecurity Job Simulation',
        institution: 'Forage',
        completionDate: 'Feb 2024',
        details: 'Completed a job simulation focused on how Datacom’s cybersecurity team helps protect its clients. Investigated a cyberattack and reported the key recommendations to improve the client’s cybersecurity posture.'
    },
    {
        title: 'Tata Cybersecurity Security Analyst Job Simulation',
        institution: 'Forage',
        completionDate: 'Feb 2024',
        details: 'Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services. Acquired expertise in IAM, cybersecurity best practices, and strategic alignment with business objectives.'
    },
    {
        title: 'Google Cybersecurity Professional Certificate',
        institution: 'Coursera',
        completionDate: 'May 2023 – Oct 2023',
        details: 'Covered topics including Security Risk Management, Network Security, Linux and SQL tools, Threat Detection and Response, and Python-based Cybersecurity Task Automation.'
    },
    {
        title: 'Blockchain Specialization',
        institution: 'Coursera',
        completionDate: 'Feb 2023 – Apr 2023',
        details: 'Obtained insights on the foundations of blockchain, smart contracts, decentralized applications (Dapps), and blockchain platforms.'
    },
];

const Certifications = () => {
    return (
        <div className="certifications">
            <h2>Certifications</h2>
            <div className="certifications-grid">
                {certificationsData.map((certification, index) => (
                    <div key={index} className="certification-card">
                        <h3>{certification.title}</h3>
                        <p>{certification.institution}</p>
                        <p>{certification.completionDate}</p>
                        <p>{certification.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
