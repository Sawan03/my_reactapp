import React from 'react';
import './CustomerOverviewSection.css';

const CustomerOverviewSection = () => {
  const cardsData = [
    { imgSrc: require('../../assets/img18.png'), text: 'Card 1 description goes here.' },
    { imgSrc: require('../../assets/img19.png'), text: 'Card 2 description goes here.' },
    { imgSrc: require('../../assets/img20.png'), text: 'Card 3 description goes here.' },
  ];

  return (
    <div className="customer-overview-section">
      <h2 className="customer-overview-heading">Customer Success Stories</h2>
      <p className="customer-overview-paragraph">
        Our customers have achieved remarkable results with our solutions. Here are some of their stories.
      </p>
      <div className="customer-overview-cards">
        {cardsData.map((card, index) => (
          <div key={index} className="customer-overview-card">
            <img src={card.imgSrc} alt={`Card ${index + 1}`} className="card-image" />
            <div className="card-text-button-container">
              <p className="card-text">{card.text}</p>
              <button className="card-button">Meet all customers-></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerOverviewSection;
