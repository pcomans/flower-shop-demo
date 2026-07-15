# Bloom & Petal

> **Note:** This is a demo project. Bloom & Petal is a fictional flower shop —
> the business, address, phone number, and testimonials are all made up, and the
> product and hero photos are AI-generated (see `assets/IMAGE-PROMPTS.md`).
> The site is deliberately built with a 2016-era stack (React 15, create-react-app
> 0.7, Material Design Lite) to serve as the starting point for an AI-agent
> modernization exercise.

Landing page for the Bloom & Petal flower shop.

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

Two of react-scripts 0.7's bundled dependencies use Node APIs that no longer
exist (`process.binding('http_parser')` in websocket-driver 0.6.5 and
`res._headers` in send 0.14). `scripts/patch-2016-deps.js` fixes both inside
`node_modules` and runs automatically on `npm install` (postinstall). Everything
else — webpack 1, Babel 6, the dev server — runs unmodified.
