import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Kaunas City FA',
  description: 'Futbolo akademija vaikams nuo 5 iki 12 metų ir suaugusiųjų komanda III lygoje. Treneris — Lukas Spalvis.',
  icons: { icon: '/assets/logo-primary.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1776715933649815');fbq('track','PageView');` }} />
        <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" src="https://www.facebook.com/tr?id=1776715933649815&ev=PageView&noscript=1"/>` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
