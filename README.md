# Overview

This repo illustrates 3 different ways that transpiled Elm can be used with Javascript Components. The priority was to keep the examples as simple as possible. There is no hot reloading or webpack conig.

Tested on OSX only for now. 

## elm-embed

`elm-embed` demonstrates a simple embed of an html element.

## elm-port

`elm-port` demonstrates how to get the javascript code interoperate with the one transpiled from elm.

## elm-lib

`elm-lib` demonstrates how to use the transpiled code from elm as a library, whose functions can be called directly.


# Install

I use electron to rapidly develop javascript components on OSX. I use electron as an alternative to webpack dev-server as electron takes care of es6 transpiling.

You must install electron-prebuilt globally

    npm install -g electron-prebuilt

See the usage folders and double click on the `_electron.command` file in any usage folder.

  * elm-embed/usage/ -> _electron.command
  * elm-lib/usage/  ->  _electron.command
  * elm-ports/usage/ -> _electron.command

# Development

Double click the `_watch.command` file in any of the elm folder to automatically re-transpile elm whenever files change. Alternatively, call it from the command line `./_watch.command`.

Refresh the page in electron (command-R).
