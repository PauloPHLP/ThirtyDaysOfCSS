import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  background: #000000;
  border-radius: 1rem;
  overflow: hidden;
}

.challenge-19-div {
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: right;
  animation: colorChange 5s linear infinite;
}

.challenge-19-div:nth-child(even) {
  transform-origin: left;
}

.challenge-19-span {
  top: calc(80px * var(--i));
  left: calc(80px * var(--i));
  bottom: calc(80px * var(--i));
  right: calc(80px * var(--i));
  position: absolute;
}

.challenge-19-div.challenge-19-span:nth-child(1) {
  --i: 1;
}

.challenge-19-span:nth-child(2) {
  --i: 2;
}

.challenge-19-span:nth-child(3) {
  --i: 3;
}

.challenge-19-span:nth-child(3n + 1):before {
  background: rgba(134, 255, 0, 1);
  box-shadow: 0 0 20px rgba(134, 255, 0, 1), 0 0 40px rgba(134, 255, 0, 1),
    0 0 60px rgba(134, 255, 0, 1), 0 0 80px rgba(134, 255, 0, 1),
    0 0 0 8px rgba(134, 255, 0, 0.1);
}
.challenge-19-span:nth-child(3n + 2):before {
  background: rgba(255, 214, 0, 1);
  box-shadow: 0 0 20px rgba(255, 214, 0, 1), 0 0 40px rgba(255, 214, 0, 1),
    0 0 60px rgba(255, 214, 0, 1), 0 0 80px rgba(255, 214, 0, 1),
    0 0 0 8px rgba(255, 214, 0, 0.1);
}
.challenge-19-span:nth-child(3n + 3):before {
  background: rgba(0, 226, 255, 1);
  box-shadow: 0 0 20px rgba(0, 226, 255, 1), 0 0 40px rgba(0, 226, 255, 1),
    0 0 60px rgba(0, 226, 255, 1), 0 0 80px rgba(0, 226, 255, 1),
    0 0 0 8px rgba(0, 226, 255, 0.1);
}
.challenge-19-span:nth-child(3n + 1) {
  animation: animate 10s alternate infinite;
}
.challenge-19-span:nth-child(3n + 2) {
  animation: animate-reverse 3s alternate infinite;
}
.challenge-19-span:nth-child(3n + 3) {
  animation: animate 8s alternate infinite;
}

.challenge-19-span:before {
  content: '';
  position: absolute;
  top: 50%;
  left: -8px;
  width: 15px;
  height: 15px;
  background: #55acee;
  border-radius: 50%;
}

@keyframes colorChange {
  0% {
    filter: hue-rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-reverse {
  0% {
    transform: rotate(360deg);
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
