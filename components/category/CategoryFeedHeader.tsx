//* data *//
import { categoryColors } from "../../data";

//* interfaces *//
import { ICategoryMetadata } from "../../interfaces/ICategoryMetadata";

interface Props {
  categoryMetadata: ICategoryMetadata;
}

export const CategoryFeedHeader: React.FC<Props> = ({ categoryMetadata }) => {
  const category = categoryMetadata.category.toLowerCase();

  return (
    <section
      className="flex justify-center rounded-md p-4 shadow-lg  sm:justify-start sm:pl-12 md:py-8 md:pl-20 mdx:pl-32"
      style={{
        backgroundColor:
          categoryColors[category as keyof typeof categoryColors],
        boxShadow: `0px 0px 20px ${
          categoryColors[category as keyof typeof categoryColors]
        }`,
      }}
    >
      <div className="flex max-w-[500px] flex-col gap-4">
        <div className="flex gap-4">
          <div className="w-14 md:w-[72px]">
            <img
              src={`/images/categories/${categoryMetadata.category.toLowerCase()}.svg`}
              alt={`${categoryMetadata.title} logo`}
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white md:text-xl">
              {categoryMetadata.category}
            </h1>
            <h2 className="text-sm text-[#9ca3af]">
              {categoryMetadata.subtitle}
            </h2>
          </div>
        </div>
        <div>
          <p className="text-sm text-[#9ca3af]">
            {categoryMetadata.description}
          </p>
        </div>
      </div>
    </section>
  );
};
