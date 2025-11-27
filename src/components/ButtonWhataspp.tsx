import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

type BotaoWhastappProps = {
  texto: string;
};

export default function BotaoWhastapp(props: BotaoWhastappProps) {
  return (
    <div className="bg-[#25d366] hover:bg-[#20bd5a] transition-colors p-3 rounded-full text-3xl shadow-lg cursor-pointer">
      <Link
        className="flex items-center space-x-2 px-5 font-bold text-[#292B33]"
        target="_blank"
        href={`https://wa.me/5516982102169?text=Ola Pedro! Gostaria de mais informações sobre o seguro`}
      >
        <div>
          <FaWhatsapp />
        </div>
        <div>{props.texto}</div>
      </Link>
    </div>
  );
}
