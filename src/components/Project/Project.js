import React from 'react';


import NorthEastIcon from '@mui/icons-material/NorthEast';
import GitHub  from '@mui/icons-material/GitHub';
import carSs from '../../assets/images/car-ss.png';
import './project.css';

const Project = () => {
  return (
    <section className="project-bg" id="project">
      <div className="project">
        <section className="top-project">
          <h3>PORTFOLIO</h3>
          <p>Current project and the upcoming project</p>
        </section>

        <section className="bottom-project grid">
          <div className="first-project">
            <div className="f-p-img">
              <img src={carSs} alt="car project" />
            </div>
            <div className="f-p-info">
              <h3>First Project</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, illo. Voluptatem, earum sint.</p>
            </div>
          </div>

          <div className="f-p-part">
            <div className="f-pp-skills">
              <p>Adobe Illustrator</p>
              <p>React</p>
            </div>
            <div className="f-pp-links">
              <GitHub className='project-icon' />
              <NorthEastIcon className='project-icon' />
            </div>
          </div>
        </section>

        <section className="bottom-project grid">
          <div className="second-project">
            <div className="s-p-img">
              <img src={carSs} alt="car project" />
            </div>
            <div className="s-p-info">
              <h3>First Project</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, illo. Voluptatem, earum sint.</p>
            </div>
          </div>

          <div className="s-p-part">
            <div className="s-pp-skills">
              <p>Adobe Illustrator</p>
              <p>React</p>
            </div>
            <div className="f-pp-links">
              <GitHub className='project-icon' />
              <NorthEastIcon className='project-icon' />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Project