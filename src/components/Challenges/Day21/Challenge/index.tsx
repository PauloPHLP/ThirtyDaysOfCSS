import React from 'react';

import './styles.css';

const Challenge: React.FC = () => {
  return (
    <div className="challenge-container">
      <div className="spheres">
        <div className="ball-container">
          <span className="ball" />
          <span className="ball" />
          <span className="ball" />
          <span className="ball" />
          <span className="ball" />
        </div>
        <span className="table" />
      </div>
    </div>
  );
};

export default Challenge;
