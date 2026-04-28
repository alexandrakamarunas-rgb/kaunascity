'use client';
import Link from 'next/link';
import { Eyebrow, Rule, Button, Section, Photo, LT } from './Bits';
import partnerLogos from './partnerLogos';

const Sep = () => <span style={{ margin: '0 24px', color: 'var(--fg3)' }}>●</span>;

const PartnerLogos = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
    {partnerLogos.map((src, i) => (
      <span key={i} style={{ display: 'inline-flex', alignItems: 'center', padding: '0 40px' }}>
        <img src={src} alt="" style={{ height: 64, width: 'auto', maxWidth: 140, display: 'block' }} />
      </span>
    ))}
  </span>
);

const MarqueeItems = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', paddingRight: 24 }}>
    <span>5–12 <LT>metų</LT></span>
    <Sep /><span><LT>2 grupės</LT></span>
    <Sep /><span><LT>3 treniruotės / sav.</LT></span>
    <Sep /><span>III lyga</span>
    <Sep /><span>Lapiu stadionas</span>
    <Sep />
  </span>
);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Section dark padded={false}>
        <div className="hero-pad hero-grid">
          <div>
            <Eyebrow inverse>Akademija · 5–12 m. · III lyga</Eyebrow>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(56px, 10vw, 132px)',
              lineHeight: .88, margin: '16px 0',
              textTransform: 'uppercase', letterSpacing: '-.01em',
              color: 'var(--kc-bone)',
            }}>
              Prisijunk<br />prie<br />komandos.
            </h1>
            <Rule width={96} weight={8} inverse />
            <p style={{
              marginTop: 20, fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.5, maxWidth: 480, color: 'var(--fg-muted-inverse)',
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
          <div className="hero-photo-wrap">
            <Photo
              src="/photos/kids-match-action.jpeg"
              alt="Akademijos žaidėjai rungtynių metu"
              ratio="4 / 5"
              style={{ minHeight: 480 }}
              objectPosition="55% 50%"
              caption="Akademija · rungtynės"
            />
          </div>
        </div>
      </Section>

      {/* MARQUEE STRIP — animated ticker */}
      <div style={{
        background: 'var(--kc-bone)',
        borderTop: '2px solid var(--kc-black)',
        borderBottom: '2px solid var(--kc-black)',
        padding: '12px 0', overflow: 'hidden',
        fontFamily: 'var(--font-headline)',
        fontWeight: 700,
        fontSize: 'clamp(14px, 2.5vw, 22px)',
        textTransform: 'uppercase', letterSpacing: '.06em',
      }}>
        <div className="marquee-track" aria-hidden="true">
          <MarqueeItems /><MarqueeItems /><MarqueeItems />
        </div>
      </div>

      {/* TWO-PRONG CARDS */}
      <Section>
        <div className="two-col">
          {[
            {
              eb: 'Vaikams', title: 'Akademija', sub: '5–12 m.',
              body: 'Dvi amžiaus grupės, trys treniruotės per savaitę Lapių mokyklos stadione.',
              cta: 'Daugiau →', href: '/akademija',
            },
            {
              eb: 'Suaugusiems', title: 'Komanda', sub: 'III lyga',
              body: 'Iškovojome KMFL 7×7 čempionų titulą, dabar žaidžiame KAFF–MAFF III lygoje.',
              cta: 'Apie komanda →', href: '/komanda',
            },
          ].map((c, i) => (
            <Link key={i} href={c.href} style={{
              background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
              padding: 28, boxShadow: 'var(--shadow-hard)', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: 14, minHeight: 240,
              color: 'inherit',
            }}>
              <Eyebrow>{c.eb} · {c.sub}</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 6vw, 72px)',
                margin: 0, lineHeight: .9,
                textTransform: 'uppercase', letterSpacing: '-.01em',
              }}>{c.title}</h2>
              <p style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.5, margin: 0 }}>{c.body}</p>
              <span style={{
                marginTop: 'auto', fontFamily: 'var(--font-headline)', fontWeight: 700,
                fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase',
              }}>{c.cta}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* PARTNERS TICKER */}
      <div style={{
        background: 'var(--kc-bone)',
        borderTop: '2px solid var(--kc-black)',
        borderBottom: '2px solid var(--kc-black)',
        padding: '20px 0', overflow: 'hidden',
      }}>
        <div style={{
          fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 10,
          letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--fg3)',
          textAlign: 'center', marginBottom: 16,
        }}>Partneriai</div>
        <div className="marquee-track" aria-hidden="true">
          <PartnerLogos /><PartnerLogos /><PartnerLogos />
        </div>
      </div>

      {/* COACH STRIP */}
      <Section padded={false} style={{
        background: 'var(--kc-paper)',
        borderTop: '2px solid var(--kc-black)', borderBottom: '2px solid var(--kc-black)',
      }}>
        <div className="page-pad coach-grid">
          <Photo
            src="/photos/coach-with-kid.jpeg"
            alt="Treneris Lukas Spalvis su akademijos žaidėju"
            ratio="1 / 1"
            style={{ minHeight: 280 }}
            objectPosition="50% 8%"
          />
          <div>
            <Eyebrow>Treneris</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6vw, 88px)',
              lineHeight: .9, margin: '12px 0 16px',
              textTransform: 'uppercase', letterSpacing: '-.01em',
            }}>
              Lukas<br />Spalvis
            </h2>
            <Rule width={96} weight={8} />
            <p style={{ marginTop: 20, fontSize: 17, color: 'var(--fg2)', lineHeight: 1.5, maxWidth: 460 }}>
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
