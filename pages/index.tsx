import { NextPage, GetStaticProps } from "next";

//* utils *//
import { getAllArticleFilesMetadata } from "@/utils";

//* components *//
import { ArticlesFeed } from "@/components/article";
import { MeCard } from "@/components/ui";

//* layout *//
import { MainLayout } from "@/layout";

//* interfaces *//
import { IArticleMetadata } from "@/interfaces/IArticleMetadata";

interface Props {
  allArticleFilesMetadata: IArticleMetadata[];
}

const Home: NextPage<Props> = ({ allArticleFilesMetadata }) => {
  return (
    <MainLayout
      title="Whiteblack"
      description="Pagina principal del blog sobre programacion whiteblack"
    >
      <div className="flex gap-8">
        <ArticlesFeed
          allArticleFilesMetadata={allArticleFilesMetadata}
          title="Últimos artículos"
        />
        <MeCard />
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let allArticleFilesMetadata: IArticleMetadata[] =
    await getAllArticleFilesMetadata();

  return {
    props: {
      allArticleFilesMetadata,
    },
  };
};

export default Home;
