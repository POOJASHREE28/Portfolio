import React, { useState } from 'react';
import './contactme.css';
import Instagram from '../../assets/instagram.png';
import Telegram from '../../assets/telegram.png';
import Linkdin from '../../assets/linkdin.png';
import Discord from '../../assets/discord.png';
import Github from '../../assets/github.png';
function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <section id="contactMe">
      <div className="contact-header">ContactMe</div>
      <div className="heading">Get in touch</div>
      
      <div className="contactContent">
        <div className="main-info">
          <div className="contact-info">
            <p style={{ fontSize: '25px', marginBottom: '10px', fontWeight: 'bold', fontStyle: 'normal' }}>
            Email: <span style={{ fontSize: '25px', fontWeight: 'bold', fontStyle: 'normal' }}>poojapoojashree@gmail.com</span>
            </p>
            <p style={{ fontSize: '25px', fontWeight: 'bold', fontStyle: 'normal' }}>
            Phone: <span style={{ fontSize: '25px', fontWeight: 'bold', fontStyle: 'normal' }}>+917204472899</span>
            </p>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="contact-form-fields">
                <div className="name-email-row">
                  <div className="name-field">
                    <input type="text" id="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="email-field">
                    <input type="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="message-field">
                  <textarea id="message" value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)} style={{ width: '60%', height: '20%' }} />
                </div>
              </div>
              <button type="submit" className="contact-form-submit">
                Send
              </button>
            </form>
          </div>
        </div>

        <div class="social-icons">
          <a href="https://www.instagram.com/" target="_self">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://github.com/" target="_self">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/" target="_self">
            <img src={Linkdin} alt="LinkedIn" />
          </a>
          <a href="https://telegram.org/" target="_self">
            <img src={Telegram} alt="Telegram" />
          </a>
          <a href="https://discord.com/" target="_self">
            <img src={Discord} alt="Discord" />
          </a>
        </div>

      
      </div>
    </section>
  );
}

export default ContactMe;
