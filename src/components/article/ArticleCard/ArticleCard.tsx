import { useEffect, useState } from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { useTheme } from "next-themes";

//* STYLES *//
import "highlight.js/styles/atom-one-dark.css";

//* INTERFACES *//
import { IArticleMetadata } from "@/interfaces";

interface Props {
  articleMetadata: IArticleMetadata;
}

export const ArticleCard: React.FC<Props> = ({ articleMetadata }) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<any>("light");

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <article className="group w-full">
      <Link
        href={`/${articleMetadata.slug}`}
        className="relative flex items-center gap-4 overflow-hidden rounded-md group-hover:outline-double group-hover:outline-dark dark:group-hover:outline-white duration-75"
      >
        <div className="z-10 flex w-full bg-slate-400/20 dark:bg-light/30 p-4 hover:bg-purple/30 dark:hover:bg-purple/20">
          <div className="flex w-full flex-col gap-1">
            <time className="mb-1 font-merriweather text-sm font-black text-gray-700 dark:text-gray-300">
              {new Date(articleMetadata.date).toLocaleDateString(undefined, {
                day: "2-digit",
                month: "short",
                year: "numeric",
                timeZone: "UTC",
              })}
            </time>
            <h3 className="font-merriweather text-base font-black text-dark dark:text-white xs:text-base sm:text-lg md:text-2xl">
              {articleMetadata.title}
            </h3>
            <div
              className={`${
                currentTheme === "dark" ? "article__card-dark" : "article__card"
              } mt-2 max-h-[80px] overflow-hidden font-inter text-base font-light leading-tight sm:max-h-[93px] sm:text-[15px] md:max-h-[77px] lg:max-h-[100px] lg:leading-5`}
            >
              <MDXRemote {...(articleMetadata.cardDescription as any)} />
            </div>
            <div className="mt-3 flex flex-wrap gap-3 xs:gap-4 md:gap-5">
              {articleMetadata.tags?.map((tag) => (
                <span
                  key={`${articleMetadata.slug} ${tag}`}
                  className="font-inter text-[11px] font-black uppercase text-gray-800 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute right-0 z-0 flex w-[60%] rotate-[20deg] items-center justify-center opacity-60 dark:opacity-30 sm:w-[70%] lg:w-[60%] xl:w-[30%]">
          <img
            src={`/images/categories/${articleMetadata.category}.svg`}
            alt={`${articleMetadata.category} logo`}
            className="w-full object-cover"
          />
        </div>
      </Link>
    </article>
  );
};
