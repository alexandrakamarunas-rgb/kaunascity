'use client';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Eyebrow, Rule, Section, Button } from './Bits';

const products = [
  {
    id: 'kostiumas',
    name: 'Vyriškas Sportinis Kostiumas',
    price: 50,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    photos: ['/photos/shop-1.jpg', '/photos/shop-2.jpg'],
  },
  {
    id: 'treningas',
    name: 'Kaunas City Treningas',
    price: 50,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    photos: ['/photos/shop-3.jpg', '/photos/shop-4.jpg'],
  },
  {
    id: 'salikas',
    name: 'Šalikas',
    price: 10,
    sizes: null,
    photos: ['/photos/shop-5.jpg'],
  },
];

const fieldStyle = {
  width: '100%', padding: '14px 16px',
  fontFamily: 'var(--font-body)', fontSize: 15,
  background: 'var(--kc-paper)', color: 'var(--kc-black)',
  border: '2px solid var(--kc-black)', borderRadius: 0, outline: 'none',
};

const labelStyle = {
  fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 12,
  letterSpacing: '.18em', textTransform: 'uppercase',
  color: 'var(--fg3)', marginBottom: 8, display: 'block',
};

const errorStyle = {
  fontFamily: 'var(--font-mono)', fontSize: 11,
  letterSpacing: '.08em', color: '#B00020', marginTop: 6, display: 'block',
};

function ProductCard({ product, onOrder }) {
  const [photo, setPhoto] = useState(0);
  const [size, setSize] = useState(product.sizes ? product.sizes[2] : null);

  return (
    <div style={{ background: 'var(--kc-paper)', border: '2px solid var(--kc-black)' }}>
      {/* Photo */}
      <div style={{ position: 'relative', overflow: 'hidden', cursor: product.photos.length > 1 ? 'pointer' : 'default' }}
           onClick={() => product.photos.length > 1 && setPhoto(p => (p + 1) % product.photos.length)}>
        <div style={{ paddingBottom: '135%', position: 'relative', background: '#f0efec' }}>
          {product.photos.map((src, i) => (
            <img key={i} src={src} alt={product.name}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center top',
                opacity: i === photo ? 1 : 0,
                transition: 'opacity 300ms',
              }} />
          ))}
        </div>
        {product.photos.length > 1 && (
          <div style={{
            position: 'absolute', bottom: 10, left: 0, right: 0,
            display: 'flex', justifyContent: 'center', gap: 6,
          }}>
            {product.photos.map((_, i) => (
              <span key={i} style={{
                width: 6, height: 6, borderRadius: '50%',
                background: i === photo ? 'var(--kc-black)' : 'rgba(10,10,10,0.3)',
              }} />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '20px 20px 24px' }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)',
          lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-.01em',
        }}>{product.name}</div>

        <div style={{ marginTop: 10, display: 'flex', alignItems: 'baseline', gap: 12 }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1,
          }}>€{product.price}</span>
          {product.sizes && (
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '.08em', color: 'var(--fg3)',
            }}>S–XXL</span>
          )}
        </div>

        {product.sizes && (
          <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {product.sizes.map(s => (
              <button key={s} onClick={() => setSize(s)} style={{
                fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 12,
                letterSpacing: '.18em', textTransform: 'uppercase',
                padding: '8px 14px', cursor: 'pointer',
                background: size === s ? 'var(--kc-black)' : 'transparent',
                color: size === s ? 'var(--kc-bone)' : 'var(--kc-black)',
                border: '2px solid var(--kc-black)',
                transition: 'all 120ms',
              }}>{s}</button>
            ))}
          </div>
        )}

        <div style={{ marginTop: 20 }}>
          <Button onClick={() => onOrder(product, size)} style={{ width: '100%', justifyContent: 'center' }}>
            Užsakyti →
          </Button>
        </div>
      </div>
    </div>
  );
}

