import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";

//* interface *//
import { IArticleMetadata } from "../interfaces/IArticleMetadata";

const root = process.cwd();

export const getAllArticleFiles = () => {
  return fs.readdirSync(path.join(root, "content", "articles"));
};

export const getArticleFileBySlug = async (slug: string) => {
  const mdxFile = fs.readFileSync(
    path.join(root, "content", "articles", `${slug}.mdx`),
    "utf-8"
  );

  const { data, content } = await matter(mdxFile);

  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    source,
    metadata: {
      slug,
      ...data,
    },
  };
};

export const getAllArticleFilesMetadata = async (
  category?: string
): Promise<IArticleMetadata[]> => {
  const files: string[] = getAllArticleFiles();

  const filesWithMetadata: IArticleMetadata[] = files
    .reduce((allPosts: any, postSlug: string) => {
      const mdxFile = fs.readFileSync(
        path.join(root, "content", "articles", postSlug),
        "utf-8"
      );
      const { data } = matter(mdxFile);

      if (
        category &&
        (data as IArticleMetadata).category.toLowerCase() !==
          category.toLowerCase()
      ) {
        return [...allPosts];
      }

      return [
        {
          ...data,
          slug: postSlug.replace(".mdx", ""),
        },
        ...allPosts,
      ];
    }, [])
    .sort((a, b) => b.date.localeCompare(a.date));

  for await (const iterator of filesWithMetadata) {
    const source = await serialize(iterator.cardDescription, {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    });

    iterator.cardDescription = source as unknown as string;
  }

  return filesWithMetadata;
};
