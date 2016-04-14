import React from 'react';
import ReactDOM from 'react-dom';
import DomUtil from './DomUtil.es6.js';

DomUtil.link('style.css');
DomUtil.style(`body {font-family: Helvetica}`);

ReactDOM.render(
  <div>Hello World!<img src="butterfly.png"/></div>,
  document.getElementById('app')
);
