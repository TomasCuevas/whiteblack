import Link from "next/link";

//* interface
import { IArticleMetadata } from "../../interfaces/IArticleMetadata";

interface Props {
  articleMetadata: IArticleMetadata;
}

export const ArticleItem: React.FC<Props> = ({ articleMetadata }) => {
  return (
    <article>
      <Link
        href={`/${articleMetadata.slug}`}
        className="flex w-full gap-2 rounded-md bg-light/50 p-3 duration-300 hover:bg-light"
      >
        <div className="flex max-h-[50px] w-2/12 max-w-[50px] items-center">
          <img
            src={`/images/categories/${articleMetadata.category}.svg`}
            alt={`${articleMetadata.category} logo`}
            className="w-3/4"
          />
        </div>
        <div className="flex w-10/12 flex-col gap-2">
          <h3 className="font-medium text-white">{articleMetadata.title}</h3>
          <time className="font-light text-gray-300">
            {articleMetadata.date}
          </time>
        </div>
      </Link>
    </article>
  );
};
