# Kaunas City FA — Website UI Kit

A click-thru recreation of the Kaunas City FA marketing/club website. Single-page, tab-style sections (HOME / FIXTURES / SQUAD / TICKETS / NEWS) so users can move around as if it were a real site.

## Files
- `index.html` — entry. Loads React + Babel, all components, mounts `<App/>`.
- `App.jsx` — top-level shell: header, view switcher, footer.
- `Header.jsx` — fixed-top dark navigation.
- `Footer.jsx` — full-bleed dark footer.
- `Home.jsx` — hero, next match, latest result, news strip.
- `Fixtures.jsx` — list of upcoming fixtures + results.
- `Squad.jsx` — grid of player cards with kit numbers.
- `Tickets.jsx` — stand picker → checkout-ish flow (fake).
- `News.jsx` — list of articles.
- `Bits.jsx` — shared atoms: Button, Badge, FixtureCard, Rule, Eyebrow.

## Notes
This is a pixel-feel recreation of the brand laid down in `../../README.md` and `../../colors_and_type.css`. No real backend; ticket purchase is a 3-step fake flow. The crest images live at `../../assets/`.
