import Image from "next/image";

const coberturas = [
  {
    titulo: "Roubo de furto",
    subTitulo: "Até 100% do valor do seu carro na FIPE",
    imageUrl: "/img/loovi-seguros.png",
  },
  {
    titulo: "Assistência 24h + Carro reserva",
    subTitulo: "Assistência 24h completa",
    imageUrl: "/img/loovi-seguros.png",
  },
  {
    titulo: "Colisão",
    subTitulo: "colocar uma descricao legal aqui",
    imageUrl: "/img/loovi-seguros.png",
  },
  {
    titulo: "Terceiros",
    subTitulo: "colocar uma descricao legal aqui",
    imageUrl: "/img/loovi-seguros.png",
  },
  {
    titulo: "APP",
    subTitulo: "colocar uma descricao legal aqui",
    imageUrl: "/img/loovi-seguros.png",
  },
  {
    titulo: "Vidros Completo",
    subTitulo: "colocar uma descricao legal aqui",
    imageUrl: "/img/loovi-seguros.png",
  },
];

export default function Coberturas() {
  return (
    <div className="bg-white">
      <div>
        <div className="rounded-md px-8">
          <h3 className="text-background text-center text-4xl">Coberturas</h3>

          <ul role="list" className="divide-y divide-gray-100">
            {coberturas.map((cobertura, index) => (
              <li key={index} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <Image
                    alt={cobertura.titulo}
                    src={cobertura.imageUrl}
                    width={200}
                    height={200}
                    className="size-12 flex-none rounded-full bg-gray-50"
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">
                      {cobertura.titulo}
                    </p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">
                      {cobertura.subTitulo}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
