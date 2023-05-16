import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";

//* utils *//
import { getArticleFileBySlug, getAllArticleFiles } from "@/utils";
import { getAllH2andH3 } from "@/utils/getAllH2andH3/getAllH2andH3";

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
    const { allH2, allH3 } = getAllH2andH3();
    setH2(allH2);
    setH3(allH3);
  }, []);

  return (
    <MainLayout
      description={metadata.description}
      title={`${metadata.title} | Whiteblack`}
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
