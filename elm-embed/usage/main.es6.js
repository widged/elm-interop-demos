/* jshint esnext: true */

// specific to an electron environment
var Elm = require('./elm.js');

let elmApp = Elm.Main.embed(
	document.querySelector('#app')
);
