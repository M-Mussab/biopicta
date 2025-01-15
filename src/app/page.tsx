import Logoticker from '@/app/sections/logoticker';
import Navbar from '@/app/sections/navbar';
import Feacture from '@/app/sections/feacture';
import Control from '@/app/sections/control';
import Footer from './sections/footer';
import Tab from "@/app/sections/tab"
import Hero from "@/app/sections/hero"
export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Logoticker/>
      <Feacture/>
      <Tab/>
      <Control/>
      <Footer/>
    </>
  );
}
