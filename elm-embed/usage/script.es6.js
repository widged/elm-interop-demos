/* jshint esnext: true */

import {Embed} from '../../imports.js';

const {appendToHead, scriptNode} = Embed;

appendToHead(scriptNode('../elm/elm.js', function() {
  let elmApp = Elm.embed(
		Elm.Main,
		document.querySelector('#app')
	);
}));
