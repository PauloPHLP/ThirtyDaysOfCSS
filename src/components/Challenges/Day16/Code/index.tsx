import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.challenge-16-button {
  height: 5rem;
  width: 15rem;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  border: 1px solid #ffffff;
  border-radius: 8px;
  background-color: transparent;
  color: #ffffff;
}

.challenge-16-button::before {
  content: '✔️ Day 16';
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #55acee;
  transform: translateY(-100%);
  transition: all 0.1s linear;
}

.challenge-16-button:hover::before {
  transform: translateY(0%);
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
