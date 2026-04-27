const Home = ({ setView }) => (
  <>
    {/* HERO */}
    <Section dark padded={false}>
      <div style={{ padding: '72px 48px 80px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <Eyebrow inverse>Akademija · 5–12 m. · III lyga</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 132, lineHeight: .88,
            margin: '16px 0', textTransform: 'uppercase', letterSpacing: '-.01em',
          }}>Prisijunk<br/>prie<br/>komandos.</h1>
          <Rule width={96} weight={8} inverse/>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.5, maxWidth: 480, color: 'var(--fg-muted-inverse)' }}>
            Kaunas City — futbolo akademija vaikams nuo 5 iki 12 metų ir suaugusiųjų komanda, žaidžianti III lygoje. Treniruoja Lukas Spalvis.
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 14 }}>
            <Button variant="inverse" size="lg" onClick={() => setView('register')}>Registruokis →</Button>
            <Button variant="ghost" size="lg" onClick={() => setView('academy')}>
              <span style={{ color: 'var(--kc-bone)' }}>Apie akademiją</span>
            </Button>
          </div>
        </div>
        <Photo
          src="../../assets/photos/kids-match-action.jpeg"
          alt="Akademijos žaidėjai rungtynių metu"
          ratio="4 / 5" style={{ minHeight: 480 }}
          objectPosition="55% 50%"
          caption="Akademija · rungtynės"
        />
      </div>
    </Section>

    {/* MARQUEE STRIP */}
    <div style={{
      background: 'var(--kc-bone)', borderTop: '2px solid var(--kc-black)',
      borderBottom: '2px solid var(--kc-black)',
      padding: '14px 0', overflow: 'hidden', whiteSpace: 'nowrap',
      fontFamily: 'var(--font-display)', fontSize: 28, textTransform: 'uppercase', letterSpacing: '-.01em',
    }}>
      <span style={{ marginLeft: 24 }}><LT>5–12 metų</LT></span>
      <span style={{ margin: '0 32px', color: 'var(--fg3)' }}>●</span>
      <span><LT>2 grupės</LT></span>
      <span style={{ margin: '0 32px', color: 'var(--fg3)' }}>●</span>
      <span><LT>3 treniruotės / sav.</LT></span>
      <span style={{ margin: '0 32px', color: 'var(--fg3)' }}>●</span>
      <span>III lyga</span>
      <span style={{ margin: '0 32px', color: 'var(--fg3)' }}>●</span>
      <span><LT>Lapių stadionas</LT></span>
    </div>

    {/* TWO-PRONG */}
    <Section>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {[
          { eb: 'Vaikams', title: 'Akademija', sub: '5–12 m.', body: 'Dvi amžiaus grupės, trys treniruotės per savaitę Lapių mokyklos stadione. Futbolas — visiems vaikams, kurie nori žaisti.', cta: 'Daugiau →', view: 'academy' },
          { eb: 'Suaugusiems', title: 'Komanda', sub: 'III lyga', body: 'Iškovojome KMFL 7×7 čempionų titulą, dabar žaidžiame KAFF–MAFF III lygoje.', cta: 'Apie komandą →', view: 'team' },
        ].map((c, i) => (
          <div key={i} onClick={() => setView(c.view)} style={{
            background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
            padding: 28, boxShadow: 'var(--shadow-hard)', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 14, minHeight: 280,
          }}>
            <Eyebrow>{c.eb} · {c.sub}</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 72, margin: 0, lineHeight: .9, textTransform: 'uppercase', letterSpacing: '-.01em' }}>{c.title}</h2>
            <p style={{ fontSize: 16, color: 'var(--fg2)', lineHeight: 1.5, margin: 0, maxWidth: 360 }}>{c.body}</p>
            <span style={{ marginTop: 'auto', fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase' }}>{c.cta}</span>
          </div>
        ))}
      </div>
    </Section>

    {/* COACH STRIP */}
    <Section padded={false} style={{
      background: 'var(--kc-paper)',
      borderTop: '2px solid var(--kc-black)', borderBottom: '2px solid var(--kc-black)',
    }}>
      <div style={{ padding: '64px 48px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'center' }}>
        <Photo
          src="../../assets/photos/coach-with-kid.jpeg"
          alt="Treneris Lukas Spalvis su akademijos žaidėju"
          ratio="1 / 1" style={{ minHeight: 360 }}
          objectPosition="50% 8%"
        />
        <div>
          <Eyebrow>Treneris</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 88, lineHeight: .9,
            margin: '12px 0 16px', textTransform: 'uppercase', letterSpacing: '-.01em',
          }}>Lukas<br/>Spalvis</h2>
          <Rule width={96} weight={8}/>
          <p style={{ marginTop: 20, fontSize: 18, color: 'var(--fg2)', lineHeight: 1.5, maxWidth: 460 }}>
            Lietuvos metų futbolininkas (2015), Lietuvos rinktinės narys, Danijos „Superligos“ čempionas ir geriausias lygos žaidėjas. Vyriausiasis akademijos ir komandos treneris.
          </p>
          <div style={{ marginTop: 24 }}>
            <Button onClick={() => setView('coach')}>Apie trenerį →</Button>
          </div>
        </div>
      </div>
    </Section>
  </>
);

window.Home = Home;
