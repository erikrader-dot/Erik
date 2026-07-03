# Erik's Meal Prep — Ordering Site

A React + Vite + Tailwind single-page site. Three tabs — Order Meals, Rate & Feedback, Vote New Meals — are switched entirely with component state, so the URL never changes.

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
- `newMeals.js` — the candidate meals shown on the Vote New Meals tab.

Meal photos go in `public/images/` (see the README there for filenames). Until a photo is added, that meal shows a "photo coming soon" placeholder automatically.

## Rate & Feedback / Vote New Meals

Both tabs save what customers submit to the browser's `localStorage` (key `erik-meal-prep-feedback` and `erik-meal-prep-votes`) — there's no backend yet, so submissions only exist on the device that submitted them. Each tab has a small "View Submitted Feedback" / "View Current Vote Counts" toggle to inspect what's stored locally.

## What's not included

No online payment processing — the receipt page tells customers to text the receipt and Zelle the total, per the current business flow.
