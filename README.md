# Portugal with the Family

A single-page family guide to Portugal for three small travellers (ages 1, 4 and 6) —
**Lisbon · Nazaré · Porto · the Douro · the eastern Algarve**. Route, seasons, anchor
activities, where to stay and eat, traditions, and practical notes for a UK family.

**Live site:** https://portugal-recommendations.goecke.io/

## What's here

| File | Purpose |
|------|---------|
| `index.html` | The complete guide — one page, styled entirely with Tailwind utility classes. |
| `tailwind.css` | The generated stylesheet the page loads. Built from the input below; committed so the site needs no build step to *serve*. |
| `tailwind.input.css` | Tailwind entry point. Maps the "Modernist" design tokens (colour ramps, fonts) into the Tailwind theme and holds the handful of base rules. |
| `package.json` | Dev-only Tailwind CLI and the `build:css` script. |

The page has **no runtime JavaScript** and no runtime dependencies beyond the Archivo web
font (loaded from Google Fonts) and photography hot-linked from Wikimedia Commons. Styling
is Tailwind CSS v4, compiled locally into `tailwind.css` — there is no build step in the
deploy; the compiled file is committed and served as-is.

## Running locally

The compiled `tailwind.css` is committed, so you can just open `index.html` in a browser,
or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing the styles

Styling lives in the Tailwind utility classes on `index.html` and the theme tokens in
`tailwind.input.css`. After changing either, regenerate the stylesheet:

```bash
npm install            # first time only
npm run build:css      # writes a minified tailwind.css
```

`build:css` also stamps a content hash into the stylesheet link in
`index.html` (`tailwind.css?v=…`) so browsers and Cloudflare never serve a
stale stylesheet. Commit the regenerated `tailwind.css` **and** the updated
`index.html` together. The `_headers` file additionally tells Cloudflare
Pages to revalidate on every request.

## Deploying to GitHub Pages

Settings → Pages → Deploy from branch → `main` / root. The `.nojekyll` file ensures
GitHub Pages serves the files verbatim.

## Provenance

Designed in [Claude Design](https://claude.ai/design) with the Modernist design system,
then exported to a clean standalone site. Hotel names, prices, ferry fares and operators
verified July 2026 — recheck before you travel.

*Não faz mal.*
