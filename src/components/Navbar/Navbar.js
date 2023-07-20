import React from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';

const Navbar = () => {
  return (
    <section className='container'>
      <nav className="grid">
        <Link to='/' className='logo'>
          <img src={logo} alt="logo" />
        </Link>

        <div className="ul">
          <NavLink className='one'  style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' }; }} >Home</NavLink>
          <NavLink className='two' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' };  }}>About Me</NavLink>
          <NavLink className='three' style={({ isActive, isPending }) => { return { color: isActive ? 'var(--highlight)' : '', fontWeight: isActive ? 'bolder' : '' };  }}>Projects</NavLink>       
        </div>

        <Link className='nav-contact'>
          <button>Contact Me</button>
        </Link>     
      </nav>
    </section>
  )
}     

  
export default Navbar