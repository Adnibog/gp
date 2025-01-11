import React from 'react';

const ResearchInterests = () => {
    const interests = [
        "Network Security",
        "IoT Security",
        "Machine Learning",
        "Embedded Systems Security",
        "Vulnerability Detection",
        "Side-Channel Analysis",
        "Cryptography",
        "Data Privacy",
        "Blockchain Analytics",
        "Cloud Security"
    ];

    return (
        <div className="research-interests">
            <h2>Research Interests</h2>
            <ul>
                {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResearchInterests;