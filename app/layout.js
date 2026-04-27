import './globals.css';

export const metadata = {
  title: 'Kaunas City FA',
  description: 'Futbolo akademija vaikams nuo 5 iki 12 metų ir suaugusiųjų komanda III lygoje. Treneris — Lukas Spalvis.',
  icons: { icon: '/assets/logo-primary.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt">
      <body>{children}</body>
    </html>
  );
}
