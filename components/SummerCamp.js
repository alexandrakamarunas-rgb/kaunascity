'use client';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Eyebrow, Rule, Section, Button } from './Bits';

const labelStyle = {
  fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 12,
  letterSpacing: '.18em', textTransform: 'uppercase',
  color: 'var(--fg3)', marginBottom: 8, display: 'block',
};

const fieldStyle = {
  width: '100%', padding: '14px 16px',
  fontFamily: 'var(--font-body)', fontSize: 15,
  background: 'var(--kc-paper)', color: 'var(--kc-black)',
  border: '2px solid var(--kc-black)', borderRadius: 0, outline: 'none',
};

const schedule = [
  {
    day: 'Pirmadienis',
    items: [
      { time: '8.00–9.00',   text: 'Vaikų pasitikimas (marškinėliai, susipažinimas)' },
      { time: '9.30–11.30',  text: 'Treniruotė (individualūs įgūdžiai, žaidimas)' },
      { time: '12.00–12.45', text: 'Pietūs' },
      { time: '13.00',       text: 'Vykstame į baseiną' },
      { time: '13.30–16.00', text: 'Baseinas' },
      { time: '16.30–17.00', text: 'Dienos aptarimas, parvykstame į stadioną' },
      { time: '17.00',       text: 'Vaikų pasiėmimas' },
    ],
  },
  {
    day: 'Antradienis',
    items: [
      { time: '8.00–9.00',   text: 'Vaikų pasitikimas, užkandis' },
      { time: '9.30–11.30',  text: 'Treniruotė' },
      { time: '12.00–12.45', text: 'Pietūs' },
      { time: '13.00',       text: 'Vykstame į stadioną' },
      { time: '13.30–15.30', text: 'Ekskursija po Dariaus ir Girėno stadioną' },
      { time: '16.30',       text: 'Laisvas laikas stadione' },
      { time: '17.00',       text: 'Vaikų pasiėmimas' },
    ],
  },
  {
    day: 'Trečiadienis',
    items: [
      { time: '8.00–9.00',   text: 'Vaikų pasitikimas' },
      { time: '9.30–11.30',  text: 'Treniruotė' },
      { time: '12.00–12.45', text: 'Pietūs' },
      { time: '13.00',       text: 'Vykstame į Sauna77' },
      { time: '13.30–14.00', text: 'Tempimo pratimų / jogos treniruotė' },
      { time: '14.20–16.00', text: 'Atsistatymas ir ledo vonios Sauna77' },
      { time: '16.30',       text: 'Grįžtame į stadioną, aptarimas dienos' },
      { time: '17.00',       text: 'Vaikų pasiėmimas' },
    ],
  },
  {
    day: 'Ketvirtadienis',
    items: [
      { time: '8.00–9.00',   text: 'Vaikų pasitikimas' },
      { time: '9.30–11.30',  text: 'Treniruotė' },
      { time: '12.00–12.45', text: 'Pietūs' },
      { time: '13.00',       text: 'Vykstame į baseiną' },
      { time: '13.00–16.30', text: 'Turnyras prieš kitos stovyklos komandas' },
      { time: '17.00',       text: 'Apdovanojimai turnyro nugalėtojams, vaikų pasiėmimas. Konkursai ir įgūdžių rungtys, prizai.' },
    ],
  },
  {
    day: 'Penktadienis',
    items: [
      { time: '8.00–9.00',   text: 'Vaikų pasitikimas' },
      { time: '9.00–9.30',   text: 'Maitinimas, užkandžiai dienos metu' },
      { time: '10.00–12.00', text: 'Filmas apie futbolą' },
      { time: '12.00–12.45', text: 'Pietūs' },
      { time: '13.00–16.30', text: 'Konkursai, turnyrai, geriausių žaidėjų rinkimai, apdovanojimai' },
      { time: '17.00',       text: 'Vaikų pasiėmimas, stovyklos uždarymas' },
    ],
  },
];

