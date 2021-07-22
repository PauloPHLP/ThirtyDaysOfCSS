import React from 'react';

import './styles.css';

const Challenge: React.FC = () => {
  return (
    <div className="challenge-container">
      <ul className="challenge-25-ul">
        <li className="challenge-25-li">
          <label htmlFor="challenge-25-input-control">
            <input
              type="checkbox"
              id="challenge-25-input-control"
              className="challenge-25-input"
            />
            <div className="icon challenge-25-icon">
              <i className="fa fa-gamepad challenge-25-i" aria-hidden="true" />
            </div>
          </label>
        </li>
        <li className="challenge-25-li">
          <label htmlFor="challenge-25-input-glass">
            <input
              type="checkbox"
              id="challenge-25-input-glass"
              className="challenge-25-input"
            />
            <div className="icon challenge-25-icon">
              <i className="fa fa-glass challenge-25-i" aria-hidden="true" />
            </div>
          </label>
        </li>
        <li className="challenge-25-li">
          <label htmlFor="challenge-25-input-globe">
            <input
              type="checkbox"
              id="challenge-25-input-globe"
              className="challenge-25-input"
            />
            <div className="icon challenge-25-icon">
              <i className="fa fa-globe challenge-25-i" aria-hidden="true" />
            </div>
          </label>
        </li>
        <li className="challenge-25-li">
          <label htmlFor="challenge-25-input-gift">
            <input
              type="checkbox"
              id="challenge-25-input-gift"
              className="challenge-25-input"
            />
            <div className="icon challenge-25-icon">
              <i className="fa fa-gift challenge-25-i" aria-hidden="true" />
            </div>
          </label>
        </li>
        <li className="challenge-25-li">
          <label htmlFor="challenge-25-input-heart">
            <input
              type="checkbox"
              id="challenge-25-input-heart"
              className="challenge-25-input"
            />
            <div className="icon challenge-25-icon">
              <i className="fa fa-heart challenge-25-i" aria-hidden="true" />
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Challenge;
