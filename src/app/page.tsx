import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2">
      <main className="flex justify-center mt-1 sm:mt-8">
        <div className="">
          <h1 className="text-7xl">Diniz Executivo Loovi</h1>

          <div className="bg-slate-100 rounded-xl p-10 mt-8 text-black">
            <h2 className="text-3xl">
              O seguro auto mais rápido e querido do Brasil!
            </h2>
            <h3 className="mt-2 font-extralight text-slate-800">
              Contrate agora comigo em 5 minutos. Completo e 100% digital.
            </h3>
            <h3>Tiro todas as suas duvidas na hora!</h3>

            <div className="py-3 flex flex-col items-center">
              <h2 className="text-3xl text-black mt-8 text-center">
                O que você procura?
              </h2>

              <div className="flex justify-between text-white mt-7 space-x-8">
                <div className="bg-background p-3 rounded-full text-2xl">
                  <Link href={"/"}>WhastApp</Link>
                </div>
                <div className="bg-background p-3 rounded-full text-2xl">
                  <Link href={"/"}>Instagram</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
