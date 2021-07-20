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

.container-challenge span {
  font-size: 40px;
  color: rgba(85, 172, 238, 0.5);
  position: relative;
}

.container-challenge span:hover {
  cursor: pointer;
}

.container-challenge span::before {
  content: '#ThirtyDaysOfCSS';
  width: 0%;
  height: 100%;
  position: absolute;
  color: #dd4b39;
  overflow: hidden;
  transition: all 0.3s linear;
}

.container-challenge span:hover::before {
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
