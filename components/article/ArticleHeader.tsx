import Link from "next/link";

//* interface *//
import { IArticleMetadata } from "../../interfaces/IArticleMetadata";

interface Props {
  metadata: IArticleMetadata;
}

export const ArticleHeader: React.FC<Props> = ({ metadata }) => {
  return (
    <header className="relative mb-10 w-full">
      <picture>
        <img
          src={`/images/categories/${metadata.category}.svg`}
          alt={`${metadata.category} logo`}
          className="absolute right-0 -z-10 h-[200px] w-[200px] opacity-20"
        />
      </picture>
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-semibold text-white">{metadata.title}</h1>
        <div className="mt-3 mb-1 flex items-center gap-4">
          <Link href={metadata.link} target="_blank" style={{ border: "none" }}>
            <h4 className="border-purple text-purple underline-offset-2 hover:underline md:text-lg">
              {metadata.author}
            </h4>
          </Link>
          <time className="text-sm font-light text-purple/80">
            {new Date(metadata.date).toLocaleString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </div>
    </header>
  );
};
