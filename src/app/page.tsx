import Logoticker from '@/app/sections/logoticker';
import Feacture from '@/app/sections/feacture';
import Control from '@/app/sections/control';
import Tab from "@/app/sections/tab"
import Hero from "@/app/sections/hero"
import Foam from "@/app/sections/foam"
export default function Home() {
  return (
    <>
    <div className='bg-black text-white'>
      <Hero/>
      <Logoticker/>
      <Feacture/>
      <Tab/>
      <Foam/>
      <Control/>
      </div>
    </>
  );
}
