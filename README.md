# Bloom & Petal

> **Note:** This is a demo project. Bloom & Petal is a fictional flower shop —
> the business, address, phone number, and testimonials are all made up, and the
> product and hero photos are AI-generated (see `assets/IMAGE-PROMPTS.md`).

Landing page for the Bloom & Petal flower shop.

## Requirements

* Node 24 LTS (see `.nvmrc` — run `nvm use`)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with Vite.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Serves the production build from `dist` locally, to sanity-check it before deploying.

## Stack

* React 19 + react-dom 19, function components and hooks
* [Vite](https://vite.dev/) 7 + `@vitejs/plugin-react`
* [react-material-expressive](https://www.npmjs.com/package/react-material-expressive) —
  Material Design 3 Expressive components, light theme only, brand tokens in `src/theme.css`
* Material Symbols (Rounded) + Roboto Flex/Pacifico from Google Fonts
