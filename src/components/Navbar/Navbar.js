import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu'
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
    <section className='container'>
      <nav className="grid">
        <Link to='/' className='nav-logo' onClick={menuIconNavHandler}>
          <h4>logo here</h4>
        </Link>

        <div className={`menu-icon ${openMenu ? 'active' : ''}`} onClick={menuIconHandler}>
          <MenuIcon />
        </div>

        <div className={`nav-ul ${openMenu ? 'active' : ''}`}>
          <NavLink to='/' className='a-a'  style={({ isActive, isPending }) => { return { color: isActive ? 'var(--secondary-color)' : '', fontWeight: isActive ? 'bolder' : '' }; }} >Home</NavLink>
          <NavLink to='/about' className='a-a' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--secondary-color)' : '', fontWeight: isActive ? 'bolder' : '' };  }}>About Me</NavLink>
          <NavLink to='project' className='a-a' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--secondary-color)' : '', fontWeight: isActive ? 'bolder' : '' };  }}>Projects</NavLink>       
        </div>

        <Link to='contact' onClick={menuIconNavHandler} className={`nav-sign ${openMenu ? 'active' : ''}`}>
          <button>Contact Me</button>
        </Link>     
      </nav>
    </section>
  )
}     

  
export default Navbar