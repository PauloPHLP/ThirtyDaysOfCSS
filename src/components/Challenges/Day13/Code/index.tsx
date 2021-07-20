import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

import './styles.css';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Overridden for this component */
  overflow: hidden;
}

.challenge-13-ul li {
  all: unset;
}

.challenge-13-ul li {
  font-size: 40px;
  letter-spacing: 15px;
  animation: loading 3s linear infinite;
}

.challenge-13-ul li:nth-child(1) {
  animation-delay: 0s;
}
.challenge-13-ul li:nth-child(2) {
  animation-delay: 0.2s;
}
.challenge-13-ul li:nth-child(3) {
  animation-delay: 0.4s;
}
.challenge-13-ul li:nth-child(4) {
  animation-delay: 0.6s;
}
.challenge-13-ul li:nth-child(5) {
  animation-delay: 0.8s;
}
.challenge-13-ul li:nth-child(6) {
  animation-delay: 1s;
}
.challenge-13-ul li:nth-child(7) {
  animation-delay: 1.2s;
}

@keyframes loading {
  0% {
    transform: translateX(-50px);
    letter-spacing: 20px;
    color: #dd4b39;
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  50% {
    letter-spacing: -20px;
    opacity: 1;
  }

  100% {
    transform: translateX(50px);
    letter-spacing: 20px;
    color: #55acee;
    opacity: 0;
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
