import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './css/App.css';

import gmail from '../images/icons/gmail.png'
import github from '../images/icons/github.png'
import linkedin from '../images/icons/linkedin.png'
import blank from '../images/icons/blank.png'
import me from '../images/me.jpg'

function App() {
  return (
    <div className="App">
      

      {/* HOME PC/TABLET =>*/}
      <div className="homePcTablet container">
        <div className="row">
          
          {/* MY IMAGE */}
          <div className="col-sm-4 d-flex justify-content-center align-items-center h-100">
              <img src={me} alt="Riddhesh Jangid" className="myImage"></img>
          </div>
          
          {/* MY INTRO */}
          <div className="col-sm-8 d-flex justify-content-center align-items-center h-100">
            <div className="introContainer">
              <h1 className="introText">
                Hey! My name is  
                <a href="#"> Riddhesh.</a>
              </h1>
              <h1 className="introText">
                I'm a full stack developer and 
              </h1>
              <h1 className="introText">
                a tech geek.
              </h1>
              <br/>
              <p className="subIntroText">
                This website is a stack of my experiments with developement in different enviroments and technologies.
                Apart from full stack development it includes blockchain, google chrome extension, android, ansible, python scripts and 
                netbeans.
                <br/><br/>
                You can see my major projects in project section and contact me at
                <img src={blank} className="blank"></img>
                <a href="mailto:riddhesh710@gmail.com?Subject=Hello%20Riddhesh" taget="_blank"><img src={gmail} className="socialIcon" alt="Gmail"></img></a>
                <img src={blank} className="blank"></img>
                <a href="https://github.com/riddhesh-jangid" taget="_blank"><img src={github} className="socialIcon" alt="Github"></img></a>
                <img src={blank} className="blank"></img>
                <a href="https://www.linkedin.com/in/riddhesh-jangid-27b90814a/" taget="_blank"><img src={linkedin} className="socialIcon" alt="Linkedin"></img></a>
              </p> 

            </div>
          </div>
        
        </div>
      </div>
      {/* <= HOME PC/TABLET */}

      {/* HOME MOBILE => */}
      <div className="homeMobile">
        <div className="mobileImageContainer d-flex justify-content-center align-items-center">
          <img src="./images/me.jpg" alt="Riddhesh Jangid" className="myImage"></img>
        </div>
        <div className="introContainer">
          <h1 className="introText">
          Hey! My name is  
          <a href="#"> Riddhesh.</a>
          </h1>
          <h1 className="introText">
            I'm a full stack developer and 
          </h1>
          <h1 className="introText">
            a tech geek.
          </h1>
          <br/>
          <p className="subIntroText">
            This website is a stack of my experiments with developement in different enviroments and technologies.
            Apart from full stack development it includes blockchain, google chrome extension, android, ansible, python scripts and 
            netbeans.
            <br/><br/>
            You can see all my projects in project section and contact me at
            <img src={blank} className="blank"></img>
            <a href="mailto:riddhesh710@gmail.com?Subject=Hello%20Riddhesh" taget="_blank"><img src={gmail} className="socialIcon" alt="Gmail"></img></a>
            <img src={blank} className="blank"></img>
            <a href="https://github.com/riddhesh-jangid" taget="_blank"><img src={github} className="socialIcon" alt="Github"></img></a>
            <img src={blank} className="blank"></img>
            <a href="https://www.linkedin.com/in/riddhesh-jangid-27b90814a/" taget="_blank"><img src={linkedin} className="socialIcon" alt="Linkedin"></img></a>
          </p>
        </div>
      </div>
      {/* <= HOME MOBILE */}

    </div>
  );
}

export default App;
