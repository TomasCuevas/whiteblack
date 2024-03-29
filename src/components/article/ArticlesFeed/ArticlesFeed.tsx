//* COMPONENTS *//
import { ArticleCard, PaginationButtons, SectionTitle } from "@/components";

//* HOOK *//
import { usePagination } from "@/hooks";

//* INTERFACES *//
import { IArticleMetadata } from "@/interfaces";

interface Props {
  allArticleFilesMetadata: IArticleMetadata[];
  title: string;
}

export const ArticlesFeed: React.FC<Props> = ({
  allArticleFilesMetadata,
  title,
}) => {
  const { pagination, increment, decrement } = usePagination();

  return (
    <div>
      <SectionTitle title={title} />
      <section className="mt-3 flex w-full flex-col gap-6">
        {allArticleFilesMetadata
          .slice(pagination === 1 ? 0 : (pagination - 1) * 4, pagination * 4)
          .map((article) => (
            <ArticleCard articleMetadata={article} key={article.slug} />
          ))}
        <PaginationButtons
          decrement={decrement}
          increment={increment}
          itemsLength={allArticleFilesMetadata.length}
          itemsPerPage={4}
          pagination={pagination}
        />
      </section>
    </div>
  );
};
