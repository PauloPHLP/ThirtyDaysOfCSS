import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Overridden for this component */
  width: 100%;
}

.challenge-03-section {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
}

.background {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.background.left {
  background-color: #55acee;
}

.background.left .text {
  left: 100%;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffffff;
}

.background.right {
  background-color: #dd4b39;
}

.text {
  position: absolute;
  white-space: nowrap;
  font-size: 10em;
  line-height: 100%;

  animation: spinner 10s linear infinite;
}

@keyframes spinner {
  from {
    transform: translate(50%);
  }
  to {
    transform: translate(-150%);
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
