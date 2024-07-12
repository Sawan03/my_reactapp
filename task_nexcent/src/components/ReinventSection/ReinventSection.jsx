import React from 'react';
import './ReinventSection.css';

const ReinventSection = () => {
  const imagesData = [
    { number: 25345, imgSrc: require('../../assets/img4.png'), text: 'First milestone' },
    { number: 2, imgSrc: require('../../assets/img3.png'), text: 'Second milestone' },
    { number: 3, imgSrc: require('../../assets/img2.png'), text: 'Third milestone' },
    { number: 4, imgSrc: require('../../assets/img1.png'), text: 'Fourth milestone' },
  ];

  return (
    <div className="reinvent-section">
      <div className="reinvent-text">
        <h2 className="reinvent-heading">Helping a local business reinvent itself</h2>
        <p className="reinvent-paragraph">
          We reached here with our hard work and dedication.
        </p>
      </div>
      <div className="reinvent-images">
        {imagesData.map((item, index) => (
          <div key={index} className="reinvent-image-container">
            <img src={item.imgSrc} alt={`Milestone ${item.number}`} className="reinvent-image" />
            <div className="reinvent-number">{item.number}</div>
            <p className="reinvent-image-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReinventSection;
