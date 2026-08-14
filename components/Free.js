'use client';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Eyebrow, Rule, Button, Section, LT } from './Bits';

const fieldStyle = {
  width: '100%', padding: '14px 16px',
  fontFamily: 'var(--font-body)', fontSize: 15,
  background: 'var(--kc-paper)', color: 'var(--kc-black)',
  border: '2px solid var(--kc-black)', borderRadius: 0,
  outline: 'none',
};

const labelStyle = {
  fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 12,
  letterSpacing: '.18em', textTransform: 'uppercase',
  color: 'var(--fg3)', marginBottom: 8, display: 'block',
};

const errorStyle = {
  fontFamily: 'var(--font-mono)', fontSize: 11,
  letterSpacing: '.08em', color: '#B00020',
  marginTop: 6, display: 'block',
};

const AGE_GROUPS = ['U6', 'U8', 'U9', 'U11', 'U13'];

const STADIUMS = [
  { id: 'panemune', name: 'Panemunė', addr: 'Vaidoto g. 11, Kaunas' },
  { id: 'kolegija', name: 'Kauno kolegijos stadionas', addr: 'Pramonės pr. 20, Kaunas' },
  { id: 'lapiai',   name: 'Lapių mokyklos stadionas', addr: 'Merkio g. 3, Lapės' },
];

const perks = [
  { icon: '⚽', text: 'Profesionalūs treneriai' },
  { icon: '🏆', text: 'Turnyrai' },
  { icon: '📋', text: 'Individualus dėmesys' },
  { icon: '🤝', text: 'Draugiška atmosfera' },
];

export default function Free() {
  const [age, setAge] = useState('U8');
  const [stadium, setStadium] = useState('lapiai');
  const [state, handleSubmit] = useForm('mrerwpjd');

  return (
    <>
      {/* Hero */}
      <Section dark style={{ textAlign: 'center', paddingTop: 'clamp(60px,10vw,120px)', paddingBottom: 'clamp(48px,8vw,96px)' }}>
        <Eyebrow inverse><LT>Kaunas City FA · Specialus pasiūlymas</LT></Eyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(64px, 14vw, 160px)',
          margin: '20px 0 0', lineHeight: .88, textTransform: 'uppercase',
          color: 'var(--kc-bone)',
        }}>Sveiki&shy;name!</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24, marginBottom: 32 }}>
          <Rule width={120} weight={8} inverse />
        </div>
        <p style={{
          fontFamily: 'var(--font-headline)', fontWeight: 700,
          fontSize: 'clamp(18px, 3.5vw, 26px)', letterSpacing: '.06em',
          textTransform: 'uppercase', color: '#FFD600',
          maxWidth: 640, margin: '0 auto 16px',
        }}>
          <LT>Jūs gavote nemokamą mėnesį treniruočių</LT>
        </p>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 17,
          color: 'var(--fg-muted-inverse)', maxWidth: 520,
          margin: '0 auto', lineHeight: 1.6,
        }}>
          <LT>Užpildykite formą žemiau ir mes su jumis susisieksime per 2 darbo dienas, kad suderintume pirmą treniruotę.</LT>
        </p>
      </Section>

      {/* Perks */}
      <Section style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 16, maxWidth: 860, margin: '0 auto',
        }}>
          {perks.map((p, i) => (
            <div key={i} style={{
              background: 'var(--kc-paper)',
              border: '2px solid var(--kc-black)',
              boxShadow: 'var(--shadow-hard)',
              padding: '20px 24px',
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <span style={{ fontSize: 28 }}>{p.icon}</span>
              <span style={{
                fontFamily: 'var(--font-headline)', fontWeight: 700,
                fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase',
              }}><LT>{p.text}</LT></span>
            </div>
          ))}
        </div>
      </Section>

      {/* Form */}
      <Section dark style={{ paddingTop: 'clamp(40px,7vw,80px)', paddingBottom: 'clamp(60px,10vw,120px)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <Eyebrow inverse><LT>Registracija</LT></Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 7vw, 72px)',
            color: 'var(--kc-bone)', margin: '12px 0 0',
            lineHeight: .92, textTransform: 'uppercase',
          }}><LT>Užsiregistruokite</LT></h2>
          <Rule width={80} weight={6} inverse />

          {!state.succeeded && (
            <form onSubmit={handleSubmit} style={{ marginTop: 36 }}>
              <input type="hidden" name="Šaltinis" value="Nemokamas mėnuo (flyer)" />
              <input type="hidden" name="Amžiaus grupė" value={age} />
              <input type="hidden" name="Stadionas" value={STADIUMS.find(s => s.id === stadium)?.name} />

              {/* Age groups */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ ...labelStyle, color: 'var(--fg-muted-inverse)' }}><LT>Amžiaus grupė</LT></label>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {AGE_GROUPS.map(g => (
                    <label key={g} style={{
                      background: age === g ? 'var(--kc-bone)' : 'transparent',
                      color:      age === g ? 'var(--kc-black)' : 'var(--kc-bone)',
                      border: `2px solid ${age === g ? 'var(--kc-bone)' : 'rgba(244,241,234,0.3)'}`,
                      padding: '14px 22px', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 120ms var(--ease-snap)',
                      minWidth: 72,
                    }}>
                      <input
                        type="radio" name="_age_ui" value={g}
                        checked={age === g} onChange={() => setAge(g)}
                        style={{ display: 'none' }}
                      />
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(28px, 4vw, 40px)',
                        lineHeight: 1, textTransform: 'uppercase',
                      }}>{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stadium */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ ...labelStyle, color: 'var(--fg-muted-inverse)' }}><LT>Treniruočių vieta</LT></label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
                  {STADIUMS.map(s => (
                    <label key={s.id} style={{
                      background: stadium === s.id ? 'var(--kc-bone)' : 'transparent',
                      color:      stadium === s.id ? 'var(--kc-black)' : 'var(--kc-bone)',
                      border: `2px solid ${stadium === s.id ? 'var(--kc-bone)' : 'rgba(244,241,234,0.3)'}`,
                      padding: '16px 18px', cursor: 'pointer',
                      transition: 'all 120ms var(--ease-snap)',
                    }}>
                      <input
                        type="radio" name="_stadium_ui" value={s.id}
                        checked={stadium === s.id} onChange={() => setStadium(s.id)}
                        style={{ display: 'none' }}
                      />
                      <div style={{
                        fontFamily: 'var(--font-headline)', fontWeight: 700,
                        fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase',
                        marginBottom: 6,
                      }}><LT>{s.name}</LT></div>
                      <div style={{
                        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.06em',
                        opacity: 0.6,
                      }}>{s.addr}</div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ ...labelStyle, color: 'var(--fg-muted-inverse)' }}>Vaiko vardas</label>
                  <input style={fieldStyle} name="Vaiko vardas" placeholder="Jonas" required />
                  <ValidationError field="Vaiko vardas" errors={state.errors} style={errorStyle} />
                </div>
                <div>
                  <label style={{ ...labelStyle, color: 'var(--fg-muted-inverse)' }}><LT>Tėvų vardas</LT></label>
                  <input style={fieldStyle} name="Tėvų vardas" placeholder="Tomas" required />
                  <ValidationError field="Tėvų vardas" errors={state.errors} style={errorStyle} />
                </div>
                <div>
                  <label style={{ ...labelStyle, color: 'var(--fg-muted-inverse)' }}>Telefonas</label>
                  <input style={fieldStyle} type="tel" name="Telefonas" placeholder="+370 600 00000" required />
                  <ValidationError field="Telefonas" errors={state.errors} style={errorStyle} />
                </div>
                <div>
                  <label style={{ ...labelStyle, color: 'var(--fg-muted-inverse)' }}><LT>El. paštas</LT></label>
                  <input style={fieldStyle} type="email" name="email" placeholder="tevai@example.lt" required />
                  <ValidationError field="email" errors={state.errors} style={errorStyle} />
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ ...labelStyle, color: 'var(--fg-muted-inverse)' }}>Pastabos</label>
                <textarea
                  style={{ ...fieldStyle, minHeight: 90, resize: 'vertical' }}
                  name="Pastabos"
                  placeholder="Vaiko amžius, patogus laikas, klausimai..."
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '.08em', color: 'var(--fg-muted-inverse)',
                }}>
                  <LT>Forma siunčiama į info@kaunascityfa.lt</LT>
                </div>
                <Button type="submit" variant="inverse" disabled={state.submitting}>
                  {state.submitting ? <LT>Siunčiama...</LT> : <LT>Gauti nemokamą mėnesį</LT>}
                </Button>
              </div>

              <ValidationError errors={state.errors} style={{ ...errorStyle, marginTop: 12 }} />
            </form>
          )}

          {state.succeeded && (
            <div style={{
              marginTop: 40, background: 'var(--kc-bone)',
              color: 'var(--kc-black)', padding: 'clamp(28px, 5vw, 56px)', textAlign: 'center',
            }}>
              <Eyebrow><LT>Registracija gauta</LT></Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(52px, 10vw, 96px)',
                margin: '16px 0', lineHeight: .92, textTransform: 'uppercase',
              }}><LT>Lauksim!</LT></h2>
              <Rule width={100} weight={8} />
              <p style={{
                fontSize: 16, color: 'var(--fg3)', marginTop: 20,
                maxWidth: 440, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6,
              }}>
                <LT>Susisieksim per 2 darbo dienas ir suderintume pirmą nemokamą treniruotę.</LT>
              </p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
