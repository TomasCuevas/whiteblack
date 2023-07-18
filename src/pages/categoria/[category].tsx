import { GetStaticProps, GetStaticPaths, NextPage } from "next";

//* UTILS *//
import {
  getAllArticleFilesMetadata,
  getAllCategoryFiles,
  getCategoryFileBySlug,
} from "@/utils";

//* COMPONENTS *//
import { ArticlesFeedByCategory, CategoryHeader } from "@/components";

//* LAYOUT *//
import { MainLayout } from "@/layout";

//* STYLES *//
import "highlight.js/styles/atom-one-dark.css";

//* INTERFACES *//
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
      image={`/images/categories/${metadata.category}.svg`}
    >
      <CategoryHeader categoryMetadata={metadata} />
      <ArticlesFeedByCategory
        allArticleFilesMetadata={allArticleFilesMetadata}
        title={metadata.title}
      />
    </MainLayout>
  );
};

//! GET STATIC PATHS
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

//! GET STATIC PROPS
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
