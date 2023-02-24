import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

//* styles *//
import "highlight.js/styles/atom-one-dark.css";

//* interface
import { IArticleMetadata } from "../../interfaces/IArticleMetadata";

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
              })}
            </time>
            <h3 className="font-roboto text-sm font-black text-white xs:text-base sm:text-lg md:text-xl">
              {articleMetadata.title}
            </h3>
            <div className="hidden max-h-20 overflow-hidden font-merriweather text-sm font-light text-gray-400 group-hover:text-gray-300 sm:block">
              <MDXRemote {...(articleMetadata.cardDescription as any)} />
            </div>
            <div>
              <span className="rounded-md bg-purple/10 px-4 py-1 font-merriweather text-xs font-light text-white duration-100 group-hover:bg-purple/30">
                {articleMetadata.category}
              </span>
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
