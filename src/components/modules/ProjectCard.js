import React, {useState} from 'react';
import './css/ProjectCard.css';

function ProjectCard(props){
    const [project,setProject] = useState({
        "display": 'none',        
    })
    const showHideIntro = () =>{
        if(project["display"] === 'none'){
            setProject({
                "display": 'block',
                "animation": 'heightAnime 400ms ease-in-out both',
                "animation": 'opacityAnime 400ms ease-in-out both'
            })
        }
        else{
            setProject({
                "display": 'none'
            })
        }
    }    
    return(
        <div className="projectCard" onClick={() => {
            showHideIntro()
        }}>
            <time>{props.date}</time>     
            <p className="projectName">{props.projectName}</p> 
            <div className="projectIntro" style={project}>
                <p className="introduction">
                    {props.introduction1}
                </p>
                <p className="introduction">
                    {props.introduction2}
                </p>
                <div className="metadata">
                    <div className="row">
                        <div className="col-sm-6">Role : {props.role}</div>
                        <div className="col-sm-6"><a href={props.screenshots} target="_blank">{props.type}</a></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">Team : {props.teamSize}</div>
                        <div className="col-sm-6"><a href={props.siteLink} target="_blank">{props.site}</a></div>
                    </div>
                </div>
            </div>   
            <div className="tag-group">
                <p className="tag react-tag">{props.tag1}</p>
                <p className="tag django-tag">{props.tag2}</p>
                <p className="tag rest-tag">{props.tag3}</p>
            </div>       
        </div>
    );
}

export default ProjectCard;