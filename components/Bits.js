'use client';
import { useState } from 'react';

const LT_DIACRITIC = /[ąčęėįšųūžĄČĘĖĮŠŲŪŽ]/;

export const LT = ({ children, style }) => {
  const text = Array.isArray(children) ? children.join('') : String(children ?? '');
  const needsFallback = LT_DIACRITIC.test(text);
  return (
    <span style={{
      fontFamily: needsFallback ? 'var(--font-headline)' : 'inherit',
      fontWeight: needsFallback ? 700 : 'inherit',
      ...style,
    }}>{children}</span>
  );
};

export const Eyebrow = ({ children, inverse }) => (
  <div style={{
    fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 12,
    letterSpacing: '.22em', textTransform: 'uppercase',
    color: inverse ? 'var(--fg-muted-inverse)' : 'var(--fg3)',
  }}>{children}</div>
);

export const Rule = ({ width = 64, weight = 4, inverse }) => (
  <div style={{
    height: weight, width, background: inverse ? 'var(--kc-bone)' : 'var(--kc-black)',
    flexShrink: 0, marginTop: 16, marginBottom: 4,
  }} />
);

export const Button = ({ children, variant = 'primary', size = 'md', onClick, disabled, type = 'button' }) => {
  const isPrimary = variant === 'primary';
  const isInverse = variant === 'inverse';
  const isGhost = variant === 'ghost';
  const padding = size === 'sm' ? '8px 14px' : size === 'lg' ? '18px 28px' : '14px 22px';
  const fontSize = size === 'sm' ? 11 : size === 'lg' ? 16 : 14;
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);
  const bg = isPrimary ? (hover ? 'var(--kc-bone)' : 'var(--kc-black)')
           : isInverse ? (hover ? 'var(--kc-black)' : 'var(--kc-bone)')
           : (hover ? 'var(--kc-black)' : 'transparent');
  const color = isPrimary ? (hover ? 'var(--kc-black)' : 'var(--kc-bone)')
              : isInverse ? (hover ? 'var(--kc-bone)' : 'var(--kc-black)')
              : (hover ? 'var(--kc-bone)' : 'var(--kc-black)');
  const shadow = isGhost ? 'none' : (pressed ? '4px 4px 0 var(--kc-black)' : 'var(--shadow-hard)');
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize,
        letterSpacing: '.16em', textTransform: 'uppercase',
        padding, border: '2px solid var(--kc-black)',
        background: bg, color,
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxShadow: shadow,
        transform: pressed ? 'translate(2px, 2px)' : 'none',
        transition: 'transform 120ms var(--ease-snap), box-shadow 120ms var(--ease-snap), background 120ms, color 120ms',
        opacity: disabled ? 0.3 : 1,
      }}>{children}</button>
  );
};

export const Badge = ({ children, tone = 'solid' }) => {
  const styles = {
    solid: { background: 'var(--kc-black)', color: 'var(--kc-bone)', border: '2px solid var(--kc-black)' },
    bone:  { background: 'var(--kc-bone)',  color: 'var(--kc-black)', border: '2px solid var(--kc-black)' },
    fog:   { background: 'var(--kc-fog)',   color: 'var(--kc-black)', border: '2px solid var(--kc-black)' },
  }[tone];
  return (
    <span style={{
      ...styles,
      fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 11,
      letterSpacing: '.16em', textTransform: 'uppercase',
      padding: '6px 10px', display: 'inline-flex', alignItems: 'center', gap: 8, lineHeight: 1,
    }}>{children}</span>
  );
};

export const Section = ({ children, dark, padded = true, style }) => (
  <section style={{
    background: dark ? 'var(--kc-black)' : 'var(--kc-bone)',
    color: dark ? 'var(--fg-inverse)' : 'var(--fg1)',
    padding: padded ? 'var(--kc-pad-y) var(--kc-pad-x)' : 0,
    ...style,
  }}>{children}</section>
);

export const Photo = ({ src, alt = '', ratio = '4 / 3', caption, style, treatment = 'mono', objectPosition = '50% 50%' }) => {
  const filter = treatment === 'mono'
    ? 'grayscale(1) contrast(1.05) brightness(0.98)'
    : treatment === 'duotone'
    ? 'grayscale(1) contrast(1.1) brightness(0.92)'
    : 'none';
  return (
    <div style={{
      position: 'relative', aspectRatio: ratio,
      border: '2px solid var(--kc-black)',
      background: 'var(--kc-black)',
      overflow: 'hidden',
      ...style,
    }}>
      <img src={src} alt={alt} style={{
        width: '100%', height: '100%', objectFit: 'cover',
        objectPosition, display: 'block', filter,
      }} />
      {caption && (
        <span style={{
          position: 'absolute', left: 14, bottom: 14,
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em',
          textTransform: 'uppercase', color: 'var(--kc-black)',
          background: 'var(--kc-bone)', padding: '4px 8px',
          border: '2px solid var(--kc-black)',
        }}>{caption}</span>
      )}
    </div>
  );
};
