# Tested & Rated - React Demo

A premium light-blue software review platform concept, with a homepage, searchable software directory, rankings, categories, detailed review pages, and an editorial methodology page.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Routes

- `/` homepage
- `/reviews` searchable reviews
- `/reviews/notion` detailed review (also works for each sample tool slug)
- `/best-tools` ranked directory
- `/categories` category browser
- `/how-we-test` editorial methodology

## Customization

- `src/data/tools.js` contains all static products, sample ratings, and category data.
- `src/pages/Review.jsx` contains the detailed editorial review layout.
- `src/styles.css` contains the theme and responsive styling.
- `src/components/UI.jsx` contains shared components.

Fonts: Manrope and DM Sans via Google Fonts, with system fallback.

**Important:** This is a concept demo. Scores, reviews, screenshot artwork, and testing claims are illustrative. Replace them with real evidence before publishing.
