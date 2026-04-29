import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Elite from '@/components/Elite';
export const metadata = { title: 'Kaunas City Elite · Kaunas City FA' };
export default function ElitePage() {
  return (
    <>
      <Header />
      <main><Elite /></main>
      <Footer />
    </>
  );
}
