import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { School, Work } from '@mui/icons-material'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="2016-2017"
        iconStyle={{background: "#3e497a", color:"#fff"}}
        icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>Al-Aman Matric Higher Secondary School, Sankaranpandal</h3>
          <p>HSE</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="2017-2021"
        iconStyle={{background: "#3e497a", color:"#fff"}}
        icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>A.V.C College of Engineering, Mayiladuthurai</h3>
          <p>B.E, Mechanical Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Associate System's Engineer, ADH Analytics Private Ltd.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Guindy, Chennai
          </h4>
          <p>Maintaining On-premises servers such as Security patches update, restore and backup of
databases.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            System's Engineer, Infosys Ltd.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            MCity, Chennai
          </h4>
          <p>Provided service for the client in developing the Web Application (Back-end using .NET Core, MS-SQL and Front-end using Angular with Typescript)</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience