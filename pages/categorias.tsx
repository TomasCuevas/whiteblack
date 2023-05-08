import { GetServerSideProps, NextPage } from "next";

//* utils *//
import {
  getAllCategoryFilesMetadata,
  getAllArticleFilesMetadata,
} from "@/utils";

//* components *//
import { CategoriesFeed } from "@/components/category";

//* layout *//
import { MainLayout } from "@/layout";

//* interfaces *//
import { ICategoryMetadata } from "@/interfaces/ICategoryMetadata";

interface Props {
  categoriesMetadata: ICategoryMetadata[];
}

const Categorias: NextPage<Props> = ({ categoriesMetadata }) => {
  return (
    <MainLayout
      title="Categorías | Whiteblack"
      description="Página donde se listan todas las categorías existentes en el blog"
    >
      <CategoriesFeed allCategoryFilesMetadata={categoriesMetadata} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
