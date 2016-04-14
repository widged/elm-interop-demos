/* jshint esnext: true */

import DomUtil from './DomUtil.es6.js';

DomUtil.link('style.css');
DomUtil.style(`body {font-family: Helvetica}`);

document.getElementById('app').innerHTML = `<div>Hello World!<img src="butterfly.png"/></div>`;
