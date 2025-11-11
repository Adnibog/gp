import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faBug, faRobot, faBrain, faNetworkWired, faMicrochip, faSatelliteDish, faLock } from '@fortawesome/free-solid-svg-icons';

const sectionStyle = {
    width: "100vw",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    justifyContent: "center",
    padding: "4rem 2rem",
    margin: "0 auto 3rem auto",
    boxSizing: "border-box"
};

const innerStyle = {
    width: "100%",
    maxWidth: 1200,
    boxSizing: "border-box"
};

const interests = [
    {
        title: 'Vulnerability Detection',
        description: 'Open source software and hardware vulnerability discovery and analysis',
        icon: faBug,
        color: '#ff6b6b'
    },
    {
        title: 'Network Security',
        description: 'Securing network infrastructures and analyzing network-based attacks',
        icon: faNetworkWired,
        color: '#4ecdc4'
    },
    {
        title: 'LLM Security',
        description: 'Large Language Model security, prompt injection, and AI model vulnerabilities',
        icon: faBrain,
        color: '#45b7d1'
    },
    {
        title: 'Adversarial ML',
        description: 'Adversarial Machine Learning attacks and defense mechanisms',
        icon: faRobot,
        color: '#f9ca24'
    },
    {
        title: 'Offensive Security',
        description: 'Penetration testing, red teaming, and ethical hacking methodologies',
        icon: faShieldAlt,
        color: '#fd79a8'
    },
    {
        title: 'Defensive Security',
        description: 'Security monitoring, incident response, and threat detection',
        icon: faLock,
        color: '#a29bfe'
    },
    {
        title: 'Cyber Physical Systems',
        description: 'Security of integrated computational and physical processes',
        icon: faMicrochip,
        color: '#74b9ff'
    },
    {
        title: 'Sensor Security',
        description: 'Sensor attack modeling, detection, and mitigation strategies',
        icon: faSatelliteDish,
        color: '#55efc4'
    }
];

const Interests = () => (
    <section id="interests" style={sectionStyle}>
        <div style={innerStyle}>
            <h2 className="interests-title">Research Interests</h2>
            <p className="interests-subtitle">
                Exploring cutting-edge areas in cybersecurity, from vulnerability research to AI security
            </p>
            <div className="interests-grid">
                {interests.map((interest, index) => (
                    <div key={index} className="interest-card">
                        <div className="interest-icon-wrapper" style={{ backgroundColor: interest.color }}>
                            <FontAwesomeIcon icon={interest.icon} className="interest-icon" />
                        </div>
                        <h3 className="interest-title">{interest.title}</h3>
                        <p className="interest-description">{interest.description}</p>
                    </div>
                ))}
            </div>
        </div>
        
        <style>
            {`
            #interests {
                color: #fff !important;
            }
            
            .interests-title {
                font-size: 3rem !important;
                font-weight: 700 !important;
                text-align: center !important;
                margin-bottom: 1rem !important;
                color: #fff !important;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.2) !important;
            }
            
            .interests-subtitle {
                font-size: 1.2rem !important;
                text-align: center !important;
                margin-bottom: 3rem !important;
                color: rgba(255,255,255,0.9) !important;
                font-weight: 300 !important;
            }
            
            .interests-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 2rem;
            }
            
            .interest-card {
                background: rgba(255,255,255,0.95) !important;
                border-radius: 1.5rem !important;
                padding: 2rem !important;
                text-align: center !important;
                transition: all 0.3s ease !important;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
                backdrop-filter: blur(10px) !important;
            }
            
            .interest-card:hover {
                transform: translateY(-10px) scale(1.02) !important;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
            }
            
            .interest-icon-wrapper {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem auto;
                transition: transform 0.3s ease !important;
            }
            
            .interest-card:hover .interest-icon-wrapper {
                transform: rotate(360deg) scale(1.1) !important;
            }
            
            .interest-icon {
                font-size: 2.5rem !important;
                color: #fff !important;
            }
            
            .interest-title {
                font-size: 1.4rem !important;
                font-weight: 600 !important;
                margin-bottom: 0.8rem !important;
                color: #2d3436 !important;
            }
            
            .interest-description {
                font-size: 1rem !important;
                color: #636e72 !important;
                line-height: 1.6 !important;
                text-align: justify !important;
                text-justify: inter-word !important;
                hyphens: auto !important;
                word-spacing: 0.05em !important;
            }
            
            @media (max-width: 900px) {
                .interests-title {
                    font-size: 2.5rem !important;
                }
                
                .interests-grid {
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                }
            }
            
            @media (max-width: 600px) {
                #interests {
                    padding: 3rem 1rem !important;
                }
                
                .interests-title {
                    font-size: 2rem !important;
                }
                
                .interests-subtitle {
                    font-size: 1rem !important;
                }
                
                .interests-grid {
                    grid-template-columns: 1fr;
                }
            }
            `}
        </style>
    </section>
);

export default Interests;