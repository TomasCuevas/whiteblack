import Link from "next/link";

//* ICON *//
import { RiTimeLine } from "react-icons/ri";

//* INTERFACES *//
import { IArticleMetadata } from "@/interfaces";

interface Props {
  metadata: IArticleMetadata;
}

export const ArticleHeader: React.FC<Props> = ({ metadata }) => {
  return (
    <header className="relative mb-10 mt-5 w-full">
      <picture>
        <img
          src={`/images/categories/${metadata.category}.svg`}
          alt={`${metadata.category} logo`}
          className="absolute right-0 -z-10 w-[220px] opacity-20"
        />
      </picture>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-3">
          <h1 className="font-merriweather text-3xl font-semibold text-white md:text-5xl">
            {metadata.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            {metadata.tags?.map((tag) => (
              <span
                key={`${metadata.slug} ${tag}`}
                className="rounded-md font-inter text-[10px] font-black uppercase text-gray-300 sm:text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-[6px]">
            <Link
              href={metadata.link}
              target="_blank"
              style={{ border: "none" }}
            >
              <h4 className="font-merriweather text-sm font-black text-purple underline-offset-2 hover:underline md:text-base">
                {metadata.author}
              </h4>
            </Link>
            <span className="font-inter text-xs text-white">/</span>
            <time className="font-inter text-sm text-white">
              {new Date(metadata.date).toLocaleString(undefined, {
                day: "2-digit",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              })}
            </time>
          </div>
          <div>
            <time className="flex items-center gap-1 font-roboto text-white">
              <RiTimeLine className="mb-[2px]" />
              <span className="text-sm font-bold">
                {metadata.readingTime.minutes.toFixed(0)} minutos de lectura
              </span>
            </time>
          </div>
        </div>
      </div>
    </header>
  );
};
