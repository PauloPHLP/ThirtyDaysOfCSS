import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

import './styles.css';

const CSS_CODE = `/* Default style for all challenges containers. */
.container-challenge {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
}

h1 span:before {
  content: '';
  animation: change-icon 1.5s linear infinite;
}

@keyframes change-icon {
  0% {
    content: '💻';
  }
  50% {
    content: '🍕';
  }
  100% {
    content: '🎮';
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
