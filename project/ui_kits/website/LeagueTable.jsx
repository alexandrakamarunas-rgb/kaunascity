/* global React */

const TABLE = [
  { p: 1, club: 'Žalgiris',     pl:12, w:9, d:2, l:1, gd:'+18', pts:29 },
  { p: 2, club: 'Kaunas City',  pl:12, w:8, d:3, l:1, gd:'+14', pts:27, us:true },
  { p: 3, club: 'Sūduva',       pl:12, w:7, d:2, l:3, gd:'+9',  pts:23 },
  { p: 4, club: 'Panevėžys',    pl:12, w:5, d:4, l:3, gd:'+4',  pts:19 },
  { p: 5, club: 'Banga',        pl:12, w:4, d:3, l:5, gd:'-2',  pts:15 },
  { p: 6, club: 'Hegelmann',    pl:12, w:2, d:2, l:8, gd:'-12', pts:8  },
];

function LeagueTable() {
  return (
    <section style={lt.wrap}>
      <div style={lt.head}>
        <span style={lt.title}>A Lyga</span>
        <span style={lt.meta}>SEASON 2025/26 · MD12</span>
      </div>
      <table style={lt.t}>
        <thead><tr>
          <th style={{ ...lt.th, ...lt.num }}>#</th>
          <th style={lt.th}>Club</th>
          <th style={{ ...lt.th, ...lt.num }}>P</th>
          <th style={{ ...lt.th, ...lt.num }}>W</th>
          <th style={{ ...lt.th, ...lt.num }}>D</th>
          <th style={{ ...lt.th, ...lt.num }}>L</th>
          <th style={{ ...lt.th, ...lt.num }}>GD</th>
          <th style={{ ...lt.th, ...lt.num }}>PTS</th>
        </tr></thead>
        <tbody>
          {TABLE.map(r => (
            <tr key={r.p} style={r.us ? lt.us : null}>
              <td style={{ ...lt.td, ...lt.num }}>{r.p}</td>
              <td style={{ ...lt.td, ...lt.club }}>{r.club}</td>
              <td style={{ ...lt.td, ...lt.num }}>{r.pl}</td>
              <td style={{ ...lt.td, ...lt.num }}>{r.w}</td>
              <td style={{ ...lt.td, ...lt.num }}>{r.d}</td>
              <td style={{ ...lt.td, ...lt.num }}>{r.l}</td>
              <td style={{ ...lt.td, ...lt.num }}>{r.gd}</td>
              <td style={{ ...lt.td, ...lt.num, ...lt.pts }}>{r.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

const lt = {
  wrap: { padding: '64px 48px', background: 'var(--kc-bone)', borderTop: '2px solid var(--kc-black)' },
  head: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 },
  title: { fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: .9, textTransform: 'uppercase' },
  meta: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--fg3)' },
  t: { width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: 14 },
  th: { padding: '10px 8px', textAlign: 'left', fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--fg3)', borderBottom: '2px solid var(--kc-black)' },
  num: { textAlign: 'right', fontVariantNumeric: 'tabular-nums' },
  td: { padding: '12px 8px', borderBottom: '1px solid rgba(10,10,10,.18)' },
  club: { fontFamily: 'var(--font-headline)', fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase' },
  us: { background: 'var(--kc-black)', color: 'var(--kc-bone)' },
  pts: { fontWeight: 700 },
};

window.LeagueTable = LeagueTable;
