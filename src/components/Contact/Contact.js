import React from 'react';

// import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-bg" id="contact">
      <div className="contact-top">
        <h3>CONTACT ME</h3>
        <p>For further enquries please don't hesitate to contact me:</p>
      </div>
      <div className="contact-bottom grid">
        <div className="contact-location">
          <div className="c-l-icon">
            <PhoneInTalkOutlinedIcon className='contact-icon' />
          </div>
          <div className="c-l-info">
            <h4>Mobile</h4>
            <p>07399409176</p>
          </div>
        </div>
        <div className="contact-location mail">
          <div className="c-l-icon">
            <MarkEmailUnreadOutlinedIcon className='contact-icon' />
          </div>
          <div className="c-l-info">
            <h4>Mail</h4>
            <p>noorullahgm.2022@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact