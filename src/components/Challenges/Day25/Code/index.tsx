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

.challenge-25-ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  position: relative;
  padding: 0;
  margin: 0;
}

.challenge-25-li {
  padding: 0;
  margin: 0;
}

.challenge-25-label {
  position: relative;
}

.challenge-25-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.challenge-25-icon {
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555555;
  font-size: 40px;
}

.challenge-25-icon:hover {
  cursor: pointer;
}

input[type='checkbox']:checked ~ .challenge-25-icon .fa {
  color: #55acee;
  animation: change-color 5s linear infinite;
}

@keyframes change-color {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
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
