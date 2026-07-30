import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Free from '@/components/Free';
export const metadata = { title: 'Nemokamas mėnuo · Kaunas City FA' };
export default function FreePage() {
  return (
    <>
      <Header />
      <main><Free /></main>
      <Footer />
    </>
  );
}
