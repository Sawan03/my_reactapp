import React from 'react';
import './LearnMoreSection.css'; // Assuming you will create this CSS fili
import frame from '../../assets/frame.png'

const LearnMoreSection = () => {
  return (
    <div className="learnmore-section">
      <div className="learnmore-content">
        <div className="learnmore-image">
          <img src={frame} alt="Learn More Image" />
        </div>
        <div className="learnmore-text">
          <h2 className="learnmore-heading">The Unseen of Spending Three Years at Pixelgrade</h2>
          <p className="learnmore-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula urna in ex
            vehicula, sed congue purus tincidunt. Sed fringilla at eros ac varius. Nulla facilisi.
            Sed in vestibulum urna. Phasellus euismod justo eu sem viverra, vitae fermentum mi
            finibus.
          </p>
          <button className="learnmore-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreSection;
