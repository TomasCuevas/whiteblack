import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

//* styles *//
import "highlight.js/styles/atom-one-dark.css";

//* interfaces *//
import { IArticleMetadata } from "@/interfaces";

interface Props {
  articleMetadata: IArticleMetadata;
}

export const ArticleCard: React.FC<Props> = ({ articleMetadata }) => {
  return (
    <article className="group w-full">
      <Link
        href={`/${articleMetadata.slug}`}
        className="flex items-center gap-4 rounded-md bg-light/50 p-4 duration-100 hover:bg-light"
      >
        <div className="flex w-full">
          <div className="flex w-full flex-col gap-1">
            <time className="font-merriweather text-sm font-light text-gray-300">
              {new Date(articleMetadata.date).toLocaleDateString(undefined, {
                day: "2-digit",
                month: "short",
                year: "numeric",
                timeZone: "UTC",
              })}
            </time>
            <h3 className="font-merriweather text-sm font-black text-white xs:text-base sm:text-lg md:text-xl">
              {articleMetadata.title}
            </h3>
            <div
              id="article__card"
              className="hidden max-h-20 overflow-hidden text-ellipsis font-inter text-[15px] font-light leading-tight text-gray-400 group-hover:text-gray-300 sm:block"
            >
              <MDXRemote {...(articleMetadata.cardDescription as any)} />
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {articleMetadata.tags.map((tag) => (
                <span
                  key={`${articleMetadata.slug} ${tag}`}
                  className="rounded-md bg-purple/10 px-4 py-1 font-inter text-xs font-light text-white transition-all duration-500 group-hover:bg-purple/30 group-hover:shadow-none sm:bg-transparent sm:text-sm sm:shadow-inner sm:shadow-black/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="ml-auto flex w-20 items-center justify-center md:w-24">
          <img
            src={`/images/categories/${articleMetadata.category}.svg`}
            alt={`${articleMetadata.category} logo`}
            className="w-full"
          />
        </div>
      </Link>
    </article>
  );
};
