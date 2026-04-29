import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Kontaktai from '@/components/Kontaktai';
export const metadata = { title: 'Kontaktai · Kaunas City FA' };
export default function KontaktaiPage() {
  return (
    <>
      <Header />
      <main><Kontaktai /></main>
      <Footer />
    </>
  );
}
