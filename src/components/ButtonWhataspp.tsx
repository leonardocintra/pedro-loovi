import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

type BotaoWhastappProps = {
  texto: string;
};

export default function BotaoWhastapp(props: BotaoWhastappProps) {
  return (
    <div className="bg-background p-3 rounded-full text-3xl">
      <Link
        className="flex items-center space-x-2 px-5"
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
