import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactme.css';
import Instagram from '../../assets/instagram.png';
import Telegram from '../../assets/telegram.png';
import Linkdin from '../../assets/linkdin.png';
import Discord from '../../assets/discord.png';
import Github from '../../assets/github.png';

function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3l1t8v5', 'template_tbfbjjg', form.current, 'GUZzCJifjH6SSfpyp')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <section id="contactMe">
      <div className="contact-header">ContactMe</div>
      <div className="heading">Get in touch</div>
      <div className="contactContent">
        <div className="main-info">
          <div>
            <p className="intro-paragraph">
              Excited to make a connection! Whether you've got a cool project <br></br>idea
              or just want to drop a friendly 'hi,' I'm all ears. Don't hesitate<br></br> to
              hit me up through the contact form or slide into my socials. <br></br>Always
              up for a chill collaboration and ready to dive into fresh<br></br>
              opportunities. Let's whip up something awesome together!
            </p>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail} className="">
              <div className="contact-form-fields">
                <div className="name-field">
                  <label>Name</label>
                  <input type="text" name="user_name" />
                </div>
                <div className="email-field">
                  <label>Email</label>
                  <input type="email" name="user_email" />
                </div> 
                <div className="message-field"> 
                  <label>Message</label>
                  <textarea name="message" />
                </div> 
              </div>   
              <input type="submit" value="Send" className="contact-form-submit"/>
            </form>
          </div>
        </div>
        <div className="social-icons">
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
