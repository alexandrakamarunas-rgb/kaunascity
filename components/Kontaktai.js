import { Eyebrow, Rule, Section } from './Bits';

const contacts = [
  {
    role: 'Treneris',
    name: 'Lukas Spalvis',
    photo: '/photos/contact-lukas.jpg',
    objectPosition: 'center 20%',
    phone: '+370 (607) 39 155',
    email: 'lukas@kaunascityfa.lt',
  },
  {
    role: 'Klubo prezidentas',
    name: 'Zenonas Kamarunas',
    photo: '/photos/contact-zenonas.jpg',
    objectPosition: 'center top',
    phone: '+370 (660) 90 000',
    email: 'info@kaunascityfa.lt',
  },
  {
    role: 'Vadybininkas',
    name: 'Timas Jablonskis',
    photo: '/photos/contact-timas.jpg',
    objectPosition: 'center 15%',
    phone: '+370 (677) 17 843',
    email: 'timas.jabl@kaunascityfa.lt',
  },
];

const monoStyle = {
  fontFamily: 'var(--font-mono)', fontSize: 14,
  letterSpacing: '.05em', color: 'var(--fg2)',
};

function ContactCard({ role, name, photo, objectPosition, phone, email }) {
  const hasLt = /[ąčęėįšųūžĄČĘĖĮŠŲŪŽ]/.test(name);
  return (
    <div className="contact-card" style={{
      background: 'var(--kc-paper)', border: '2px solid var(--kc-black)',
      display: 'grid', gridTemplateColumns: '200px 1fr',
    }}>
      {/* Photo */}
      <div className="contact-photo" style={{
        borderRight: '2px solid var(--kc-black)',
        overflow: 'hidden', minHeight: 240,
        background: '#d8d5ce',
      }}>
        <img
          src={photo}
          alt={name}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition,
            filter: 'grayscale(1) contrast(1.05) brightness(0.98)',
            display: 'block',
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow>{role}</Eyebrow>
        <h2 style={{
          fontFamily: hasLt ? 'var(--font-headline)' : 'var(--font-display)',
          fontWeight: hasLt ? 700 : 400,
          fontSize: 'clamp(26px, 3.5vw, 44px)',
          margin: '10px 0 20px', lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: hasLt ? '.04em' : '-.01em',
        }}>{name}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} style={{
            ...monoStyle, textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{
              fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 10,
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'var(--fg3)', flexShrink: 0,
            }}>Tel</span>
            {phone}
          </a>
          <a href={`mailto:${email}`} style={{
            ...monoStyle, textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{
              fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 10,
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'var(--fg3)', flexShrink: 0,
            }}>El. p.</span>
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Kontaktai() {
  return (
    <Section padded={false}>
      <div className="page-pad">

        <div className="academy-header">
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 8vw, 96px)',
            margin: 0, lineHeight: .92, textTransform: 'uppercase',
          }}>Kontaktai</h1>
          <Eyebrow>Kaunas City FA</Eyebrow>
        </div>
        <Rule width={120} weight={8} />

        {/* Person cards */}
        <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {contacts.map((c) => (
            <ContactCard key={c.email} {...c} />
          ))}
        </div>

        {/* General info */}
        <div className="contact-general" style={{
          marginTop: 2, marginBottom: 64,
          background: 'var(--kc-black)', color: 'var(--kc-bone)',
          padding: 'clamp(24px, 4vw, 40px)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 11,
              letterSpacing: '.2em', textTransform: 'uppercase',
              color: 'rgba(244,241,234,0.45)', marginBottom: 10,
            }}>Bendra informacija · Bendradarbiavimas</div>
            <a href="mailto:info@kaunascityfa.lt" style={{
              fontFamily: 'var(--font-mono)', fontSize: 16,
              letterSpacing: '.04em', color: 'var(--kc-bone)',
              textDecoration: 'none',
            }}>info@kaunascityfa.lt</a>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 11,
              letterSpacing: '.2em', textTransform: 'uppercase',
              color: 'rgba(244,241,234,0.45)', marginBottom: 10,
            }}>Adresas</div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 14,
              letterSpacing: '.04em', color: 'rgba(244,241,234,0.75)',
              lineHeight: 1.6,
            }}>Lapių mokyklos stadionas</div>
          </div>
        </div>

      </div>
    </Section>
  );
}
