import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

//* icon *//
import { RiTimeLine } from "react-icons/ri";

//* interfaces *//
import { IArticleMetadata } from "@/interfaces";

interface Props {
  articleMetadata: IArticleMetadata;
}
export const ArticleCardWithImage: React.FC<Props> = ({ articleMetadata }) => {
  return (
    <article className="group overflow-hidden rounded-md bg-purple/10 transition-all duration-200 hover:z-10 hover:translate-y-1 hover:overflow-visible hover:bg-purple/20">
      <Link href={`/${articleMetadata.slug}`}>
        <div className="flex h-full flex-col">
          <div>
            <img
              src={articleMetadata.image}
              alt="article image"
              className="aspect-video duration-200 group-hover:scale-[115%]"
            />
          </div>
          <div className="flex flex-col gap-3 p-3">
            <header className="flex flex-col gap-1">
              <h3 className="font-merriweather font-bold text-white">
                {articleMetadata.title}
              </h3>
              <time className="flex items-center gap-1 text-white">
                <RiTimeLine />
                <span className="text-sm font-light">
                  {articleMetadata.readingTime.minutes.toFixed(0)} minutos de
                  lectura
                </span>
              </time>
            </header>
            <div
              id="article__card"
              className="block max-h-16 overflow-hidden text-ellipsis font-inter text-[13px] font-light leading-tight text-gray-400 group-hover:text-gray-300"
            >
              <MDXRemote {...(articleMetadata.cardDescription as any)} />
            </div>
            <div className="ml-auto">
              <time className="text-gray-30 rounded-xl bg-purple/20 px-3 py-[1px] font-roboto text-sm font-light text-white">
                {new Date(articleMetadata.date).toLocaleDateString(undefined, {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
