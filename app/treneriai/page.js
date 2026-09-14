import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Treneriai from '@/components/Treneriai';
export const metadata = { title: 'Treneriai — Kaunas City FA' };
export default function TreneriaiPage() {
  return (
    <>
      <Header />
      <main><Treneriai /></main>
      <Footer />
    </>
  );
}
