import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './head.css';
import Logo from '../../assets/logo.png';

const Head = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
          <span className="brand-text"><b>Nexcent</b></span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
          </ul>
          <div className="navbar-nav">
            <a className="nav-link text-success" href="#login">Login</a>
            <a className="nav-link btn btn-success no-hover" href="#signup">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Head;
