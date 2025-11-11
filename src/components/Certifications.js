import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const sectionStyle = {
    width: "100%",
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    display: "flex",
    justifyContent: "center",
    padding: "4rem 2rem",
    margin: "0",
    boxSizing: "border-box",
    overflow: "hidden"
};

const innerStyle = {
    width: "100%",
    maxWidth: 1200,
    boxSizing: "border-box"
};

const certifications = [
    {
        title: 'Reactor Certification',
        issuer: 'Chainalysis',
        date: 'November 2024',
        description: 'Acquired practical skills to analyze and trace Bitcoin transactions using the Chainalysis Reactor tool for blockchain forensics and cryptocurrency investigations.',
        image: '/chain.png',
        color: '#f7931a'
    },
    {
        title: 'Cryptocurrency Fundamentals Certification',
        issuer: 'Chainalysis',
        date: 'October 2024',
        description: 'Gained foundational knowledge of blockchain technology and cryptocurrency ecosystems, and learned to utilize blockchain explorers to investigate Bitcoin transactions.',
        image: '/chain.png',
        color: '#627eea'
    },
    {
        title: 'Datacom Cybersecurity Job Simulation',
        issuer: 'Forage',
        date: 'February 2024',
        description: 'Completed hands-on cybersecurity simulation focused on threat detection, security operations, and implementing defensive measures in enterprise environments.',
        image: '/forage.png',
        color: '#0070ba'
    },
    {
        title: 'Tata Cybersecurity Security Analyst Job Simulation',
        issuer: 'Forage',
        date: 'February 2024',
        description: 'Gained practical experience in security analysis, vulnerability assessment, and incident response through industry-based cybersecurity scenarios.',
        image: '/forage.png',
        color: '#0070ba'
    },
    {
        title: 'JPMorgan Chase & Co. Software Engineering Virtual Experience',
        issuer: 'Forage',
        date: 'Feb 2024',
        description: 'Completed virtual software engineering program focused on financial technology and software development practices.',
        image: '/forage.png',
        color: '#0070ba'
    },
    {
        title: 'Cybersecurity Specialization',
        issuer: 'Coursera',
        date: 'October 2023',
        description: 'Completed four advanced modules: Introduction to Cyber Attacks, Cyber Attack Countermeasures, Real-Time Cyber Threat Detection and Mitigation, and Enterprise and Infrastructure Security.',
        image: '/coursera.png',
        color: '#0056d2'
    },
    {
        title: 'Google Cybersecurity Professional Certificate',
        issuer: 'Coursera',
        date: 'October 2023',
        description: 'Developed proficiency in threat analysis, SIEM operations using Splunk, and incident response techniques through hands-on labs and practical exercises.',
        image: '/coursera.png',
        color: '#4285f4'
    },
    {
        title: 'Blockchain Specialization',
        issuer: 'Coursera',
        date: 'April 2023',
        description: 'Completed comprehensive program covering blockchain fundamentals, smart contract development, decentralized applications, and blockchain platform architecture.',
        image: '/coursera.png',
        color: '#0056d2'
    }
];

const Certifications = () => (
    <section id="certifications" style={sectionStyle}>
        <div style={innerStyle}>
            <h2 className="cert-title">Certifications</h2>
            <p className="cert-subtitle">
                Professional certifications demonstrating expertise in cybersecurity and blockchain analysis
            </p>
            <div className="cert-grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="cert-card">
                        <div className="cert-header">
                            <div className="cert-image-wrapper">
                                <img 
                                    src={cert.image} 
                                    alt={cert.issuer}
                                    className="cert-image"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <div className="cert-date">{cert.date}</div>
                        </div>
                        <h3 className="cert-card-title">{cert.title}</h3>
                        <div className="cert-issuer">
                            <FontAwesomeIcon icon={faAward} style={{ marginRight: '0.5rem', color: cert.color }} />
                            {cert.issuer}
                        </div>
                        <p className="cert-description">{cert.description}</p>
                    </div>
                ))}
            </div>
        </div>
        
        <style>
            {`
            #certifications {
                color: #fff !important;
            }
            
            .cert-title {
                font-size: 3rem !important;
                font-weight: 700 !important;
                text-align: center !important;
                margin-bottom: 1rem !important;
                color: #fff !important;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.2) !important;
            }
            
            .cert-subtitle {
                font-size: 1.2rem !important;
                text-align: center !important;
                margin-bottom: 3rem !important;
                color: rgba(255,255,255,0.9) !important;
                font-weight: 300 !important;
            }
            
            .cert-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 2rem;
            }
            
            .cert-card {
                background: rgba(255,255,255,0.95) !important;
                border-radius: 1.5rem !important;
                padding: 2rem !important;
                transition: all 0.3s ease !important;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
                backdrop-filter: blur(10px) !important;
                border: 2px solid transparent !important;
            }
            
            .cert-card:hover {
                transform: translateY(-10px) !important;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
                border-color: rgba(255,255,255,0.5) !important;
            }
            
            .cert-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
            }
            
            .cert-image-wrapper {
                width: 60px;
                height: 60px;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #fff;
                padding: 0.5rem;
                transition: transform 0.3s ease !important;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
            }
            
            .cert-card:hover .cert-image-wrapper {
                transform: scale(1.1) rotate(5deg) !important;
            }
            
            .cert-image {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            
            .cert-date {
                font-size: 0.9rem !important;
                font-weight: 600 !important;
                color: #f5576c !important;
                background: rgba(245,87,108,0.1) !important;
                padding: 0.5rem 1rem !important;
                border-radius: 20px !important;
            }
            
            .cert-card-title {
                font-size: 1.4rem !important;
                font-weight: 600 !important;
                margin-bottom: 0.8rem !important;
                color: #2d3436 !important;
                line-height: 1.3 !important;
            }
            
            .cert-issuer {
                font-size: 1rem !important;
                font-weight: 500 !important;
                color: #636e72 !important;
                margin-bottom: 1rem !important;
                display: flex;
                align-items: center;
            }
            
            .cert-description {
                font-size: 0.95rem !important;
                color: #636e72 !important;
                line-height: 1.7 !important;
                text-align: justify !important;
                text-justify: inter-word !important;
                hyphens: auto !important;
                word-spacing: 0.15em !important;
            }
            
            @media (max-width: 900px) {
                .cert-title {
                    font-size: 2.5rem !important;
                }
                
                .cert-grid {
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }
            }
            
            @media (max-width: 600px) {
                #certifications {
                    padding: 3rem 1rem !important;
                }
                
                .cert-title {
                    font-size: 2rem !important;
                }
                
                .cert-subtitle {
                    font-size: 1rem !important;
                }
                
                .cert-grid {
                    grid-template-columns: 1fr;
                }
                
                .cert-header {
                    flex-direction: column;
                    gap: 1rem;
                }
            }
            `}
        </style>
    </section>
);

export default Certifications;