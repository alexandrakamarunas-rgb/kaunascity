/* global React */

const FIXTURES = [
  { date: 'SAT 04 MAY', time: '19:00', home: 'Kaunas', away: 'Žalgiris', venue: 'H', score: null },
  { date: 'SUN 28 APR', time: 'FT', home: 'Sūduva', away: 'Kaunas', venue: 'A', score: '0—3' },
  { date: 'WED 24 APR', time: 'FT', home: 'Kaunas', away: 'Panevėžys', venue: 'H', score: '2—0' },
  { date: 'SUN 19 MAY', time: '17:00', home: 'Kaunas', away: 'Banga', venue: 'H', score: null },
];

function FixtureStrip() {
  return (
    <section style={fs.wrap}>
      <div style={fs.head}>
        <span style={fs.eb}>Fixtures</span>
        <a style={fs.all}>All matches →</a>
      </div>
      <div style={fs.grid}>
        {FIXTURES.map((m, i) => (
          <div key={i} style={{ ...fs.card, ...(i === 0 ? fs.cardHard : null) }}>
            <div style={fs.row1}>
              <span>{m.date} · {m.time}</span>
              <span>{m.venue === 'H' ? 'HOME' : 'AWAY'}</span>
            </div>
            <div style={fs.teams}>
              <span style={fs.team}>{m.home}</span>
              {m.score
                ? <span style={fs.score}>{m.score}</span>
                : <span style={fs.vs}>vs</span>}
              <span style={fs.team}>{m.away}</span>
            </div>
            <div style={fs.foot}>
              {m.score ? '3 points. No complaints.' : 'Stand €8 · Seat €15'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const fs = {
  wrap: { padding: '64px 48px', background: 'var(--kc-bone)' },
  head: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '4px solid var(--kc-black)', paddingBottom: 14, marginBottom: 28 },
  eb: { fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: .9, textTransform: 'uppercase', letterSpacing: '-.01em' },
  all: { fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase', cursor: 'pointer' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 },
  card: { background: 'var(--kc-paper)', border: '2px solid var(--kc-black)', padding: 18 },
  cardHard: { boxShadow: '6px 6px 0 var(--kc-black)' },
  row1: { display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--fg3)' },
  teams: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 10 },
  team: { fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-.005em' },
  vs: { fontFamily: 'var(--font-headline)', fontSize: 13, letterSpacing: '.2em', color: 'var(--fg3)' },
  score: { fontFamily: 'var(--font-display)', fontSize: 32, letterSpacing: '-.02em' },
  foot: { fontFamily: 'var(--font-headline)', fontWeight: 600, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--fg2)', marginTop: 14, borderTop: '2px solid var(--kc-black)', paddingTop: 8 },
};

window.FixtureStrip = FixtureStrip;
