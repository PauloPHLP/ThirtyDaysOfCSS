import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.challenge-container .challenge-12-h1 {
  color: rgba(85, 172, 238, 0.5);
  position: relative;
}

.challenge-container .challenge-12-h1:hover {
  cursor: pointer;
}

.challenge-container .challenge-12-h1::before {
  content: '#ThirtyDaysOfCSS';
  width: 0%;
  height: 100%;
  position: absolute;
  color: #dd4b39;
  overflow: hidden;
  transition: all 0.3s linear;
}

.challenge-container .challenge-12-h1:hover::before {
  width: 100%;
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
