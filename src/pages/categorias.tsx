import { NextPage, GetStaticProps } from "next";

//* UTILS *//
import {
  getAllCategoryFilesMetadata,
  getAllArticleFilesMetadata,
} from "@/utils";

//* COMPONENTS *//
import { CategoriesFeed } from "@/components";

//* LAYOUT *//
import { MainLayout } from "@/layout";

//* INTERFACES *//
import { ICategoryMetadata } from "@/interfaces";

interface Props {
  categoriesMetadata: ICategoryMetadata[];
}

const Categorias: NextPage<Props> = ({ categoriesMetadata }) => {
  return (
    <MainLayout
      title="Categorías | Whiteblack"
      description="Página donde se listan todas las categorías existentes en el blog"
      image="/images/og/categories-og-image.jpg"
    >
      <CategoriesFeed allCategoryFilesMetadata={categoriesMetadata} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let allCategoryFilesMetadata = await getAllCategoryFilesMetadata();
  const allArticles = await getAllArticleFilesMetadata();

  const categoriesMetadata = allCategoryFilesMetadata.filter((category) => {
    const articles = allArticles.filter(
      (article) =>
        article.category.toLowerCase() === category.category.toLowerCase()
    );

    return articles.length > 0 ? category : null;
  });

  return {
    props: {
      categoriesMetadata,
    },
  };
};

export default Categorias;
