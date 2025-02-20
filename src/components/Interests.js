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
            description: "Securing Internet of Things (IoT) devices and networks to protect against vulnerabilities and attacks."
        },
        { 
            title: "Deep Learning", 
            description: "Exploring deep learning techniques to identify and detect vulnerabilities and threats, aiming to enhance security measures through advanced algorithms."
        },
        { 
            title: "Adversarial Machine Learning", 
            description: "Studying techniques to make machine learning models robust against adversarial attacks and ensuring their reliability in hostile environments."
        },
        { 
            title: "Malware Analysis", 
            description: "Analyzing and understanding malicious software to develop effective defenses and mitigation strategies."
        },
        { 
            title: "Cyber Threat Intelligence", 
            description: "Gathering and analyzing information about current and potential cyber threats to improve security measures."
        },
        { 
            title: "Vulnerability Detection", 
            description: "Identifying and addressing security vulnerabilities in systems, applications, and networks using tools and techniques to discover weaknesses."
        },
        { 
            title: "Side-Channel Analysis",
            description: "Investigating how timing and cache side channels in cryptographic algorithms can leak sensitive information through execution time variations and cache access patterns."
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
