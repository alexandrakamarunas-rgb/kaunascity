'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './Bits';

const tabs = [
  ['/', 'Pradžia'],
  ['/akademija', 'Akademija'],
  ['/komanda', 'Komanda'],
  ['/treneris', 'Treneris'],
  ['/registracija', 'Registracija'],
];

export default function Header() {
  const pathname = usePathname();
  const active = pathname.replace(/\/$/, '') || '/';

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'var(--kc-black)', color: 'var(--kc-bone)',
      borderBottom: '2px solid var(--kc-bone)',
      padding: '14px 48px',
      display: 'flex', alignItems: 'center', gap: 24,
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
        <img src="/assets/logo-on-dark.png" alt="Kaunas City FA" style={{ width: 44, height: 44 }} />
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 22,
          letterSpacing: '-.01em', lineHeight: 1, textTransform: 'uppercase',
        }}>Kaunas City</span>
      </Link>
      <nav style={{ display: 'flex', gap: 22, marginLeft: 24 }}>
        {tabs.map(([href, label]) => {
          const isActive = href === '/' ? active === '/' : active === href;
          return (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 13,
              letterSpacing: '.18em', textTransform: 'uppercase',
              cursor: 'pointer',
              opacity: isActive ? 1 : 0.7,
              borderBottom: isActive ? '2px solid var(--kc-bone)' : '2px solid transparent',
              paddingBottom: 2,
              color: 'var(--kc-bone)',
            }}>{label}</Link>
          );
        })}
      </nav>
      <div style={{ marginLeft: 'auto' }}>
        <Link href="/registracija">
          <Button size="sm" variant="inverse">Registruokis</Button>
        </Link>
      </div>
    </header>
  );
}
