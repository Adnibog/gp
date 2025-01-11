import React from 'react';
import '../styles.css';

const projects = [
    {
        title: 'Trek Monitoring System',
        description: 'Built a prototype gadget that updates trekkers about current location, humidity, weather forecast, and basic health information like body temperature, and heart rate. Published as a paper in the Journal of Electronics and Informatics.',
        link: '',
        image: ''
    },
    {
        title: 'RFID-based Electronic Health Record Management System',
        description: 'Developed an RFID-based system to securely record and access electronic health records. Published as a paper in the Journal of Information Technology and Digital World.',
        link: '',
        image: ''
    },
    {
        title: 'Agrobot: Multi-Function Agricultural Robot',
        description: 'Prototyped a remote controller-based machine to plough fields, sow seeds, and water plants.',
        link: '',
        image: ''
    }
];

const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {project.image ? (
                            <img src={project.image} alt={project.title} />
                        ) : (
                            <div className="placeholder-image">No Image Available</div>
                        )}
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        ) : (
                            <span>No Link Available</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
