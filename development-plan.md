# Development Plan — Interactive Anemia Map

## 1. Concept Summary

A **single-page (or few-page) static study tool** for one pharmacy student. The centerpiece is an **interactive classification tree** of anemias, where each anemia appears under every branch it genuinely belongs to. Clicking an anemia opens a focused study panel with the 9 sections from `ground_truth.md`, with treatment collapsed by default.

No accounts. No database. No backend. It's a **content-driven static site**.

---

## 2. Goals and Non-Goals

**Goals**
- Make the classification relationships *visible* (anemia appears in multiple branches on purpose).
- Let the student recognize anemias fast via **Key Clues** and **CBC/Lab findings**.
- Keep the UI quiet and study-friendly — no dashboards, no gamification noise.
- Stay medically faithful to `ground_truth.md` — no invented facts.

**Non-Goals (explicitly out of scope)**
- User accounts, login, progress tracking server-side
- Databases, APIs, backends
- Quizzes/gamification (can be a later phase if wanted)
- Multi-user features, sharing, comments
- Mobile app

**Possible later additions (only if clearly useful)**
- Client-side quiz mode (from existing data)
- Search/filter by lab finding (e.g., "show me microcytic anemias with low ferritin")
- Print-friendly study sheet

---

## 3. Tech Stack (Simple, Conventional)

| Layer | Choice | Why |
|---|---|---|
| Build tool | **Vite** | Fast, standard, zero-config for static sites |
| Framework | **React + TypeScript** | Familiar, component model fits the tree + panel pattern |
| Styling | **Plain CSS Modules** or **Tailwind CSS** | Avoid CSS-in-JS complexity; either is conventional |
| State | **React `useState` / `useReducer`** | No Redux/Zustand needed — the app is small |
| Routing | **None, or `react-router` with 2 routes** | If single-page with panel, no router needed |
| Data | **Local TS/JSON files** derived from `ground_truth.md` | No fetch, no API |
| Deploy | **GitHub Pages / Netlify / Vercel static** | Free, trivial |

**No** Next.js, no SSR, no server functions, no ORM, no database. The site is fully static.

---

## 4. Content Pipeline: `ground_truth.md` → Structured Data

This is the most important step. Do it before UI work.

### Step 4.1 — Define a TypeScript schema

One anemia = one object. Mirrors the ground-truth sections exactly.

```ts
type Anemia = {
  id: string;                 // "iron-deficiency-anemia"
  name: string;
  altNames: string[];
  definition: string;
  classification: {
    mcv?: 'microcytic' | 'normocytic' | 'macrocytic';
    mechanism?: ('blood-loss' | 'decreased-production' | 'hemolysis')[];
    etiology?: ('genetic' | 'acquired' | 'hemolytic' | 'marrow-disorder')[];
  };
  cause: string;
  pathophysiology: string;
  cbc: { label: string; value: string; direction?: 'up'|'down'|'normal'|'variable' }[];
  smear: string[];
  labs: { label: string; value: string; direction?: 'up'|'down'|'normal'|'variable'; note?: string }[];
  diagnosis: string;
  clinicalFeatures: { general: string[]; specific: string[]; complications?: string[] };
  treatment: string[];        // rendered collapsed by default
  keyClues: string[];
  source: string;             // "Merck Manual — Iron Deficiency Anemia (Consumer, Apr 2026)"
};
```

### Step 4.2 — Manually convert entries

Do this **by hand**, not with a script. Reasons:
- Only ~15–20 entries.
- Medical text needs human judgment (which field goes where).
- A bad parser silently corrupting medical facts is worse than 2 hours of typing.

Put entries in `src/data/anemias/*.ts`, one file per anemia, plus an `index.ts` that exports an array. Keeps diffs readable and lets you verify each entry against `ground_truth.md`.

### Step 4.3 — Classification map as a separate file

Derive the tree structure from the anemia entries, but keep the **branch labels and order** in a small config file:

