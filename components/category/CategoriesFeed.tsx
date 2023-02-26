//* components *//
import { CategoryCard } from "./";
import { SectionTitle } from "../ui";

//* interfaces *//
import { ICategoryMetadata } from "../../interfaces/ICategoryMetadata";

interface Props {
  allCategoryFilesMetadata: ICategoryMetadata[];
}

export const CategoriesFeed: React.FC<Props> = ({
  allCategoryFilesMetadata,
}) => {
  return (
    <>
      <SectionTitle title="Todas las categorías" />
      <section className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 mdx:grid-cols-3 xl:grid-cols-4">
        {allCategoryFilesMetadata.map((category) => (
          <CategoryCard key={category.title} categoryMetadata={category} />
        ))}
      </section>
    </>
  );
};
