/* jshint esnext: true */

import React from 'react';
import {Embed} from '../../imports.js';

const {appendToHead, scriptNode} = Embed;

document.querySelector('#app').innerHTML = 'Interact with ';
appendToHead(scriptNode('../elm/port.js', function() {
  var elmDispatch = ElmPort(function(str) {
    document.querySelector('#app').innerHTML += str + ' ';
  });
	elmDispatch("elm");
  elmDispatch("through ports");
}));

function ElmPort(dispatchString) {
  var app = Elm.worker(Elm.Main, { stringSignal: "" });
  app.ports.convertedStringAddress.subscribe(function(str){
      dispatchString(str);
  });
  return function(text){
      app.ports.stringSignal.send(text);
  };
}
