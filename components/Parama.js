import { Eyebrow, Rule, Section, Photo } from './Bits';

const Step = ({ n, children }) => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginTop: 28 }}>
    <div style={{
      flexShrink: 0,
      fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 64px)',
      lineHeight: 1, color: 'var(--kc-black)', minWidth: 56,
    }}>{n}</div>
    <div style={{ paddingTop: 8, fontSize: 16, color: 'var(--fg1)', lineHeight: 1.65 }}>
      {children}
    </div>
  </div>
);

export default function Parama() {
  return (
    <Section padded={false}>
      <div className="page-pad">
        <div className="academy-header">
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 8vw, 96px)',
            margin: 0, lineHeight: .95, textTransform: 'uppercase',
          }}>1,2% Parama</h1>
          <Eyebrow>Iki 2026 m. gegužės 2 d.</Eyebrow>
        </div>
        <Rule width={120} weight={8} />

        <p style={{ marginTop: 28, fontSize: 'clamp(16px, 2vw, 19px)', color: 'var(--fg1)', lineHeight: 1.6, maxWidth: 680 }}>
          Mums labai rūpi kiekvienas akademijos narys ir su juo susiję. Kiekviena jūsų parama prisidės prie vaikų tobulėjimo ir sąlygų kokybės. Keli paprasti žingsniai ir Jūs paremsite Kaunas City FA 1,2%!
        </p>
        <p style={{ marginTop: 12, fontSize: 16, color: 'var(--fg2)', lineHeight: 1.6, maxWidth: 680 }}>
          Prašymus skirti paramą galite pateikti iki <strong>2026 m. gegužės 2 d.</strong>
        </p>
        <p style={{ marginTop: 12, fontSize: 16, color: 'var(--fg2)', lineHeight: 1.6, maxWidth: 680 }}>
          Užpildyti prašymai pristatomi VMI internetinės bankininkystės pagalba prisijungiant prie Elektroninio Deklaravimo Sistemos (EDS) ir užpildant <strong>FR0512 v.5</strong> formą internetu.
        </p>

        <div style={{
          marginTop: 36, background: 'var(--kc-black)', color: 'var(--kc-bone)',
          padding: 'clamp(20px, 4vw, 36px)',
        }}>
          <Eyebrow inverse>Rekvizitai</Eyebrow>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              ['Gavėjas', 'VŠĮ Kaunas City Football Academy'],
              ['Identifikacinis numeris', '307276552'],
              ['Mokestinis laikotarpis', '2025'],
              ['Pajamų mokesčio dalis', 'iki 1,2 %'],
            ].map(([label, val]) => (
              <div key={label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'baseline' }}>
                <span style={{
                  fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 11,
                  letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--fg-muted-inverse)',
                  minWidth: 200,
                }}>{label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '.04em' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <Eyebrow>Kaip pateikti prašymą</Eyebrow>
          <Rule width={80} weight={6} />

          <Step n="1">
            Užeikite per VMI nuorodą:{' '}
            <a href="http://deklaravimas.vmi.lt" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--kc-black)', fontWeight: 700, textDecoration: 'underline' }}>
              deklaravimas.vmi.lt
            </a>
            {' '}— prisijunkite per elektroninę bankininkystę arba el. parašo pagalba.
          </Step>

          <Step n="2">
            <p style={{ margin: 0 }}>Skyriuje <strong>„DEKLARAVIMAS"</strong> atlikite šiuos žingsnius:</p>
            <ul style={{ margin: '12px 0 0 0', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>„Formos kodas" laukelyje įrašykite: <strong>FR0512</strong></li>
              <li>Paspauskite mygtuką <strong>„Filtruoti"</strong></li>
              <li>Pasirinkite formą elektroniniam pildymui</li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <Photo
                src="/photos/eds-screenshot.png"
                alt="EDS FR0512 formos paieška"
                ratio="638 / 500"
                style={{ maxWidth: 560 }}
              />
            </div>
          </Step>

          <Step n="3">
            Prie skilties <strong>„Forma elektroniniam pildymui"</strong> paspauskite ant mėlynos spalvos gaublio — tai atvers formą tiesiai portale.
          </Step>

          <Step n="4">
            <p style={{ margin: '0 0 16px' }}>Žiūrėkite video instrukciją kaip užpildyti formą naujajame VMI portale:</p>
            <div style={{
              position: 'relative', paddingBottom: '56.25%', height: 0,
              overflow: 'hidden', maxWidth: 640,
              border: '2px solid var(--kc-black)',
            }}>
              <iframe
                src="https://www.youtube.com/embed/VVpaY-FFbKk"
                title="VMI FR0512 pildymo instrukcija"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '100%', height: '100%', border: 0,
                }}
              />
            </div>
          </Step>

          <Step n="5">
            <strong>Jūs paskyrėte paramą. Ačiū Jums!</strong>
          </Step>
        </div>
      </div>
    </Section>
  );
}
