import React from 'react'
import { LinkedIn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import "../styles/Home.css"

function Home() {
  const githubProfileUrl = 'https://github.com/Ashkar-Noorul';
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Noorul</h2>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning and creating.
          </p>
          <LinkedIn/>
          <Email/>
          <a href={githubProfileUrl} target='_blank' rel='noopener noreferrer'>
          <GitHub/>
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              React JS, Angular, HTML, CSS, BootStrap, MaterialUI, NPM
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, .NET, ASP.NET Web API, AWS S3, MS-SQL
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              Javascript, Java, Python, C#, Typescript
            </span>
          </li>
          <li className='item'>
            <h2>Cloud & DevOps</h2>
            <span>
              Azure DevOps, Maven, Jenkins, Azure Monitor, Docker, Kubernetes, Microsoft Azure
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home