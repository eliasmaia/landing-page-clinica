import Image from "next/image";

//Defining a component's props types in Typescript
interface ServicoCardProps {
  imagemUrl: string;
  altText: string;
  titulo: string;
  descricao: string;
}

export default function ServicoCard({
  imagemUrl,
  altText,
  titulo,
  descricao,
}: ServicoCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between">
      <div>
        <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={imagemUrl}
            alt={altText}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{titulo}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{descricao}</p>
      </div>
      <a
        href="#contato"
        className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
      >
        Saiba mais <span className="ml-1">→</span>
      </a>
    </div>
  );
}