import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Interests from './components/Interests';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <main className="main-content">
                <section id="profile" className="section"><Profile /></section>
                <section id="interests" className="section"><Interests /></section>
                <section id="certifications" className="section"><Certifications /></section>
                <section id="publications" className="section"><Publications /></section>
                <section id="projects" className="section"><Projects /></section>
                <section id="contact" className="section"><Contact /></section>
            </main>
            <Footer />
        </div>
    );
}

export default App;