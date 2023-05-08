import { GetStaticProps, GetStaticPaths, NextPage } from "next";

//* helpers *//
import {
  getAllArticleFilesMetadata,
  getAllCategoryFiles,
  getCategoryFileBySlug,
} from "@/utils";

//* components *//
import { ArticlesFeed } from "@/components/article";
import { CategoryHeader } from "@/components/category";

//* layout *//
import { MainLayout } from "@/layout";

//* styles *//
import "highlight.js/styles/atom-one-dark.css";

//* interfaces *//
import { ICategoryMetadata, IArticleMetadata } from "@/interfaces";

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
      <CategoryHeader categoryMetadata={metadata} />
      <ArticlesFeed
        allArticleFilesMetadata={allArticleFilesMetadata}
        title={`Articulos sobre ${metadata.category}`}
      />
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

  const allArticleFilesMetadata = await getAllArticleFilesMetadata(
    categoryMetadata.category
  );

  return {
    props: {
      metadata: categoryMetadata,
      allArticleFilesMetadata: allArticleFilesMetadata,
    },
  };
};

export default ArticlePage;
