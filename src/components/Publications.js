import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faExternalLinkAlt, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const sectionStyle = {
    width: "100vw",
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
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

const publications = [
    {
        title: 'CNN based System for Automatic Number Plate Recognition',
        authors: 'Pandey, G., C, K. K., Lamichhane, N., & Subedi, U.',
        journal: 'Journal of Soft Computing Paradigm',
        year: '2023',
        volume: '5(4)',
        pages: '347–364',
        doi: '10.36548/jscp.2023.4.002',
        url: 'https://doi.org/10.36548/jscp.2023.4.002',
        abstract: 'This paper presents a CNN-based approach for automatic number plate recognition, demonstrating improved accuracy in vehicle identification systems.'
    },
    {
        title: 'Electronic Health Record Management System using RFID: Improving Efficiency and Accuracy in Healthcare',
        authors: 'Pandey, G., Sunar, A., Yogi, J., Poudel, N., & Koirala, K. R.',
        journal: 'Journal of Information Technology and Digital World',
        year: '2023',
        volume: '5(3)',
        pages: '274–290',
        doi: '10.36548/jitdw.2023.3.004',
        url: 'https://doi.org/10.36548/jitdw.2023.3.004',
        abstract: 'This research explores RFID technology implementation in healthcare systems to enhance patient data management and operational efficiency.'
    },
    {
        title: 'Trek Monitoring System: Enhancing Safety and Adventure in the Outdoors using Arduino UNO and NodeMCU',
        authors: 'Sunar, A., Lamichhane, B., Pandey, G., Yogi, J., & Poudel, N.',
        journal: 'Journal of Electronics and Informatics',
        year: '2023',
        volume: '5(3)',
        pages: '235–252',
        doi: '10.36548/jei.2023.3.001',
        url: 'https://doi.org/10.36548/jei.2023.3.001',
        abstract: 'This paper introduces an IoT-based trek monitoring system designed to improve safety for outdoor adventurers through real-time tracking and alerts.'
    }
];

const Publications = () => (
    <section id="publications" style={sectionStyle}>
        <div style={innerStyle}>
            <h2 className="pub-title">Publications</h2>
            <p className="pub-subtitle">
                Research contributions in computer vision, IoT systems, and healthcare technology
            </p>
            <div className="pub-list">
                {publications.map((pub, index) => (
                    <div key={index} className="pub-card">
                        <div className="pub-icon-wrapper">
                            <FontAwesomeIcon icon={faFileAlt} className="pub-icon" />
                        </div>
                        <div className="pub-content">
                            <h3 className="pub-paper-title">{pub.title}</h3>
                            <div className="pub-authors">
                                <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: '0.5rem', fontSize: '0.8rem' }} />
                                {pub.authors}
                            </div>
                            <div className="pub-journal">
                                <strong>{pub.journal}</strong>, {pub.volume}, {pub.pages} ({pub.year})
                            </div>
                            <p className="pub-abstract">{pub.abstract}</p>
                            <div className="pub-links">
                                <span className="pub-doi">DOI: {pub.doi}</span>
                                <a 
                                    href={pub.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="pub-link"
                                >
                                    View Publication <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <style>
            {`
            #publications {
                color: #fff !important;
            }
            
            .pub-title {
                font-size: 3rem !important;
                font-weight: 700 !important;
                text-align: center !important;
                margin-bottom: 1rem !important;
                color: #fff !important;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.2) !important;
            }
            
            .pub-subtitle {
                font-size: 1.2rem !important;
                text-align: center !important;
                margin-bottom: 3rem !important;
                color: rgba(255,255,255,0.9) !important;
                font-weight: 300 !important;
            }
            
            .pub-list {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            
            .pub-card {
                background: rgba(255,255,255,0.95) !important;
                border-radius: 1.5rem !important;
                padding: 2rem !important;
                display: flex;
                gap: 1.5rem;
                transition: all 0.3s ease !important;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
                backdrop-filter: blur(10px) !important;
                border-left: 5px solid #4facfe !important;
            }
            
            .pub-card:hover {
                transform: translateX(10px) !important;
                box-shadow: 0 15px 40px rgba(0,0,0,0.3) !important;
                border-left-color: #00f2fe !important;
            }
            
            .pub-icon-wrapper {
                width: 60px;
                height: 60px;
                min-width: 60px;
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.3s ease !important;
            }
            
            .pub-card:hover .pub-icon-wrapper {
                transform: scale(1.1) rotate(-5deg) !important;
            }
            
            .pub-icon {
                font-size: 1.8rem !important;
                color: #fff !important;
            }
            
            .pub-content {
                flex: 1;
            }
            
            .pub-paper-title {
                font-size: 1.4rem !important;
                font-weight: 600 !important;
                margin-bottom: 0.8rem !important;
                color: #2d3436 !important;
                line-height: 1.4 !important;
            }
            
            .pub-authors {
                font-size: 0.95rem !important;
                color: #636e72 !important;
                margin-bottom: 0.5rem !important;
                font-style: italic !important;
            }
            
            .pub-journal {
                font-size: 0.95rem !important;
                color: #2d3436 !important;
                margin-bottom: 1rem !important;
            }
            
            .pub-abstract {
                font-size: 0.95rem !important;
                color: #636e72 !important;
                line-height: 1.6 !important;
                margin-bottom: 1rem !important;
                text-align: justify !important;
                text-justify: inter-word !important;
                hyphens: auto !important;
                word-spacing: 0.05em !important;
            }
            
            .pub-links {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 1rem;
            }
            
            .pub-doi {
                font-size: 0.85rem !important;
                color: #636e72 !important;
                font-family: monospace !important;
                background: rgba(79,172,254,0.1) !important;
                padding: 0.3rem 0.8rem !important;
                border-radius: 5px !important;
            }
            
            .pub-link {
                display: inline-flex !important;
                align-items: center !important;
                gap: 0.5rem !important;
                padding: 0.6rem 1.5rem !important;
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%) !important;
                color: #fff !important;
                text-decoration: none !important;
                border-radius: 25px !important;
                font-weight: 600 !important;
                font-size: 0.9rem !important;
                transition: all 0.3s ease !important;
            }
            
            .pub-link:hover {
                transform: translateY(-2px) !important;
                box-shadow: 0 5px 15px rgba(79,172,254,0.4) !important;
            }
            
            @media (max-width: 900px) {
                .pub-title {
                    font-size: 2.5rem !important;
                }
                
                .pub-card {
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                .pub-icon-wrapper {
                    align-self: center;
                }
            }
            
            @media (max-width: 600px) {
                #publications {
                    padding: 3rem 1rem !important;
                }
                
                .pub-title {
                    font-size: 2rem !important;
                }
                
                .pub-subtitle {
                    font-size: 1rem !important;
                }
                
                .pub-links {
                    flex-direction: column;
                    align-items: flex-start;
                }
            }
            `}
        </style>
    </section>
);

export default Publications;