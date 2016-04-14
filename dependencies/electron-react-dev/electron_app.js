/* jshint esnext: true */

var path = require('path');

var FN = {};

var windowUrl        = 'file://' + __dirname + '/electron_window.html';
var windowDimensions = { width: 1000, height: 800 };
var reactdevtools    = path.resolve(__dirname + '/vendor/react-devtools');

var app           = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var devHelper     = require('./dev_helper');

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Remote debugging
// app.commandLine.appendSwitch('remote-debugging-port', '8315');
// app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') { app.quit(); }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.

  BrowserWindow.addDevToolsExtension(reactdevtools);
  mainWindow = new BrowserWindow(windowDimensions);

  // and load the index.html of the app.
  mainWindow.loadUrl(windowUrl);

  devHelper.setDevMenu();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  var ipc = require('ipc');
  ipc.on('printToPDF', function(event, arg) {
    console.log(arg);  // prints "ping"
    mainWindow.webContents.printToPDF({silent:false, landscape: true, printBackground: true}, function (err, data) {
      var fs = require('fs');
      if (err) { console.error(err); }
      fs.writeFile(path.resolve('/Users/marielle/Downloads/electron.pdf'), data, function (err) {
        if (err) { console.error(err); }
        // app.quit()
      });
    });

  });

});
