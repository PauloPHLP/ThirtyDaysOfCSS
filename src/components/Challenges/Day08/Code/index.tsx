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

.heart {
  height: 5rem;
  width: 5rem;
  position: relative;
  transform: rotate(45deg);
  background-color: #dd4b39;
  animation: pulse 2s linear infinite;
}

.heart:before {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: #dd4b39;
}

.heart:after {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: #dd4b39;
}

@keyframes pulse {
  0% {
    transform: rotate(45deg) scale(1);
  }
  25% {
    transform: rotate(45deg) scale(1);
  }
  35% {
    transform: rotate(45deg) scale(1.4);
  }
  50% {
    transform: rotate(45deg) scale(1.2);
  }
  70% {
    transform: rotate(45deg) scale(1.4);
  }
  100% {
    transform: rotate(45deg) scale(1);
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
