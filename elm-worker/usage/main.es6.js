/* jshint esnext: true */

import {Embed} from '../../imports.js';

const {appendToHead, scriptNode} = Embed;

var mountNode = document.querySelector('#app');
mountNode.innerHTML = 'Interact with ';

// specific to an electron environment
var Elm = require('./worker.js');

var {ports} = Elm.Worker.worker();

ports.workerReady.subscribe(function() {
  console.log('[WORKER READY]')
  sendString("elm");
  sendString("through ports");

});

function sendString(str){
  ports.stringToConvert.send(str);
}

ports.stringConverted.subscribe(function(str) {
  console.log('[CONVERTED]', str)
  mountNode.innerHTML += str + ' ';
});
