import { Eyebrow, LT } from './Bits';

const linkStyle = {
  fontFamily: 'var(--font-headline)', fontWeight: 600, fontSize: 14,
  letterSpacing: '.08em', textTransform: 'uppercase',
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
      padding: '40px 24px 28px',
      borderTop: '8px solid var(--kc-bone)',
    }}>
      <div className="footer-grid">
        <div>
          <img src="/assets/logo-on-dark.png" style={{ width: 56, height: 56 }} alt="" />
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 20,
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
            <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
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
        marginTop: 40, paddingTop: 18, borderTop: '2px solid var(--kc-bone)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em',
        textTransform: 'uppercase', color: 'var(--fg-muted-inverse)',
      }}>
        <span>© 2026 Kaunas City</span>
        <span>Prisijunk prie komandos.</span>
      </div>
    </footer>
  );
}
