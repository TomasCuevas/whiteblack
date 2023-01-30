import { GetStaticProps, GetStaticPaths, NextPage } from "next";

//* helpers *//
import {
  getAllArticleFilesMetadataByCategory,
  getAllCategoryFiles,
  getCategoryFileBySlug,
} from "../../utils";

//* components *//
import { ArticleItem } from "../../components/article";
import { CategoryFeedHeader } from "../../components/category";

//* layout *//
import { MainLayout } from "../../components/layout";

//* styles *//
import "highlight.js/styles/atom-one-dark.css";

//* interfaces *//
import { ICategoryMetadata } from "../../interfaces/ICategoryMetadata";
import { IArticleMetadata } from "../../interfaces/IArticleMetadata";

interface Props {
  metadata: ICategoryMetadata;
  allArticleFilesMetadata: IArticleMetadata[];
}

const ArticlePage: NextPage<Props> = ({
  metadata,
  allArticleFilesMetadata,
}) => {
  return (
    <MainLayout description={metadata.description} title={metadata.title}>
      <CategoryFeedHeader categoryMetadata={metadata} />
      <section className="mt-5 flex flex-col gap-1">
        {allArticleFilesMetadata.map((article) => (
          <ArticleItem key={article.title} articleMetadata={article} />
        ))}
      </section>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const categories = await getAllCategoryFiles();
  const paths = categories.map((category) => ({
    params: {
      category: category.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categoryMetadata = await getCategoryFileBySlug(
    (params as any).category
  );

  const allArticleFilesMetadata = await getAllArticleFilesMetadataByCategory(
    categoryMetadata.category
  ).map((article) => {
    article.date = new Date(article.date).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });

    return article;
  });

  return {
    props: {
      metadata: categoryMetadata,
      allArticleFilesMetadata: allArticleFilesMetadata,
    },
  };
};

export default ArticlePage;
