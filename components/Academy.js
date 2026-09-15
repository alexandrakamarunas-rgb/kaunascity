import { Eyebrow, Rule, Section, LT } from './Bits';

const sections = [
  {
    year: '2025 – Pirmasis žingsnis',
    body: [
      '2025 metais Kauno rajone, Lapėse, pradėjo veiklą KAUNAS CITY FOOTBALL ACADEMY.',
      'Pirmaisiais metais akademijoje sportavo apie 45 vaikai. Treniruotes vedė pats akademijos įkūrėjas Lukas Spalvis, savo patirtį iš profesionalaus futbolo perduodamas jauniesiems žaidėjams.',
      'Nuo pat pradžių akademijos filosofija buvo paremta ne tik vaikų užimtumu, bet ir kokybišku futbolininkų ugdymu.',
    ],
  },
  {
    year: '2026 – Spartus augimas',
    body: [
      '2026 metais KAUNAS CITY FOOTBALL ACADEMY žengė į naują etapą.',
      'Akademija išsiplėtė ir pradėjo veiklą ne tik Lapėse, bet ir Panemunėje bei Eiguliuose.',
      'Per vienerius metus sportuojančių vaikų skaičius išaugo iki daugiau nei 140.',
      'Akademijoje suformuotos U7, U9, U11 ir U13 amžiaus grupės, leidžiančios vaikams treniruotis pagal jų amžių, fizinį pasirengimą ir futbolo gebėjimus.',
    ],
  },
  {
    year: 'Kaunas City vyrų komanda',
    body: [
      '2026 metais buvo suburta ir KAUNAS CITY vyrų futbolo komanda.',
      'Komanda dalyvauja KAFF III lygoje bei LFF taurės varžybose.',
      'Vyrų komandos sukūrimas tapo svarbia akademijos dalimi – tai galimybė jauniems futbolininkams matyti tolimesnį kelią akademijoje ir suprasti, kur gali nuvesti nuoseklus darbas bei futbolo ugdymas.',
    ],
  },
  {
    year: 'Kaunas City Elite',
    body: [
      '2026 metais akademijoje taip pat pradėtas projektas KAUNAS CITY ELITE, skirtas 2017–2018 metais gimusiems vaikams.',
      'Tai aukštesnio lygio ugdymo kryptis, kurioje daugiausia dėmesio skiriama talentingiausių vaikų tobulėjimui, individualiam darbui ir aukštesniems treniruočių reikalavimams.',
      'Projekto filosofija – talentą pastebėti kuo anksčiau ir suteikti jam tinkamą aplinką augti.',
    ],
  },
  {
    year: 'Elitinė 2015/2016 metų grupė',
    body: [
      'Kartu su Kauno „Atleto" akademija buvo sukurta elitinė 2015/2016 metais gimusių vaikų grupė.',
      'Šios grupės tikslas – sudaryti talentingiausiems jauniems futbolininkams sąlygas treniruotis aukštesnio intensyvumo aplinkoje, daugiau dėmesio skiriant individualiam žaidėjų tobulėjimui ir pasirengimui aukštesniam futbolo lygiui.',
    ],
  },
  {
    year: 'Profesionali trenerių komanda',
    body: [
      'Augant akademijai, stiprėjo ir jos trenerių komanda.',
      'Šiuo metu KAUNAS CITY FOOTBALL ACADEMY dirba 3 futbolo treneriai ir 1 fizinio rengimo treneris.',
      'Akademijoje siekiama ugdyti futbolininką kompleksiškai. Vaikai mokomi ne tik futbolo technikos ir taktikos, bet taip pat lavinamas jų greitis, koordinacija, jėga, ištvermė ir kitos fizinės savybės.',
      'Svarbi akademijos dalis – disciplina, atsakomybė, komandinis darbas ir supratimas, kad profesionalus sportas prasideda nuo kasdienio darbo.',
    ],
  },
];

