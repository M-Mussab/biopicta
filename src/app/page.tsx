import Logoticker from '@/app/sections/logoticker';
import Navbar from '@/app/sections/navbar';
import Feacture from '@/app/sections/feacture';
import Control from '@/app/sections/control';
import Footer from './sections/footer';
import Tab from "@/app/sections/tab"
export default function Home() {
  return (
    <>
      <Navbar/>
      <Logoticker/>
      <Feacture/>
      <Tab/>
      <Control/>
      <Footer/>
    </>
  );
}
