import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.challenge-17-div {
  height: 10rem;
  width: 10rem;
  border-radius: 1rem;
  background-color: #dd4b39;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: rotateX(0deg) rotateY(180deg);
  }
  100% {
    transform: rotateX(180deg) rotateY(180deg);
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
