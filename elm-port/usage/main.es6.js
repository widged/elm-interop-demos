/* jshint esnext: true */

import {Embed} from '../../imports.js';

const {appendToHead, scriptNode} = Embed;

var mountNode = document.querySelector('#app');
mountNode.innerHTML = 'Interact with ';

// specific to an electron environment
var Elm = require('./port.js');

var {ports} = Elm.Main.embed(mountNode);

waitForNodeChange(mountNode, function() {
  sendString("elm");
  sendString("through ports");
});

function sendString(str){
  ports.stringToConvert.send(str);
}

ports.stringConverted.subscribe(function(str) {
  mountNode.innerHTML += str + ' ';
});


function waitForNodeChange(node, asyncReturn) {
  // create an observer instance
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      asyncReturn();
      observer.disconnect();
    });
  });

  // pass in the target node, as well as the observer options
  observer.observe(node, { attributes: true, childList: true, characterData: true });
}
