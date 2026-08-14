import { Eyebrow, Rule, Section, Photo, LT } from './Bits';

// Atnaujink lentelę po kiekvieno turo
const standings = [
  { pos: 1,  team: 'FK Danspin–KKSC',   z: 6, l: 5, ly: 0, p: 1, iv: 18, ig: 6,  t: 15 },
  { pos: 2,  team: 'FK Šturmas',         z: 6, l: 4, ly: 1, p: 1, iv: 14, ig: 7,  t: 13 },
  { pos: 3,  team: 'Kaunas City FA',     z: 6, l: 4, ly: 0, p: 2, iv: 12, ig: 9,  t: 12 },
  { pos: 4,  team: 'FK Nadruvis',        z: 6, l: 3, ly: 1, p: 2, iv: 10, ig: 8,  t: 10 },
  { pos: 5,  team: 'FK Riteriai–2',      z: 6, l: 2, ly: 2, p: 2, iv: 9,  ig: 10, t: 8  },
  { pos: 6,  team: 'FK Žalgiris–3',      z: 6, l: 2, ly: 1, p: 3, iv: 8,  ig: 11, t: 7  },
  { pos: 7,  team: 'FK Kauno Žalgirys',  z: 6, l: 1, ly: 1, p: 4, iv: 6,  ig: 13, t: 4  },
  { pos: 8,  team: 'FK Banga',           z: 6, l: 0, ly: 0, p: 6, iv: 3,  ig: 16, t: 0  },
];

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

        {/* Standings table */}
        <div style={{ marginTop: 48 }}>
          <Eyebrow>KAFF–MAFF III lyga · Turnyrinė lentelė</Eyebrow>
          <div style={{ marginTop: 16, overflowX: 'auto' }}>
            <table style={{
              width: '100%', borderCollapse: 'collapse',
              fontFamily: 'var(--font-headline)', fontSize: 13,
              letterSpacing: '.08em', textTransform: 'uppercase',
              minWidth: 520,
            }}>
              <thead>
                <tr style={{ borderBottom: '3px solid var(--kc-black)' }}>
                  {['#', 'Komanda', 'Ž', 'L', 'Ly', 'P', 'Į', 'P', 'T'].map((h, i) => (
                    <th key={i} style={{
                      padding: '10px 10px',
                      fontWeight: 700, fontSize: 11, letterSpacing: '.18em',
                      color: 'var(--fg3)',
                      textAlign: i < 2 ? 'left' : 'center',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {standings.map((row, i) => {
                  const isUs = row.team === 'Kaunas City FA';
                  return (
                    <tr key={i} style={{
                      background: isUs ? 'var(--kc-black)' : i % 2 === 0 ? 'var(--kc-paper)' : 'var(--kc-bone)',
                      color: isUs ? 'var(--kc-bone)' : 'var(--kc-black)',
                      borderBottom: '1px solid var(--kc-black)',
                    }}>
                      <td style={{ padding: '13px 10px', fontFamily: 'var(--font-mono)', fontSize: 12, textAlign: 'left', opacity: 0.5 }}>{row.pos}</td>
                      <td style={{ padding: '13px 10px', fontFamily: 'var(--font-display)', fontSize: 'clamp(13px,1.8vw,17px)', textTransform: 'uppercase', letterSpacing: '-.01em' }}>
                        <LT>{row.team}</LT>
                      </td>
                      <td style={{ padding: '13px 10px', textAlign: 'center', opacity: 0.6 }}>{row.z}</td>
                      <td style={{ padding: '13px 10px', textAlign: 'center' }}>{row.l}</td>
                      <td style={{ padding: '13px 10px', textAlign: 'center', opacity: 0.6 }}>{row.ly}</td>
                      <td style={{ padding: '13px 10px', textAlign: 'center', opacity: 0.6 }}>{row.p}</td>
                      <td style={{ padding: '13px 10px', textAlign: 'center', opacity: 0.6 }}>{row.iv}</td>
                      <td style={{ padding: '13px 10px', textAlign: 'center', opacity: 0.6 }}>{row.ig}</td>
                      <td style={{ padding: '13px 10px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 18 }}>{row.t}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
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
