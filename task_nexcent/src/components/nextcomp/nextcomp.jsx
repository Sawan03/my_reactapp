import React from 'react';
import './nextcomp.css'; // Assuming you will create this CSS file
import frame from '../../assets/pana.png';

const NextComp = () => {
  return (
    <div className="nextcomp-section">
      <div className="nextcomp-content">
        <div className="nextcomp-image">
          <img src={frame} alt="Learn More Image" />
        </div>
        <div className="nextcomp-text">
          <h2 className="nextcomp-heading">How to design your site footer like we did</h2>
          <p className="nextcomp-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula urna in ex
            vehicula, sed congue purus tincidunt. Sed fringilla at eros ac varius. Nulla facilisi.
            Sed in vestibulum urna. Phasellus euismod justo eu sem viverra, vitae fermentum mi
            finibus.vehicula, sed congue purus tincidunt. Sed fringilla at eros ac varius. Nulla facilisi.
            Sed in vestibulum urna. Phasellus euismod justo eu sem viverra, vitae fermentum mi
            finibus.
          </p>
          <button className="nextcomp-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default NextComp;
