import React from 'react';

const certificationsData = [
    {
        title: 'Reactor Certification',
        institution: 'Chainalysis',
        completionDate: 'Nov 2024',
    },
    {
        title: 'Cryptocurrency Fundamentals Certification',
        institution: 'Chainalysis',
        completionDate: 'Oct 2024',
    },
    {
        title: 'Cyber Security Specialization',
        institution: 'Coursera',
        completionDate: 'Jan 2024 – Mar 2024',
    },
    {
        title: 'Datacom Cybersecurity Job Simulation',
        institution: 'Forage',
        completionDate: 'Feb 2024',
    },
    {
        title: 'Tata Cybersecurity Security Analyst Job Simulation',
        institution: 'Forage',
        completionDate: 'Feb 2024',
    },
    {
        title: 'Google Cybersecurity Professional Certificate',
        institution: 'Coursera',
        completionDate: 'May 2023 – Oct 2023',
    },
    {
        title: 'Blockchain Specialization',
        institution: 'Coursera',
        completionDate: 'Feb 2023 – Apr 2023',
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
