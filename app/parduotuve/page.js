import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Parduotuve from '@/components/Parduotuve';
export const metadata = { title: 'Parduotuvė · Kaunas City FA' };
export default function ParduotuvePage() {
  return (
    <>
      <Header />
      <main><Parduotuve /></main>
      <Footer />
    </>
  );
}
