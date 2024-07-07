import React from 'react';
import './Footer.css';
import instagram from '../../assets/instagram.avif'
import facebook from '../../assets/facebook.jpg'
import twitter from '../../assets/twitter.webp'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
        <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/forms-documents">Forms & Documents</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3 className='pixel'>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/cepssc" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="icon-2"/>
            </a>
            <a href="https://x.com/uofgcepssc" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="icon-2"/>
            </a>
            <a href="https://www.facebook.com/CEPSSC/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="icon-2"/>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 College of Engineering and Physical Sciences Student Club | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
