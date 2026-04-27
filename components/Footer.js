import Link from 'next/link';
import { Eyebrow, LT } from './Bits';

const linkStyle = {
  fontFamily: 'var(--font-headline)', fontWeight: 600, fontSize: 14,
  letterSpacing: '.08em', textTransform: 'uppercase', cursor: 'pointer',
  color: 'var(--kc-bone)', textDecoration: 'none',
  display: 'inline-flex', alignItems: 'baseline', gap: 6,
};

const sections = [
  ['Akademija', [
    { label: 'Apie akademija', href: '/akademija' },
    { label: 'Registracija',   href: '/registracija' },
  ]],
  ['Komanda', [
    { label: 'Apie komanda', href: '/komanda' },
    { label: 'Treneris',     href: '/treneris' },
  ]],
  ['Kontaktai', [
    { label: 'info@kaunascityfa.lt', href: 'mailto:info@kaunascityfa.lt' },
    { label: 'Lapiu mokyklos stadionas', href: 'https://maps.google.com/?q=Lapių+mokyklos+stadionas,+Lapiai,+Lietuva' },
  ]],
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--kc-black)', color: 'var(--kc-bone)',
      padding: '48px 48px 32px',
      borderTop: '8px solid var(--kc-bone)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 }}>
        <div>
          <img src="/assets/logo-on-dark.png" style={{ width: 64, height: 64 }} alt="" />
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 22,
            marginTop: 8, lineHeight: 1, textTransform: 'uppercase',
          }}>
            Kaunas<br />City
          </div>
          <div style={{
            marginTop: 8, fontFamily: 'var(--font-headline)', fontWeight: 600,
            fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'var(--fg-muted-inverse)',
          }}>
            Akademija · III lyga · LT
          </div>
        </div>
        {sections.map(([title, links]) => (
          <div key={title}>
            <Eyebrow inverse><LT>{title}</LT></Eyebrow>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map(l => (
                <li key={l.label}>
                  <a href={l.href} style={linkStyle}>
                    <LT>{l.label}</LT> <span style={{ opacity: .5 }}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 48, paddingTop: 20, borderTop: '2px solid var(--kc-bone)',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em',
        textTransform: 'uppercase', color: 'var(--fg-muted-inverse)',
      }}>
        <span>© 2026 Kaunas City</span>
        <span>Prisijunk prie komandos.</span>
      </div>
    </footer>
  );
}
