import React from 'react';

import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-bg" id="contact">
      <div className="contact-top">
        <h3>CONTACT ME</h3>
        <p>Lorem ipsum dolor consectetur!</p>
      </div>
      <div className="contact-bottom grid">
        <div className="contact-location">
          <div className="c-l-icon">
            <PinDropOutlinedIcon className='contact-icon' />
          </div>
          <div className="c-l-info">
            <h4>Location</h4>
            <p>Leeds, West Yorkshire, UK</p>
          </div>
        </div>
        <div className="contact-location mail">
          <div className="c-l-icon">
            <MarkEmailUnreadOutlinedIcon className='contact-icon' />
          </div>
          <div className="c-l-info">
            <h4>Mail</h4>
            <p>new-email@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact