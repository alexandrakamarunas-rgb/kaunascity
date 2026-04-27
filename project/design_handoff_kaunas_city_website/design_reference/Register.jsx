const Register = () => {
  const [form, setForm] = useState({ age: '5-8', childName: '', parentName: '', phone: '', email: '', note: '' });
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Build a mailto: so submissions land in info@kaunascityfa.lt
    const subject = encodeURIComponent(`Registracija · ${form.childName || 'Vaikas'} (${form.age})`);
    const body = encodeURIComponent(
      `Amžiaus grupė: ${form.age}\n` +
      `Vaiko vardas: ${form.childName}\n` +
      `Tėvų vardas: ${form.parentName}\n` +
      `Telefonas: ${form.phone}\n` +
      `El. paštas: ${form.email}\n\n` +
      `Pastabos:\n${form.note}`
    );
    window.location.href = `mailto:info@kaunascityfa.lt?subject=${subject}&body=${body}`;
    setDone(true);
  };

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const fieldStyle = {
    width: '100%', padding: '14px 16px',
    fontFamily: 'var(--font-body)', fontSize: 15,
    background: 'var(--kc-paper)', color: 'var(--kc-black)',
    border: '2px solid var(--kc-black)', borderRadius: 0,
    outline: 'none',
  };
  const labelStyle = {
    fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 12,
    letterSpacing: '.18em', textTransform: 'uppercase',
    color: 'var(--fg3)', marginBottom: 8, display: 'block',
  };

  return (
    <Section>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 96, margin: 0, lineHeight: .95, textTransform: 'uppercase' }}>Registracija</h1>
        <Eyebrow><LT>Pirma treniruotė nemokama</LT></Eyebrow>
      </div>
      <Rule width={120} weight={8}/>

      {!done && (
        <form onSubmit={onSubmit} style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelStyle}><LT>Amžiaus grupė</LT></label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { id: '5-8',  age: '5–8',  name: 'Pradžia' },
                { id: '9-12', age: '9–12', name: 'Komanda' },
              ].map(g => (
                <label key={g.id} style={{
                  background: form.age === g.id ? 'var(--kc-black)' : 'var(--kc-paper)',
                  color:      form.age === g.id ? 'var(--kc-bone)'  : 'var(--kc-black)',
                  border: '2px solid var(--kc-black)', padding: '20px 24px', cursor: 'pointer',
                  display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16,
                  boxShadow: form.age === g.id ? 'none' : 'var(--shadow-hard)',
                  transform: form.age === g.id ? 'translate(2px,2px)' : 'none',
                  transition: 'all 120ms var(--ease-snap)',
                }}>
                  <input type="radio" name="age" value={g.id} checked={form.age === g.id} onChange={update('age')} style={{ display: 'none' }}/>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-.02em' }}>{g.age}</span>
                  <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase' }}><LT>{g.name}</LT></span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Vaiko vardas</label>
            <input style={fieldStyle} value={form.childName} onChange={update('childName')} placeholder="Jonas" required/>
          </div>
          <div>
            <label style={labelStyle}><LT>Tėvų vardas</LT></label>
            <input style={fieldStyle} value={form.parentName} onChange={update('parentName')} placeholder="Tomas" required/>
          </div>
          <div>
            <label style={labelStyle}>Telefonas</label>
            <input style={fieldStyle} type="tel" value={form.phone} onChange={update('phone')} placeholder="+370 600 00000" required/>
          </div>
          <div>
            <label style={labelStyle}><LT>El. paštas</LT></label>
            <input style={fieldStyle} type="email" value={form.email} onChange={update('email')} placeholder="tevai@example.lt" required/>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelStyle}>Pastabos</label>
            <textarea style={{ ...fieldStyle, minHeight: 100, resize: 'vertical', fontFamily: 'var(--font-body)' }}
                      value={form.note} onChange={update('note')}
                      placeholder="Vaiko amžius, patogiausias laikas, klausimai..."/>
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, gap: 16, flexWrap: 'wrap' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.08em', color: 'var(--fg3)' }}>
              <LT>Forma siunčiama į info@kaunascityfa.lt</LT>
            </div>
            <Button>Siųsti registraciją →</Button>
          </div>
        </form>
      )}

      {done && (
        <div style={{ marginTop: 32, background: 'var(--kc-black)', color: 'var(--kc-bone)', padding: 48, textAlign: 'center' }}>
          <Eyebrow inverse><LT>Užregistruota</LT></Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 96, margin: '16px 0', lineHeight: .95, textTransform: 'uppercase' }}>Lauksim.</h2>
          <Rule width={120} weight={8} inverse/>
          <p style={{ fontSize: 18, color: 'var(--fg-muted-inverse)', marginTop: 20, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            <LT>Susisieksim per 2 darbo dienas dėl pirmos treniruotės Lapių stadione.</LT>
          </p>
          <div style={{ marginTop: 28 }}>
            <Button variant="inverse" onClick={() => { setDone(false); setForm({ age: '5-8', childName: '', parentName: '', phone: '', email: '', note: '' }); }}>Registruoti dar vaiką</Button>
          </div>
        </div>
      )}
    </Section>
  );
};

window.Register = Register;
