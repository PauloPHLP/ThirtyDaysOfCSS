import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = ``;

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
