import BotaoWhastapp from "@/components/ButtonWhataspp";
import Coberturas from "@/components/Coberturas";
import { FaCarCrash } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <main className="mt-1 sm:mt-8">
        <div className="flex space-x-4 justify-center px-3">
          <h1 className="text-7xl font-sans font-bold flex gap-2">
            Diniz Executivo Loovi
          </h1>
          <div className="text-3xl sm:text-7xl">
            <FaCarCrash />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-slate-100 rounded-xl px-4 sm:px-10 mx-4 sm:mx-0 py-10 mt-8 text-black shadow-2xl">
            <h2 className="text-3xl">
              O seguro auto mais rápido e querido do Brasil!
            </h2>
            <h3 className="mt-2 font-extralight text-slate-700">
              Contrate agora comigo em 5 minutos. Completo e 100% digital.
            </h3>
            <h3 className="mt-2 text-background font-bold">
              Tire suas duvidas na hora!
            </h3>

            <div className="py-3 flex flex-col items-center">
              <h2 className="text-3xl text-black mt-8 text-center">
                Estamos te esperando!
              </h2>

              <div className="flex justify-between text-white mt-7 space-x-2 sm:space-x-8">
                <BotaoWhastapp texto="Whatsapp" />
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8" />

        <Coberturas />
      </main>
    </div>
  );
}
