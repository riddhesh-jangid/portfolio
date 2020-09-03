import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Projects from './components/Projects';
import App from './components/App';
import About from './components/About';
import './home.css';

function Home(){
    return(
        <Router > 
            {/* NAVBAR => */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <a className="navbar-brand name">RIDDHESH JANGID</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">          
                <ul className="navbar-nav ml-auto">
                    <li className="nav-itme active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-itme">
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>  
                </div>
            </nav>
            {/* <= NAVBAR */}
            <Switch>
                <Route path="/" exact>
                    <App/>
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Home;