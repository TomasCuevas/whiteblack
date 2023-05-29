import Link from "next/link";

//* data *//
import { categoryColors } from "@/data";

//* interfaces *//
import { IArticleMetadata } from "@/interfaces";

interface Props {
  metadata: IArticleMetadata;
}

export const ArticleFooter: React.FC<Props> = ({ metadata }) => {
  const color = categoryColors[metadata.category].slice(0, -2);

  return (
    <footer
      style={{ borderColor: color }}
      className="group mt-10 overflow-hidden rounded-xl border duration-200 hover:scale-[103%]"
    >
      <Link
        href={`/categoria/${metadata.category}`}
        className="flex w-full items-center gap-4 p-4 md:gap-6 md:px-10 md:py-5"
      >
        <>
          <img
            src={`/images/categories/${metadata.category.toLowerCase()}.svg`}
            alt={`${metadata.category} logo`}
            className="w-[60px] md:w-[70px]"
          />
          <p
            style={{
              color: `${
                categoryColors[metadata.category as keyof typeof categoryColors]
              }`.slice(0, -2),
            }}
            className="text-lg font-medium text-white md:text-xl md:font-bold lg:text-2xl"
          >
            Más artículos sobre{" "}
            <span className="capitalize">{metadata.category}</span>
          </p>
        </>
      </Link>
    </footer>
  );
};
