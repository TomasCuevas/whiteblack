import Link from "next/link";
import { useRouter } from "next/router";

//* interface *//
interface Props {
  link: string;
  text: string;
}

export const NavLink: React.FC<Props> = ({ link, text }) => {
  const { pathname } = useRouter();

  return (
    <li
      className={`group flex items-center border-b-2 ${
        pathname === link ? "border-white" : "border-[#0000]"
      }`}
    >
      <Link
        href={link}
        className="flex h-full items-center justify-center px-5"
      >
        <span
          className={`font-inter text-lg font-extralight ${
            pathname === link ? "text-white" : "text-white/50"
          } group-hover:text-white`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};
