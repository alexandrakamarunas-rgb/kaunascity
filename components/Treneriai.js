import { Eyebrow, Rule, Section, LT } from './Bits';

const coaches = [
  {
    photo: '/photos/coach-lukas.jpg',
    name: 'Lukas Spalvis',
    role: 'Vyriausiasis treneris · Akademija + III lyga',
    location: 'Lapių stadionas · Merkio g. 3, Lapės',
    bio: 'Lietuvos metų futbolininkas 2015 m. Lietuvos nacionalinės rinktinės narys. Danijos „Superligos" čempionas ir geriausias lygos žaidėjas. Šiandien Lukas vadovauja Kaunas City akademijai ir suaugusiųjų komandai.',
    schedule: [
      {
        days: 'Antradienis · Ketvirtadienis · Penktadienis',
        groups: [
          { group: 'U7', time: '16:00' },
          { group: 'U9', time: '17:00' },
          { group: 'U11', time: '18:00' },
          { group: 'U14', time: '19:00' },
        ],
      },
    ],
  },
  {
    photo: '/photos/coach-rytis.jpg',
    name: 'Rytis Nedzveckas',
    role: 'Akademijos treneris',
    location: 'Kauno kolegija · Pramonės pr. 22, Kaunas',
    bio: 'Treniruoja jaunus futbolininkus Kauno kolegijos stadione, ugdydamas jų techniką ir komandinio žaidimo supratimą.',
    schedule: [
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
    photo: '/photos/coach-paulius.jpg',
    name: 'Paulius Smaryginas',
    role: 'Akademijos treneris · Elite',
    location: 'Panemunė · Vaidoto g. 11, Kaunas',
    bio: 'Vadovauja U11 elitinei grupei (2015/2016 m. gim.). Treniruotės vyksta 2 kartus per savaitę.',
    schedule: [
      {
        days: 'Pirmadienis · Trečiadienis · Penktadienis',
        groups: [
          { group: 'U11 Elite (2015/2016)', time: '16:30' },
        ],
      },
      {
        days: 'Pirmadienis · Trečiadienis · Penktadienis',
        groups: [
          { group: 'U9 su Kauno Atletu', time: '18:00' },
        ],
      },
    ],
  },
  {
    photo: '/photos/coach-ignas.jpg',
    name: 'Ignas Bytautas',
    role: 'Fizinio rengimo treneris',
    location: 'Panemunė · Vaidoto g. 11, Kaunas',
    bio: 'Profesionalus sportininkas ir fizinio rengimo treneris. Specializuojasi fizinio rengimo treniruotėse. Dirba su Pauliaus Smaryginso U11 elitine grupe, ugdydamas jėgą, greitį ir ištvermę.',
    schedule: [
      {
        days: 'Antradienis',
        groups: [
          { group: 'U11 Elite (2015/2016)', time: '17:00' },
        ],
      },
    ],
  },
];

function CoachCard({ coach, index }) {
  const isEven = index % 2 === 0;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(180px, 280px) 1fr',
      gap: 0,
      border: '2px solid var(--kc-black)',
      marginBottom: 24,
    }} className="coach-card">
      {/* Photo */}
      <div style={{
        background: 'var(--kc-black)',
        overflow: 'hidden',
        minHeight: 320,
        position: 'relative',
      }}>
        <img
          src={coach.photo}
          alt={coach.name}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: '50% 15%',
            display: 'block',
            filter: 'grayscale(1) contrast(1.05)',
            position: 'absolute', top: 0, left: 0,
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: 'clamp(24px,3vw,40px)', background: isEven ? 'var(--kc-bone)' : 'var(--kc-paper)' }}>
        <Eyebrow><LT>{coach.role}</LT></Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px,5vw,72px)',
          margin: '8px 0', lineHeight: .88,
          textTransform: 'uppercase',
        }}>{coach.name}</h2>
        <Rule width={80} weight={6} />

        <p style={{
          marginTop: 16, fontSize: 15, lineHeight: 1.6,
          color: 'var(--fg2)', maxWidth: 480,
        }}>{coach.bio}</p>

        {/* Location */}
        <div style={{
          marginTop: 16, display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--font-mono)', fontSize: 12,
          letterSpacing: '.08em', textTransform: 'uppercase',
          color: 'var(--fg3)',
        }}>
          <span>📍</span><LT>{coach.location}</LT>
        </div>

        {/* Schedule */}
        <div style={{ marginTop: 24 }}>
          <div style={{
            fontFamily: 'var(--font-headline)', fontWeight: 700,
            fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'var(--fg3)', marginBottom: 10,
          }}>Treniruočių tvarkaraštis</div>

          {coach.schedule.map((block, bi) => (
            <div key={bi} style={{
              background: block.special ? 'rgba(10,10,10,0.06)' : 'var(--kc-black)',
              color: block.special ? 'var(--fg2)' : 'var(--kc-bone)',
              padding: '14px 18px', marginBottom: 6,
              border: '2px solid var(--kc-black)',
            }}>
              <div style={{
                fontFamily: 'var(--font-headline)', fontWeight: 700,
                fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase',
                color: block.special ? 'var(--fg3)' : 'rgba(244,241,234,0.55)',
                marginBottom: 8,
              }}><LT>{block.days}</LT></div>
              {block.groups.map((g, gi) => (
                <div key={gi} style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'baseline', gap: 12,
                  paddingTop: gi > 0 ? 6 : 0,
                  borderTop: gi > 0 ? `1px solid ${block.special ? 'rgba(10,10,10,0.1)' : 'rgba(244,241,234,0.1)'}` : 'none',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-headline)', fontWeight: 700,
                    fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase',
                  }}><LT>{g.group}</LT></span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22, lineHeight: 1, flexShrink: 0,
                  }}>{g.time}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Treneriai() {
  return (
    <Section padded={false}>
      <div className="page-pad">
        <div className="academy-header">
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 8vw, 96px)',
            margin: 0, lineHeight: .95, textTransform: 'uppercase',
          }}>Treneriai</h1>
          <Eyebrow><LT>Kaunas City FA · Akademija</LT></Eyebrow>
        </div>
        <Rule width={120} weight={8} />

        <div style={{ marginTop: 40 }}>
          {coaches.map((coach, i) => (
            <CoachCard key={i} coach={coach} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .coach-card { grid-template-columns: 1fr !important; }
          .coach-card > div:first-child { min-height: 260px !important; position: relative !important; }
        }
      `}</style>
    </Section>
  );
}
