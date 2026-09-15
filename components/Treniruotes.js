import { Eyebrow, Rule, Section, LT } from './Bits';

const locations = [
  {
    name: 'Lapių mokyklos stadionas',
    address: 'Merkio g. 3, Lapės',
    coach: 'Lukas Spalvis',
    blocks: [
      {
        days: 'Antradienis · Ketvirtadienis · Penktadienis',
        groups: [
          { group: 'U7',  time: '16:00' },
          { group: 'U9',  time: '17:00' },
          { group: 'U11', time: '18:00' },
          { group: 'U14', time: '19:00' },
        ],
      },
    ],
  },
  {
    name: 'Kauno kolegijos stadionas',
    address: 'Pramonės pr. 20, Kaunas',
    coach: 'Rytis Nedzveckas',
    blocks: [
      {
        days: 'Pirmadienis · Trečiadienis · Penktadienis',
        groups: [
          { group: 'U9',  time: '17:00' },
          { group: 'U12', time: '18:00' },
        ],
      },
    ],
  },
  {
    name: 'Panemunės stadionas',
    address: 'Vaidoto g. 11, Kaunas',
    coach: 'Paulius Smaryginas · Ignas Bytautas',
    blocks: [
      {
        days: 'Pirmadienis · Trečiadienis · Penktadienis',
        groups: [
          { group: 'U11 Elite (2015/2016)', time: '16:30' },
          { group: 'U9 su Kauno Atletu',   time: '18:00' },
        ],
      },
      {
        days: 'Antradienis',
        groups: [
          { group: 'U11 Elite – fizinis rengimas', time: '17:00' },
        ],
      },
    ],
  },
];

function LocationBlock({ loc, index }) {
  const isEven = index % 2 === 0;
  return (
    <div style={{
      border: '2px solid var(--kc-black)',
      marginBottom: 24,
      background: isEven ? 'var(--kc-bone)' : 'var(--kc-paper)',
    }}>
      {/* Header */}
      <div style={{
        background: 'var(--kc-black)',
        color: 'var(--kc-bone)',
        padding: 'clamp(20px, 3vw, 32px)',
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', alignItems: 'flex-end', gap: 12,
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-headline)', fontWeight: 700,
            fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'rgba(244,241,234,0.5)', marginBottom: 8,
          }}>
            <LT>Lokacija {String(index + 1).padStart(2, '0')}</LT>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 52px)',
            margin: 0, lineHeight: .9, textTransform: 'uppercase',
          }}>
            <LT>{loc.name}</LT>
          </h2>
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 13,
          letterSpacing: '.06em', color: 'rgba(244,241,234,0.65)',
          textAlign: 'right',
        }}>
          <div>📍 <LT>{loc.address}</LT></div>
          <div style={{ marginTop: 4, color: 'rgba(244,241,234,0.4)', fontSize: 11 }}>
            <LT>{loc.coach}</LT>
          </div>
        </div>
      </div>

      {/* Schedule blocks */}
      <div style={{ padding: 'clamp(20px, 3vw, 32px)', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {loc.blocks.map((block, bi) => (
          <div key={bi} style={{
            border: '2px solid var(--kc-black)',
          }}>
            <div style={{
              background: 'var(--kc-black)',
              color: 'rgba(244,241,234,0.55)',
              padding: '8px 16px',
              fontFamily: 'var(--font-headline)', fontWeight: 700,
              fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase',
            }}>
              <LT>{block.days}</LT>
            </div>
            <div style={{ padding: '4px 0' }}>
              {block.groups.map((g, gi) => (
                <div key={gi} style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', gap: 16,
                  padding: '12px 16px',
                  borderTop: gi > 0 ? '1px solid rgba(10,10,10,0.08)' : 'none',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-headline)', fontWeight: 700,
                    fontSize: 14, letterSpacing: '.12em', textTransform: 'uppercase',
                  }}>
                    <LT>{g.group}</LT>
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 28, lineHeight: 1, flexShrink: 0,
                  }}>
                    {g.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Treniruotes() {
  return (
    <Section padded={false}>
      <div className="page-pad">
        <div className="academy-header">
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 8vw, 96px)',
            margin: 0, lineHeight: .95, textTransform: 'uppercase',
          }}>
            <LT>Treniruotės</LT>
          </h1>
          <Eyebrow><LT>Lokacijos ir tvarkaraštis</LT></Eyebrow>
        </div>
        <Rule width={120} weight={8} />

        <div style={{ marginTop: 40 }}>
          {locations.map((loc, i) => (
            <LocationBlock key={i} loc={loc} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 8,
          padding: 'clamp(24px, 3vw, 40px)',
          background: 'var(--kc-black)', color: 'var(--kc-bone)',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between', gap: 20,
        }}>
          <div>
            <Eyebrow inverse><LT>Prisijunk</LT></Eyebrow>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 3vw, 36px)',
              textTransform: 'uppercase', margin: '8px 0 0', lineHeight: 1,
            }}>
              <LT>Pirma treniruotė nemokama</LT>
            </p>
          </div>
          <a href="/registracija" style={{
            display: 'inline-block',
            background: 'var(--kc-bone)', color: 'var(--kc-black)',
            fontFamily: 'var(--font-headline)', fontWeight: 700,
            fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase',
            padding: '14px 28px', textDecoration: 'none',
            border: '2px solid var(--kc-bone)',
            flexShrink: 0,
          }}>
            Registruotis →
          </a>
        </div>
      </div>
    </Section>
  );
}
