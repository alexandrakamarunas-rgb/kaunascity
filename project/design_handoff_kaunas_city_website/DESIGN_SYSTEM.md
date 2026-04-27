# Kaunas City FA — Design System

A monochrome design system for **Kaunas City** — a football academy in Kaunas, Lithuania.

## Who we are
- **Football academy for kids aged 5–12** — split into two groups: **5–8** and **9–12**.
- **Senior team** in the **III lyga** (third tier).
- **Head coach (kids + senior):** Lukas Spalvis.
- **Brand colours:** black, white, grey. Nothing else.
- **Language:** Lithuanian only for now.

> Brand voice: **sporty and bald** — direct, hard-edged, no decoration that doesn't earn its place. Written in Lithuanian.

---

## 1. Sources & Inputs

| Source | Status | Notes |
|---|---|---|
| `uploads/KAUNAS CITY (6).png` | ✅ Used | Primary crest. 500×500, transparent PNG. Imported as `assets/logo-primary.png`. |
| `uploads/graphicriver-7f9iJ29e-kooperativ-soviet-poster-font.ZIP` | ✅ Used | Re-uploaded as individual font files. Imported into `fonts/` as `STKooperativRegular.*` and `STKooperativScratched.*`. |
| Brand voice note | ✅ Used | "sporty and bald" → drives the whole tone. |

### Font substitution (resolved)
Kooperativ ST is installed locally (`fonts/STKooperativRegular.*`) and wired up as `--font-display`. Clean Regular only — no distressed/scratched cut in the system.

- **Display** → `Kooperativ` (ST-Kooperativ Regular) ✅
- **Headlines** → `Oswald` (condensed sport, scoreboard feel)
- **Body** → `Archivo`
- **Mono** → `JetBrains Mono`

---

## 2. Brand at a glance

Kaunas City FA's identity is **monochrome by choice, not by accident**. The crest is a black disc with grey ball, white wordmark, and two stars. There is no team color in the traditional sense — *the absence of color is the brand*. This pulls the look toward:

- Soviet-era sport poster typography (heavy slabs, condensed all-caps)
- Newsprint / matchday-program tactility (bone paper, hard rules, halftone)
- Ultras / terrace culture (stark, confrontational, no decoration)

Everything in this system is built to look good in **black ink on bone paper**. Color, when it appears at all, is functional (warning/danger/success) — never decorative.

---

## 3. Content Fundamentals

### Voice: human, not barked
Direct and confident, but **not staccato**. Write like a coach explaining something at the side of the pitch — short enough to be clear, long enough to feel human. Avoid one-word fragments and machine-gun lists; let sentences breathe. The tone is calm and matter-of-fact, not shouty.

**Cadence rules**
- Full sentences are normal. Fragments are an exception, used for emphasis only.
- Imperatives over invitations. *"Prisijunk prie komandos ir ateik į pirmą treniruotę."* — not *"Prisijunk."*
- Numerals over words. *"3 įvarčiai"*, not *"trys įvarčiai"*.
- ALL CAPS is reserved for headlines and labels. Never shout in body copy.

### Casing
- **Headlines, navigation, buttons, labels:** ALL CAPS.
- **Body, captions, quotes:** Sentence case.
- **Player names, place names:** Title Case as normal.

### Language
**Lithuanian only.** Do not mix English headlines into LT pages. Reserve EN for technical/admin contexts only.

### Person
Mostly **second person singular ("tu")** — direct, like a coach to a player or a parent. *"Prisijunk. Treniruokis. Žaisk."* The club refers to itself as "Kaunas City" or "akademija" — never "mes" in marketing copy.

### Emoji & decoration
- **No emoji.** Anywhere. The brand has zero tolerance for them.
- **No exclamation marks** except on score lines: `KAUNAS CITY 3 — 0 ŽALGIRIS!`
- **No em-dashes for drama** — use full stops instead.