export default function Academy() {
  return (
    <Section padded={false}>
      <div className="page-pad">

        {/* Page header */}
        <div className="academy-header">
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 8vw, 96px)',
            margin: 0, lineHeight: .95, textTransform: 'uppercase',
          }}>Akademija</h1>
          <Eyebrow><LT>Kaunas City Football Academy</LT></Eyebrow>
        </div>
        <Rule width={120} weight={8} />

        {/* Tagline */}
        <p style={{
          marginTop: 32,
          fontFamily: 'var(--font-headline)',
          fontWeight: 700,
          fontSize: 'clamp(18px, 2.8vw, 28px)',
          lineHeight: 1.25,
          textTransform: 'uppercase',
          letterSpacing: '.06em',
          maxWidth: 720,
          color: 'var(--fg1)',
        }}>
          <LT>Nuo pirmųjų žingsnių futbole iki profesionalo svajonės.</LT>
        </p>

        {/* Intro */}
        <div style={{ marginTop: 28, maxWidth: 720, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg1)' }}>
            <LT>KAUNAS CITY FOOTBALL ACADEMY – futbolo akademija, kurios pagrindinis tikslas yra ugdyti jaunus futbolininkus, suteikti jiems profesionalią sporto aplinką ir padėti žingsnis po žingsnio siekti savo svajonės – tapti profesionaliais futbolininkais.</LT>
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg2)' }}>
            <LT>Akademijos įkūrėjas Lukas Spalvis – buvęs profesionalus Lietuvos futbolininkas, 2015 metais pripažintas geriausiu Lietuvos futbolininku, taip pat geriausiu Danijos futbolininku ir Danijos čempionu.</LT>
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg2)' }}>
            <LT>Lukas savo futbolo kelią pradėjo Lietuvoje. Profesionalaus futbolininko karjeros metu jis sukaupė didelę patirtį Lietuvos ir užsienio futbole. Baigęs profesionalaus futbolininko karjerą, Lukas nusprendė savo žinias, patirtį ir sukauptą supratimą apie profesionalų sportą skirti jaunajai kartai.</LT>
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg2)' }}>
            <LT>Taip gimė idėja sukurti futbolo akademiją, kurioje vaikai galėtų ne tik mokytis žaisti futbolą, bet ir būti kryptingai ruošiami aukštesniam sportiniam lygiui. Kartu su bendraminčiais – futbolo agentu ir futbolo treneriu – buvo įkurta KAUNAS CITY FOOTBALL ACADEMY.</LT>
          </p>
        </div>

        {/* Timeline sections */}
        <div style={{ marginTop: 56 }}>
          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 40, border: '2px solid var(--kc-black)' }}>
              {/* Black header block */}
              <div style={{
                background: 'var(--kc-black)',
                color: 'var(--kc-bone)',
                padding: '14px 24px',
              }}>
                <h2 style={{
                  fontFamily: 'var(--font-headline)',
                  fontWeight: 700,
                  fontSize: 'clamp(13px, 1.8vw, 15px)',
                  letterSpacing: '.22em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}>
                  <LT>{s.year}</LT>
                </h2>
              </div>
              {/* Content */}
              <div style={{
                padding: '24px',
                display: 'flex', flexDirection: 'column', gap: 12,
                background: i % 2 === 0 ? 'var(--kc-bone)' : 'var(--kc-paper)',
              }}>
                {s.body.map((p, pi) => (
                  <p key={pi} style={{
                    margin: 0, fontSize: 16, lineHeight: 1.65,
                    color: pi === 0 ? 'var(--fg1)' : 'var(--fg2)',
                  }}>
                    <LT>{p}</LT>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy — dark block */}
        <div style={{
          marginTop: 16,
          padding: 'clamp(28px, 4vw, 48px)',
          background: 'var(--kc-black)',
          color: 'var(--kc-bone)',
        }}>
          <Eyebrow inverse><LT>Mūsų filosofija</LT></Eyebrow>
          <p style={{
            marginTop: 20,
            fontFamily: 'var(--font-headline)',
            fontWeight: 700,
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            lineHeight: 1.25,
            textTransform: 'uppercase',
            letterSpacing: '.04em',
            maxWidth: 640,
            color: 'var(--kc-bone)',
          }}>
            <LT>KAUNAS CITY FOOTBALL ACADEMY tikslas – sukurti aplinką, kurioje kiekvienas vaikas galėtų augti kaip futbolininkas ir kaip žmogus.</LT>
          </p>
          <p style={{
            marginTop: 24, fontSize: 16, lineHeight: 1.7,
            color: 'rgba(244,241,234,0.75)', maxWidth: 600,
          }}>
            <LT>Mes tikime, kad talentas yra tik pradžia. Kelias į profesionalų futbolą reikalauja darbo, disciplinos, tinkamų trenerių, tinkamos aplinkos ir nuoseklaus ugdymo.</LT>
          </p>
          <p style={{
            marginTop: 14, fontSize: 16, lineHeight: 1.7,
            color: 'rgba(244,241,234,0.75)', maxWidth: 600,
          }}>
            <LT>Todėl KAUNAS CITY FOOTBALL ACADEMY siekia būti vieta, kurioje jaunasis futbolininkas gali pradėti savo kelią nuo pirmojo prisilietimo prie kamuolio ir, turėdamas talentą bei norą dirbti, žingsnis po žingsnio siekti profesionalaus futbolo.</LT>
          </p>
        </div>

      </div>
    </Section>
  );
}
