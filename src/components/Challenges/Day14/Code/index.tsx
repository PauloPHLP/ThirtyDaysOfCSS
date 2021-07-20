import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.challenge-container .challenge-14-h1 {
  text-transform: uppercase;
  text-align: center;
  color: transparent;
  background-image: url('./background.png');
  background-clip: text;
  background-color: white;
  animation: text-animation 5s linear infinite;
}

@keyframes text-animation {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 100% 100%;
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
