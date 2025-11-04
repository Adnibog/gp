import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMedal, faAward, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const sectionStyle = {
    width: "100vw",
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
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

const awards = [
    {
        title: 'Research Assistantship Award',
        organization: 'Rochester Institute of Technology',
        description: 'Granted by Rochester Institute of Technology for research and teaching excellence in cybersecurity and systems security domains.',
        icon: faAward,
        color: '#e74c3c'
    },
    {
        title: 'Winner – Battle for Speed Robotics Competition',
        organization: 'IOE Robotics Club',
        description: 'Secured first position in robotics race competition organized by IOE Robotics Club, demonstrating excellence in robotics design and control.',
        icon: faTrophy,
        color: '#f39c12'
    },
    {
        title: 'Full Undergraduate Scholarship',
        organization: 'Government of Nepal',
        description: 'Awarded full undergraduate scholarship by Government of Nepal for securing top academic rank in the competitive IOE entrance examination.',
        icon: faGraduationCap,
        color: '#3498db'
    }
];

const Awards = () => (
    <section id="awards" style={sectionStyle}>
        <div style={innerStyle}>
            <h2 className="awards-title">Honors & Awards</h2>
            <p className="awards-subtitle">
                Recognition for academic excellence and outstanding achievements
            </p>
            <div className="awards-grid">
                {awards.map((award, index) => (
                    <div key={index} className="award-card">
                        <div className="award-icon-wrapper" style={{ backgroundColor: award.color }}>
                            <FontAwesomeIcon icon={award.icon} className="award-icon" />
                        </div>
                        <h3 className="award-title">{award.title}</h3>
                        <div className="award-org">
                            <FontAwesomeIcon icon={faMedal} style={{ marginRight: '0.5rem', color: award.color }} />
                            {award.organization}
                        </div>
                        <p className="award-description">{award.description}</p>
                    </div>
                ))}
            </div>
        </div>
        
        <style>
            {`
            #awards {
                color: #fff !important;
            }
            
            .awards-title {
                font-size: 3rem !important;
                font-weight: 700 !important;
                text-align: center !important;
                margin-bottom: 1rem !important;
                color: #fff !important;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.2) !important;
            }
            
            .awards-subtitle {
                font-size: 1.2rem !important;
                text-align: center !important;
                margin-bottom: 3rem !important;
                color: rgba(255,255,255,0.9) !important;
                font-weight: 300 !important;
            }
            
            .awards-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 2rem;
            }
            
            .award-card {
                background: rgba(255,255,255,0.95) !important;
                border-radius: 1.5rem !important;
                padding: 2rem !important;
                text-align: center !important;
                transition: all 0.3s ease !important;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
                backdrop-filter: blur(10px) !important;
                border: 2px solid transparent !important;
            }
            
            .award-card:hover {
                transform: translateY(-10px) scale(1.02) !important;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
                border-color: rgba(255,255,255,0.5) !important;
            }
            
            .award-icon-wrapper {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem auto;
                transition: transform 0.3s ease !important;
                box-shadow: 0 5px 20px rgba(0,0,0,0.2) !important;
            }
            
            .award-card:hover .award-icon-wrapper {
                transform: scale(1.15) rotate(10deg) !important;
            }
            
            .award-icon {
                font-size: 2.5rem !important;
                color: #fff !important;
            }
            
            .award-title {
                font-size: 1.3rem !important;
                font-weight: 600 !important;
                margin-bottom: 0.8rem !important;
                color: #2d3436 !important;
                line-height: 1.3 !important;
            }
            
            .award-org {
                font-size: 1rem !important;
                font-weight: 500 !important;
                color: #636e72 !important;
                margin-bottom: 1rem !important;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .award-description {
                font-size: 0.95rem !important;
                color: #636e72 !important;
                line-height: 1.6 !important;
            }
            
            @media (max-width: 900px) {
                .awards-title {
                    font-size: 2.5rem !important;
                }
                
                .awards-grid {
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }
            }
            
            @media (max-width: 600px) {
                #awards {
                    padding: 3rem 1rem !important;
                }
                
                .awards-title {
                    font-size: 2rem !important;
                }
                
                .awards-subtitle {
                    font-size: 1rem !important;
                }
                
                .awards-grid {
                    grid-template-columns: 1fr;
                }
            }
            `}
        </style>
    </section>
);

export default Awards;