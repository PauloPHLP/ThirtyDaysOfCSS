import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.animated-button {
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  border: 4px solid #55acee;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  position: relative;
}

.animated-button::before,
.animated-button::after {
  content: '';
  height: 4px;
  width: 20px;
  position: absolute;
  background-color: #dd4b39;
  transform: skewX(-50deg);
  transition: 0.4s linear;
}

.animated-button::before {
  top: -4px;
  left: 5%;
}

.animated-button::after {
  bottom: -4px;
  right: 5%;
}

.animated-button:hover::before {
  left: 85%;
}

.animated-button:hover::after {
  right: 85%;
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
