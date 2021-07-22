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
  justify-content: center;
}

.spheres {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.ball-container {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.ball {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #55acee;
  animation: jump 0.5s linear infinite;
}

.ball:nth-child(2n) {
  background-color: #dd4b39;
}

.ball:nth-child(1) {
  animation-delay: 0.45s;
}

.ball:nth-child(2) {
  animation-delay: 0.7s;
}

.ball:nth-child(3) {
  animation-delay: 0.4s;
}

.ball:nth-child(4) {
  animation-delay: 0s;
}

.ball:nth-child(5) {
  animation-delay: 0.2s;
}

.table {
  height: 10px;
  width: 60%;
  background-color: #ffffff;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-50px);
  }

  100% {
    transform: translateY(0px);
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
