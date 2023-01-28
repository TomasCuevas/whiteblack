//* components *//
import { CategoryItem } from "./CategoryItem";

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
      <section>
        <h3 className="fo/nt-medium text-xl text-orange">
          Todas las categorías
        </h3>
      </section>
      <section className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 mdx:grid-cols-3 xl:grid-cols-4">
        {allCategoryFilesMetadata.map((category) => (
          <CategoryItem key={category.title} categoryMetadata={category} />
        ))}
      </section>
    </>
  );
};
