import { NextPage, GetStaticProps } from "next";

//* utils *//
import { getAllArticleFilesMetadata } from "../utils";

//* components *//
import { MainArticlesFeed } from "../components/article";

//* layout *//
import { MainLayout } from "../components/layout";

//* interfaces *//
import { IArticleMetadata } from "../interfaces/IArticleMetadata";

interface Props {
  allArticleFilesMetadata: IArticleMetadata[];
}

const Home: NextPage<Props> = ({ allArticleFilesMetadata }) => {
  return (
    <MainLayout
      title="whiteblack | Blog"
      description="Pagina principal del blog sobre programacion whiteblack"
    >
      <MainArticlesFeed allArticleFilesMetadata={allArticleFilesMetadata} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let allArticleFilesMetadata: any[] = await getAllArticleFilesMetadata().map(
    (article) => {
      article.date = new Date(article.date).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });

      return article;
    }
  );

  return {
    props: {
      allArticleFilesMetadata,
    },
  };
};

export default Home;
