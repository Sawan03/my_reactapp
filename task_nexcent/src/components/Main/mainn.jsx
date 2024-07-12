import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './main.css';
import HeroImage from '../../assets/homei.png'; // Adjust the path to your image
 // Add additional images as needed

const Main = () => {
  return (
    <main className="main-content">
      <div className="container">
        <section className="hero-section">
          <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            {/* Carousel indicators as dots */}
            <ol className="carousel-indicators">
              <li data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#heroCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#heroCarousel" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row align-items-center">
                  <div className="col-md-6 hero-text">
                    <h1 className="hero-title">
                      Lesson and insights <span className="highlight"> from  8 years</span>
                    </h1>
                    <p className="hero-description">
                      Where to grow your business as a photographer: site or social media?
                    </p>
                    <a className="btn btn-success register-btn" href="#register">Register</a>
                  </div>
                  <div className="col-md-6">
                    <img src={HeroImage} alt="Hero" className="hero-image" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row align-items-center">
                  <div className="col-md-6 hero-text">
                    <h1 className="hero-title">
                      Discover new techniques <span className="highlight">5 years</span>
                    </h1>
                    <p className="hero-description">
                      Learn how to improve your skills and grow your business.
                    </p>
                    <a className="btn btn-success register-btn" href="#register">Register</a>
                  </div>
                  <div className="col-md-6">
                    <img src={HeroImage} alt="Hero" className="hero-image" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row align-items-center">
                  <div className="col-md-6 hero-text">
                    <h1 className="hero-title">
                      Advanced photography tips <span className="highlight">3 years</span>
                    </h1>
                    <p className="hero-description">
                      Elevate your photography with advanced techniques and tips.
                    </p>
                    <a className="btn btn-success register-btn" href="#register">Register</a>
                  </div>
                  <div className="col-md-6">
                    <img src={HeroImage} alt="Hero" className="hero-image" />
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation controls as dots */}
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
