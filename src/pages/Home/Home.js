import React from 'react';


import portrait from '../../assets/images/portrait1.png'
import ui from '../../assets/images/ui.png'
import responsive from '../../assets/images/laptop.png'
import git from '../../assets/images/git.png'
import './home.css';


const Home = () => {
  return (
    <main className="home">
      <section className="container">
        <div className="main-home grid">

          <section className="left-home">
            <div className="l-h-top">
              <h1>Noorullah GM</h1>
              <h2><span className='front-end'>Front-End</span> Developer</h2>
            </div>
            <div className="l-h-middle">
              <div className="home-skill">
                <img src={ui} alt="ui design" />
                <h5>UI Design</h5>                
              </div>
              <div className="home-skill">
                <img src={responsive} alt="responsive design" />
                <h5>Responsive Design</h5>                
              </div>
              <div className="home-skill">
                <img src={git} alt="git" />
                <h5>Git</h5>                
              </div>
            </div>
            <div className="home-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi asperiores eius amet, cumque minima deleniti eveniet quas quasi dignissimos odit exercitationem in.</p>
            </div>
            <div className="home-btns">
              <button>View My Work</button>
              <button>Download CV</button>
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