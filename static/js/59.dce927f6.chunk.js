(this.webpackJsonpthirtydaysofcss=this.webpackJsonpthirtydaysofcss||[]).push([[59],{68:function(n,e,t){"use strict";t.r(e);var s=t(0),i=t.n(s),a=t(133);e.default=function(){return i.a.createElement("div",{className:"container-code"},i.a.createElement(a.a,{text:"/* Default style for all challenges containers. */\n.challenge-container {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  /* Overridden for this component */\n  width: 100%;\n  justify-content: center;  \n  overflow: hidden;\n}\n\n.pulse-lines {\n  height: 10rem;\n  width: 10rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: #dd4b39;\n  font-size: 48px;\n  font-weight: 600;\n  position: relative;\n  text-transform: uppercase;\n}\n\n.pulse-lines::before,\n.pulse-lines::after {\n  content: '';\n  position: absolute;\n  left: -20px;\n  right: -20px;\n  top: -20px;\n  bottom: -20px;\n  border-radius: 50%;\n  border: 1px solid #dd4b39;\n  animation: pulsate 2s linear infinite;\n}\n\n.pulse-lines::after {\n  animation-delay: 0.5s;\n}\n\n@keyframes pulsate {\n  0% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.2);\n    opacity: 0;\n  }\n}\n",language:"css",showLineNumbers:!1,theme:a.b,onCopy:!1}))}}}]);
//# sourceMappingURL=59.dce927f6.chunk.js.map