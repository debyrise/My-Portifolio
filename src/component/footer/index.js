import React from 'react';
import './styles.scss'; // Import a CSS file for styling
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
            <div className="footer-icons">
               <a href="mailto:deborahoby693@gmail.com" aria-label="Email">
                 <FaEnvelope size={25} />
               </a>
               <a href="tel:+2348100364292" aria-label="Phone">
                 <FaPhoneAlt size={25} />
               </a>
               <a
                 href="https://www.linkedin.com/in/deborah-ujunwam-12ab61215/"
                 target="_blank"
                 rel="noreferrer"
                 aria-label="LinkedIn"
               >
                 <FaLinkedin size={25} />
               </a>
               <a
                 href="https://github.com/debyrise?tab=repositories"
                 target="_blank"
                 rel="noreferrer"
                 aria-label="GitHub"
               >
                 <FaGithub size={25} />
               </a>
         </div>
     

        </div>

        <div className="footer-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

      </div>

      <div className='copy'>
      <h5> Copyright © 2024 Deborah Ujunwam. All Rights Reserved </h5>
      </div>
     
    </footer>
  );
};

export default Footer;

