import { useContext } from "react";

//* icons *//
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

//* components *//
import { ArticleItem } from ".";

//* context *//
import { UIContext } from "../../context";

//* interfaces *//
import { IArticleMetadata } from "../../interfaces/IArticleMetadata";

interface Props {
  allArticleFilesMetadata: IArticleMetadata[];
}

export const MainArticlesFeed: React.FC<Props> = ({
  allArticleFilesMetadata,
}) => {
  const { feedPage, setFeedPage } = useContext(UIContext);

  return (
    <section className="flex flex-col gap-1 rounded-md">
      <h3 className="fo/nt-medium text-xl text-orange">Últimos artículos</h3>
      {allArticleFilesMetadata
        .slice(feedPage === 1 ? 0 : (feedPage - 1) * 5, feedPage * 5)
        .map((article) => (
          <ArticleItem articleMetadata={article} key={article.slug} />
        ))}
      <div className="flex gap-3">
        {feedPage > 1 ? (
          <button
            onClick={() => setFeedPage((prev) => prev - 1)}
            className="group mr-auto flex items-center"
          >
            <MdOutlineNavigateBefore className="text-5xl text-orange/70 duration-300 group-hover:text-orange" />
            <span className="text-xs text-orange/70 duration-300 group-hover:text-orange xs:text-sm">
              artículos más recientes
            </span>
          </button>
        ) : null}
        {feedPage * 5 < allArticleFilesMetadata.length ? (
          <button
            onClick={() => setFeedPage((prev) => prev + 1)}
            className="group ml-auto flex items-center"
          >
            <span className="text-xs text-orange/70 duration-300 group-hover:text-orange xs:text-sm">
              artículos anteriores
            </span>
            <MdOutlineNavigateNext className="text-5xl text-orange/70 duration-300 group-hover:text-orange" />
          </button>
        ) : null}
      </div>
    </section>
  );
};
