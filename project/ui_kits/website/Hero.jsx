/* global React */

function Hero({ onCta }) {
  return (
    <section style={hero.wrap}>
      <div style={hero.eyebrow}>SAT 04 MAY · 19:00 · DARIAUS IR GIRĖNO STADIONAS</div>
      <h1 style={hero.h1}>
        Kaunas<br/>
        vs Žalgiris.<br/>
        <span style={hero.muted}>Be there.</span>
      </h1>
      <div style={hero.row}>
        <button style={hero.btn} onClick={onCta}>Buy Tickets</button>
        <button style={hero.btnGhost}>Squad List</button>
      </div>
      <div style={hero.bar}>
        <span>STAND €8</span><span>·</span><span>SEAT €15</span><span>·</span><span>MEMBERS −20%</span>
      </div>
    </section>
  );
}

const hero = {
  wrap: {
    background: 'var(--kc-black)', color: 'var(--kc-bone)',
    padding: '96px 48px 64px', borderBottom: '8px solid var(--kc-bone)',
  },
  eyebrow: {
    fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 13,
    letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--fg-muted-inverse)',
    marginBottom: 28,
  },
  h1: {
    fontFamily: 'var(--font-display)', fontWeight: 400,
    fontSize: 'clamp(64px, 11vw, 168px)', lineHeight: .9,
    letterSpacing: '-.015em', textTransform: 'uppercase', margin: 0,
  },
  muted: { color: 'var(--kc-fog)' },
  row: { display: 'flex', gap: 16, marginTop: 40 },
  btn: {
    fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 14, letterSpacing: '.16em',
    textTransform: 'uppercase', padding: '16px 26px', border: '2px solid var(--kc-bone)',
    background: 'var(--kc-bone)', color: 'var(--kc-black)', cursor: 'pointer',
    boxShadow: '6px 6px 0 #6B6B6B',
  },
  btnGhost: {
    fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 14, letterSpacing: '.16em',
    textTransform: 'uppercase', padding: '16px 26px', border: '2px solid var(--kc-bone)',
    background: 'transparent', color: 'var(--kc-bone)', cursor: 'pointer',
  },
  bar: {
    marginTop: 56, paddingTop: 16, borderTop: '2px solid var(--kc-bone)',
    display: 'flex', gap: 18, fontFamily: 'var(--font-mono)', fontSize: 12,
    letterSpacing: '.12em', textTransform: 'uppercase',
  },
};

window.Hero = Hero;
