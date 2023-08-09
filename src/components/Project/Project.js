import React from 'react';


import NorthEastIcon from '@mui/icons-material/NorthEast';
import GitHub  from '@mui/icons-material/GitHub';
import carSs from '../../assets/images/car-ss.png';
import muscleCar from '../../assets/images/muscle-car-1.png';
import './project.css';

const Project = () => {
  return (
    <main className="project-bg" id="project">
      <section className="top-project">
        <h3>PORTFOLIO</h3>
        <p>Current projects so far</p>
      </section>

        <section className="project grid">
          <div className="first-project">
            <div className="f-p-img">
              <img src={carSs} alt="car project" />
            </div>
            <div className="f-p-info">
              <h3>Car Hire</h3>
              <p>A online car rental company that allows users to rent a car. Also, users can search their favourite car on Car page.</p>
            </div>

            <div className="f-p-part">
              <div className="f-pp-skills">
                <p>Sketching</p>
                <p>Adobe Illustrator</p>
                <p>React</p>
              </div>
              <div className="f-pp-links">
                <a href="https://github.com/noorgm" target="_blank" rel="noreferrer"><GitHub className='project-icon'/></a>
                <a href="https://car-hire.noorullah.me" target="_blank" rel="noreferrer"><NorthEastIcon className='project-icon car-hire' /></a>                
              </div>
            </div>
          </div>

          <div className="second-project">
            <div className="s-p-img">
              <img src={muscleCar} alt="Muscle Car" />
            </div>
            <div className="s-p-info">
              <h3>Muscle Car designed it using XD</h3>
              <p>I have designed it using Adobe Illustrator to create the logo and put car and its background together. And Adobe XD to designed the whole page.</p>
            </div>       

            <div className="s-p-part">
              <div className="s-pp-skills">
                <p>Adobe XD</p>
                <p>Adobe Illustrator</p>
              </div>
              <div className="f-pp-links">
                <a href={muscleCar} target="_blank" rel="noreferrer"><GitHub className='project-icon'/></a>
                <a href={muscleCar} target="_blank" rel="noreferrer"><NorthEastIcon className='project-icon car-hire'/></a>
              </div>
            </div> 
          </div>
        </section>

    </main>
  )
}

export default Project