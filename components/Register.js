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

export default function Register() {
  const [age, setAge] = useState('5-8');
  const [state, handleSubmit] = useForm('mrerwpjd');

  return (
    <Section>
      <div style={{
        display: 'flex', alignItems: 'baseline',
        justifyContent: 'space-between', marginBottom: 20,
        flexWrap: 'wrap', gap: 10,
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(52px, 8vw, 96px)',
          margin: 0, lineHeight: .95, textTransform: 'uppercase',
        }}>Registracija</h1>
        <Eyebrow><LT>Pirma treniruotė nemokama</LT></Eyebrow>
      </div>
      <Rule width={120} weight={8} />

      {!state.succeeded && (
        <form onSubmit={handleSubmit} className="form-grid" style={{ marginTop: 28 }}>
          <input type="hidden" name="Amžiaus grupė" value={age === '5-8' ? '5–8 (Pradžia)' : '9–12 (Komanda)'} />

          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelStyle}><LT>Amžiaus grupė</LT></label>
            <div className="age-cards">
              {[
                { id: '5-8',  age: '5–8',  name: 'Pradžia' },
                { id: '9-12', age: '9–12', name: 'Komanda' },
              ].map(g => (
                <label key={g.id} style={{
                  background: age === g.id ? 'var(--kc-black)' : 'var(--kc-paper)',
                  color:      age === g.id ? 'var(--kc-bone)'  : 'var(--kc-black)',
                  border: '2px solid var(--kc-black)', padding: '18px 20px', cursor: 'pointer',
                  display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12,
                  boxShadow: age === g.id ? 'none' : 'var(--shadow-hard)',
                  transform: age === g.id ? 'translate(2px,2px)' : 'none',
                  transition: 'all 120ms var(--ease-snap)',
                }}>
                  <input
                    type="radio" name="_age_ui" value={g.id}
                    checked={age === g.id} onChange={() => setAge(g.id)}
                    style={{ display: 'none' }}
                  />
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(36px, 6vw, 56px)',
                    lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-.02em',
                  }}>{g.age}</span>
                  <span style={{
                    fontFamily: 'var(--font-headline)', fontWeight: 700,
                    fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase',
                  }}><LT>{g.name}</LT></span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Vaiko vardas</label>
            <input style={fieldStyle} name="Vaiko vardas" placeholder="Jonas" required />
            <ValidationError field="Vaiko vardas" errors={state.errors} style={errorStyle} />
          </div>
          <div>
            <label style={labelStyle}><LT>Tėvų vardas</LT></label>
            <input style={fieldStyle} name="Tėvų vardas" placeholder="Tomas" required />
            <ValidationError field="Tėvų vardas" errors={state.errors} style={errorStyle} />
          </div>
          <div>
            <label style={labelStyle}>Telefonas</label>
            <input style={fieldStyle} type="tel" name="Telefonas" placeholder="+370 600 00000" required />
            <ValidationError field="Telefonas" errors={state.errors} style={errorStyle} />
          </div>
          <div>
            <label style={labelStyle}><LT>El. paštas</LT></label>
            <input style={fieldStyle} type="email" name="email" placeholder="tevai@example.lt" required />
            <ValidationError field="email" errors={state.errors} style={errorStyle} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelStyle}>Pastabos</label>
            <textarea
              style={{ ...fieldStyle, minHeight: 100, resize: 'vertical' }}
              name="Pastabos"
              placeholder="Vaiko amžius, patogiausias laikas, klausimai..."
            />
          </div>

          <div style={{
            gridColumn: '1 / -1',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginTop: 8, gap: 16, flexWrap: 'wrap',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: '.08em', color: 'var(--fg3)',
            }}>
              <LT>Forma siunčiama į info@kaunascityfa.lt</LT>
            </div>
            <Button type="submit" disabled={state.submitting}>
              {state.submitting ? 'Siunčiama...' : 'Siųsti'}
            </Button>
          </div>

          <ValidationError errors={state.errors} style={{ ...errorStyle, gridColumn: '1 / -1' }} />
        </form>
      )}

      {state.succeeded && (
        <div style={{
          marginTop: 32, background: 'var(--kc-black)',
          color: 'var(--kc-bone)', padding: 'clamp(28px, 5vw, 48px)', textAlign: 'center',
        }}>
          <Eyebrow inverse><LT>Užregistruota</LT></Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(56px, 10vw, 96px)',
            margin: '16px 0', lineHeight: .95, textTransform: 'uppercase',
          }}>Lauksim.</h2>
          <Rule width={120} weight={8} inverse />
          <p style={{
            fontSize: 17, color: 'var(--fg-muted-inverse)', marginTop: 20,
            maxWidth: 520, marginLeft: 'auto', marginRight: 'auto',
          }}>
            <LT>Susisieksim per 2 darbo dienas dėl pirmos treniruotės Lapių stadione.</LT>
          </p>
        </div>
      )}
    </Section>
  );
}
