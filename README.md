# Erik's Meal Prep — Ordering Site

A React + Vite + Tailwind site where customers build a meal prep plan, pick meals week by week, add customizations, and generate a receipt to text + Zelle.

## Running locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Build for production with `npm run build` (outputs to `dist/`).

## Editing things later

Almost everything you'll want to change lives in `src/data/`:

- `business.js` — brand name, subtitle, text-in number.
- `meals.js` — the 5 meal cards (name, description, weight, image path, badge). Add/remove meals here and every screen updates.
- `pricing.js` — the plan-length × meals-per-week price table.
- `addOns.js` — extras and their prices, grouped by category.

Meal photos go in `public/images/` (see the README there for filenames). Until a photo is added, that meal shows a placeholder icon automatically.

## What's not included

No online payment processing — the receipt page tells customers to text the receipt and Zelle the total, per the current business flow.
