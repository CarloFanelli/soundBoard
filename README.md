# soundBoard

A minimal soundboard for tabletop games and streams: a full-screen grid of big colored buttons, one sound each, **only one sound playing at a time**.

**[Live demo](https://carlofanelli.github.io/soundBoard/)**

## Why

During game sessions you want a drum roll or a rimshot *now*, with one tap, and you want the previous effect to stop when the next one starts. Nothing more.

## How it works

- `src/lib/audioBus.ts` is a small **singleton audio bus**: `play(id, url)` stops whatever is playing and starts the new sound; calling it again with the same `id` toggles it off. A reactive `currentId` lets every button know whether it's the active one.
- `SoundButton.vue` is a stateless button that asks the bus to play its sound and highlights itself while it's the current one.
- `SoundBar.vue` holds the list of sounds (label, color, file) and lays the buttons out with Tailwind's flex-wrap so the grid always fills the screen.
- URLs are resolved against `import.meta.env.BASE_URL`, so the same build works locally and under the `/soundBoard/` path on GitHub Pages.

## Add your own sounds

Drop an `.mp3` in `public/sounds/` and add an entry to the `buttons` array in `src/components/SoundBar.vue`:

```ts
{ label: 'air horn', color: '#f97316', soundUrl: '/sounds/air-horn.mp3' }
```

## Run locally

```bash
git clone https://github.com/CarloFanelli/soundBoard.git
cd soundBoard
npm i
npm run dev
```

## Deploy

Every push to `main` triggers the GitHub Action in `.github/workflows/deploy.yml`, which builds the app and publishes `dist/` to GitHub Pages (with a `404.html` fallback for the SPA). `vite.config.ts` sets `base: '/soundBoard/'`.

## Stack

Vue 3 (`<script setup>`, TypeScript) · Vite 7 · Tailwind CSS 4 · GitHub Actions + Pages

## Status

First prototype, used as-is. Ideas for later: keyboard shortcuts, volume per sound, drag-and-drop to upload sounds at runtime.
