import React from 'react';


import portrait from '../../assets/images/portrait1.png'
import './home.css';


const Home = () => {
  return (
    <main className="home">
      <section className="container">
        <div className="main-home grid">

          <section className="left-home">
            <div className="l-h-top">
              <h1>Noorullah GM</h1>
              <h3><span className='front-end'>Front-End</span> Developer</h3>
            </div>
            <div className="l-h-middle">
              <div className="home-skill">
                <span>icon</span>
                <h3>UI Design</h3>                
              </div>
              <div className="home-skill">
                <span>icon</span>
                <h3>Responsive Design</h3>                
              </div>
              <div className="home-skill">
                <span>icon</span>
                <h3>Git</h3>                
              </div>
            </div>
            <div className="home-btns">
              <button>View My Work</button>
              <p>Download CV</p>
            </div>
          </section>

          <section className="right-home">
            <img src={portrait} alt="my portraite" />
          </section>

        </div>
      </section>
    </main>
  )
}

export default Home