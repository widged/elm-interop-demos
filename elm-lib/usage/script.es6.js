/* jshint esnext: true */

import React from 'react';
import ReactDom from 'react-dom';
import {Embed} from '../../imports.js';

const {appendToHead, scriptNode} = Embed;

appendToHead(scriptNode('../elm/lib.js', function() {
  var elmLib = Elm.Main.make({});
  ReactDom.render(
    (<div>{elmLib.upperCase('uppercase')} transformations come from Elm</div>),
    document.querySelector('#app')
  );
}));
