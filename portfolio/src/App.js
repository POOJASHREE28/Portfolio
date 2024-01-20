import React from 'react';
// import {  useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import ContactMe from './components/ContactMe/contactme';
import Footer from './components/Footer/footer';

function App() {

  return (
    <div className="App">
      <Navbar  />
      <Intro />
      <About  />
      <Projects  />
      <ContactMe/>
      <Footer />
    </div>
  );
}

export default App;

