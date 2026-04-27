import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Academy from '@/components/Academy';

export const metadata = {
  title: 'Akademija — Kaunas City FA',
  description: 'Futbolo akademija vaikams nuo 5 iki 12 metų. Dvi grupės: 5–8 ir 9–12. Treniruotės Lapių mokyklos stadione.',
};

export default function AkademijaPage() {
  return (
    <>
      <Header />
      <main>
        <Academy />
      </main>
      <Footer />
    </>
  );
}
