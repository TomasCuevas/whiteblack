import { GetServerSideProps, NextPage } from "next";

//* utils *//
import { getAllCategoryFilesMetadata } from "../utils";

//* components *//
import { CategoriesFeed } from "../components/category";

//* layout *//
import { MainLayout } from "../components/layout";

//* interfaces *//
import { ICategoryMetadata } from "../interfaces/ICategoryMetadata";

interface Props {
  allCategoryFilesMetadata: ICategoryMetadata[];
}

const Categorias: NextPage<Props> = ({ allCategoryFilesMetadata }) => {
  return (
    <MainLayout
      title="Categorías | whiteblack"
      description="Página donde se listan todas las categorías existentes en el blog"
    >
      <CategoriesFeed allCategoryFilesMetadata={allCategoryFilesMetadata} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCategoryFilesMetadata = await getAllCategoryFilesMetadata();

  return {
    props: {
      allCategoryFilesMetadata,
    },
  };
};

export default Categorias;
