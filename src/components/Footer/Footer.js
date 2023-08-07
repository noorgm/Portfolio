import React from 'react';

import GitHub  from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MoodIcon from '@mui/icons-material/Mood';
import fLogo from '../../assets/images/f-logo.png';
import './footer.css';

const Footer = () => {
  return (
    <section className="footer-bg">
      <div className="footer grid">
        <section className="footer-top">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={fLogo} alt="logo" />
            </div>
            <p className='footer-p-icon'>Thanks for visiting! <span className='smiley-icon'><MoodIcon /></span></p>
          </div>
          <div className="footer-right">
            <a href="https://github.com/noorgm/Portfolio" target="_blank" rel="noreferrer"><GitHub className='f-r-icon' /></a>
            <a href="https://www.linkedin.com/in/noorullah-ghol-mohammed-00118423b/" target="_blank" rel="noreferrer"><LinkedInIcon className='f-r-icon' /></a>          
          </div>
        </section>

        <section className="footer-bottom">
          <p>Copyright &copy; 2023. All right reserved. Noorullah GM</p>
        </section>

      </div>
    </section>
  )
}

export default Footer