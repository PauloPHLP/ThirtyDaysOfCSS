import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.challenge-23-button {
  height: 5rem;
  width: 15rem;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  border: 1px solid #ffffff;
  border-radius: 8px;
  background-color: transparent;
  color: #ffffff;
  transition: all 0.5s;
}

.challenge-23-button:hover {
  border-color: #dd4b39;
  color: #dd4b39;
  animation: shank 0.14s linear 1;
}

@keyframes shank {
  30% {
    transform: rotate(12deg);
  }

  60% {
    transform: rotate(-12deg);
  }

  100% {
    transform: rotate(0deg);
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
