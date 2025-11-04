import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faShieldAlt, faBrain, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const sectionStyle = {
    width: "100vw",
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
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

const projects = [
    {
        title: 'Intrusion Detection using Machine Learning (SUEE1 Dataset)',
        year: '2025',
        description: 'Developed intrusion detection models using Random Forest, SVM, and Logistic Regression. Performed feature engineering on network flow data and analyzed results using precision, recall, and ROC metrics.',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
        icon: faShieldAlt,
        color: '#ff6b6b',
        github: '#',
        demo: '#'
    },
    {
        title: 'Crotonylation Site Prediction Using Multi-Window Deep Learning',
        year: '2025',
        description: 'Utilized pretrained protein language models (Prot5) to predict lysine crotonylation sites. Integrated global and local sequence features via attention-based fusion for higher accuracy.',
        technologies: ['Python', 'PyTorch', 'Deep Learning', 'Bioinformatics', 'Transformers'],
        icon: faBrain,
        color: '#4ecdc4',
        github: '#',
        demo: '#'
    },
    {
        title: 'CNN based System for Automatic Number Plate Recognition',
        year: '2023',
        description: 'Implemented a Convolutional Neural Network-based system for automatic number plate recognition with improved accuracy in vehicle identification systems. Published in Journal of Soft Computing Paradigm.',
        technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Image Processing'],
        icon: faBrain,
        color: '#45b7d1',
        github: '#',
        demo: '#'
    },
    {
        title: 'Electronic Health Record Management System using RFID',
        year: '2023',
        description: 'Developed a secure RFID-based EHR management prototype to improve healthcare data accuracy and streamline patient identification. Published in Journal of Information Technology and Digital World.',
        technologies: ['Arduino', 'RFID', 'IoT', 'Database', 'Healthcare IT'],
        icon: faHeartbeat,
        color: '#f9ca24',
        github: '#',
        demo: '#'
    },
    {
        title: 'Trek Monitoring System',
        year: '2023',
        description: 'Developed an IoT-based trek monitoring system using Arduino UNO and NodeMCU to enhance safety for outdoor adventurers through real-time tracking and alerts. Published in Journal of Electronics and Informatics.',
        technologies: ['Arduino', 'NodeMCU', 'IoT', 'GPS', 'Real-time Systems'],
        icon: faShieldAlt,
        color: '#fd79a8',
        github: '#',
        demo: '#'
    }
];

const Projects = () => (
    <section id="projects" style={sectionStyle}>
        <div style={innerStyle}>
            <h2 className="projects-title">Projects</h2>
            <p className="projects-subtitle">
                Academic and research projects spanning cybersecurity, machine learning, and IoT systems
            </p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-header">
                            <div className="project-icon-wrapper" style={{ backgroundColor: project.color }}>
                                <FontAwesomeIcon icon={project.icon} className="project-icon" />
                            </div>
                            <span className="project-year">{project.year}</span>
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {project.github && (
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <FontAwesomeIcon icon={faGithub} /> Code
                                </a>
                            )}
                            {project.demo && (
                                <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Details
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <style>
            {`
            #projects {
                color: #fff !important;
            }
            
            .projects-title {
                font-size: 3rem !important;
                font-weight: 700 !important;
                text-align: center !important;
                margin-bottom: 1rem !important;
                color: #fff !important;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.2) !important;
            }
            
            .projects-subtitle {
                font-size: 1.2rem !important;
                text-align: center !important;
                margin-bottom: 3rem !important;
                color: rgba(255,255,255,0.9) !important;
                font-weight: 300 !important;
            }
            
            .projects-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 2rem;
            }
            
            .project-card {
                background: rgba(255,255,255,0.95) !important;
                border-radius: 1.5rem !important;
                padding: 2rem !important;
                transition: all 0.3s ease !important;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
                backdrop-filter: blur(10px) !important;
                display: flex;
                flex-direction: column;
                border-top: 4px solid transparent !important;
            }
            
            .project-card:hover {
                transform: translateY(-10px) !important;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
                border-top-color: #2575fc !important;
            }
            
            .project-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
            }
            
            .project-icon-wrapper {
                width: 60px;
                height: 60px;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.3s ease !important;
            }
            
            .project-card:hover .project-icon-wrapper {
                transform: scale(1.1) rotate(5deg) !important;
            }
            
            .project-icon {
                font-size: 2rem !important;
                color: #fff !important;
            }
            
            .project-year {
                font-size: 0.9rem !important;
                font-weight: 600 !important;
                color: #6a11cb !important;
                background: rgba(106,17,203,0.1) !important;
                padding: 0.5rem 1rem !important;
                border-radius: 20px !important;
            }
            
            .project-title {
                font-size: 1.4rem !important;
                font-weight: 600 !important;
                margin-bottom: 1rem !important;
                color: #2d3436 !important;
                line-height: 1.3 !important;
            }
            
            .project-description {
                font-size: 0.95rem !important;
                color: #636e72 !important;
                line-height: 1.6 !important;
                margin-bottom: 1.5rem !important;
                flex-grow: 1;
            }
            
            .project-tech {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-bottom: 1.5rem;
            }
            
            .tech-badge {
                font-size: 0.8rem !important;
                padding: 0.4rem 0.8rem !important;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                color: #fff !important;
                border-radius: 15px !important;
                font-weight: 500 !important;
                transition: transform 0.2s ease !important;
            }
            
            .tech-badge:hover {
                transform: scale(1.05) !important;
            }
            
            .project-links {
                display: flex;
                gap: 1rem;
                margin-top: auto;
            }
            
            .project-link {
                display: inline-flex !important;
                align-items: center !important;
                gap: 0.5rem !important;
                padding: 0.6rem 1.2rem !important;
                background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%) !important;
                color: #fff !important;
                text-decoration: none !important;
                border-radius: 20px !important;
                font-weight: 600 !important;
                font-size: 0.9rem !important;
                transition: all 0.3s ease !important;
                flex: 1;
                justify-content: center !important;
            }
            
            .project-link:hover {
                transform: translateY(-2px) !important;
                box-shadow: 0 5px 15px rgba(106,17,203,0.4) !important;
            }
            
            @media (max-width: 900px) {
                .projects-title {
                    font-size: 2.5rem !important;
                }
                
                .projects-grid {
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }
            }
            
            @media (max-width: 600px) {
                #projects {
                    padding: 3rem 1rem !important;
                }
                
                .projects-title {
                    font-size: 2rem !important;
                }
                
                .projects-subtitle {
                    font-size: 1rem !important;
                }
                
                .projects-grid {
                    grid-template-columns: 1fr;
                }
                
                .project-links {
                    flex-direction: column;
                }
            }
            `}
        </style>
    </section>
);

export default Projects;