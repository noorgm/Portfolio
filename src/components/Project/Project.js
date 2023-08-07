import React from 'react';


import NorthEastIcon from '@mui/icons-material/NorthEast';
import GitHub  from '@mui/icons-material/GitHub';
import carSs from '../../assets/images/car-ss.png';
import './project.css';

const Project = () => {
  return (
    <main className="project-bg" id="project">
      <section className="top-project">
        <h3>PORTFOLIO</h3>
        <p>Current project and the upcoming project</p>
      </section>

        <section className="project grid">
          <div className="first-project">
            <div className="f-p-img">
              <img src={carSs} alt="car project" />
            </div>
            <div className="f-p-info">
              <h3>First Project</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, illo. Voluptatem, earum sint.</p>
            </div>

            <div className="f-p-part">
              <div className="f-pp-skills">
                <p>Adobe Illustrator</p>
                <p>React</p>
              </div>
              <div className="f-pp-links">
                <a href="https://github.com/noorgm" target="_blank" rel="noreferrer"><GitHub className='project-icon'/></a>
                <a href="https://www.carhire.noorullah.me" target="_blank" rel="noreferrer"><NorthEastIcon className='project-icon car-hire' /></a>                
              </div>
            </div>
          </div>

          <div className="second-project">
            <div className="s-p-img">
              <img src={carSs} alt="car project" />
            </div>
            <div className="s-p-info">
              <h3>First Project</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, illo. Voluptatem, earum sint.</p>
            </div>       

            <div className="s-p-part">
              <div className="s-pp-skills">
                <p>Adobe Illustrator</p>
                <p>React</p>
              </div>
              <div className="f-pp-links">
                <a href="https://github.com/noorgm/Portfolio" target="_blank" rel="noreferrer"><GitHub className='project-icon'/></a>
                <a href="https://www.carhire.noorullah.me" target="_blank" rel="noreferrer"><NorthEastIcon className='project-icon car-hire'/></a>
              </div>
            </div> 
          </div>
        </section>

    </main>
  )
}

export default Project