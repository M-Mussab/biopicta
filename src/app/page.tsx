import Logoticker from "@/app/sections/logoticker"
import Navbar from "@/app/sections/navbar"
import Feacture from "@/app/sections/feacture"
import Control from "@/app/sections/control"
export default function Home() {
  return (
    <>
<div  >
    <Navbar/>
    <Logoticker/>
    <Feacture/>
    <hr />
<Control/>
    </div>
    </>
  );
}

