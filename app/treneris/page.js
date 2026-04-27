import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Coach from '@/components/Coach';

export const metadata = {
  title: 'Treneris — Kaunas City FA',
  description: 'Lukas Spalvis — Lietuvos metų futbolininkas 2015, Danijos Superlygos čempionas ir geriausias lygos žaidėjas.',
};

export default function TrenerisPage() {
  return (
    <>
      <Header />
      <main>
        <Coach />
      </main>
      <Footer />
    </>
  );
}
