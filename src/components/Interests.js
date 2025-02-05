import React from 'react';
import '../styles.css';

const Interests = () => {
    const interests = [
        { 
            title: "Network Security", 
            description: "Protecting networks from unauthorized access, misuse, malfunction, modification, destruction, or improper disclosure through policies and procedures."
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
            title: "Human and Computer Vision", 
            description: "Enabling computers to interpret and make decisions based on visual data, and understanding how humans perceive and process visual information."
        },
        { 
            title: "Remote Sensing", 
            description: "Collecting and analyzing data from a distance, typically using satellite or aerial imagery, to monitor and assess environmental and geographical conditions."
        },
        { 
            title: "Optical Imaging", 
            description: "Using light and optics to capture detailed images of objects, often for medical, scientific, or industrial applications."
        },
        { 
            title: "Vulnerability Detection", 
            description: "Identifying and addressing security vulnerabilities in systems, applications, and networks using tools and techniques to discover weaknesses."
        },
        { 
            title: "Side-Channel Analysis", 
            description: "Analyzing information from the physical implementation of systems, such as power consumption or electromagnetic emissions, to uncover security vulnerabilities."
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
