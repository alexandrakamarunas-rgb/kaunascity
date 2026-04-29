'use client';
import Link from 'next/link';
import { Eyebrow, Rule, Section, Button, Photo } from './Bits';
import elitePartnerLogos from './elitePartnerLogos';

const elitePartnerNames = ['FBall Agency', '7Kick', 'Kaunas City Cup', 'Kaunas City Cup'];

const labelStyle = {
  fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 12,
  letterSpacing: '.18em', textTransform: 'uppercase',
  color: 'var(--fg3)', marginBottom: 8, display: 'block',
};

function SectionBlock({ eyebrow, children }) {
  return (
    <div style={{ marginTop: 56 }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Rule width={80} weight={6} />
      <div style={{ marginTop: 24 }}>{children}</div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
      {items.map((item, i) => (
        <li key={i} style={{
          display: 'flex', gap: 16, alignItems: 'flex-start',
          padding: '10px 0', borderBottom: '1px solid var(--kc-black)',
          fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6,
          color: 'var(--fg1)',
        }}>
          <span style={{
            fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 10,
            letterSpacing: '.2em', textTransform: 'uppercase',
            color: 'var(--fg3)', paddingTop: 5, flexShrink: 0,
          }}>—</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function PersonCard({ name, title, subtitle, photo, alt }) {
  return (
    <div style={{
      background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ background: '#e8e5df', borderBottom: '2px solid var(--kc-black)', aspectRatio: '4 / 3', overflow: 'hidden' }}>
        <img
          src={photo}
          alt={alt || name}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: 'grayscale(1) contrast(1.05) brightness(0.98)',
            display: 'block',
          }}
        />
      </div>
      <div style={{ padding: '20px 20px 24px', flex: 1 }}>
        <div style={{ ...labelStyle, marginBottom: 4 }}>{title}</div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)',
          margin: '8px 0 10px', lineHeight: 1, textTransform: 'uppercase',
        }}>{name}</h3>
        {subtitle && (
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg2)',
            lineHeight: 1.6, margin: 0,
          }}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default function Elite() {
  return (
    <Section padded={false}>
      <div className="page-pad">

        {/* HEADER */}
        <div className="academy-header" style={{ paddingTop: 'clamp(24px, 4vw, 40px)' }}>
          <img
            src="/photos/elite-header-logo.png"
            alt="Kaunas City Elite"
            style={{
              width: 'clamp(240px, 40vw, 480px)',
              height: 'auto', display: 'block',
            }}
          />
          <Eyebrow style={{ marginTop: 12 }}>Elitinio lygio futbolo projektas</Eyebrow>
        </div>
        <Rule width={120} weight={8} />

        {/* INTRO */}
        <div style={{
          marginTop: 28, maxWidth: 720,
          fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 2vw, 19px)',
          lineHeight: 1.65, color: 'var(--fg1)',
        }}>
          <p style={{ margin: 0 }}>
            „Kaunas City Elite" – tai ambicingas ir ilgalaikę vertę kuriantis projektas, vienijantis nedideles Kauno futbolo akademijas bendram tikslui – ugdyti aukščiausio lygio jaunus futbolininkus, galinčius atstovauti Lietuvos jaunimo rinktinėms.
          </p>
          <p style={{ marginTop: 20 }}>
            Projektas grindžiamas aiškia filosofija: talentingiausi kiekvienos akademijos žaidėjai yra kviečiami į bendrą „Kaunas City Elite" komandą, kur jie treniruojasi kartu, varžosi aukštesnio lygio turnyruose ir kasdien kelia savo sportinį lygį.
          </p>
        </div>

        {/* PROJEKTO ESMĖ */}
        <SectionBlock eyebrow="Projekto esmė">
          <div style={{ maxWidth: 720 }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65,
              color: 'var(--fg1)', margin: 0,
            }}>
              Jaunas futbolininkas negali maksimaliai tobulėti būdamas geriausias tarp silpnesnių – augimas vyksta tik konkurencingoje aplinkoje. Todėl „Kaunas City Elite" sukuria platformą, kurioje talentai treniruojasi su savo lygio ar stipresniais žaidėjais, taip paspartindami savo progresą.
            </p>
            <div style={{
              marginTop: 28, background: 'var(--kc-black)', color: 'var(--kc-bone)',
              padding: '24px 28px',
            }}>
              <div style={{ ...labelStyle, color: 'rgba(244,241,234,0.55)', marginBottom: 16 }}>
                Šiuo metu prie projekto prisijungė
              </div>
              {['Kaunas City FA', 'Kauno futbolo akademija „Tauras"', 'Futbolo akademija „Ainiai"', 'Futbolo akademija „Core11"'].map((a, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '10px 0',
                  borderBottom: i < 3 ? '1px solid rgba(244,241,234,0.15)' : 'none',
                  fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.5,
                  color: 'var(--kc-bone)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: 20,
                    color: 'rgba(244,241,234,0.4)', flexShrink: 0,
                  }}>{String(i + 1).padStart(2, '0')}</span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </SectionBlock>

        {/* PROJEKTO VADOVAI */}
        <SectionBlock eyebrow="Projekto vadovai">
          <div className="elite-leaders-grid">
            <PersonCard
              name="Laimis Bičkauskas"
              title="Projekto vadovas"
              subtitle="UEFA Pro licencija, daugiau nei du dešimtmečiai patirties jaunimo ugdyme. Asmeniškai prižiūri treniruočių procesą ir žaidėjų tobulėjimą."
              photo="/photos/elite-laimis.jpg"
              alt="Laimis Bičkauskas"
            />
            <PersonCard
              name="Lukas Spalvis"
              title="Projekto ambasadorius"
              subtitle="Lietuvos metų futbolininkas (2015), Kaunas City įkūrėjas. Dalinasi profesionalo keliu, psichologiniais iššūkiais ir gyvenimu už aikštės ribų."
              photo="/photos/elite-lukas.jpg"
              alt="Lukas Spalvis"
            />
            <PersonCard
              name="Aurinas Ivaškevičius"
              title="Tarptautinė patirtis"
              subtitle="Vienas didžiausių futbolo turnyrų organizatorių Lietuvoje. Rūpinasi komandų dalyvavimu turnyruose ir žaidėjų vystymu per aukšto lygio varžybas."
              photo="/photos/elite-aurinas.jpg"
              alt="Aurinas Ivaškevičius"
            />
          </div>
        </SectionBlock>

        {/* STRUKTŪRA */}
        <SectionBlock eyebrow="Struktūra">
          <div style={{ maxWidth: 640 }}>
            <BulletList items={[
              'Žaidėjai ir toliau treniruojasi bei atstovauja savo akademijoms',
              'Kartą per savaitę (ketvirtadieniais) renkasi į bendras „Kaunas City Elite" treniruotes',
              'Dalyvauja aukšto lygio turnyruose Lietuvoje ir užsienyje',
              'Visos žaidėjų teisės lieka juos ugdančioms akademijoms',
            ]} />
          </div>
        </SectionBlock>

        {/* PAPILDOMA VERTĖ */}
        <SectionBlock eyebrow="Papildoma vertė žaidėjams">
          <div style={{ maxWidth: 640 }}>
            <BulletList items={[
              'Treniruotės su geriausiais Lietuvos treneriais',
              'Specializuotas fizinis rengimas',
              'Aukštesnio intensyvumo ir kokybės treniruočių procesas',
              'Tarptautinių turnyrų patirtis',
              'Partnerystė ir aprūpinimas iš sporto prekės ženklo ThreeKick',
            ]} />
          </div>
        </SectionBlock>

        {/* VIZIJA */}
        <div style={{ marginTop: 56 }}>
          <div style={{
            background: 'var(--kc-black)', color: 'var(--kc-bone)',
            padding: 'clamp(28px, 5vw, 48px)',
          }}>
            <Eyebrow inverse>Vizija</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 60px)',
              margin: '16px 0 0', lineHeight: .95, textTransform: 'uppercase',
            }}>
              Stipriausia 2017–2018<br />m. gimimo grupė Lietuvoje
            </h2>
            <Rule width={96} weight={8} inverse />
            <p style={{
              marginTop: 20, fontSize: 17, color: 'rgba(244,241,234,0.75)',
              maxWidth: 560, lineHeight: 1.6,
            }}>
              Per 2–3 metus suformuoti stipriausią Lietuvoje 2017–2018 metų gimimo futbolininkų grupę, galinčią papildyti Lietuvos jaunimo rinktines.
            </p>
          </div>
        </div>

        {/* PROJEKTO VERTĖ */}
        <SectionBlock eyebrow="Projekto vertė">
          <div className="two-col" style={{ maxWidth: 800 }}>
            {[
              { label: 'Žaidėjui', body: 'Būti tarp geriausių savo amžiaus grupėje.' },
              { label: 'Akademijai', body: 'Auginti ir deleguoti elitinio lygio talentus.' },
            ].map((c, i) => (
              <div key={i} style={{
                background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
                padding: '24px 28px',
              }}>
                <div style={{ ...labelStyle }}>{c.label}</div>
                <p style={{
                  fontFamily: 'var(--font-headline)', fontWeight: 700,
                  fontSize: 'clamp(18px, 2.5vw, 26px)',
                  margin: 0, lineHeight: 1.2, textTransform: 'uppercase',
                  letterSpacing: '.04em',
                }}>{c.body}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* PARTNERIAI */}
        <SectionBlock eyebrow="Projekto partneriai">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 2,
          }}>
            {elitePartnerLogos.map((src, i) => (
              <div key={i} style={{
                background: 'var(--kc-bone)',
                border: '2px solid var(--kc-black)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '24px 20px', minHeight: 120,
              }}>
                <img
                  src={src}
                  alt={elitePartnerNames[i] || ''}
                  style={{ height: 64, width: 'auto', maxWidth: '100%', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* KVIETIMAS */}
        <div style={{ marginTop: 56, marginBottom: 64 }}>
          <div style={{
            background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
            padding: 'clamp(28px, 5vw, 48px)',
          }}>
            <Eyebrow>Kvietimas prisijungti</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 56px)',
              margin: '12px 0 0', lineHeight: .95, textTransform: 'uppercase',
            }}>
              Durys atviros
            </h2>
            <Rule width={96} weight={8} />
            <p style={{
              marginTop: 16, fontSize: 17, color: 'var(--fg2)',
              maxWidth: 560, lineHeight: 1.65,
            }}>
              Projektas yra atviras visoms ambicingoms akademijoms, siekiančioms kelti Lietuvos futbolo lygį. Jeigu jūsų akademija nori tapti šio projekto dalimi – kviečiame susisiekti jau šiandien.
            </p>
            <div style={{ marginTop: 28 }}>
              <a href="mailto:info@kaunascityfa.lt">
                <Button size="lg">Susisiekti →</Button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
