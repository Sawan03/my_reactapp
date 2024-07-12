import React from 'react';
import './CustomerMeetSection.css';

const CustomerMeetSection = () => {
  const companyLogos = [
    require('../../assets/logo8.png'),
    require('../../assets/logo9.png'),
    require('../../assets/logo10.png'),
    require('../../assets/logo11.png'),
  ];

  return (
    <div className="customer-meet-section">
      <div className="customer-meet-image-container">
        <img src={require('../../assets/img5.png')} alt="Customer" className="customer-meet-image" />
      </div>
      <div className="customer-meet-content">
        <div className="customer-meet-text">
          <p className="customer-meet-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula urna in ex
            vehicula, sed congue purus tincidunt. Sed fringilla at eros ac varius. Nulla facilisi.
            Sed in vestibulum urna. Phasellus euismod justo eu sem viverra, vitae fermentum mi
            finibus.
          </p>
          <p className="customer-name">John Doe, CEO of Company</p>
          <p className="customer-meet-small-paragraph">
            Discover more about their stories and successes.
          </p>
        </div>
        <div className="customer-meet-logos">
          {companyLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Company Logo ${index + 1}`} className="company-logo" />
          ))}
          <button className="customer-meet-button">
            Meet all customers →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerMeetSection;
