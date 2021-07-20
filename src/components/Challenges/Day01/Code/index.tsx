import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

import './styles.css';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
}

ul li span {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex !important;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
}

ul li span:hover {
  cursor: pointer;
}

ul li span:last-child {
  font-size: 30px;
}

ul li:hover span {
  transition: all 0.2s ease-in-out;
}

ul li:hover span:nth-child(1) {
  transform: translate(0, 0);
  opacity: 0.2;
}

ul li:hover span:nth-child(2) {
  transform: translate(10px, -10px);
  opacity: 0.4;
}

ul li:hover span:nth-child(3) {
  transform: translate(20px, -20px);
  opacity: 0.6;
}

ul li:hover span:nth-child(4) {
  transform: translate(30px, -30px);
  opacity: 1;
}

li {
  height: 60px;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
  transform: rotate(-30deg) skew(25deg);
}

li:hover span {
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1);
}

ul li:nth-child(1) span {
  background: #3b5999;
}

ul li:nth-child(2) span {
  background: #55acee;
}

ul li:nth-child(3) span {
  background: #dd4b39;
}

ul li:nth-child(4) span {
  background: #0077b5;
}

ul li:nth-child(5) span {
  background: #e4405f;
}

@media (max-width: 768px) {
  .challenge-container {
    overflow: auto;
  }
}
`;

const Code: React.FC = () => {
  return (
    <div className="container-code">
      <CopyBlock
        text={CSS_CODE}
        language="css"
        showLineNumbers={false}
        theme={dracula}
        onCopy={false}
      />
    </div>
  );
};

export default Code;
