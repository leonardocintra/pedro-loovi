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
    <div className="flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="rounded-md px-4 sm:px-8">
          <h3 className="text-[#292B33] text-center text-3xl sm:text-4xl mt-8 font-bold mb-10">
            Coberturas
          </h3>

          <div className="flex justify-center flex-col items-center">
            <ul role="list" className="divide-y divide-gray-200 w-full">
              {coberturas.map((cobertura, index) => (
                <li key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 items-start sm:items-center">
                  <div className="flex-shrink-0">
                    <Image
                      alt={cobertura.titulo}
                      src={cobertura.imageUrl}
                      width={200}
                      height={200}
                      className="size-16 sm:size-20 rounded-2xl object-cover shadow-md"
                    />
                  </div>
                  <div className="min-w-0 flex-auto">
                    <p className="text-lg font-bold text-[#292B33]">
                      {cobertura.titulo}
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-gray-600 leading-relaxed">
                      {cobertura.subTitulo}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
