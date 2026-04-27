import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Team from '@/components/Team';

export const metadata = {
  title: 'Komanda — Kaunas City FA',
  description: 'Kaunas City FA suaugusiųjų komanda, žaidžianti KAFF–MAFF III lygoje.',
};

export default function KomandaPage() {
  return (
    <>
      <Header />
      <main>
        <Team />
      </main>
      <Footer />
    </>
  );
}
