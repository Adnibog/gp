import React from 'react';
import '../styles.css';

const ResearchInterests = () => {
    const interests = [
        { 
            title: "Network Security", 
            description: "Protecting networks from unauthorized access, misuse, malfunction, modification, destruction, or improper disclosure."
        },
        { 
            title: "IoT Security", 
            description: "Ensuring the security of Internet of Things devices and networks."
        },
        { 
            title: "Machine Learning", 
            description: "Developing algorithms that allow computers to learn from and make predictions on data."
        },
        { 
            title: "Embedded Systems Security", 
            description: "Securing embedded systems, which are dedicated computer systems designed for specific tasks."
        },
        { 
            title: "Vulnerability Detection", 
            description: "Identifying and addressing security vulnerabilities in software and hardware."
        },
        { 
            title: "Side-Channel Analysis", 
            description: "Analyzing information that can be gathered from the physical implementation of a computer system."
        },
        { 
            title: "Cryptography", 
            description: "Securing communication through the use of codes so that only the intended recipients can read the information."
        },
        { 
            title: "Data Privacy", 
            description: "Ensuring that personal data is collected, stored, and processed in a way that protects the privacy of individuals."
        },
        { 
            title: "Blockchain Analytics", 
            description: "Analyzing blockchain data to gain insights and ensure security."
        },
        { 
            title: "Cloud Security", 
            description: "Protecting data, applications, and infrastructures involved in cloud computing."
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

export default ResearchInterests;

