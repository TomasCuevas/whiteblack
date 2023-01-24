import { NextPage, GetStaticProps } from "next";

//* utils *//
import { getAllFilesMetadata } from "../utils";

//* components *//
import { MainArticlesFeed } from "../components/articles";

//* layout *//
import { MainLayout } from "../components/layout";

//* interfaces *//
import { IArticleMetadata } from "../interfaces/IArticleMetadata";

interface Props {
  allFilesMetadata: IArticleMetadata[];
}

const Home: NextPage<Props> = ({ allFilesMetadata }) => {
  return (
    <MainLayout
      title="whiteblack | Blog"
      description="Pagina principal del blog sobre programacion whiteblack"
    >
      <MainArticlesFeed allFilesMetadata={allFilesMetadata} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let allFilesMetadata: any[] = await getAllFilesMetadata().map((article) => {
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
      allFilesMetadata,
    },
  };
};

export default Home;
