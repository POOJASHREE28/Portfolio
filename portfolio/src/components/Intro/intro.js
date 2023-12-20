import React from 'react';
import './intro.css';
// import bg from '../../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'
const Intro = () => {
  return (
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Poojashree</span><br/>Ambitious</span>
            <p className="introPara">As a software developer, I am eager to seize every opportunity that comes my<br/> way to acquire and improve my knowledge and skills.</p>
            <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg"/>Hire Me</button></Link>
        </div>
        <img  src="" alt="Profile" className="bg"/>
      </section>
  )
}

export default Intro;