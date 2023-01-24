//* components *//
import { ArticleItem } from "./";

//* interfaces *//
import { IArticleMetadata } from "../../interfaces/IArticleMetadata";

interface Props {
  allFilesMetadata: IArticleMetadata[];
}

export const MainArticlesFeed: React.FC<Props> = ({ allFilesMetadata }) => {
  return (
    <section className="flex flex-col gap-1 rounded-md">
      <h3 className="text-xl font-medium text-orange">Últimos artículos</h3>
      {allFilesMetadata.map((article) => (
        <ArticleItem articleMetadata={article} key={article.slug} />
      ))}
    </section>
  );
};
