//* interface
import Link from "next/link";
import { IArticleMetadata } from "../../interfaces/IArticleMetadata";

interface Props {
  articleMetadata: IArticleMetadata;
}

export const ArticleItem: React.FC<Props> = ({ articleMetadata }) => {
  return (
    <article>
      <Link
        href={`/${articleMetadata.slug}`}
        className="flex w-full gap-2 rounded-md bg-white/10 p-3"
      >
        <div className="flex w-2/12 items-center">
          <img
            src={`/images/categories/${articleMetadata.category}.svg`}
            alt={`${articleMetadata.category} logo`}
            className="w-3/4"
          />
        </div>
        <div className="flex w-10/12 flex-col gap-2">
          <h2 className="font-medium text-white">{articleMetadata.title}</h2>
          <time className="font-light text-gray-200">
            {articleMetadata.date}
          </time>
        </div>
      </Link>
    </article>
  );
};
