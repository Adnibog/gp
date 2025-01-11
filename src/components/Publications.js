import React from 'react';

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

const Publications = () => {
    return (
        <div className="publications">
            <h2>Publications</h2>
            <ul>
                {publications.map((pub, index) => (
                    <li key={index}>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            {pub.title}
                        </a> - {pub.journal}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Publications;