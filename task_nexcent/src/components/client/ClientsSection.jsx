import React from 'react';
import './ClientsSection.css';

const ClientsSection = () => {
  const clients = [
    require('../../assets/logo14.png'),
    require('../../assets/logo2.png'),
    require('../../assets/logo3.png'),
    require('../../assets/logo4.png'),
    require('../../assets/logo5.png'),
    require('../../assets/logo6.png'),
    require('../../assets/logo7.png'),
  ];

  const features = [
    {
      img: require('../../assets/icon1.png'),
      heading: 'Membership Organisations',
      paragraph: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      img: require('../../assets/icon2.png'),
      heading: 'National Associations',
      paragraph: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      img: require('../../assets/icon3.png'),
      heading: 'Clubs And Groups',
      paragraph: 'Our membership management software provides full automation of membership renewals and payments',
    },
  ];

  return (
    <div>
      <div className="clients-section">
        <h2 className="clients-heading">Our Clients</h2>
        <p className="clients-paragraph">We have been working with some Fortune 500+ clients</p>
        <div className="clients-images">
          {clients.map((client, index) => (
            <img key={index} src={client} alt={`Client ${index + 1}`} className="client-image" />
          ))}
        </div>
      </div>

      <div className="features-section">
        <h2 className="features-heading">Manage your entire community <span>in a single system</span></h2>
        <p className="features-paragraph">Who is Nexcent suitable for?</p>
        <div className="features-images">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <img src={feature.img} alt={`Feature ${index + 1}`} className="feature-image" />
              <h3 className="feature-item-heading">{feature.heading}</h3>
              <p className="feature-item-paragraph">{feature.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
