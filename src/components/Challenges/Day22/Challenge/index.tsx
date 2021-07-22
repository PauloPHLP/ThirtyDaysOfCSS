import React from 'react';

import './styles.css';

const Challenge: React.FC = () => {
  return (
    <div className="challenge-container">
      <ul className="challenge-22-ul">
        <li className="challenge-22-li">
          <i className="fas fa-heart challenge-22-i" />
        </li>
        <li className="challenge-22-li">
          <i className="fas fa-glass-martini challenge-22-i" />
        </li>
        <li className="challenge-22-li">
          <i className="fas fa-globe challenge-22-i" />
        </li>
        <li className="challenge-22-li">
          <i className="fas fa-gift challenge-22-i" />
        </li>
      </ul>
    </div>
  );
};

export default Challenge;
