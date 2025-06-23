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
        <div className="App">
            <Navbar />
            <section id="profile"><Profile /></section>
            <section id="interests"><Interests /></section>
            <section id="publications"><Publications /></section>
            <section id="certifications"><Certifications /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
            <Footer />
        </div>
    );
}

export default App;