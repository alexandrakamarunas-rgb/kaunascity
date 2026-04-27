import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Register from '@/components/Register';

export const metadata = {
  title: 'Registracija — Kaunas City FA',
  description: 'Užregistruok savo vaiką į Kaunas City futbolo akademiją. Pirma treniruotė nemokama.',
};

export default function RegistracijaPage() {
  return (
    <>
      <Header />
      <main>
        <Register />
      </main>
      <Footer />
    </>
  );
}