const faqs = [
  {
    q: 'Kiek kainuoja stovykla?',
    a: 'Vienos pamainos kaina – 240 €. Į kainą įskaičiuotos treniruotės, maitinimas, pramogos bei stovyklos marškinėliai kiekvienam dalyviui.',
  },
  {
    q: 'Ką pasiimti?',
    a: 'Rekomenduojame pasiimti futbolo batelius, sportines kelnes arba šortus, rankšluostį bei patogią aprangą laisvalaikiui. Pirmadienį būtinai pasiimkite viską, ko reikia baseinui.',
  },
  {
    q: 'Ar tai dienos stovykla?',
    a: 'Taip. Tai dienos stovykla, vykstanti kiekvieną dieną nuo 8 iki 17 valandos.',
  },
  {
    q: 'Kur vyks stovykla?',
    a: 'Stovyklos veikla vyks Lapių stadione, o įvairios pramogos – Kaune.',
  },
  {
    q: 'Ar matysiu, ką veikia mano vaikas stovyklos metu?',
    a: 'Taip. Kiekvieną dieną tėveliai gaus nuotraukų bei vaizdo medžiagos, kad galėtų matyti, kaip sekasi jų vaikams.',
  },
  {
    q: 'Kokio amžiaus vaikai priimami?',
    a: 'Į stovyklą kviečiame vaikus nuo 6 iki 14 metų.',
  },
  {
    q: 'Ar priimamos mergaitės?',
    a: 'Taip, labai laukiame ir mergaičių, norinčių žaisti futbolą. Nuo rugsėjo pradėsime ir mergaičių grupės veiklą, todėl mielai kviečiame prisijungti.',
  },
];

function CheckOption({ name, value, label, checked, onChange }) {
  return (
    <label style={{
      display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
      padding: '12px 16px',
      background: checked ? 'var(--kc-black)' : 'var(--kc-paper)',
      color: checked ? 'var(--kc-bone)' : 'var(--kc-black)',
      border: '2px solid var(--kc-black)',
      transition: 'all 120ms',
    }}>
      <input
        type="radio" name={name} value={value}
        checked={checked} onChange={onChange}
        style={{ display: 'none' }}
      />
      <span style={{
        width: 16, height: 16, border: '2px solid currentColor',
        borderRadius: 0, flexShrink: 0, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        {checked && <span style={{ width: 8, height: 8, background: 'currentColor', display: 'block' }} />}
      </span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.4 }}>{label}</span>
    </label>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--kc-black)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: '18px 0', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: 16, textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 15,
          letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--fg1)',
        }}>{q}</span>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1,
          color: 'var(--fg3)', flexShrink: 0,
        }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65,
          color: 'var(--fg2)', paddingBottom: 18, margin: 0,
        }}>{a}</p>
      )}
    </div>
  );
}

