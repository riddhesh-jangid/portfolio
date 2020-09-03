import React from 'react'
import './css/About.css'
import gmail from '../images/icons/gmail.png'
import github from '../images/icons/github.png'
import linkedin from '../images/icons/linkedin.png'
import blank from '../images/icons/blank.png'

function About(){
    return(
    <div className="aboutContainer">
        <center><h2 className="aboutIntroText">About Me</h2></center>
       <p className="basicText">Hii! I am Riddhesh. I am a undergraduate of computer science. I preferred javascript as my high level language and c++ to go somewhere deep in layer. I have experience with projects on web, chrome extension, android and blockchain. Arch linux is my favourite linux flavour.</p> 
       <br/>
       <p className="basicText">I like to compose my own <a href="https://www.youtube.com/channel/UCjoIlOy_aMDupjFUoFbGqhg/videos" target="_blank">songs</a> and play guitar. Cosmos and history are another subjects that are my free time fun. I love to play cricket, football, basketball and badminton. I have a special attachment with naruto. </p> 
       <br/>
       <p className="basicText">You can contact me on 
           <img src={blank} className="blank"></img>
            <a href="mailto:riddhesh710@gmail.com?Subject=Hello%20Riddhesh" taget="_blank"><img src={gmail} className="socialIcon" alt="Gmail"></img></a>
            <img src={blank} className="blank"></img>
            <a href="https://github.com/riddhesh-jangid" taget="_blank"><img src={github} className="socialIcon" alt="Github"></img></a>
            <img src={blank} className="blank"></img>
            <a href="https://www.linkedin.com/in/riddhesh-jangid-27b90814a/" taget="_blank"><img src={linkedin} className="socialIcon" alt="Linkedin"></img></a>
        </p>    
    </div>
    );
}

export default About;