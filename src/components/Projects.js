import React from 'react';
import '../styles.css';

const projects = [
    {
        title: 'RFID-based Electronic Health Record Management System',
        description: 'Developed an RFID-based system to securely record and access electronic health records. Published as a paper in the Journal of Information Technology and Digital World.',
        image: `${process.env.PUBLIC_URL}/smart.jpg`
    },
    {
        title: 'Trek Monitoring System',
        description: 'Built a prototype gadget that updates trekkers about current location, humidity, weather forecast, and basic health information like body temperature, and heart rate. Published as a paper in the Journal of Electronics and Informatics.',
        image: `${process.env.PUBLIC_URL}/trek.png`
    },
    {
        title: 'Agrobot: Multi-Function Agricultural Robot',
        description: 'Prototyped a remote controller-based machine to plough fields, sow seeds, and water plants.',
        image: `${process.env.PUBLIC_URL}/agro.jpeg`
    }
];

const Projects = () => {
    return (
        <div className="projects-container section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {project.image ? (
                            <img src={project.image} alt={project.title} className="project-image" />
                        ) : (
                            <div className="placeholder-image">No Image Available</div>
                        )}
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
