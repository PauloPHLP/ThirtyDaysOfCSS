import React from 'react';

import './styles.css';

const Challenge: React.FC = () => {
  return (
    <div className="challenge-container">
      <ul>
        <li>
          <div>
            <span />
            <span />
            <span />
            <span className="fa fa-facebook" aria-hidden="true" />
          </div>
        </li>
        <li>
          <div>
            <span />
            <span />
            <span />
            <span className="fa fa-twitter" aria-hidden="true" />
          </div>
        </li>
        <li>
          <div>
            <span />
            <span />
            <span />
            <span className="fa fa-google-plus" aria-hidden="true" />
          </div>
        </li>
        <li>
          <div>
            <span />
            <span />
            <span />
            <span className="fa fa-linkedin" aria-hidden="true" />
          </div>
        </li>
        <li>
          <div>
            <span />
            <span />
            <span />
            <span className="fa fa-instagram" aria-hidden="true" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Challenge;
