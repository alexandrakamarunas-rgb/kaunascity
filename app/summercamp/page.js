import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SummerCamp from '@/components/SummerCamp';
export const metadata = { title: 'Summer Camp · Kaunas City FA' };
export default function SummerCampPage() {
  return (
    <>
      <Header />
      <main><SummerCamp /></main>
      <Footer />
    </>
  );
}
