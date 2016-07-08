#!/bin/bash
cd "$(dirname "$0")"
chokidar '../elm/*.elm' -c 'elm-make ../elm/Worker.elm --output worker.js'
