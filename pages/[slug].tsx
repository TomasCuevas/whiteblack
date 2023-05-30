import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";

//* utils *//
import { getArticleFileBySlug, getAllArticleFiles } from "@/utils";
import { getAllSectionsToSidebar } from "@/utils/getAllSectionsToSidebar/getAllSectionsToSidebar";
import { h2Observers, H3Observers } from "@/utils/observers/observers";
import { PTagPreviousH2 } from "@/utils/PTagPreviousH2/PTagPreviousH2";

//* components *//
import {
  ArticleFooter,
  ArticleHeader,
  ArticleSidebarContent,
} from "@/components/article";
import { MDXComponents } from "@/components/mdx";

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
  const [h2Sections, setH2Sections] = useState<HTMLElement[]>([]);
  const [h3Sections, setH3Sections] = useState<HTMLElement[][]>([[]]);

  useEffect(() => {
    setH2Sections(getAllSectionsToSidebar().allH2Sections);
    setH3Sections(getAllSectionsToSidebar().allH3Sections);
  }, []);

  useEffect(() => {
    PTagPreviousH2();
  }, []);

  useEffect(() => {
    if (h2Sections) h2Observers(h2Sections);
  }, [h2Sections]);

  useEffect(() => {
    if (h3Sections) H3Observers(h3Sections);
  }, [h3Sections]);

  return (
    <MainLayout
      description={metadata.description}
      title={`${metadata.title} | Whiteblack`}
      keywords={metadata.keywords}
      image={metadata.image}
    >
      <article className="max-w-[800px]">
        <ArticleHeader metadata={metadata} />
        <div id="article" className="font-merriweather">
          <MDXRemote {...source} components={MDXComponents} />
        </div>
        <ArticleFooter metadata={metadata} />
      </article>

      <ArticleSidebarContent allH2={h2Sections} allH3={h3Sections} />
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
