'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from './Bits';

const tabs = [
  ['/', 'Pradžia'],
  ['/akademija', 'Akademija'],
  ['/komanda', 'Komanda'],
  ['/treneris', 'Treneris'],
  ['/elite', 'Elite'],
  ['/kontaktai', 'Kontaktai'],
  ['/parama', '1,2%'],
  ['/parduotuve', 'Parduotuvė'],
  ['/registracija', 'Registracija'],
];

export default function Header() {
  const pathname = usePathname();
  const active = pathname.replace(/\/$/, '') || '/';
  const [open, setOpen] = useState(false);

  const navLinkStyle = (href) => {
    const isActive = href === '/' ? active === '/' : active === href;
    return {
      fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 13,
      letterSpacing: '.18em', textTransform: 'uppercase',
      cursor: 'pointer',
      opacity: isActive ? 1 : 0.7,
      borderBottom: isActive ? '2px solid var(--kc-bone)' : '2px solid transparent',
      paddingBottom: 2,
      color: 'var(--kc-bone)',
    };
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'var(--kc-black)', color: 'var(--kc-bone)',
      borderBottom: '2px solid var(--kc-bone)',
    }}>
      {/* Main bar */}
      <div style={{
        padding: '14px 24px',
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} style={{
          display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
        }}>
          <img src="/assets/logo-on-dark.png" alt="Kaunas City FA" style={{ width: 40, height: 40 }} />
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 20,
            letterSpacing: '-.01em', lineHeight: 1, textTransform: 'uppercase',
          }}>Kaunas City</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 20, marginLeft: 20, flexWrap: 'nowrap' }}
             className="desktop-nav">
          {tabs.map(([href, label]) => (
            <Link key={href} href={href} style={navLinkStyle(href)}>{label}</Link>
          ))}
        </nav>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Desktop CTA */}
          <span className="desktop-nav">
            <Link href="/registracija">
              <Button size="sm" variant="inverse">Registruokis</Button>
            </Link>
          </span>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="hamburger"
            aria-label="Meniu"
            style={{
              background: 'none', border: '2px solid var(--kc-bone)',
              color: 'var(--kc-bone)', padding: '6px 10px',
              cursor: 'pointer', display: 'flex', flexDirection: 'column',
              gap: 5, alignItems: 'center', justifyContent: 'center',
            }}>
            <span style={{ display: 'block', width: 20, height: 2, background: 'var(--kc-bone)' }} />
            <span style={{ display: 'block', width: 20, height: 2, background: 'var(--kc-bone)' }} />
            <span style={{ display: 'block', width: 20, height: 2, background: 'var(--kc-bone)' }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav style={{
          background: 'var(--kc-black)',
          borderTop: '2px solid var(--kc-bone)',
          padding: '20px 24px',
          display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {tabs.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 15,
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: active === href || (href === '/' && active === '/') ? 'var(--kc-bone)' : 'rgba(244,241,234,0.6)',
              padding: '14px 0',
              borderBottom: '1px solid rgba(244,241,234,0.12)',
              display: 'block',
            }}>{label}</Link>
          ))}
          <div style={{ marginTop: 20 }}>
            <Link href="/registracija" onClick={() => setOpen(false)}>
              <Button variant="inverse" size="lg">Registruokis</Button>
            </Link>
          </div>
        </nav>
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .hamburger   { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
