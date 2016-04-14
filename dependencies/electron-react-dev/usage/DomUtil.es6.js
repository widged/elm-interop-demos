function appendToHead(node) {
  var parentNode    = document.getElementsByTagName('head')[0];
  parentNode.appendChild(node);
}

function injectStyle(text) {
  var node  = document.createElement('style');
  node.innerHTML = text;
  appendToHead(node);
}

function linkStyle(url) {
  var node  = document.createElement('link');
  node.rel = 'stylesheet';
  node.href = url;
  appendToHead(node);
}

export default {
  style: injectStyle,
  link: function(...urls) {
    urls.forEach(linkStyle)
   }
}
