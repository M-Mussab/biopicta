import Logoticker from '@/app/sections/logoticker';
import Navbar from '@/app/sections/navbar';
import Feacture from '@/app/sections/feacture';
import Control from '@/app/sections/control';
import Footer from './sections/footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <Logoticker />
      <Feacture />
      <Control />
      <Footer />
    </>
  );
}
