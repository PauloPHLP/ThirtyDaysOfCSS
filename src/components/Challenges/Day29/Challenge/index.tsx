/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './styles.css';

const Challenge: React.FC = () => {
  return (
    <div className="challenge-container">
      <div className="challenge-29-container">
        <div className="navbar">
          <label htmlFor="toggle" className="challenge-29-label">
            &#9776;
          </label>
          <input type="checkbox" id="toggle" className="challenge-29-toggle" />
          <div className="menu">
            <a className="challenge-29-a" href="/challenges/day-29">
              Home
            </a>
            <a className="challenge-29-a" href="/challenges/day-29">
              Services
            </a>
            <a className="challenge-29-a" href="/challenges/day-29">
              About
            </a>
            <a className="challenge-29-a" href="/challenges/day-29">
              <span>Log Off</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
