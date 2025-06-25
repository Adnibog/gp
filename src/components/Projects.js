import React from 'react';

const sectionStyle = {
    width: "100vw",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto 3rem auto",
    padding: "0"
};
const innerStyle = {
    width: "100%",
    maxWidth: 1200,
    padding: "3rem 2rem",
    boxSizing: "border-box"
};

const cardStyle = {
    background: "#f8f8f8",
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    padding: "1.25rem",
    margin: "1rem 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "1.5rem",
    minWidth: 0
};

const imageStyle = {
    width: "180px",
    maxWidth: "40vw",
    height: "120px",
    objectFit: "cover",
    borderRadius: 8,
    flexShrink: 0
};

const detailsStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0
};

const projects = [
    {
        title: 'Crotonylation Site Prediction Using a Multi-Window Deep Learning Approach',
        description: 'Developed a deep learning model to predict lysine crotonylation (Kcr) sites by integrating global protein context and local sequence windows using pretrained language models (pLMs). Applied attention-based fusion of multi-window embeddings to combine local and global sequence information for improved prediction accuracy.',
        image: `${process.env.PUBLIC_URL}/kcr.png`
    },
    {
        title: 'Intrusion Detection using Machine Learning (SUEE1 Dataset)',
        description: 'Developed an intrusion detection system using machine learning on the 2017-SUEE dataset, involving packet aggregation and feature engineering for detecting malicious network traffic. Trained and evaluated multiple classification models (Random Forest, Decision Tree, MLP, Logistic Regression) using Confusion Matrix, Matthews Correlation Coefficient (MCC), and ROC Curve.',
        image: `${process.env.PUBLIC_URL}/ids.jpeg`
    },
    {
        title: 'CNN-based System for Automatic Number Plate Recognition',
        description: 'Designed an automated system for vehicle number plate recognition using Convolutional Neural Networks and image processing techniques. Improved image quality with CNN-based super-resolution and utilized bounding box segmentation for accurate character recognition.',
        image: `${process.env.PUBLIC_URL}/ANPR.jpeg`
    },
    {
        title: 'RFID-based Electronic Health Record Management System',
        description: 'Developed an RFID-based system to securely record and access electronic health records. Published as a paper in the Journal of Information Technology and Digital World.',
        image: `${process.env.PUBLIC_URL}/smart.jpg`
    },
    {
        title: 'Trek Monitoring System: Enhancing Safety and Adventure in the Outdoors',
        description: 'Built a prototype gadget that updates trekkers about current location, humidity, weather forecast, and basic health information like body temperature, and heart rate. Published as a paper in the Journal of Electronics and Informatics.',
        image: `${process.env.PUBLIC_URL}/trek.png`
    }
];

const Projects = () => (
    <section id="projects" style={sectionStyle}>
        <div style={innerStyle}>
            <h2 style={{ fontSize: "2em", marginBottom: "2rem", textAlign: "center" }}>Projects</h2>
            {projects.map((project, idx) => (
                <div key={idx} style={cardStyle} className="project-card">
                    <img src={project.image} alt={project.title} style={imageStyle} />
                    <div style={detailsStyle}>
                        <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2em" }}>{project.title}</h3>
                        <p style={{ margin: 0, fontSize: "1em" }}>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <style>
            {`
            @media (max-width: 900px) {
                #projects > div {
                    padding: 2rem 0.5rem !important;
                }
                .project-card {
                    gap: 1rem !important;
                }
            }
            @media (max-width: 600px) {
                #projects > div > .project-card {
                    flex-direction: column !important;
                    gap: 0.75rem !important;
                    padding: 1rem !important;
                }
                #projects img {
                    width: 100% !important;
                    max-width: 100% !important;
                    height: auto !important;
                }
                #projects h2 {
                    font-size: 1.5em !important;
                }
                #projects h3 {
                    font-size: 1em !important;
                }
                #projects p {
                    font-size: 0.95em !important;
                }
            }
            @media (max-width: 400px) {
                #projects > div {
                    padding: 1rem 0.25rem !important;
                }
                #projects h2 {
                    font-size: 1.1em !important;
                }
            }
            `}
        </style>
    </section>
);

export default Projects;