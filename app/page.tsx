import Image from "next/image"
import { Montserrat } from 'next/font/google'
import Activities from "./components/Activities";
import ModalHandler from "./components/ModalHandler";
import RegisterForm from "./components/RegisterForm";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=" flex-1 bg-gradient-to-b from-black  to-[#3961AA] to-40% ">
      <h1 className={`${montserrat.className} text-white text-center font-semibold pt-4 mb-4`}>TROUVER UN ENTREPENEUR PÉI PAR DOMAINES</h1>
      <div className="w-full p-4">

        <Activities/>
      </div>

      <ModalHandler/>
    </main>
  );
}
