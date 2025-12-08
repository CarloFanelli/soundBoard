Simple soundboard for game purpose. First prototype.
Singleton for audio.

## Deploy su GitHub Pages

Questo progetto usa Vue 3 + Vite. Per pubblicarlo su GitHub Pages:

1. Assicurati che `vite.config.ts` abbia `base: '/soundBoard/'` (già configurato).
2. Abilita GitHub Pages nel repository:
	- Vai su Settings → Pages.
	- Imposta "Source" su "GitHub Actions".
3. Fai push su `main`. La GitHub Action in `.github/workflows/deploy.yml` builda e pubblica automaticamente `dist` su Pages.

URL previsto: `https://CarloFanelli.github.io/soundBoard/`

### Deploy manuale (opzionale)

In alternativa si può usare il pacchetto `gh-pages` per pubblicare manualmente:

1. Installa `gh-pages` e aggiungi uno script `deploy`.
2. Esegui `npm run build` e poi `npm run deploy`.

Vedi sezione scripts in `package.json` (se abilitata).
