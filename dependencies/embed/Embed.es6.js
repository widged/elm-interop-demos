/* jshint esnext: true */

export default class FN {

  static appendToHead(node) {
    var headNode    = document.getElementsByTagName('head')[0];
    headNode.appendChild(node);
  }

  static scriptNode(url, asyncReturn) {
    var node  = document.createElement('script');
    node.type = 'text/javascript';
    node.src = url;
    if (asyncReturn) { node.onload = asyncReturn; }
    return node;
  }


}
