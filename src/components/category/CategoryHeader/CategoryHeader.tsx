//* DATA *//
import { categoryColors } from "@/data";

//* INTERFACES *//
import { ICategoryMetadata } from "@/interfaces";

interface Props {
  categoryMetadata: ICategoryMetadata;
}

export const CategoryHeader: React.FC<Props> = ({ categoryMetadata }) => {
  const category = categoryMetadata.category;

  return (
    <section
      className="flex justify-center rounded-md p-4 shadow-lg shadow-black/10 dark:shadow-black/50 sm:justify-start sm:pl-12 md:py-8 md:px-20 mdx:px-32"
      style={{
        backgroundColor: categoryColors[category],
      }}
    >
      <div className="flex max-w-[550px] flex-col gap-4">
        <div className="flex w-full gap-4 border-b border-dark/20 dark:border-white/10 pb-4">
          <div className="w-14 md:w-[72px]">
            <img
              src={`/images/categories/${categoryMetadata.category.toLowerCase()}.svg`}
              alt={`${categoryMetadata.title} logo`}
              className="w-[72px]"
            />
          </div>
          <div>
            <h1 className="font-merriweather text-lg font-bold capitalize text-dark dark:text-white md:text-3xl">
              {categoryMetadata.category}
            </h1>
            <h2 className="text-md font-inter text-gray-900 dark:text-gray-300">
              {categoryMetadata.subtitle}
            </h2>
          </div>
        </div>
        <div>
          <p className="text-md font-inter text-gray-900 dark:text-gray-300">
            {categoryMetadata.description}
          </p>
        </div>
      </div>
    </section>
  );
};
