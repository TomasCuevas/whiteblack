import Link from "next/link";

//* interfaces *//
import { ICategoryMetadata } from "@/interfaces";

interface Props {
  categoryMetadata: ICategoryMetadata;
}

export const CategoryCard: React.FC<Props> = ({ categoryMetadata }) => {
  return (
    <article>
      <Link
        href={`/categoria/${categoryMetadata.category.toLowerCase()}`}
        className="group flex h-full items-center gap-2 rounded-md bg-light/50 p-4 hover:bg-light hover:outline-double hover:outline-white"
      >
        <div className="flex max-h-[50px] max-w-[50px] items-center">
          <img
            src={`/images/categories/${categoryMetadata.category.toLowerCase()}.svg`}
            alt={`${categoryMetadata.category} logo`}
            className="w-3/4"
          />
        </div>
        <div className="flex h-full flex-col justify-center">
          <h2 className="font-merriweather text-sm font-black capitalize text-white xs:text-base sm:text-lg">
            {categoryMetadata.category}
          </h2>
          <h3 className="font-sm font-inter text-sm font-light text-gray-400 group-hover:text-gray-300">
            {categoryMetadata.subtitle}
          </h3>
        </div>
      </Link>
    </article>
  );
};
