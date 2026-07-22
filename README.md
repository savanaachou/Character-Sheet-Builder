# Build your own character sheet

An interactive web app that turns "introduce yourself" into a customizable RPG-style character sheet — pick your stats, abilities, and visual theme, and export the result as a shareable PNG. Built as a personal project to get hands-on React and TypeScript practice.

## What it does

- Fill in your name, class, bio, and portrait
- Add, remove, rename, and re-color custom stat bars (with live sliders)
- Add, remove, and re-color custom ability tags
- Customize the color palette and typography of the whole card
- Watch the character sheet update live as you type
- Download the final result as a high-resolution PNG

## Built with

- **React** + **TypeScript** — component structure and typed data models
- **Vite** — build tooling and dev server
- **html-to-image** — client-side PNG export straight from the DOM
- Plain CSS, no UI framework — custom styling to match a pastel/frosted-glass aesthetic

## Running it locally

You'll need [Node.js](https://nodejs.org) installed (includes npm).

```bash
git clone <this-repo-url>
cd character-sheet-builder
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
npm run preview
```

## Why I built this

I wanted a small, self-contained project to practice React and TypeScript with real component state, controlled inputs, and typed props — while making something genuinely fun to use.