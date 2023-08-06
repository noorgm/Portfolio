import React, { useState } from 'react';

import { Link } from 'react-scroll';

import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo.png';
import './navbar.css';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  
  const menuIconHandler = () => {
    setOpenMenu(!openMenu);
  };

  const menuIconNavHandler = () => {
    setOpenMenu(false);
  };

  return (
    <section className='navbar'>
      <nav className='grid'>
        <Link to='home' spy={true} smooth={true} offset={-100} duration={500} className='nav-logo' onClick={menuIconNavHandler}>
          <img src={logo} alt="logo" />
        </Link>

        <div className={`menu-icon ${openMenu ? 'active' : ''}`} onClick={menuIconHandler}>
          <MenuIcon />
        </div>

        <div className={`nav-ul ${openMenu ? 'active' : ''}`}>
          <Link to="home" className='items' spy={true} smooth={true} offset={100} duration={500} onClick={menuIconNavHandler}>Home</Link>
          <Link to="about" className='items' spy={true} smooth={true} offset={100} duration={500} onClick={menuIconNavHandler}>About Me</Link>
          <Link to="project" className='items' spy={true} smooth={true} offset={100} duration={500} onClick={menuIconNavHandler}>Projects</Link>       
          <Link className='items nav-contact' to="contact" spy={true} smooth={true} offset={100} duration={500} onClick={menuIconNavHandler}>
            <button>Contact Me</button>
          </Link>     
        </div>
      </nav>
    </section>
  )
}     

  
export default Navbar
