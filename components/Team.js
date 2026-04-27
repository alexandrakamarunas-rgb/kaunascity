import { Eyebrow, Rule, Section, Photo, LT } from './Bits';

const fixtures = [
  { date: '2026-05-03', time: '19:00', tag: 'III lyga', home: 'FK Nadruvis',     away: 'Kaunas City FA', place: 'Garliava' },
  { date: '2026-05-10', time: '19:00', tag: 'III lyga', home: 'FK Šturmas',      away: 'Kaunas City FA', place: 'Kaunas' },
  { date: '2026-06-14', time: '19:00', tag: 'III lyga', home: 'FK Danspin–KKSC', away: 'Kaunas City FA', place: 'Raseiniai' },
];

const DAYS   = ['Sekm', 'Pirm', 'Antr', 'Trec', 'Ketv', 'Penkt', 'Sest'];
const MONTHS = ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rgp', 'Rgs', 'Spa', 'Lap', 'Grd'];

function fmt(iso) {
  const d = new Date(iso + 'T00:00:00');
  return `${DAYS[d.getDay()]} ${String(d.getDate()).padStart(2, '0')} ${MONTHS[d.getMonth()]}`;
}

export default function Team() {
  return (
    <Section padded={false}>
      <div className="page-pad">
        <div className="academy-header">
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 8vw, 96px)',
            margin: 0, lineHeight: .95, textTransform: 'uppercase',
          }}>Komanda</h1>
          <Eyebrow>KAFF–MAFF III lyga · 2026</Eyebrow>
        </div>
        <Rule width={120} weight={8} />

        <div style={{ marginTop: 28 }}>
          <Photo
            src="/photos/senior-huddle-night.webp"
            alt="Komanda"
            ratio="21 / 9"
            style={{ width: '100%' }}
            objectPosition="50% 40%"
            treatment="duotone"
            caption="KMFL 7×7 · čempionai"
          />
        </div>

        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Eyebrow>Artimiausios rungtynės</Eyebrow>
          {fixtures.map((f, i) => (
            <div key={i} className="fixture-row" style={{
              background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
              padding: '18px 20px',
              boxShadow: i === 0 ? 'var(--shadow-hard)' : 'none',
            }}>
              {/* Date column */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.5vw, 28px)',
                  lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-.01em',
                }}>{fmt(f.date)}</div>
                <div style={{
                  marginTop: 4, fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '.08em', color: 'var(--fg3)',
                }}>{f.date}</div>
              </div>

              {/* Teams + time */}
              <div style={{
                display: 'flex', alignItems: 'baseline',
                justifyContent: 'space-between', gap: 12,
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(15px, 2vw, 26px)',
                  lineHeight: 1, textTransform: 'uppercase', flex: '1 1 auto',
                }}><LT>{f.home}</LT></span>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(15px, 2vw, 26px)',
                  lineHeight: 1, color: 'var(--fg3)', flexShrink: 0,
                }}>{f.time}</span>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(15px, 2vw, 26px)',
                  lineHeight: 1, textTransform: 'uppercase', textAlign: 'right', flex: '1 1 auto',
                }}>{f.away}</span>
              </div>

              {/* Tag + place */}
              <div className="fixture-meta" style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 11,
                  letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--fg3)',
                }}>{f.tag}</div>
                <div style={{
                  marginTop: 4, fontFamily: 'var(--font-headline)', fontWeight: 600,
                  fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase',
                }}><LT>{f.place}</LT></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
