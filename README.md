# Corvus Sales Intelligence — Advanced Suite (Prototype)

A React + Vite + Tailwind single-page prototype of an advanced sales-intelligence platform for Corvus Energy (maritime batteries): 12 tools covering installed-base replacement, fleet-expansion prediction, partner loyalty, competitor hiring signals, win-loss learning, reference-project matching, account risk, executive relationships, total-cost-of-ownership comparison, competitor-response simulation, an early-warning center, and a management decision simulator.

## Running locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Build for production with `npm run build` (outputs to `dist/`).

## Data model and provenance

Every data-driven record in this app carries a provenance classification — see `src/lib/schema.js`:

- **Fact** — directly stated in one of the five source documents registered in `src/data/sources.js`.
- **Inference** — a reasoned estimate built on a documented fact plus a disclosed assumption (see `src/data/assumptions.js`).
- **Illustrative Example** — synthetic sample data used only to demonstrate a tool's mechanics; not sourced from any document.

All entity and record data lives in `src/data/*.js`. Reusable UI (badges, tables, cards) is in `src/components/ui/`. Each of the 12 tools is a page under `src/pages/`, routed from `src/App.jsx` via `react-router-dom`'s `HashRouter` (chosen for GitHub Pages compatibility with no server-side rewrite rule).

See the in-app **Methodology, Data Entry & Roadmap** page for the source-document list, the data-entry process recommended for Corvus employees, and a phased (Phase 1/2/3) build recommendation.
