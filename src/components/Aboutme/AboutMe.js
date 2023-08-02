import React from 'react';


import workSpace from '../../assets/images/work-space1.jpg';
import './aboutme.css';


const About = () => {
  return (
    <section className="about-me-bg" id="about">

      <div className="about-me grid" >
        <section className="left-about-me">
          <img src={workSpace} alt="work space" />
        </section>

        <section className="right-about-me">
          <div className="r-a-me-box">
            <h3>ABOUT ME</h3>
            <h4>A hard working and motivated Front End Developer</h4>
            <p>Delectus, minima, magnam Lorem ipsum dolor sit amet consectetur adipisicing.fugit explicabo unde ea, cupiditate nesciunt aliquam. Tenetur dicta natus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, provident velit deleniti suscipit rerum vitae, molestias tempore tempora nemo vero soluta expedita. At, repellat aliquid!ab obcaecati id.</p> 
          </div>
        </section>
        </div>

    </section>
  )
}

export default About