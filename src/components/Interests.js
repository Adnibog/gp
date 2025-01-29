import React from 'react';
import '../styles.css';

const Interests = () => {
    const interests = [
        { 
            title: "Network Security", 
            description: "Protecting networks from unauthorized access, misuse, malfunction, modification, destruction, or improper disclosure through policies and procedures."
        },
        { 
            title: "IoT Security", 
            description: "Ensuring the security of IoT devices and networks by protecting data they collect, transmit, and store, and ensuring user privacy and safety."
        },
        { 
            title: "Hardware Security", 
            description: "Securing physical devices and hardware components from tampering and unauthorized access using measures like secure boot and hardware encryption."
        },
        { 
            title: "Machine Learning", 
            description: "Developing algorithms that enable computers to learn from data and make predictions or decisions without explicit programming."
        },
        { 
            title: "CyberThreat Intelligence", 
            description: "Gathering and analyzing information about cyber threats to help organizations understand, anticipate, and mitigate risks."
        },
        { 
            title: "Vulnerability Detection", 
            description: "Identifying and addressing security vulnerabilities in systems, applications, and networks using tools and techniques to discover weaknesses."
        },
        { 
            title: "Side-Channel Analysis", 
            description: "Analyzing information from the physical implementation of systems, such as power consumption or electromagnetic emissions, to uncover security vulnerabilities."
        },
        { 
            title: "Cryptography", 
            description: "Securing communication through codes and ciphers to protect information from unauthorized access, ensuring data confidentiality, integrity, and authenticity."
        },
        { 
            title: "Blockchain Analytics", 
            description: "Analyzing blockchain data to gain insights, ensure security, examine transaction patterns, identify suspicious activities, and understand participant behavior."
        },
        { 
            title: "Cloud Security", 
            description: "Protecting data and applications in cloud environments from cyber threats by implementing encryption, access controls, and monitoring to safeguard resources."
        }
    ];

    return (
        <div className="research-interests">
            <h2>Research Interests</h2>
            <div className="research-interests-grid">
                {interests.map((interest, index) => (
                    <div key={index} className="research-interest-card">
                        <h3>{interest.title}</h3>
                        <p>{interest.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interests;
