import Link from "next/link";
import { FaCarCrash } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="p-2">
      <main className="mt-1 sm:mt-8">
        <div className="flex space-x-4 justify-center">
          <h1 className="text-7xl font-sans font-bold flex gap-2">
            Diniz Executivo Loovi
          </h1>
          <div className="text-3xl sm:text-7xl">
            <FaCarCrash />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-xl">
            <div className="bg-slate-100 rounded-xl px-4 sm:px-10 mx-4 sm:mx-0 py-10 mt-8 text-black shadow-2xl">
              <h2 className="text-3xl">
                O seguro auto mais rápido e querido do Brasil!
              </h2>
              <h3 className="mt-2 font-extralight text-slate-800">
                Contrate agora comigo em 5 minutos. Completo e 100% digital.
              </h3>
              <h3>Tiro todas as suas duvidas na hora!</h3>

              <div className="py-3 flex flex-col items-center">
                <h2 className="text-3xl text-black mt-8 text-center">
                  Estamos te esperando!
                </h2>

                <div className="flex justify-between text-white mt-7 space-x-2 sm:space-x-8">
                  <div className="bg-background p-3 rounded-full text-3xl">
                    <Link
                      className="flex items-center space-x-2"
                      target="_blank"
                      href={`https://wa.me/5516982102169?text=Ola Pedro! Gostaria de mais informações sobre o seguro`}
                    >
                      <div>
                        <FaWhatsapp className="" />
                      </div>
                      <div>WhastApp</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
