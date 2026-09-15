import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Treniruotes from '@/components/Treniruotes';

export const metadata = {
  title: 'Treniruotės — Kaunas City FA',
  description: 'Treniruočių lokacijos, tvarkaraštis ir laikai. Lapiai, Panemunė, Kauno kolegija.',
};

export default function TreniruotesPage() {
  return (
    <>
      <Header />
      <main>
        <Treniruotes />
      </main>
      <Footer />
    </>
  );
}
