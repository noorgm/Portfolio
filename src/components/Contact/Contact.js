import React from 'react';

import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-bg" id="contact">
      <div className="container">
        <div className="contact grid" >
          <div className="contact-top">
            <h3>CONTACT</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="contact-bottom">
            <div className="c-b-left">
              <div className="c-b-icon">
                <PinDropOutlinedIcon className='contact-icon' />
              </div>
              <div className="c-b-l-items">
                <h3>Locatoin</h3>
                <p>Leeds, England, UK</p>
              </div>
            </div>
            <div className="c-b-left">
              <div className="c-b-icon">
                <MarkEmailUnreadOutlinedIcon className='contact-icon' />                
              </div>
              <div className="c-b-l-items">
                <h3>Mail</h3>
                <p>make a new email@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact