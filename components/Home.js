'use client';
import Link from 'next/link';
import { Eyebrow, Rule, Button, Section, Photo, LT } from './Bits';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Section dark padded={false}>
        <div style={{
          padding: '72px 48px 80px',
          display: 'grid', gridTemplateColumns: '1.3fr 1fr',
          gap: 48, alignItems: 'center',
        }}>
          <div>
            <Eyebrow inverse>Akademija · 5–12 m. · III lyga</Eyebrow>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(72px, 9vw, 132px)',
              lineHeight: .88, margin: '16px 0',
              textTransform: 'uppercase', letterSpacing: '-.01em',
              color: 'var(--kc-bone)',
            }}>
              Prisijunk<br />prie<br />komandos.
            </h1>
            <Rule width={96} weight={8} inverse />
            <p style={{
              marginTop: 20, fontSize: 18, lineHeight: 1.5,
              maxWidth: 480, color: 'var(--fg-muted-inverse)',
            }}>
              Kaunas City — futbolo akademija vaikams nuo 5 iki 12 metų ir suaugusiųjų komanda, žaidžianti III lygoje. Treniruoja Lukas Spalvis.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/registracija">
                <Button variant="inverse" size="lg">Registruokis →</Button>
              </Link>
              <Link href="/akademija">
                <Button variant="ghost" size="lg">
                  <span style={{ color: 'var(--kc-bone)' }}>Apie akademija</span>
                </Button>
              </Link>
            </div>
          </div>
          <Photo
            src="/photos/kids-match-action.jpeg"
            alt="Akademijos žaidėjai rungtynių metu"
            ratio="4 / 5"
            style={{ minHeight: 480 }}
            objectPosition="55% 50%"
            caption="Akademija · rungtynės"
          />
        </div>
      </Section>

      {/* MARQUEE STRIP */}
      <div style={{
        background: 'var(--kc-bone)',
        borderTop: '2px solid var(--kc-black)',
        borderBottom: '2px solid var(--kc-black)',
        padding: '14px 0', overflow: 'hidden', whiteSpace: 'nowrap',
        fontFamily: 'var(--font-display)', fontSize: 28,
        textTransform: 'uppercase', letterSpacing: '-.01em',
      }}>
        <span style={{ marginLeft: 24 }}>5–12 metų</span>
        <span style={{ margin: '0 32px', color: 'var(--fg3)' }}>●</span>
        <span>2 grupės</span>
        <span style={{ margin: '0 32px', color: 'var(--fg3)' }}>●</span>
        <span>3 treniruotės / sav.</span>
        <span style={{ margin: '0 32px', color: 'var(--fg3)' }}>●</span>
        <span>III lyga</span>
        <span style={{ margin: '0 32px', color: 'var(--fg3)' }}>●</span>
        <span>Lapiu stadionas</span>
      </div>

      {/* TWO-PRONG CARDS */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            {
              eb: 'Vaikams', title: 'Akademija', sub: '5–12 m.',
              body: 'Dvi amžiaus grupės, trys treniruotės per savaitę Lapių mokyklos stadione. Futbolas — visiems vaikams, kurie nori žaisti.',
              cta: 'Daugiau →', href: '/akademija',
            },
            {
              eb: 'Suaugusiems', title: 'Komanda', sub: 'III lyga',
              body: 'Kovojome KMFL 7×7 čempionų titulą, dabar žaidžiame KAFF–MAFF III lygoje.',
              cta: 'Apie komanda →', href: '/komanda',
            },
          ].map((c, i) => (
            <Link key={i} href={c.href} style={{
              background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
              padding: 28, boxShadow: 'var(--shadow-hard)', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: 14, minHeight: 280,
              color: 'inherit',
            }}>
              <Eyebrow>{c.eb} · {c.sub}</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 5vw, 72px)',
                margin: 0, lineHeight: .9, textTransform: 'uppercase', letterSpacing: '-.01em',
              }}>{c.title}</h2>
              <p style={{ fontSize: 16, color: 'var(--fg2)', lineHeight: 1.5, margin: 0, maxWidth: 360 }}>{c.body}</p>
              <span style={{
                marginTop: 'auto', fontFamily: 'var(--font-headline)', fontWeight: 700,
                fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase',
              }}>{c.cta}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* COACH STRIP */}
      <Section padded={false} style={{
        background: 'var(--kc-paper)',
        borderTop: '2px solid var(--kc-black)', borderBottom: '2px solid var(--kc-black)',
      }}>
        <div style={{
          padding: '64px 48px',
          display: 'grid', gridTemplateColumns: '1fr 1.4fr',
          gap: 48, alignItems: 'center',
        }}>
          <Photo
            src="/photos/coach-with-kid.jpeg"
            alt="Treneris Lukas Spalvis su akademijos žaidėju"
            ratio="1 / 1"
            style={{ minHeight: 360 }}
            objectPosition="50% 8%"
          />
          <div>
            <Eyebrow>Treneris</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(56px, 6vw, 88px)',
              lineHeight: .9, margin: '12px 0 16px',
              textTransform: 'uppercase', letterSpacing: '-.01em',
            }}>
              Lukas<br />Spalvis
            </h2>
            <Rule width={96} weight={8} />
            <p style={{ marginTop: 20, fontSize: 18, color: 'var(--fg2)', lineHeight: 1.5, maxWidth: 460 }}>
              Lietuvos metų futbolininkas (2015), Lietuvos rinktinės narys, Danijos „Superligos" čempionas ir geriausias lygos žaidėjas. Vyriausiasis akademijos ir komandos treneris.
            </p>
            <div style={{ marginTop: 24 }}>
              <Link href="/treneris">
                <Button>Apie trenerį →</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
