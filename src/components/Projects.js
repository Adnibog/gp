import React from 'react';
import '../styles.css';

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

export default projects;
