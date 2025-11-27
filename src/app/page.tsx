import BotaoWhastapp from "@/components/ButtonWhataspp";
import Coberturas from "@/components/Coberturas";
import { FaCarCrash } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dark Hero Section */}
      <header className="bg-[#292B33] text-white py-12 sm:py-20 rounded-b-[3rem] shadow-xl relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center gap-3 text-4xl sm:text-6xl font-bold text-[#25d366]">
              <FaCarCrash />
              <h1 className="text-white tracking-tight">
                Diniz Executivo <span className="text-[#25d366]">Loovi</span>
              </h1>
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl font-light">
              O seguro auto mais rápido e querido do Brasil!
            </p>
          </div>
        </div>
        
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#25d366] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-[#ff0066] rounded-full opacity-5 blur-3xl"></div>
      </header>

      <main className="-mt-10 container mx-auto px-4 pb-20">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-12 max-w-4xl mx-auto relative z-20 border border-gray-100">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#292B33]">
              Proteção completa e 100% digital
            </h2>
            <p className="text-lg text-gray-600">
              Contrate agora comigo em 5 minutos. Sem burocracia.
            </p>
            
            <div className="py-8">
              <div className="inline-block transform hover:scale-105 transition-transform duration-300">
                <BotaoWhastapp texto="Falar no WhatsApp" />
              </div>
              <p className="mt-4 text-sm text-gray-400 font-medium">
                Tire suas dúvidas na hora!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Coberturas />
        </div>

        <div className="mt-16 text-center">
           <h2 className="text-3xl font-bold text-[#292B33] mb-8">
            Estamos te esperando!
          </h2>
          <div className="inline-block transform hover:scale-105 transition-transform duration-300">
            <BotaoWhastapp texto="Solicitar Cotação" />
          </div>
        </div>
      </main>
    </div>
  );
}