### Examples
| ✅ On-brand (LT) | ❌ Off-brand |
|---|---|
| **Prisijunk prie komandos ir ateik į pirmą treniruotę — ji nemokama.** | Prisijunkite prie mūsų komandos šiandien! ⚽ |
| **Treniruotės vyksta antradieniais ir ketvirtadieniais 17:00.** | Mūsų puikios treniruotės vyksta du kartus per savaitę visiems vaikams! |
| **Akademija vaikams nuo 5 iki 12 metų. Rimtas futbolas, ne pramoga.** | Linksmas futbolas visai šeimai! 🎉 |
| Spalvis treniruoja vaikus ir suaugusius — vienas standartas visiems. | Mes labai didžiuojamės pranešdami... |

### Numbers, dates, scores
- Scores: `3 — 0` with em-dash and spaces. Home team first, always.
- Time: 24-hour. `19:00`, never `7 val.` in headlines (acceptable in body).
- Dates: `ŠEŠT 04 GEG` — day-name (LT abbrev), day-number, month-abbrev, all caps.
- Currency: `€8`, no decimals unless cents matter.

---

## 4. Visual Foundations

### Colors
The palette is functional, not decorative. Eight tokens, max.

- **Ink** `#0A0A0A` — primary text & primary surface (inverted). Not pure black; warmer.
- **Bone** `#F4F1EA` — primary background. Warm off-white, like a matchday program.
- **Paper** `#FFFFFF` — cards, lifts, emphasis surfaces.
- **Pitch** `#000000` — reserved for the crest only.
- **Ash / Fog / Concrete** — three greys lifted from the crest itself, used for fills, dividers, and disabled states.
- **Semantic accents** — success, warning, danger. Used at small sizes. Never feature them.

➡️ See `colors_and_type.css` for tokens. See `preview/colors-*.html` for swatches.

### Typography
A **two-family system** with a mono utility:
1. **Display (Bowlby One)** — used for posters, hero numerals, and matchday graphics. One word per line wherever possible.
2. **Headlines (Oswald)** — condensed all-caps for H1–H3, navigation, buttons, and meta labels. The workhorse.
3. **Body (Archivo)** — paragraphs, longer-form, captions.
4. **Mono (JetBrains Mono)** — fixtures tables, stat blocks, kit numbers, code.

Tracking is **tighter than default** on display, **looser** on small caps labels (0.18em). All-caps body is forbidden (illegible at small sizes).

### Spacing
Strict **4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128** scale. The system favors *generous* spacing — pages should feel like a poster pinned to a wall, not a dashboard.

### Backgrounds
- **Default:** flat `--kc-bone` or flat `--kc-black`. No gradients.
- **Hero / poster:** flat color + heavy display type + crest. Optionally a single full-bleed b&w photo (terrace, stadium, training-ground).
- **No patterns, no textures, no illustrations** by default. Photography is preferred — **always desaturated to b&w with high contrast and grain**. Never tinted, never duotone-purple. Think 1970s sports photography.
- Halftone / risograph dots are acceptable as an *image* treatment, not as a CSS pattern.

### Borders & rules
- Heavy, **black**, **straight**. `--stroke-3` (4px) and `--stroke-4` (8px) are signature widths.
- Rules separate sections like a newspaper does — they carry the design.
- Hairline `rgba(10,10,10,0.18)` for dense data tables only.

### Corner radii
- **0 by default.** Everything is square.
- `--radius-1` (2px) is the maximum for inputs/buttons if needed.
- `--radius-pill` is reserved for *one* thing: the round status dot on live matches.
- Cards: square. Buttons: square. Inputs: square. Avatars: square (with a 1px black border).

### Shadows
Soft drop-shadows are **off-brand**. Use:
- `--shadow-hard` — `6px 6px 0 #0A0A0A` — the signature poster offset. Used on CTA buttons, callout cards.
- `--shadow-hard-lg` — `10px 10px 0` — for hero callouts.
- `--shadow-sm` / `--shadow-md` — only inside data-dense UI (admin tables) where hard shadow would be visually overwhelming.

### Hover & press states
- **Hover:** invert. Black-on-bone becomes bone-on-black, instantly. No fade.
- **Press:** translate the element by `(2px, 2px)` and reduce its hard-shadow by the same amount, so it looks pressed *into the page*.
- **Disabled:** 30% opacity, no other change.
- **Focus:** 2px black outline with 2px bone offset. Visible. Loud.

