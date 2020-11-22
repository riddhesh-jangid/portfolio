import React, {useState} from 'react';
import './css/Projects.css';
import ProjectCard from './modules/ProjectCard';

function Projects(){
    
    return (
        <div className="container">
            <p className="title">Projects</p>

            {/* Mine Smart */}
            <ProjectCard
                date = "March 10, 2020" 
                projectName = "Mine Smart : A WebApp for managing data of mining"
                introduction1 = "Mine Smart is a webapp build for managing data of mining. It keeps track of all debits, credits, daily expenses, items purchase, item supply, workers salary etc. With simple user interface and responsive design it also has proper error messasing so that user can easily use this webapp."
                introduction2 = "Data is displayed with filters like date and paid status. Tables have proper spacing so that user can read data easily."
                role = "Fullstack developer, Leader"
                teamSize = "4"
                type="Screenshots"
                screenshots = "https://drive.google.com/drive/folders/1H-oz2PZ7Lk8A8SNiBLYaIAYCgEVrxvr4?usp=sharing"
                site = "Link(Hosted on Heroku)"
                siteLink = "https://minesmart-frontend.herokuapp.com"
                tag1 = "React"
                tag2 = "Django"
                tag3 = "REST"
            ></ProjectCard>


            {/* Ethereum Publlish */}
            <ProjectCard
                date = "April 27, 2020" 
                projectName = "Ethereum Publish : DApp build on ethereum public blockchain"
                introduction1 = "Ethereum publish is a decentralized application build for writers to publish their work on ethereum public blockchain. Ethereum publish can protect author's works from theft and also save intermediate money which are taken by publishers. Their are two entities author and reader. Author can upload PDF of their work and set amount of ether for that PDF."
                role = "Fullstack developer"
                teamSize = "1"
                type="Screenshots"
                screenshots = "https://github.com/riddhesh-jangid/EthereumPublish#screenshots"
                site = "Github"
                siteLink = "https://github.com/riddhesh-jangid/EthereumPublish"
                tag1 = "Solidity"
                tag2 = "IFSC"
                tag3 = "React"
            ></ProjectCard>


            {/* Portfolio */}
            <ProjectCard
                date = "July 30, 2020" 
                projectName = "Portfolio : Portfolio site with simple and informative user interface"
                introduction1 = "portfolio is a responsive website with informative and simple user interface. It is build with React and bootstrap."
                role = "Front-End Developer"
                teamSize = "1"
                type="Responsive Webapp"
                site = "Link"
                siteLink = "www.google.com"
                tag1 = "React"
                tag2 = "Bootstrap"
                tag3 = "CSS"
            ></ProjectCard>

            {/* Assistant8 */}
            <ProjectCard
                date = "1 feb, 2017" 
                projectName = "Assistant8 : Android app for managing daily life"
                introduction1 = "Assistant8 is a android app which assist you in your daily life. It is operable from both text and voice. It have 8 categories birthday, homework, dates, notes, timer, weekly timer, sites and lists. It also have features like password and recycle bin for notes, done and not done for lists."
                role = "Android Developer"
                teamSize = "1"
                type="Screenshots"
                screenshots = "https://github.com/riddhesh-jangid/Assistant8/blob/master/README.md#screenshots"
                site = "Github"
                siteLink = "https://github.com/riddhesh-jangid/Assistant8"
                tag1 = "Android"
                tag2 = "Java"
                tag3 = "MySQL"
            ></ProjectCard>

            {/* Goansible */}
            <ProjectCard
                date = "17 July, 2019" 
                projectName = "Goansible : Automate on ansible with python language"
                introduction1 = "Goansible is a framework which compiles python programs into ansible commands and execute them. We can use ansible with python without learning playbook. By using python we can also take advantages of python's powerfull libraries and concept in automation."
                role = "Python Developer"
                teamSize = "1"
                type="Framework"
                site = "Github"
                siteLink = "https://github.com/riddhesh-jangid/Goansible"
                tag1 = "Python"
                tag2 = "Ansible"
                tag3 = "Scrapping"
            ></ProjectCard>


        </div>
    );
}

export default Projects;