/* global React */

const NEWS = [
  { tag: 'MATCH REPORT', title: 'Three points. No complaints.', date: 'SUN 28 APR', body: 'Kaunas controlled Sūduva from minute one. Two goals before the hour, a closed door for the rest.' },
  { tag: 'CLUB',         title: 'Members\u2019 vote: away kit returns to bone.', date: 'WED 24 APR', body: 'After 312 votes, the bone away strip returns for the 2026/27 season. Black home, bone away. Nothing else.' },
  { tag: 'INTERVIEW',    title: '"Stand or sit. Be loud either way."', date: 'MON 22 APR', body: 'Captain on the North Stand, the rule book, and why the silence after a missed chance is the loudest sound in the city.' },
];

function NewsList() {
  return (
    <section style={nl.wrap}>
      <div style={nl.head}>
        <span style={nl.title}>Latest</span>
        <a style={nl.all}>All news →</a>
      </div>
      <div style={nl.grid}>
        {NEWS.map((n, i) => (
          <article key={i} style={nl.card}>
            <div style={nl.tag}>{n.tag}</div>
            <h3 style={nl.h3}>{n.title}</h3>
            <p style={nl.body}>{n.body}</p>
            <div style={nl.foot}>{n.date}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

const nl = {
  wrap: { padding: '64px 48px', background: 'var(--kc-black)', color: 'var(--kc-bone)' },
  head: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '4px solid var(--kc-bone)', paddingBottom: 14, marginBottom: 28 },
  title: { fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: .9, textTransform: 'uppercase' },
  all: { fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase', cursor: 'pointer', color: 'var(--kc-bone)' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 },
  card: { borderTop: '2px solid var(--kc-bone)', paddingTop: 18 },
  tag: { fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--kc-fog)', marginBottom: 12 },
  h3: { fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-.005em', margin: '0 0 12px', color: 'var(--kc-bone)' },
  body: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, color: 'var(--fg-muted-inverse)', margin: 0 },
  foot: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kc-fog)', marginTop: 18, paddingTop: 10, borderTop: '1px solid rgba(244,241,234,.18)' },
};

window.NewsList = NewsList;