### Motion
Sparse and confident.
- Fades: forbidden. Use cuts.
- Easing: `--ease-snap` (`cubic-bezier(.2,.8,.2,1)`) for any movement that does happen.
- Durations: 120ms / 220ms / 380ms. Anything slower feels wrong.
- **No bounces. No springs. No staggered reveals.** This is football, not a marketing site.

### Transparency & blur
Avoid both. The brand is opaque. The single exception: a 90% black scrim over hero photography to ensure white display type stays legible.

### Cards
- Square corners.
- 1px or 2px solid black border.
- White (Paper) fill on Bone background; Bone fill on Black background.
- Optional `--shadow-hard` for emphasis cards (CTAs, fixture-of-the-week).
- No internal dividers — use whitespace.

### Layout rules
- 12-column grid, 32px gutter, 96px top margin on hero sections.
- Fixed header with bottom 2px black rule. No transparency on scroll.
- Footer is full-width black with bone type. Always.
- Asymmetry > symmetry. Numbers and headlines should crash into the edge.

---

## 5. Iconography

### Approach
Icons are used **sparingly**. The brand voice is "bald" — it doesn't decorate every label with a glyph. When icons appear they should feel **stamped, not drawn**: heavy stroke, no fill detail, almost agricultural.

- **No emoji. Ever.**
- **No multi-color icons.** Black on bone, or bone on black. Period.
- **Stroke-based system** at 2px stroke weight, square caps, square joins. Lucide icons are the fallback CDN choice — they match the stroke philosophy.
- **Unicode is fine** for arrows in body copy: `→`, `←`, `↗`. Use them.
- **Numeric icons** — kit numbers, jersey backs, scoreboard digits — should always be set in `--font-display` (Bowlby One), not as icons. The number IS the icon.

### Icon set in this system
- The **crest** (`assets/logo-primary.png`, `assets/logo-inverse.png`) is the only proprietary mark.
- For UI iconography we link **Lucide** from CDN:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  ```
  Use `data-lucide="..."` attributes; init with `lucide.createIcons()`.
- ⚠️ **Substitution flag:** Lucide is a substitution. The brand has no proprietary icon set yet. If the user wants a custom icon family (e.g. terrace-symbology, scarf, drum, flare), we should commission/draw those separately.

### Logo usage
- **Minimum size:** 32px. Below that, the wordmark in the crest becomes illegible.
- **Clear space:** at least the height of the "K" on all sides.
- **Don't:** recolor it, gradient it, add effects, place on busy photography without a black scrim.
- **Do:** use `logo-primary.png` on bone/light, `logo-inverse.png` on black/dark.

---

## 6. Index — what's in this folder

| Path | Purpose |
|---|---|
| `README.md` | This file. |
| `SKILL.md` | Cross-compat skill description (for use as an Agent Skill). |
| `colors_and_type.css` | Single source of truth for tokens + semantic type classes. |
| `assets/` | Logos and brand imagery. |
| `assets/logo-primary.png` | Black crest, on light backgrounds. |
| `assets/logo-on-dark.png` | Crest as supplied, on its native dark background — for use on Ink/black surfaces. |
| `assets/logo-inverse.png` | Programmatically inverted crest (luminance-flipped) — alt option for dark surfaces. |
| `preview/` | Design System preview cards (rendered in the Design System tab). |
| `ui_kits/website/` | Marketing/club website UI kit — components and a sample page. |
| `assets/photos/` | Real matchday + training photography, used by the website. |

---

## 7. Caveats & open questions

1. **Iconography is a substitution.** Lucide is a workable placeholder. A bespoke set would strengthen the brand.
2. **Photography:** real club photos now live in `assets/photos/` and are wired into the website (`Home`, `Coach`, `Academy`, `Team`). The `<Photo>` atom in `ui_kits/website/Bits.jsx` applies the brand-correct b&w treatment (grayscale + slight contrast lift). To swap in new images, drop them in `assets/photos/` and reference them by path — or replace the existing files.
3. **Confirmed monochrome:** black, white, grey. No accent. Locked.
