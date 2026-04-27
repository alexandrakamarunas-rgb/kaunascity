const Header = ({ view, setView }) => {
  const tabs = [
    ['home', 'Pradžia'],
    ['academy', 'Akademija'],
    ['team', 'Komanda'],
    ['coach', 'Treneris'],
    ['register', 'Registracija'],
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'var(--kc-black)', color: 'var(--kc-bone)',
      borderBottom: '2px solid var(--kc-bone)',
      padding: '14px 48px',
      display: 'flex', alignItems: 'center', gap: 24,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}
           onClick={() => setView('home')}>
        <img src="../../assets/logo-on-dark.png" alt="" style={{ width: 44, height: 44 }}/>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '-.01em', lineHeight: 1, textTransform: 'uppercase' }}>
          Kaunas City
        </span>
      </div>
      <nav style={{ display: 'flex', gap: 22, marginLeft: 24 }}>
        {tabs.map(([id, label]) => (
          <a key={id}
             onClick={() => setView(id)}
             style={{
               fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 13,
               letterSpacing: '.18em', textTransform: 'uppercase',
               cursor: 'pointer',
               opacity: view === id ? 1 : 0.7,
               borderBottom: view === id ? '2px solid var(--kc-bone)' : '2px solid transparent',
               paddingBottom: 2,
             }}>{label}</a>
        ))}
      </nav>
      <div style={{ marginLeft: 'auto' }}>
        <Button size="sm" variant="inverse" onClick={() => setView('register')}>Registruokis</Button>
      </div>
    </header>
  );
};

window.Header = Header;
