//* interfaces *//
import Link from "next/link";
import { ICategoryMetadata } from "../../interfaces/ICategoryMetadata";

interface Props {
  categoryMetadata: ICategoryMetadata;
}

export const CategoryItem: React.FC<Props> = ({ categoryMetadata }) => {
  return (
    <article>
      <Link
        href={`/categoria/${categoryMetadata.category.toLowerCase()}`}
        className="group flex h-full items-center gap-2 rounded-md bg-light/50 p-4 duration-300 hover:bg-light"
      >
        <div className="flex max-h-[50px] w-2/12 max-w-[50px] items-center">
          <img
            src={`/images/categories/${categoryMetadata.category.toLowerCase()}.svg`}
            alt={`${categoryMetadata.category} logo`}
            className="w-3/4"
          />
        </div>
        <div className="flex w-10/12 flex-col gap-1">
          <h2 className="font-medium text-white">
            {categoryMetadata.category}
          </h2>
          <h6 className="text-light] text-sm text-gray-300">
            {categoryMetadata.subtitle}
          </h6>
        </div>
      </Link>
    </article>
  );
};
