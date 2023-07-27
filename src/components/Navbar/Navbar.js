import React from 'react';

import { Link } from 'react-scroll';

import './navbar.css';

const Navbar = () => {

  return (
    <section className='container'>
      <nav>
        <Link to='home' spy={true} smooth={true} offset={50} duration={500} className='nav-logo'>
          <h4>logo here</h4>
        </Link>

        <div className='nav-ul'>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About Me</Link>
          <Link to="project" spy={true} smooth={true} offset={-100} duration={500} >Projects</Link>       
        </div>

        <Link className='nav-sign' to="contact" spy={true} smooth={true} offset={-100} duration={500}>
          <button>Contact Me</button>
        </Link>     
      </nav>
    </section>
  )
}     

  
export default Navbar