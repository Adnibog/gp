import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Interests />
      <Projects />
      <Publications />
      <Certifications />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;