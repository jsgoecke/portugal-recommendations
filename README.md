# Portugal with the Family

A single-page family guide to Portugal for three small travellers (ages 1, 4 and 6) —
**Lisbon · Nazaré · Porto · the Douro · the eastern Algarve**. Route, seasons, anchor
activities, where to stay and eat, traditions, and practical notes for a UK family.

**Live site:** https://jsgoecke.github.io/portugal-recommendations/

## What's here

| File | Purpose |
|------|---------|
| `index.html` | The complete guide — one self-contained page. |
| `styles.css` | The "Modernist" design system: tokens (colour ramps, type, spacing) and component classes. |

The page is plain HTML and CSS — no build step, no JavaScript, no dependencies beyond
the Archivo web font (loaded from Google Fonts) and photography hot-linked from
Wikimedia Commons (plus one book-cover image hot-linked from a retailer).

## Running locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

Settings → Pages → Deploy from branch → `main` / root. The `.nojekyll` file ensures
GitHub Pages serves the files verbatim.

## Provenance

Designed in [Claude Design](https://claude.ai/design) with the Modernist design system,
then exported to a clean standalone site. Hotel names, prices, ferry fares and operators
verified July 2026 — recheck before you travel.

*Não faz mal.*
