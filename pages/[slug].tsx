import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";

//* utils *//
import { getAllH2andH3 } from "@/utils/getAllH2andH3/getAllH2andH3";
import { PTagPreviousH2 } from "@/utils/PTagPreviousH2/PTagPreviousH2";
import { getArticleFileBySlug, getAllArticleFiles } from "@/utils";

//* components *//
import { ArticleHeader, ArticleSidebarContent } from "@/components/article";

//* layout *//
import { MainLayout } from "@/layout";

//* styles *//
import "highlight.js/styles/atom-one-dark.css";

//* interfaces *//
import { IArticleMetadata } from "@/interfaces";

interface Props {
  source: any;
  metadata: IArticleMetadata;
}

const ArticlePage: NextPage<Props> = ({ metadata, source }) => {
  const [h2, setH2] = useState<any[]>([]);
  const [h3, setH3] = useState<any[][]>([[]]);

  useEffect(() => {
    setH2(getAllH2andH3().allH2);
    setH3(getAllH2andH3().allH3);
  }, []);

  useEffect(() => {
    PTagPreviousH2();
  }, []);

  return (
    <MainLayout
      description={metadata.description}
      title={`${metadata.title} | Whiteblack`}
      keywords={metadata.keywords}
      image={metadata.image}
    >
      <article className="mx-auto max-w-[800px]">
        <ArticleHeader metadata={metadata} />
        <div id="article" className="font-merriweather">
          <MDXRemote {...source} />
        </div>
      </article>

      <ArticleSidebarContent allH2={h2} allH3={h3} />
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const posts = await getAllArticleFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { metadata, source } = await getArticleFileBySlug((params as any).slug);

  return {
    props: {
      source,
      metadata,
    },
  };
};

export default ArticlePage;
