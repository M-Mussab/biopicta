import Logoticker from "@/app/sections/logoticker"
import Navbar from "@/app/sections/navbar"
import Feacture from "@/app/sections/feacture"
export default function Home() {
  return (
    <>
<div  className="container ">
    <Navbar/>
    <Logoticker/>
    <Feacture/>
    </div>
    </>
  );
}

