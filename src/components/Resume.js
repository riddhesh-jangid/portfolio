import  React from 'react'
import resume from '../Documents/Resume.pdf'

function Resume(){
    return(<div>
        <iframe src={resume} className="resume"/>
    </div>)
}

export default Resume;