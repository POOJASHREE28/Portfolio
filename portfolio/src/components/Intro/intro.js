import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';

const Intro = () => {
  return (
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Poojashree</span><br/>Ambitious</span>
            <p className="introPara">As a software developer, I am eager to seize every opportunity that comes my<br/> way to acquire and improve my knowledge and skills.</p>
            
        </div>
        <img  src={bg} alt="Profile" className="bg"/>
      </section>
  )
}

export default Intro;