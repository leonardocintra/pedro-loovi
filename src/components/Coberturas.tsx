import Image from "next/image";
import BotaoWhastapp from "./ButtonWhataspp";

const coberturas = [
  {
    titulo: "Roubo de furto",
    subTitulo:
      "Cobrimos até 100% do valor do seu carro na tabela FIPE em casos de roubo e furto",
    imageUrl: "/img/cobertura/roubo.jpg",
  },
  {
    titulo: "Assistência 24h + Carro reserva",
    subTitulo:
      "Assistência 24h completa via 0800 em todo o território nacional, contendo reboque, Hotel para até 5 pessoas, chaveiro. Assistência para pane elétrica, mecânica, na falta de combustível. Táxi ou transporte alternativo, troca de pneus e recarga de bateria",
    imageUrl: "/img/cobertura/guincho.jpg",
  },
  {
    titulo: "Colisão",
    subTitulo:
      "Pagamento integral ou parcial em caso de colisão. E também: alagamento, granizo, queda de árvore e suas consequências.",
    imageUrl: "/img/cobertura/colisao.jpg",
  },
  {
    titulo: "Terceiros",
    subTitulo:
      "Danos materiais e danos corporais. Reparou ou idenização em até R$ 100.000,00",
    imageUrl: "/img/cobertura/terceiros.jpg",
  },
  {
    titulo: "APP",
    subTitulo:
      "Seguro Acidentes Pessoais a Passageiros. Indenização de R$10.000,00 em caso se morte ou invalidez. Reembolso de despesas hospitalares até R$3.000,00",
    imageUrl: "/img/cobertura/app.jpg",
  },
  {
    titulo: "Vidros Completo",
    subTitulo:
      "Trocas e/ou reparos de vidros, retrovisores, para-brisas, lanternas e farois.",
    imageUrl: "/img/cobertura/vidros.jpg",
  },
];

export default function Coberturas() {
  return (
    <div className="bg-white flex justify-center">
      <div className="sm:w-1/2 mb-2">
        <div className="rounded-md px-8">
          <h3 className="text-background text-center text-4xl mt-8 font-mono mb-3">
            Coberturas
          </h3>

          <div className="flex justify-center flex-col items-center">
            <ul role="list" className="divide-y divide-gray-100">
              {coberturas.map((cobertura, index) => (
                <li key={index} className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <Image
                      alt={cobertura.titulo}
                      src={cobertura.imageUrl}
                      width={200}
                      height={200}
                      className="size-16 sm:size-20 flex-none rounded-full bg-gray-50"
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm/6 font-semibold text-gray-900">
                        {cobertura.titulo}
                      </p>
                      <p className="mt-1 text-xs/5 text-gray-500">
                        {cobertura.subTitulo}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="max-w-md flex justify-center pt-8 mb-8">
              <BotaoWhastapp texto="Cotar agora" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
