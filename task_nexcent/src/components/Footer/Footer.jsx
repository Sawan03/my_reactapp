import React from 'react';
import './Footer.css';
import nexcentLogo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="top-content">
        <h1 className="top-heading">Pellentesque suscipit fringilla libero eu</h1>
        <button className="demo-button">Demo Here</button>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo-and-text">
              <img src={nexcentLogo} alt="Nexcent Logo" className="nexcent-logo" />
              <p className="company-name">Nexcent</p>
            </div>
            <div className="company-info">
              <p className="copyright">&copy; 2024 Nexcent. All Rights Reserved.</p>
              <div className="social-icons">
                <a href="#"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-column">
              <h3 className="footer-column-heading">Company</h3>
              <ul className="footer-column-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-column">
              <h3 className="footer-column-heading">Support</h3>
              <ul className="footer-column-list">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-section">
            <div className="stay-updated">
              <h3 className="stay-updated-heading">Stay Updated</h3>
              <div className="subscribe">
                <input type="email" placeholder="Your email address" className="subscribe-input" />
                <button className="subscribe-button"><FontAwesomeIcon icon={faEnvelope} /></button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
