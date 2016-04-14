This is the setup I use to rapidly develop Dumb React components on OSX. I use electron as an alternative to webpack dev-server as Dumb components are meant to not require a server to work.

You must install electron-prebuilt globally

    npm install -g electron-prebuilt

See the `usage` folder for an example of use for the coding of a react component. The `usage` folder can be moved anywhere on your computer, provided that electron.command gets updated.

    #!/bin/bash
    cd "$(dirname "$0")"
    electron /path/to/electron_app.js
