import { NextPage, GetStaticProps } from "next";

//* UTILS *//
import { getAllArticleFilesMetadata } from "@/utils";

//* COMPONENTS *//
import { ArticlesFeed, MeCard } from "@/components";

//* LAYOUT *//
import { MainLayout } from "@/layout";

//* INTERFACES *//
import { IArticleMetadata } from "@/interfaces";

interface Props {
  allArticleFilesMetadata: IArticleMetadata[];
}

const Home: NextPage<Props> = ({ allArticleFilesMetadata }) => {
  return (
    <MainLayout
      title="Whiteblack"
      description="Pagina principal del blog sobre programacion whiteblack"
      image="/images/og/default-og-image.jpg"
    >
      <div className="grid grid-cols-1 gap-8 mdx:grid-cols-[3fr_1fr]">
        <ArticlesFeed
          allArticleFilesMetadata={allArticleFilesMetadata}
          title="Últimos artículos"
        />
        <MeCard />
      </div>
    </MainLayout>
  );
};

//! GET STATIC PROPS
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
