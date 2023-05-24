import { GetStaticProps, GetStaticPaths, NextPage } from "next";

//* utils *//
import {
  getAllArticleFilesMetadata,
  getAllCategoryFiles,
  getCategoryFileBySlug,
} from "@/utils";

//* components *//
import { ArticlesFeedByCategory } from "@/components/article";
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
    <MainLayout
      description={metadata.description}
      title={`${metadata.title} | Whiteblack`}
    >
      <CategoryHeader categoryMetadata={metadata} />
      <ArticlesFeedByCategory
        allArticleFilesMetadata={allArticleFilesMetadata}
        title={`Articulos sobre ${metadata.category}`}
      />
    </MainLayout>
  );
};

//! get static paths
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

//! get static props
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
