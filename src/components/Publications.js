import React from 'react';
import PropTypes from 'prop-types';

const publications = [
    {
        title: "CNN based System for Automatic Number Plate Recognition",
        journal: "Journal of Soft Computing Paradigm, 5(4), 347-364",
        link: "https://doi.org/10.36548/jscp.2023.4.002"
    },
    {
        title: "Electronic Health Record Management System using RFID: Improving Efficiency and Accuracy in Healthcare",
        journal: "Journal of Information Technology and Digital World, 5(3), 274-290",
        link: "https://doi.org/10.36548/jitdw.2023.3.004"
    },
    {
        title: "Trek Monitoring System: Enhancing Safety and Adventure in the Outdoors using Arduino UNO and NodeMCU",
        journal: "Journal of Electronics and Informatics, 5(3), 235-252",
        link: "https://doi.org/10.36548/jei.2023.3.001"
    },
    // Add more publications as needed
];

const PublicationItem = ({ title, journal, link }) => (
    <li>
        <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
        </a> - {journal}
    </li>
);

PublicationItem.propTypes = {
    title: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

const Publications = () => (
    <div className="publications">
        <h2>Publications</h2>
        <ul>
            {publications.map((pub, index) => (
                <PublicationItem
                    key={index}
                    title={pub.title}
                    journal={pub.journal}
                    link={pub.link}
                />
            ))}
        </ul>
    </div>
);

export default Publications;