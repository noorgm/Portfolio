import React from 'react';


import NorthEastIcon from '@mui/icons-material/NorthEast';
import mobile from '../../assets/images/mobile.png';
import GitHub  from '@mui/icons-material/GitHub';
import './project.css';

const Project = () => {
  return (
    <section className="project-bg">
      <div className="container">
        <h3 className='project-heading'>Projects</h3>
        <div className="projects grid">

          <div className="project-box container">
            <div className="project-box-heading">
              <div className="p-b-h-left">
                <h4>Car Hire</h4>
                <p>Cars for hire in Yorkshire</p>
              </div>
              <div className="p-b-h-right">
                <GitHub className='project-github-icon' />
                <NorthEastIcon className='project-arrow-icon'/>
              </div>
            </div>
            <div className="project-box-img">
              <img src={mobile} alt="mobile" />
            </div>
          </div>

          <div className="project-box container">
            <div className="project-box-heading">
              <div className="p-b-h-left">
                <h4>Car Hire</h4>
                <p>Cars for hire in Yorkshire</p>
              </div>
              <div className="p-b-h-right">
                <GitHub className='project-github-icon' />
                <NorthEastIcon className='project-arrow-icon'/>
              </div>
            </div>
            <div className="project-box-img">
              <img src={mobile} alt="mobile" />
            </div>
          </div>

          <div className="project-box container">
            <div className="project-box-heading">
              <div className="p-b-h-left">
                <h4>Car Hire</h4>
                <p>Cars for hire in Yorkshire</p>
              </div>
              <div className="p-b-h-right">
                <GitHub className='project-github-icon' />
                <NorthEastIcon className='project-arrow-icon'/>
              </div>
            </div>
            <div className="project-box-img">
              <img src={mobile} alt="mobile" />
            </div>
          </div>

          <div className="project-box container">
            <div className="project-box-heading">
              <div className="p-b-h-left">
                <h4>Car Hire</h4>
                <p>Cars for hire in Yorkshire</p>
              </div>
              <div className="p-b-h-right">
                <GitHub className='project-github-icon' />
                <NorthEastIcon className='project-arrow-icon'/>
              </div>
            </div>
            <div className="project-box-img">
              <img src={mobile} alt="mobile" />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Project