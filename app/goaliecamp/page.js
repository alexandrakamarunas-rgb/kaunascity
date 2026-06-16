import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoalieCamp from '@/components/GoalieCamp';
export const metadata = { title: 'Vartininkų stovykla · Kaunas City FA' };
export default function GoalieCampPage() {
  return (
    <>
      <Header />
      <main><GoalieCamp /></main>
      <Footer />
    </>
  );
}
