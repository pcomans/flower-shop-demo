# Bloom & Petal

Landing page for the Bloom & Petal flower shop, San Anselmo, CA.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

## Stack

* React 15 (via create-react-app / react-scripts 0.7)
* [Material Design Lite](https://getmdl.io/) 1.2.1, self-hosted in `public/vendor/mdl`
  (the official `code.getmdl.io` CDN no longer serves files)
* Material Icons + Roboto/Pacifico from Google Fonts

## Running a 2016 toolchain on modern Node

Three of react-scripts 0.7's bundled dependencies trip up modern Node:

* `process.binding('http_parser')` in websocket-driver 0.6.5 (removed API)
* `res._headers` in send 0.14 (removed API)
* `react-dev-utils/openBrowser.js` ignores `BROWSER=none` and lets the
  browser-opener's rejected promise go unhandled; on a headless machine that
  now crashes `npm start` instead of just warning.

`scripts/patch-2016-deps.js` fixes all three inside `node_modules` and runs
automatically on `npm install` (postinstall). On a headless server, start the
dev server with `BROWSER=none npm start`. Everything else — webpack 1, Babel 6,
the dev server — runs unmodified.
