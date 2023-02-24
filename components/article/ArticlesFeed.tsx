import { useContext } from "react";

//* icons *//
import { RiArrowDropLeftFill, RiArrowDropRightFill } from "react-icons/ri";

//* components *//
import { ArticleCard } from "./";
import { SectionTitle } from "../ui";

//* context *//
import { UIContext } from "../../context";

//* interfaces *//
import { IArticleMetadata } from "../../interfaces/IArticleMetadata";

interface Props {
  allArticleFilesMetadata: IArticleMetadata[];
  title: string;
}

export const ArticlesFeed: React.FC<Props> = ({
  allArticleFilesMetadata,
  title,
}) => {
  const { feedPage, setFeedPage } = useContext(UIContext);

  return (
    <div>
      <SectionTitle title={title} />
      <section className="mt-3 flex w-full flex-col gap-2">
        {allArticleFilesMetadata
          .slice(feedPage === 1 ? 0 : (feedPage - 1) * 4, feedPage * 4)
          .map((article) => (
            <ArticleCard articleMetadata={article} key={article.slug} />
          ))}
        <div className="flex gap-3">
          {feedPage > 1 ? (
            <button
              onClick={() => setFeedPage((prev) => prev - 1)}
              className="group mr-auto flex items-center"
            >
              <RiArrowDropLeftFill className="text-4xl text-purple/70 duration-300 group-hover:text-purple" />
              <span className="font-merriweather text-xs text-purple/70 duration-300 group-hover:text-purple xs:text-sm">
                artículos más recientes
              </span>
            </button>
          ) : null}
          {feedPage * 4 < allArticleFilesMetadata.length ? (
            <button
              onClick={() => setFeedPage((prev) => prev + 1)}
              className="group ml-auto flex items-center"
            >
              <span className="font-merriweather text-xs text-purple/70 duration-300 group-hover:text-purple xs:text-sm">
                artículos anteriores
              </span>
              <RiArrowDropRightFill className="text-4xl text-purple/70 duration-300 group-hover:text-purple" />
            </button>
          ) : null}
        </div>
      </section>
    </div>
  );
};
