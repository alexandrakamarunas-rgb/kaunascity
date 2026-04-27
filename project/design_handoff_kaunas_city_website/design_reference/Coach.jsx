const Coach = () => (
  <Section padded={false}>
    <div style={{ padding: '64px 48px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'flex-start' }}>
      <Photo
        src="../../assets/photos/coach-with-kid.jpeg"
        alt="Treneris Lukas Spalvis treniruotėje su akademijos žaidėju"
        ratio="3 / 4" style={{ minHeight: 540 }}
        objectPosition="50% 5%"
        caption="Akademija · treniruotė"
      />
      <div>
        <Eyebrow>Vyriausiasis treneris · Akademija + III lyga</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 120, lineHeight: .88, margin: '12px 0', textTransform: 'uppercase', letterSpacing: '-.01em' }}>
          Lukas<br/>Spalvis
        </h1>
        <Rule width={120} weight={8}/>
        <p style={{ marginTop: 24, fontSize: 19, color: 'var(--fg1)', lineHeight: 1.5, maxWidth: 520 }}>
          Lietuvos metų futbolininkas 2015 m. Lietuvos nacionalinės rinktinės narys. Danijos „Superligos“ čempionas ir geriausias lygos žaidėjas.
        </p>
        <p style={{ marginTop: 16, fontSize: 16, color: 'var(--fg2)', lineHeight: 1.6, maxWidth: 520 }}>
          Šiandien Lukas vadovauja Kaunas City akademijai ir suaugusiųjų komandai. Tikime, kad futbolas yra visiems — kiekvienam vaikui, kuris nori žaisti, ir kiekvienam suaugusiam, kuris dar ant pievos.
        </p>
      </div>
    </div>
  </Section>
);

window.Coach = Coach;
