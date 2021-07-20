import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.challenge-15-span {
  all: unset;
}

.challenge-15-span {
  font-size: 45px;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 8px rgba(85, 172, 238, 0.5);
  color: #55acee;
  animation: twist-text 2s linear infinite;
  animation-direction: alternate;
}

@keyframes twist-text {
  from {
    transform: rotate(5deg);
  }

  to {
    transform: rotate(-5deg);
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
