import React from 'react';
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container footer_container">
        <div className="first">
          <h4>Sonu Kumar</h4>
          <p>© {year} Sonu Kumar.
             <br/>All rights reserved.</p>
          <p className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/sonu-kumar-sk19/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/sonu-19" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </p>
        </div>
        <div className="second">
          <h4>Get In Touch</h4>
          <p>If you have any questions or would like to collaborate, feel free to contact me!</p>
          <p className='mail'>Email: <a href="mailto:info@sonukumar.com">kumarsonu19082003@gmail.com</a></p>
          <p>Phone: <a href="tel:+917763007316">+91 7763007316</a></p>
        </div>
        <div className="third">
          <h4>About</h4>
          <a href="/resume.pdf" download="Sonu_Kumar_Resume.pdf">Download Resume</a>
          <p><a href="/">Portfolio</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
