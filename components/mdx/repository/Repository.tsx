import Link from "next/link";

//* icon *//
import { GoMarkGithub } from "react-icons/go";

interface Props {
  url?: string;
}

export const Repository: React.FC<Props> = ({ url = "/" }) => {
  return (
    <Link href={url} target="__blank">
      <div className="flex w-full items-center gap-5 rounded-full bg-white px-10 py-2 duration-200 hover:scale-[103%] hover:bg-gray-200">
        <GoMarkGithub className="text-4xl text-black" />
        <strong
          style={{ color: "black", fontWeight: 800 }}
          className="text-lg sm:text-xl"
        >
          Explorar en GitHub
        </strong>
      </div>
    </Link>
  );
};