export default function SummerCamp() {
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [shift, setShift] = useState('');
  const [state, handleSubmit] = useForm('mrerwpjd');

  return (
    <Section padded={false}>
      <div className="page-pad">

        {/* HEADER */}
        <div className="academy-header">
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 7vw, 88px)',
            margin: 0, lineHeight: .92, textTransform: 'uppercase',
          }}>Kaunas City<br />Summer Camp</h1>
          <Eyebrow style={{ marginTop: 8 }}>Futbolo stovykla · Liepos mėn.</Eyebrow>
        </div>
        <Rule width={120} weight={8} />

        {/* INTRO */}
        <div style={{
          marginTop: 28, maxWidth: 720,
          fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 2vw, 19px)',
          lineHeight: 1.65, color: 'var(--fg1)',
        }}>
          <p style={{ margin: 0 }}>
            Kaunas City Summer Camp – tai savaitės trukmės futbolo dienos stovykla vaikams nuo 6 iki 14 metų. Profesionalūs treneriai, turnyrai, ekskursijos, baseinas ir įspūdingi prisiminimai visam gyvenimui.
          </p>
          <p style={{ marginTop: 16, fontWeight: 700 }}>
            Vyriausias treneris — Lukas Spalvis.
          </p>
          <p style={{ marginTop: 20 }}>
            Stovykla vyksta dviem pamainomis liepos mėnesį. Viena pamaina – 5 dienos, 240 €, į kainą įskaičiuotas maitinimas, pramogos ir stovyklos marškinėliai.
          </p>
        </div>

        {/* KEY FEATURES */}
        <div style={{ marginTop: 48 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 2,
          }}>
            {[
              {
                icon: '01',
                title: 'Dėmesys kiekvienam vaikui atskirai',
                body: 'Nedidelės grupės ir patyręs trenerių komandas leidžia skirti asmeninį dėmesį kiekvienam dalyviui – ne tik moko, bet ir pažįsta kiekvieną vaiką.',
              },
              {
                icon: '02',
                title: 'Vaiko profilis po stovyklos',
                body: 'Po stovyklos kiekvienas tėvelis gauna individualų trenerio parengtą profilį – kaip sekėsi, kas išskirtina, ką rekomenduojama ugdyti toliau.',
              },
              {
                icon: '03',
                title: 'Nuotraukos kiekvieną dieną',
                body: 'Kiekvieną dieną tėveliai gauna nuotraukų bei vaizdo medžiagos, kad galėtų matyti, kaip sekasi jų vaikams stovykloje.',
              },
              {
                icon: '04',
                title: 'Baseinas, ekskursijos, turnyrai',
                body: 'Programa sudaryta taip, kad vaikai ne tik treniruotųsi, bet ir linksmai leistų laiką.',
              },
            ].map((f, i) => (
              <div key={i} style={{
                background: i === 0 || i === 1 ? 'var(--kc-black)' : 'var(--kc-paper)',
                color: i === 0 || i === 1 ? 'var(--kc-bone)' : 'var(--fg1)',
                border: '2px solid var(--kc-black)',
                padding: 'clamp(24px, 3vw, 36px)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 40,
                  color: i === 0 || i === 1 ? 'rgba(244,241,234,0.2)' : 'rgba(10,10,10,0.12)',
                  lineHeight: 1, marginBottom: 16,
                }}>{f.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)', fontWeight: 700,
                  fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase',
                  margin: '0 0 12px',
                  color: i === 0 || i === 1 ? 'var(--kc-bone)' : 'var(--fg1)',
                }}>{f.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6,
                  color: i === 0 || i === 1 ? 'rgba(244,241,234,0.75)' : 'var(--fg2)',
                  margin: 0,
                }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DATES & LOCATIONS */}
        <div style={{ marginTop: 56 }}>
          <Eyebrow>Datos ir vietos</Eyebrow>
          <Rule width={80} weight={6} />
          <div className="two-col" style={{ marginTop: 24, maxWidth: 800 }}>
            {[
              { label: 'I pamaina', dates: 'Liepos 20 – liepos 24 d.', note: '5 dienos · 240 €' },
              { label: 'II pamaina', dates: 'Liepos 27 – liepos 31 d.', note: '5 dienos · 240 €' },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
                padding: '24px 28px',
              }}>
                <div style={{ ...labelStyle, marginBottom: 8 }}>{s.label}</div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  lineHeight: 1, textTransform: 'uppercase', marginBottom: 8,
                }}>{s.dates}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 13,
                  color: 'var(--fg3)', letterSpacing: '.06em',
                }}>{s.note}</div>
              </div>
            ))}
          </div>
          <div className="two-col" style={{ marginTop: 2, maxWidth: 800 }}>
            {[
              { label: 'Vieta A', name: 'Kauno kolegija', addr: 'Pramonės pr. 20, Kaunas' },
              { label: 'Vieta B', name: 'Lapių stadionas', addr: 'Merkio g. 3, Lapės' },
            ].map((l, i) => (
              <div key={i} style={{
                background: 'var(--kc-bone)', border: '2px solid var(--kc-black)',
                padding: '24px 28px',
              }}>
                <div style={{ ...labelStyle, marginBottom: 8 }}>{l.label}</div>
                <div style={{
                  fontFamily: 'var(--font-headline)', fontWeight: 700,
                  fontSize: 17, textTransform: 'uppercase', marginBottom: 6,
                }}>{l.name}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12,
                  color: 'var(--fg3)', letterSpacing: '.06em',
                }}>{l.addr}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SCHEDULE */}
        <div style={{ marginTop: 56 }}>
          <Eyebrow>Savaitės programa</Eyebrow>
          <Rule width={80} weight={6} />
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {schedule.map((day, di) => (
              <div key={di} style={{
                background: di % 2 === 0 ? 'var(--kc-paper)' : 'var(--kc-bone)',
                border: '2px solid var(--kc-black)',
              }}>
                <div style={{
                  padding: '14px 24px', borderBottom: '2px solid var(--kc-black)',
                  background: 'var(--kc-black)', color: 'var(--kc-bone)',
                  display: 'flex', alignItems: 'center', gap: 16,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: 28,
                    color: 'rgba(244,241,234,0.25)', lineHeight: 1,
                  }}>{String(di + 1).padStart(2, '0')}</span>
                  <span style={{
                    fontFamily: 'var(--font-headline)', fontWeight: 700,
                    fontSize: 14, letterSpacing: '.18em', textTransform: 'uppercase',
                  }}>{day.day}</span>
                </div>
                <div style={{ padding: '8px 0' }}>
                  {day.items.map((item, ii) => (
                    <div key={ii} style={{
                      display: 'grid', gridTemplateColumns: '140px 1fr',
                      gap: 16, padding: '10px 24px',
                      borderBottom: ii < day.items.length - 1 ? '1px solid rgba(10,10,10,0.08)' : 'none',
                      alignItems: 'baseline',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 12,
                        letterSpacing: '.06em', color: 'var(--fg3)',
                      }}>{item.time}</span>
                      <span style={{
                        fontFamily: 'var(--font-body)', fontSize: 15,
                        lineHeight: 1.5, color: 'var(--fg1)',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        letterSpacing: '.02em',
                      }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REGISTRATION FORM */}
        <div style={{ marginTop: 56 }}>
          <Eyebrow>Registracija</Eyebrow>
          <Rule width={80} weight={6} />

          {!state.succeeded ? (
            <form onSubmit={handleSubmit} style={{ marginTop: 24, maxWidth: 720 }}>
              <input type="hidden" name="Forma" value="Summer Camp" />
              <input type="hidden" name="Amžius" value={age} />
              <input type="hidden" name="Stovyklos vieta" value={location} />
              <input type="hidden" name="Pamaina" value={shift} />

              {/* Name */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Vaiko vardas ir pavardė</label>
                <input style={fieldStyle} name="Vaiko vardas ir pavardė" placeholder="Jonas Jonaitis" required />
              </div>

              {/* Age */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Amžius</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    { value: '6–8 metai', label: '6–8 metai' },
                    { value: '9–11 metų', label: '9–11 metų' },
                    { value: '11–14 metų', label: '11–14 metų' },
                  ].map(opt => (
                    <CheckOption
                      key={opt.value}
                      name="age_ui"
                      value={opt.value}
                      label={opt.label}
                      checked={age === opt.value}
                      onChange={() => setAge(opt.value)}
                    />
                  ))}
                </div>
              </div>

              {/* Location */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Stovyklos vieta</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    { value: 'Kauno kolegija (Pramonės pr. 20)', label: 'Kauno kolegija — Pramonės pr. 20, Kaunas' },
                    { value: 'Lapių stadionas (Merkio g. 3)', label: 'Lapių stadionas — Merkio g. 3, Lapės' },
                  ].map(opt => (
                    <CheckOption
                      key={opt.value}
                      name="location_ui"
                      value={opt.value}
                      label={opt.label}
                      checked={location === opt.value}
                      onChange={() => setLocation(opt.value)}
                    />
                  ))}
                </div>
              </div>

              {/* Shift */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Pamaina</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    { value: 'I pamaina: Liepos 20–24 d.', label: 'I pamaina — Liepos 20–24 d. (5 dienos)' },
                    { value: 'II pamaina: Liepos 27–31 d.', label: 'II pamaina — Liepos 27–31 d. (5 dienos)' },
                  ].map(opt => (
                    <CheckOption
                      key={opt.value}
                      name="shift_ui"
                      value={opt.value}
                      label={opt.label}
                      checked={shift === opt.value}
                      onChange={() => setShift(opt.value)}
                    />
                  ))}
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>El. paštas</label>
                <input style={fieldStyle} type="email" name="email" placeholder="tevai@example.lt" required />
                <ValidationError field="email" errors={state.errors} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#B00020', marginTop: 6, display: 'block' }} />
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 32 }}>
                <label style={labelStyle}>Telefono numeris</label>
                <input style={fieldStyle} type="tel" name="Telefono numeris" placeholder="+370 600 00000" required />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12,
                  letterSpacing: '.08em', color: 'var(--fg3)',
                }}>
                  Forma siunčiama į info@kaunascityfa.lt
                </div>
                <Button type="submit" size="lg" disabled={state.submitting}>
                  {state.submitting ? 'Siunčiama...' : 'Registruotis →'}
                </Button>
              </div>
              <ValidationError errors={state.errors} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#B00020', marginTop: 16, display: 'block' }} />
            </form>
          ) : (
            <div style={{
              marginTop: 24, background: 'var(--kc-black)',
              color: 'var(--kc-bone)', padding: 'clamp(28px, 5vw, 48px)',
              maxWidth: 720,
            }}>
              <Eyebrow inverse>Užregistruota</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 8vw, 80px)',
                margin: '16px 0', lineHeight: .95, textTransform: 'uppercase',
              }}>Lauksim!</h2>
              <Rule width={96} weight={8} inverse />
              <p style={{
                fontSize: 16, color: 'rgba(244,241,234,0.75)', marginTop: 20, lineHeight: 1.6,
              }}>
                Susisieksim dėl apmokėjimo ir papildomos informacijos.
              </p>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 56, marginBottom: 64 }}>
          <Eyebrow>D.U.K. — Dažniausiai užduodami klausimai</Eyebrow>
          <Rule width={80} weight={6} />
          <div style={{ marginTop: 24, maxWidth: 720 }}>
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
