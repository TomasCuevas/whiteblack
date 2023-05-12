import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";

//* helpers *//
import { getArticleFileBySlug, getAllArticleFiles } from "@/utils";

//* components *//
import { ArticleHeader } from "@/components/article";

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
  return (
    <MainLayout
      description={metadata.description}
      title={`${metadata.title} | Whiteblack`}
    >
      <article className="mx-auto max-w-[800px]">
        <ArticleHeader metadata={metadata} />
        <div className="article font-merriweather">
          <MDXRemote {...source} />
        </div>
      </article>
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
