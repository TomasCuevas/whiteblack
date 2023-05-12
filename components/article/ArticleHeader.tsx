import Link from "next/link";

//* interfaces *//
import { IArticleMetadata } from "@/interfaces";

interface Props {
  metadata: IArticleMetadata;
}

export const ArticleHeader: React.FC<Props> = ({ metadata }) => {
  return (
    <header className="relative mb-10 w-full sm:mt-5">
      <picture>
        <img
          src={`/images/categories/${metadata.category}.svg`}
          alt={`${metadata.category} logo`}
          className="absolute right-0 -z-10 w-[220px] opacity-20"
        />
      </picture>
      <div className="flex flex-col gap-1">
        <h1 className="font-merriweather text-4xl font-semibold text-white">
          {metadata.title}
        </h1>
        <div className="mt-3 mb-1 flex items-center gap-4">
          <Link href={metadata.link} target="_blank" style={{ border: "none" }}>
            <h4 className="border-purple font-merriweather text-base font-bold text-purple underline underline-offset-2 hover:underline md:text-lg">
              {metadata.author}
            </h4>
          </Link>
          <time className="font-inter text-base font-normal text-purple/80">
            {new Date(metadata.date).toLocaleString(undefined, {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
        </div>
      </div>
    </header>
  );
};
