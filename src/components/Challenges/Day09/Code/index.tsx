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

.pendulum {
  height: 10px;
  width: 300px;
  max-width: 80%;
  display: flex;
  position: absolute;
  top: 35%;
  background-color: #55acee;
}

.pendulum .challenge-09-span {
  height: 250px;
  width: 10px;
  position: relative;
  transform-origin: top;
  background-color: #ffffff;
  margin: 10px 29px;
}

.pendulum .challenge-09-span:before {
  content: '';
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  background-color: #dd4b39;
  transform: translateX(-40%);
}

.pendulum .challenge-09-span:first-child {
  animation: lift-left-arm 2s ease-in infinite;
}

.pendulum .challenge-09-span:last-child {
  animation: lift-right-arm 2s ease-in infinite 1s;
}

@media (max-width: 1264px) {
  .pendulum {
    height: 10px;
    width: 14rem;
    top: 20%;
  }

  .pendulum .challenge-09-span {
    height: 150px;
    width: 5px;
    margin: 10px 20px;
  }

  .pendulum .challenge-09-span:before {
    height: 25px;
    width: 25px;
    bottom: -4px;
    left: 3px;
  }
}

@keyframes lift-left-arm {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(25deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes lift-right-arm {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-25deg);
  }
  50% {
    transform: rotate(0deg);
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
