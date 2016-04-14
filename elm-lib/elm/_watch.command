#!/bin/bash
cd "$(dirname "$0")"
chokidar '**/*.elm' -c 'elm make Main.elm --output lib.js'
