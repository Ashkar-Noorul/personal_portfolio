import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const {id} = useParams();
    const project = projectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt="NA" />
        <GitHub/>
    </div>
  )
}

export default ProjectDisplay