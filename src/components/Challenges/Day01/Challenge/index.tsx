import React from 'react';

import './styles.css';

const Challenge: React.FC = () => {
  return (
    <div className="challenge-container">
      <ul className="challenge-01-ul">
        <li className="challenge-01-li">
          <div className="challenge-01-div">
            <span className="challenge-01-span" />
            <span className="challenge-01-span" />
            <span className="challenge-01-span" />
            <span
              className="challenge-01-span fa fa-facebook"
              aria-hidden="true"
            />
          </div>
        </li>
        <li className="challenge-01-li">
          <div className="challenge-01-div">
            <span className="challenge-01-span" />
            <span className="challenge-01-span" />
            <span className="challenge-01-span" />
            <span
              className="challenge-01-span fa fa-twitter"
              aria-hidden="true"
            />
          </div>
        </li>
        <li className="challenge-01-li">
          <div className="challenge-01-div">
            <span className="challenge-01-span" />
            <span className="challenge-01-span" />
            <span className="challenge-01-span" />
            <span
              className="challenge-01-span fa fa-google-plus"
              aria-hidden="true"
            />
          </div>
        </li>
        <li className="challenge-01-li">
          <div className="challenge-01-div">
            <span className="challenge-01-span" />
            <span className="challenge-01-span" />
            <span className="challenge-01-span" />
            <span
              className="challenge-01-span fa fa-linkedin"
              aria-hidden="true"
            />
          </div>
        </li>
        <li className="challenge-01-li">
          <div className="challenge-01-div">
            <span className="challenge-01-span" />
            <span className="challenge-01-span" />
            <span className="challenge-01-span" />
            <span
              className="challenge-01-span fa fa-instagram"
              aria-hidden="true"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Challenge;
