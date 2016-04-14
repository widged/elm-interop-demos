/* jshint esnext: true */

import {Embed} from '../../imports.js';

const {appendToHead, scriptNode} = Embed;

appendToHead(scriptNode('../elm/lib.js', function() {
  var elmLib = Elm.Main.make({});
  var div = document.createElement('div');
  div.innerHTML = `${elmLib.upperCase('uppercase')} transformations come from Elm</div>`;
  document.querySelector('#app').appendChild(div);
}));