```ts
// src/data/classificationTree.ts
export const branches = {
  byMcv: { label: 'By MCV', children: ['microcytic','normocytic','macrocytic'] },
  byMechanism: { label: 'By Mechanism', children: ['blood-loss','decreased-production','hemolysis'] },
  byEtiology: { label: 'Special / Etiology', children: ['genetic','acquired','hemolytic','marrow-disorder'] },
};
```

Then a helper `getAnemiasForBranch(branchKey)` filters the anemia list. **Single source of truth = the anemia entries**; the tree is derived, not hand-duplicated.

---

## 5. UI Plan

### 5.1 Layout

Desktop (primary target — it's a study tool):

```
┌──────────────────────────────────────────────────────────┐
│  Header: "Anemia Map"  ·  Search  ·  (optional dark mode)│
├────────────────────┬─────────────────────────────────────┤
│                    │                                     │
│  Classification    │      Anemia detail panel            │
│  Tree              │      (scrolls independently)        │
│  (left, ~320px)    │                                     │
│                    │                                     │
│  ▸ By MCV          │                                     │
│    • Microcytic    │                                     │
│    • Normocytic    │                                     │
│    • Macrocytic    │                                     │
│  ▸ By Mechanism    │                                     │
│    ...             │                                     │
│  ▸ Special         │                                     │
│                    │                                     │
└────────────────────┴─────────────────────────────────────┘
```

Mobile: tree collapses to a top accordion; selecting an anemia slides the detail panel up.

### 5.2 Tree behavior

- Three top-level groups, each with a colored accent (e.g., MCV = teal, Mechanism = amber, Etiology = violet). Color is *decorative*, not load-bearing.
- Expanding a branch lists anemia names.
- An anemia appears under every branch it belongs to — this is the whole point. Show a small "also in: …" tag inside the detail panel so the student sees the cross-links.
- Highlight the currently open anemia across all visible branches.

### 5.3 Anemia detail panel

Sections rendered in this order (matches ground truth):

1. **Header** — name, alt names, one-line definition
2. **Classification chips** — MCV / mechanism / etiology (clickable → jumps tree)
3. **Cause**
4. **Pathophysiology**
5. **CBC & Labs** — small table with ↑ ↓ ⚠ arrows
6. **Peripheral smear**
7. **Diagnosis / Recognition**
8. **Clinical features** — split general vs. distinctive
9. **Key clues** — visually emphasized box (this is the study payoff)
10. **Treatment** — `<details>` element, collapsed by default
11. **Source** — small footnote

### 5.4 Comparison tables (phase 2)

From `ground_truth.md` Part 1: a separate route/tab "Compare" with:
- Microcytic differential (IDA vs. thalassemia vs. ACD vs. sideroblastic)
- Macrocytic differential (B12 vs. folate vs. MDS)
- Hemolytic patterns (HS vs. G6PD vs. AIHA vs. sickle)

Render as plain HTML tables — no library needed.

---

## 6. Component Breakdown

Keep it flat. No deep hierarchies.

```
src/
  App.tsx
  components/
    ClassificationTree.tsx
    BranchGroup.tsx
    AnemiaListItem.tsx
    AnemiaDetail.tsx
    LabTable.tsx
    KeyCluesBox.tsx
    CollapsibleSection.tsx
  data/
    anemias/            # one file per anemia
    classificationTree.ts
    index.ts            # exports all anemias
  styles/
    globals.css
    tokens.css          # colors, spacing
  types/
    anemia.ts
```

~8 components. Anything more is over-engineering for this scope.

---

## 7. Build Phases

### Phase 0 — Prep (½ day)
- Create Vite + React + TS project.
- Copy `ground_truth.md` into `docs/` as reference.
- Set up CSS tokens (colors, spacing, fonts).
- Commit.

### Phase 1 — Data (1–2 days)
- Write `types/anemia.ts`.
- Convert **3 anemias** by hand first (Iron Deficiency, Thalassemia, Sickle Cell) to validate the schema.
- Once happy, convert the rest.
- Write `classificationTree.ts` and the filter helper.
- **Deliverable:** `console.log` all anemias and their branch memberships — verify no entry lost a branch.

### Phase 2 — Static UI (2–3 days)
- Build `ClassificationTree` with hardcoded expansion state.
- Build `AnemiaDetail` rendering all sections from data.
- No interactions beyond clicking an anemia to open the panel.
- **Deliverable:** You can click through every anemia and read it fully.

### Phase 3 — Polish (1–2 days)
- Cross-highlight the selected anemia in all branches.
- Collapsible treatment.
- Mobile layout (accordion tree).
- Typography pass: readable body text (~17px), generous line-height, calm color palette.
- Print stylesheet (optional but nice for study).

### Phase 4 — Comparison tables (½–1 day)
- Add a "Compare" tab with 3–5 tables from `ground_truth.md` Part 1.

### Phase 5 — Ship (½ day)
- Deploy to GitHub Pages / Netlify.
- Send link to your friend.
- Add a README explaining how to add/edit an anemia entry.

**Total realistic estimate:** ~1 week of evening work.

---

## 8. Content Rules (Non-Negotiable)

These protect the medical accuracy of the source:

1. **Never invent a lab value, range, or clinical sign** not in `ground_truth.md`.
2. If `ground_truth.md` says "variable" or "not typically used," show that verbatim — don't collapse to a direction arrow.
3. Keep the **Source** line on every anemia, visible in the UI (collapsed footnote is fine).
4. If a field is missing for an anemia, render "Not specified by source" — do not fill the gap.
5. Treatment is **educational**, not prescriptive. Add a one-line disclaimer at the top of the Treatment section: *"Educational summary only — not a prescribing guide."*
6. Do not silently merge similar anemias (e.g., don't merge HS and HE — they share a page but differ clinically).

---

## 9. Improvements I'd Suggest to the Original Idea

Small, high-value additions that fit the "study tool" goal:

1. **"Why is it in this branch?" tooltip.** When the student sees Iron Deficiency under "Microcytic," a tooltip explains *why* (low MCV, hypochromic). Cheap to add, huge for learning the classification logic.
2. **Key Clues mode.** A toggle that hides everything except name + key clues. Turns the site into a flashcard-like rapid-review tool.
3. **"Also in" cross-links in the detail panel.** Because anemias live in multiple branches, this makes the branching explicit instead of confusing.
4. **Search by finding.** A simple client-side filter: type "spherocytes" → highlights anemias whose smear section mentions it. Useful during exam prep.
5. **Consistent color legend.** One legend mapping MCV/mechanism/etiology to colors, shown once in the header. Prevents color from becoming noise.

None of these require a backend. All are client-side.

---

## 10. What to Avoid (Given the Constraints)

- ❌ Next.js, Remix, Astro (overkill for a static study site unless you want SEO later)
- ❌ A database — the data is ~20 entries
- ❌ A state management library — `useState` is enough
- ❌ Auth, analytics, A/B testing
- ❌ Custom design systems / component libraries beyond Tailwind or plain CSS
- ❌ Markdown rendering at runtime — parse `ground_truth.md` once, by hand, into typed TS
- ❌ i18n, theming systems, plugin architectures

---

## 11. Definition of Done

- Every anemia in `ground_truth.md` appears in the site.
- Every anemia appears in **every** branch its classification supports.
- All 9 content sections render for every anemia.
- Key Clues are visually emphasized.
- Treatment is collapsed by default.
- Sources are visible per entry.
- Site is deployed and reachable via a URL.
- README explains how to add a new anemia entry in <10 minutes.

---

## 12. Suggested Next Step

Before writing any code, do **Phase 1 only**: define the TypeScript `Anemia` type and convert 3 anemias by hand. That will surface any schema problems cheaply, and it's the step most likely to affect the whole project.

If you want, next we can:
- Draft `types/anemia.ts` and convert the first 3 entries, or
- Sketch the tree/detail wireframe in more detail, or
- Set up the Vite project skeleton.

Tell me which and we'll do it — one step, no code beyond what's needed for that step.