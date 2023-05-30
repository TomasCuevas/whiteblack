//* components *//
import { ArticleCardWithImage } from "@/components/article";
import { SectionTitle } from "@/components/ui";

//* interfaces *//
import { IArticleMetadata } from "@/interfaces";

interface Props {
  allArticleFilesMetadata: IArticleMetadata[];
  title: string;
}

export const ArticlesFeedByCategory: React.FC<Props> = ({
  allArticleFilesMetadata,
  title,
}) => {
  return (
    <div>
      <SectionTitle title={title} />
      <section className="mt-3 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {allArticleFilesMetadata.map((article) => (
          <ArticleCardWithImage key={article.slug} articleMetadata={article} />
        ))}
      </section>
    </div>
  );
};