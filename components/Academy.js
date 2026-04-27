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
    ageLines: ['9–12'],
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
      <div className="page-pad">
        <div className="academy-header">
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 8vw, 96px)',
            margin: 0, lineHeight: .95, textTransform: 'uppercase',
          }}>Akademija</h1>
          <Eyebrow><LT>2 grupės · 5–12 metų · Lapių stadionas</LT></Eyebrow>
        </div>
        <Rule width={120} weight={8} />

        <div style={{ marginTop: 28 }}>
          <Photo
            src="/photos/kaunas-city-cup-team.jpeg"
            alt="Akademijos vaikai Kaunas City Cup turnyre"
            ratio="21 / 9"
            style={{ width: '100%' }}
            objectPosition="50% 35%"
            caption="vaikų komanda"
          />
        </div>

        <div className="two-col" style={{ marginTop: 28 }}>
          {groups.map(g => (
            <div key={g.name} style={{
              background: 'var(--kc-paper)', border: '2px solid var(--kc-black)', padding: 24,
            }}>
              <div className="group-card-inner">
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(64px, 8vw, 88px)',
                  lineHeight: .9, letterSpacing: '-.02em', color: 'var(--kc-black)',
                  minHeight: 120,
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
                }}>
                  {g.ageLines.map((line, i) => <div key={i}>{line}</div>)}
                </div>
                <div>
                  <Eyebrow>{g.name}</Eyebrow>
                  <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 12px' }}>
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
                  <p style={{ marginTop: 12, fontSize: 14, color: 'var(--fg2)', lineHeight: 1.5 }}>{g.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 40, padding: '28px 28px',
          background: 'var(--kc-black)', color: 'var(--kc-bone)',
        }}>
          <Eyebrow inverse>Kaina</Eyebrow>
          <div className="pricing-grid">
            {[
              { val: '€60', unit: '/mėn', label: <LT>Mėnesinis mokestis</LT> },
              { val: '€0',  unit: '',     label: 'Pirma treniruotė' },
              { val: '3×',  unit: '',     label: 'Treniruotės per savaitę' },
            ].map(({ val, unit, label }) => (
              <div key={val}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1 }}>
                  {val}<span style={{ fontSize: '0.38em', opacity: .6 }}>{unit}</span>
                </div>
                <div style={{
                  marginTop: 6, fontFamily: 'var(--font-headline)', fontWeight: 600,
                  fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase',
                  color: 'var(--fg-muted-inverse)',
                }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
