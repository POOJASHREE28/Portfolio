import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import ContactMe from './components/ContactMe/contactme';
import Footer from './components/Footer/footer';

function App() {
  const [activeSection, setActiveSection] = useState('home'); // Initial active section

  const handleNavigation = (section) => {
    setActiveSection(section);
    const targetSection = document.getElementById(section);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        onSectionClick={handleNavigation}
      />
      <main>
        <section id="Home">
          <Intro />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="ContactMe">
          <ContactMe />
        </section>
      </main>
      <Outlet /> {/* Outlet for potential nested routes */}
      <Footer />
    </div>
  );
}

export default App;
