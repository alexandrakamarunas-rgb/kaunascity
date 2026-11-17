import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Playmakers from '@/components/Playmakers';

export const metadata = {
  title: 'UEFA Playmakers — Kaunas City FA',
  description: 'Nemokama UEFA Playmakers programa, įkvėpta Disney, 5–8 metų mergaitėms. Treniruotės Lapių mokyklos sporto salėje penktadieniais 15:00.',
};

export default function PlaymakersPage() {
  return (
    <>
      <Header />
      <main>
        <Playmakers />
      </main>
      <Footer />
    </>
  );
}
