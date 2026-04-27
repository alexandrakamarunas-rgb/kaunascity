import React from 'react';
import { Eyebrow, Rule, Section, Photo, LT } from './Bits';

const groups = [
  {
    ageLines: ['5–8'],
    name: 'Pradžia',
    schedule: [
      ['Antr', '16:00–17:00'],
      ['Ketv', '16:00–17:00'],
      ['Penkt', '16:30–17:30'],
    ],
    focus: 'Pirmieji prisilietimai prie kamuolio, koordinacija ir žaidimas su draugais. Smagu, saugu, kasmet šiek tiek rimčiau.',
  },
  {
    ageLines: ['9–', '12'],
    name: 'Komanda',
    schedule: [
      ['Antr', '17:00–18:00'],
      ['Ketv', '17:00–18:00'],
      ['Penkt', '17:30–18:30'],
    ],
    focus: 'Technika, taktika ir pozicijos. Žaidimas mažomis komandomis kiekvieną treniruotę — kad augtų ir įgūdžiai, ir pasitikėjimas.',
  },
];

export default function Academy() {
  return (
    <Section padded={false}>
      <div style={{ padding: '64px 48px' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline',
          justifyContent: 'space-between', marginBottom: 20,
        }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(64px, 7vw, 96px)',
            margin: 0, lineHeight: .95, textTransform: 'uppercase',
          }}>Akademija</h1>
          <Eyebrow><LT>2 grupės · 5–12 metų · Lapių stadionas</LT></Eyebrow>
        </div>
        <Rule width={120} weight={8} />

        <div style={{ marginTop: 32 }}>
          <Photo
            src="/photos/kaunas-city-cup-team.jpeg"
            alt="Akademijos vaikai Kaunas City Cup turnyre"
            ratio="21 / 9"
            style={{ width: '100%' }}
            objectPosition="50% 35%"
            caption="Kaunas City Cup · akademija"
          />
        </div>

        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {groups.map(g => (
            <div key={g.name} style={{
              background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
              padding: 28, display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 88, lineHeight: .9,
                letterSpacing: '-.02em', color: 'var(--kc-black)',
                minHeight: 158,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
              }}>
                {g.ageLines.map((line, i) => <div key={i}>{line}</div>)}
              </div>
              <div>
                <Eyebrow>{g.name}</Eyebrow>
                <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 14px' }}>
                  {g.schedule.map(([day, time]) => (
                    <React.Fragment key={day}>
                      <span style={{
                        fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 12,
                        letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--fg3)',
                      }}>{day}</span>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 13,
                        letterSpacing: '.04em', color: 'var(--fg1)',
                      }}>{time}</span>
                    </React.Fragment>
                  ))}
                </div>
                <p style={{ marginTop: 14, fontSize: 15, color: 'var(--fg2)', lineHeight: 1.5 }}>{g.focus}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 48, padding: 32,
          background: 'var(--kc-black)', color: 'var(--kc-bone)',
        }}>
          <Eyebrow inverse>Kaina</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 16 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1 }}>
                €60<span style={{ fontSize: 24, opacity: .6 }}>/mėn</span>
              </div>
              <div style={{
                marginTop: 6, fontFamily: 'var(--font-headline)', fontWeight: 600,
                fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase',
                color: 'var(--fg-muted-inverse)',
              }}><LT>Mėnesinis mokestis</LT></div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1 }}>€0</div>
              <div style={{
                marginTop: 6, fontFamily: 'var(--font-headline)', fontWeight: 600,
                fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase',
                color: 'var(--fg-muted-inverse)',
              }}>Pirma treniruotė</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1 }}>3×</div>
              <div style={{
                marginTop: 6, fontFamily: 'var(--font-headline)', fontWeight: 600,
                fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase',
                color: 'var(--fg-muted-inverse)',
              }}>Treniruotės per savaitę</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
