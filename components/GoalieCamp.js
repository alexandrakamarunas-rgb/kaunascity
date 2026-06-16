import { Eyebrow, Rule, Section } from './Bits';

const labelStyle = {
  fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 11,
  letterSpacing: '.2em', textTransform: 'uppercase',
  color: 'var(--fg3)', marginBottom: 6, display: 'block',
};

const infoItems = [
  {
    label: 'Amžius ir datos',
    value: '13–17 liepos: 14–18 metų (2008–2012 g.m.)',
    value2: '6–10 liepos: 8–13 metų (2013–2018 g.m.)',
  },
  { label: 'Dalyvių skaičius', value: 'Iki 15 vartininkų vienoje stovykloje' },
  { label: 'Vieta', value: 'LFF treniruočių centras, Aukštaičių g. 51, Kaunas' },
  { label: 'Apgyvendinimas', value: 'Su pilnomis maitinimo paslaugomis LFF treniruočių centre' },
  { label: 'Treniruočių sesijų', value: '11 sesijų LFF treniruočių centre' },
  { label: 'Stovyklos kaina', value: '350 €' },
];

export default function GoalieCamp() {
  return (
    <Section padded={false}>
      <div className="page-pad">

        {/* HEADER */}
        <div style={{ marginBottom: 8 }}>
          <Eyebrow>Liepos 13–17 d. · Kaunas</Eyebrow>
        </div>
        <h1 style={{
          fontFamily: 'var(--font-headline)', fontWeight: 700,
          fontSize: 'clamp(28px, 5vw, 60px)',
          margin: 0, lineHeight: 1.05, textTransform: 'uppercase',
          letterSpacing: '.04em',
        }}>
          Jaunųjų vartininkų<br />stovykla Kaune
        </h1>
        <Rule width={120} weight={8} />

        {/* INTRO PHOTO */}
        <div style={{ marginTop: 28, border: '2px solid var(--kc-black)', overflow: 'hidden' }}>
          <img
            src="/photos/goaliecamp-coach.jpg"
            alt="Vartininkų stovykla"
            style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: 420 }}
          />
        </div>

        {/* INFO GRID */}
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {infoItems.map((item, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1.5fr',
              gap: 16, padding: '16px 20px',
              background: i % 2 === 0 ? 'var(--kc-paper)' : 'var(--kc-bone)',
              border: '2px solid var(--kc-black)',
              alignItems: 'start',
            }}>
              <div style={{ ...labelStyle, marginBottom: 0 }}>{item.label}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, color: 'var(--fg1)' }}>
                  {item.value}
                </div>
                {item.value2 && (
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, color: 'var(--fg1)', marginTop: 4 }}>
                    {item.value2}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* EXTRAS */}
        <div style={{ marginTop: 40 }}>
          <Eyebrow>Papildomos paslaugos</Eyebrow>
          <Rule width={80} weight={6} />
          <div className="two-col" style={{ marginTop: 20 }}>
            {[
              { icon: '🏊', label: 'Pramogos', text: 'Baseinas, įvairūs žaidimai' },
              { icon: '🎁', label: 'Dovanos', text: 'Hummel apranga, įvairūs prizai' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--kc-black)', color: 'var(--kc-bone)',
                border: '2px solid var(--kc-black)', padding: '24px 28px',
              }}>
                <div style={{ ...labelStyle, color: 'rgba(244,241,234,0.45)', marginBottom: 8 }}>{item.label}</div>
                <div style={{
                  fontFamily: 'var(--font-headline)', fontWeight: 700,
                  fontSize: 'clamp(15px, 2vw, 18px)', textTransform: 'uppercase',
                  letterSpacing: '.04em',
                }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* COACH */}
        <div style={{ marginTop: 40 }}>
          <Eyebrow>Treneris</Eyebrow>
          <Rule width={80} weight={6} />
          <div style={{
            marginTop: 20, background: 'var(--kc-paper)',
            border: '2px solid var(--kc-black)',
            display: 'grid', gridTemplateColumns: 'minmax(140px, 220px) 1fr',
          }}>
            <div style={{ overflow: 'hidden', borderRight: '2px solid var(--kc-black)' }}>
              <img
                src="/photos/goaliecamp-algirdas.jpg"
                alt="Algirdas Surgautas"
                style={{
                  width: '100%', height: '100%', minHeight: 180,
                  objectFit: 'cover', objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
            <div style={{ padding: 'clamp(20px, 3vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)', fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 36px)',
              margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '.04em',
            }}>Algirdas Surgautas</h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg2)',
              lineHeight: 1.6, margin: 0,
            }}>
              Buvęs Lietuvos Nacionalinės rinktinės ir U21 rinktinės vartininkų treneris.
            </p>
            <div style={{
              marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--fg3)', letterSpacing: '.06em',
            }}>Surgautas.a@gmail.com</div>
            </div>
          </div>
        </div>

        {/* PATRON */}
        <div style={{ marginTop: 40 }}>
          <Eyebrow>Stovyklos globėjas</Eyebrow>
          <Rule width={80} weight={6} />
          <div style={{
            marginTop: 20,
            background: 'var(--kc-black)', color: 'var(--kc-bone)',
            border: '2px solid var(--kc-black)',
            display: 'grid', gridTemplateColumns: 'minmax(140px, 220px) 1fr',
          }}>
            <div style={{ overflow: 'hidden', borderRight: '2px solid var(--kc-bone)' }}>
              <img
                src="/photos/goaliecamp-patron.jpg"
                alt="Ernestas Šetkus"
                style={{
                  width: '100%', height: '100%', minHeight: 180,
                  objectFit: 'cover', objectPosition: 'center top',
                  filter: 'grayscale(1) contrast(1.05)',
                  display: 'block',
                }}
              />
            </div>
            <div style={{ padding: 'clamp(20px, 3vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ ...labelStyle, color: 'rgba(244,241,234,0.45)' }}>Globėjas</div>
              <h2 style={{
                fontFamily: 'var(--font-headline)', fontWeight: 700,
                fontSize: 'clamp(22px, 3vw, 36px)',
                margin: '8px 0 12px', textTransform: 'uppercase', letterSpacing: '.04em',
              }}>Ernestas Šetkus</h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 14,
                color: 'rgba(244,241,234,0.7)', lineHeight: 1.6, margin: 0,
              }}>
                Legendinis Lietuvos vartininkas, ilgametis rinktinės kapitonas.
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div style={{ marginTop: 40, marginBottom: 64 }}>
          <div style={{
            background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
            padding: 'clamp(24px, 4vw, 40px)',
          }}>
            <Eyebrow>Registracija ir informacija</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 5vw, 56px)',
              margin: '12px 0', lineHeight: .95, textTransform: 'uppercase',
            }}>Susisiek</h2>
            <Rule width={80} weight={6} />
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="tel:+37061836106" style={{
                fontFamily: 'var(--font-mono)', fontSize: 'clamp(14px, 2vw, 18px)',
                color: 'var(--fg1)', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span style={{ ...labelStyle, marginBottom: 0 }}>Tel</span>
                +370 618 36 106
              </a>
              <a href="mailto:Surgautas.a@gmail.com" style={{
                fontFamily: 'var(--font-mono)', fontSize: 'clamp(13px, 1.8vw, 16px)',
                color: 'var(--fg1)', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span style={{ ...labelStyle, marginBottom: 0 }}>El. p.</span>
                Surgautas.a@gmail.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
