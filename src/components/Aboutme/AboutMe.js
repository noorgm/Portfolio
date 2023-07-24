import React from 'react';


import DownloadIcon from '@mui/icons-material/Download';
import workSpace from '../../assets/images/work-space1.jpg';
import './aboutme.css';


const About = () => {
  return (
    <section className="about-me-bg">
      <div className="container">
        <div className="about-me grid">
          <section className="left-about-me">
            <img src={workSpace} alt="work space" />
          </section>

          <section className="right-about-me">
            <div className="r-a-me-box">
              <h3>ABOUT ME</h3>
              <h4>A hard working and motivated Front End Developer</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam similique delectus, minima, quae commodi tempora aspernatur obcaecati magnam fugit explicabo unde ea, cupiditate nesciunt aliquam. Tenetur dicta natus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, provident velit deleniti suscipit rerum vitae, molestias tempore tempora nemo vero soluta expedita. At, repellat aliquid!ab obcaecati id.</p> 
            </div>
          
            <div className="about-me-download">
              <button>Download CV<span className='download-icon'><DownloadIcon /></span></button>
            </div>
          </section>

         
        </div>
      </div>
    </section>
  )
}

export default About