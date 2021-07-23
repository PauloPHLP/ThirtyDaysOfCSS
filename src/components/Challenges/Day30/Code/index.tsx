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
  overflow: hidden;
}

#firework1 {
  left: 50%;
  top: 50%;
  transform: scale(1);
}

#firework1 .explosion::before {
  animation: explosion 2s ease-in-out infinite;
}

#firework2 {
  left: 40%;
  top: 40%;
  transform: scale(0.7);
}

#firework2 .explosion::before {
  animation: explosion 2s 0.6s ease-in-out infinite;
}

#firework3 {
  left: 60%;
  top: 60%;
  transform: scale(0.4);
}

#firework3 .explosion::before {
  animation: explosion 2s 0.4s ease-in-out infinite;
}

.firewors-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.firework {
  position: absolute;
}

.explosion {
  position: absolute;
  left: -2px;
  bottom: 0;
  width: 4px;
  height: 80px;
  transform-origin: 50% 100%;
  overflow: hidden;
}

.explosion:nth-child(1) {
  transform: rotate(0deg) translateY(-15px);
}
.explosion:nth-child(2) {
  transform: rotate(30deg) translateY(-15px);
}
.explosion:nth-child(3) {
  transform: rotate(60deg) translateY(-15px);
}
.explosion:nth-child(4) {
  transform: rotate(90deg) translateY(-15px);
}
.explosion:nth-child(5) {
  transform: rotate(120deg) translateY(-15px);
}
.explosion:nth-child(6) {
  transform: rotate(150deg) translateY(-15px);
}
.explosion:nth-child(7) {
  transform: rotate(180deg) translateY(-15px);
}
.explosion:nth-child(8) {
  transform: rotate(210deg) translateY(-15px);
}
.explosion:nth-child(9) {
  transform: rotate(240deg) translateY(-15px);
}
.explosion:nth-child(10) {
  transform: rotate(270deg) translateY(-15px);
}
.explosion:nth-child(11) {
  transform: rotate(300deg) translateY(-15px);
}
.explosion:nth-child(12) {
  transform: rotate(330deg) translateY(-15px);
}

.explosion::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 40px;
  background-color: #55acee;
}

@keyframes explosion {
  0% {
    top: 100%;
  }

  33%,
  100% {
    top: -50%;
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
