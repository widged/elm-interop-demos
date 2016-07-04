#!/bin/bash
cd "$(dirname "$0")"
chokidar '../elm/*.elm' -c 'elm-make ../elm/Main.elm --output elm.js'