function Checkout({ item, onClose }) {
  const [state, handleSubmit] = useForm('mrerwpjd');

  if (state.succeeded) {
    return (
      <div style={{
        background: 'var(--kc-black)', color: 'var(--kc-bone)',
        padding: 'clamp(28px, 5vw, 48px)', textAlign: 'center', marginTop: 40,
      }}>
        <Eyebrow inverse>Užsakymas gautas</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 8vw, 80px)',
          margin: '16px 0', lineHeight: .95, textTransform: 'uppercase',
        }}>Ačiū!</h2>
        <Rule width={96} weight={8} inverse />
        <p style={{ marginTop: 20, fontSize: 17, color: 'var(--fg-muted-inverse)', maxWidth: 480, margin: '20px auto 0' }}>
          Susisieksim su jumis ir aptarsime pristatymą.
        </p>
        <div style={{ marginTop: 28 }}>
          <Button variant="inverse" onClick={onClose}>Tęsti apsipirkimą</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      marginTop: 40, padding: 'clamp(24px, 4vw, 40px)',
      border: '2px solid var(--kc-black)', background: 'var(--kc-paper)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <Eyebrow>Užsakymas</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)',
            margin: '8px 0 0', lineHeight: 1, textTransform: 'uppercase',
          }}>{item.product.name}{item.size ? ` · ${item.size}` : ''}</h2>
        </div>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)',
          lineHeight: 1,
        }}>€{item.product.price}</div>
      </div>
      <Rule width={80} weight={6} />

      <form onSubmit={handleSubmit} className="form-grid" style={{ marginTop: 28 }}>
        <input type="hidden" name="Prekė" value={`${item.product.name}${item.size ? ` (${item.size})` : ''} — €${item.product.price}`} />

        <div>
          <label style={labelStyle}>Vardas</label>
          <input style={fieldStyle} name="Vardas" placeholder="Jonas Jonaitis" required />
          <ValidationError field="Vardas" errors={state.errors} style={errorStyle} />
        </div>
        <div>
          <label style={labelStyle}>Telefonas</label>
          <input style={fieldStyle} type="tel" name="Telefonas" placeholder="+370 600 00000" required />
          <ValidationError field="Telefonas" errors={state.errors} style={errorStyle} />
        </div>
        <div>
          <label style={labelStyle}>El. paštas</label>
          <input style={fieldStyle} type="email" name="email" placeholder="jonas@example.lt" required />
          <ValidationError field="email" errors={state.errors} style={errorStyle} />
        </div>
        <div>
          <label style={labelStyle}>Adresas</label>
          <input style={fieldStyle} name="Adresas" placeholder="Gatvė 1, Kaunas" required />
          <ValidationError field="Adresas" errors={state.errors} style={errorStyle} />
        </div>

        <div style={{ gridColumn: '1 / -1', background: 'var(--kc-bone)', padding: '16px 20px', display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ ...labelStyle, marginBottom: 4 }}>Pristatymas</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.04em' }}>Nemokamas</div>
          </div>
          <div>
            <div style={{ ...labelStyle, marginBottom: 4 }}>Apmokėjimas</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.04em' }}>Grynaisiais pristatymo metu</div>
          </div>
        </div>

        <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
          <button type="button" onClick={onClose} style={{
            fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 12,
            letterSpacing: '.18em', textTransform: 'uppercase',
            background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fg3)',
          }}>← Atgal</button>
          <Button type="submit" disabled={state.submitting}>
            {state.submitting ? 'Siunčiama...' : 'Patvirtinti užsakymą'}
          </Button>
        </div>

        <ValidationError errors={state.errors} style={{ ...errorStyle, gridColumn: '1 / -1' }} />
      </form>
    </div>
  );
}

export default function Parduotuve() {
  const [order, setOrder] = useState(null);

  return (
    <Section padded={false}>
      <div className="page-pad">
        <div className="academy-header">
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 8vw, 96px)',
            margin: 0, lineHeight: .95, textTransform: 'uppercase',
          }}>Parduotuvė</h1>
          <Eyebrow>Kaunas City · Oficiali atributika</Eyebrow>
        </div>
        <Rule width={120} weight={8} />

        <div className="shop-grid" style={{ marginTop: 36 }}>
          {products.map(p => (
            <ProductCard key={p.id} product={p} onOrder={(product, size) => setOrder({ product, size })} />
          ))}
        </div>

        {order && (
          <Checkout item={order} onClose={() => setOrder(null)} />
        )}
      </div>
    </Section>
  );
}
