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
            title: "Machine Learning", 
            description: "Developing algorithms that enable computers to learn from data and make predictions or decisions without explicit programming."
        },
        { 
            title: "Human and Computer Vision", 
            description: "Enabling computers to interpret and make decisions based on visual data, and understanding how humans perceive and process visual information."
        },
        { 
            title: "Robotics", 
            description: "Designing and building robots and automated systems to perform tasks in various environments."
        },
        { 
            title: "Vulnerability Detection", 
            description: "Identifying and addressing security vulnerabilities in systems, applications, and networks using tools and techniques to discover weaknesses."
        },
        { 
            title: "Cyber Threat Intelligence", 
            description: "Gathering and analyzing information about current and potential cyber threats to improve security measures."
        },
        { 
            title: "Side-Channel Analysis", 
            description: "Analyzing information from the physical implementation of systems, such as power consumption or electromagnetic emissions, to uncover security vulnerabilities."
        },
        { 
            title: "Remote Sensing", 
            description: "Collecting and analyzing data from a distance, typically using satellite or aerial imagery, to monitor and assess environmental and geographical conditions."
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
