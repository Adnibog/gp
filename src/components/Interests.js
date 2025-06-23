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

const interests = [
    { title: "Network Security", description: "Protecting networks from unauthorized access, misuse, malfunction, modification, destruction, or improper disclosure through policies and procedures." },
    { title: "IoT Security", description: "Securing Internet of Things (IoT) devices and networks to protect against vulnerabilities and attacks." },
    { title: "Deep Learning", description: "Exploring deep learning techniques to identify and detect vulnerabilities and threats, aiming to enhance security measures through advanced algorithms." },
    { title: "Adversarial Machine Learning", description: "Studying techniques to make machine learning models robust against adversarial attacks and ensuring their reliability in hostile environments." },
    { title: "Malware Analysis", description: "Analyzing and understanding malicious software to develop effective defenses and mitigation strategies." },
    { title: "Cyber Threat Intelligence", description: "Gathering and analyzing information about current and potential cyber threats to improve security measures." },
    { title: "Vulnerability Detection", description: "Identifying and addressing security vulnerabilities in systems, applications, and networks using tools and techniques to discover weaknesses." },
    { title: "Side-Channel Analysis", description: "Investigating how timing and cache side channels in cryptographic algorithms can leak sensitive information through execution time variations and cache access patterns." }
];

const cardStyle = {
    background: "#f8f8f8",
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    padding: 20,
    margin: "12px 0"
};

const Interests = () => (
    <section id="interests" style={sectionStyle}>
        <div style={innerStyle}>
            <h2 style={{ fontSize: "2em", marginBottom: 32, textAlign: "center" }}>Research Interests</h2>
            <div>
                {interests.map((interest, idx) => (
                    <div key={idx} style={cardStyle}>
                        <h3 style={{ margin: "0 0 8px 0" }}>{interest.title}</h3>
                        <p style={{ margin: 0 }}>{interest.description}</p>
                    </div>
                ))}
            </div>
        </div>
        <style>
            {`
            @media (max-width: 900px) {
                #interests > div {
                    padding: 32px 12px !important;
                }
            }
            @media (max-width: 600px) {
                #interests > div {
                    padding: 24px 4px !important;
                }
            }
            `}
        </style>
    </section>
);

export default Interests;