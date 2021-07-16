import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

import './styles.css';

const CSS_CODE = `/* Default style for all challenges containers. */
.container-challenge {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Overridden for this component */
  width: 100%;
  justify-content: center;
}

.pulse {
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #55acee;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;

  animation: animate 2s linear infinite;
}

@keyframes animate {
  0% {
    box-shadow: 0 0 0 0 rgba(55, 135, 209, 0.7), 0 0 0 0 rgba(24, 112, 153, 0.7);
  }
  40% {
    box-shadow: 0 0 0 50px rgba(55, 153, 209, 0),
      0 0 0 0 rgba(37, 158, 238, 0.7);
  }
  80% {
    box-shadow: 0 0 0 50px rgba(55, 153, 209, 0),
      0 0 0 30px rgba(55, 173, 209, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(91, 180, 240, 0), 0 0 0 30px rgba(55, 153, 209, 0);
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
