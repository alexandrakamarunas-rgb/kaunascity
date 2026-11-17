'use client';
import { useForm, ValidationError } from '@formspree/react';
import { Eyebrow, Rule, Button, Section, Photo, LT } from './Bits';

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
  color: 'var(--fg-muted-inverse)', marginBottom: 8, display: 'block',
};

const errorStyle = {
  fontFamily: 'var(--font-mono)', fontSize: 11,
  letterSpacing: '.08em', color: '#B00020',
  marginTop: 6, display: 'block',
};

const perks = [
  { icon: '🎁', text: 'Nemokama programa' },
  { icon: '👧', text: '5–8 metų mergaitėms' },
  { icon: '🗓️', text: 'Penktadieniais 15:00' },
  { icon: '📍', text: 'Lapių mokyklos sporto salė' },
];

export default function Playmakers() {
  const [state, handleSubmit] = useForm('mrerwpjd');

  return (
    <>
      {/* Hero */}
      <Section dark style={{ textAlign: 'center', paddingTop: 'clamp(60px,10vw,120px)', paddingBottom: 'clamp(40px,6vw,72px)' }}>
        <Eyebrow inverse><LT>UEFA Playmakers · Inspired by Disney</LT></Eyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 11vw, 128px)',
          margin: '20px 0 0', lineHeight: .9, textTransform: 'uppercase',
          color: 'var(--kc-bone)',
        }}>Play&shy;makers</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24, marginBottom: 28 }}>
          <Rule width={120} weight={8} inverse />
        </div>
        <p style={{
          fontFamily: 'var(--font-headline)', fontWeight: 700,
          fontSize: 'clamp(17px, 3vw, 23px)', letterSpacing: '.03em',
          textTransform: 'uppercase', color: '#FFD600',
          maxWidth: 680, margin: '0 auto 16px', lineHeight: 1.3,
        }}>
          <LT>Išmok žaisti futbolą kartu su Disney ir Pixar pasakų herojais!</LT>
        </p>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 16,
          color: 'var(--fg-muted-inverse)', maxWidth: 480,
          margin: '0 auto', lineHeight: 1.6,
        }}>
          <LT>Nauja nemokama programa 5–8 metų mergaitėms skatinti aktyvumą ir išmokti žaisti futbolą.</LT>
        </p>
      </Section>

      {/* Poster */}
      <Section style={{ paddingTop: 'clamp(36px,6vw,64px)', paddingBottom: 0 }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <Photo
            src="/photos/playmakers-poster.jpg"
            alt="UEFA Playmakers, Inspired by Disney — registracijos plakatas"
            ratio="1400 / 1986"
            treatment="none"
            style={{ width: '100%' }}
          />
        </div>
      </Section>

      {/* Perks */}
      <Section style={{ paddingTop: 36, paddingBottom: 48 }}>
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
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <Eyebrow inverse><LT>Registracija</LT></Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 7vw, 72px)',
            color: 'var(--kc-bone)', margin: '12px 0 0',
            lineHeight: .92, textTransform: 'uppercase',
          }}><LT>Užsiregistruokite</LT></h2>
          <Rule width={80} weight={6} inverse />

          {!state.succeeded && (
            <form onSubmit={handleSubmit} style={{ marginTop: 32 }}>
              <input type="hidden" name="Šaltinis" value="UEFA Playmakers (Disney)" />
              <input type="hidden" name="Treniruočių vieta" value="Lapių mokyklos sporto salė, penktadieniais 15:00" />

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Vaiko vardas</label>
                <input style={fieldStyle} name="Vaiko vardas" placeholder="Emilija" required />
                <ValidationError field="Vaiko vardas" errors={state.errors} style={errorStyle} />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Vaiko amžius</label>
                <input style={fieldStyle} type="number" min={5} max={8} name="Vaiko amžius" placeholder="6" required />
                <ValidationError field="Vaiko amžius" errors={state.errors} style={errorStyle} />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}><LT>Tėvų telefonas</LT></label>
                <input style={fieldStyle} type="tel" name="Tėvų telefonas" placeholder="+370 600 00000" required />
                <ValidationError field="Tėvų telefonas" errors={state.errors} style={errorStyle} />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}><LT>Tėvų el. paštas</LT></label>
                <input style={fieldStyle} type="email" name="Tėvų el. paštas" placeholder="tevai@example.lt" required />
                <ValidationError field="Tėvų el. paštas" errors={state.errors} style={errorStyle} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '.08em', color: 'var(--fg-muted-inverse)',
                }}>
                  <LT>Forma siunčiama į info@kaunascityfa.lt</LT>
                </div>
                <Button type="submit" variant="inverse" disabled={state.submitting}>
                  {state.submitting ? <LT>Siunčiama...</LT> : <LT>Registruotis</LT>}
                </Button>
              </div>

              <ValidationError errors={state.errors} style={{ ...errorStyle, marginTop: 12 }} />
            </form>
          )}

          {state.succeeded && (
            <div style={{
              marginTop: 32, background: 'var(--kc-bone)',
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
                <LT>Susisieksim per 2 darbo dienas ir suderintume pirmą treniruotę Lapių mokyklos sporto salėje.</LT>
              </p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
