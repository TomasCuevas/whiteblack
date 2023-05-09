//* data *//
import { categoryColors } from "@/data";

//* interfaces *//
import { ICategoryMetadata } from "@/interfaces";

interface Props {
  categoryMetadata: ICategoryMetadata;
}

export const CategoryHeader: React.FC<Props> = ({ categoryMetadata }) => {
  const category = categoryMetadata.category.toLowerCase();

  return (
    <section
      className="flex justify-center rounded-md p-4 shadow-lg  sm:justify-start sm:pl-12 md:py-8 md:px-20 mdx:px-32"
      style={{
        backgroundColor:
          categoryColors[category as keyof typeof categoryColors],
      }}
    >
      <div className="flex max-w-[500px] flex-col gap-4">
        <div className="flex w-full gap-4 border-b border-white/10 pb-4">
          <div className="w-14 md:w-[72px]">
            <img
              src={`/images/categories/${categoryMetadata.category.toLowerCase()}.svg`}
              alt={`${categoryMetadata.title} logo`}
            />
          </div>
          <div>
            <h1 className="font-merriweather text-lg font-bold text-white md:text-2xl">
              {categoryMetadata.category}
            </h1>
            <h2 className="font-inter text-sm text-gray-300">
              {categoryMetadata.subtitle}
            </h2>
          </div>
        </div>
        <div>
          <p className="font-inter text-sm text-gray-300">
            {categoryMetadata.description}
          </p>
        </div>
      </div>
    </section>
  );
};
