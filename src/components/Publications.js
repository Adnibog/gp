import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const publications = [
    {
        title: "CNN based System for Automatic Number Plate Recognition",
        journal: "Journal of Soft Computing Paradigm, 5(4), 347-364",
        link: "https://doi.org/10.36548/jscp.2023.4.002",
        abstract: "This study presents a comprehensive approach to Automated Vehicle Number Plate Detection and Recognition, employing image processing and Convolutional Neural Networks (CNNs). The system encompasses two main stages: number plate detection and recognition. Utilizing a digital camera, the system employs image processing to segment the number plate region accurately. A super-resolution method is then applied via CNNs to enhance the image quality. Subsequently, a bounding box method isolates individual characters for precise recognition. In the recognition phase, CNNs extract features for effective classification. The study aims to advance automated vehicle identification systems for law enforcement and parking management applications, promising accurate and efficient number plate detection and recognition. The proposed work has also developed a user interface to ensure the successfulness of the objectives aimed."
    },
    {
        title: "Electronic Health Record Management System using RFID: Improving Efficiency and Accuracy in Healthcare",
        journal: "Journal of Information Technology and Digital World, 5(3), 274-290",
        link: "https://doi.org/10.36548/jitdw.2023.3.004",
        abstract: "This research presents the development and implementation of an Electronic Health Record Management System (EHRMS) using Radio Frequency Identification (RFID) technology. The study discusses the limitations of traditional paper-based health record systems and highlights the benefits of integrating RFID technology in healthcare settings. The EHRMS streamlines patient identification and data capture processes, enhances data accuracy, and improves overall healthcare delivery. Real-time synchronization ensures up-to-date and easily accessible patient records, empowering healthcare providers to make informed decisions and provide timely interventions. The paper concludes with the potential impact of the RFID-based EHRMS in transforming healthcare record management and improving patient outcomes."
    },
    {
        title: "Trek Monitoring System: Enhancing Safety and Adventure in the Outdoors using Arduino UNO and NodeMCU",
        journal: "Journal of Electronics and Informatics, 5(3), 235-252",
        link: "https://doi.org/10.36548/jei.2023.3.001",
        abstract: "The Trek Monitoring System is a comprehensive hardware and software research initiative aimed at ensuring the safety and navigation of trekkers under the purview of Trekking Companies. This system addresses potential health and weather related challenges that may arise during treks, providing trekkers with a reliable guide to reach their destinations safely. The research encompasses a user friendly website offering essential information on various locations, detailed itineraries, and real time weather forecasts. Additionally, a specially designed hardware gadget, comprising a Temperature Sensor, Pulse Sensor, Arduino, LCD I2C Display, NodeMCU, and GPS Module, presents trekkers with instant temperature and pulse data while transmitting the same, along with precise GPS location, to the website. This facilitates continuous monitoring by Trekking Companies, enabling prompt assistance whenever necessary. The system further ensures regular assessment of trekker’s health conditions, contributing to timely search and rescue operations when it is necessary. By providing an efficient and secure trekking environment encompassing weather forecasts, location tracking, and health monitoring, the Trek Monitoring System promotes a seamless and protected trekking experience."
    },
    // Add more publications as needed
];

const PublicationItem = ({ title, journal, link, abstract }) => (
    <div className="publication-item">
        <h3>
            <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        </h3>
        <h4>{journal}</h4>
        <p>{abstract}</p>
    </div>
);

PublicationItem.propTypes = {
    title: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
};

const Publications = () => (
    <div className="publications section">
        <h2>Publications</h2>
        <div className="publications-grid">
            {publications.map((pub, index) => (
                <PublicationItem
                    key={index}
                    title={pub.title}
                    journal={pub.journal}
                    link={pub.link}
                    abstract={pub.abstract}
                />
            ))}
        </div>
    </div>
);

export default Publications;
