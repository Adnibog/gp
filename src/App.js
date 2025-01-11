import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import ResearchInterests from './components/ResearchInterests';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

function App() {
    return (
        <Router basename="/gp">
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/research-interests" component={ResearchInterests} />
                    <Route path="/publications" component={Publications} />
                    <Route path="/certifications" component={Certifications} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
