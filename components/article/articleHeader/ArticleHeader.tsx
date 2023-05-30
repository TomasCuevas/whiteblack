import Link from "next/link";

//* icon *//
import { RiTimeLine } from "react-icons/ri";

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
        <div className="flex flex-col gap-4">
          <h1 className="font-merriweather text-3xl font-semibold text-white md:text-5xl">
            {metadata.title}
          </h1>
          <time className="flex items-center gap-1 font-roboto text-white">
            <RiTimeLine className="mb-[2px]" />
            <span className="text-sm font-light">
              {metadata.readingTime.minutes.toFixed(0)} minutos de lectura
            </span>
          </time>
        </div>
        <div className="mt-3 mb-1 flex items-center gap-5">
          <Link href={metadata.link} target="_blank" style={{ border: "none" }}>
            <h4 className="border-purple font-merriweather text-base font-bold text-purple underline underline-offset-2 hover:underline md:text-lg">
              {metadata.author}
            </h4>
          </Link>
          <time className="font-inter text-base font-light text-white">
            {new Date(metadata.date).toLocaleString(undefined, {
              day: "2-digit",
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
