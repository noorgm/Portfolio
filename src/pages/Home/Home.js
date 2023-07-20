import React from 'react';
import './home.css';
import circle from '../../assets/images/circle-arrow2.png';
import portrait from '../../assets/images/portraite.png';
const Home = () => {
  return (
    <main className="home-bg">
      <section className="container">
        <div className="home grid">
          <section className="home-left">
            <h1>Hey, My name is <span className='name'>Noor</span>ullah</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus minima repellat voluptatum magni. Lo suscipit praesentium ex sit.</p>
          </section>
          <section className="hl-bottom">
            <img src={circle} alt="circle" />
            <button>About Me</button>
          </section>

          <section className="portrait">
            <img src={portrait} alt="my-portrait" />
          </section>

          <section className="home-skills">
            {/* <div className="box-skill">
              <img src={git} alt="git" />
              <p>Git</p>
            </div>
            <div className="box-skill">
              <img src={figma} alt="figma" />
              <p>Figma</p>
            </div>
            <div className="box-skill">
              <img src={xd} alt="adobe xd" />
              <p>Adobe XD</p>
            </div>
            <div className="box-skill">
              <img src={mui} alt="mui" />
              <p>Material UI</p>
            </div>
            <div className="box-skill">
              <img src={ai} alt="adobe ai" />
              <p>Adobe Illustrator</p>
            </div> */}
          </section>
        </div>
      </section>
    </main>
  )
}

export default Home