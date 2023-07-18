import fs from "fs";
import path from "path";
import matter from "gray-matter";

//* INTERFACE *//
import { ICategoryMetadata } from "@/interfaces";

const root = process.cwd();

export const getAllCategoryFiles = () => {
  return fs.readdirSync(path.join(root, "src", "content", "categories"));
};

export const getCategoryFileBySlug = async (
  slug: string
): Promise<ICategoryMetadata> => {
  const mdxFile = fs.readFileSync(
    path.join(root, "src", "content", "categories", `${slug}.md`),
    "utf-8"
  );

  const { data } = await matter(mdxFile);

  return data as ICategoryMetadata;
};

export const getAllCategoryFilesMetadata = (): ICategoryMetadata[] => {
  const files: string[] = getAllCategoryFiles();

  return files
    .reduce((allPosts: any, postSlug: string) => {
      const mdxFile = fs.readFileSync(
        path.join(root, "src", "content", "categories", postSlug),
        "utf-8"
      );
      const { data } = matter(mdxFile);

      return [{ ...data, slug: postSlug.replace(".md", "") }, ...allPosts];
    }, [])
    .sort((a: ICategoryMetadata, b: ICategoryMetadata) =>
      a.category.localeCompare(b.category)
    );
};
