import { GetServerSideProps, NextPage } from "next";

//* utils *//
import {
  getAllCategoryFilesMetadata,
  getAllArticleFilesMetadataByCategory,
} from "../utils";

//* components *//
import { CategoriesFeed } from "../components/category";

//* layout *//
import { MainLayout } from "../components/layout";

//* interfaces *//
import { ICategoryMetadata } from "../interfaces/ICategoryMetadata";

interface Props {
  categoriesMetadata: ICategoryMetadata[];
}

const Categorias: NextPage<Props> = ({ categoriesMetadata }) => {
  return (
    <MainLayout
      title="Categorías | whiteblack"
      description="Página donde se listan todas las categorías existentes en el blog"
    >
      <CategoriesFeed allCategoryFilesMetadata={categoriesMetadata} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let allCategoryFilesMetadata = await getAllCategoryFilesMetadata();

  const categoriesMetadata = allCategoryFilesMetadata.filter((category) => {
    const articles = getAllArticleFilesMetadataByCategory(category.category);

    if (articles.length > 0) return category;
  });

  console.log(categoriesMetadata);

  return {
    props: {
      categoriesMetadata,
    },
  };
};

export default Categorias;
