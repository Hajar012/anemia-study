# Anemia Map

A small, static study tool for pharmacy students. It makes the **classification
relationships** between anemias visible: every anemia appears under each branch
(MCV, mechanism, etiology) that the medical source supports. Clicking an anemia
opens a focused study panel.

- **Study tab** — classification tree on the left, anemia detail on the right.
  A "Key clues mode" toggle strips the detail down to name, definition and key
  clues for rapid review.
- **Compare tab** — static differential tables (microcytic, macrocytic,
  hemolytic) built from the source.

No accounts, no backend, no database, no API — it is a content-driven static
site. All medical content is derived from `ground_truth.md` (Merck Manual).

## Requirements

- Node.js 20+ (developed on Node 24) and npm.

## Run

```bash
npm install     # install dependencies
npm run dev     # start the dev server (prints a local URL, default http://localhost:5173/)
npm run build   # typecheck + production build into dist/
npm run preview # serve the production build locally
npm run lint    # oxlint
```

## Project layout

```
src/
  App.tsx                    # shell: tabs, header toggle, footer
  components/
    ClassificationTree.tsx   # branch groups -> branches -> anemia buttons
    AnemiaDetail.tsx         # the 9 study sections + Key clues mode
    LabTable.tsx             # CBC/lab two-column table
    KeyCluesBox.tsx          # emphasized key-clues box
    CollapsibleSection.tsx   # native <details> (treatment, collapsed)
    CompareTables.tsx        # static differential tables
  data/
    anemias/                 # one file per anemia + index.ts barrel
    classificationTree.ts    # branch groups + getAnemiasForBranch()
  styles/
    tokens.css               # colors, spacing, font sizes
    globals.css              # reset + base typography
    ui.css                   # layout and components
  types/
    anemia.ts                # the Anemia / LabRow / BranchKey schema
```

## Adding an anemia (under 10 minutes)

1. **Update the source first.** Add the entry to `ground_truth.md`. Never
   introduce a fact that is not there.
2. Create `src/data/anemias/<id>.ts` exporting a single `Anemia` object that
   matches the schema in `src/types/anemia.ts`. Use an existing file as a
   template. Rules:
   - `id` is kebab-case.
   - `branches` includes **every** branch the source supports.
   - Set a lab row's `direction` only when the source states a polarity
     (`increased`, `decreased`, `low`, `high`, …); otherwise omit it.
   - If the source does not cover a field, write exactly
     `"Not specified by source."`.
   - `source` is the exact Merck Manual attribution.
3. Add the new object to the `anemias` array in
   `src/data/anemias/index.ts`, keeping the list alphabetical by `name`.
4. Run `npm run build` and `npm run lint`.

The classification tree is **derived** from the anemia entries, so no tree
edits are needed.

## Content rules (non-negotiable)

- All medical content comes from `ground_truth.md`. Do not invent, guess, or
  edit medical claims without updating that file first.
- Do not merge clinically distinct anemias.
- Treatment text is educational only and is not a prescribing guide.

## Deploy

The build is a fully static bundle — deploy by uploading `dist/`.

1. `npm run build`
2. Upload the contents of `dist/` to any static host (GitHub Pages, Netlify,
   Vercel, Cloudflare Pages, S3, …).

For drag-and-drop hosts (Netlify/Vercel), point the build command at
`npm run build` and the publish directory at `dist`. For a repository hosted at
a subpath (e.g. GitHub Pages project sites), set `base` in `vite.config.ts` to
that subpath before building.

## Disclaimer

Educational study tool — not medical advice.
