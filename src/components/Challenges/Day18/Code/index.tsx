import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.challenge-18-ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.challenge-18-li {
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 10px;
  transition: 1s;
  color: #ffffff;
}

.challenge-18-ul:hover .challenge-18-li {
  transform: rotate(45deg) translateY(-200px);
  opacity: 0;
  filter: blur(40px);
  color: #55acee;
}

.challenge-18-li:nth-child(1) {
  transition-delay: 0s;
}

.challenge-18-li:nth-child(2) {
  transition-delay: 0.1s;
}

.challenge-18-li:nth-child(3) {
  transition-delay: 0.2s;
}

.challenge-18-li:nth-child(4) {
  transition-delay: 0.3s;
}

.challenge-18-li:nth-child(5) {
  transition-delay: 0.4s;
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
