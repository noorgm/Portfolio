import React from 'react';


import NorthEastIcon from '@mui/icons-material/NorthEast';
import GitHub  from '@mui/icons-material/GitHub';
import carLogo from '../../assets/images/logoo.svg';
import carSs from '../../assets/images/car-ss.png';
import './project.css';

const Project = () => {
  return (
    <section className="project-bg">
      <div className="container">
        <h3 className='project-heading'>Projects</h3>

        <div className="projects grid">
          <div className="project-left">
            <img src={carSs} alt="car screenshot" />
          </div>

          <div className="project-right">
            <div className="p-r-heading">
              <h3>Car Hire</h3>
              <img src={carLogo} alt="car logo" />
            </div>
            <div className="p-r-middle">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste voluptatibus asperiores vero. Voluptas deleniti sequi ducimus itaque nostrum, vitae similique, voluptatibus delectus molestiae fugit, repudiandae quos necessitatibus unde eius. Non!</p>
              <div className="p-r-lib">
                <p>Lorem, ipsum</p>
                <p>Lorem, ipsum</p>
              </div>
            </div>
            <div className="p-r-bottom">
              <GitHub className='project-github-icon' />
              <NorthEastIcon className='project-arrow-icon'/>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Project