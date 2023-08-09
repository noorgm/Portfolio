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
            <p>A highly motivated individual seeking a Front-End development position. I'm proficient in HTML, CSS, MUI and Bootstrap, with a solid understanding of JavaScript and React. 
            I'm skilled in creating sketches, using Adobe XD or Figma, and maintaining responsive websites that offer smooth user experience. My expertise in developing user interfaces for better user satisfaction and engaging design using clean code. My aim is to take on new challenges, and use my skills to enhance user experience through new features and improvements.</p> 
          </div>
        </section>
        </div>

    </section>
  )
}

export default About