import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

import './styles.css';

const CSS_CODE = `/* Default style for all challenges containers. */
.container-challenge {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Override for this component */
  overflow: hidden;
  justify-content: center;
}

.ring {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  border-top: 4px solid #e4405f;
  border-radius: 50%;
  -webkit-animation: spin 1s infinite linear;
}

.loading {
  position: absolute;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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
