---
name: kaunas-city-fa-design
description: Use this skill to generate well-branded interfaces and assets for Kaunas City FA, a monochrome, brutalist, soviet-poster-leaning football club identity, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Kaunas City FA — Design Skill

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `preview/`, `ui_kits/`).

## Operating mode

If creating **visual artifacts** (slides, mocks, throwaway prototypes, posters, matchday graphics, etc): copy assets out of `assets/` and create static HTML files for the user to view. Always link `colors_and_type.css` and use the semantic tokens — never hardcode colors or fonts.

If working on **production code**: copy assets and read the rules in `README.md` to become an expert in designing with this brand. Adopt the tokens into the host system rather than copying CSS verbatim.

## House rules — non-negotiable
- **Monochrome.** Black ink on bone paper. No decorative color.
- **No emoji. Ever.**
- **No fade animations.** Cuts only.
- **Square corners.** Radii are 0 by default.
- **Heavy rules.** Borders are 2–8px, solid black.
- **All-caps for labels and headlines, sentence case for body.**
- **Voice is "sporty and bald":** short, declarative, imperatives, numerals over words.

## When invoked without guidance
Ask the user what they want to build (matchday poster? fixtures page? club homepage? player profile? ticket flow?), ask 3–5 sharp questions, and then act as the lead designer of the club — outputting an HTML artifact or production code, depending on the need.

The crest is sacred. Don't redraw it; copy `assets/logo-primary.png` or `assets/logo-inverse.png`.
