const Team = () => {
  const fixtures = [
    { date: '2026-05-03', time: '19:00', tag: 'III lyga', home: 'FK Nadruvis',     away: 'Kaunas City FA', place: 'Garliava' },
    { date: '2026-05-10', time: '19:00', tag: 'III lyga', home: 'FK Šturmas',      away: 'Kaunas City FA', place: 'Kaunas' },
    { date: '2026-06-14', time: '19:00', tag: 'III lyga', home: 'FK Danspin–KKSC', away: 'Kaunas City FA', place: 'Raseiniai' },
  ];
  const fmt = (iso) => {
    const d = new Date(iso + 'T00:00:00');
    const days = ['Sekm','Pirm','Antr','Treč','Ketv','Penkt','Šešt'];
    const months = ['Sau','Vas','Kov','Bal','Geg','Bir','Lie','Rgp','Rgs','Spa','Lap','Grd'];
    return `${days[d.getDay()]} ${String(d.getDate()).padStart(2,'0')} ${months[d.getMonth()]}`;
  };

  return (
    <Section padded={false}>
      <div style={{ padding: '64px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 96, margin: 0, lineHeight: .95, textTransform: 'uppercase' }}>Komanda</h1>
          <Eyebrow><LT>KAFF–MAFF III lyga · 2026</LT></Eyebrow>
        </div>
        <Rule width={120} weight={8}/>

        <div style={{ marginTop: 32 }}>
          <Photo
            src="../../assets/photos/senior-huddle-night.webp"
            alt="Komanda"
            ratio="21 / 9"
            style={{ width: '100%' }}
            objectPosition="50% 40%"
            treatment="duotone"
            caption="KMFL 7×7 · čempionai"
          />
        </div>

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
          <Eyebrow><LT>Artimiausios rungtynės</LT></Eyebrow>
          {fixtures.map((f, i) => (
            <div key={i} style={{
              background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
              padding: '20px 24px',
              boxShadow: i === 0 ? 'var(--shadow-hard)' : 'none',
              display: 'grid',
              gridTemplateColumns: '160px 1fr 220px',
              gap: 24, alignItems: 'center',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-.01em' }}><LT>{fmt(f.date)}</LT></div>
                <div style={{ marginTop: 6, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.08em', color: 'var(--fg3)' }}>{f.date}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, lineHeight: 1, textTransform: 'uppercase' }}><LT>{f.home}</LT></span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, lineHeight: 1, color: 'var(--fg3)', letterSpacing: '-.01em' }}>{f.time}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, lineHeight: 1, textTransform: 'uppercase', textAlign: 'right' }}><LT>{f.away}</LT></span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--fg3)' }}><LT>{f.tag}</LT></div>
                <div style={{ marginTop: 4, fontFamily: 'var(--font-headline)', fontWeight: 600, fontSize: 14, letterSpacing: '.08em', textTransform: 'uppercase' }}><LT>{f.place}</LT></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

window.Team = Team;
